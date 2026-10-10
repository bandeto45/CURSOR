---
name: phase-exit
description: End-of-phase gate — code review, find gaps, fix, pass. Do not open the next phase until it passes.
---

# /phase-exit

Close the **current** phase before the next one starts. P2 does not start until P1 passes, and the same rule applies to every later phase.

## Usage

```
/phase-exit
/phase-exit P2
/phase-exit --next
```

## Steps

1. Read `CURSOR.md` → **Current phase**. Done or not is the checkboxes for that phase in `implementation-phases.mdc`.
2. Confirm each checked item has its `U-nn` rows `done` in `phase-plan.mdc`. P1 also needs the proposal package approved (deck, Letter PDF, guide).
3. **Code review** this phase's diff — correctness, security, tests, conventions (`/pr-review` dimensions). Write the findings.
4. **Find gaps** against this phase's checkboxes, `phase-plan.mdc`, and `route-layouts.mdc` (missing items, states, tests, layout drift, authz).
5. **Fix** every finding and every gap in this phase. Review the fixes again. An unfixed bug blocks the gate. `deferred (reason)` only when the dev wrote that on the line.
6. Gate **passed** only when no review blockers remain and the gaps are fixed.
7. Ask the dev to confirm **exit OK**. Do not treat a vague "sige" as a pass.
8. After **exit OK**: bump **Current phase** in `CURSOR.md`. Not before.
9. Append an **AI Handoff Log** row.
10. If Profile → **Guide tips** is `on`: end with one line — the suggested next prompt (e.g. `Build R-01 per route-layouts`) and one token tip (e.g. start a fresh chat for the next phase).

## Do Not

- Open the next phase before this gate is passed
- Advance with unfixed review findings or unlisted gaps
- Drop default rules during cleanup
