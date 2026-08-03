# Thực thi GUI Checklist — Màn hình S3 / B4 — My Registrations / ticket

| Nội dung | Giá trị |
| --- | --- |
| Kịch bản | B — Người dùng đăng ký tham dự sự kiện |
| URL / path | $url |
| Ngày thực thi | 2026-08-04 |
| Môi trường | Google Chrome đã đăng nhập; Browser control; desktop và viewport 320×720 |

> Với tiêu chí có điều kiện, `[PASS]` kèm note “không có widget/trạng thái” nghĩa là điều kiện không kích hoạt trên đúng màn hình trong lượt chạy; không suy diễn widget không tồn tại là lỗi.

| Checklist ID | Kết quả | Notes khi Failed / N/A | Screenshot khi Failed |
| --- | --- | --- | --- |
| IA01-01 | [PASS] | Profile header, thông tin cá nhân, My Activities và footer phân vùng rõ. |  |
| IA01-02 | [PASS] | Thông tin profile/ticket/trạng thái hiển thị bằng text. |  |
| IA01-03 | [PASS] | Approved/Pending review/Ongoing có text status đi kèm. |  |
| IA01-04 | [PASS] | QR Code, Edit Profile, Change Password, Search/Filters/Export là controls rõ. |  |
| IA01-05 | [FAIL] | Retest Chrome viewport 320×720: `scrollWidth` 458 px > `clientWidth` 305 px, có cuộn ngang ngoài ý muốn. | `../evidence/automated-gui/B4-reflow-320-20260804.png` |
| IA01-06 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-07 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-08 | [PASS] | My Profile, QR Code và My Activities có phân cấp thị giác rõ. |  |
| IA01-09 | [PASS] | Không thấy mã kỹ thuật nội bộ trên màn hình profile/ticket. |  |
| IA01-10 | [PASS] | Header/footer và controls có kiểu trình bày nhất quán. |  |
| IA02-01 | [PASS] | Search activities có placeholder mô tả dữ liệu cần nhập. |  |
| IA02-02 | [PASS] | Nhãn/placeholder nhất quán tiếng Anh. |  |
| IA02-03 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-04 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-05 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-06 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-07 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-08 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-09 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-10 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-01 | [PASS] | Header navigation hiển thị rõ. |  |
| IA03-02 | [PASS] | Các liên kết header có nhãn và đích rõ. |  |
| IA03-03 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-04 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-05 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-06 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-07 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-08 | [PASS] | Mở trực tiếp /profile trong Chrome đã xác thực hiển thị đúng Profile. |  |
| IA03-09 | [PASS] | Modal QR mở với focus active, Close trả về Profile. |  |
| IA03-10 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-01 | [PASS] | QR Code phản hồi bằng modal Check-in QR Code. |  |
| IA04-02 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-03 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-04 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-05 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-06 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-07 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-08 | [PASS] | Modal chỉ xuất hiện khi yêu cầu xem QR Code. |  |
| IA04-09 | [PASS] | Approved/Pending review/Ongoing hiển thị bằng text status. |  |
| IA04-10 | [PASS] | B4 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-11 | [FAIL] | Kiểm tra Reflow ở 320 CSS px: `scrollWidth` 458 px > `clientWidth` 305 px, nội dung không reflow hoàn toàn. | `../evidence/automated-gui/B4-reflow-320-20260804.png` |
