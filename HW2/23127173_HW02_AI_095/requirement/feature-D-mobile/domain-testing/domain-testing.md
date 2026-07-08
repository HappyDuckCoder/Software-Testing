# Domain Testing - FR-10 Order State Machine

## 1. Input Domain

| Variable | Type | Source | Constraints | Notes |
| --- | --- | --- | --- | --- |
| Current status | Enum | README/DB | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | State machine nodes |
| Target status | Enum | Admin API | Valid target depends on current status | State machine edges |
| User cancel action | Command | `/api/orders/:id/cancel` | User can cancel own `pending` or `confirmed` only | Source currently permits `shipping` |
| Admin transition action | Command | `/api/admin/orders/:id/status` | Admin can advance/cancel according to FR-10 | Source permits `canceled -> delivered` |
| Ownership | State | User cancel API | User can cancel only own order | Query checks user_id |
| Token | Header | API | Missing token rejected | Source-backed |

## 2. Equivalence Classes

| Class ID | Variable | Valid/Invalid | Partition | Representative value | Reason |
| --- | --- | --- | --- | --- | --- |
| D-DT-EC-01 | Status | Valid | Initial state | `pending` | Checkout creates pending |
| D-DT-EC-02 | Transition | Valid | Admin confirm | `pending -> confirmed` | State edge |
| D-DT-EC-03 | Transition | Valid | Admin start shipping | `confirmed -> shipping` | State edge |
| D-DT-EC-04 | Transition | Valid | Admin deliver | `shipping -> delivered` | State edge |
| D-DT-EC-05 | Transition | Valid | Cancel before processing | `pending -> canceled` | State edge |
| D-DT-EC-06 | Transition | Valid | Cancel after confirmed | `confirmed -> canceled` | State edge |
| D-DT-EC-07 | Transition | Invalid | Skip state | `pending -> shipping` | Invalid edge |
| D-DT-EC-08 | Transition | Invalid | Reopen delivered | `delivered -> confirmed` | Final state |
| D-DT-EC-09 | Transition | Invalid | Reopen canceled | `canceled -> delivered` | Final state; source bug |
| D-DT-EC-10 | User cancel | Invalid | Cancel shipping | user cancel `shipping` | README forbids |
| D-DT-EC-11 | User cancel | Invalid | Cancel other user's order | other user order id | Ownership |
| D-DT-EC-12 | Target status | Invalid | Unknown status | `returned` | Enum validation |

## 3. Cross-Variable Constraints

| Constraint ID | Variables / State | Rule | Test impact |
| --- | --- | --- | --- |
| D-DT-C01 | Current + target status | Only graph edges in FR-10 are valid | Cover all valid/invalid edges |
| D-DT-C02 | Final state + target | `delivered` and `canceled` are terminal | Test transitions after final |
| D-DT-C03 | Actor + status | User/mobile cancel only `pending` or `confirmed` | Test user cancel for each state |
| D-DT-C04 | User + order id | User can cancel only own order | Test other user's order id |
| D-DT-C05 | UI action + backend rule | Mobile/web action visibility must match backend rule | Check action for `shipping` |

## 4. Domain Test Cases

| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-DT-01 | New checkout creates pending order | Checkout body | Valid user token | POST `/api/checkout`; fetch order | New order status is `pending` | Not run | Not run | Pending API evidence |
| D-DT-02 | Admin confirms pending order | `pending -> confirmed` | Pending order; admin token | PUT admin status confirmed | Status becomes `confirmed` | Not run | Not run | Pending evidence |
| D-DT-03 | Admin ships confirmed order | `confirmed -> shipping` | Confirmed order; admin token | PUT admin status shipping | Status becomes `shipping` | Not run | Not run | Pending evidence |
| D-DT-04 | Admin delivers shipping order | `shipping -> delivered` | Shipping order; admin token | PUT admin status delivered | Status becomes `delivered` | Not run | Not run | Pending evidence |
| D-DT-05 | User cancels pending order | User cancel pending | Own pending order | PUT `/api/orders/:id/cancel` | Status becomes `canceled` | Not run | Not run | Pending evidence |
| D-DT-06 | User cancels confirmed order | User cancel confirmed | Own confirmed order | PUT cancel | Status becomes `canceled` | Not run | Not run | Pending evidence |
| D-DT-07 | User cannot cancel shipping order | User cancel shipping | Own shipping order | PUT cancel | 400 error; status remains `shipping` | Not run | Not run | Pending evidence; source indicates bug |
| D-DT-08 | User cannot cancel delivered order | User cancel delivered | Own delivered order | PUT cancel | 400 `Cannot cancel this order.` | Not run | Not run | Pending evidence |
| D-DT-09 | User cannot cancel canceled order | User cancel canceled | Own canceled order | PUT cancel | 400 `Cannot cancel this order.` | Not run | Not run | Pending evidence |
| D-DT-10 | User cannot cancel other user's order | Other user's order id | Valid user token | PUT cancel | 404 `Order not found` | Not run | Not run | Pending evidence |
| D-DT-11 | Reject skipped admin transition | `pending -> shipping` | Pending order; admin token | PUT target shipping | 400 invalid transition | Not run | Not run | Pending evidence |
| D-DT-12 | Reject delivered final-state transition | `delivered -> canceled` | Delivered order; admin token | PUT target canceled | 400 invalid transition | Not run | Not run | Pending evidence |
| D-DT-13 | Reject canceled final-state transition | `canceled -> delivered` | Canceled order; admin token | PUT target delivered | 400 invalid transition | Not run | Not run | Pending evidence; source indicates bug |
| D-DT-14 | Reject unknown status | target `returned` | Pending order; admin token | PUT target returned | 400 invalid transition | Not run | Not run | Pending evidence |

## 5. Review Notes

* Agent skills used: `eshop-feature-inspector`, `domain-testing-designer`.
* FR-10 is shared between admin backend and mobile/user cancel behavior. The mobile-specific requirement in README says cancel is only allowed for `pending` or `confirmed`.
