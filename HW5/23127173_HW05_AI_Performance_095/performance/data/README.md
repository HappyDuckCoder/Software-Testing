# CSV test data

Lưu CSV dùng cho workflow E2E tại đây. Workflow đã chọn cần tối thiểu `email,password` của tài khoản test. `JWT` lấy từ `POST /api/login`; `orderId` phải được lấy từ `GET /api/orders/my-orders` thay vì hard-code, và chỉ hủy đơn `pending`/`confirmed` đã được chuẩn bị cho mỗi lần chạy.

Script `scripts/reset-seed-hw5.mjs` tạo `hw5-users.local.csv` gồm 50 tài khoản test cục bộ và 600 đơn đủ điều kiện (12 đơn/tài khoản). File CSV này bị `.gitignore`; không chứa dữ liệu thật và được tạo lại sau mỗi lần reset database.
