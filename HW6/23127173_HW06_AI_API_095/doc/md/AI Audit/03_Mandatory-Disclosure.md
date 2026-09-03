**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Khai báo sử dụng AI — HW06

## 1. Thông tin

| Mục | Giá trị |
| --- | --- |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Bài tập | HW06-AI — Kiểm thử API EShop |
| Ngày | 03/09/2026 |
| Sinh viên | Trần Hải Đức — MSSV 23127173 |

**Tuyên bố:** *I use AI tools for the following tasks.*

## 2. Công cụ AI

| Công cụ | Việc AI làm | Việc sinh viên làm |
| --- | --- | --- |
| Codex (GPT-5) | Khung nộp, chọn API, collection/Newman/CI, skill, evidence 01/09 | Chạy SUT, cung cấp ảnh Postman/CI, xác nhận bug |
| Cursor (Composer 2.5) | Audit/disclosure FIT; ma trận 120 TC tiếng Việt; oracle theo spec; cập nhật báo cáo 03/09 | Duyệt 105 TC AI; định nghĩa 15 TC bổ sung; chạy test và nộp Excel/PDF/ZIP |

## 3. Prompt chính (đầy đủ ở `appendixA-prompt-log.md`)

1. Dịch đề, dựng khung HW6, chạy Newman/CI (Codex, 01/09).
2. Rà tiến độ, bổ sung AI Audit/Mandatory (Composer 2.5, 03/09 sáng).
3. Đọc spec EShop, ma trận TC tiếng Việt, 15 TC SV (Composer 2.5, 03/09).
4. Sinh lại TC/collection; khởi động EShop `127.0.0.1:3000` chuẩn bị retest (Composer 2.5, 03/09).

## 4. Phần việc cụ thể

**AI đã hỗ trợ:** dịch requirement; 105 TC AI/pool; map oracle theo `api_specification.md` + README FR/SEC; collection có `X-Student-Id`; Newman baseline/compliance; CI workflow; rà soát evidence.

**Sinh viên tự làm / quyết định:** duyệt toàn bộ TC AI (không giữ verdict); 15 TC bổ sung:

- **Pool A:** body rỗng; A/B/C cập nhật đồng thời; đổi MK rồi update profile; tên emoji; địa chỉ emoji.
- **Pool B:** retry sau mất kết nối; path Unicode; token có khoảng trắng; timeout; body JSON khi hủy.
- **Pool C:** confirmed trùng lặp; admin token whitespace; body mảng JSON; status quá dài; đổi trạng thái sau checkout.

**AI không làm:** ảnh Postman/CI gốc, GitHub Issue, diagram tự vẽ, Excel kết quả chạy, PDF/ZIP.

## 5. Cách xác minh

- Oracle lấy từ đặc tả, **không** suy từ `server.js`.
- Compliance run tái lập 3 bug SEC-06 / FR-10 / SEC-03.
- Chỉ ghi Issue khi SV tạo trên GitHub thật.

## 6. Tuyên bố giới hạn

Không dùng AI tạo: ảnh console `X-Student-Id` giả, Newman output giả, sơ đồ generator AI-generated, Issue/screenshot bịa.

## 7. Trạng thái (03/09/2026)

| Hạng mục | Trạng thái |
| --- | --- |
| 120 TC thiết kế (35 AI + 5 SV × 3 API) | ✅ |
| TC AI đã duyệt (không cột verdict) | ✅ |
| 15 TC sinh viên + lý do gap | ✅ |
| Oracle theo spec | ✅ |
| EShop backend sẵn sàng retest (`127.0.0.1:3000`) | ✅ (03/09) |
| Core Newman + CI pass | ✅ |
| Full 120 TC Newman (setup + observation) | ✅ (03/09) |
| Postman runner evidence (5 ảnh, full 120) | ✅ (03/09) |
| Assertion oracle đặc tả (core + mapped) | ✅ (03/09, 3–5 fail) |
| Excel + GitHub Issue + CI fail + PDF/ZIP | ⏳ |

## 8. Mandatory Disclosure (dán nguyên văn)

"Khung nộp bài, ma trận 120 test case, collection Postman/Newman, báo cáo và tài liệu audit được sinh với Codex (GPT-5) và Cursor (Composer 2.5); tôi đã duyệt toàn bộ 105 test case AI, tự bổ sung 15 test case sinh viên, thiết kế oracle theo đặc tả EShop (không theo code), cung cấp ảnh Postman/CI gốc và xác nhận ba lỗi compliance; Excel, GitHub Issues, remote CI fail, diagram, PDF và ZIP do tôi hoàn tất — chưa xong nên không tuyên bố nộp đủ. AI Audit Report đính kèm. Tôi cam đoan không dùng AI tạo artifact bị cấm."

## 9. Cam đoan

| Mục | Giá trị |
| --- | --- |
| Họ tên | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |
