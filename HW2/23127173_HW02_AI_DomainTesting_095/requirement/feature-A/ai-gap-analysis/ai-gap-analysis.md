# AI Gap Analysis - FR-04 Quản lý hồ sơ cá nhân

## 1. Mục tiêu đánh giá

Tài liệu này tự đánh giá chất lượng bộ test case Feature A do AI hỗ trợ sinh ra, sau khi đã đọc repo EShop, chỉnh theo mã nguồn thật và chạy test trên SUT. Feature A có tổng cộng 30 test case:

| Nhóm test | Số lượng | Đã chạy | Pass | Fail | Warning | Bug chính phát hiện |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 18 | 18 | 9 | 5 | 4 | 2 |
| Boundary Value Analysis | 12 | 12 | 1 | 9 | 2 | 1 nhóm lỗi phone lặp lại |
| Tổng | 30 | 30 | 10 | 14 | 6 | 2 |

Hai lỗi chính đã được phát hiện:

* BUG-A-01: frontend kiểm tra số điện thoại trái với README FR-04.
* BUG-A-02: API `PUT /api/users/me` cho phép user thường tự đổi `role`.

## 2. Các gap đã phát hiện và cách sửa

| Gap ID | Output AI ban đầu | Thiếu / sai | Vì sao AI bỏ sót | Cách đã sửa | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| A-GAP-01 | Bản nháp đầu đưa vào các trường hồ sơ chung như ngày sinh, giới tính, avatar và giới hạn độ dài tùy ý | Các trường này không tồn tại trong FR-04 của EShop | AI suy diễn theo mẫu e-commerce chung trước khi đọc repo | Loại bỏ trường không có trong source; chỉ giữ `name`, `phone`, `shipping_address`, email bị khóa, token và `role` ngoài dự kiến | `Eshop/README.md`, `Profile.jsx`, `server.js`, Domain/BVA đã sửa |
| A-GAP-02 | Ban đầu coi số điện thoại là chuỗi 10-11 chữ số chung chung | README yêu cầu số điện thoại bắt đầu bằng `0` và dài 10-11 chữ số | Quy tắc chi tiết nằm trong README EShop, không nằm rõ trong danh sách feature HW02 | Bổ sung lớp tương đương và biên cho: bắt đầu bằng `0`, không bắt đầu bằng `0`, 9/10/11/12 chữ số, có ký tự chữ | A-DT-06 đến A-DT-12; A-BVA-01 đến A-BVA-06 |
| A-GAP-03 | Ban đầu chưa phát hiện mâu thuẫn giữa README và frontend | Regex frontend nhận số bắt đầu bằng `1-9`, dài 9-10 chữ số; trái với README | Phải đọc `Profile.jsx` mới thấy lỗi, chỉ đọc yêu cầu thì không đủ | Bổ sung test để cố tình bóc lỗi validation số điện thoại | A-DT-06, A-DT-08, A-DT-12, A-BVA-02, A-BVA-03, A-BVA-05, A-BVA-06 |
| A-GAP-04 | Ban đầu thiếu test abuse API | Backend nhận `role` trong body của `PUT /api/users/me` | Lỗi nằm trong logic route backend, không xuất hiện ở UI | Bổ sung A-DT-17 và BUG-A-02 để kiểm tra leo quyền | `backend/server.js`, A-DT-17, `bug-report.md` |
| A-GAP-05 | Test case ban đầu chưa truy vết rõ class/điều kiện được thỏa mãn | Khó biết test case đang bao phủ lớp tương đương nào | Format ban đầu chỉ liệt kê input/expected, thiếu cột coverage | Thêm cột “Điều kiện/class thỏa mãn” và “Điều kiện/biên thỏa mãn” | `domain-testing.md`, `boundary-value-analysis.md` |
| A-GAP-06 | Một số test BVA dùng cùng số điện thoại `0987654321` khi kiểm thử biên `name` hoặc `shipping_address` | Do regex frontend sai, các test đáng lẽ kiểm tra name/address lại fail vì phone trước | AI chưa cô lập biến phụ đủ tốt khi BVA nhiều biến | Ghi nhận đây là hạn chế; khi chạy lại nên dùng API trực tiếp hoặc dùng phone hợp lệ theo implementation để cô lập biến đang test | A-BVA-08 đến A-BVA-12 |
| A-GAP-07 | Một số test UI và API bị trùng ý nghĩa | A-DT-01 vô tình bao phủ một phần A-DT-02; nhiều test phone cùng chứng minh một lỗi regex | AI tối ưu coverage nhưng chưa giảm trùng sau khi đã có kết quả thực thi | Giữ lại vì có bằng chứng khác nhau, nhưng đánh dấu trong tự đánh giá là chưa tối ưu hoàn toàn | A-DT-01/A-DT-02; nhóm A-DT-06 đến A-DT-12 |

