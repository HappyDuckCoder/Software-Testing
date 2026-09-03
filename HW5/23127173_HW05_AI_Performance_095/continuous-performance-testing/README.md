# Đề xuất kiểm thử hiệu năng liên tục

![Luồng pipeline](workflow.png)

## Mục tiêu

Theo dõi mỗi commit trên nhánh `homework5-v2`, chạy **Load + Stress + Spike** (plan JMeter thật, không smoke), và gắn cờ hồi quy p95 trên Load.

## Luồng triển khai (`.github/workflows/github-actions-performance.yml`)

1. Checkout repo `Software-Testing` + clone `ttbhanh/eshop-sut` vào `eshop-sut/` (SUT **không** nằm trong repo Lab).
2. `npm ci` backend, cài JMeter 5.6.3, khởi động SUT cổng 3000.
3. **Load** — seed → JMeter → JTL/HTML `23127173_Load_20260831`.
4. **So baseline** — gate fail nếu p95 Load tăng >20% hoặc lỗi >1%.
5. **Stress** — seed lại → `23127173_Stress_20260831`.
6. **Spike** — seed lại (50 account) → `23127173_Spike_20260831`.
7. Upload artefact JTL/HTML.

**Endurance (~601 s)** không chạy trên CI — chỉ local.

Biến môi trường CI: `HW5_BACKEND_DIR=eshop-sut/backend` cho `reset-seed-hw5.mjs`.

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

Workflow đã đặt tại `Lab/.github/workflows/github-actions-performance.yml`. Push nhánh `homework5-v2` (path `HW5/**`) hoặc **Run workflow** thủ công trên GitHub Actions.
