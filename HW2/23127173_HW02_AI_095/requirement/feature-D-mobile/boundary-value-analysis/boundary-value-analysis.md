# Boundary Value Analysis - FR-10 Order State Machine

## 1. Boundary Inventory

| Boundary ID | Variable | Lower bound | Upper bound | Rule source | Confidence |
| --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | State index in normal path | `pending` index 0 | `delivered` index 3 | README FR-10 graph | High |
| D-BVA-B02 | User-cancel allowed window | `pending` | `confirmed` | README FR-10/FR-20 | High |
| D-BVA-B03 | Final-state outgoing transitions | 0 allowed | 0 allowed | README final state rule | High |
| D-BVA-B04 | Order id ownership boundary | Own existing id | Other user's existing id | Cancel route SQL | High |

## 2. Boundary Values

| Boundary ID | Below lower | Lower | Above lower | Nominal | Below upper | Upper | Above upper |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | N/A | `pending` | `confirmed` | `shipping` | `shipping` | `delivered` | attempt after delivered |
| D-BVA-B02 | N/A | `pending` | `confirmed` | `confirmed` | `confirmed` | last cancelable `confirmed` | first non-cancelable `shipping` |
| D-BVA-B03 | Any outgoing from final | 0 allowed | N/A | final states | N/A | 0 allowed | `canceled -> delivered` |
| D-BVA-B04 | Non-existing id | own id | other user's id | own id | N/A | other user's id | deleted id |

## 3. BVA Test Cases

| ID | Objective | Boundary | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-01 | Verify lower state pending | D-BVA-B01 lower | New checkout order | Valid user token | Checkout; fetch order | Status starts `pending` | Not run | Not run | Pending evidence |
| D-BVA-02 | Verify first transition after lower | D-BVA-B01 above lower | `pending -> confirmed` | Admin token | PUT confirmed | Accepted | Not run | Not run | Pending evidence |
| D-BVA-03 | Verify upper normal transition | D-BVA-B01 upper | `shipping -> delivered` | Admin token; shipping order | PUT delivered | Accepted; final delivered | Not run | Not run | Pending evidence |
| D-BVA-04 | Reject transition after delivered | D-BVA-B01 above upper | `delivered -> canceled` | Admin token; delivered order | PUT canceled | Rejected | Not run | Not run | Pending evidence |
| D-BVA-05 | User cancel at lower allowed state | D-BVA-B02 lower | Pending order | Own user token | PUT cancel | Accepted | Not run | Not run | Pending evidence |
| D-BVA-06 | User cancel at upper allowed state | D-BVA-B02 upper | Confirmed order | Own user token | PUT cancel | Accepted | Not run | Not run | Pending evidence |
| D-BVA-07 | User cancel just above allowed window | D-BVA-B02 above upper | Shipping order | Own user token | PUT cancel | Rejected; status remains shipping | Not run | Not run | Pending evidence; source indicates bug |
| D-BVA-08 | Reject canceled final outgoing transition | D-BVA-B03 final | `canceled -> delivered` | Admin token; canceled order | PUT delivered | Rejected | Not run | Not run | Pending evidence; source indicates bug |
| D-BVA-09 | Cancel own existing order id | D-BVA-B04 lower | Own order id | Own user token | PUT cancel | Ownership accepted if state cancelable | Not run | Not run | Pending evidence |
| D-BVA-10 | Reject other user's existing order id | D-BVA-B04 above lower | Other user's order id | User token | PUT cancel | 404 `Order not found` | Not run | Not run | Pending evidence |

## 4. Review Notes

* Agent skill used: `boundary-value-analysis-designer`.
* State-machine BVA is modeled as edges around allowed windows and terminal states rather than numeric-only ranges.
