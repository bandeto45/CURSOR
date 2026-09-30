# CURSOR.md — Project Brain

> Purpose: the single source of truth for **any AI** (Claude, Kimi, Grok, Gemini, Copilot, Cursor…) working on this project — one or several AIs. Files are the shared memory; chat is not. Fallbacks for tools without rules/commands/hooks: `.cursor/rules/multi-ai.mdc`.

**Signature (every decision, every AI):** **Ask → Recommend → Decide → Write → Confirm** — one Recommended option, written to its file at once. Full format: `.cursor/rules/format.mdc`.

---

## 1. Install (AI must follow)

Triggers: user says install / setup / copy this pack, Profile still has `TBD`, or `/project-intake` · `/install-cursor-pack`.

1. **Place files** — `cp CURSOR.md AGENTS.md CLAUDE.md /path/to/project/ && cp -R .cursor /path/to/project/`, then `bash .cursor/adapters/sync-ai-adapters.sh`. Skip if already in place.
2. **Stop before feature coding** while Profile is `TBD`.
3. **Run the intake (§2)** one topic at a time. For each topic: **Ask** → **Recommend** (`REC-…` block) → **Decide** → **Write** to its file immediately → **Confirm** in 2–4 lines. "You decide" = take the Recommended option.
4. **Generate the plan files** in order: `concept-domain.mdc` → `route-layouts.mdc` → `phase-plan.mdc`. Set Current phase `P1`.
5. **Confirm install complete** (checklist below), append the first **AI Handoff Log** row.
6. **Show the Getting Started guide** (`reference/usage-guide.md`, short version, in the dev's language): what to do next for the Current phase, the shortcuts (`.?`), and the top token-saving tips. Offer to save it as `docs/USING-THE-PACK.md` (`/guide save`). It is optional advice — then continue with the dev's build request.

### Install complete when
- [ ] Profile has no `TBD` (except items the dev deferred)
- [ ] `concept-domain.mdc` filled (features `F`, entities `T`, roles, rules)
- [ ] Design direction recommended → approved → written to `frontend-design/SKILL.md` + Tailwind theme
- [ ] Layout strategy chosen; `route-layouts.mdc` `APPROVED` (every route `R`)
- [ ] `phase-plan.mdc` filled (endpoints `E`, units `U` for P1–P5)
- [ ] Proposal package drafted from `.cursor/templates/` (deck, Letter document + PDF, guide skeleton) and reviewed by the dev — may finish inside P1
- [ ] Environments + deploy method chosen; live env path confirmed: **GitHub Environments/Secrets** (`/deploy setup`)
- [ ] Pointer files generated; Handoff Log started; default rules untouched
- [ ] Getting Started guide shown (`/guide`); dev knows the resume prompt and the token tips

---

## 2. Intake

Ask **one topic at a time**, in this order — details, questions, and what the AI recommends for each: `.cursor/reference/intake.md` (read it during install only).
**1** Concept · **2** Stack (+ frontend flavor, surface, backend) · **3** Layout · **4** Design · **5** Forms & UI · **6** Data (+ migration tool) · **7** SEO · **8** Proposal (P1) · **9** Environments & deploy · **10** Delivery.
Locked defaults are confirmed, not negotiated (`restrictions.mdc`).

---

## 3. Project Profile

> Install in progress while any row is `TBD`. All later work follows these values.

| Field | Value |
|-------|--------|
| **Project name** | TBD |
| **One-line pitch** | TBD |
| **Roles** | TBD |
| **Stack — Frontend / Backend / Database / Auth** | TBD / TBD / TBD / TBD |
| **Migration tool** | TBD — tool + `db:new/up/down/status/seed` mapping |
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
| **Guide tips** | `on` \| `off` — when `on`, the AI ends each phase (`/phase-exit`) with a one-line "suggested next prompt" |
| **Environments** | `local+production` \| `local+staging+production` (`environments.mdc`) |
| **Deploy method** | `ftp` \| `ssh` |
| **Live env** | **GitHub Environments + Secrets** (per environment) — `.env`, FTP/SSH, DB, API/app hosts |
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

## 6. Load map (token-lean: read only what the moment needs)

**Always on:** this file · `format.mdc` · `restrictions.mdc` · `multi-ai.mdc` · `shortcuts.mdc`. Everything else is read **on demand** — never load the whole `.cursor/`.

| Moment | Read |
|--------|------|
| **Dev asks how to use it / tips** | `reference/usage-guide.md` (`/guide`) |
| **Every session** | Profile · Handoff Log · `implementation-phases.mdc` · `reference/phases/<Current phase>.md` · rows of `phase-plan.mdc` for the current phase |
| **Intake / P1** | `reference/intake.md` · `concept-domain` · `design-direction` · `layout-strategy` (+ `reference/layout-patterns.md`) · `route-layouts` · `project-structure` · `database` (+ `reference/migrations.md`) · `proposal` (+ `templates/`) |
| **P2 building a screen** | its `R-nn` block in `route-layouts` · `ui-styling` · `ui-components` §1b + the group files of the components it uses (`reference/components/<group>.md`) · `forms` · `icons-states` · `transitions` · `validation` (client) |
| **P3 API** | `backend` · `database` · `security` · `validation` (server) · `testing` |
| **P4 integration** | `backend` · `validation` · `testing` + the P2 files for the screen being wired |
| **Environments / deploy / P5 ship** | `environments` · `/deploy` · `templates/ci/` · `testing` · `security` · `seo` (if on) |
| **A reference is given** | `references` |

**Read project files by ID, not whole:** find `R-07`, `F-03`, `E-12`, `T-02`, `U-041` in `route-layouts` / `concept-domain` / `phase-plan` and read just that block or row.

---

## 7. Rule map (the only index — each topic lives in exactly one file)

| Kind | File | Owns |
|------|------|------|
| Format | `format.mdc` | Signature: flow, Recommendation Block, file anatomy, IDs, statuses |
| Global | `restrictions.mdc` | Every hard ban (single list) |
| Global | `multi-ai.mdc` | Any-AI operation, handoff, fallbacks |
| Global | `shortcuts.mdc` | Prompt shortcuts (`.b .e .fix .go` …) and any-language input (aliases: `reference/shortcuts-i18n.md`) |
| Global | `references.mdc` | Using references without leaving traces |
| Ops | `environments.mdc` | local · staging · production, GitHub Environments/Secrets, branches, promotion, FTP/SSH |
| Design | `design-direction.mdc` | AI-recommended look; comfort + return-worthy rules |
| Design | `layout-strategy.mdc` | normal / layout / auto; breakpoints (patterns: `reference/layout-patterns.md`) |
| Structure | `project-structure.mdc` | Ready folders/shells per surface (web · mobile · web + mobile); React or native flavor; route folder pattern |
| Deliverable | `proposal.mdc` | P1 proposal deck (React/native), Letter-size document, guide |
| UI | `ui-styling.mdc` | Tailwind system, shared components, motion, frontend conventions |
| UI | `ui-components.mdc` | Component catalog + Component Spec + **customization contract** (follow the catalog; per-usage `className` overrides specified in the content): foundations, layout, nav, actions, overlays, inputs/pickers, lists, media, network/marketing, hooks |
| UI | `transitions.mdc` | Page/element transitions: push/pop, sheets, gestures, tokens, reduced motion, per-route map |
| UI | `forms.mdc` | Custom form controls + patterns |
| UI | `icons-states.mdc` | Icon system; 404/error/empty; skeleton; lazy load |
| Logic | `validation.mdc` | Client + server validation |
| Logic | `database.mdc` | Migration contract (any stack) + schema quality; tools in `reference/migrations.md` |
| Logic | `implementation-phases.mdc` | P1–P5 framework, Function Spec, exit gate (contents: `reference/phases/`) |
| Scoped | `backend.mdc` · `security.mdc` · `testing.mdc` · `seo.mdc` | Apply to matching files (`globs`) |
| **Project (AI-filled)** | `concept-domain.mdc` · `route-layouts.mdc` · `phase-plan.mdc` · `skills/frontend-design/SKILL.md` | This project's decisions (`TEMPLATE` → `DRAFT` → `APPROVED`) |

Other: `.cursor/commands/` (`/install-cursor-pack`, `/project-intake`, `/guide`, `/phase-exit`, `/pr-review`, `/fix-issue`, `/deploy`, `/test`, `/lint`) · `.cursor/agents/` (review, debug, test, docs, security, refactor personas) · `.cursor/hooks/` (pre-commit, lint-on-save) · `.cursor/reference/` (on-demand detail: components, phases, layout patterns, migrations) · `.cursor/templates/` (deck-native, deck-react, proposal-doc, guide) · `.cursor/adapters/sync-ai-adapters.sh` (pointer files) · `.cursor/adapters/help.sh` (token-free shortcuts/commands/tips in a terminal) · `.cursor/settings.json` (metadata, globs, flags).

---

## 8. Live environments

Values live in **GitHub Environments → Secrets** (`staging`, `production`), never git: same key names, different values — FTP/SSH · database · `APP_URL` · `API_BASE_URL` · `CORS_ORIGINS` · app keys. Every new key: `.env.example` + secret in **each** environment + workflow wiring. Model: `.cursor/rules/environments.mdc` · execution: `/deploy` · workflows: `.cursor/templates/ci/`.

Bans: `restrictions.mdc`.
