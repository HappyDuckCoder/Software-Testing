---
name: domain-testing-designer
description: Design Domain Testing artifacts for HW02 EShop features. Use when Codex needs to transform an inspected EShop feature into input domains, valid and invalid equivalence classes, representative values, constraints between variables, and Domain Testing test cases with Objective, Input, Preconditions, Steps, Expected, Actual, Verdict, and Evidence columns.
---

# Domain Testing Designer

## Workflow

1. Start from a feature brief or verified feature notes.
2. List input variables and observable outputs.
3. Split each variable into valid and invalid equivalence classes.
4. Identify constraints between variables, roles, states, and seed data.
5. Choose representative values for each class.
6. Create test cases that cover:
   - valid happy paths,
   - invalid input classes,
   - role/state constraints,
   - combinations likely to expose bugs.
7. Leave `Actual`, `Verdict`, and `Evidence` as `Not run` until the student executes the test.
8. Add a short review note explaining what AI may have missed.

## Output Format

```markdown
# Domain Testing - <Feature ID> <Feature Name>

## 1. Input Domain
| Variable | Type | Source | Constraints | Notes |
| --- | --- | --- | --- | --- |

## 2. Equivalence Classes
| Class ID | Variable | Valid/Invalid | Partition | Representative value | Reason |
| --- | --- | --- | --- | --- | --- |

## 3. Cross-Variable Constraints
| Constraint ID | Variables / State | Rule | Test impact |
| --- | --- | --- | --- |

## 4. Domain Test Cases
| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

## Quality Bar

Every test case must be traceable to at least one equivalence class or constraint. Do not create generic UI smoke tests unless they support the domain analysis.
