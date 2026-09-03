**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Bảng kiểm quyền riêng tư và sử dụng AI có trách nhiệm — HW06

*Thực hiện trước khi nộp. Ngày rà soát: 03/09/2026 — MSSV 23127173.*

## 1. Trước khi dùng AI

- [x] Đã xác nhận chính sách AI của HW06 là mở; bắt buộc tuyên bố và AI Audit.
- [x] Đã đọc thoả thuận/mẫu AI của môn (`Lab/AI Templates/md`).
- [x] Hiểu artifact **không** được sinh bằng AI: ảnh console `X-Student-Id`, Newman hostname giả, sơ đồ generator nộp bài, GitHub Issue/screenshot giả.
- [x] Dùng tài khoản test EShop local (`test@eshop.com` / `admin@eshop.com`), không đưa mật khẩu production hay dữ liệu cá nhân thật vào prompt.

## 2. Trong khi dùng AI

- [x] Không nhập CCCD, token session thật, dữ liệu khách hàng, hay repo private vào prompt.
- [x] Không paste nguyên JWT sống vào audit/prompt log; yêu cầu redaction trên ảnh headers.
- [x] Environment local (`.postman_environment.json` có secret) không commit; dùng template.
- [x] Ghi tương tác vào `01_AI-Audit-Report.md` và `appendixA-prompt-log.md`.
- [x] Phân biệt raw Newman / ảnh SV với nội dung AI draft.
- [x] Không tạo GitHub Issue hay push fail CI khi chưa được sinh viên ủy quyền.

## 3. Trước khi nộp bài

- [x] Mọi artifact AI sinh đã có hàng audit (AI-001 … AI-017).
- [x] AI Critique 200–300 từ đã có.
- [x] Mandatory Disclosure đã điền theo mẫu FIT.
- [ ] Cột `Student Verify` trên 120 TC đã được sinh viên xác nhận từng dòng.
- [ ] Mọi request observation đã được thay bằng assertion status/schema (hiện chỉ non-5xx).
- [ ] GitHub Issue thật + screenshot đã đính kèm.
- [ ] Excel test cases / test summary đã xuất từ kết quả chạy.
- [ ] Main report + AI Audit đã xuất PDF.
- [ ] Git commit log lấy từ lịch sử repo thật (tách generation/audit/extension/execution).
- [ ] ZIP đúng tên `23127173_HW06_AI_API_<grade>.zip`.
- [x] Sẵn sàng vấn đáp ngẫu nhiên 5–7 phút (đề §13).

## 4. Cam đoan cuối cùng

Trách nhiệm cuối cùng về độ chính xác, tính nguyên bản và liêm chính của bài nộp thuộc về tôi. Mọi việc dùng AI không khai báo bị coi là vi phạm liêm chính học thuật.

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên (in hoa) | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Lớp / Khoá | Chưa điền |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Giảng viên | Chưa điền |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |
