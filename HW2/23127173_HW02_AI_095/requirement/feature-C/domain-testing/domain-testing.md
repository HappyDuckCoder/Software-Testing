# Domain Testing - FR-18 Order Management (Admin)

## 1. Input Domain

| Variable | Type | Source | Constraints | Notes |
| --- | --- | --- | --- | --- |
| Authorization token | Header/state | README FR-12, `server.js` | Should be valid admin token | Source routes only call `authenticateToken`, no role check |
| Order list | Array | `/api/admin/orders` | Admin sees all orders, sorted by id desc | Joins `users.name as user_name` |
| Order id | Path | API | Existing id updates; missing id returns 404 | Source-backed |
| Current status | Enum | DB | State before transition | FR-10 state machine |
| Target status | Enum/body | API/UI | Must be valid next status | Source has one invalid allowance: `canceled -> delivered` |
| Shipping address | Text | Admin UI | Must be safely displayed | UI uses `dangerouslySetInnerHTML` |

## 2. Equivalence Classes

| Class ID | Variable | Valid/Invalid | Partition | Representative value | Reason |
| --- | --- | --- | --- | --- | --- |
| C-DT-EC-01 | Token | Valid | Admin token | `admin@eshop.com` token | Happy path |
| C-DT-EC-02 | Token | Invalid | Missing token | no header | Should reject |
| C-DT-EC-03 | Token | Invalid | Normal user token | `test@eshop.com` token | Admin access control |
| C-DT-EC-04 | Order list | Valid | No orders | empty table | Empty admin list |
| C-DT-EC-05 | Order list | Valid | Orders from multiple users | user/admin orders | FR-18 all orders |
| C-DT-EC-06 | Order id | Invalid | Non-existing id | `999999` | 404 path |
| C-DT-EC-07 | Transition | Valid | `pending -> confirmed` | target `confirmed` | State machine |
| C-DT-EC-08 | Transition | Valid | `pending -> canceled` | target `canceled` | State machine |
| C-DT-EC-09 | Transition | Valid | `confirmed -> shipping` | target `shipping` | State machine |
| C-DT-EC-10 | Transition | Valid | `confirmed -> canceled` | target `canceled` | State machine |
| C-DT-EC-11 | Transition | Valid | `shipping -> delivered` | target `delivered` | State machine |
| C-DT-EC-12 | Transition | Invalid | Final `delivered` to any status | target `canceled` | Final state |
| C-DT-EC-13 | Transition | Invalid | Final `canceled` to any status | target `delivered` | Source indicates bug |
| C-DT-EC-14 | Address | Invalid rendering risk | HTML/script address | `<img src=x onerror=alert(1)>` | Safe display requirement |

## 3. Cross-Variable Constraints

| Constraint ID | Variables / State | Rule | Test impact |
| --- | --- | --- | --- |
| C-DT-C01 | Token + role | Admin APIs require role admin | Test normal user token against admin orders |
| C-DT-C02 | Current status + target status | FR-10 valid transition graph | Cover valid and invalid edges |
| C-DT-C03 | Final state + target status | `delivered` and `canceled` are final | Test attempted post-final transitions |
| C-DT-C04 | Address + rendering | Address must not execute/render HTML | Use malicious shipping address |
| C-DT-C05 | Order list + users | Admin sees all users' orders | Seed orders for multiple users |

## 4. Domain Test Cases

| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-DT-01 | Admin can list all orders | Admin token | Orders exist for multiple users | GET `/api/admin/orders` | Returns all orders with `user_name`, id desc | Not run | Not run | Pending API evidence |
| C-DT-02 | Admin UI displays order table | Admin login | Orders exist | Open admin Orders tab | Columns show ID, user, total, address, status, action | Not run | Not run | Pending screenshot |
| C-DT-03 | Reject missing token | No token | Backend running | GET `/api/admin/orders` | Should return 401 | Not run | Not run | Pending API evidence |
| C-DT-04 | Reject normal user token | Normal user token | Login as `test@eshop.com` | GET `/api/admin/orders` | Should return 403/deny admin access | Not run | Not run | Pending API evidence; source indicates bug |
| C-DT-05 | Update pending to confirmed | Current `pending`, target `confirmed` | Admin token; order pending | PUT status | Status becomes `confirmed` | Not run | Not run | Pending evidence |
| C-DT-06 | Cancel pending order | Current `pending`, target `canceled` | Admin token; order pending | PUT status | Status becomes `canceled` | Not run | Not run | Pending evidence |
| C-DT-07 | Update confirmed to shipping | Current `confirmed`, target `shipping` | Admin token; order confirmed | PUT status | Status becomes `shipping` | Not run | Not run | Pending evidence |
| C-DT-08 | Cancel confirmed order | Current `confirmed`, target `canceled` | Admin token; order confirmed | PUT status | Status becomes `canceled` | Not run | Not run | Pending evidence |
| C-DT-09 | Complete shipping order | Current `shipping`, target `delivered` | Admin token; order shipping | PUT status | Status becomes `delivered` | Not run | Not run | Pending evidence |
| C-DT-10 | Reject pending directly to shipping | Current `pending`, target `shipping` | Admin token; order pending | PUT status | 400 invalid transition | Not run | Not run | Pending API evidence |
| C-DT-11 | Reject delivered to canceled | Current `delivered`, target `canceled` | Admin token; order delivered | PUT status | 400 invalid transition; delivered remains final | Not run | Not run | Pending API evidence |
| C-DT-12 | Reject canceled to delivered | Current `canceled`, target `delivered` | Admin token; order canceled | PUT status | 400 invalid transition; canceled remains final | Not run | Not run | Pending evidence; source indicates bug |
| C-DT-13 | Reject non-existing order update | Order id `999999` | Admin token | PUT status confirmed | 404 `Order not found` | Not run | Not run | Pending API evidence |
| C-DT-14 | Reject unknown target status | Target `returned` | Admin token; order pending | PUT status | 400 invalid transition | Not run | Not run | Pending API evidence |
| C-DT-15 | Safely display HTML-like address | Shipping address `<img src=x onerror=alert(1)>` | Admin token; order exists | Open Orders tab | Text is escaped; no HTML/image/script executes | Not run | Not run | Pending screenshot; source indicates bug |
| C-DT-16 | Verify final-state action buttons | Delivered/canceled orders | Admin UI | Open Orders tab | Delivered/canceled should show no invalid transition action | Not run | Not run | Pending screenshot; canceled UI likely shows delivered action |

## 5. Review Notes

* Agent skills used: `eshop-feature-inspector`, `domain-testing-designer`.
* Source review found likely bugs: admin routes lack role check, canceled can transition to delivered, and address uses unsafe HTML rendering.
