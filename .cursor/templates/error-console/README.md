# Error Console (dev popup for UI · backend · status errors)

Rules and behavior: `.cursor/rules/error-log.mdc`. When **on**, a badge + popup shows every UI error, failed API call (with the server's debug block), and status problem (404/401/403/5xx, network, slow, offline, API health). When **off**, nothing is captured or shown. **Never on in production.**

| File | Job |
|------|-----|
| `error-log.js` | Core (no dependencies): capture, redact, de-duplicate, health poll, `toReport()` |
| `error-console.native.js` | Popup UI (plain JS) — bottom sheet on mobile, floating panel on tablet/desktop |
| `ErrorConsole.jsx` | React: `<ErrorConsole />` + `<ErrorBoundary>` |

## Wire it (dev builds only)
```js
// error-console.setup.js — imported first in main.jsx / app entry
import { errorLog } from './error-log.js';
errorLog.init({
  enabled: import.meta.env.VITE_DEBUG_PANEL === 'true',        // flag from .env (local) — staging: optional
  env: import.meta.env.VITE_APP_ENV,                            // 'local' | 'staging' | 'production' (production hard-stops)
  healthUrl: `${import.meta.env.VITE_API_BASE_URL}/health`,
  getContext: () => ({ route: window.__ROUTE_ID__, viewClass: window.__VIEW_CLASS__ }), // e.g. R-07 + mobile|tablet|desktop
});
```
Native flavor: also call `mountErrorConsole(errorLog)` from `error-console.native.js` after `init`.
Turn on/off at runtime: `?debug=1` · **Ctrl+Shift+D** · the popup's "Turn off" (saved in `localStorage`). Production builds: gate the import (`if (import.meta.env.DEV)` / build flag) so the code is **stripped**.

## Server contract (any language)
Error responses — JSON, correct HTTP status:
```json
{ "error": { "message": "Validation failed", "code": "validation_failed", "fields": { "email": "Invalid email" } },
  "requestId": "req_9f2",
  "debug": { "exception": "PDOException", "file": "OrderRepository.php:41", "trace": ["…top 8 frames…"] } }
```
- `requestId` (also header `X-Request-Id`) is generated per request and written to server logs.
- **`debug` only when `APP_DEBUG=true` and `APP_ENV != production`** — never in production. No secrets, tokens, or full SQL with values.
- `GET /health` → `{ "ok": true, "env": "staging", "version": "<git sha>", "db": true }` (public, no sensitive data; `ok:false` when the DB or a critical dependency is down).

```js
// Node/Express — error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const body = { error: { message: err.expose ? err.message : 'Server error', code: err.code, fields: err.fields }, requestId: req.id };
  if (process.env.APP_DEBUG === 'true' && process.env.APP_ENV !== 'production') body.debug = { exception: err.name, file: err.stack?.split('\n')[1]?.trim(), trace: err.stack?.split('\n').slice(1, 9) };
  res.status(status).json(body);
});
```
```php
// PHP — exception handler
$body = ['error' => ['message' => $e instanceof PublicError ? $e->getMessage() : 'Server error'], 'requestId' => $requestId];
if (env('APP_DEBUG') === 'true' && env('APP_ENV') !== 'production') $body['debug'] = ['exception' => get_class($e), 'file' => basename($e->getFile()).':'.$e->getLine(), 'trace' => array_slice(explode("\n", $e->getTraceAsString()), 0, 8)];
http_response_code($status); header('Content-Type: application/json'); echo json_encode($body);
```
```python
# Python / FastAPI — exception handler
@app.exception_handler(Exception)
async def on_error(request, exc):
    body = {"error": {"message": "Server error"}, "requestId": request.state.request_id}
    if os.getenv("APP_DEBUG") == "true" and os.getenv("APP_ENV") != "production":
        body["debug"] = {"exception": type(exc).__name__, "trace": traceback.format_exc().splitlines()[-8:]}
    return JSONResponse(body, status_code=500)
```

## Copy for AI
Each entry has **Copy for AI**: a ready `.fix R-07 <error>` shortcut plus status, request, requestId, context (route ID, view class), field errors, and the server debug block — secrets redacted. Paste it to any AI.
