# CURSOR — Reusable AI project pack

Portable, **AI-agnostic** setup for any project: `CURSOR.md` + `.cursor/`. Works with **Claude, Kimi, Grok, Gemini, Copilot, Cursor** and others — and several AIs can share one project through files and an AI Handoff Log.

**One signature for every decision:** **Ask → Recommend → Decide → Write → Confirm.** The AI recommends (one Recommended option, with trade-offs); you accept, tweak, or say "you decide"; the result is written to a file immediately. Format: [`.cursor/rules/format.mdc`](./.cursor/rules/format.mdc).

## Install

```bash
cp CURSOR.md AGENTS.md CLAUDE.md /path/to/project/
cp -R .cursor /path/to/project/
cd /path/to/project && bash .cursor/adapters/sync-ai-adapters.sh   # pointers for Gemini, Copilot, Windsurf
```

Then tell any AI: *"Install this pack and run intake"* (or `/install-cursor-pack` · `/project-intake`; tools without slash commands read `.cursor/commands/project-intake.md`).

| Tool | Finds the pack via |
|------|--------------------|
| Cursor | `.cursor/rules/`, `CURSOR.md` |
| Claude | `CLAUDE.md` → `CURSOR.md` |
| Kimi · Grok · Codex · others | `AGENTS.md` → `CURSOR.md` |
| Gemini · Copilot · Windsurf | `GEMINI.md` · `.github/copilot-instructions.md` · `.windsurfrules` |

## What the AI does at install

1. **Concept** — asks what you are building; recommends features, roles, entities, domain rules
2. **Stack** — recommends one that fits
3. **Layout** — you pick **Normal Responsive** (one layout that reflows; not app-ready) · **Layout Responsive** (different layout per mobile/tablet/desktop) · **Auto** (AI decides); then it writes a **layout for every route**
4. **Design** — you need no design knowledge: it recommends 2–3 looks (UX-first, modern, easy on the eyes, worth coming back to), one marked Recommended
5. **Plan** — writes a function-by-function plan for P1–P5
6. **Proposal (P1)** — builds the proposal package from ready templates: a **presentation** (React.js or Native), a **US Letter proposal document** (print → PDF), and a **guide**

Surfaces: **web**, **mobile**, or **web + mobile** — always **one project**; `web + mobile` uses **Layout Responsive** (a layout per screen class, never one stretched layout). Ready folder/shell structure for each: `.cursor/rules/project-structure.mdc`.

Everything lands in files: Profile in `CURSOR.md`, then `concept-domain.mdc` → `route-layouts.mdc` → `phase-plan.mdc`, and `skills/frontend-design/SKILL.md`.

## Phases

| Phase | Build |
|-------|-------|
| **P1** Foundation | Concept, design + layouts approved, tokens, skeleton, migrations/seeds, plan, **proposal package** |
| **P2** Mock UI | Every route to its layout on mock data |
| **P3** API | Endpoint by endpoint, server validation + authz |
| **P4** Integration | UI ↔ API, mocks removed |
| **P5** Cleanup & ship | Dead code, docs, regression, deploy checklist |

One function at a time; each phase ends with `/phase-exit`.

## Locked defaults

Tailwind UI system with shared components · custom forms · client + server validation · PHP migrations/seeds (no `.sql`) · animated 404/error/empty, skeletons, lazy load · Material or Lottie icons · GitHub Secrets for live env · references leave no trace. Everything else is a recommendation.

## Files

```text
CURSOR.md                  # Brain: install, intake, Profile, phases, handoff log, rule map
AGENTS.md · CLAUDE.md      # Tiny pointers
.cursor/
  rules/                   # One file per topic (see the rule map in CURSOR.md)
    format.mdc restrictions.mdc multi-ai.mdc references.mdc
    design-direction.mdc layout-strategy.mdc ui-styling.mdc forms.mdc icons-states.mdc
    validation.mdc database.mdc implementation-phases.mdc
    project-structure.mdc proposal.mdc                  # ready structure per surface · P1 proposal package
    backend.mdc security.mdc testing.mdc seo.mdc        # scoped by globs
    concept-domain.mdc route-layouts.mdc phase-plan.mdc # AI-filled per project
  skills/frontend-design/  # AI-filled visual tokens
  templates/               # deck-native · deck-react · proposal-doc (Letter) · guide
  commands/  agents/  hooks/  adapters/  settings.json
```

| Command | Purpose |
|---------|---------|
| `/install-cursor-pack` · `/project-intake` | Install / update (`--update`) |
| `/phase-exit` | End-of-phase gate |
| `/pr-review` · `/fix-issue` · `/lint` · `/test` | Review, diagnose, lint, test |
| `/deploy` | Deploy — live values in **GitHub Secrets** |

Repository: [github.com/bandeto45/CURSOR](https://github.com/bandeto45/CURSOR)