## 3. Tự đánh giá chất lượng test case

### 3.1 Điểm tốt

| Tiêu chí | Đánh giá |
| --- | --- |
| Bám source EShop | Tốt. Bộ test đã bỏ các trường không có thật và dựa vào `README.md`, `Profile.jsx`, `server.js`, `api_specification.md`. |
| Bao phủ miền đầu vào | Khá tốt. Có token hợp lệ/thiếu/sai, `name`, `phone`, `shipping_address`, email bị khóa và field `role` ngoài dự kiến. |
| Bao phủ lớp hợp lệ/không hợp lệ | Tốt với phone và token; khá với email/role; trung bình với `name` và `shipping_address` vì source không có nhiều rule rõ. |
| BVA | Khá. Đã có 9/10/11/12 chữ số, ký tự đầu phone, tên rỗng/1/2 ký tự, địa chỉ rỗng/1 ký tự/dài. |
| Khả năng phát hiện bug | Tốt. Bộ test phát hiện được 2 lỗi có giá trị: sai regex phone và leo quyền qua `role`. |
| Evidence | Tốt hơn ban đầu. Feature A đã có screenshot/API evidence cho 30 test case. |

### 3.2 Điểm chưa tốt

| Vấn đề | Ảnh hưởng | Cách cải thiện |
| --- | --- | --- |
| Một số test bị trùng coverage | Tăng số lượng test nhưng giá trị mới không nhiều | Gộp hoặc đánh dấu rõ test nào là UI, test nào là API |
| BVA của `name` và `shipping_address` bị nhiễu bởi lỗi phone frontend | Kết quả Fail không chứng minh trực tiếp lỗi của biến đang test | Khi kiểm thử `name`/`shipping_address`, nên dùng API trực tiếp hoặc tạm dùng số điện thoại mà frontend đang chấp nhận để cô lập biến |
| Backend chưa có validation phone/name rõ ràng nhưng test chủ yếu qua UI | Có thể bỏ sót lỗi API nhận dữ liệu sai | Bổ sung test API trực tiếp cho phone quá ngắn/quá dài/chứa chữ nếu requirement yêu cầu backend cũng phải validate |
| Một số expected ban đầu quá lý tưởng | Ví dụ kỳ vọng backend bỏ qua email/role cần đối chiếu với thiết kế API thật | Tách rõ “expected theo requirement” và “actual theo source hiện tại” |
| Chưa có GitHub Issue thật trong artifact | Bug report chưa hoàn tất quy trình nộp bài | Tạo issue thật, gắn link vào `bug-report.md` |

## 4. Kết luận: test case đã tốt chưa?

Bộ test case Feature A hiện tại ở mức **khá tốt và có giá trị thực tế**, vì đã dựa trên repo EShop thật, có traceability theo miền đầu vào, có BVA, đã chạy đủ 30 test case và phát hiện được 2 lỗi quan trọng. So với bản AI ban đầu, chất lượng đã cải thiện rõ rệt vì không còn kiểm thử các field tưởng tượng như DOB/avatar/gender.

Tuy vậy, bộ test **chưa tối ưu hoàn toàn**. Điểm yếu lớn nhất là một số test BVA không cô lập tốt biến đang kiểm thử, dẫn đến nhiều Fail cùng xuất phát từ lỗi phone regex. Ngoài ra, một số case có overlap giữa UI và API. Nếu tối ưu tiếp, nên giảm trùng, tách rõ UI/API, và dùng API trực tiếp cho các test cần cô lập `name` hoặc `shipping_address`.

Đánh giá cuối cùng: **đạt yêu cầu tốt cho HW02**, đủ để chứng minh quy trình Domain Testing/BVA và AI Gap Analysis, nhưng vẫn còn không gian cải thiện nếu muốn bộ test gọn hơn và ít nhiễu hơn.

## 5. Bài học về sử dụng AI

AI hữu ích trong việc tạo khung phân tích, gợi ý lớp tương đương, gợi ý biên và nhắc các trường hợp âm tính. Tuy nhiên, AI dễ suy diễn theo kinh nghiệm chung nếu chưa đọc mã nguồn. Với Feature A, các lỗi quan trọng nhất chỉ xuất hiện sau khi đối chiếu trực tiếp với repo EShop. Vì vậy, output AI chỉ nên xem là bản nháp; sinh viên phải đọc source, chạy SUT, kiểm tra bằng chứng và sửa lại test case trước khi xem là kết quả cuối cùng.
