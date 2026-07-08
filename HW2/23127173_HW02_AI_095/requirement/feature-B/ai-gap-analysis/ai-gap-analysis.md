# AI Gap Analysis - FR-11 Xem lịch sử đơn hàng (user)

| Gap ID | Output AI | Thiếu / sai | Vì sao AI bỏ sót | Sinh viên sửa | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| B-GAP-01 | Generic order-history tests usually check only visible rows | Ownership must be verified at API level using token user id | The privacy rule is implemented in SQL, not obvious from UI only | Added cross-user order history test | `backend/server.js`; B-DT-04 |
| B-GAP-02 | AI may treat `/api/orders/:id` as harmless detail route | Detail route has no auth/ownership check in source | Requires backend source inspection | Added non-owned detail leak tests and bug report | `backend/server.js`; B-DT-13; BUG-B-01 |
| B-GAP-03 | AI may not connect FR-11 history actions to FR-10 state machine | UI shows cancel button for `shipping` orders | State constraint spans FR-10 and FR-11 UI | Added shipping cancel visibility test and bug report | `Profile.jsx`; B-DT-09; BUG-B-02 |

## Tóm tắt

The corrected Feature B tests are grounded in the EShop order-history implementation instead of generic e-commerce behavior. The important analysis gaps are privacy and state coupling: the history list itself filters by `req.user.id`, but the separate order-detail route is public, and the user history UI exposes cancel behavior for `shipping` orders even though FR-10 forbids user cancellation after shipping. These are source-backed risks that require execution evidence before final verdict.





