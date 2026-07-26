# Phụ lục A — Prompt Log

| ID | Ngày giờ | Công cụ AI | Mục đích | Artefact liên quan | Trạng thái rà soát |
| --- | --- | --- | --- | --- | --- |
| AI-001 | 15:06 26/07/2026 (UTC+7) | Cursor | Tạo scaffold HW03 theo requirement và HW2, không tạo bằng chứng giả | Cây thư mục và template HW03 | Sinh viên phải rà soát và điền dữ liệu thật |
| AI-002 | 15:22 26/07/2026 (UTC+7) | Cursor | Chọn Scenario B với B1 Home, B2 Chi tiết sự kiện, B3 Form đăng ký | Cập nhật các template theo phạm vi Scenario B | Chưa có kết quả kiểm thử hoặc bằng chứng |
| AI-003 | 15:38 26/07/2026 (UTC+7) | Cursor | Thay B3 bằng B4 vì form đăng ký nằm trong B2 | Cập nhật phạm vi B1, B2 và B4 | Chưa có kết quả kiểm thử hoặc bằng chứng |
| AI-004 | 15:43 26/07/2026 (UTC+7) | Cursor | Ghi URL `/profile` cho B4 | Cập nhật template B4 theo đường dẫn đã cung cấp | Cần xác nhận khu vực My Registrations khi đăng nhập |
| AI-005 | 15:44 26/07/2026 (UTC+7) | Cursor | Ghi URL `/dashboard` cho B1 và `/events/10` cho B2 | Cập nhật template Scenario B | Cần mở lại URL trước khi kiểm thử |
| AI-007 | 15:50 26/07/2026 (UTC+7) | Cursor | Chốt task scenario Event 10, gợi ý câu hỏi và kế hoạch pilot | Cập nhật Usability Report và Scenario Report | Cần chạy pilot thật với người ngoài lớp |
| AI-008 | 16:31 26/07/2026 (UTC+7) | Cursor | Kiểm tra lại requirement về pilot Task 2 | Xác nhận pilot ngoài lớp là bắt buộc | Giữ pilot trong kế hoạch |
| AI-009 | 16:36 26/07/2026 (UTC+7) | Cursor | Thêm phiếu câu hỏi mở từng người dùng | Cập nhật Usability Report | Chỉ điền dữ liệu người thật |
| AI-010 | 16:42 26/07/2026 (UTC+7) | Cursor | Tinh gọn thang đo và câu hỏi sau tác vụ theo Task 2 | UEQ-S 8 mục chuẩn, 4 câu hỏi mở và bảng kết quả cập nhật | Dùng cùng thang 1–7; chỉ tính kết quả P1–P5 |
| AI-011 | 16:51 26/07/2026 (UTC+7) | Cursor | Bổ sung chỉ số câu hỏi mở vào bảng dữ liệu mỗi phiên | Bảng số liệu chính thức có đủ 5 tiêu chí | Lưu câu trả lời nguyên văn và tóm tắt/mã C1–C4 |
| AI-012 | 17:13 26/07/2026 (UTC+7) | Cursor | Chuẩn hóa cấu trúc sau khi có dữ liệu P1 | Nhãn UEQ-S `tổng/56` và tiêu chí C1–C4 rõ ràng hơn | Không sửa dữ liệu P1 do sinh viên nhập |
| AI-013 | 17:14 26/07/2026 (UTC+7) | Cursor | Bỏ mã C1–C4 khỏi kết quả câu hỏi mở | Chỉ giữ ba mức Tích cực, Hỗn hợp, Tiêu cực | Không sửa dữ liệu P1 do sinh viên nhập |
| AI-014 | 17:16 26/07/2026 (UTC+7) | Cursor | Bỏ cố định Event 10 khỏi Scenario B | Đồng bộ sự kiện bất kỳ và URL `/events/{event-id}` ở artefact đang dùng | Không sửa dữ liệu P1; audit cũ giữ nguyên |
| AI-015 | 18:10 26/07/2026 (UTC+7) | Cursor | Thiết kế 15 test case compatibility cho Task 3 | 5 case kế hoạch cho từng S1, S2, S3 | Chưa chạy; cần dữ liệu và screenshot thật |
| AI-016 | 18:11 26/07/2026 (UTC+7) | Cursor | Thêm tiêu chí Pass/Fail cho Task 3 | Tiêu chí riêng cho S1, S2, S3 và ngoại lệ trạng thái nghiệp vụ hợp lệ | Chỉ đánh giá sau khi chạy thật |
| AI-017 | 18:22 26/07/2026 (UTC+7) | Cursor | Thêm cột lý do Fail cho các case compatibility | Có chỗ ghi lỗi quan sát cho mọi case Fail | Không suy đoán lỗi thay sinh viên |
| AI-018 | 18:25 26/07/2026 (UTC+7) | Cursor | Bỏ cột Finding ID khỏi compatibility matrix | Giữ lý do Fail và screenshot trong từng case | Không thay đổi dữ liệu test đã nhập |

> Prompt log này chỉ mục lục hóa các tương tác AI thật. Nội dung prompt/output đầy đủ phải nằm trong AI Audit Report.
