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
   - `settings.json`, `frontend-design` skill (from the AI's approved design proposal)
   - `route-layouts.mdc` (layout strategy + per-route layouts)
4. Confirm defaults still on: forms, ui-styling, validation, PHP migrate/seed, **P0–P4 phases**.
5. Confirm production/live: `.env`, FTP, DB, and API hosts (web + mobile if split) live in **GitHub Secrets** (`/deploy`).
6. Design: don't ask for hex/fonts — propose 2–3 directions (one Recommended) from the concept; dev approves (`design-direction.mdc`).
7. Layout strategy — ask for every project: **Normal Responsive** \| **Layout Responsive** \| **Auto** (AI recommends, dev confirms). Write strategy + resolved into Profile, then generate per-route layouts into `route-layouts.mdc` and get approval (`layout-strategy.mdc`).
8. Append the first **AI Handoff Log** row; run `.cursor/adapters/sync-ai-adapters.sh`.
9. Set **Current phase** to `P0` unless user overrides.
10. If user chose advanced: note which `*-advanced.mdc` packs apply.
11. Summarize “Install complete”, then continue from **P0** (or stated phase).

## Do Not

- Copy-only install
- Drop default form/styling/validation rules
- Guess schema without concept
- Leave Profile/concept `TBD` after answers
- Skip GitHub Secrets for live `.env` / FTP / DB / API hosts
- Skip the Layout strategy question, or start P1 before `route-layouts.mdc` is approved
- Under Layout Responsive: ship one stretched layout, or split into separate mobile/web projects
- Require the dev to supply colors/fonts instead of proposing them
