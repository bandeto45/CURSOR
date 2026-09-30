# CURSOR.md — Project Brain

> Purpose: the single source of truth for **any AI** (Claude, Kimi, Grok, Gemini, Copilot, Cursor…) working on this project — one or several AIs. Files are the shared memory; chat is not. Fallbacks for tools without rules/commands/hooks: `.cursor/rules/multi-ai.mdc`.

**Signature (every decision, every AI):** **Ask → Recommend → Decide → Write → Confirm** — one Recommended option, written to its file at once. Full format: `.cursor/rules/format.mdc`.

---

## 1. Install (AI must follow)

Triggers: user says install / setup / copy this pack, Profile still has `TBD`, or `/project-intake` · `/install-cursor-pack`.

1. **Place files** — `cp CURSOR.md AGENTS.md CLAUDE.md /path/to/project/ && cp -R .cursor /path/to/project/`, then `bash .cursor/adapters/sync-ai-adapters.sh`. Skip if already in place.
2. **Stop before feature coding** while Profile is `TBD`.
3. **Run the intake (§2)** in batches. For each topic: **Ask** → **Recommend** (`REC-…` block) → **Decide** → **Write** to its file immediately → **Confirm** in 2–4 lines. "You decide" = take the Recommended option.
4. **Generate the plan files** in order: `concept-domain.mdc` → `route-layouts.mdc` → `phase-plan.mdc`. Set Current phase `P1`.
5. **Confirm install complete** (checklist below), append the first **AI Handoff Log** row, then continue with the dev's build request.

### Install complete when
- [ ] Profile has no `TBD` (except items the dev deferred)
- [ ] `concept-domain.mdc` filled (features `F`, entities `T`, roles, rules)
- [ ] Design direction recommended → approved → written to `frontend-design/SKILL.md` + Tailwind theme
- [ ] Layout strategy chosen; `route-layouts.mdc` `APPROVED` (every route `R`)
- [ ] `phase-plan.mdc` filled (endpoints `E`, units `U` for P1–P5)
- [ ] Proposal package drafted from `.cursor/templates/` (deck, Letter document + PDF, guide skeleton) and reviewed by the dev — may finish inside P1
- [ ] Live env path confirmed: **GitHub Secrets** (`/deploy`)
- [ ] Pointer files generated; Handoff Log started; default rules untouched

---

## 2. Intake (ask; the AI recommends wherever the dev is unsure)

| # | Topic | Ask | AI recommends | Writes to |
|---|-------|-----|---------------|-----------|
| 1 | **Concept** | Name + pitch · users/roles · v1 must-have features · out of scope · milestones | Feature list, roles, entities, domain rules, risks | `concept-domain.mdc`, Profile |
| 2 | **Stack** | Frontend + **flavor** (`react` \| `native` = plain HTML/CSS/JS) · backend · database · auth · clients (`web` / `mobile` / `web + mobile` — always **one project**) · hosting · package-manager limits · separate API host? | A stack that fits the concept and constraints; the ready structure for the surface (`project-structure.mdc`) | Profile, `concept-domain.mdc` |
| 3 | **Layout** | `web`: **Normal Responsive** \| **Layout Responsive** \| **Auto** · `mobile` / `web + mobile`: Layout Responsive is fixed (stated, not asked) — `layout-strategy.mdc` | Strategy + a layout for **every route** (mobile · tablet · desktop) | Profile, `route-layouts.mdc` |
| 4 | **Design** | Brand constraints already decided (logo, colors, fonts, light/dark), tone words, references — all optional | 2–3 directions, one Recommended; icon system (`material` \| `lottie`); light/dark | `frontend-design/SKILL.md`, Tailwind theme, Profile |
| 5 | **Forms & UI** | Extra field types or component variants beyond the standard set · validation library or hand-rolled | Confirms the locked primitives; picks validation approach | Profile, skill |
| 6 | **Data** | Soft-delete preference · demo seed data | Tables `T` from the concept; naming | `concept-domain.mdc` |
| 7 | **SEO** | On or off · public routes · locale · social image | On/off with reason; Schema.org types when on | Profile, `settings.json` |
| 8 | **Proposal (P1)** | Audience (client / team / investor) · presentation flavor `react` \| `native` · date/version | Flavor (`REC-plan-n`); the deck, Letter-size proposal document, and guide from the approved decisions (`proposal.mdc`) | `docs/proposal/`, `docs/GUIDE.md`, Profile |
| 9 | **Delivery** | Phases to skip/merge · i18n · analytics/observability · testing expectations · compliance (PII, payments, age gates) · anything else | The plan: build order, testing level, risks | `phase-plan.mdc`, Profile |

Flow per topic is `format.mdc`. Locked defaults are **confirmed, not negotiated**: Tailwind, custom forms, server validation, PHP migrations/seeds, states/skeleton/lazy load, phases, GitHub Secrets for live env (`restrictions.mdc`).

---

## 3. Project Profile

> Install in progress while any row is `TBD`. All later work follows these values.

