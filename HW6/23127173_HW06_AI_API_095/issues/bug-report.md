# Bug report register

| ID | API | Expected | Actual in compliance run | Status |
| --- | --- | --- | --- | --- |
| HW6-BUG-01 | `PUT /api/users/me` | Client must not change `role` (FR-04, SEC-06); reject request. | Body containing `"role":"admin"` returned 200 `Profile updated`. | Reproduced; GitHub Issue pending. |
| HW6-BUG-02 | `PUT /api/orders/:id/cancel` | User cannot cancel a `shipping` order (FR-10). | Request returned 200 `Order canceled successfully`. | Reproduced; GitHub Issue pending. |
| HW6-BUG-03 | `PUT /api/admin/orders/:id/status` | Non-admin JWT must be denied (FR-12, SEC-03). | User JWT changed a pending order and returned 200. | Reproduced; GitHub Issue pending. |

Evidence: `../api-testing/newman/raw-output/compliance-20260901.txt` and `../api-testing/newman/html-reports/compliance/report.html`. GitHub Issues and their screenshots are not yet created, so their links are not claimed here.
