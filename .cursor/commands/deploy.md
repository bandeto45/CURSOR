---
name: deploy
description: Deploy to staging or production using intake host/stack. Live .env, FTP, DB, and API hosts live in GitHub Secrets.
---

# /deploy

Deploy using the **hosting and stack from Project Profile** (`CURSOR.md`). If Profile is `TBD`, run `/project-intake` first.

**Production / live source of truth:** never commit a filled `.env`. Live values live in **GitHub Secrets**. CI/CD injects them at build and deploy. Local `.env` is local-only.

## Usage

```
/deploy staging
/deploy production
/deploy --dry-run production
```

## GitHub Secrets (required for production)

Every production env key must exist as a GitHub Secret **in the same change** as it is added to code, `.env.example`, or workflows. Staging uses the same rule if a staging environment exists.

### Always in GitHub Secrets

| Kind | Typical keys | Why |
|------|----------------|-----|
| FTP / SSH / deploy host | `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_PATH`, `SSH_HOST`, `SSH_USER`, `SSH_KEY` | Where files are uploaded |
| Database | `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | Live DB — never in git |
| App / API hosts | `APP_URL`, `API_URL`, `API_BASE_URL`, CORS origins | Where clients call the API; where the API lives |
| Auth / crypto | `JWT_SECRET`, `APP_KEY`, session secrets | |
| Third-party | payment, SMS, email, storage, maps | |

Use the project's real key names from `.env.example` — the table is a map of **kinds**, not a required naming scheme.

### Split frontend + backend (web and/or mobile)

When frontend and backend are **separate** (different hosts, repos, or apps):

- **Backend** GitHub Secrets: `APP_URL`, CORS allowlist of **web + mobile** origins, DB, FTP/SSH for the API host
- **Web frontend** GitHub Secrets: public API host the browser calls (`VITE_API_URL`, `NEXT_PUBLIC_API_URL`, or stack equivalent)
- **Mobile** GitHub Secrets: public API host the app calls (`EXPO_PUBLIC_API_URL`, `API_BASE_URL`, or stack equivalent)
- Do **not** hardcode production API hosts in source. Same key names as `.env.example`.

If web and mobile are separate apps or repos, each has its own secret set — including the API host each one calls.

### When adding a new env var (every time)

1. Add the **key** (placeholder, no live value) to `.env.example`
2. Add the same key to **GitHub Secrets** (production; staging too if used)
3. Wire the secret into the deploy workflow so it is written to the server `.env` or injected at build
4. If the new var is an API host or public client config, set it on **web and mobile** secret sets
5. Tell the user the secret **name** they must fill in GitHub — do not invent live passwords or keys

Never: commit the value, put live passwords in docs/chat as the source of truth, or ship a client that calls `localhost` / a hardcoded host in production.

## Pre-deploy checklist

- [ ] Intake complete (stack + host known)
- [ ] All production env keys exist in **GitHub Secrets** (including any new keys this change added)
- [ ] FTP/SSH + database + API/APP hosts in GitHub Secrets
- [ ] Split apps: web + mobile API base URLs set (the hosts each client calls)
- [ ] Frontend production build succeeds (if applicable) — built with the live API host from secrets
- [ ] Backend syntax / tests pass (if applicable)
- [ ] Pending **PHP migrations** reviewed; no `.sql` deploy scripts as source of truth
- [ ] Server `.env` comes from GitHub Secrets (never from git): DB_*, secrets, APP_URL, CORS, upload paths
- [ ] HTTPS / CDN SSL mode correct for the chosen host
- [ ] Upload directories writable and not arbitrarily executable
- [ ] SPA fallback rules if the frontend is an SPA
- [ ] Debug / one-time migration runners not publicly reachable

## Deploy steps (generic)

1. Confirm GitHub Secrets keys match `.env.example` (no missing production keys)
2. CI reads secrets → builds frontend with the live API host → uploads via FTP/SSH using secrets
3. Write/update server `.env` from secrets (never from git)
4. Run pending PHP migrations (and seeds only when intentional)
5. Purge CDN cache if used
6. Smoke test health, auth, and one critical write path — confirm the client is calling the live API host, not localhost

## Rollback

1. Restore previous build artifact
2. Prefer forward-fix migrations; use tested `down()` only when safe
3. Purge CDN cache

## Do Not

- Deploy with `.env` in git
- Put live FTP, database, or API hosts only in a local file and skip GitHub Secrets
- Add a production env key without the matching GitHub Secret
- Hardcode the production API host in web or mobile source
- Invent Hostinger/Cloudflare (or any host) details if intake chose something else
- Leave debug tooling public in production
- Invent live passwords or keys — ask the user to set GitHub Secret values
