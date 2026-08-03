# Thực thi GUI Checklist — Màn hình S2 / B2 — Chi tiết sự kiện

| Nội dung | Giá trị |
| --- | --- |
| Kịch bản | B — Người dùng đăng ký tham dự sự kiện |
| URL / path | $url |
| Ngày thực thi | 2026-08-04 |
| Môi trường | Google Chrome đã đăng nhập; Browser control; desktop và viewport 320×720 |

> Với tiêu chí có điều kiện, `[PASS]` kèm note “không có widget/trạng thái” nghĩa là điều kiện không kích hoạt trên đúng màn hình trong lượt chạy; không suy diễn widget không tồn tại là lỗi.

| Checklist ID | Kết quả | Notes khi Failed / N/A | Screenshot khi Failed |
| --- | --- | --- | --- |
| IA01-01 | [PASS] | Thông tin event, registration roles và footer phân vùng rõ. |  |
| IA01-02 | [PASS] | Tên event, thời gian, slot và hướng dẫn đều hiển thị bằng text. |  |
| IA01-03 | [PASS] | Nhãn trạng thái và thông tin role có text đi kèm, không chỉ dựa vào màu. |  |
| IA01-04 | [PASS] | Checkbox role và nút Register có dạng điều khiển rõ. |  |
| IA01-05 | [FAIL] | Retest Chrome viewport 320×720: `scrollWidth` 342 px > `clientWidth` 305 px, có cuộn ngang ngoài ý muốn. | `../evidence/automated-gui/B2-reflow-320-20260804.png` |
| IA01-06 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-07 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA01-08 | [PASS] | Tên event, date/slot và hành động Register có phân cấp rõ. |  |
| IA01-09 | [PASS] | Nội dung hiển thị bằng thuật ngữ người dùng có thể hiểu. |  |
| IA01-10 | [PASS] | Header/footer và controls cùng loại nhất quán với B1. |  |
| IA02-01 | [PASS] | Checkbox có nhãn Select soldier và role soldier rõ ràng. |  |
| IA02-02 | [PASS] | Nhãn/hướng dẫn form nhất quán tiếng Anh trong màn hình. |  |
| IA02-03 | [PASS] | Nêu rõ cần tick role trước khi submit, không chỉ dùng màu. |  |
| IA02-04 | [PASS] | Register as Student disabled trước khi chọn role. |  |
| IA02-05 | [PASS] | Thông điệp điều kiện xuất hiện ngay dưới vùng chọn role. |  |
| IA02-06 | [PASS] | Thông điệp hướng dẫn cách sửa: tick a role before submitting. |  |
| IA02-07 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-08 | [PASS] | Chọn role kích hoạt Register; bỏ chọn trả nút về disabled, không submit đăng ký. |  |
| IA02-09 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA02-10 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-01 | [PASS] | Header navigation hiển thị nhất quán. |  |
| IA03-02 | [PASS] | Các liên kết header có nhãn/đích rõ. |  |
| IA03-03 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-04 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-05 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-06 | [PASS] | Back to events quay lại /dashboard đúng màn hình trước. |  |
| IA03-07 | [PASS] | Browser Back từ Calendar được kiểm tra trả về Dashboard, không lỗi trắng/redirect. |  |
| IA03-08 | [PASS] | Mở trực tiếp /events/125 trong Chrome đã xác thực hiển thị chi tiết event. |  |
| IA03-09 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA03-10 | [PASS] | Tab từ role chuyển focus tới phần tử điều hướng tiếp theo. |  |
| IA04-01 | [PASS] | Chọn/bỏ chọn role phản hồi bằng trạng thái enabled/disabled của Register. |  |
| IA04-02 | [PASS] | Thông điệp điều kiện dùng văn bản hướng dẫn, không có mã kỹ thuật. |  |
| IA04-03 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-04 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-05 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-06 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-07 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-08 | [PASS] | B2 event 125 không có widget/trạng thái này trong lượt chạy. |  |
| IA04-09 | [PASS] | Trạng thái disabled của Register phân biệt rõ. |  |
| IA04-10 | [PASS] | Ngăn submit khi chưa chọn role. |  |
| IA01-11 | [FAIL] | Kiểm tra Reflow ở 320 CSS px: `scrollWidth` 342 px > `clientWidth` 305 px, nội dung không reflow hoàn toàn. | `../evidence/automated-gui/B2-reflow-320-20260804.png` |
