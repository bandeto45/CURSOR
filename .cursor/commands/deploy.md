---
name: deploy
description: Deploy the current project using intake-defined host and stack.
---

# /deploy

Deploy using the **hosting and stack from Project Profile** (`CURSOR.md`). If Profile is `TBD`, run `/project-intake` first.

## Usage

```
/deploy staging
/deploy production
/deploy --dry-run production
```

## Pre-deploy checklist

- [ ] Intake complete (stack + host known)
- [ ] Frontend production build succeeds (if applicable)
- [ ] Backend syntax / tests pass (if applicable)
- [ ] Pending **PHP migrations** reviewed; no `.sql` deploy scripts as source of truth
- [ ] Server `.env` set (never commit): DB_*, secrets, APP_URL, CORS, upload paths
- [ ] HTTPS / CDN SSL mode correct for the chosen host
- [ ] Upload directories writable and not arbitrarily executable
- [ ] SPA fallback rules if the frontend is an SPA
- [ ] Debug / one-time migration runners not publicly reachable

## Deploy steps (generic)

1. Build frontend artifacts
2. Upload frontend + API/backend to the configured host paths
3. Run pending PHP migrations (and seeds only when intentional)
4. Purge CDN cache if used
5. Smoke test health, auth, and one critical write path

## Rollback

1. Restore previous build artifact
2. Prefer forward-fix migrations; use tested `down()` only when safe
3. Purge CDN cache

## Do Not

- Deploy with `.env` in git
- Invent Hostinger/Cloudflare (or any host) details if intake chose something else
- Leave debug tooling public in production
