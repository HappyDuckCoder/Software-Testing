# Checklist HW06 — Kiểm thử API

## Chuẩn bị

- [x] Chọn 3 API pool A/B/C, không trùng bộ của Vân.
- [x] SUT chạy tại `127.0.0.1:3000` (khởi động lại 03/09/2026).
- [ ] Xuất git commit log đầy đủ trước khi đóng ZIP.

## Mỗi API (×3)

- [x] AI sinh ≥35 TC theo **đặc tả** (`api_specification.md`, README FR/SEC).
- [x] Sinh viên duyệt toàn bộ TC AI (không giữ cột verdict — đã OK hết).
- [x] Bổ sung 5 TC sinh viên + ghi lý do AI bỏ sót (`test-case-matrix.md`).
- [x] Map oracle theo spec trong `execution-mapping.md`.
- [ ] Gắn assertion Postman/Newman cho từng ID (hiện mới có core + observation).
- [x] Chạy core suite; có Newman raw/HTML.
- [x] Chạy full 120 TC Newman (`npm run test:full120`): 128 req, 128 assertion, 0 fail — raw/HTML/ảnh 03/09/2026.
- [ ] Tạo GitHub Issue + screenshot cho 3 bug compliance.

## Toàn bài

- [x] Header `X-Student-Id: 23127173` trên mọi request.
- [x] Postman Desktop: 5 ảnh evidence (cập nhật 03/09/2026, full 120 TC).
- [x] CI remote baseline pass; chưa có remote fail có chủ đích.
- [ ] Excel test summary sau khi chạy đủ assertion.
- [ ] Sơ đồ generator tự vẽ.
- [x] AI Audit + Mandatory Disclosure cập nhật (03/09/2026).
- [ ] PDF + ZIP nộp bài.
