# Báo cáo Feature B — FR-11 Lịch sử đơn hàng (Automation)

## 1. Thông tin feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Nguồn HW02 | `Lab/HW2/.../requirement/feature-B/` |
| Trạng thái | Khung script |

## 2. Phạm vi automation

- User đăng nhập → `/profile` → section lịch sử đơn hàng
- API: `GET /api/orders/my-orders`, cancel khi pending/confirmed

## 3. Map ≥ 12 test case

| Auto ID | HW2 ref | Loại | Mô tả | Pattern |
| --- | --- | --- | --- | --- |
| B-AUTO-01 | B-DT-01 | positive | User chưa có đơn — empty state | text |
| B-AUTO-02 | B-DT-02 | positive | Một đơn hiển thị | count |
| B-AUTO-03 | B-DT-03 | positive | Nhiều đơn, thứ tự mới nhất | count + text |
| B-AUTO-04 | B-DT-05 | negative | Không token → login | URL |
| B-AUTO-05 | B-DT-07 | positive | Status pending label/màu | text/CSS |
| B-AUTO-06 | B-DT-08 | positive | Status delivered | text |
| B-AUTO-07 | B-DT-09 | positive | Nút hủy khi pending | visibility |
| B-AUTO-08 | B-DT-10 | negative | Không hủy khi delivered | disabled/absent |
| B-AUTO-09 | B-BVA-01 | boundary | Danh sách rỗng message | text |
| B-AUTO-10 | B-BVA-03 | boundary | Nhiều đơn format tiền | text |
| B-AUTO-11 | B-DT-13 | negative | Không thấy đơn user khác | count |
| B-AUTO-12 | B-DT-14 | edge | Hủy đơn pending thành công | text/state |

## 4. Artifact

- Data: `automation/data/feature-b-order-history.json`
- Spec: `automation/tests/feature-b-order-history.spec.ts`

## 5. Kết quả

| Browser | Pass | Fail |
| --- | ---: | ---: |
| Chromium / Firefox / WebKit | `[CHƯA CHẠY]` | |
