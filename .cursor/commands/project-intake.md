---
name: project-intake
description: Install or update the project — Ask → Recommend → Decide → Write → Confirm, then generate the plan files.
---

# /project-intake

```
/project-intake            # first install
/project-intake --update   # Profile already filled: change one topic, log it
```

## Steps
1. Follow `CURSOR.md` → **§1 Install** and **§2 Intake** (one topic at a time; format in `.cursor/rules/format.mdc`).
2. `--update`: ask which topic changed, re-run only that topic, set the affected file to `DRAFT` until re-approved, add a change-log line.
3. Generate/refresh in order: `concept-domain.mdc` → `route-layouts.mdc` → `phase-plan.mdc`.
4. Build the P1 **proposal package** from `.cursor/templates/` (`proposal.mdc`): deck, Letter-size document, guide skeleton.
5. Run `.cursor/adapters/sync-ai-adapters.sh`; append an **AI Handoff Log** row.
6. Confirm the "Install complete when" checklist, then continue from the Current phase (`P1` by default).
