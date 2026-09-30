import { useCallback, useEffect, useRef, useState } from 'react';
import { slides } from './slides.js';

const fromHash = () => Math.max(0, Math.min(slides.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1));

function Points({ items }) {
  return <ul className="points">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}

function Slide({ s }) {
  return (
    <>
      {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
      {s.type === 'title' ? <h1>{s.title}</h1> : <h2>{s.title}</h2>}
      {s.lead && s.type !== 'points' && s.type !== 'swatches' && <p className="lead">{s.lead}</p>}
      {s.type === 'title' && s.sub && <p className="lead">{s.sub}</p>}

      {s.type === 'points' && <><Points items={s.points} />{s.lead && <p className="lead">{s.lead}</p>}</>}

      {s.type === 'cards' && (
        <div className="grid">{s.cards.map((c) => <div className="card" key={c.h}><h3>{c.h}</h3><p>{c.p}</p></div>)}</div>
      )}

      {s.type === 'split' && (
        <div className="grid">
          {[s.left, s.right].map((c) => <div className="card" key={c.h}><h3>{c.h}</h3><Points items={c.points} /></div>)}
        </div>
      )}

      {s.type === 'swatches' && (
        <>
          {s.lead && <p className="lead">{s.lead}</p>}
          <div className="swatches">
            {s.swatches.map((w) => (
              <div className="swatch" key={w.name}><i style={{ background: w.hex }} /><span>{w.name} {w.hex}</span></div>
            ))}
          </div>
          {s.foot && <p className="lead">{s.foot}</p>}
        </>
      )}

      {s.type === 'devices' && (
        <div className="device-row">
          {s.devices.map((d) => <div className="device" key={d.h}><b>{d.h}</b>{d.p}</div>)}
        </div>
      )}

      {s.type === 'table' && (
        <div className="table-wrap">
          <table>
            <thead><tr>{s.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{s.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}

      {s.type === 'phases' && (
        <div className="phases">{s.phases.map(([id, t]) => <div className="phase" key={id}><b>{id}</b><span>{t}</span></div>)}</div>
      )}
    </>
  );
}

export default function Deck() {
  const [i, setI] = useState(fromHash);
  const touch = useRef(null);
  const go = useCallback((d) => setI((n) => Math.max(0, Math.min(slides.length - 1, n + d))), []);
  const fullscreen = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());

  useEffect(() => { history.replaceState(null, '', `#${i + 1}`); }, [i]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input,textarea')) return;
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(1); }
      else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === 'Home') setI(0);
      else if (e.key === 'End') setI(slides.length - 1);
      else if (e.key.toLowerCase() === 'f') fullscreen();
      else if (e.key.toLowerCase() === 'p') window.print();
    };
    const onHash = () => setI(fromHash());
    addEventListener('keydown', onKey);
    addEventListener('hashchange', onHash);
    return () => { removeEventListener('keydown', onKey); removeEventListener('hashchange', onHash); };
  }, [go]);

  return (
    <>
      <main
        className="deck"
        aria-roledescription="presentation"
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current === null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        {slides.map((s, k) => (
          <section key={k} className={`slide${k === i ? ' is-active' : ''}`} aria-label={s.title}>
            <Slide s={s} />
          </section>
        ))}
      </main>
      <nav className="bar" aria-label="Slide controls">
        <button className="btn" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
        <div className="progress" role="progressbar" aria-label="Progress"><i style={{ width: `${((i + 1) / slides.length) * 100}%` }} /></div>
        <span className="count" aria-live="polite">{i + 1} / {slides.length}</span>
        <button className="btn" onClick={() => go(1)} aria-label="Next slide">›</button>
        <button className="btn" onClick={fullscreen} aria-label="Fullscreen">⛶</button>
      </nav>
    </>
  );
}
