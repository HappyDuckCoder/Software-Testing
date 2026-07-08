# AI Gap Analysis - FR-18 Order Management (Admin)

| Gap ID | AI output | Missing / incorrect item | Why AI missed it | Student fix | Evidence |
| --- | --- | --- | --- | --- | --- |
| C-GAP-01 | Generic admin-order tests may assume admin middleware exists | `/api/admin/orders` only uses `authenticateToken`, no role check | Requires reading backend routes, not just UI login | Added normal-user-token admin API test and bug report | `backend/server.js`; C-DT-04; BUG-C-01 |
| C-GAP-02 | AI may only test visible transition buttons | Backend explicitly allows `canceled -> delivered` | The bug is hidden in state transition code | Added final-state transition tests | C-DT-12; C-BVA-06; BUG-C-02 |
| C-GAP-03 | AI may overlook rendering security in a table cell | Admin UI uses `dangerouslySetInnerHTML` for shipping address | Requires frontend source inspection | Added unsafe-address tests and bug report | `frontend-admin/src/App.jsx`; C-DT-15; BUG-C-03 |

## Summary

The source-based FR-18 tests go beyond happy-path admin order listing. Reading the EShop repo exposed three high-impact gaps: admin APIs do not enforce admin role, canceled orders can be moved to delivered despite being final, and shipping addresses are rendered with raw HTML. The revised artifacts convert those source findings into executable Domain Testing and BVA cases, with final verdicts left open until SUT execution evidence is captured.
