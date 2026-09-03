# Checklist HW6 — Kiểm thử API

## Chuẩn bị

- [x] Chọn 3 API pool A/B/C, không trùng bộ của Vân.
- [x] SUT chạy tại `127.0.0.1:3000`.
- [x] Excel test summary: `test-cases/23127173_HW06_test-summary-20260903.xlsx` (108/12).
- [x] PDF báo cáo chính: `doc/pdf/main-report.pdf`.
- [x] Flowchart workflow: `doc/pdf/hw6-api-testing-workflow.png`.
- [x] Git commit log: `doc/md/Git Commit Log/git-commit-log.txt` (UTF-8, cập nhật 03/09).

## Mỗi API (×3)

- [x] AI sinh ≥35 TC theo **đặc tả** (`api_specification.md`, README FR/SEC).
- [x] Sinh viên duyệt toàn bộ TC AI.
- [x] Bổ sung 5 TC sinh viên + ghi lý do AI bỏ sót (`test-case-matrix.md`).
- [x] Map oracle từng ID: `oracle-utils.mjs`, `oracle-execution.json`, `execution-mapping.md`.
- [x] Review TC lần 2: `test-cases/test-case-review.md`.
- [x] Gắn assertion oracle đặc tả cho 120 TC (ID trùng ma trận).
- [x] Newman full run: **182 req, 182 assertion, 12 fail** — `npm run test`.
- [x] Postman evidence **6 ảnh Desktop gốc** (03/09: Runner 170/12 fail + Console `X-Student-Id`).
- [ ] Tạo GitHub Issue + screenshot cho 6 nhóm bug.

## Toàn bài

- [x] Header `X-Student-Id: 23127173` trên mọi request.
- [x] CI remote **pass** — `evidence/ci-cd/ci-06`…`ci-10`.
- [ ] CI remote **fail** — Run workflow → **`full-fail`**, chụp `ci-fail-*`.
- [x] Excel test summary sau khi chạy đủ assertion.
- [x] Sơ đồ workflow (`doc/pdf/hw6-api-testing-workflow.png`).
- [x] AI Audit + Mandatory Disclosure cập nhật (03/09/2026).
- [x] PDF nộp bài: `doc/pdf/main-report.pdf`. ZIP: sinh viên tự đóng gói.
