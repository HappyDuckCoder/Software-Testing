# Reset and seed record - HW5

## Mục đích

Chuẩn bị dữ liệu độc lập cho workflow `login -> my-orders -> cancel`. Mỗi virtual user cần một tài khoản riêng và các đơn chưa hủy để không tranh chấp `orderId`.

## Procedure

1. Khởi động lại backend EShop. `Eshop/backend/database.js` sẽ xóa và tạo lại schema/seed mặc định khi process mới bắt đầu.
2. Chạy `node Lab/HW5/23127173_HW05_AI_Performance_095/scripts/reset-seed-hw5.mjs` từ workspace.
3. Script thêm 50 user test mang tiền tố `hw5.perf.` và 12 đơn `pending`/`confirmed` cho mỗi user, sau đó sinh `performance/data/hw5-users.local.csv` (bị git-ignore).
4. Xác minh login, `my-orders`, và cancel trên một tài khoản test trước khi dùng JMeter.

## Execution record

Chưa chạy trong phiên khởi tạo tài liệu. Kết quả run thực tế, thời điểm, PID server và kiểm tra endpoint sẽ được thêm sau khi script thực thi thành công.
