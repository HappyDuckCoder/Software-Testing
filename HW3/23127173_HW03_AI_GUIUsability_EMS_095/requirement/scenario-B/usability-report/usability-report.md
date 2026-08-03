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


| Phiên           | Mã người tham gia | Liên hệ đã che | Sự kiện được chọn / trạng thái                                                           | Kết quả task | Thời gian | Lỗi / do dự | Điểm UEQ-S (tổng/56) | Câu hỏi mở (tóm tắt) | Ghi chú / file quan sát                                                                               |
| --------------- | ----------------- | -------------- | ---------------------------------------------------------------------------------------- | ------------ | --------- | ----------- | -------------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| Pilot ngoài lớp | 23127172          | 0822****79     | [https://prod-dev.ems-fitus.cloud/events/10](https://prod-dev.ems-fitus.cloud/events/10) | Hoàn thành   | 1:00      | 0           | 56/56                | Tích cực             | Là user pilot nên test nhanh, không mang tính chất đánh giá                                           |
| P1              | 23127172          | 0822****79     | [https://prod-dev.ems-fitus.cloud/events/10](https://prod-dev.ems-fitus.cloud/events/10) | Hoàn thành   | 10:00     | 10          | 38/56                | Hỗn hợp              | Không hài lòng về màu sắc quá màu mè, nhưng lại khen dễ sử dụng, không đo chính xác số giây thực hiện |
| P2              | 23127516          | 0909****08     | [https://prod-dev.ems-fitus.cloud/events/10](https://prod-dev.ems-fitus.cloud/events/10) | Hoàn thành   | 4:42      | 2           | 23/56                | Tiêu cực             | Đăng kí fail 2 lần do event đã kết thúc, người dùng sử dụng chat gpt để trả lời các câu hỏi mở        |
| P3              | 23127331          | 0369****55     | [https://prod-dev.ems-fitus.cloud/events/36](https://prod-dev.ems-fitus.cloud/events/36) | Hoàn thành   | 12:00     | 9           | 40/56                | Tích cực             | Người dùng vào Skills Training & Workshops trong sidebar. không đo chính xác số giây thực hiện        |
| P4              | 23127468          | 0703****92     | [https://prod-dev.ems-fitus.cloud/events/78](https://prod-dev.ems-fitus.cloud/events/78) | Hoàn thành   | 15:34     | 4           | 41/56                | Hỗn hợp              | -                                                                                                     |
| P5              | 20127119          | 0926****33     | [https://prod-dev.ems-fitus.cloud/events/68](https://prod-dev.ems-fitus.cloud/events/68) | Hoàn thành   | 6:48      | 4           | 51/56                | Tích cực             | -                                                                                                     |

### Liên kết bằng chứng phiên

Các ảnh người tham gia được lưu cùng artefact Task 2 tại `evidence/participants/`; tên file dùng mã đã che/thể hiện trong bảng trên. Ảnh chỉ được dùng làm bằng chứng phiên do sinh viên cung cấp, không phải ảnh do AI tạo.

| Phiên | Ảnh tham chiếu |
| --- | --- |
| P1 / Pilot | `evidence/participants/23127172.jpg` |
| P2 | `evidence/participants/23127516.png` |
| P3 | `evidence/participants/23127331.png` |
| P4 | `evidence/participants/23127468.png` |
| P5 | `evidence/participants/20127119.png` |




### Phiếu UEQ-S và câu hỏi mở theo từng người

> Mỗi người có một dòng UEQ-S và một bảng 4 câu hỏi mở. Hỏi đúng nội dung ghi ở tiêu đề từng cột, rồi điền mức 1–7 mà người đó chọn. Chỉ điền câu trả lời thật sau phiên tương ứng.


| Phiên           | U1: Cản trở — Hỗ trợ | U2: Phức tạp — Dễ sử dụng | U3: Không hiệu quả — Hiệu quả | U4: Gây nhầm lẫn — Rõ ràng | U5: Nhàm chán — Thú vị | U6: Không hấp dẫn — Hấp dẫn | U7: Thông thường — Sáng tạo | U8: Lạc hậu — Hiện đại | Tổng / 56 |
| --------------- | -------------------- | ------------------------- | ----------------------------- | -------------------------- | ---------------------- | --------------------------- | --------------------------- | ---------------------- | --------- |
| Pilot ngoài lớp | 7                    | 7                         | 7                             | 7                          | 7                      | 7                           | 7                           | 7                      | 56/56     |
| P1              | 5                    | 4                         | 6                             | 7                          | 3                      | 5                           | 2                           | 6                      | 38/56     |
| P2              | 3                    | 3                         | 3                             | 2                          | 2                      | 3                           | 3                           | 4                      | 23/56     |
| P3              | 5                    | 6                         | 5                             | 5                          | 5                      | 5                           | 4                           | 5                      | 40/56     |
| P4              | 5                    | 7                         | 6                             | 5                          | 6                      | 3                           | 3                           | 6                      | 41/56     |
| P5              | 7                    | 7                         | 7                             | 5                          | 6                      | 6                           | 6                           | 7                      | 51/56     |




#### Mẫu câu trả lời mở — dùng cho Pilot, P1, P2, P3, P4 và P5


| Phiên           | Câu 1                                                                                                                                                                                             | Câu 2                                                                                                                                          | Câu 3                                                                                                                    | Câu 4                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pilot ngoài lớp | bỏ                                                                                                                                                                                                | bỏ                                                                                                                                             | bỏ                                                                                                                       | bỏ                                                                                                                                                                               |
| P1              | Nó khá rõ ràng, dễ hiểu. Nó khá màu mè nhưng lại giúp dễ phân biệt giữa các mục.                                                                                                                  | Không. EMS cần phải unvailable cho event chưa mở đăng ký và nếu đăng ký thất bại phải hiện thông báo là đăng ký thất bại vì lí do gì.          | Tốt. Nó không có vấn đề gì                                                                                               | Không. Vì nó cũng không có thông báo đã đăng ký thành công.                                                                                                                      |
| P2              | Giao diện chưa rõ ràng, hơi khó hiểu. Nút chọn ticket gây cản trở vì bị khóa hoặc không hoạt động mà không có giải thích.                                                                         | Tôi không biết phải làm gì ngoài việc chọn sự kiện khác. EMS nên hiển thị thông báo cảnh báo và giải thích lý do thay vì chỉ chặn nút đăng ký. | Phù hợp. Trang tải nhanh và phản hồi khá tốt.                                                                            | Chưa. Hệ thống chưa hiển thị trạng thái và thông báo đủ rõ nên tôi không chắc đăng ký đã thành công hay chưa.                                                                    |
| P3              | Khá rõ ràng, không có điểm gây cản trở đáng kể.                                                                                                                                                   | Chưa rõ có đang đăng kí được hay chưa, nên hiển thị thông báo "Mở đăng kí vào ngày..., Sự kiện đã đầy,..."                                     | Tốc độ ổn định.                                                                                                          | Tương đối tin tưởng vì hệ thống hiển thị "Registered" rõ ràng, có hiển thị số lượng đăng kí, có update trong profile.                                                            |
| P4              | Giao diện đẹp màu sắc tươi sáng bắt mắt, thông tin đầy đủ, dễ hiểu. Các thẻ nhỏ được gắn vào giúp cung cấp đầy đủ thông tin cần biết.                                                             | Khi đăng ký không được nếu có thể hãy nên có thêm textbox hướng dẫn thêm cho người dùng, thay vì để người dùng tự mày mò để hiểu nguyên nhân.  | Phù hợp. Trang tải nhanh và phản hồi khá tốt.                                                                            | CÓ. Vì hệ thống cập nhật thời gian thực số lượng người đăng ký cho mỗi event và lưu lại thông tin cho người dùng để có thể kiểm tra ngay lập tức.                                |
| P5              | Giao diện thiết kế rất gọn gàng, thông tin cũng dễ nắm bắt và tìm kiếm. Điển hình là font size duoc phân bổ đều nên dễ dàng phân biệt được các chức năng trong giao diện | Event tôi đăng ký đã thành công                                                                                                             | Rất phù hợp vì tôi không nhận thấy có độ trễ nào trong việc hoàn thành việc đăng ký, cũng như xác thực | Độ tin tưởng của tôi khá cao vì phần có logo của fithcmus , tuy nhiên trạng thái của Event đã được đăng ký không được làm nổi bật trên giao diện trạng thái |




### Ghi chú dry run cá nhân

- Khó nhận biết ý nghĩa của tên hoặc ID sự kiện nếu không biết trước yêu cầu bài tập.
- Phải tự tìm trang Profile để xem đăng ký; có thể cân nhắc toast dẫn hướng sau khi đăng ký.
- Có mong muốn có trang danh sách sự kiện đã đăng ký rõ ràng hơn.
- Các ghi chú này không được dùng làm finding hoặc kết quả user testing chính thức.



## 4. Tổng hợp sau 5 phiên chính thức


| Chỉ số                 | Cách tính                                  | Kết quả    |
| ---------------------- | ------------------------------------------ | ---------- |
| Tỉ lệ hoàn thành       | Số phiên `Hoàn thành` / 5                  | 5/5 = 100% |
| Thời gian trung bình   | Tổng thời gian P1–P5 / 5                   | 49:04 / 5 = 09:49 |
| Lỗi / do dự trung bình | Tổng lỗi / do dự P1–P5 / 5                 | 29 / 5 = 5,8 |
| Điểm UEQ-S trung bình  | Tổng điểm UEQ-S (thang 8–56) của P1–P5 / 5 | 193 / 5 = 38,6/56 |




## 5. Phân tích và khuyến nghị


| Finding    | Bằng chứng     | Severity 0–4 | Khuyến nghị    | Screenshot |
| ---------- | -------------- | ------------ | -------------- | ---------- |
| Phản hồi khi sự kiện không thể đăng ký chưa đủ rõ | P1, P2, P3 và P4 đều đề nghị giải thích trạng thái mở đăng ký, đã đầy hoặc bị chặn; P2 không biết phải làm gì khi nút ticket/đăng ký không hoạt động. | 3 | Hiển thị trạng thái cụ thể cạnh nút đăng ký (chưa mở, hết chỗ, hết hạn, không đủ điều kiện), lý do và hành động tiếp theo phù hợp. | `23127173_HW03_AI_GUIUsability_EMS_095\requirement\scenario-B\usability-report\screenshots\finding1.png` |
| Xác nhận đăng ký và trạng thái ticket chưa nổi bật | P1 và P2 không chắc thao tác có thành công; P5 cũng nhận xét trạng thái sự kiện đã đăng ký chưa được làm nổi bật. | 3 | Sau khi đăng ký thành công, hiển thị toast xác nhận có liên kết đến My Registrations; dùng badge/trạng thái nổi bật và nhất quán cho ticket/đăng ký. | `23127173_HW03_AI_GUIUsability_EMS_095\requirement\scenario-B\usability-report\screenshots\finding2.png` |
| Màu sắc và hình ảnh làm giảm độ tập trung | P1 nhận xét giao diện “màu mè”; điểm UEQ-S P1 là 38/56 dù vẫn đánh giá các mục dễ phân biệt. | 1 | Giảm độ bão hòa của ảnh/banner và ưu tiên độ tương phản, khoảng trắng, thứ bậc thông tin cho danh sách sự kiện. | `23127173_HW03_AI_GUIUsability_EMS_095\requirement\scenario-B\usability-report\screenshots\finding3.png` |


> Không điền người tham gia, điểm UEQ-S, kết quả phiên hoặc finding trước khi thực hiện user testing thật.

## 6. Đối chiếu requirement HW3

- [x] Có task scenario hướng mục tiêu, bao phủ B1, B2 và B4.
- [x] Có 5 phiên chính thức P1–P5; liên hệ đã che bốn số giữa; có Pilot riêng được ghi ngoài số liệu tổng hợp.
- [x] Mỗi phiên chính thức có kết quả task, thời gian, lỗi/do dự, UEQ-S và câu trả lời mở.
- [x] Các tổng UEQ-S từng phiên khớp với 8 mục U1–U8; phần tổng hợp chỉ dùng P1–P5.
- [-] Pilot dùng cùng mã/liên hệ với P1 (`23127172`, `0822****79`) theo quyết định sinh viên. Đây là ngoại lệ đã biết so với yêu cầu “một người pilot bổ sung”, không được diễn đạt là đã đạt yêu cầu này.
- [x] P4 và P5 đã có câu trả lời mở đầy đủ; không có ghi chú quan sát bổ sung để lưu.
- [x] Finding, severity và screenshot finding đã được tổng hợp.
- [ ] `findings-log.md` và timestamp Google Form sẽ được bổ sung sau khi hoàn thành các task còn lại.

