// ErrorConsole.jsx — React glue for the dev Error Console. Rules: .cursor/rules/error-log.mdc
// 1) main.jsx:   import './error-console.setup.js'  (see README) — or call errorLog.init(...) once before render
// 2) App.jsx:    <ErrorBoundary><App /></ErrorBoundary>  and  <ErrorConsole />  once, near the root
import { Component, useEffect } from 'react';
import { errorLog } from './error-log.js';
import { mountErrorConsole } from './error-console.native.js';

/** Mounts the popup once (dev only). Renders nothing. */
export function ErrorConsole() {
  useEffect(() => {
    if (!errorLog.available()) return undefined;
    const ui = mountErrorConsole(errorLog);
    return () => ui.destroy();
  }, []);
  return null;
}

/** Reports React render errors to the console, then shows a friendly fallback (never the raw error in production). */
export class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error, info) {
    errorLog.log({ source: 'ui', title: `Render error: ${error?.name || 'Error'}`, message: error?.message, stack: `${error?.stack || ''}\n${info?.componentStack || ''}` });
  }
  render() {
    if (this.state.failed) return this.props.fallback ?? <p role="alert">Something went wrong. Please reload the page.</p>;
    return this.props.children;
  }
}
