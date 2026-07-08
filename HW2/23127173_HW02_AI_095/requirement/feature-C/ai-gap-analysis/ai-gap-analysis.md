# AI Gap Analysis - Feature C: FR-18 Quản lý đơn hàng của admin

## 1. Mục tiêu tự review

Phần này nhìn lại bộ test Feature C sau khi đã chạy 16 test Domain Testing và 8 test Boundary Value Analysis. Mục tiêu không phải là “khen AI”, mà là chỉ ra AI đã giúp được gì, đã dễ bỏ sót gì, và sau khi test thật thì tài liệu cần được chỉnh lại như thế nào.

## 2. Tổng quan kết quả

| Nhóm test | Số lượng | Kết quả chính |
| --- | ---: | --- |
| Domain Testing | 16 | 12 Pass, 4 Fail |
| Boundary Value Analysis | 8 | 6 Pass, 2 Fail |
| Tổng cộng | 24 | 18 Pass, 6 Fail |
| Bug chính | 3 | Phân quyền admin, state machine `canceled`, XSS địa chỉ giao hàng |

## 3. Các gap quan trọng

| Gap ID | Output AI ban đầu | Thiếu / sai | Vì sao dễ bỏ sót | Đã sửa sau khi test | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| C-GAP-01 | Nghĩ rằng route `/api/admin/*` đã có middleware admin đầy đủ | API chỉ có `authenticateToken`, không kiểm tra role | Tên route có chữ `admin` dễ làm mình tưởng đã an toàn | Thêm và chạy C-DT-04, lập BUG-C-01 | C-DT-04, `server.js` |
| C-GAP-02 | Tập trung nhiều vào các transition hợp lệ | Nhánh `canceled -> delivered` lại được backend cho phép | Lỗi nằm trong một dòng state machine rất nhỏ | Thêm C-DT-12, C-DT-16, C-BVA-06, lập BUG-C-02 | C-DT-12, C-DT-16, C-BVA-06 |
| C-GAP-03 | Chỉ xem địa chỉ giao hàng là text bình thường | Admin UI dùng `dangerouslySetInnerHTML` | Nếu không đọc frontend thì khó thấy rủi ro XSS | Thêm C-DT-15, C-BVA-08, lập BUG-C-03 | C-DT-15, C-BVA-08 |
| C-GAP-04 | Dễ gom UI và API thành một lớp | Có lỗi chỉ thấy ở API, có lỗi thấy cả API và UI | FR-18 vừa có backend vừa có admin frontend | Report tách rõ bước tái hiện API và UI | Bug report mới |
| C-GAP-05 | Dễ gọi mọi lỗi transition là lỗi riêng của Feature C | Một phần rule state machine thuộc FR-10 | Feature C là nơi admin thao tác, nhưng luật trạng thái nằm ở FR-10 | Ghi rõ BUG-C-02 là lỗi FR-18 khi thực thi quản lý đơn, đồng thời liên quan FR-10 | C-DT-12, C-DT-16 |

## 4. Tự đánh giá chất lượng test case

| Tiêu chí | Đánh giá |
| --- | --- |
| Bám sát repo EShop | Tốt. Test case dựa trực tiếp trên `server.js` và `frontend-admin/src/App.jsx`, không còn là test admin chung chung. |
| Bao phủ phân quyền | Tốt hơn bản đầu. C-DT-03 kiểm tra thiếu token, C-DT-04 kiểm tra token user thường và đã bắt được lỗi thật. |
| Bao phủ state machine | Khá tốt. Bộ test có cạnh hợp lệ, cạnh bỏ bước, trạng thái kết thúc và mã trạng thái lạ. |
| Bao phủ BVA | Khá tốt. Có biên 0/1/nhiều đơn, chuỗi transition đầy đủ, bỏ bước, sau trạng thái kết thúc, địa chỉ rỗng và địa chỉ HTML nguy hiểm. |
| Chất lượng bằng chứng | Đủ để viết report. Một vài bằng chứng có thể dùng chung giữa test liên quan, nhưng nên đặt tên ảnh nhất quán hơn để người chấm truy vết nhanh. |
| Tính gần với người dùng thật | Tốt. Bộ test không chỉ gọi API mà còn kiểm tra admin UI, nơi lỗi XSS và nút sai trạng thái thật sự hiện ra. |

## 5. Điểm tốt của bộ test sau khi chạy

1. Bộ test đã phát hiện lỗi phân quyền nghiêm trọng: user thường xem được API admin orders.
2. Bộ test kiểm tra được cả mặt API và UI của state machine, nên phát hiện `canceled -> delivered` không chỉ là lỗi backend mà còn lộ ra thành nút bấm trên admin UI.
3. Bộ test XSS rất đáng giá vì địa chỉ giao hàng là dữ liệu user nhập nhưng lại được admin xem. Đây là điểm thực tế, không phải case “cho có”.
4. Các case pass cũng có ý nghĩa: chúng chứng minh hệ thống vẫn xử lý đúng nhiều đường hợp lệ, không phải mọi thứ đều hỏng.

## 6. Điểm còn hạn chế

1. Chưa có GitHub Issue thật được gắn vào từng bug.
2. C-DT-16 nên có ảnh bằng chứng riêng đúng tên `C-DT-16.png` nếu hiện tại đang trỏ nhầm ảnh khác.
3. Chưa có test user thường gọi `PUT /api/admin/orders/:id/status`; C-DT-04 mới xác nhận chắc chắn lỗi ở `GET /api/admin/orders`.
4. Chưa có test địa chỉ rất dài để xem UI có vỡ layout hay không; C-BVA-08 tập trung vào HTML/script.

## 7. Kết luận

AI đã giúp dựng nhanh khung miền đầu vào, class tương đương và boundary cho Feature C. Nhưng nếu chỉ dừng ở output ban đầu thì rất dễ bỏ qua các lỗi “nhỏ mà đau”: route admin không kiểm tra role, một nhánh state machine sai, và `dangerouslySetInnerHTML` trong bảng admin.

Sau khi chạy test thật, bộ test Feature C hiện khá ổn: 24 test đã chạy, có cả API và UI, có cả luồng đúng và luồng lỗi. Ba bug tìm được đều có giá trị thực tế và nên được đưa vào báo cáo cuối: BUG-C-01 về phân quyền, BUG-C-02 về trạng thái đơn đã hủy, và BUG-C-03 về XSS địa chỉ giao hàng.
