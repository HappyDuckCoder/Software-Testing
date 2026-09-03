# Postman UI evidence (Desktop gốc — 03/09/2026)

Ảnh do sinh viên chụp từ **Postman Desktop**, thay bộ render HTML (`generate-postman-evidence.mjs`).

| # | PNG | Nội dung |
| --- | --- | --- |
| 1 | `postman-runner-config-20260903.png` | Runner: Run order (SETUP 1–19+), Functional/Local, iterations = 1 |
| 2 | `postman-run-results-20260903.png` | Kết quả run hoàn tất: **182 test, 170 pass, 12 fail**, 13s, `127.0.0.1:3000` |
| 3 | `postman-run-details-negative-cases-20260903.png` | Chi tiết FAIL (A-021…A-032, assertion 400 vs 200) |
| 4 | `postman-setup07-request-headers-20260903.png` | Request SETUP-07 `POST /api/checkout` — tab Headers |
| 5 | `postman-a038-response-20260903.png` | TC A-038 PASS — response `200` `Profile updated` |
| 6 | `postman-console-student-id-20260903.png` | **Postman Console** — `X-Student-Id applied: 23127173` (đề §11) |

Collection: `23127173 HW06 EShop API Testing` · Run ~15:21–15:22 ngày 03/09/2026.

Script HTML helper (dự phòng): `cd api-testing && npm run evidence:postman` — **không** dùng làm evidence nộp.
