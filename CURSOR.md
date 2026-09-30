# CURSOR.md — Reusable Project Brain

Primary instruction set for **any AI assistant** — Claude, Kimi, Grok, Gemini, Copilot, Cursor, and others — and it can be used by **several AIs on one project**. This repo is a **portable AI setup** (`CURSOR.md` + `.cursor/`) for any project. Tool-specific behavior and fallbacks: `.cursor/rules/multi-ai.mdc`. **Install = copy files + interview + fill answers in the same session** so the AI already has project truth before it builds.

---

## What this is

A ready-to-install `.cursor/` + `CURSOR.md` pack. It is **not** tied to one product and **not** tied to one AI. "The AI" means whichever assistant is working now; **files are the shared memory** (see **AI Handoff Log**).

**Critical rule:** Copying files alone is **not** a complete install. During install the AI must **ask questions**, **wait for answers**, and **immediately write** them into `CURSOR.md`, `.cursor/settings.json`, and the `frontend-design` skill. Install is complete **only** when required Project Profile fields are no longer `TBD` (except items the user explicitly deferred).

---

## Install flow (AI must follow)

Triggers: user says install / setup / copy this Cursor pack, or Project Profile is still `TBD`, or `/project-intake` / `/install-cursor-pack`.

### Phase A — Place files

```bash
# From this template into the target project root (adjust paths):
cp CURSOR.md /path/to/project/
cp -R .cursor /path/to/project/
```

If already inside the target project with this pack present, skip copy and go to Phase B.

### Phase B — Interview while installing (same turn sequence)

