# AI Audit Report - HW06

## Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| MSSV | 23127173 |
| Mã bài | HW06-AI |
| Có dùng AI | Có |

## Nhật ký tương tác

| ID | Thời gian (UTC+7) | Tool | Prompt/Yêu cầu | Output | Verdict và phần phải kiểm tra |
| --- | --- | --- | --- | --- | --- |
| AI-001 | 01/09/2026 | Codex (GPT-5) | Đọc `Lab/HW6/requirement/requirement.pdf`, dịch sang Markdown; tạo khung nộp bài, roadmap, checklist, cập nhật audit và commit. | Bản dịch `requirement.md`; cấu trúc khởi tạo với các template báo cáo, audit, Postman/Newman, CI/CD, evidence và test generator. | **INCOMPLETE - setup/document drafting only.** Sinh viên phải đối chiếu bản dịch với PDF, chốt API không trùng nhóm, tạo/audit TC, chạy SUT/Postman/Newman thật, tự vẽ diagram, tạo issue/CI evidence thật và cập nhật log cho mọi tương tác tiếp theo. |
| AI-002 | 01/09/2026 | Codex (GPT-5) | Chọn 3 API ưu tiên lấy từ HW2, không trùng `/register`, `/api/products/:id`, `POST /api/checkout` của Vân. | Chọn `PUT /api/users/me` (A/FR-04), `PUT /api/orders/:id/cancel` (B/FR-10), `PUT /api/admin/orders/:id/status` (C/FR-18); cập nhật README và API selection. | **VALID - scope selection, pending verification.** Sinh viên phải xác nhận lại không trùng nhóm, kiểm tra behavior/response từ SUT thực tế và không xem các bug hay điều kiện suy ra từ HW2 là bằng chứng HW6. |
| AI-003 | 01/09/2026 | Codex (GPT-5) | Thêm cột ý nghĩa API cho ba API đã chọn. | Bổ sung mô tả ngắn gọn về chức năng nghiệp vụ của từng endpoint trong README và API selection. | **VALID - documentation.** Sinh viên cần đối chiếu mô tả với SUT/đặc tả thực tế trước khi dùng làm oracle. |
| AI-004 | 01/09/2026 | Codex (GPT-5) | Lưu workflow do sinh viên cung cấp và tạo skill tương ứng; cập nhật AI Audit. | Lưu bản SVG tham chiếu của workflow và tạo skill `postman-newman-api-testing-workflow` hướng dẫn quy trình từ phân tích API đến Postman, Newman, CI, evidence, report và audit. | **VALID - workflow documentation.** Sơ đồ gốc là do sinh viên cung cấp; SVG chỉ lưu lại workflow tham chiếu. Sinh viên vẫn phải tự tạo ảnh console, Newman/CI evidence, GitHub Issue và diagram nộp bài theo hoạt động thật. |
| AI-005 | 01/09/2026 | Codex (GPT-5) | Nâng cấp SKILL đầy đủ, chuyên nghiệp, phù hợp requirement và thiết kế test API. | Mở rộng skill với endpoint modeling, staged AI generation, audit, coverage gate, Postman/Newman/CI implementation, evidence integrity; thêm test-case contract và implementation reference. | **VALID - process design.** Đây là hướng dẫn và template, không phải test result/oracle đã xác minh. Sinh viên phải review spec/SUT, tự vẽ diagram nộp bài và ghi AI interaction tiếp theo. |
| AI-006 | 01/09/2026 | Codex (GPT-5) | Hoàn thành HW6: chạy EShop, tạo/running Postman-Newman suite, CI, docs và evidence. | Cài Newman cục bộ; tạo collection có `X-Student-Id`; chạy baseline 20 requests/21 assertions pass; chạy compliance và tái lập 3 defect: role mass assignment, cancel shipping, user gọi admin status. Tạo CI workflow và cập nhật báo cáo. | **VALID - partial execution and documentation.** Raw/HTML report là kết quả thật. Chưa có Postman Desktop Console screenshot, GitHub Issues/screenshot, remote CI run, Excel workbook, full >=35/audit/+5 case mỗi API, PDF/video; các mục này không được tuyên bố hoàn tất. |
| AI-007 | 01/09/2026 | Codex (GPT-5) | Cập nhật flow skill theo sơ đồ mới. | Thay workflow reference và bổ sung gate: cập nhật local bug report -> chờ user verify -> tạo GitHub Issue; CI fail phải được chẩn đoán, sửa, commit/push lại trước khi ghi healthy. | **VALID - workflow governance.** Gate bảo vệ các thay đổi bên ngoài; không tự tạo Issue hoặc push chỉ dựa trên defect local. |

## Quy tắc cập nhật

Mỗi lần dùng AI, bổ sung timestamp, tool, prompt đầy đủ, output, verdict `VALID`/`INVALID`/`INCOMPLETE`, lý do và phần sinh viên đã kiểm tra/sửa. Không ghi một hoạt động chưa diễn ra như bằng chứng thực thi.
