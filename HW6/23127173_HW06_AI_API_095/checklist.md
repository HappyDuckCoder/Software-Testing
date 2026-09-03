# Checklist HW6 — Kiểm thử API

## Chuẩn bị

- [x] Chọn 3 API pool A/B/C, không trùng bộ của Vân.
- [x] SUT chạy tại `127.0.0.1:3000`.
- [ ] Xuất git commit log đầy đủ trước khi đóng ZIP.

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
- [x] CI remote baseline pass; chưa có remote fail có chủ đích.
- [ ] Excel test summary sau khi chạy đủ assertion.
- [ ] Sơ đồ generator tự vẽ.
- [x] AI Audit + Mandatory Disclosure cập nhật (03/09/2026).
- [ ] PDF + ZIP nộp bài.
