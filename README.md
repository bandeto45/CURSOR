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

## After install: the AI guides you

When the install finishes, the AI shows a short **Getting Started guide** in your language: what to do next, copy-paste prompts, and **token-saving tips** — all optional. Re-open it any time with `/guide` (`/guide prompts`, `/guide tokens`, `/guide save` → `docs/USING-THE-PACK.md`). Full text: `.cursor/reference/usage-guide.md`.

## Shortcuts & any language

Write short prompts with shortcuts — `.go` continue · `.b R-07` build a screen · `.e E-12` build an endpoint · `.fix` · `.chg` · `.add` · `.yd` (you decide) · `.px` (phase exit) · `.dep s|p` (deploy) — plus any words in **any language** (Tagalog, Taglish, English, …). The AI replies in your language; files and code stay English. Deploy/delete/push always ask for confirmation. `.?` lists everything (`.cursor/rules/shortcuts.mdc`). **Free help, no AI:** `bash .cursor/adapters/help.sh` (`keys` · `cmds` · `prompts` · `tokens` · `all`).

## What the AI does at install

1. **Concept** — asks what you are building; recommends features, roles, entities, domain rules
2. **Stack** — recommends one that fits
3. **Layout** — you pick **Normal Responsive** (one layout that reflows; not app-ready) · **Layout Responsive** (different layout per mobile/tablet/desktop) · **Auto** (AI decides); then it writes a **layout for every route**
4. **Design** — you need no design knowledge: it recommends 2–3 looks (UX-first, modern, easy on the eyes, worth coming back to), one marked Recommended
5. **Plan** — writes a function-by-function plan for P1–P5
6. **Proposal (P1)** — builds the proposal package from ready templates: a **presentation** (React.js or Native), a **US Letter proposal document** (print → PDF), and a **guide**

UI: a **component catalog** (`ui-components.mdc`) — 100+ components (buttons, alerts, forms, pickers, modal/popover, slides, player, camera, charts, lists, feeds, ticket cards, navbars/tabs/toolbars, panels, network trees for unilevel/binary/affiliate, hooks…), each with a spec and a mobile · tablet · desktop layout, shown on a dev-only component page — plus a **transition system** (`transitions.mdc`): native-feel push/pop, sheets and swipe-back gestures on mobile, quiet crossfades on desktop, reduced-motion safe, one transition defined per route.

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

## Error console (dev)

A switch that shows an **error-log popup** for UI errors, failed backend/API calls (with the server's debug block), and status problems (404/401/5xx, offline, slow, `/health`). Off = nothing captured. Local: on; staging: available (`?debug=1`); **production: stripped**. Each entry has **Copy for AI** (a ready `.fix R-07 …` line, secrets redacted). `.dbg on|off`; rules `.cursor/rules/error-log.mdc`, code `.cursor/templates/error-console/`.

## Environments & deploy

local · **staging** · production: `develop` deploys to staging automatically, `main` deploys to production after an **approval gate**. Secrets live in **GitHub Environments** (same key names, different values per environment — never in git or chat). Choose **FTP or SSH**; ready workflow templates (`.cursor/templates/ci/`) check secrets first, build with each environment's API host, write the server `.env` from secrets, run `db:up`, upload, and smoke-test. Staging is always `noindex`; production is never seeded. Run `/deploy setup`.

## Locked defaults

Tailwind UI system with shared components · custom forms · client + server validation · migrations via the backend's own tool (Node, Python, PHP, Ruby, Go, Java, .NET…) · animated 404/error/empty, skeletons, lazy load · Material or Lottie icons · GitHub Secrets for live env · references leave no trace. Everything else is a recommendation.

## Files

```text
CURSOR.md                  # Brain: install, intake, Profile, phases, handoff log, rule map
AGENTS.md · CLAUDE.md      # Tiny pointers
.cursor/
  rules/                   # One file per topic; only format · restrictions · multi-ai are always on
  reference/               # On-demand detail: components/ · phases/ · layout-patterns.md · migrations.md
    format.mdc restrictions.mdc multi-ai.mdc references.mdc
    design-direction.mdc layout-strategy.mdc ui-styling.mdc ui-components.mdc transitions.mdc forms.mdc icons-states.mdc
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
| `/guide` | How to prompt, save tokens, work faster |
| `/phase-exit` | End-of-phase gate |
| `/pr-review` · `/fix-issue` · `/lint` · `/test` | Review, diagnose, lint, test |
| `/deploy` | `setup` · `staging` · `production` · `rollback` — FTP or SSH, **GitHub Environments + Secrets** per environment, approval gate on production |

Repository: [github.com/bandeto45/CURSOR](https://github.com/bandeto45/CURSOR)
