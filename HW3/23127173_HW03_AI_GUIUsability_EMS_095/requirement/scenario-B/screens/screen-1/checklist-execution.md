# Thực thi GUI Checklist — Màn hình S1 / B1 — Home / danh sách sự kiện

| Nội dung | Giá trị |
| --- | --- |
| Kịch bản | B — Người dùng đăng ký tham dự sự kiện |
| URL / path | $url |
| Ngày thực thi | 2026-08-04 |
| Môi trường | Google Chrome đã đăng nhập; Browser control; desktop và viewport 320×720 |

> Với tiêu chí có điều kiện, `[PASS]` kèm note “không có widget/trạng thái” nghĩa là điều kiện không kích hoạt trên đúng màn hình trong lượt chạy; không suy diễn widget không tồn tại là lỗi.

| Checklist ID | Kết quả | Notes khi Failed / N/A | Screenshot khi Failed |
| --- | --- | --- | --- |
| IA01-01 | [PASS] | Header, vùng tìm kiếm/bộ lọc, danh sách sự kiện và footer được phân vùng rõ. |  |
| IA01-02 | [PASS] | Nhãn/tiêu đề event và nội dung hiển thị bằng text, không thấy cắt cụt ở desktop. |  |
| IA01-03 | [PASS] | Quan sát desktop cho thấy text/trạng thái đọc được; không phát hiện chỉ báo chỉ dựa vào màu. |  |
| IA01-04 | [PASS] | Search, filter, save event và link chi tiết có kiểu tương tác rõ. |  |
| IA01-05 | [FAIL] | Retest Chrome viewport 320×720: `scrollWidth` 342 px > `clientWidth` 305 px, có cuộn ngang ngoài ý muốn. | `../evidence/automated-gui/B1-reflow-320-20260804.png` |
| IA01-06 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-07 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-08 | [PASS] | Heading Events và controls chính nổi bật hơn nội dung phụ. |  |
| IA01-09 | [PASS] | Nội dung danh sách dùng ngôn ngữ nghiệp vụ, không thấy mã kỹ thuật nội bộ. |  |
| IA01-10 | [PASS] | Header/footer và controls cùng loại dùng nhãn/kiểu hiển thị nhất quán. |  |
| IA02-01 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-02 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-03 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-04 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-05 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-06 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-07 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-08 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-09 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-10 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-01 | [PASS] | Header navigation hiển thị rõ Events/Calendar/Saved Events/User guide. |  |
| IA03-02 | [PASS] | Các liên kết header có nhãn và đích điều hướng rõ. |  |
| IA03-03 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-04 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-05 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-06 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-07 | [PASS] | Click Calendar chuyển đến /calendar; Browser Back quay lại /dashboard. |  |
| IA03-08 | [PASS] | Mở trực tiếp /dashboard trong Chrome đã xác thực hiển thị đúng Dashboard. |  |
| IA03-09 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-10 | [PASS] | Tab từ search chuyển focus hợp lý tới nút Upcoming. |  |
| IA04-01 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-02 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-03 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-04 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-05 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-06 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-07 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-08 | [PASS] | B1 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-09 | [PASS] | Clear all filters hiển thị disabled rõ khi chưa có điều kiện lọc. |  |
| IA04-10 | [PASS] | Clear all filters bị vô hiệu hóa khi chưa đủ điều kiện thao tác. |  |
| IA01-11 | [FAIL] | Kiểm tra Reflow ở 320 CSS px: `scrollWidth` 342 px > `clientWidth` 305 px, nội dung không reflow hoàn toàn. | `../evidence/automated-gui/B1-reflow-320-20260804.png` |
