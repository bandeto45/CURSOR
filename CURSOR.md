# CURSOR.md — Reusable Project Brain

Primary instruction set for AI assistants. This repo is a **portable Cursor setup** for any project. **Install = copy files + interview + fill answers in the same session** so the AI already has project truth before it builds.

---

## What this is

A ready-to-install `.cursor/` + `CURSOR.md` pack. It is **not** tied to one product.

**Critical rule:** Kapag ini-install ito ng AI, **hindi sapat ang pag-copy ng files.** Habang nag-i-install, **magtatanong** ang AI, **hihintayin ang sagot**, at **agad ifi-fill-upan** ang `CURSOR.md` / `.cursor/settings.json` / `frontend-design` skill. Tapos na ang install **lang** kapag wala nang `TBD` sa Project Profile (maliban sa items na explicitly deferred ng user).

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
   - `.cursor/skills/frontend-design/SKILL.md` → colors, type, icons, baseline
4. **Confirm filled Profile + concept-domain** with a short summary.
5. **Only then** continue with the user’s build request — using filled instructions. **Default rules stay on** (forms, UI styling, validation, PHP migrate/seed).

### Phase C — Install complete checklist

- [ ] Files present: `CURSOR.md`, `.cursor/rules/`, agents, commands, hooks, skills
- [ ] Project Profile has real values (not `TBD`) for answered fields
- [ ] `concept-domain.mdc` filled from concept (entities + domain rules)
- [ ] SEO `on`/`off` set; if `on`, Schema.org noted
- [ ] Rule level `basic` or `basic+advanced` set
- [ ] **Current phase** set (usually `P0`); phases P0–P4 acknowledged
- [ ] Default rules present and not disabled (forms, ui-styling, validation, database engine, implementation-phases)
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
- Hosting / deploy target?
- Package managers allowed or forbidden (e.g. no Composer)?

### 3. Theme & UI styling
- Brand name / wordmark rules?
- Primary / secondary / text / surface colors (hex)?
- Typography (font family + weights)?
- Icon library (e.g. Phosphor only)?
- Light / dark / both? Default mode?
- Visual direction (editorial, minimal, dashboard, etc.)?
- Reference pages or “UI baseline” route?

### 4. Forms & components
- Confirm unified custom form system (required by this pack — see Forms)?
- Any extra field types beyond the standard set?
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
- Confirm **default rules stay forever**: forms (custom styling), UI styling, validation, PHP migrate/seed
- Concept-specific domain rules → write into `concept-domain.mdc`
- Add **Advanced** packs? (`basic` vs `basic+advanced`)
- Extra hard bans / compliance (PII, payments, age gates)?

### 8. Implementation & other
- Confirm default phases **P0→P4** (foundation → mock UI → API → integration/mock cleanup → cleanup/docs/final test)?
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
| **Theme** | TBD |
| **Typography** | TBD |
| **Icons** | TBD |
| **SEO** | `off` \| `on` (default template: `off` until intake) |
| **Schema.org** | Required when SEO = `on` |
| **Rule level** | `basic` \| `basic+advanced` |
| **Current phase** | `P0` \| `P1` \| `P2` \| `P3` \| `P4` \| `done` (default after install: `P0`) |
| **v1 in scope** | TBD |
| **v1 out of scope** | TBD |

---

## Implementation phases (default)

**Do not mix phases.** Full sub-tasks + exit gates: `.cursor/rules/implementation-phases.mdc`. Use `/phase-exit` at the end of each phase.

| Phase | Name | What you build |
|-------|------|----------------|
| **P0** | Foundation | Concept lock, tokens, skeleton, PHP migrations/seeds |
| **P1** | Mock UI + mock data | All v1 screens on mocks; custom forms + client validation |
| **P2** | API backend | Real API on applied schema; server validation; UI may stay on mocks |
| **P3** | Integration + mock cleanup | Wire UI ↔ API; remove mock data from prod paths |
| **P4** | Cleanup, docs, final testing | Dead code gone, documentation, regression, ship checks |

### Every phase has

1. **Subs** — numbered checklist under that phase (customize from concept at install)
2. **Exit gate** — smoke/tests + leftovers + fixes + carry-over to next phase — **required** before advancing

### Exit gate (summary)

- [ ] Subs done or explicitly deferred  
- [ ] Defaults intact  
- [ ] Phase smoke/tests passed  
- [ ] Bugs fixed or listed for next phase  
- [ ] Next-phase adds written down  
- [ ] Agree **exit OK** → then bump Current phase  

---

## Rule layers

```
DEFAULT (never remove)     CONCEPT (from intake)     ADVANCED (optional)
forms · ui-styling         concept-domain.mdc        *-advanced.mdc
validation · database      entities → migrations     planning/backend/frontend
engine · restrictions      SEO on/off · scope        forms/validation/db/security
install · defaults
```

### Default rules (permanent — hindi mawawala)

| File | Locked behavior |
|------|-----------------|
| `defaults.mdc` | Index of what must stay |
| `forms.mdc` | Unified **custom** form controls + chrome |
| `ui-styling.mdc` | Shared tokens / customized styling |
| `validation.mdc` | Client UX + **server** validation |
| `database.mdc` | PHP migrate/seed only; prepared statements |
| `implementation-phases.mdc` | P0–P4 order, subs, exit gates |
| `install.mdc` / `restrictions.mdc` | Install ask+fill; hard bans |

Controls covered by forms default: label, text, email, tel, password (show/hide), search, select, checkbox, picker, stepper, editor, upload, buttons ± icon, link `a`.

### Concept-driven (magbabase sa concept)

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
| `.cursor/skills/frontend-design/` | Visual system — **fill during install** |

---

## Workflow

1. **Install** = copy + ask + fill Profile / `concept-domain.mdc` / settings / skill
2. Confirm Phase C — defaults present; concept filled; **Current phase = P0**
3. Build **one phase at a time** (P0→P4); customize subs from concept
4. At phase end: `/phase-exit` — test leftovers, fixes, carry-over — then advance
5. DB from concept via PHP migrations; forms/validation/styling defaults always on
6. Before commit: hooks / lint / secret scan

---

## Do Not (global)

- Finish install as copy-only without asking and filling Profile + concept-domain
- Keep answers only in chat
- Start feature work while required Profile fields are still `TBD`
- **Mix phases** or skip exit gates
- Start P1 UI before P0 foundation exit OK (unless user explicitly overrides)
- Start P3 integration before P2 API exit OK
- Leave mocks in prod paths after P3 without documenting
- Remove default forms / custom styling / validation rules
- Invent DB or domain rules that ignore the concept
- Skip intake and guess brand, stack, or features
- Commit secrets or filled `.env`
- Ship `.sql` migrations or seeds
- Mix bare native form controls with the custom form system
- Skip server-side authorization because the UI hides a control
- Turn on SEO without Schema.org when SEO is enabled
- Copy another product’s brand, copy, or trademarks into this project
