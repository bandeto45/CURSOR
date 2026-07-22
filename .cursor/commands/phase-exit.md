---
name: phase-exit
description: Run end-of-phase exit gate — tests leftovers, fixes, and carry-over to next phase.
---

# /phase-exit

Close the **current** implementation phase before starting the next.

## Usage

```
/phase-exit
/phase-exit P1
/phase-exit --next
```

## Steps

1. Read `CURSOR.md` → **Current phase** and `.cursor/rules/implementation-phases.mdc`.
2. List this phase’s **sub-tasks** — done / deferred / missing.
3. Run the shared **Phase exit gate**:
   - Defaults still on (forms, ui-styling, validation, PHP migrate/seed)
   - Smoke/tests for this phase’s deliverables
   - Bugs: fix now vs carry
   - Gaps/adds for **next** phase — write into Profile / concept-domain / PHASE notes
   - No half-started later-phase work
4. Ask user to confirm **exit OK**.
5. If OK and `--next` (or user agrees): bump **Current phase** in `CURSOR.md`.
6. Summarize carry-over for the next phase.

## Do Not

- Advance phase with silent leftovers
- Start the next phase’s main work before exit OK
- Drop default rules during cleanup
