# CURSOR — Reusable project setup pack

Portable, **AI-agnostic** configuration for current and future projects: `CURSOR.md` + `.cursor/` (rules, agents, commands, hooks, skills). Works with **Claude, Kimi, Grok, Gemini, Copilot, Cursor**, and others — and **several AIs can share one project** through files and an AI Handoff Log.

**Install ≠ copy only.** The AI must **ask** during install, **fill** the Project Profile and concept domain from your answers, then use those answers for all work.

---

## Install into a project

```bash
# From this repo into the target project root:
cp CURSOR.md /path/to/project/
cp -R .cursor /path/to/project/
```

In Cursor (or any AI with slash commands), run:

```text
/install-cursor-pack
```

or:

```text
/project-intake
```

or tell any agent: *“Install this pack and run intake.”* (Tools without slash commands: the agent reads `.cursor/commands/project-intake.md` and follows it.)

### Use with other AIs

```bash
bash .cursor/adapters/sync-ai-adapters.sh   # creates AGENTS.md, CLAUDE.md, GEMINI.md, Copilot + Windsurf pointers
```

| Tool | Finds the pack via |
|------|--------------------|
| Cursor | `.cursor/rules/`, `CURSOR.md` |
| Claude | `CLAUDE.md` → `CURSOR.md` |
| Kimi · Grok · Codex · others | `AGENTS.md` → `CURSOR.md` |
| Gemini | `GEMINI.md` |
| Copilot / Windsurf | `.github/copilot-instructions.md` / `.windsurfrules` |

Pointer files stay tiny — `CURSOR.md` is the single source of truth. Fallbacks for tools without rules/commands/hooks/agents: `.cursor/rules/multi-ai.mdc`. When several AIs work on the same project, each reads and appends to the **AI Handoff Log** in `CURSOR.md`.

### What the AI does

1. Places `CURSOR.md` + `.cursor/` (if missing)
2. Asks about concept, stack (including web / mobile / web+mobile), **layout strategy**, forms, DB, SEO, rules, etc. — and **proposes** the design itself (no need to know colors or fonts)
3. Writes answers into:
   - `CURSOR.md` — Project Profile
   - `.cursor/rules/concept-domain.mdc` — business rules + entities
   - `.cursor/settings.json` — project name, SEO flag
   - `.cursor/skills/frontend-design/SKILL.md` — theme tokens (from the design option you approved)
   - `.cursor/rules/route-layouts.mdc` — layout for **every route** (mobile · tablet · desktop)
4. Keeps **default rules** on, then continues your build request

Full detail: [`CURSOR.md`](./CURSOR.md)

---

## Implementation phases (default)

| Phase | Focus |
|-------|--------|
| **P1** Foundation | Concept, tokens, skeleton, PHP migrations/seeds |
| **P2** Mock UI + mock data | All v1 screens on mocks; custom forms |
| **P3** API backend | Real API; UI may still use mocks |
| **P4** Integration + mock cleanup | Wire UI ↔ API; remove mocks from prod paths |
| **P5** Cleanup, docs, final testing | Dead code, documentation, regression |

Each phase has **function-by-function sub-tasks**: at install the AI generates `.cursor/rules/phase-plan.mdc` (features → routes/endpoints/tables → functions, each with a spec and *Done when*), and works one function at a time. At the end of every phase run **`/phase-exit`**: smoke/tests, leftovers, fixes, and carry-over into the next phase — required before advancing.

Details: [`CURSOR.md`](./CURSOR.md) · `.cursor/rules/implementation-phases.mdc`

---

## Rule layers

| Layer | Behavior |
|-------|----------|
| **Default (never remove)** | Tailwind ui-styling (UX-first, modern, eye-comfortable, **Simplified**), design direction, layout strategy, multi-AI, forms, validation, PHP migrate/seed, phases, references, icons-states, install + restrictions |
| **Concept-driven** | Domain rules and DB schema follow the product concept (`concept-domain.mdc` → migrations) |
| **Advanced (optional)** | Extra packs for planning, backend, frontend, forms, validation, database, security |

### Design — the AI suggests, you approve

