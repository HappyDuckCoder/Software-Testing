# Boundary Value Analysis - FR-18 Order Management (Admin)

## 1. Boundary Inventory

| Boundary ID | Variable | Lower bound | Upper bound | Rule source | Confidence |
| --- | --- | --- | --- | --- | --- |
| C-BVA-B01 | Order count in admin table | 0 orders | No documented upper bound | Admin table maps `orders` | Medium |
| C-BVA-B02 | Status transition step count | 0 after final state | 3 forward steps from pending to delivered | README FR-10 | High |
| C-BVA-B03 | Shipping address length/rendering | 0 characters | No documented upper bound | DB `TEXT`, UI render | Medium |
| C-BVA-B04 | Order id existence | First existing id | Last existing id | DB/API path | Medium |

## 2. Boundary Values

| Boundary ID | Below lower | Lower | Above lower | Nominal | Below upper | Upper | Above upper |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-BVA-B01 | N/A | 0 | 1 | 2 | N/A | No upper bound | Many, e.g. 50 |
| C-BVA-B02 | Attempt from final | 0 allowed moves from final | 1 valid move | `confirmed -> shipping` | 2 moves | 3-step chain | Skip step `pending -> shipping` |
| C-BVA-B03 | N/A | empty address | 1 char | normal address | N/A | No upper bound | HTML payload/long address |
| C-BVA-B04 | 0/non-existing | first existing id | second id | middle id | penultimate id | last existing id | 999999 |

## 3. BVA Test Cases

| ID | Objective | Boundary | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-BVA-01 | Admin table with zero orders | C-BVA-B01 lower | 0 orders | Empty orders table | Open admin Orders tab | Table handles empty state without crash | Not run | Not run | Pending screenshot |
| C-BVA-02 | Admin table with one order | C-BVA-B01 above lower | 1 order | One order exists | Open Orders tab | Exactly one row appears | Not run | Not run | Pending screenshot |
| C-BVA-03 | Admin table with many orders | C-BVA-B01 no upper bound | 50 orders | Many orders exist | Open Orders tab | All rows render, newest first | Not run | Not run | Pending screenshot |
| C-BVA-04 | Full valid transition chain | C-BVA-B02 upper chain | `pending -> confirmed -> shipping -> delivered` | Admin token; pending order | Apply transitions in order | Ends at delivered with each step accepted | Not run | Not run | Pending evidence |
| C-BVA-05 | Reject skipped transition | C-BVA-B02 above step | `pending -> shipping` | Admin token; pending order | PUT target shipping | 400 invalid transition | Not run | Not run | Pending API evidence |
| C-BVA-06 | Reject transition after final state | C-BVA-B02 lower final | `canceled -> delivered` | Admin token; canceled order | PUT target delivered | 400 invalid transition | Not run | Not run | Pending evidence; source indicates bug |
| C-BVA-07 | Empty shipping address display | C-BVA-B03 lower | empty address | Order exists | Open Orders tab | Shows safe fallback or blank text | Not run | Not run | Pending screenshot |
| C-BVA-08 | HTML address display safety | C-BVA-B03 above safe rendering | `<b>X</b><img src=x onerror=alert(1)>` | Order exists | Open Orders tab | Escaped text only; no HTML execution | Not run | Not run | Pending screenshot; source indicates bug |

## 4. Review Notes

* Agent skill used: `boundary-value-analysis-designer`.
* FR-18 BVA focuses on count, transition-step boundaries, final-state boundaries, and rendering boundary inputs.
