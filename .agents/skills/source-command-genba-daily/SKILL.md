---
name: source-command-genba-daily
description: Run Genba's shared daily media workflow for official company, sales-job, and hiring-signal updates, X drafts, validation, and approved deployment. Use when the user asks for genba-daily, daily Genba operations, job-data refreshes, hiring-signal updates, or the regular media update cycle.
---

# Genba Daily

1. Read `PROJECT_RULES.md` completely.
2. Read `ops/daily-workflow.md` completely.
3. Execute the shared workflow in order without duplicating or weakening its rules.
4. Run `npm run validate:agents` before treating the task as complete.
5. Apply the external-action rules in `PROJECT_RULES.md` and `ops/daily-workflow.md`; do not maintain a separate approval rule in this skill.

Keep business rules in `PROJECT_RULES.md` and detailed steps in `ops/daily-workflow.md`. Do not copy them into this skill. If either shared file changes, this skill uses the new version automatically.
