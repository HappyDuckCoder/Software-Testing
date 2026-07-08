---
name: eshop-feature-inspector
description: Inspect an EShop homework feature before test design. Use when Codex needs to analyze one selected EShop feature for HW02, identify actors, preconditions, UI/API behavior, input variables, output states, validation rules, seed data, assumptions, and evidence needed before Domain Testing or Boundary Value Analysis.
---

# EShop Feature Inspector

## Workflow

1. Identify the selected feature ID, pool, actor, and role.
2. Read available evidence: requirement notes, UI screenshots, source snippets, seed data, API routes, or student observations.
3. Produce a feature brief with:
   - purpose,
   - actor and permissions,
   - preconditions,
   - main flow,
   - alternate/error flows,
   - input variables,
   - output/result,
   - state transitions,
   - validation rules,
   - data setup,
   - assumptions and unknowns.
4. Mark every uncertain rule as an assumption, not fact.
5. Recommend which observations must be verified by running EShop.

## Output Format

Use this structure:

```markdown
# Feature Brief - <Feature ID> <Feature Name>

## 1. Scope
| Item | Value |
| --- | --- |
| Pool | |
| Feature ID | |
| Actor | |
| Environment | |

## 2. Flow Analysis
| Flow | Steps | Expected result | Evidence |
| --- | --- | --- | --- |

## 3. Input / Output Inventory
| Variable | Type | Source | Rule | Assumption? |
| --- | --- | --- | --- | --- |

## 4. Risks for Testing
| Risk | Why it matters | How to verify |
| --- | --- | --- |
```

## Guardrails

Do not invent business rules. If the rule is not visible in the source/UI/spec, write `Assumption - must verify`.
