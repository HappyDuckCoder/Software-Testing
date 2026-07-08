# Bug Report - FR-10 Order State Machine

| Bug ID | Summary | Severity | Priority | GitHub Issue | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-D-01 | User cancel route allows `shipping` orders to be canceled | Major | High | Pending | `backend/server.js` cancel route rejects only `delivered` and `canceled` | Source identified; execution pending |
| BUG-D-02 | Admin status route allows `canceled -> delivered` | Major | High | Pending | `backend/server.js` state transition branch | Source identified; execution pending |

## BUG-D-01 - User Can Cancel Shipping Order

### Steps to Reproduce

1. Create an order for a user.
2. Move it to `shipping` as admin.
3. Login as that user or use the user's token.
4. Call `PUT /api/orders/<id>/cancel`.

### Expected Result

Request is rejected because users can cancel only `pending` or `confirmed` orders.

### Actual Result

Pending execution. Source rejects only `delivered` and `canceled`, so `shipping` is likely canceled.

## BUG-D-02 - Canceled Order Can Become Delivered

### Steps to Reproduce

1. Create or set an order to `canceled`.
2. Call `PUT /api/admin/orders/<id>/status` with `{"status":"delivered"}`.

### Expected Result

Request is rejected because `canceled` is a final state.

### Actual Result

Pending execution. Source marks `currentStatus === "canceled" && status === "delivered"` as valid.
