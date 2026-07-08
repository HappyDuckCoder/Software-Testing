---
name: domain-testing-designer
description: Design Domain Testing artifacts for HW02 EShop features. Use when Codex needs to transform an inspected EShop feature into input domains, valid and invalid equivalence classes, representative values, constraints between variables, and optimized Domain Testing test cases with traceability to Class ID/constraints.
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
7. Optimize test cases:
   - A valid/happy-path test case should satisfy as many valid equivalence classes and cross-variable constraints as possible.
   - A negative test case should contain exactly one invalid equivalence class when possible, while keeping all other input variables valid.
   - Every test case input must explicitly include values for all variables listed in `## 1. Input Domain`, even if the value is `N/A`, `unchanged`, or `not sent`.
   - Every test case must include a `Satisfied classes / conditions` column listing the covered Class IDs and Constraint IDs.
8. Leave `Actual`, `Verdict`, and `Evidence` as `Not run` until the student executes the test.
9. Add a short review note explaining what AI may have missed.

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
| ID | Objective | Satisfied classes / conditions | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

## Quality Bar

Every test case must be traceable to at least one equivalence class or constraint. Prefer fewer, stronger optimized test cases over many redundant cases. Do not create generic UI smoke tests unless they support the domain analysis.
