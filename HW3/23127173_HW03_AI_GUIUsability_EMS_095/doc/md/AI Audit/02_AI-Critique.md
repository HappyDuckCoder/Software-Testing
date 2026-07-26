# AI Critique

AI được sử dụng để đọc requirement, tham khảo cấu trúc HW2 và dựng bộ khung Markdown cho HW3. Kết quả hữu ích nhất là việc tách các artefact theo Task 1, Task 2 và Task 3, đồng thời nhấn mạnh rằng screenshot, dữ liệu user testing, Pass/Fail và findings phải được sinh viên tự thu thập. Tuy nhiên, quá trình này cũng cho thấy AI không thể suy luận chính xác cấu trúc giao diện EMS chỉ từ đề bài. Ban đầu, AI chọn B1, B2 và B3 theo danh sách màn hình gợi ý trong requirement, nhưng thực tế form B3 được nhúng trong trang chi tiết sự kiện B2. Nếu giữ nguyên lựa chọn đó, phạm vi ba màn hình có thể không đủ độc lập và làm ma trận compatibility thiếu thuyết phục.

Hạn chế này xuất phát từ việc AI dựa trên mô tả tài liệu thay vì thao tác trực tiếp trên trạng thái đã đăng nhập của ứng dụng. AI cũng để trống URL B1 và B2 cho đến khi sinh viên cung cấp đường dẫn thực tế. Sinh viên đã kiểm chứng bằng cách mở EMS, quan sát khu vực đăng ký trên trang chi tiết sự kiện, sau đó thay B3 bằng B4 My Registrations / ticket. Các URL `/dashboard`, `/events/10` và `/profile` được ghi vào artefact sau khi được xác nhận.

Nguyên tắc rút ra là AI phù hợp để tổ chức tài liệu, phát hiện yêu cầu và đề xuất cấu trúc, nhưng không thể thay thế việc kiểm thử hệ thống thật. Mọi đề xuất về màn hình, luồng thao tác và khả năng tương thích phải được xác minh trên EMS trước khi đưa vào báo cáo. Sinh viên vẫn chịu trách nhiệm cuối cùng về phạm vi, bằng chứng và kết luận kiểm thử.

Việc đọc lại Task 2 cũng nhấn mạnh một giới hạn khác: AI có thể giúp diễn giải requirement, nhưng quyết định bỏ một bước phải được đối chiếu trực tiếp với đề bài. Requirement bắt buộc pilot với một người bổ sung; dry run cá nhân không thay thế được bước này. Vì vậy, nhóm cần giữ pilot trong kế hoạch và chỉ dùng dữ liệu của năm phiên chính thức để tính kết quả cuối cùng.

AI ban đầu để quá nhiều câu hỏi mở, làm biểu mẫu khó dùng trong một phiên test. Sau khi đối chiếu lại tiêu chí Task 2, biểu mẫu được rút còn UEQ-S gồm 8 mục chuẩn và 4 câu hỏi mở về tính rõ ràng, phục hồi khi lỗi, tốc độ và tin cậy. Cách này giảm gánh nặng trả lời còn 12 mục mỗi người, nhưng vẫn lưu được điểm và phản hồi riêng của từng phiên.
