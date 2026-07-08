# Domain Testing - FR-11 Order History View (User)

## 1. Input Domain

| Variable | Type | Source | Constraints | Notes |
| --- | --- | --- | --- | --- |
| Authorization token | Header/state | `server.js` | Valid token required for `/api/orders/my-orders` | Missing 401, invalid 403 |
| User ownership | State | `server.js` SQL | `SELECT * FROM orders WHERE user_id = ?` | Source-backed privacy rule |
| Order collection | List | DB/API/UI | Empty or non-empty | UI branches on `orders.length` |
| Status | Enum | README/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Label and color should differ |
| Sort order | Ordering | `server.js` | `ORDER BY id DESC` | Newest id first |
| Order detail route | API | `server.js` | `GET /api/orders/:id` has no auth in source | Privacy risk for order detail |

## 2. Equivalence Classes

| Class ID | Variable | Valid/Invalid | Partition | Representative value | Reason |
| --- | --- | --- | --- | --- | --- |
| B-DT-EC-01 | Token | Valid | Logged-in user's token | token for `test@eshop.com` | Required happy path |
| B-DT-EC-02 | Token | Invalid | Missing token | no header | Access control |
| B-DT-EC-03 | Token | Invalid | Malformed token | `Bearer invalid.token` | Access control |
| B-DT-EC-04 | Order collection | Valid | No orders | empty array | Empty state |
| B-DT-EC-05 | Order collection | Valid | One own order | one pending order | Single-row display |
| B-DT-EC-06 | Order collection | Valid | Multiple own orders | ids 3, 2, 1 | Sorting |
| B-DT-EC-07 | Ownership | Invalid | Other user's order | admin user's order id | Must not appear in my-orders |
| B-DT-EC-08 | Status | Valid | Pending | `pending` | Vietnamese label and cancel action |
| B-DT-EC-09 | Status | Valid | Confirmed | `confirmed` | Vietnamese label and cancel action |
| B-DT-EC-10 | Status | Valid | Shipping | `shipping` | Vietnamese label; user cancel should not be allowed by FR-10 |
| B-DT-EC-11 | Status | Valid | Delivered | `delivered` | Final state; no cancel action |
| B-DT-EC-12 | Status | Valid | Canceled | `canceled` | Final state; no cancel action |
| B-DT-EC-13 | Detail route | Invalid | Non-owned order id via `/api/orders/:id` | order id of another user | Source indicates privacy bug |

## 3. Cross-Variable Constraints

| Constraint ID | Variables / State | Rule | Test impact |
| --- | --- | --- | --- |
| B-DT-C01 | Token + user id | History must return only token owner's orders | Compare orders for two users |
| B-DT-C02 | Status + UI label | Every allowed status maps to a Vietnamese label and color | Include each state |
| B-DT-C03 | Status + cancel action | User should cancel only `pending` or `confirmed` per FR-10 | Shipping cancel UI/API is high-risk |
| B-DT-C04 | Order id + sorting | Higher ids appear first | Seed/create multiple orders |
| B-DT-C05 | Detail route + ownership | Detail access should not leak other users' orders | Negative API test |

## 4. Domain Test Cases

| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-DT-01 | Show empty history message | Valid token; no orders | User account has no orders | Login; open `/profile` | UI shows `Bạn chưa có đơn hàng nào.` | Not run | Not run | Pending screenshot |
| B-DT-02 | Show one own order | One order for current user | Valid token; order exists | Open `/profile` | Table shows id, date, total, status for that order | Not run | Not run | Pending screenshot |
| B-DT-03 | Show multiple orders newest first | Orders with ids 1, 2, 3 | Valid token | Call `/api/orders/my-orders`; inspect UI | Orders sorted by id descending | Not run | Not run | Pending evidence |
| B-DT-04 | Do not show other user's orders | Orders for user A and user B | Login as user B | Call history; inspect rows | Only user B orders are returned/displayed | Not run | Not run | Pending API evidence |
| B-DT-05 | Block history API without token | No auth header | Backend running | GET `/api/orders/my-orders` | 401 `Unauthorized` | Not run | Not run | Pending API evidence |
| B-DT-06 | Block history API with invalid token | Invalid token | Backend running | GET `/api/orders/my-orders` | 403 `Forbidden` | Not run | Not run | Pending API evidence |
| B-DT-07 | Display pending status correctly | Order status `pending` | User has pending order | Open history | Label `Chờ xác nhận`, yellow style, cancel button visible | Not run | Not run | Pending screenshot |
| B-DT-08 | Display confirmed status correctly | Order status `confirmed` | User has confirmed order | Open history | Label `Đã xác nhận`, indigo style, cancel button visible | Not run | Not run | Pending screenshot |
| B-DT-09 | Display shipping status correctly | Order status `shipping` | User has shipping order | Open history | Label `Đang giao`, blue style; user cancel should not be available by FR-10 | Not run | Not run | Pending screenshot; likely bug |
| B-DT-10 | Display delivered status correctly | Order status `delivered` | User has delivered order | Open history | Label `Đã giao`, green style, no cancel button | Not run | Not run | Pending screenshot |
| B-DT-11 | Display canceled status correctly | Order status `canceled` | User has canceled order | Open history | Label `Đã hủy`, red style, no cancel button | Not run | Not run | Pending screenshot |
| B-DT-12 | Format total amount | `total_amount=300000` | Order exists | Open history | Total appears as localized number with currency suffix | Not run | Not run | Pending screenshot |
| B-DT-13 | Prevent non-owned order detail leak | Other user's order id | Valid token for different user | GET `/api/orders/:id` | Should reject/hide non-owned order | Not run | Not run | Pending API evidence; source indicates bug |
| B-DT-14 | Refresh after cancel action | Pending/confirmed own order | Valid token | Click cancel; wait for `fetchOrders()` | History refreshes and status becomes `canceled` | Not run | Not run | Pending screenshot |

## 5. Review Notes

* Agent skills used: `eshop-feature-inspector`, `domain-testing-designer`.
* Source-backed risks: public order-detail route and user cancel action visible for `shipping` orders.