1. **Stop before feature coding.** Do not scaffold product code while Profile is `TBD`.
2. **Ask in batches** (use a form/questions UI when available). Cover all 8 sections below.
3. **As soon as the user answers a batch, write the answers into files** (do not keep them only in chat):
   - `CURSOR.md` → Project Profile (+ scope notes)
   - `.cursor/rules/concept-domain.mdc` → **concept** business rules + entities (DB will follow this)
   - `.cursor/settings.json` → `project.name`, `project.description`, `seo.enabled`
   - `.cursor/skills/frontend-design/SKILL.md` → colors, type, icons, baseline (from the **AI's design proposal** the dev approved — `design-direction.mdc`)
   - `.cursor/rules/route-layouts.mdc` → layout strategy result + **per-route layouts** (mobile · tablet · desktop) — `layout-strategy.mdc`
4. **Confirm filled Profile + concept-domain** with a short summary.
5. **Only then** continue with the user’s build request — using filled instructions. **Default rules stay on** (forms, UI styling, validation, PHP migrate/seed).

### Phase C — Install complete checklist

- [ ] Files present: `CURSOR.md`, `.cursor/rules/`, agents, commands, hooks, skills; AI pointer files (`AGENTS.md`, `CLAUDE.md`, …) via `.cursor/adapters/sync-ai-adapters.sh`
- [ ] Project Profile has real values (not `TBD`) for answered fields
- [ ] `concept-domain.mdc` filled from concept (entities + domain rules)
- [ ] SEO `on`/`off` set; if `on`, Schema.org noted
- [ ] Rule level `basic` or `basic+advanced` set
- [ ] **Current phase** set (usually `P1`); phases P1–P5 acknowledged
- [ ] Default rules present and not disabled (forms, ui-styling, validation, database engine, implementation-phases, icons-states)
- [ ] Production/live env path confirmed: **GitHub Secrets** (FTP, DB, API hosts; `/deploy`)
- [ ] Icon system chosen (`material` \| `lottie`) in Profile
- [ ] **Design direction** proposed by the AI (2–3 options, one Recommended), approved, and written to the skill + Tailwind theme
- [ ] **Layout strategy** chosen (`normal` \| `layout` \| `auto`), resolved, and **per-route layouts** written + approved in `route-layouts.mdc`
- [ ] **`phase-plan.mdc`** generated (features → endpoints → functions per phase)
- [ ] **AI Handoff Log** initialized
- [ ] AI’s next steps reference Profile + concept (not guesses)

---

## Mandatory intake questions (ask during install)

Do **not** invent brand, stack, or features. Wait for answers. Fill files as answers arrive.

### 1. Concept & features
- Product name and one-line pitch?
- Who are the users / roles?
- Core flows and must-have features (v1)?
- Explicitly **out of scope** for v1?
- Phases / milestones preferred?

### 2. Tech stack
- Frontend (e.g. React, Vue, plain HTML)?
- Backend (e.g. plain PHP, Node, Laravel — confirm constraints)?
- Database (MySQL/MariaDB, Postgres, etc.)?
- Auth model (JWT, sessions, OAuth)?
- **Clients / surfaces:** `web` only, `mobile` only, or **`web + mobile`**? (single codebase)
- **Layout strategy** (ask for every project — plain language, pick one; details `layout-strategy.mdc`):
  1. **Normal Responsive** — one layout that reflows to mobile; a mobile-friendly website, **not** mobile-app-ready
  2. **Layout Responsive** — different layout per view: mobile ≠ tablet ≠ desktop; app-ready
  3. **Auto** — the AI recommends the ideal layouting from the concept; the dev confirms
  - `web + mobile` → strongly recommend **Layout Responsive** (record the trade-off if the dev still picks Normal)
  - After the choice, the AI **generates a layout concept per route** (mobile · tablet · desktop) — `route-layouts.mdc`
- Hosting / deploy target?
- Confirm **production/live**: `.env` values, FTP/SSH, database, and API/app hosts live in **GitHub Secrets** (never git)?
- If frontend and backend are **separate**: where does each client call the API? That host goes in GitHub Secrets.
- Package managers allowed or forbidden (e.g. no Composer)?

### 3. Theme & UI styling (the AI suggests — the dev does not need design knowledge)
- Confirm **Tailwind CSS** as styling engine (locked) and **UX-first · Modern · Eye-comfortable · Return-worthy** goals?
- Any **brand constraints** already decided (name/wordmark, logo, brand color, fonts, light/dark preference, references)? Optional — dev-provided values win.
- Tone words or the feel the dev wants (optional; the AI infers from the concept if none)
- **AI then proposes 2–3 design directions** (mood, palette + contrast, type pairing, shape/density, icon system, motion) with **one Recommended** — dev picks/tweaks, or says "you decide" — `design-direction.mdc`
- **Icons:** the AI recommends **Material Icons** or **Lottie** (animated web JSON) within the proposal — dev confirms one primary system
- Light / dark / both? Default mode? (AI recommends)
- Reference pages or "UI baseline" route?
- Any **extra** styles/tokens to add on top of locked UI system (extensions only)?

### 4. Forms & UI components
- Confirm locked **Tailwind ui-styling** primitives: modal, popover, popup, alerts, navbar, bottom toolbar, tabs, cards, headers, back, buttons (text/icon/both), layout (grid/flex/gap), typography, images, slideshow/parallax (if marketing)?
- Confirm unified **custom forms** (input, text, editor, checkbox, radio, slider, stepper, picker, upload, search, password, select, links)?
- Confirm locked **404 / status-error / empty**, **skeleton**, **lazy load**, **page transitions**, **infinite scroll** where lists need it?
- Layout: follow Profile **Layout strategy** (`normal` \| `layout` \| `auto`) and the approved `route-layouts.mdc`
- Any extra field types or component variants beyond the standard set?
- Validation library or hand-rolled?

### 5. Database & data
- Confirm engine default: **PHP migrations + seeds only** — **no `.sql`** (locked default)?
- From the **concept**: which entities/tables are needed?
- Naming / soft-delete preferences?
- Seed data needed for demos?

### 6. SEO
- SEO **enabled** or **disabled** for this project?
- If enabled: public marketing routes, default locale, social image?
- Confirm **Schema.org** JSON-LD when SEO is on?

### 7. Rules & restrictions
- Confirm **default rules stay forever**: forms (custom styling), UI styling, validation, PHP migrate/seed, icons-states (Material/Lottie, 404/error/empty, skeleton, lazy load)
- Concept-specific domain rules → write into `concept-domain.mdc`
- Add **Advanced** packs? (`basic` vs `basic+advanced`)
- Extra hard bans / compliance (PII, payments, age gates)?

### 8. Implementation & other
- Confirm default phases **P1→P5** (foundation → mock UI → API → integration/mock cleanup → cleanup/docs/final test), plus the generated function-level `phase-plan.mdc`?
- Any phase to skip/merge for this project?
- i18n languages?
- Analytics / observability?
- Testing expectations?
- Anything else the AI must know before writing code?

**Write answers into the Project Profile immediately** — chat memory is not enough.

---

## Project Profile

> **Install in progress** while any required row is `TBD`. AI must ask + fill during install, then use these values for all subsequent work.
| Field | Value |
|-------|--------|
| **Project name** | TBD |
| **One-line pitch** | TBD |
| **Roles** | TBD |
| **Stack — Frontend** | TBD |
| **Stack — Backend** | TBD |
| **Stack — Database** | TBD |
| **Auth** | TBD |
| **Clients / surfaces** | `web` \| `mobile` \| `web + mobile` (pick at intake) |
| **Layout strategy** | `normal` (Normal Responsive) \| `layout` (Layout Responsive: distinct mobile · tablet · desktop) \| `auto` (AI recommends) — asked for every project; **single codebase** — `layout-strategy.mdc` |
| **Layout resolved** | TBD — `normal` \| `layout` \| `mixed` (result of Auto, with 1-line reason) · per-route layouts in `route-layouts.mdc` |
| **CSS / UI** | **Tailwind CSS** (locked) · UX-first · Modern · Eye-comfortable · Return-worthy · **Simplified** |
| **UI / UX** | Beautiful, easy to use — locked principles in `ui-styling.mdc` |
| **Design direction** | TBD — AI-proposed, dev-approved (name + mood + who chose) — `design-direction.mdc` |
| **Theme** | TBD (palette from approved direction → Tailwind theme) |
| **Typography** | TBD (from approved direction) |
| **Icons** | `material` \| `lottie` (AI recommends; dev confirms; locked after intake) |
| **SEO** | `off` \| `on` (default template: `off` until intake) |
| **Schema.org** | Required when SEO = `on` |
| **Rule level** | `basic` \| `basic+advanced` |
| **Current phase** | `P1` \| `P2` \| `P3` \| `P4` \| `P5` \| `done` (default after install: `P1`) |
| **Deploy / live env** | **GitHub Secrets** — production `.env`, FTP/SSH, DB, API/app hosts (web + mobile when split) |
| **v1 in scope** | TBD |
| **v1 out of scope** | TBD |

---

## Implementation phases (default)

**Do not mix phases.** Full sub-tasks + exit gates: `.cursor/rules/implementation-phases.mdc`. Use `/phase-exit` at the end of each phase.

| Phase | Name | What you build |
|-------|------|----------------|
| **P1** | Foundation | Concept lock, design + layouts approved, tokens, skeleton, PHP migrations/seeds, phase plan |
| **P2** | Mock UI + mock data | Every route built to its layout block on mocks; custom forms + client validation |
| **P3** | API backend | Real API endpoint by endpoint; server validation + authz; UI may stay on mocks |
| **P4** | Integration + mock cleanup | Wire UI ↔ API feature by feature; remove mock data from prod paths |
| **P5** | Cleanup, docs, final testing | Dead code gone, documentation, regression, ship checks |

### Every phase has

1. **Subs** — numbered checklist under that phase, made **function-by-function** in `phase-plan.mdc` (features → routes/endpoints/tables → functions, each with a Function Spec and *Done when*)
2. **Exit gate** — smoke/tests + leftovers + fixes + carry-over to next phase — **required** before advancing

### Exit gate (summary)

- [ ] Subs done or explicitly deferred  
- [ ] Defaults intact  
- [ ] Phase smoke/tests passed  
- [ ] Bugs fixed or listed for next phase  
- [ ] Next-phase adds written down  
- [ ] Agree **exit OK** → then bump Current phase  

---

## AI Handoff Log

Several AIs may work on this project (e.g. Claude, Kimi, Grok). **Read this log at session start; append one row at session end.** Do not reverse another AI's recorded decisions without the dev asking. Rules: `.cursor/rules/multi-ai.mdc`.

| Date | AI / tool | Phase | What changed | Open / next |
|------|-----------|-------|--------------|-------------|
| — | — | — | (first row added by the first AI to work) | — |

---

## References / inspiration

When the user provides a reference (screenshot, link, another repo, old project, design file):

| Do | Don't |
|----|-------|
| Take **only** the parts needed for the requested screen/feature | Copy the whole thing, including unused pieces |
| Re-express with **this project's** tokens, components, and concept naming | Carry over the source brand, logo, copy, or naming |
| Say in chat what was taken and how it was adapted | Write the source into files (comments, docs, commits, UI copy) |
| Keep defaults when a reference conflicts with them | Break forms/styling/validation defaults to match the source |

**Treat the project as fresh** — it should read as authored only for this product. Details: `.cursor/rules/references.mdc`

---

## Rule layers

```
DEFAULT (never remove)     CONCEPT (from intake)     ADVANCED (optional)
forms · ui-styling         concept-domain.mdc        *-advanced.mdc
validation · database      entities → migrations     planning/backend/frontend
engine · restrictions      SEO on/off · scope        forms/validation/db/security
install · phases           icons material|lottie
defaults · references      icons-states (404/empty/skeleton/lazy)
```

### Default rules (permanent — never remove)

| File | Locked behavior |
|------|-----------------|
| `defaults.mdc` | Index of what must stay |
| `forms.mdc` | Unified **custom** form controls + chrome |
| `ui-styling.mdc` | **Tailwind** · simplified beautiful UX · modals/nav/forms/layout |
| `validation.mdc` | Client UX + **server** validation |
| `database.mdc` | PHP migrate/seed only; prepared statements |
| `implementation-phases.mdc` | P1–P5 order, detailed subs, function specs, exit gates |
| `phase-plan.mdc` | Project-specific function-by-function plan (generated at install) |
| `references.mdc` | Take only what applies; no source traces in files |
| `icons-states.mdc` | Material **or** Lottie; 404/error/empty; skeleton; lazy load |
| `install.mdc` / `restrictions.mdc` | Install ask+fill; hard bans |
| `multi-ai.mdc` | Works with any AI; multi-AI handoff |
| `design-direction.mdc` | AI proposes design (UX · modern · eye-comfortable · return-worthy); dev approves |
| `layout-strategy.mdc` | `normal` \| `layout` \| `auto`; breakpoints; pattern catalog |
| `route-layouts.mdc` | Per-route layout map (mobile · tablet · desktop) — filled at install |

Controls covered by forms default: label, text, email, tel, password (show/hide), search, select, checkbox, picker, stepper, editor, upload, buttons ± icon, link `a`.

**Icons & states (locked):** Material or Lottie; 404/error/empty; skeleton; lazy load — `icons-states.mdc`.

**Design (AI-suggested, dev-approved):** look & feel comes from `design-direction.mdc`; the components below stay locked.

**UI styling (locked):** Tailwind-based shared components — modal, popover, popup, alerts, navbar, bottom toolbar, tabs, cards, headers, back, buttons, typography, grid/flex/gap, forms, loaders, page transition, infinite scroll, images, slideshow/parallax (marketing). **Layout:** per Profile — `normal` \| `layout` \| `auto`, with per-route layouts in `route-layouts.mdc`. **Can add** theme variants; **cannot replace** base system — `ui-styling.mdc`.

### Concept-driven (from the product concept)

| Area | Where | Behavior |
|------|--------|----------|
| Business / domain rules | `concept-domain.mdc` | Filled at install from concept/features |
| DB **schema** / entities | `concept-domain.mdc` → PHP migrations | Tables follow concept — not a generic boilerplate DB |
| Product scope / roles | Project Profile + concept-domain | v1 in/out of scope |
| SEO | Profile + `seo.mdc` | `on`/`off`; Schema.org if on |

### Advanced packs (optional)

Add when Profile **Rule level** = `basic+advanced`. Defaults stay on.

| Area | Advanced file |
|------|----------------|
| Planning | `planning-advanced.mdc` |
| Backend | `backend-advanced.mdc` |
| Frontend | `frontend-advanced.mdc` |
| UI styling | `ui-styling-advanced.mdc` |
| Forms | `forms-advanced.mdc` |
| Validation | `validation-advanced.mdc` |
| Database | `database-advanced.mdc` |
| Security | `security-advanced.mdc` |

### Basic packs (always recommended)

| Area | File |
|------|------|
| Planning | `planning-basic.mdc` |
| Backend | `backend-basic.mdc` |
| Frontend | `frontend-basic.mdc` |
| Security / testing / observability | `security.mdc`, `testing.mdc`, `observability.mdc` |
| SEO | `seo.mdc` (behavior depends on Profile toggle) |

---

## `.cursor/` map

| Path | Purpose |
|------|---------|
| `CURSOR.md` | This brain — profile + global conventions |
| `.cursor/settings.json` | Metadata, globs, hooks |
| `.cursor/rules/` | Always-apply and scoped `.mdc` rules |
| `.cursor/agents/` | Review, debug, test, docs, security personas |
| `.cursor/commands/` | `/install-cursor-pack`, `/project-intake`, `/phase-exit`, `/pr-review`, `/fix-issue`, `/deploy`, `/test`, `/lint` |
| `.cursor/hooks/` | Pre-commit, lint-on-save |
| `.cursor/skills/frontend-design/` | Visual system — **fill during install** from the approved design direction |
| `.cursor/adapters/` | `sync-ai-adapters.sh` — creates `AGENTS.md` / `CLAUDE.md` / `GEMINI.md` / Copilot / Windsurf pointers |
| `AGENTS.md` · `CLAUDE.md` | Tiny pointers so Kimi, Grok, Claude, etc. find this file |

---

## Workflow

1. **Install** = copy + ask + fill Profile / `concept-domain.mdc` / settings / skill / `route-layouts.mdc` (AI proposes design + per-route layouts; dev approves)
2. Confirm Phase C — defaults present; concept filled; **Current phase = P1**
3. Build **one phase at a time** (P1→P5); customize subs from concept
4. At phase end: `/phase-exit` — test leftovers, fixes, carry-over — then advance
5. DB from concept via PHP migrations; forms/validation/styling defaults always on
6. Before commit: hooks / lint / secret scan
7. Production: `/deploy` — live values in **GitHub Secrets** (FTP, DB, API hosts). Every new env key → `.env.example` **and** GitHub Secret (web + mobile API hosts if split)

---

## Production / live (GitHub Secrets)

Live environment is **GitHub Secrets**, not git. Local `.env` is local-only.

| Put in GitHub Secrets | Includes |
|----------------------|----------|
| FTP / SSH | host, user, password/key, deploy path |
| Database | host, name, user, password |
| App / API hosts | `APP_URL`, the URL **web** and **mobile** call when backend is separate, CORS origins |
| Every new env key | same key as `.env.example`, wired into CI in the same change |

Do not hardcode production API hosts in frontend (web or mobile). Full checklist: `.cursor/commands/deploy.md` (`/deploy`).

---

## Do Not (global)

- Finish install as copy-only without asking and filling Profile + concept-domain
- Keep answers only in chat
- Start feature work while required Profile fields are still `TBD`
- **Mix phases** or skip exit gates
- Build a function that has no entry/spec in `phase-plan.mdc`, or leave its status stale
- Start P2 UI before P1 foundation exit OK (unless user explicitly overrides)
- Start P4 integration before P3 API exit OK
- Leave mocks in prod paths after P4 without documenting
- Remove default forms / custom styling / validation / icons-states / **Tailwind ui-styling base**
- Replace locked UI system with another CSS framework or one-off page skins (extensions OK)
- Skip shared 404, status-error, empty screens, skeleton loaders, or lazy load
- Invent DB or domain rules that ignore the concept
- Skip intake and guess brand, stack, or features
- Commit secrets or filled `.env`
- Deploy to production without **GitHub Secrets** for FTP, DB, and API/app hosts
- Add a production env key without the matching GitHub Secret (including the host the frontend calls)
- Hardcode the live API host in web or mobile source when backend is separate
- Skip asking the **Layout strategy** choice (`normal` \| `layout` \| `auto`), or ignore the recorded choice
- Start P2 screens before `route-layouts.mdc` is filled and approved
- Under `layout`: ship the same layout stretched instead of distinct mobile · tablet · desktop layouts
- Under `layout`: split into separate mobile and web projects — one **single codebase**
- Make the dev supply hex codes/fonts as a requirement — the AI proposes the design; dev approves
- Ship a design that is harsh on the eyes (pure black on pure white, big saturated fills, vibrating pairs) or manipulative (dark patterns)
- Assume one specific AI/tool; keep decisions only in chat; skip the AI Handoff Log
- Ship `.sql` migrations or seeds
- Mix bare native form controls with the custom form system
- Skip server-side authorization because the UI hides a control
- Turn on SEO without Schema.org when SEO is enabled
- Copy another product’s brand, copy, or trademarks into this project
- Copy a reference wholesale instead of taking only what the task needs
- Record the reference/source inside files — chat only; the project reads as fresh
