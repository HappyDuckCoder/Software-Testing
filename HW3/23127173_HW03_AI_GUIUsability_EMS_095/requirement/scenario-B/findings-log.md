# Bug & Usability Findings Log

> Sáu finding dưới đây đã được sinh viên xác nhận submit Google Form ngày 04/08/2026. Timestamp được sinh viên xác nhận là các lần submit liên tiếp cách nhau một phút.

| ID | Scenario/Screen | Type | Description | Steps/Heuristic | Severity | Suggested fix | Screenshot ref | Form-submission timestamp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F-01 | B2 — Event detail/registration | Usability | Trạng thái sự kiện không thể đăng ký chưa giải thích rõ lý do hoặc bước tiếp theo; P1–P4 phản ánh khó biết sự kiện chưa mở, hết chỗ, hết hạn hoặc bị chặn. | Mở event không thể đăng ký; quan sát khu vực ticket/đăng ký. Nielsen H9 — hỗ trợ nhận biết, chẩn đoán và phục hồi lỗi. | 3 | Hiển thị trạng thái, lý do cụ thể và hành động tiếp theo cạnh nút đăng ký. | `usability-report/screenshots/finding1.png` | 2026-08-04 02:31:32 UTC+7 |
| F-02 | B2/B4 — Registration and ticket | Usability | Xác nhận đăng ký thành công và trạng thái ticket chưa đủ nổi bật; P1/P2/P5 không chắc thao tác đã thành công. | Đăng ký một event hợp lệ, sau đó kiểm tra phản hồi và Profile/My Registrations. Nielsen H1 — visibility of system status. | 3 | Hiển thị toast xác nhận có liên kết My Registrations; dùng badge/trạng thái nhất quán cho ticket. | `usability-report/screenshots/finding2.png` | 2026-08-04 02:32:32 UTC+7 |
| F-03 | B1 — Dashboard/event list | Usability | Màu sắc và banner làm giảm tập trung vào thông tin chính; phản hồi P1 ghi giao diện “màu mè”. | Mở danh sách sự kiện và quan sát hierarchy giữa banner, màu sắc, thông tin event. Nielsen H8 — aesthetic and minimalist design. | 1 | Giảm độ bão hòa ảnh/banner, tăng khoảng trắng và ưu tiên hierarchy thông tin. | `usability-report/screenshots/finding3.png` | 2026-08-04 02:33:32 UTC+7 |
| F-04 | B1 — iOS 17/Safari/mobile (S1-C03) | Bug / Compatibility | Hai input ngày From/To responsive chưa tốt; nút hủy filter cần bấm 2–3 lần mới hủy. | Mở Dashboard trên iOS Safari, dùng filter ngày rồi bấm hủy filter. | 2 | Điều chỉnh layout input ngày trên mobile và bảo đảm một lần bấm hủy trả filter về trạng thái ban đầu. | `compatibility-matrix/screenshots/B1-ios-safari-mobile.jpg` | 2026-08-04 02:34:32 UTC+7 |
| F-05 | B4 — iOS 17/Safari/mobile (S3-C03) | Bug / Compatibility | Thanh tìm kiếm activities chạm viền card, tạo lỗi trình bày trên mobile. | Mở Profile/My Registrations trên iOS Safari và quan sát vùng search activities. | 1 | Thêm spacing/padding responsive để search không chạm viền card. | `compatibility-matrix/screenshots/B4-ios-safari-mobile.jpg` | 2026-08-04 02:35:32 UTC+7 |
| F-06 | B1/B2/B4 — Chrome viewport 320×720 | Bug / Reflow | Cả ba màn hình có cuộn ngang ngoài ý muốn ở 320 CSS px: B1/B2 `scrollWidth` 342 px, B4 458 px, lớn hơn `clientWidth` 305 px. | Mở từng màn hình đã đăng nhập, đặt viewport 320×720 và đo `documentElement.scrollWidth/clientWidth`. WCAG Reflow. | 3 | Sửa CSS responsive để nội dung reflow trong 320 CSS px, sau đó retest cả B1/B2/B4. | `screens/evidence/automated-gui/B1-reflow-320-20260804.png`; `B2-reflow-320-20260804.png`; `B4-reflow-320-20260804.png` | 2026-08-04 02:36:32 UTC+7 |

## Hướng dẫn nhập Google Form

Form phản hồi hiện có các trường tốc độ tải trang, có/không lỗi, mô tả lỗi, upload ảnh/video, điểm thích/chưa hài lòng và đề xuất cải thiện. Khi gửi từng finding:

1. Chọn **Có** ở câu hỏi gặp lỗi đối với F-01, F-02, F-04, F-05; F-03 có thể ghi là phản hồi về trải nghiệm/thiết kế.
2. Dán mô tả ở cột `Description`, đính kèm đúng ảnh tại `Screenshot ref` nếu form yêu cầu.
3. Ghi đề xuất từ cột `Suggested fix` vào câu hỏi cải thiện tính năng.
4. Timestamp trên phải khớp phản hồi Google Form; không sửa nội dung finding để lệch với form.

## Kiểm tra trước khi nộp

- [x] Cả 6 finding đã được sinh viên xác nhận gửi qua Google Form (04/08/2026).
- [x] Sinh viên xác nhận timestamp, mô tả và số lượng finding khớp với Google Form (04/08/2026).
- [x] Screenshot tham chiếu là evidence đã được liên kết trong artefact Task 2 hoặc Task 3.
