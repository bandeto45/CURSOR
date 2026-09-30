/*
 * error-log.js — framework-agnostic core of the dev Error Console (no dependencies).
 * Captures UI errors, backend/API failures, and status problems into one redacted, de-duplicated store.
 * Turned on by: init({ enabled }) AND (?debug=1 | Ctrl+Shift+D | saved preference). Never enabled in production.
 * Rules: .cursor/rules/error-log.mdc
 */
const SECRET = /(pass(word)?|token|secret|authorization|cookie|card|cvv|cvc|otp|pin|ssn|api[-_]?key)/i;
const MAX_TEXT = 2000;

function redact(v, depth = 0) {
  if (v == null) return v;
  if (typeof v === 'string') {
    const s = v.length > MAX_TEXT ? v.slice(0, MAX_TEXT) + '…[truncated]' : v;
    return s.replace(/(Bearer\s+)[A-Za-z0-9._~+/=-]+/gi, '$1[redacted]');
  }
  if (typeof v !== 'object') return v;
  if (depth > 4) return '[depth]';
  if (Array.isArray(v)) return v.slice(0, 20).map((x) => redact(x, depth + 1));
  const out = {};
  for (const k of Object.keys(v).slice(0, 40)) out[k] = SECRET.test(k) ? '[redacted]' : redact(v[k], depth + 1);
  return out;
}

const classify = (status) =>
  status === 0 ? 'network' : status === 401 || status === 403 ? 'auth' : status === 404 ? 'not-found'
  : status === 408 || status === 429 ? 'throttle' : status >= 500 ? 'server' : status >= 400 ? 'client' : 'ok';

