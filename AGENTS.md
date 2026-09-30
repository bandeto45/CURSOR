# AGENTS.md

This project uses the **CURSOR pack** — an AI-agnostic instruction set. Any AI (Claude, Kimi, Grok, Gemini, Copilot, Cursor, Codex, …) follows the same rules.

**Read `CURSOR.md` first.** It is the single source of truth (Project Profile, install/intake flow, phases, rules).

Before working:

1. Read `CURSOR.md` → Project Profile, **Current phase**, **AI Handoff Log**
2. Read `.cursor/rules/multi-ai.mdc` (how to work without Cursor-only features, and how several AIs share one project)
3. If Profile still has `TBD`, run the install intake (`.cursor/commands/project-intake.md`) before building
4. When you finish, append a row to the **AI Handoff Log** in `CURSOR.md`

Do not copy rules into this file — keep it a pointer.
