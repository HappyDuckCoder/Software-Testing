# Bug Report - FR-18 Order Management (Admin)

| Bug ID | Summary | Severity | Priority | GitHub Issue | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-C-01 | Admin order APIs do not enforce `role='admin'` | Critical | High | Pending | `backend/server.js` admin order routes only call `authenticateToken` | Source identified; execution pending |
| BUG-C-02 | Backend allows `canceled -> delivered` transition | Major | High | Pending | `backend/server.js` explicitly marks this transition valid | Source identified; execution pending |
| BUG-C-03 | Admin order table renders shipping address as raw HTML | Critical | High | Pending | `frontend-admin/src/App.jsx` uses `dangerouslySetInnerHTML` | Source identified; execution pending |

## BUG-C-01 - Normal User Token Can Access Admin Orders API

### Steps to Reproduce

1. Login as `test@eshop.com`.
2. Use that token to call `GET /api/admin/orders`.

### Expected Result

API rejects the request because token role is not admin.

### Actual Result

Pending execution. Source shows no role check in the admin orders route.

## BUG-C-02 - Canceled Order Can Be Marked Delivered

### Steps to Reproduce

1. Create or set an order to `canceled`.
2. Call `PUT /api/admin/orders/<id>/status` with `{"status":"delivered"}`.

### Expected Result

400 invalid transition because `canceled` is a final state.

### Actual Result

Pending execution. Source explicitly allows `currentStatus === "canceled" && status === "delivered"`.

## BUG-C-03 - Shipping Address HTML Injection In Admin Order Table

### Steps to Reproduce

1. Create an order with shipping address `<img src=x onerror=alert(1)>`.
2. Login to admin UI and open Orders tab.

### Expected Result

Address is escaped and displayed as text.

### Actual Result

Pending execution. Source uses `dangerouslySetInnerHTML` to render `shipping_address`.
