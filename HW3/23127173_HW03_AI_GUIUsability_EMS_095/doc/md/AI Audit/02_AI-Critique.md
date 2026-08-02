# AI Critique

AI được sử dụng để đọc requirement, tham khảo cấu trúc HW2 và dựng bộ khung Markdown cho HW3. Kết quả hữu ích nhất là việc tách các artefact theo Task 1, Task 2 và Task 3, đồng thời nhấn mạnh rằng screenshot, dữ liệu user testing, Pass/Fail và findings phải được sinh viên tự thu thập. Tuy nhiên, quá trình này cũng cho thấy AI không thể suy luận chính xác cấu trúc giao diện EMS chỉ từ đề bài. Ban đầu, AI chọn B1, B2 và B3 theo danh sách màn hình gợi ý trong requirement, nhưng thực tế form B3 được nhúng trong trang chi tiết sự kiện B2. Nếu giữ nguyên lựa chọn đó, phạm vi ba màn hình có thể không đủ độc lập và làm ma trận compatibility thiếu thuyết phục.

Hạn chế này xuất phát từ việc AI dựa trên mô tả tài liệu thay vì thao tác trực tiếp trên trạng thái đã đăng nhập của ứng dụng. AI cũng để trống URL B1 và B2 cho đến khi sinh viên cung cấp đường dẫn thực tế. Sinh viên đã kiểm chứng bằng cách mở EMS, quan sát khu vực đăng ký trên trang chi tiết sự kiện, sau đó thay B3 bằng B4 My Registrations / ticket. Các URL `/dashboard`, `/events/10` và `/profile` được ghi vào artefact sau khi được xác nhận.

Nguyên tắc rút ra là AI phù hợp để tổ chức tài liệu, phát hiện yêu cầu và đề xuất cấu trúc, nhưng không thể thay thế việc kiểm thử hệ thống thật. Mọi đề xuất về màn hình, luồng thao tác và khả năng tương thích phải được xác minh trên EMS trước khi đưa vào báo cáo. Sinh viên vẫn chịu trách nhiệm cuối cùng về phạm vi, bằng chứng và kết luận kiểm thử.

Việc đọc lại Task 2 cũng nhấn mạnh một giới hạn khác: AI có thể giúp diễn giải requirement, nhưng quyết định bỏ một bước phải được đối chiếu trực tiếp với đề bài. Requirement bắt buộc pilot với một người bổ sung; dry run cá nhân không thay thế được bước này. Vì vậy, nhóm cần giữ pilot trong kế hoạch và chỉ dùng dữ liệu của năm phiên chính thức để tính kết quả cuối cùng.

## Rà soát môi trường ngày 02/08/2026

AI đã truy cập `https://prod-dev.ems-fitus.cloud/dashboard` và quan sát được trang yêu cầu đăng nhập; chưa có thao tác trên trạng thái người dùng. Điều này xác nhận base URL hiện hành có thể truy cập, nhưng không xác nhận được B1, B2 hoặc B4 sau đăng nhập. Vì vậy, AI chỉ đồng bộ URL thao tác trong template và giữ nguyên mọi Pass/Fail, screenshot cùng dữ liệu user testing lịch sử. Sinh viên vẫn phải chạy lại B1 `/dashboard`, B2 `/events/{event-id}` và B4 `/profile` trên base URL mới để tạo bằng chứng hợp lệ.

Một giới hạn thực tế khi kiểm thử compatibility là BrowserStack Free Trial chỉ cấp thời lượng rất ngắn cho mỗi thiết bị và trong phiên Android tablet đã thử, luồng hiển thị thiết bị không tải được nội dung EMS ổn định. AI không thể tự cài đặt hay mở rộng hạ tầng BrowserStack để vượt giới hạn tài khoản; cũng không được thay thế thiết bị/browser thật bằng ảnh tạo sẵn hoặc kết quả suy diễn. Vì vậy, AI chỉ có thể chuẩn bị test case, điều khiển phiên cloud khi tài khoản cho phép và ghi nhận kết quả quan sát được. Các cell còn thiếu phải giữ `[CHƯA CHẠY]` cho đến khi có phiên cloud ổn định, LambdaTest, hoặc thiết bị thật để chụp bằng chứng hợp lệ.

AI ban đầu để quá nhiều câu hỏi mở, làm biểu mẫu khó dùng trong một phiên test. Sau khi đối chiếu lại tiêu chí Task 2, biểu mẫu được rút còn UEQ-S gồm 8 mục chuẩn và 4 câu hỏi mở về tính rõ ràng, phục hồi khi lỗi, tốc độ và tin cậy. Cách này giảm gánh nặng trả lời còn 12 mục mỗi người, nhưng vẫn lưu được điểm và phản hồi riêng của từng phiên.
