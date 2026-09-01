---
name: project-intake
description: Install/customize — ask, fill Profile + concept-domain, keep default form/validation rules.
---

# /project-intake

**Install = copy + ask + fill** in one session, then work from those answers.

## Usage

```
/project-intake
/project-intake --update
/install-cursor-pack
```

## Required sequence

1. Place files if missing.
2. Ask Mandatory intake (`CURSOR.md`).
3. Fill immediately:
   - `CURSOR.md` Profile
   - `concept-domain.mdc` from **concept** (entities + business rules → DB)
   - `settings.json`, `frontend-design` skill
4. Confirm defaults still on: forms, ui-styling, validation, PHP migrate/seed, **P0–P4 phases**.
5. Confirm production/live: `.env`, FTP, DB, and API hosts (web + mobile if split) live in **GitHub Secrets** (`/deploy`).
6. Set **Current phase** to `P0` unless user overrides.
7. If user chose advanced: note which `*-advanced.mdc` packs apply.
8. Summarize “Install complete”, then continue from **P0** (or stated phase).

## Do Not

- Copy-only install
- Drop default form/styling/validation rules
- Guess schema without concept
- Leave Profile/concept `TBD` after answers
- Skip GitHub Secrets for live `.env` / FTP / DB / API hosts
