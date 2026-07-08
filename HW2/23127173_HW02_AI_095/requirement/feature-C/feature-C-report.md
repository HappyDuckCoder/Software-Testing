# Feature C Report - Pool C

## 1. Feature Selection

| Field | Value |
| --- | --- |
| Pool | Pool C - Web Admin |
| Selected feature | Order management (admin) |
| Feature ID | FR-18 |
| Reason for selection | The EShop admin order feature combines admin access control, global order visibility, state transitions, and safe rendering of shipping addresses. |
| Status | Source-based test design completed; execution pending on EShop SUT |

## 2. Feature Understanding From EShop Repo

| Item | Notes |
| --- | --- |
| Actor/role | Admin user. Seed admin: `admin@eshop.com` / `Admin123!`. |
| Preconditions | Admin frontend has token in `adminToken`; backend API runs on `localhost:3000`; orders exist in DB. |
| Main flow | Admin opens Orders tab; frontend calls `GET /api/admin/orders`; UI lists all orders with user name, total, shipping address, status, and status-transition buttons. |
| Alternative flows | Missing/invalid token; normal user token; malicious shipping address HTML; invalid state transition; non-existing order id. |
| Input variables | Authorization token, order id, current status, target status, shipping address content, order list size. |
| Output/result | Admin sees all orders; valid status transitions update order; invalid transitions return 400. |
| Business rules | Admin APIs require valid admin token; admin can transition according to FR-10; shipping address must be safely displayed, not rendered as HTML. |
| Source evidence | `Eshop/README.md` FR-18/FR-12/FR-10, `api_specification.md` 6.2, `backend/server.js`, `frontend-admin/src/App.jsx`. |

## 3. Feature Brief - FR-18 Order Management (Admin)

### 3.1 Scope

| Item | Value |
| --- | --- |
| Pool | Pool C |
| Feature ID | FR-18 |
| Actor | Admin |
| Environment | EShop admin frontend + backend API |

### 3.2 Flow Analysis

| Flow | Steps | Expected result | Evidence |
| --- | --- | --- | --- |
| List all orders | Login admin, open Orders tab | Table shows all orders joined with `users.name as user_name`, newest id first | `backend/server.js`, `frontend-admin/src/App.jsx` |
| Update order status | Click status action or call `PUT /api/admin/orders/:id/status` | Valid FR-10 transitions update status | `server.js` |
| Reject invalid transition | Send invalid target for current state | 400 with `Invalid state transition...` | `server.js` |
| Enforce admin access | Use missing/invalid/normal user token | Admin endpoint should reject non-admin | README FR-12; source lacks role middleware |
| Safe address display | Render shipping address containing HTML/script | UI should display text safely | README FR-18; UI uses `dangerouslySetInnerHTML` |

### 3.3 Input / Output Inventory

| Variable | Type | Source | Rule |
| --- | --- | --- | --- |
| Admin token | Header/state | README FR-12, admin app | Admin endpoints should require `role='admin'`. |
| Order id | Path param | API route | Existing id can update; missing id returns 404. |
| Current status | Enum | DB | Drives allowed target statuses. |
| Target status | Enum/body | API/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled`; must follow FR-10. |
| Shipping address | Text/HTML risk | DB/admin UI | Must be displayed safely, not rendered as HTML. |
| Order list | Array | Admin API | Shows all users' orders with user name. |

## 4. Linked Reports

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Execution Summary

| Designed | Executed | Passed | Failed | Not executed | Bugs |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 24 | 0 | 0 | 0 | 24 | 3 |
