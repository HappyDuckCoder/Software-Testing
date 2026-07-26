# Task 2 — Usability Report

## 1. Kịch bản user testing

- **Lời giao cho người tham gia:** “Hãy chọn một sự kiện bạn muốn tham dự trên EMS, xem thông tin cần thiết, đăng ký nếu sự kiện đang mở đăng ký, rồi cho tôi xem trạng thái đăng ký hoặc vé của bạn.”
- Ba màn hình: B1 Home / danh sách sự kiện, B2 Chi tiết sự kiện kèm khu vực đăng ký, B4 My Registrations / ticket.
- Điều kiện hoàn thành: Người tham gia tự tìm một sự kiện, hiểu trạng thái đăng ký, hoàn tất đăng ký khi sự kiện mở đăng ký và tự tìm thấy trạng thái/ticket trong Profile.
- Chỉ nêu mục tiêu; không chỉ vị trí nút bấm, đường dẫn hay từng thao tác.



### Điều kiện chạy phiên

- Trước mỗi phiên, ghi tên/URL và kiểm tra trạng thái thật của sự kiện người tham gia đã chọn.
- Nếu sự kiện là `Pending` hoặc không cho đăng ký, người tham gia có thể chọn sự kiện khác có thể đăng ký; ghi rõ sự kiện đã dùng trong bảng số liệu.
- Không hủy đăng ký trong khi phiên đang diễn ra; chỉ dọn dữ liệu sau khi đã lưu bằng chứng và được người tham gia đồng ý.



## 2. Thiết kế đo lường


| Chỉ số       | Cách điền cho mỗi người                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kết quả task | Chọn `Hoàn thành`, `Một phần` hoặc `Thất bại`.                                                                                                           |
| Thời gian    | Bấm giờ từ lúc người tham gia đọc xong lời giao đến lúc hoàn thành/dừng; ghi `phút:giây`.                                                                |
| Lỗi / do dự  | Đếm thao tác sai hoặc dừng suy nghĩ quá 5 giây.                                                                                                          |
| UEQ-S        | Người tham gia chấm 8 mục chuẩn theo thang 1–7; cộng 8 mục và ghi dạng `tổng/56` vào bảng số liệu.                                                       |
| Câu hỏi mở   | Hỏi 4 câu về rõ ràng, phục hồi lỗi, tốc độ và tin cậy. Ghi nguyên văn phản hồi và tóm tắt chung là `Tích cực`, `Hỗn hợp` hoặc `Tiêu cực` ở bảng số liệu. |




### UEQ-S — 8 mục chuẩn

Với mỗi cặp từ, người tham gia chọn một mức từ 1 đến 7; mức 1 gần từ bên trái nhất, mức 7 gần từ bên phải nhất.


| Mã  | Cặp từ đánh giá           |
| --- | ------------------------- |
| U1  | Cản trở — Hỗ trợ          |
| U2  | Phức tạp — Dễ sử dụng     |
| U3  | Không hiệu quả — Hiệu quả |
| U4  | Gây nhầm lẫn — Rõ ràng    |
| U5  | Nhàm chán — Thú vị        |
| U6  | Không hấp dẫn — Hấp dẫn   |
| U7  | Thông thường — Sáng tạo   |
| U8  | Lạc hậu — Hiện đại        |




### Câu hỏi mở sau tác vụ

1. Giao diện và thông tin về sự kiện bạn đã chọn có rõ ràng, dễ hiểu không? Điều gì giúp hoặc cản trở bạn?
2. Nếu Event chưa mở đăng ký hoặc đăng ký thất bại, bạn có biết phải làm gì tiếp theo không? EMS cần giải thích thế nào?
3. Tốc độ tải trang và phản hồi của hệ thống có phù hợp với bạn không? Vì sao?
4. Bạn có tin tưởng EMS xử lý thông tin đăng ký và hiển thị trạng thái/ticket của bạn không? Vì sao?



## 3. Thu thập dữ liệu theo phiên

- **Dry run cá nhân:** Chỉ kiểm tra luồng và biểu mẫu; không tính vào pilot, 5 người tham gia hoặc số liệu trung bình.
- **Pilot bắt buộc:** Thực hiện với một người bổ sung ngoài lớp trước 5 phiên chính thức.



