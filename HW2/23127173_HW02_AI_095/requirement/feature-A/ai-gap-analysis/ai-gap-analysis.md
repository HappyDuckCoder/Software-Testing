# AI Gap Analysis - FR-04 Quản lý hồ sơ cá nhân

| Gap ID | Output AI | Thiếu / sai | Vì sao AI bỏ sót | Sinh viên sửa | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| A-GAP-01 | Initial AI draft included generic profile fields: DOB, gender, avatar, and arbitrary max lengths | These fields/rules do not exist in FR-04 source for EShop | AI used generic e-commerce assumptions before reading the repo | Removed non-source fields and rebuilt tests around `name`, `phone`, `shipping_address`, email disabled UI, token, and role payload | `Eshop/README.md`, `Eshop/frontend-web/src/pages/Profile.jsx`, corrected Domain/BVA reports |
| A-GAP-02 | Initial AI draft treated phone as a generic 10-11 digit value | Repo has a specific rule: phone must start with `0` and have 10-11 digits | Requirement detail was only in EShop README, not in the HW02 feature list | Added phone equivalence classes and BVA for leading `0`, 9/10/11/12 digits, and non-digit input | A-DT-06 to A-DT-12; A-BVA-01 to A-BVA-06 |
| A-GAP-03 | Initial AI draft did not detect source/spec mismatch | Frontend regex accepts non-zero-start 9-10 digit phones and rejects spec-valid leading-zero phones | This requires reading `Profile.jsx`, not just the README | Added tests expected to expose frontend validation bug | `Profile.jsx` phone regex; A-DT-06, A-DT-08, A-BVA-02, A-BVA-06 |
| A-GAP-04 | Initial AI draft did not include API abuse cases | Backend accepts `role` in `PUT /api/users/me`, contradicting FR-04 | The bug is hidden in backend implementation | Added role escalation domain test and bug report entry | `backend/server.js`; A-DT-17; BUG-A-02 |
| A-GAP-05 | Initial AI draft left repo evidence vague | Test cases were not traceable to exact EShop files | Prompt did not explicitly require repo-based generation until user correction | Rewrote feature report to include source evidence and source-backed input inventory | `feature-A-report.md` |

## Tóm tắt

The revised Feature A artifacts show the difference between AI-generated generic testing and bám source testing. After reading the EShop repo, the test space became smaller but more accurate: FR-04 only manages `name`, `phone`, and `shipping_address`, with email disabled in the UI and `role` forbidden from client modification. Đọc source also revealed two high-value gaps that the initial AI draft missed: the frontend phone regex contradicts the README rule, and the backend profile update can modify `role`. This is the main G9.3 Analyse lesson: AI suggestions must be checked against real requirements and implementation before test cases are treated as valid.





