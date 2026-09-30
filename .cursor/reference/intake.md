# Intake (read during install only)

> Flow per topic: `.cursor/rules/format.mdc`. Install steps and checklist: `CURSOR.md` §1.

## Topics (ask; the AI recommends wherever the dev is unsure)

| # | Topic | Ask | AI recommends | Writes to |
|---|-------|-----|---------------|-----------|
| 1 | **Concept** | Name + pitch · users/roles · v1 must-have features · out of scope · milestones | Feature list, roles, entities, domain rules, risks | `concept-domain.mdc`, Profile |
| 2 | **Stack** | Frontend + **flavor** (`react` \| `native` = plain HTML/CSS/JS) · backend · database · auth · clients (`web` / `mobile` / `web + mobile` — always **one project**) · hosting · package-manager limits · separate API host? | A stack that fits the concept and constraints; the ready structure for the surface (`project-structure.mdc`) | Profile, `concept-domain.mdc` |
| 3 | **Layout** | `web`: **Normal Responsive** \| **Layout Responsive** \| **Auto** · `mobile` / `web + mobile`: Layout Responsive is fixed (stated, not asked) — `layout-strategy.mdc` | Strategy + a layout for **every route** (mobile · tablet · desktop) | Profile, `route-layouts.mdc` |
| 4 | **Design** | Brand constraints already decided (logo, colors, fonts, light/dark), tone words, references — all optional | 2–3 directions, one Recommended; icon system (`material` \| `lottie`); light/dark | `frontend-design/SKILL.md`, Tailwind theme, Profile |
| 5 | **Forms & UI** | Extra field types or component variants beyond the standard set · validation library or hand-rolled | Confirms the locked primitives; picks validation approach | Profile, skill |
| 6 | **Data** | Soft-delete preference · demo seed data · a migration tool already in mind? | Tables `T` from the concept; the **migration tool for the backend** (`REC-data-n`, `reference/migrations.md`) | `concept-domain.mdc`, Profile |
| 7 | **SEO** | On or off · public routes · locale · social image | On/off with reason; Schema.org types when on | Profile, `settings.json` |
| 8 | **Proposal (P1)** | Audience (client / team / investor) · presentation flavor `react` \| `native` · date/version | Flavor (`REC-plan-n`); the deck, Letter-size proposal document, and guide from the approved decisions (`proposal.mdc`) | `docs/proposal/`, `docs/GUIDE.md`, Profile |
| 9 | **Environments & deploy** | Which environments (local · staging · production) · hosting per environment · FTP or SSH · separate DB/host/path per environment · who approves production | `local + staging + production` unless tiny/static (`REC-plan-n`); FTP vs SSH by host capability; the key list; branch mapping (`develop` → staging, `main` → production) | Profile, `.env.example`, `.github/workflows/` via `/deploy setup` |
| 10 | **Delivery** | Phases to skip/merge · i18n · analytics/observability · testing expectations · compliance (PII, payments, age gates) · anything else | The plan: build order, testing level, risks | `phase-plan.mdc`, Profile |

Flow per topic is `format.mdc`. Locked defaults are **confirmed, not negotiated**: Tailwind, custom forms, server validation, migrations via the stack's own tool, states/skeleton/lazy load, phases, GitHub Secrets for live env (`restrictions.mdc`).
