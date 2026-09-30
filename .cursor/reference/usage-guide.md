# Using this pack — Getting Started (for the dev)

> Shown by the AI right after install, re-shown by `/guide`, saved as `docs/USING-THE-PACK.md` on request. **Everything here is optional advice — nothing is enforced.** The AI presents it in the dev's own language; files stay English.

## 1. The 60-second picture
- You **talk in plain language**; the AI follows the pack: **Ask → Recommend → Decide → Write → Confirm**. It proposes, you accept / tweak / say **"you decide"**.
- Decisions are written to files (Profile in `CURSOR.md`, `concept-domain`, `route-layouts`, `phase-plan`, design skill) — so any AI can continue and you never repeat yourself.
- Work runs in **5 phases** (P1 foundation → P5 ship), **one small unit at a time**. `/phase-exit` closes a phase.

## 2. Prompts you can copy
| When | Say this |
|------|----------|
| **Install** | `Install this pack and run the intake.` |
| Unsure about anything | `You decide — recommend the best option and continue.` |
| Answer intake fast | Answer several topics in one message, or `Skip for now, come back later.` |
| Resume after a break / new chat | `Continue this project. Read CURSOR.md (Load map), the Handoff Log and my Current phase, then tell me the next unit.` |
| Where are we? | `Status: current phase, what is done, what is next (from phase-plan).` |
| Build a screen (P2) | `Build R-07 exactly per its route-layouts block.` |
| Build an endpoint (P3) | `Build E-12 per phase-plan, with validation, authz, and tests.` |
| Wire UI to API (P4) | `Cut feature F-03 over from mocks to the real API.` |
| Fix a bug | `Bug in R-07 on mobile: <what happens>. Fix only that; don't touch other files.` |
| Change the layout / design | `Change R-07's tablet layout to <idea>. Update route-layouts first, then the code.` |
| Tweak one component | `Make the order-summary Card denser on mobile — use className overrides and record it in Overrides.` |
| Add a feature | `Add feature: <idea>. Update concept-domain and phase-plan first, then wait for my OK.` |
| Close a phase | `/phase-exit` |
| Deploy | `/deploy setup` → `/deploy staging` → `/deploy production` |
| Switch AI | `Read CURSOR.md and continue. Append to the Handoff Log when you finish.` |
| Show this guide | `/guide` · `/guide tokens` · `/guide prompts` |

## 3. Save tokens (and money)
1. **Name the ID.** `Build R-07` beats "build the orders page" — the AI reads one block, not the whole project.
2. **One task per prompt**, one phase at a time; don't ask for "the whole app".
3. **Start a fresh chat per phase or big task.** Memory lives in files (Handoff Log, phase-plan), so a new chat costs little and avoids a bloated context.
4. **Don't paste files or screenshots the AI already has.** Say the path or ID; approved decisions are already in the project files.
5. **Answer in batches** (intake) and use **"you decide"** instead of long back-and-forth.
6. **Keep replies short:** `Reply briefly. No recap. Show only changed files.`
7. **Run lint/tests yourself** and paste only the failing lines, not whole logs.
8. **Fix the file, not the chat.** If a decision changes, say "update <file> first" so it isn't re-explained later.
9. **Match the model to the job:** stronger model for P1 (concept, design, layout, plan) and architecture; a cheaper/faster one for mechanical units (CRUD endpoints, tests, wiring). Switching is safe — see the Handoff Log.
10. **Trim what you don't use:** SEO off, no networking/marketing plan, no mobile → those rules and component groups are never read.
11. **Never say** "read the whole repo" or "read all rules". The **Load map** in `CURSOR.md` already says what to read per moment.

## 4. Tips for an easier build
- **Approve early, change rarely.** Design direction, layout strategy, and routes are cheapest to change in P1; later edits ripple.
- **Look at the component page** (`/_components`) after P2.3 — spot style issues before screens multiply.
- **Review the proposal deck/document** before P2; it is the client-ready summary of everything decided.
- **Use staging** for client demos; only production gets real data.
- **Small commits, small PRs** — one unit or one screen each.
- **When the AI drifts** (invents scope, skips a file): `Stop. Re-read CURSOR.md and restrictions.mdc, then redo it per the plan.`
- **When unsure what to ask:** `What do you need from me to finish this phase?`

## 5. Working with several AIs
- Same project, any mix (Claude, Kimi, Grok, Gemini, Cursor…). Each reads `CURSOR.md`, does its unit, and **appends one row to the Handoff Log**.
- Tell each AI the same starting line (see "Switch AI" above). Don't paste one AI's chat into another — the files are the handoff.

## 6. Quick fixes
| Symptom | Try |
|---------|-----|
| AI asks things already decided | `It is in the project files — read CURSOR.md and concept-domain, then continue.` |
| AI wants to restart intake | `Profile is filled. Use /project-intake --update only for <topic>.` |
| Output ignores the layout | `Rebuild R-nn strictly from its route-layouts block (mobile, tablet, desktop).` |
| Styles look inconsistent | `Use the catalog component; adjust only with className overrides recorded in Overrides.` |
| Context feels huge / slow | Start a new chat and use the "Resume" prompt |
| Tips are noisy | `Turn guide tips off.` (Profile → Guide tips) |
