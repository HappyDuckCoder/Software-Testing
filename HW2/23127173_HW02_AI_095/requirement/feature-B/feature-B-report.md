# Feature B Report - Pool B

## 1. Feature Selection

| Field | Value |
| --- | --- |
| Pool | Pool B - Shopping Cart and Checkout |
| Selected feature | Order history view (user) |
| Feature ID | FR-11 |
| Reason for selection | The EShop repo implements user order history through authenticated API and frontend rendering, with ownership, status labels, ordering, and action visibility to test. |
| Status | Source-based test design completed; execution pending on EShop SUT |

## 2. Feature Understanding From EShop Repo

| Item | Notes |
| --- | --- |
| Actor/role | Logged-in customer/user. |
| Preconditions | User has a valid token; orders can be created via `POST /api/checkout`. |
| Main flow | User opens `/profile`; `Profile.jsx` calls `GET /api/orders/my-orders`; UI displays id, date, total, status label/color, and cancel action when available. |
| Alternative flows | Missing/invalid token; user with no orders; multiple orders; non-owned order access; status-specific labels/actions. |
| Input variables | Authorization token, user id from JWT, order status, order count, order id, total amount, created date. |
| Output/result | API returns only current user's orders ordered by `id DESC`; UI displays table or empty message. |
| Business rules | User only sees own orders; display id/date/total/status; statuses are translated to Vietnamese and visually differentiated. |
| Source evidence | `Eshop/README.md` FR-11, `Eshop/api_specification.md` 4.4, `Eshop/backend/server.js`, `Eshop/frontend-web/src/pages/Profile.jsx`. |

## 3. Feature Brief - FR-11 Order History View (User)

### 3.1 Scope

| Item | Value |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Actor | Logged-in web user |
| Environment | EShop web frontend + backend API |

### 3.2 Flow Analysis

| Flow | Steps | Expected result | Evidence |
| --- | --- | --- | --- |
| List own orders | Login, call `/api/orders/my-orders` | Only orders where `orders.user_id = req.user.id`, ordered by newest id first | `backend/server.js` |
| Empty order history | Login as user without orders, open profile | UI shows `Bạn chưa có đơn hàng nào.` | `Profile.jsx` |
| Status display | Render order rows with status | Status translated and colored for `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | `Profile.jsx` |
| Unauthorized API | Call `/api/orders/my-orders` without/invalid token | Missing token 401, invalid token 403 | `authenticateToken` |
| Detail privacy risk | Call `/api/orders/:id` | Source route has no auth/ownership check, so non-owned orders may leak | `backend/server.js` |

### 3.3 Input / Output Inventory

| Variable | Type | Source | Rule |
| --- | --- | --- | --- |
| Authorization token | Header/state | API/AuthContext | Required for `/api/orders/my-orders`. |
| User id | JWT claim | `server.js` | Query filters by current user id. |
| Order status | Enum text | DB/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled`; labels/styles defined in UI. |
| Order count | Number/state | DB/API/UI | Empty list shows message; non-empty list shows table. |
| Order id | Number | DB/API/UI | Table displays `#id`; API sorts `ORDER BY id DESC`. |
| Total amount | Number | DB/API/UI | UI uses `Number(...).toLocaleString()` and currency suffix. |

## 4. Linked Reports

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Execution Summary

| Designed | Executed | Passed | Failed | Not executed | Bugs |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 22 | 0 | 0 | 0 | 22 | 2 |
