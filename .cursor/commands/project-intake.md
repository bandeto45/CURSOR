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
4. Confirm defaults still on: forms, ui-styling, validation, PHP migrate/seed.
5. If user chose advanced: note which `*-advanced.mdc` packs apply.
6. Summarize “Install complete”, then continue the original request.

## Do Not

- Copy-only install
- Drop default form/styling/validation rules
- Guess schema without concept
- Leave Profile/concept `TBD` after answers