export const errorLog = (() => {
  let cfg = { enabled: false, env: 'local', autoOpen: true, maxEntries: 200, healthUrl: null, slowMs: 3000, getContext: () => ({}) };
  let on = false, seq = 0, entries = [], health = null, timer = null;
  const subs = new Set();
  const emit = (type) => subs.forEach((f) => { try { f(type); } catch {} });
  const pref = (v) => { try { return v === undefined ? localStorage.getItem('debugPanel') : localStorage.setItem('debugPanel', v ? '1' : '0'); } catch { return null; } };

  function add(e) {
    if (!on) return;
    const key = [e.source, e.title, e.status ?? '', e.method ?? '', e.url ?? ''].join('|');
    const hit = entries.find((x) => x.key === key);
    const ctx = redact(cfg.getContext?.() || {});
    if (hit) { hit.count++; hit.ts = Date.now(); hit.context = ctx; emit('update'); return; }
    entries.unshift({ id: ++seq, key, ts: Date.now(), count: 1, level: 'error', context: ctx, ...e,
      detail: redact(e.detail), stack: e.stack ? String(e.stack).slice(0, 4000) : undefined });
    if (entries.length > cfg.maxEntries) entries.length = cfg.maxEntries;
    emit('new');
  }

  function captureUi() {
    addEventListener('error', (ev) => {
      const t = ev.target;
      if (t && t !== window && (t.src || t.href)) return add({ source: 'ui', title: 'Resource failed to load', message: t.src || t.href, level: 'warn' });
      add({ source: 'ui', title: ev.error?.name || 'Error', message: ev.message, stack: ev.error?.stack, detail: { file: ev.filename, line: ev.lineno, col: ev.colno } });
    }, true);
    addEventListener('unhandledrejection', (ev) => {
      const r = ev.reason;
      add({ source: 'ui', title: r?.name || 'Unhandled promise rejection', message: r?.message || String(r), stack: r?.stack });
    });
    const ce = console.error.bind(console);
    console.error = (...a) => { ce(...a); add({ source: 'ui', title: 'console.error', message: a.map((x) => (x instanceof Error ? x.message : typeof x === 'string' ? x : JSON.stringify(redact(x)))).join(' '), level: 'warn' }); };
  }

  function wrapFetch() {
    if (wrapFetch.done) return; wrapFetch.done = true;
    const orig = window.fetch.bind(window);
    window.fetch = async (input, init = {}) => {
      const url = typeof input === 'string' ? input : input.url;
      const method = (init.method || input.method || 'GET').toUpperCase();
      const t0 = performance.now();
      try {
        const res = await orig(input, init);
        const ms = Math.round(performance.now() - t0);
        if (!res.ok) {
          let body; try { body = await res.clone().json(); } catch { try { body = (await res.clone().text()).slice(0, 500); } catch {} }
          add({ source: res.status >= 500 || res.status === 422 || res.status === 400 ? 'api' : 'status', title: `${res.status} ${res.statusText || classify(res.status)}`,
            message: body?.error?.message || body?.message || `${method} ${url}`, status: res.status, kind: classify(res.status), method, url, ms,
            requestId: body?.requestId || res.headers.get('X-Request-Id') || undefined,
            detail: { fields: body?.error?.fields, response: body, serverDebug: body?.debug } });
        } else if (ms > cfg.slowMs) {
          add({ source: 'status', title: `Slow response (${ms} ms)`, message: `${method} ${url}`, method, url, status: res.status, ms, level: 'warn' });
        }
        return res;
      } catch (err) {
        add({ source: 'status', title: 'Network error', message: `${method} ${url} — ${err.message}`, status: 0, kind: 'network', method, url, stack: err.stack });
        throw err;
      }
    };
  }

  function watchOnline() {
    addEventListener('offline', () => add({ source: 'status', title: 'Offline', message: 'The browser lost its network connection', status: 0, kind: 'network' }));
  }

  async function pollHealth() {
    if (!cfg.healthUrl || !on) return;
    const t0 = performance.now();
    try {
      const r = await fetch.call(window, cfg.healthUrl, { cache: 'no-store' });
      const b = await r.json().catch(() => ({}));
      health = { ok: r.ok && b.ok !== false, ms: Math.round(performance.now() - t0), env: b.env, version: b.version, db: b.db, at: Date.now() };
    } catch { health = { ok: false, ms: null, at: Date.now() }; }
    emit('health');
  }

  return {
    init(options = {}) {
      cfg = { ...cfg, ...options };
      if (cfg.env === 'production' && !cfg.allowInProduction) { on = false; return this; }   // hard stop
      const want = cfg.enabled && (/[?&]debug=1\b/.test(location.search) || pref() === '1' || cfg.forceOn);
      if (cfg.enabled) {
        captureUi(); wrapFetch(); watchOnline();
        addEventListener('keydown', (e) => { if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') { e.preventDefault(); this.toggle(); } });
      }
      if (want) this.enable();
      return this;
    },
    get enabled() { return on; },
    available: () => cfg.enabled && !(cfg.env === 'production' && !cfg.allowInProduction),
    enable() { if (!this.available()) return; on = true; pref(true); pollHealth(); timer = timer || setInterval(pollHealth, 10000); emit('toggle'); },
    disable() { on = false; pref(false); clearInterval(timer); timer = null; emit('toggle'); },
    toggle() { on ? this.disable() : this.enable(); },
    log: add,
    entries: () => entries.slice(),
    health: () => health,
    counts: () => ({ all: entries.length, ui: entries.filter((e) => e.source === 'ui').length, api: entries.filter((e) => e.source === 'api').length, status: entries.filter((e) => e.source === 'status').length }),
    clear() { entries = []; emit('clear'); },
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
    autoOpen: () => cfg.autoOpen,
    /** Markdown report the dev can paste to any AI. Starts with a ready shortcut. */
    toReport(e) {
      const c = e.context || {};
      const id = c.route || c.screen || '';
      return [
        `.fix ${id} ${e.title}: ${e.message}`.trim(),
        '', '```', `source: ${e.source}  level: ${e.level}  count: ${e.count}`,
        e.status !== undefined ? `status: ${e.status} (${e.kind || ''})` : '', e.method ? `request: ${e.method} ${e.url}` : '',
        e.requestId ? `requestId: ${e.requestId}` : '', c && Object.keys(c).length ? `context: ${JSON.stringify(c)}` : '',
        e.detail?.fields ? `fields: ${JSON.stringify(e.detail.fields)}` : '', e.detail?.serverDebug ? `server: ${JSON.stringify(e.detail.serverDebug)}` : '',
        e.stack ? `stack:\n${e.stack}` : '', '```',
      ].filter(Boolean).join('\n');
    },
  };
})();
