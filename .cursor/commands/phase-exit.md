---
name: phase-exit
description: Run end-of-phase exit gate — tests leftovers, fixes, and carry-over to next phase.
---

# /phase-exit

Close the **current** implementation phase before starting the next.

## Usage

```
/phase-exit
/phase-exit P2
/phase-exit --next
```

## Steps

1. Read `CURSOR.md` → **Current phase** and `.cursor/rules/implementation-phases.mdc`.
2. Open `phase-plan.mdc`: list this phase’s units (`U-nn`) — done / deferred / missing.
3. Run the shared **Phase exit gate**:
   - P1 only: proposal package approved (deck, Letter PDF, guide)
   - Default rules intact (`CURSOR.md` → Rule map)
   - Smoke/tests for this phase’s deliverables
   - Bugs: fix now vs carry
   - Gaps/adds for **next** phase — write into `phase-plan.mdc` (carry-over) / Profile / `concept-domain.mdc`
   - No half-started later-phase work
4. Ask user to confirm **exit OK**.
5. If OK and `--next` (or user agrees): bump **Current phase** in `CURSOR.md`.
6. Append an **AI Handoff Log** row; summarize carry-over for the next phase.

## Do Not

- Advance phase with silent leftovers
- Start the next phase’s main work before exit OK
- Drop default rules during cleanup
