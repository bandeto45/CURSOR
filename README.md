# CURSOR — Reusable project setup pack

Portable **Cursor** configuration for current and future projects: `CURSOR.md` + `.cursor/` (rules, agents, commands, hooks, skills).

**Install ≠ copy only.** The AI must **ask** during install, **fill** the Project Profile and concept domain from your answers, then use those answers for all work.

---

## Install into a project

```bash
# From this repo into the target project root:
cp CURSOR.md /path/to/project/
cp -R .cursor /path/to/project/
```

In Cursor, run:

```text
/install-cursor-pack
```

or:

```text
/project-intake
```

or tell the agent: *“Install this Cursor pack and run intake.”*

### What the AI does

1. Places `CURSOR.md` + `.cursor/` (if missing)
2. Asks about concept, stack, theme, forms, DB, SEO, rules, etc.
3. Writes answers into:
   - `CURSOR.md` — Project Profile
   - `.cursor/rules/concept-domain.mdc` — business rules + entities
   - `.cursor/settings.json` — project name, SEO flag
   - `.cursor/skills/frontend-design/SKILL.md` — theme tokens
4. Keeps **default rules** on, then continues your build request

Full detail: [`CURSOR.md`](./CURSOR.md)

---

## Rule layers

| Layer | Behavior |
|-------|----------|
| **Default (never remove)** | Custom unified forms, UI styling, validation (client + server), PHP migrate/seed only, install + restrictions |
| **Concept-driven** | Domain rules and DB schema follow the product concept (`concept-domain.mdc` → migrations) |
| **Advanced (optional)** | Extra packs for planning, backend, frontend, forms, validation, database, security |

### Default forms (always)

Custom styled, shared chrome for: label, text, email, tel, password (show/hide), search, select, checkbox, picker, stepper, editor, upload, buttons ± icon, and link `a`.

### Database

- **Engine (locked):** PHP `migrations` / `seeds` only — **no `.sql`** as source of truth; prepared statements
- **Schema:** derived from the project **concept**, not a generic boilerplate

### SEO

Toggle `on` / `off` in Project Profile. When `on`, **Schema.org** JSON-LD is required on relevant public pages.

---

## Layout

```text
CURSOR.md                 # Project brain + intake + profile
.cursor/
  settings.json           # Metadata, globs, behavior flags
  rules/                  # defaults, concept, basic + advanced
  agents/                 # reviewer, debugger, security, …
  commands/               # install, intake, pr-review, deploy, …
  hooks/                  # pre-commit, lint-on-save
  skills/frontend-design/ # Theme skill (fill at install)
```

### Useful commands

| Command | Purpose |
|---------|---------|
| `/install-cursor-pack` | Install + interview + fill |
| `/project-intake` | Same / refresh Profile |
| `/pr-review` | PR review |
| `/fix-issue` | Diagnose a bug |
| `/lint` | Lint |
| `/test` | Tests |
| `/deploy` | Deploy using intake host/stack |

---

## Source

Repository: [github.com/bandeto45/CURSOR](https://github.com/bandeto45/CURSOR)
