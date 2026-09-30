# {{Project name}} — Guide

> Status: DRAFT (P1 skeleton) → APPROVED (finished in P5) — filled by {{AI/tool}}, {{date}}
> Audience: developers who run and extend the project, and the owner who uses it.
> Rule: every command and path here must actually work; the AI runs them before writing them.

## 1. What this is
{{One paragraph: purpose, users, surfaces (`web` | `mobile` | `web + mobile`), layout strategy.}}

## 2. Quick start
```bash
cp .env.example .env            # keys only — never commit .env
{{install command}}             # dependencies
{{migrate command}}             # PHP migrations up
{{seed command}}                # demo data (optional)
{{dev command}}                 # run the app
```
| Check | Expect |
|-------|--------|
| {{url}} | {{what you see}} |

## 3. Project map
{{Folder tree from `.cursor/rules/project-structure.mdc`, trimmed to this project, one line per folder.}}

## 4. How to work here
| Task | Do this |
|------|---------|
| Add a screen | Add a block to `route-layouts.mdc` → add units to `phase-plan.mdc` → build `routes/<route>/` with its mobile · tablet · desktop views |
| Add an endpoint | Add `E-nn` to `phase-plan.mdc` → route → controller → service → repository → validator → tests |
| Change the schema | New PHP migration (`up`/`down`) — never edit an applied one |
| Change the design | Edit `frontend-design/SKILL.md` + Tailwind theme, then code |

## 5. Roles & walkthroughs (user guide)
### {{Role}}
1. {{Step-by-step for the main flow, with the screen ID (R-nn)}}
2. {{…}}

## 6. Conventions
IDs (`F R E T U`) · statuses · file anatomy: `.cursor/rules/format.mdc`. Styling: Tailwind tokens only. Forms: shared `components/ui/`.

## 7. Environment & deploy
| Key | Purpose | Where it lives |
|-----|---------|----------------|
| {{KEY}} | {{purpose}} | `.env` (local) · GitHub Secret (live) |

Deploy: `/deploy` — checklist in `.cursor/commands/deploy.md`.

## 8. Troubleshooting
| Symptom | Cause | Fix |
|---------|-------|-----|
| {{symptom}} | {{cause}} | {{fix}} |
