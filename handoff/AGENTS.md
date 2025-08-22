# Agents & Roles (rubi-platform-builder)

## Agents
- project-overseer (Claude)
  - Triage tasks, write acceptance criteria, keep STATUS.md updated, and record DECISIONS.md.
- codex-cli (this assistant)
  - Implement features/fixes, write tests, update docs, and summarize in HANDOFF.md.
- Human owner
  - Set priorities, approve scope, provide product context.

## Collaboration Rules
- Single source of truth: repository files.
- One owner per task at a time; PR-driven changes with checklists and AC.
- Append-only logs: DECISIONS.md, HANDOFF.md.

## Handoff Rhythm
- Update STATUS.md (Now/Next/Blocked) at session start/end.
- Add DECISIONS.md entries for impactful changes.
- Append a section to HANDOFF.md for significant milestones.

