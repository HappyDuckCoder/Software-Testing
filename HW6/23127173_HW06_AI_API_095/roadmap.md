# Roadmap HW06-AI API Testing

## Lộ trình 10 giờ

| Bước | Công việc | Deliverable |
| --- | --- | --- |
| 1 | Đọc đặc tả, chọn và xác nhận 3 API A/B/C; khởi động SUT, xác minh base URL/tài khoản. | `api-selection.md`, baseline ghi chú. |
| 2 | Dùng AI từng bước để sinh >=35 TC cho API A; lưu prompt/output. | Draft TC + audit API A. |
| 3 | Audit thủ công, sửa và thêm >=5 TC sinh viên cho API A. | Final TC + gap analysis A. |
| 4 | Lặp generation/audit/extension cho API B. | Final TC + gap analysis B. |
| 5 | Lặp generation/audit/extension cho API C. | Final TC + gap analysis C. |
| 6 | Xây Postman collection/environment/data; bắt buộc `X-Student-Id` pre-request script. | Collection JSON và ảnh console thật. |
| 7 | Chạy Newman; lưu raw output/HTML report, cập nhật Excel summary. | Evidence thực thi thật. |
| 8 | Triage lỗi thật, tạo GitHub Issues kèm screenshot. | Bug report và URL issue. |
| 9 | Thêm CI/CD, thực hiện một run pass và một run fail có chủ đích/được ghi rõ. | Workflow, report, links/screenshots. |
| 10 | Tự vẽ diagram generator, viết pseudocode, hoàn thiện report/audit/critique/PDF/ZIP. | Bộ nộp hoàn chỉnh. |

## Quy tắc

- Commit tách theo generation, audit, extension, execution cho từng API.
- Cập nhật AI Audit ngay sau mỗi tương tác: tool, thời gian, prompt, output, verdict và phần đã kiểm tra/sửa.
- Chỉ lưu số liệu, report và ảnh từ lần chạy thật; không tạo dữ liệu thực thi giả.
- So khớp schema/HTTP status với `Eshop/api_specification.md` và hành vi SUT trước khi kết luận bug.

## Trạng thái sau khi review (03/09/2026)

**Đã hoàn thành:** bước 1–7 và bước 9 (CI pass #8 + fail #7 — 6 ảnh). Evidence: `evidence/postman-ui/`, `evidence/newman-ui/`, `evidence/ci-cd/`, `test-cases/23127173_HW06_test-summary-20260903.xlsx`.

**Chưa hoàn thành:** GitHub Issues (6 nhóm bug). ZIP nộp Moodle: sinh viên tự đóng gói (không bắt buộc tiêu chí nội bộ).
