# Đề xuất kiểm thử hiệu năng liên tục

![Luồng pipeline](workflow.png)

## Mục tiêu

Theo dõi mỗi commit/PR thay đổi backend hoặc cơ sở dữ liệu của EShop, quyết định có chạy smoke hiệu năng hay không, và gắn cờ hồi quy p95.

## Luồng đề xuất

1. **Kích hoạt có chọn lọc** — chỉ chạy khi PR đụng `backend/` hoặc `database/`.
2. **Khởi động SUT** — build, health check cổng 3000.
3. **Reset/seed** — script `reset-seed-hw5.mjs` tạo dữ liệu đồng nhất.
4. **Smoke JMeter** — chạy non-GUI, lưu JTL/HTML.
5. **So baseline** — script `compare-performance-baseline.mjs` đọc p95 và tỷ lệ lỗi.
6. **Upload artefact** — JTL/HTML lên CI để tra cứu.

## Ngưỡng cảnh báo (gate)

| Điều kiện | Hành động |
| --- | --- |
| Tỷ lệ lỗi > 1% | Fail pipeline |
| p95 tăng > 20% so với baseline đã duyệt | Fail pipeline (hồi quy hiệu năng) |

Baseline mẫu: `baseline.json` (từ lần chạy Load local).

## Đánh đổi

| Lợi ích | Rủi ro |
| --- | --- |
| Phát hiện sớm hồi quy p95 | Runner CI khác máy local → cần rebaseline |
| Lọc path tiết kiệm chi phí CI | Có thể bỏ sót thay đổi gián tiếp |
| Ngưỡng 20% giảm báo động giả | Ngưỡng quá lỏng có thể bỏ lỡ regression nhỏ |

## Trạng thái

Đây là **đề xuất Nhiệm vụ 3**, chưa bật CI thật. Trước khi triển khai cần: duyệt baseline trên runner tương đương, đặt `github-actions-performance.yml` vào `.github/workflows/` của repo EShop.
