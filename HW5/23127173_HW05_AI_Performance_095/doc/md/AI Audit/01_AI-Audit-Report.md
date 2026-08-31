# AI Audit Report - HW05

## Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| MSSV | 23127173 |
| Mã bài tập | HW05-AI |
| Có dùng AI | Có |

## Nhật ký tương tác

| ID | Thời gian (UTC+7) | Công cụ AI | Prompt/Yêu cầu | Đầu ra AI | Verdict và phần sinh viên phải kiểm tra |
| --- | --- | --- | --- | --- | --- |
| AI-001 | 31/08/2026 | Codex (GPT-5) | “dựa vào Lab\\HW5\\requirement\\requirement.pdf hãy dịch lại vào Lab\\HW5\\requirement\\requirement.md” | Dịch toàn bộ yêu cầu HW05 từ PDF sang Markdown tiếng Việt. | **VALID - document drafting.** Sinh viên phải đối chiếu bản dịch với PDF gốc; đây không phải bằng chứng thực thi. |
| AI-002 | 31/08/2026 | Codex (GPT-5) | “tạo thư mục nộp bài giống hw4; sau đó tạo file roadmap và checklist cho hw5; tạo các file và thư mục nộp bài cần thiết trước, sau đó chờ tôi; cập nhật ai audit; commit” | Khởi tạo khung bài nộp HW05, roadmap, checklist và các template tài liệu/audit. | **INCOMPLETE - setup only.** Sinh viên phải chọn endpoint, chạy test thật, thu thập evidence, review AI và hoàn thiện toàn bộ chỗ đánh dấu chưa chạy. |
| AI-003 | 31/08/2026 | Codex (GPT-5) | “chọn tôi 3 api phù hợp có liên quan đến hw2... không được trùng với [Vân: `/register`, `/api/products/:id`, `POST /api/checkout`]” | Kiểm tra API EShop và tài liệu HW2; chọn workflow `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`; cập nhật tài liệu. | **VALID - scope selection, pending execution.** Sinh viên phải xác minh endpoint/port, tài khoản và dữ liệu đơn khi SUT chạy; không được suy diễn hiệu năng từ lựa chọn API. |
| AI-004 | 31/08/2026 | Codex (GPT-5) | “các api đó làm gì, cập nhật doc, cập nhật aiaudit” | Bổ sung mô tả chức năng, request/response logic, quan hệ JWT và `orderId`, điều kiện trạng thái đơn, và rủi ro lockout/data collision vào tài liệu HW5. | **VALID - documentation.** Sinh viên phải đối chiếu behavior với SUT đang chạy trước khi thiết kế assertion và không được xem mô tả này là kết quả kiểm thử. |

## Quy tắc cập nhật

Mỗi lần sử dụng AI tiếp theo, thêm một dòng ghi đủ: ngày giờ, công cụ, prompt, đầu ra, verdict (VALID/INVALID/INCOMPLETE), lý do và phần sinh viên đã kiểm chứng hoặc sửa. Không ghi nhận dữ liệu thực thi chưa xảy ra.