### Bảng số liệu chính thức


| Phiên           | Mã người tham gia | Liên hệ đã che | Sự kiện được chọn / trạng thái                                                                                         | Kết quả task | Thời gian  | Lỗi / do dự | Điểm UEQ-S (tổng/56) | Câu hỏi mở (tóm tắt) | Ghi chú / file quan sát                                                                               |
| --------------- | ----------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- | ----------- | -------------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| Pilot ngoài lớp | [ĐIỀN SAU]        | [ĐIỀN SAU]     | [Tên / URL / trạng thái]                                                                                               | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU]  | [ĐIỀN SAU]           | [ĐIỀN SAU]           | [ĐIỀN SAU]                                                                                            |
| P1              | 23127172          | 0822****79     | [https://promoter-starboard-prude.ngrok-free.dev/events/10](https://promoter-starboard-prude.ngrok-free.dev/events/10) | [ĐIỀN SAU]   | 10:00      | 10          | 38/56                | Hỗ hợp               | Không hài lòng về màu sắc quá màu mè, nhưng lại khen dễ sử dụng, không đo chính xác số giây thực hiện |
| P2              | [ĐIỀN SAU]        | [ĐIỀN SAU]     | [ĐIỀN SAU]                                                                                                             | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU]  | [ĐIỀN SAU]           | [ĐIỀN SAU]           | [ĐIỀN SAU]                                                                                            |
| P3              | [ĐIỀN SAU]        | [ĐIỀN SAU]     | [ĐIỀN SAU]                                                                                                             | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU]  | [ĐIỀN SAU]           | [ĐIỀN SAU]           | [ĐIỀN SAU]                                                                                            |
| P4              | [ĐIỀN SAU]        | [ĐIỀN SAU]     | [ĐIỀN SAU]                                                                                                             | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU]  | [ĐIỀN SAU]           | [ĐIỀN SAU]           | [ĐIỀN SAU]                                                                                            |
| P5              | [ĐIỀN SAU]        | [ĐIỀN SAU]     | [ĐIỀN SAU]                                                                                                             | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU]  | [ĐIỀN SAU]           | [ĐIỀN SAU]           | [ĐIỀN SAU]                                                                                            |




### Phiếu UEQ-S và câu hỏi mở theo từng người

> Mỗi người có một dòng UEQ-S và một bảng 4 câu hỏi mở. Hỏi đúng nội dung ghi ở tiêu đề từng cột, rồi điền mức 1–7 mà người đó chọn. Chỉ điền câu trả lời thật sau phiên tương ứng.


| Phiên           | U1: Cản trở — Hỗ trợ | U2: Phức tạp — Dễ sử dụng | U3: Không hiệu quả — Hiệu quả | U4: Gây nhầm lẫn — Rõ ràng | U5: Nhàm chán — Thú vị | U6: Không hấp dẫn — Hấp dẫn | U7: Thông thường — Sáng tạo | U8: Lạc hậu — Hiện đại | Tổng / 56  |
| --------------- | -------------------- | ------------------------- | ----------------------------- | -------------------------- | ---------------------- | --------------------------- | --------------------------- | ---------------------- | ---------- |
| Pilot ngoài lớp | [ĐIỀN SAU]           | [ĐIỀN SAU]                | [ĐIỀN SAU]                    | [ĐIỀN SAU]                 | [ĐIỀN SAU]             | [ĐIỀN SAU]                  | [ĐIỀN SAU]                  | [ĐIỀN SAU]             | [ĐIỀN SAU] |
| P1              | 5                    | 4                         | 6                             | 7                          | 3                      | 5                           | 2                           | 6                      | 38/56      |
| P2              | [ĐIỀN SAU]           | [ĐIỀN SAU]                | [ĐIỀN SAU]                    | [ĐIỀN SAU]                 | [ĐIỀN SAU]             | [ĐIỀN SAU]                  | [ĐIỀN SAU]                  | [ĐIỀN SAU]             | [ĐIỀN SAU] |
| P3              | [ĐIỀN SAU]           | [ĐIỀN SAU]                | [ĐIỀN SAU]                    | [ĐIỀN SAU]                 | [ĐIỀN SAU]             | [ĐIỀN SAU]                  | [ĐIỀN SAU]                  | [ĐIỀN SAU]             | [ĐIỀN SAU] |
| P4              | [ĐIỀN SAU]           | [ĐIỀN SAU]                | [ĐIỀN SAU]                    | [ĐIỀN SAU]                 | [ĐIỀN SAU]             | [ĐIỀN SAU]                  | [ĐIỀN SAU]                  | [ĐIỀN SAU]             | [ĐIỀN SAU] |
| P5              | [ĐIỀN SAU]           | [ĐIỀN SAU]                | [ĐIỀN SAU]                    | [ĐIỀN SAU]                 | [ĐIỀN SAU]             | [ĐIỀN SAU]                  | [ĐIỀN SAU]                  | [ĐIỀN SAU]             | [ĐIỀN SAU] |




