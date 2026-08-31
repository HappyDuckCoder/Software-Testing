# Test plans

Ba plan JMeter đã tạo: `23127173_Load_20260831.jmx`, `23127173_Stress_20260831.jmx` và `23127173_Spike_20260831.jmx`; plan endurance bổ sung là `23127173_Endurance_20260831.jmx`. Chúng được sinh lại bởi `scripts/generate-jmeter-plans.mjs`.

| Plan | Threads | Ramp-up | Loops | Think-time | Listener/report riêng |
| --- | ---: | ---: | ---: | ---: | --- |
| Load | 10 | 20 s | 1 | 1.5 s | View Results Tree |
| Stress | 30 | 30 s | 1 | 1.0 s | Summary Report |
| Spike | 50 | 1 s | 1 | 0.5 s | Aggregate Report |
| Endurance | 10 | 30 s | 120 | 5.0 s | Summary Report (bổ sung) |

Mỗi plan chạy workflow `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`, truyền JWT và `orderId` giữa các request. Khi chạy CLI, truyền đường dẫn tuyệt đối của CSV local qua `-Jhw5.data.file=<path>`. Các plan là thiết kế đã kiểm tra XML, **chưa được xác thực hoặc chạy bằng JMeter** cho đến khi có launcher `jmeter.bat`.
