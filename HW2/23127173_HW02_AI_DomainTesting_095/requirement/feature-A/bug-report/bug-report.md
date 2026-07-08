# Bug Report - FR-04 Quản lý hồ sơ cá nhân

## 1. Tổng quan lỗi

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test liên quan | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-A-01 | Frontend kiểm tra số điện thoại trái với quy tắc FR-04 trong README | Major | Cao | Đã tái hiện khi chạy UI | A-DT-06, A-DT-08, A-DT-12, A-BVA-02, A-BVA-03, A-BVA-05, A-BVA-06 | Screenshot trong `domain-testing` và `boundary-value-analysis`; `Profile.jsx` dòng regex phone |
| BUG-A-02 | API `PUT /api/users/me` cho phép user thường tự đổi `role` thành `admin` | Critical | Cao | Đã tái hiện khi gọi API | A-DT-17 | Screenshot/log API `A-DT-017.png`; `backend/server.js` route cập nhật hồ sơ |

Ảnh minh chứng GitHub issue/screenshot bug nằm trong `bug-report/screenshots`: `BUG-A-01-1.png`, `BUG-A-01-2.png`, `BUG-A-02-1.png`, `BUG-A-02-2.png`. Nếu giảng viên yêu cầu link issue thật, cần gắn thêm URL issue vào đây trước khi nộp.

## 2. BUG-A-01 - Frontend kiểm tra số điện thoại trái đặc tả FR-04

### Mô tả

Theo FR-04 trong README, số điện thoại hợp lệ phải bắt đầu bằng `0` và dài 10-11 chữ số. Tuy nhiên form hồ sơ trên frontend đang dùng regex `^[1-9][0-9]{8,9}$`, nghĩa là:

* Từ chối số bắt đầu bằng `0`, dù đó là số hợp lệ theo README.
* Chấp nhận số bắt đầu bằng `1-9`, dù đó là số không hợp lệ theo README.
* Chỉ cho phép 9-10 chữ số, trong khi README yêu cầu 10-11 chữ số.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop web |
| Feature | FR-04 Quản lý hồ sơ cá nhân |
| Thành phần lỗi | `Eshop/frontend-web/src/pages/Profile.jsx` |
| Tài khoản test | `test@eshop.com` / `Test1234!` |

### Bước tái hiện

1. Đăng nhập bằng tài khoản `test@eshop.com`.
2. Mở trang `/profile`.
3. Nhập `phone = 0912345678`.
4. Bấm cập nhật hồ sơ.
5. Tiếp tục nhập `phone = 912345678`.
6. Bấm cập nhật hồ sơ.

### Kết quả mong đợi

* `0912345678` phải được chấp nhận vì bắt đầu bằng `0` và có 10 chữ số.
* `912345678` phải bị từ chối vì không bắt đầu bằng `0` và chỉ có 9 chữ số.
* Thông báo lỗi, nếu có, phải nói đúng quy tắc 10-11 chữ số bắt đầu bằng `0`.

### Kết quả thực tế

* Số `0912345678` bị frontend từ chối.
* Số `912345678` được frontend chấp nhận/cập nhật thành công.
* Một số thông báo lỗi ghi 9-10 chữ số, không khớp README 10-11 chữ số.

### Tác động

Người dùng nhập số điện thoại hợp lệ theo yêu cầu nghiệp vụ nhưng không cập nhật được hồ sơ. Ngược lại, hệ thống có thể lưu số điện thoại sai định dạng, làm giảm chất lượng dữ liệu giao hàng và liên hệ.

### Nguyên nhân mã nguồn

Trong `Profile.jsx`, regex kiểm tra phone là:

```js
/^[1-9][0-9]{8,9}$/
```

Regex đúng theo README nên là một biến thể tương đương:

```js
/^0[0-9]{9,10}$/
```

### Hướng sửa đề xuất

1. Đổi regex frontend thành `^0[0-9]{9,10}$`.
2. Cập nhật thông báo lỗi thành “Số điện thoại phải bắt đầu bằng 0 và gồm 10-11 chữ số”.
3. Bổ sung validation tương tự ở backend để request API trực tiếp không bỏ qua được quy tắc.
4. Chạy lại các test A-DT-06, A-DT-08, A-DT-12 và A-BVA-02 đến A-BVA-06.

## 3. BUG-A-02 - API hồ sơ cho phép user thường tự đổi `role`

### Mô tả

FR-04 chỉ cho phép người dùng cập nhật thông tin hồ sơ cơ bản như họ tên, số điện thoại và địa chỉ giao hàng. Người dùng không được tự đổi vai trò. Tuy nhiên endpoint `PUT /api/users/me` đang đọc `role` từ body request và cập nhật thẳng vào bảng `users` nếu client gửi trường này.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-04 Quản lý hồ sơ cá nhân |
| Endpoint | `PUT /api/users/me` |
| Tài khoản test | User thường `test@eshop.com` |

### Bước tái hiện

1. Đăng nhập bằng `test@eshop.com` để lấy bearer token.
2. Gửi request:

```json
{
  "name": "Nguyen Van A",
  "phone": "0912345678",
  "shipping_address": "227 Nguyen Van Cu",
  "role": "admin"
}
```

3. Gọi `GET /api/users/me` bằng cùng token.
4. Kiểm tra trường `role` trong response.

### Kết quả mong đợi

API phải từ chối request, bỏ qua trường `role`, hoặc giữ `role` của user là `user`.

### Kết quả thực tế

Request cập nhật thành công và kết quả kiểm tra cho thấy user có thể bị đổi vai trò thành `admin`.

### Tác động

Đây là lỗi bảo mật nghiêm trọng. User thường có thể tự leo thang đặc quyền, sau đó truy cập các API hoặc màn hình chỉ dành cho admin.

### Nguyên nhân mã nguồn

Route `PUT /api/users/me` trong `backend/server.js` destructure cả `role`:

```js
const { name, shipping_address, phone, role } = req.body;
```

Sau đó nếu `role` tồn tại, query thêm `role = ?` vào câu UPDATE.

### Hướng sửa đề xuất

1. Loại bỏ `role` khỏi body được xử lý trong `PUT /api/users/me`.
2. Chỉ cho phép cập nhật whitelist field: `name`, `shipping_address`, `phone`.
3. Nếu request có field ngoài whitelist như `role`, backend nên bỏ qua hoặc trả 400.
4. Bổ sung test bảo mật cho A-DT-17 và kiểm tra lại các API admin bằng token user thường.