#### Mẫu câu trả lời mở — dùng cho Pilot, P1, P2, P3, P4 và P5


| Phiên           | Câu 1                                                                            | Câu 2                                                                                                                                 | Câu 3                      | Câu 4                                                       |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------- |
| Pilot ngoài lớp | [ĐIỀN SAU]                                                                       | [ĐIỀN SAU]                                                                                                                            | [ĐIỀN SAU]                 | [ĐIỀN SAU]                                                  |
| P1              | Nó khá rõ ràng, dễ hiểu. Nó khá màu mè nhưng lại giúp dễ phân biệt giữa các mục. | Không. EMS cần phải unvailable cho event chưa mở đăng ký và nếu đăng ký thất bại phải hiện thông báo là đăng ký thất bại vì lí do gì. | Tốt. Nó không có vấn đề gì | Không. Vì nó cũng không có thông báo đã đăng ký thành công. |
| P2              | [ĐIỀN SAU]                                                                       | [ĐIỀN SAU]                                                                                                                            | [ĐIỀN SAU]                 | [ĐIỀN SAU]                                                  |
| P3              | [ĐIỀN SAU]                                                                       | [ĐIỀN SAU]                                                                                                                            | [ĐIỀN SAU]                 | [ĐIỀN SAU]                                                  |
| P4              | [ĐIỀN SAU]                                                                       | [ĐIỀN SAU]                                                                                                                            | [ĐIỀN SAU]                 | [ĐIỀN SAU]                                                  |
| P5              | [ĐIỀN SAU]                                                                       | [ĐIỀN SAU]                                                                                                                            | [ĐIỀN SAU]                 | [ĐIỀN SAU]                                                  |




### Ghi chú dry run cá nhân

- Khó nhận biết ý nghĩa của tên hoặc ID sự kiện nếu không biết trước yêu cầu bài tập.
- Phải tự tìm trang Profile để xem đăng ký; có thể cân nhắc toast dẫn hướng sau khi đăng ký.
- Có mong muốn có trang danh sách sự kiện đã đăng ký rõ ràng hơn.
- Các ghi chú này không được dùng làm finding hoặc kết quả user testing chính thức.



## 4. Tổng hợp sau 5 phiên chính thức


| Chỉ số                 | Cách tính                                  | Kết quả    |
| ---------------------- | ------------------------------------------ | ---------- |
| Tỉ lệ hoàn thành       | Số phiên `Hoàn thành` / 5                  | [ĐIỀN SAU] |
| Thời gian trung bình   | Tổng thời gian P1–P5 / 5                   | [ĐIỀN SAU] |
| Lỗi / do dự trung bình | Tổng lỗi / do dự P1–P5 / 5                 | [ĐIỀN SAU] |
| Điểm UEQ-S trung bình  | Tổng điểm UEQ-S (thang 8–56) của P1–P5 / 5 | [ĐIỀN SAU] |




## 5. Phân tích và khuyến nghị


| Finding    | Bằng chứng     | Severity 0–4 | Khuyến nghị    | Screenshot |
| ---------- | -------------- | ------------ | -------------- | ---------- |
| [ĐIỀN SAU] | [TỰ THỰC HIỆN] | [ĐIỀN SAU]   | [TỰ THỰC HIỆN] | [ĐIỀN SAU] |


> Không điền người tham gia, điểm UEQ-S, kết quả phiên hoặc finding trước khi thực hiện user testing thật.

