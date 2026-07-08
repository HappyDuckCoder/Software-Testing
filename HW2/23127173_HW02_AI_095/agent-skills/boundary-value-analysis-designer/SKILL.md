---
name: boundary-value-analysis-designer
description: Design Boundary Value Analysis artifacts for HW02 EShop features. Use when Codex needs to identify boundaries for text length, numeric ranges, dates, quantities, prices, discounts, file sizes, CSV rows, login attempts, stock, or state limits, then create optimized BVA test cases with boundary/class traceability.
---

# Boundary Value Analysis Designer

## Workflow

1. Start from verified feature rules or clearly marked assumptions.
2. Identify boundary-bearing variables:
   - text length,
   - numeric quantity,
   - price,
   - stock,
   - discount,
   - date/time,
   - file size,
   - CSV row count,
   - login attempt count,
   - pagination,
   - state transition count.
3. For each boundary, choose below, on, above, and nominal values.
4. Create BVA test cases that isolate one boundary when possible.
5. Add combined boundary cases only when feature behavior depends on multiple variables.
6. Optimize test cases:
   - A nominal/valid BVA test should satisfy as many valid boundary conditions as possible.
   - A negative BVA test should isolate one invalid boundary value when possible, while other variables stay valid/nominal.
   - Every BVA test case input must explicitly include all relevant variables from the feature input domain.
   - Every BVA test case must include a `Satisfied boundary / conditions` column listing Boundary IDs and related Class IDs/constraints when applicable.
7. Leave execution fields as `Not run` until tested.

## Output Format

```markdown
# Boundary Value Analysis - <Feature ID> <Feature Name>

## 1. Boundary Inventory
| Boundary ID | Variable | Lower bound | Upper bound | Rule source | Confidence |
| --- | --- | --- | --- | --- | --- |

## 2. Boundary Values
| Boundary ID | Below lower | Lower | Above lower | Nominal | Below upper | Upper | Above upper |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 3. BVA Test Cases
| ID | Objective | Satisfied boundary / conditions | Boundary | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

## Guardrails

If the exact boundary is unknown, mark it as `Assumption - verify on SUT` and create a test specifically to discover the real boundary.
