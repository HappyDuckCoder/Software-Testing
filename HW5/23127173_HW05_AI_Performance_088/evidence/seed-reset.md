# Reset and seed record - HW5

## Mục đích

Chuẩn bị dữ liệu độc lập cho workflow `login -> my-orders -> cancel`. Mỗi virtual user cần một tài khoản riêng và các đơn chưa hủy để không tranh chấp `orderId`.

## Procedure

1. Khởi động lại backend EShop. `Eshop/backend/database.js` sẽ xóa và tạo lại schema/seed mặc định khi process mới bắt đầu.
2. Chạy `node Lab/HW5/23127173_HW05_AI_Performance_088/scripts/reset-seed-hw5.mjs` từ workspace.
3. Script thêm 50 user test mang tiền tố `hw5.perf.` và 12 đơn `pending`/`confirmed` cho mỗi user, sau đó sinh `performance/data/hw5-users.local.csv` (bị git-ignore).
4. Xác minh login, `my-orders`, và cancel trên một tài khoản test trước khi dùng JMeter.

Với Endurance plan, chạy lại seed với `HW5_ACCOUNT_COUNT=1500` và `HW5_ORDERS_PER_ACCOUNT=1` để có 1.500 CSV rows/đơn độc lập cho 10 threads x 120 loops. Chỉ áp dụng cấu hình lớn này ngay trước endurance run.

## Execution record

Ngày 31/08/2026 (UTC+7):

1. Backend được khởi động lại ở `http://localhost:3000`; database mặc định được reset bởi `database.js`. Process đang lắng nghe ở PID `33556` tại thời điểm kiểm tra.
2. Chạy `reset-seed-hw5.mjs` thành công: **50** tài khoản test, **600** đơn `pending`/`confirmed` (12 đơn/tài khoản), CSV local **51** dòng gồm header.
3. Kiểm tra workflow thực tế bằng một tài khoản seed: login cấp JWT; `GET /api/orders/my-orders` trả 12 đơn; hủy đơn ID 12 chuyển từ `confirmed` sang `canceled`.
4. Chạy seed lần thứ hai sau kiểm tra hủy đơn để khôi phục dữ liệu: tài khoản kiểm tra lại có 12/12 đơn đủ điều kiện. Không có log hiệu năng, HTML report hoặc ảnh monitor nào được tạo trong bước seed/xác minh này.