You do not need to know colors, fonts, or styles. From your **concept** the AI proposes **2–3 design directions** (mood, palette with contrast ratios, type pairing, shape/density, icon system, motion) and marks **one Recommended**. You pick, tweak, or say "you decide". Every suggestion must be **UX-first, modern, easy on the eyes** (no pure black on pure white, one accent, soft dark mode, comfortable type) and **worth coming back to** (fast, consistent, remembers your place, small delight — no dark patterns). Brand values you already have (logo, colors, fonts) are respected as constraints. See `.cursor/rules/design-direction.mdc`.

### UI styling (locked — Tailwind)

**Tailwind CSS** + shared components: modal, popover, popup, alerts, navbar, bottom toolbar, tabs, cards, headers, back, buttons, typography, grid/flex/gap, forms, loaders, page transitions, infinite scroll, images, slideshow/parallax (marketing). **Can extend** theme/variants; **cannot replace** the base system — `.cursor/rules/ui-styling.mdc`.

### Layout strategy — you choose, then every route gets a layout

Asked for every project:

| Option | Meaning |
|--------|---------|
| **Normal Responsive** | One layout that reflows on mobile. A mobile-friendly website — **not** mobile-app-ready |
| **Layout Responsive** | A different layout per view: mobile ≠ tablet ≠ desktop. App-ready. One codebase |
| **Auto** | The AI recommends the ideal layouting from your concept; you confirm |

After you choose, the AI writes a **layout concept for each route** — recommended pattern plus explicit **mobile · tablet · desktop** layouts (including how data tables behave on each) — into `.cursor/rules/route-layouts.mdc`. You approve it before any screen is built. Details: `.cursor/rules/layout-strategy.mdc`.

### Default forms (always)

Custom Tailwind-styled chrome for: label, text, email, tel, password (show/hide), search, select, checkbox, **radio**, **slider**, picker, stepper, editor, upload, buttons ± icon, and link `a`.

### Icons, states & loading (locked)

At install, choose **Material Icons** or **Lottie** (animated web JSON) as the primary icon system. Every project must ship shared animated **404**, other **status-error**, and **empty data** screens, plus **skeleton loaders** and **lazy-loaded** routes/chunks. These cannot be skipped or replaced with one-offs — see `.cursor/rules/icons-states.mdc`.

### References / inspiration

Give the agent a screenshot, link, or old project and it takes **only the parts the task needs**, re-expressed with this project's tokens and naming. No source name, URL, or "inspired by" note ever lands in code, comments, docs, or commits — the project reads as fresh.

### Database

- **Engine (locked):** PHP `migrations` / `seeds` only — **no `.sql`** as source of truth; prepared statements
- **Schema:** derived from the project **concept**, not a generic boilerplate

### SEO

Toggle `on` / `off` in Project Profile. When `on`, **Schema.org** JSON-LD is required on relevant public pages.

---

## Layout

```text
CURSOR.md                 # Project brain + intake + profile + AI handoff log
AGENTS.md / CLAUDE.md     # Tiny pointers for Kimi, Grok, Claude, …
.cursor/
  settings.json           # Metadata, globs, behavior flags
  rules/                  # defaults, concept, basic + advanced
  agents/                 # reviewer, debugger, security, …
  commands/               # install, intake, pr-review, deploy, …
  hooks/                  # pre-commit, lint-on-save
  adapters/               # sync-ai-adapters.sh (pointer files for other AIs)
  skills/frontend-design/ # Theme skill (fill at install)
```

### Useful commands

| Command | Purpose |
|---------|---------|
| `/install-cursor-pack` | Install + interview + fill |
| `/project-intake` | Same / refresh Profile |
| `/phase-exit` | End-of-phase gate (tests, leftovers, next-phase carry) |
| `/pr-review` | PR review |
| `/fix-issue` | Diagnose a bug |
| `/lint` | Lint |
| `/test` | Tests |
| `/deploy` | Deploy using intake host/stack — live `.env`, FTP, DB, and API hosts in **GitHub Secrets** |

---

## Source

Repository: [github.com/bandeto45/CURSOR](https://github.com/bandeto45/CURSOR)
