---
name: deploy
description: Deploy to staging or production (FTP or SSH) using GitHub Environments + Secrets per environment. Read rules/environments.mdc first.
---

# /deploy

Uses the **Profile** (Environments · Deploy method · Migration tool · stack). If Profile is `TBD`, run `/project-intake` first. Model and rules: `.cursor/rules/environments.mdc`. Templates: `.cursor/templates/ci/`.

**Never:** commit a filled `.env`, put secret values in chat/files, or reuse one set of values across environments.

## Usage
```
/deploy setup                 # scaffold workflows + list Environments/secrets the dev must create
/deploy staging               # deploy current develop to staging
/deploy production            # promote what staging verified (needs approval)
/deploy --dry-run <env>       # run every check, change nothing
/deploy rollback <env>        # see Rollback
```

## 1. `/deploy setup` (once per project)
1. Read Profile → **Environments** (`local+production` or `local+staging+production`) and **Deploy method** (`ftp` \| `ssh`); if missing, ask (intake topic 9) and record the recommendation (`REC-plan-n`).
2. Copy `templates/ci/ci.yml` and `templates/ci/deploy-<method>.yml` to `.github/workflows/`; replace every `{{placeholder}}` with the stack's real commands (install · lint · test · build · `db:up` · `db:seed`); remove the staging job/branch if the Profile has no staging.
3. Ensure `.env.example` lists every key once (incl. `APP_ENV`).
4. **Tell the dev** exactly what to create in GitHub (the AI cannot enter secrets):
   - Settings → Environments → **`staging`** and **`production`**; production: *Required reviewers* + branch restriction to `main`
   - The same secret **names** in each environment, with that environment's own values (table below)
5. Commit the workflows; run `/deploy --dry-run staging`.

## 2. Secrets (per GitHub Environment; same names, different values)
| Kind | Typical keys |
|------|--------------|
| Environment | `APP_ENV`, `APP_URL`, `API_BASE_URL`, `CORS_ORIGINS` |
| Database | `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (separate DB per environment) |
| Deploy target | FTP: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_PATH` · SSH: `SSH_HOST`, `SSH_USER`, `SSH_KEY`, `SSH_PATH`, `SSH_KNOWN_HOSTS` |
| Auth / crypto | `JWT_SECRET`, `APP_KEY`, session secrets |
| Third-party | payment (sandbox in staging), SMS, email (sink in staging), storage, maps |

Use the project's real names from `.env.example`. **Split frontend + backend / web + mobile:** each client's public API host (`VITE_API_URL`, `NEXT_PUBLIC_API_URL`, `EXPO_PUBLIC_API_URL`, …) is a secret **per environment**; the backend's `CORS_ORIGINS` lists every client origin of that environment. No production host in source.

**New env key (every time):** `.env.example` → secret in **staging and production** → wire into the workflow (`env:` + server `.env` step) → tell the dev the secret **name** to fill.

## 3. Pre-deploy checklist (run on staging first, then production)
- [ ] CI green on the commit being deployed; tests pass
- [ ] Every required secret present in this environment (the workflow's "Check secrets" step passes)
- [ ] Client build uses this environment's `API_BASE_URL`; no `localhost` or hardcoded host
- [ ] Pending migrations reviewed (Migration tool; no ad-hoc `.sql` outside it); **production: backup confirmed before migrating**
- [ ] Server `.env` is written from this environment's secrets (never from git)
- [ ] HTTPS / CDN SSL mode correct; SPA fallback rules if an SPA; uploads writable but not executable
- [ ] Debug tooling and one-time runners not publicly reachable
- [ ] **Staging:** `noindex` (header + meta + `robots.txt`), STAGING banner, sandbox payments, mail sink, analytics off
- [ ] **Production:** staging verified this exact change; approval given; error tracking + backups on; seeds **not** run

## 4. Steps
1. `develop` push → workflow deploys **staging** (or `/deploy staging`)
2. Verify on staging: smoke test (health, auth, one critical write) + this checklist
3. Promote: PR `develop → main` → merge → workflow pauses for **production approval** → deploys
4. Each deploy: check secrets → test → build with the environment's host → write server `.env` → `db:up` → upload (FTP action, or SSH rsync to a new release + atomic switch) → smoke test
5. Purge CDN cache if used; confirm the client calls the live API host, not localhost
Hotfix: branch from `main` → PR → `main` (production) → back-merge into `develop`.

## 5. Rollback
- **SSH:** repoint `current` to the previous `releases/<timestamp>` (kept: last 5)
- **FTP:** redeploy the previous good commit/build artifact (re-run the workflow on that ref)
- Database: prefer a forward-fix migration; use a tested `db:down` only when safe (or restore the pre-migration backup); purge CDN cache

## Do Not
- Deploy production without approval, or skip staging when the Profile has it (hotfix path excepted)
- Seed production, leave staging indexable, or share one database/secret values across environments
- Add a production env key without the same key in `.env.example` and in **both** GitHub Environments
- Hardcode any API host in web or mobile source; leave debug tooling public
