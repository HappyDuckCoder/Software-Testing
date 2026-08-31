# Roadmap hoàn thành HW05-AI Performance Testing

## Mục tiêu

Hoàn thành ba kịch bản Load, Stress và Spike trên **cùng một workflow đầu cuối** của EShop: `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`. Workflow tái sử dụng FR-11 và FR-10 của HW2, đồng thời bao phủ endpoint xác thực, đọc và giao dịch. Mọi tham số, log, ảnh giám sát và kết quả chỉ được điền sau khi chạy thực tế.

## Lộ trình 10 giờ

| Bước | Công việc | Sản phẩm bàn giao |
| --- | --- | --- |
| 1 | Khởi động SUT; xác minh 3 endpoint đã chọn, port, tài khoản test, đơn `pending`/`confirmed` và reset lockout. | Endpoint map, ảnh phần cứng và monitor cơ sở. |
| 2 | Dùng AI theo prompt từng bước để phác thảo workflow, dữ liệu CSV, think-time, ramp-up và assertion. | Prompt log, bản nháp kế hoạch, nhận xét human review. |
| 3 | Hoàn thiện workflow data-driven và ba test plan. | `performance/test-plans/{StudentID}_{Load,Stress,Spike}_{YYYYMMDD}` và CSV. |
| 4 | Chạy Load; lưu `.jtl`, HTML report, ảnh tool + resource monitor. | Bằng chứng Load. |
| 5 | Chạy Stress; xử lý/reset lockout sau 3 lần đăng nhập sai nếu xảy ra. | Bằng chứng Stress và các bước reset. |
| 6 | Chạy Spike; lưu đầy đủ evidence tương tự. | Bằng chứng Spike. |
| 7 | Chạy endurance/soak 10-15 phút; xác định RPS ổn định tối đa và trần bộ nhớ. | Bằng chứng threshold. |
| 8 | Nhờ AI phân tích `.jtl`; đối chiếu giá trị thô, ghi nhận diễn giải sai và đánh giá đề xuất tối ưu. | Báo cáo chính, AI Audit, AI Critique. |
| 9 | Đề xuất pipeline performance testing liên tục với flowchart, p95 regression và trade-off. | Kết luận trong báo cáo chính. |
| 10 | Quay video tiếng Việt >= 6 phút, kiểm tra checklist, xuất PDF, cập nhật commit log và đóng gói ZIP. | Video, PDF, ZIP nộp Moodle. |

## Quy tắc bắt buộc

- Không tạo hoặc chỉnh sửa dữ liệu `.jtl`, HTML report, ảnh monitor/phần cứng hay video bằng AI.
- Dùng ba loại listener/report khác nhau trên ba kịch bản, không lặp lại.
- Lưu log `.jtl` nguyên gốc và thư mục HTML report đầy đủ.
- Cập nhật AI Audit ngay sau mỗi tương tác AI: công cụ, thời gian, prompt, output, verdict và phần đã được sinh viên kiểm tra/sửa.

## Rủi ro cần kiểm soát

| Rủi ro | Cách xử lý |
| --- | --- |
| Endpoint/port giả định sai | Đọc repo và gọi thử API trước khi tạo test plan. |
| Tài khoản bị lockout | Chuẩn bị quy trình reset và ghi lại mỗi lần thực hiện. |
| Tham số không thực tế | So sánh với năng lực máy, chạy baseline nhỏ và điều chỉnh có lý do. |
| AI đọc sai metric | Luôn đối chiếu từng giá trị với `.jtl` thô. |
| Thiếu evidence | Chụp tool và resource monitor trong cùng khung hình ở mỗi lần chạy. |
