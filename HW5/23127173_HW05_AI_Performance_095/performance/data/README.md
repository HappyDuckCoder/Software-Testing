# CSV test data

Lưu CSV dùng cho workflow E2E tại đây. Workflow đã chọn cần tối thiểu `email,password` của tài khoản test. `JWT` lấy từ `POST /api/login`; `orderId` phải được lấy từ `GET /api/orders/my-orders` thay vì hard-code, và chỉ hủy đơn `pending`/`confirmed` đã được chuẩn bị cho mỗi lần chạy. Không lưu mật khẩu, token hoặc dữ liệu cá nhân thật.
