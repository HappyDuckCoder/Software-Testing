# Báo cáo Feature C — FR-18 Quản lý đơn hàng admin (Automation)

## 1. Thông tin feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool C |
| Feature ID | FR-18 |
| Nguồn HW02 | `Lab/HW2/.../requirement/feature-C/` |
| Actor | Admin (`admin@eshop.com`) |
| Trạng thái | Khung script |

## 2. Phạm vi automation

- Admin login → Orders list → đổi trạng thái đơn
- API: `GET /api/admin/orders`, `PUT /api/admin/orders/:id/status`

## 3. Map ≥ 12 test case

| Auto ID | HW2 ref | Loại | Mô tả | Pattern |
| --- | --- | --- | --- | --- |
| C-AUTO-01 | C-DT-01 | positive | Admin xem danh sách đơn | count |
| C-AUTO-02 | C-DT-02 | positive | Có user_name cột | text |
| C-AUTO-03 | C-DT-03 | negative | Thiếu token → 401/redirect | URL |
| C-AUTO-04 | C-DT-04 | negative | User thường không vào admin | URL |
| C-AUTO-05 | C-DT-06 | positive | pending → confirmed | text |
| C-AUTO-06 | C-DT-07 | positive | confirmed → shipping | text |
| C-AUTO-07 | C-DT-08 | negative | Transition không hợp lệ | text/message |
| C-AUTO-08 | C-DT-10 | edge | canceled → delivered block | state |
| C-AUTO-09 | C-BVA-01 | boundary | Order id không tồn tại | text/404 |
| C-AUTO-10 | C-BVA-02 | boundary | Status string invalid | message |
| C-AUTO-11 | C-DT-12 | positive | Địa chỉ hiển thị an toàn | text |
| C-AUTO-12 | C-DT-14 | positive | Refresh list sau update | count/text |

## 4. Artifact

- Data: `automation/data/feature-c-admin-orders.json`
- Spec: `automation/tests/feature-c-admin-orders.spec.ts`

## 5. Kết quả

| Browser | Pass | Fail |
| --- | ---: | ---: |
| Chromium / Firefox / WebKit | `[CHƯA CHẠY]` | |
