# AI Critique

AI hữu ích nhất ở bài này là chuyển requirement thành cấu trúc artefact, phát hiện điều kiện bắt buộc và làm checklist có thể truy vết nguồn. AI cũng giúp nhận ra B3 không độc lập với B2 nên phạm vi phù hợp hơn là B1, B2 và B4. Khi có Chrome đã đăng nhập, AI chỉ thao tác quan sát thật theo skill; kết quả được ghi riêng trong audit.

Tuy nhiên, AI không thể thay người kiểm thử hay người tham gia. Lỗi responsive 320 px từng được ghi Fail nhưng không tái hiện ở Chrome mobile thực tế; sau khi chạy lại, kết quả được sửa thành Pass và ảnh lỗi không còn dùng. Kết luận tự động phải được xác minh trong đúng môi trường. AI cũng không thể xác minh pilot là người bổ sung, người tham gia ngoài lớp hay metadata/watermark nếu chưa kiểm tra ảnh gốc.

Lần rà soát cuối cho thấy checklist ban đầu chỉ có 40 mục, không đạt điều kiện “hơn 40”. Nhóm bổ sung IA01-11 theo WCAG Reflow, ghi rõ đây là mục ngoài output AI; do chưa chạy trên ba màn hình, không được tuyên bố Task 1B hoàn tất. Các dòng `N/A` trong log cũng là thông tin trung thực về widget không xuất hiện, nhưng vẫn cần được xử lý lại theo rubric Passed/Failed của đề.

AI chỉ nên hỗ trợ kiểm tra nhất quán, tổng hợp và nhắc điều kiện; sinh viên phải chạy test còn thiếu, xác minh ảnh, dùng pilot hợp lệ và gửi finding qua Google Form. Không dùng AI tạo hay sửa dữ liệu người dùng, ảnh bằng chứng, mật khẩu, cookie hoặc kết luận không quan sát được.
