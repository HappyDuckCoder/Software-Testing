# Bug Report - FR-11 Order History View (User)

| Bug ID | Summary | Severity | Priority | GitHub Issue | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-B-01 | `GET /api/orders/:id` exposes order detail without authentication/ownership check | Critical | High | Pending | `Eshop/backend/server.js` detail route | Source identified; execution pending |
| BUG-B-02 | User history UI shows cancel button for `shipping` orders | Major | High | Pending | `Profile.jsx` condition hides only `delivered` and `canceled` | Source identified; execution pending |

## BUG-B-01 - Order Detail Route May Leak Other Users' Orders

### Summary

`GET /api/orders/:id` returns an order by id without `authenticateToken` and without checking `user_id`, which can expose another user's order detail.

### Steps to Reproduce

1. Create or identify an order id for another user.
2. Send `GET /api/orders/<id>` without token or with a different user's token.
3. Observe response.

### Expected Result

The API should require authentication and return only the token owner's order or reject access.

### Actual Result

Pending execution. Source indicates the route returns the order directly.

## BUG-B-02 - User Can Attempt To Cancel Shipping Order From History

### Summary

FR-10 says user cannot cancel an order in `shipping`, but the order history UI shows the cancel button for every status except `delivered` and `canceled`.

### Steps to Reproduce

1. Create an order for a user and move it to `shipping`.
2. Login as that user and open `/profile`.
3. Inspect action column and attempt cancellation.

### Expected Result

No user cancel action is shown for `shipping`; API should reject user cancellation.

### Actual Result

Pending execution. Source indicates the button is visible and backend cancel route rejects only `delivered` and `canceled`.
