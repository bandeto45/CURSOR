/*
 * error-console.native.js — popup UI for the dev Error Console (plain JS, no framework).
 * Usage:  import { errorLog } from './error-log.js';  import { mountErrorConsole } from './error-console.native.js';
 *         errorLog.init({ enabled: import.meta.env?.DEV, env: 'local', healthUrl: '/health', getContext: () => ({ route: 'R-07', viewClass }) });
 *         mountErrorConsole(errorLog);
 * Mobile (<768): bottom sheet. Tablet/desktop: floating panel bottom-right. Non-modal; Esc closes.
 */
export function mountErrorConsole(log) {
  const css = `
  .ec{position:fixed;z-index:100;font:13px/1.45 system-ui,sans-serif;color:var(--fg,#23262b)}
  .ec-btn{position:fixed;left:12px;bottom:calc(12px + env(safe-area-inset-bottom));min-height:44px;padding:0 14px;border-radius:999px;border:1px solid var(--border,#e3e1dc);background:var(--surface,#fff);color:inherit;box-shadow:0 4px 14px rgba(0,0,0,.15);cursor:pointer;display:none;align-items:center;gap:8px}
  .ec-btn.show{display:inline-flex}.ec-btn.err{border-color:var(--danger,#c92a2a)}
  .ec-dot{width:9px;height:9px;border-radius:50%;background:var(--muted,#5d636b)}.err .ec-dot{background:var(--danger,#c92a2a)}
  .ec-panel{position:fixed;inset:auto 0 0 0;height:70vh;display:none;flex-direction:column;background:var(--surface,#fff);border:1px solid var(--border,#e3e1dc);border-radius:14px 14px 0 0;box-shadow:0 -8px 30px rgba(0,0,0,.22)}
  .ec-panel.open{display:flex}
  @media(min-width:768px){.ec-panel{inset:auto 16px 16px auto;width:440px;height:60vh;border-radius:14px}}
  .ec-h{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--border,#e3e1dc)}
  .ec-h b{flex:1}.ec-pill{padding:2px 8px;border-radius:999px;font-size:12px;border:1px solid var(--border,#e3e1dc)}.ec-pill.ok{color:#2b8a3e}.ec-pill.bad{color:#c92a2a}
  .ec button{font:inherit;color:inherit;background:transparent;border:1px solid var(--border,#e3e1dc);border-radius:8px;min-height:32px;padding:0 10px;cursor:pointer}
  .ec-tabs{display:flex;gap:6px;padding:8px 12px;border-bottom:1px solid var(--border,#e3e1dc)}.ec-tabs [aria-selected=true]{background:var(--primary,#3b5bdb);color:var(--primary-fg,#fff);border-color:transparent}
  .ec-list{flex:1;overflow:auto;overscroll-behavior:contain}.ec-row{padding:10px 12px;border-bottom:1px solid var(--border,#e3e1dc);cursor:pointer}
  .ec-row:hover{background:var(--bg,#f7f6f3)}.ec-t{font-weight:600}.ec-m{color:var(--muted,#5d636b);word-break:break-word}
  .ec-tag{font-size:11px;padding:1px 6px;border-radius:6px;background:var(--bg,#f7f6f3);margin-right:6px}
  .ec-d{display:none;padding:10px 12px;flex:1;overflow:auto}.ec-d.open{display:block}.ec-d pre{white-space:pre-wrap;word-break:break-word;background:var(--bg,#f7f6f3);padding:8px;border-radius:8px;max-height:40vh;overflow:auto}
  .ec-empty{padding:24px;text-align:center;color:var(--muted,#5d636b)}`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);

  const root = document.createElement('div'); root.className = 'ec';
  root.innerHTML = `<button class="ec-btn" aria-haspopup="dialog"><span class="ec-dot"></span><span class="ec-n">Errors</span></button>
  <section class="ec-panel" role="dialog" aria-label="Error console" aria-modal="false">
    <div class="ec-h"><b>Error console</b><span class="ec-pill ec-health">status…</span><button data-a="clear">Clear</button><button data-a="off">Turn off</button><button data-a="close" aria-label="Close">✕</button></div>
    <div class="ec-tabs" role="tablist"></div><div class="ec-list" role="list"></div>
    <div class="ec-d"><button data-a="back">‹ Back</button> <button data-a="copy">Copy for AI</button> <pre></pre></div>
  </section>`;
  document.body.append(root);
  const $ = (s) => root.querySelector(s), btn = $('.ec-btn'), panel = $('.ec-panel'), list = $('.ec-list'), det = $('.ec-d'), tabs = $('.ec-tabs');
  let tab = 'all', sel = null;
  const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  function render() {
    const c = log.counts(); const show = log.enabled;
    btn.classList.toggle('show', show); btn.classList.toggle('err', c.all > 0);
    $('.ec-n').textContent = c.all ? `${c.all} error${c.all > 1 ? 's' : ''}` : 'Console';
    tabs.innerHTML = ['all', 'ui', 'api', 'status'].map((k) => `<button role="tab" data-tab="${k}" aria-selected="${tab === k}">${k.toUpperCase()} ${c[k]}</button>`).join('');
    const rows = log.entries().filter((e) => tab === 'all' || e.source === tab);
    list.innerHTML = rows.length ? rows.map((e) => `<div class="ec-row" role="listitem" tabindex="0" data-id="${e.id}"><div class="ec-t"><span class="ec-tag">${e.source}</span>${esc(e.title)}${e.count > 1 ? ` ×${e.count}` : ''}</div><div class="ec-m">${esc(e.message)}</div></div>`).join('') : `<div class="ec-empty">No errors captured.</div>`;
    const h = log.health(); const p = $('.ec-health');
    p.textContent = h ? (h.ok ? `API ok ${h.ms}ms${h.env ? ' · ' + h.env : ''}` : 'API down') : 'status n/a'; p.className = 'ec-pill ec-health ' + (h ? (h.ok ? 'ok' : 'bad') : '');
  }
  const open = () => panel.classList.add('open'), close = () => { panel.classList.remove('open'); det.classList.remove('open'); list.style.display = ''; tabs.style.display = ''; };
  function detail(id) { const e = log.entries().find((x) => x.id === +id); if (!e) return; sel = e; det.querySelector('pre').textContent = log.toReport(e); det.classList.add('open'); list.style.display = 'none'; tabs.style.display = 'none'; }

  root.addEventListener('click', (ev) => {
    const t = ev.target.closest('[data-a],[data-tab],.ec-row,.ec-btn'); if (!t) return;
    if (t.classList.contains('ec-btn')) return panel.classList.contains('open') ? close() : open();
    if (t.dataset.tab) { tab = t.dataset.tab; return render(); }
    if (t.dataset.id) return detail(t.dataset.id);
    const a = t.dataset.a;
    if (a === 'clear') log.clear(); else if (a === 'off') { log.disable(); close(); } else if (a === 'close') close();
    else if (a === 'back') { det.classList.remove('open'); list.style.display = ''; tabs.style.display = ''; }
    else if (a === 'copy' && sel) navigator.clipboard?.writeText(log.toReport(sel)).then(() => { t.textContent = 'Copied ✓'; setTimeout(() => (t.textContent = 'Copy for AI'), 1200); });
  });
  root.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' && ev.target.dataset?.id) detail(ev.target.dataset.id); });
  addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && panel.classList.contains('open')) close(); });
  log.subscribe((type) => { render(); if (type === 'new' && log.enabled && log.autoOpen()) open(); });
  render();
  return { open, close, destroy: () => { root.remove(); st.remove(); } };
}
