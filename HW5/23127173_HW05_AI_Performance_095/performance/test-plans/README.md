# Test plans

Đặt ba test plan đã chạy và được human review tại đây. Dùng tên `{StudentID}_{ScenarioType}_{YYYYMMDD}` với `ScenarioType` là `Load`, `Stress`, `Spike`. Mỗi plan phải chạy cùng workflow `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`, truyền JWT và `orderId` giữa các request. Không thêm file `.jmx`/`.js` trống làm bằng chứng thay cho plan thật.
