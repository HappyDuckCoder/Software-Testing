# AI Audit Report

## Khai báo

AI chỉ hỗ trợ tạo cấu trúc thư mục và template Markdown ban đầu cho HW03. AI không chạy EMS, không thực hiện user testing, không tạo screenshot, không ghi nhận Pass/Fail và không tạo finding.

| ID | Ngày giờ | Công cụ AI | Prompt / yêu cầu | Output AI | Verdict | Rà soát / chỉnh sửa của sinh viên |
| --- | --- | --- | --- | --- | --- | --- |
| AI-001 | 15:06 26/07/2026 (UTC+7) | Cursor | Tham khảo cấu trúc HW2, đọc requirement HW3, xác định Task 3, tạo khung tại `Lab/HW3/23127173_HW03_AI_GUIUsability_EMS_095`; chỉ tạo structure và placeholder, không làm thay nội dung sinh viên phải tự thực hiện. | Cây thư mục và template tiếng Việt cho checklist, kịch bản, Task 2, Task 3, findings, báo cáo, audit, Git log và Agent Skills. | INCOMPLETE | Sinh viên phải chọn kịch bản, chạy test thật và thay mọi placeholder bằng dữ liệu có bằng chứng. |
| AI-002 | 15:22 26/07/2026 (UTC+7) | Cursor | Chọn Scenario B và ba màn hình theo lựa chọn A: B1 Home / danh sách sự kiện, B2 Chi tiết sự kiện, B3 Form đăng ký; cập nhật nội dung tương ứng và AI Audit. | Đổi tên thư mục kịch bản thành `scenario-B`, cập nhật template báo cáo, Task 2, Task 3 và thực thi checklist để phản ánh ba màn hình đã chọn. | VALID | Sinh viên cần xác nhận URL thực tế, thực thi checklist, user testing và compatibility testing; AI không điền kết quả hoặc bằng chứng. |
| AI-003 | 15:38 26/07/2026 (UTC+7) | Cursor | Điều chỉnh phạm vi vì khu vực đăng ký nằm trong trang chi tiết sự kiện; thay B3 bằng B4 My Registrations / ticket, đồng thời cập nhật AI Audit và AI Disclosure. | Cập nhật phạm vi thành B1, B2 kèm khu vực đăng ký và B4; điều chỉnh template liên quan. | VALID | Phạm vi mới có ba màn hình độc lập hơn. Sinh viên vẫn phải thực hiện mọi kiểm thử và thu thập bằng chứng thật. |
| AI-004 | 15:43 26/07/2026 (UTC+7) | Cursor | Cập nhật URL B4 theo đường dẫn `/profile`. | Ghi đường dẫn B4 trong Scenario Report, compatibility matrix và file thực thi checklist; nêu rõ phải đăng nhập và xác nhận khu vực My Registrations khi kiểm thử. | VALID | Sinh viên cần truy cập EMS bằng tài khoản thật và chụp bằng chứng đúng trạng thái B4. |
| AI-005 | 15:44 26/07/2026 (UTC+7) | Cursor | Rà soát template màn hình và cập nhật URL B1 `/dashboard`, B2 `/events/10` do sinh viên cung cấp. | Điền URL B1/B2 trong hai file thực thi checklist, Scenario Report và compatibility matrix. | VALID | Các URL cần được sinh viên mở lại trước khi kiểm thử vì ứng dụng ngrok có thể đổi trạng thái hoặc yêu cầu đăng nhập. |
| AI-006 | 15:46 26/07/2026 (UTC+7) | Cursor | Viết AI Critique bằng tiếng Việt, tự đánh giá trung thực quá trình AI hỗ trợ dựng khung HW3. | Đoạn phê bình nêu lợi ích, giới hạn ban đầu khi tách B2/B3, cách sinh viên kiểm chứng và nguyên tắc cộng tác với AI. | VALID | Sinh viên cần cập nhật critique nếu có thêm tương tác AI hoặc phát hiện mới trong quá trình kiểm thử thật. |

## Quy tắc cập nhật

Mỗi lần dùng AI sau này phải thêm một dòng chứa ngày giờ, prompt đầy đủ, output, verdict, lý do và phần sinh viên đã kiểm chứng/sửa.
