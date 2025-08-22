# Tasks Backlog

Statuses: pending | in_progress | review | done | blocked

| ID | Title                                      | Owner            | Status      | Priority | Acceptance Criteria |
|----|--------------------------------------------|------------------|-------------|----------|---------------------|
| T1 | Import validation + helpful errors         | codex-cli        | pending     | P1       | Invalid JSON/file shows non-intrusive error; valid schema accepted; Playwright test covers invalid import. |
| T2 | Generate Code v2 (per-feature stubs)       | codex-cli        | pending     | P1       | Download includes per-feature stub functions + typed config; test verifies scaffold content for 2+ features. |
| T3 | Accessibility + keyboard navigation        | codex-cli        | pending     | P2       | Buttons reachable via Tab; ARIA labels; test asserts role/name presence and Space/Enter toggles a feature. |
| T4 | Persistence test (reload restores state)   | codex-cli        | pending     | P2       | New Playwright spec: select features → reload → counts and preview persist. |
| T5 | README usage + handoff docs update         | project-overseer | pending     | P3       | Repo README explains /rubi usage, import/export, generate; handoff/ docs reflect current flow. |
| T6 | Handoff sync with master coordination      | codex-cli        | pending     | P1       | `npm run handoff:sync` mirrors handoff/ to `~/agent-coordination/rubi-platform-builder/` and returns 0. |

Notes
- Only one task per agent should be in_progress at a time.
- Keep diffs focused; include/update tests for user-visible behavior.