| Field | Value |
|-------|--------|
| **Project name** | TBD |
| **One-line pitch** | TBD |
| **Roles** | TBD |
| **Stack — Frontend / Backend / Database / Auth** | TBD / TBD / TBD / TBD |
| **Clients / surfaces** | `web` \| `mobile` \| `web + mobile` (one project; `web + mobile` → `layout`) |
| **Frontend flavor** | `react` \| `native` (plain HTML/CSS/JS + Tailwind) |
| **Proposal deck** | `react` \| `native` (`proposal.mdc`) |
| **Layout strategy** | `normal` \| `layout` \| `auto` — one codebase; `mobile` and `web + mobile` are always `layout` (`layout-strategy.mdc`) |
| **Layout resolved** | TBD — `normal` \| `layout` \| `mixed` + 1-line reason |
| **Design direction** | TBD — name + mood + who chose (`design-direction.mdc`) |
| **Theme / Typography** | TBD (from the approved direction → Tailwind theme) |
| **Icons** | `material` \| `lottie` |
| **SEO** | `off` \| `on` (Schema.org required when `on`) |
| **i18n / analytics / testing** | TBD |
| **Current phase** | `P1` \| `P2` \| `P3` \| `P4` \| `P5` \| `done` (default after install: `P1`) |
| **Live env** | **GitHub Secrets** — `.env`, FTP/SSH, DB, API/app hosts |
| **v1 in / out of scope** | TBD / TBD |

Locked, not asked: CSS = **Tailwind**; UX = simplified, easy to use, eye-comfortable (`ui-styling.mdc`).

---

## 4. Phases (detail: `implementation-phases.mdc` · project plan: `phase-plan.mdc`)

| Phase | Name | Build |
|-------|------|-------|
| **P1** | Foundation | Concept lock, design + layouts approved, tokens, skeleton, migrations/seeds, phase plan, **proposal package (deck · Letter document · guide)** |
| **P2** | Mock UI | Every route to its layout block on mocks; forms + client validation |
| **P3** | API | Endpoint by endpoint; server validation + authz; UI stays on mocks |
| **P4** | Integration | UI ↔ API feature by feature; mocks removed |
| **P5** | Cleanup & ship | Dead code, docs, regression, security/perf, deploy checklist |

One phase at a time. Each ends with `/phase-exit` — units done, tests, leftovers, carry-over, dev says **exit OK** — then bump Current phase.

---

## 5. AI Handoff Log

Read at session start; append one row at session end. Do not reverse another AI's `APPROVED` decision unless the dev asks.

| Date | AI / tool | Phase | What changed | Open / next |
|------|-----------|-------|--------------|-------------|
| — | — | — | (first row added by the first AI to work) | — |

---

## 6. Rule map (the only index — each topic lives in exactly one file)

| Kind | File | Owns |
|------|------|------|
| Format | `format.mdc` | Signature: flow, Recommendation Block, file anatomy, IDs, statuses |
| Global | `restrictions.mdc` | Every hard ban (single list) |
| Global | `multi-ai.mdc` | Any-AI operation, handoff, fallbacks |
| Global | `references.mdc` | Using references without leaving traces |
| Design | `design-direction.mdc` | AI-recommended look; comfort + return-worthy rules |
| Design | `layout-strategy.mdc` | normal / layout / auto; breakpoints; pattern catalog |
| Structure | `project-structure.mdc` | Ready folders/shells per surface (web · mobile · web + mobile); React or native flavor; route folder pattern |
| Deliverable | `proposal.mdc` | P1 proposal deck (React/native), Letter-size document, guide |
| UI | `ui-styling.mdc` | Tailwind system, shared components, motion, frontend conventions |
| UI | `forms.mdc` | Custom form controls + patterns |
| UI | `icons-states.mdc` | Icon system; 404/error/empty; skeleton; lazy load |
| Logic | `validation.mdc` | Client + server validation |
| Logic | `database.mdc` | PHP migrations/seeds; schema quality |
| Logic | `implementation-phases.mdc` | P1–P5, Function Spec, exit gate |
| Scoped | `backend.mdc` · `security.mdc` · `testing.mdc` · `seo.mdc` | Apply to matching files (`globs`) |
| **Project (AI-filled)** | `concept-domain.mdc` · `route-layouts.mdc` · `phase-plan.mdc` · `skills/frontend-design/SKILL.md` | This project's decisions (`TEMPLATE` → `DRAFT` → `APPROVED`) |

Other: `.cursor/commands/` (`/install-cursor-pack`, `/project-intake`, `/phase-exit`, `/pr-review`, `/fix-issue`, `/deploy`, `/test`, `/lint`) · `.cursor/agents/` (review, debug, test, docs, security, refactor personas) · `.cursor/hooks/` (pre-commit, lint-on-save) · `.cursor/templates/` (deck-native, deck-react, proposal-doc, guide) · `.cursor/adapters/sync-ai-adapters.sh` (pointer files) · `.cursor/settings.json` (metadata, globs, flags).

---

## 7. Live environment

Production values live in **GitHub Secrets**, never git: FTP/SSH · database · `APP_URL` and the API host web/mobile call · CORS origins · every new env key (same key in `.env.example`, wired into CI in the same change). Checklist: `.cursor/commands/deploy.md`.

Bans: `restrictions.mdc`.
