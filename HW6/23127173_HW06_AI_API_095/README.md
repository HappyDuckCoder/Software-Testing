# HW06-AI — Kiểm thử API EShop

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| SUT | EShop — `http://localhost:3000` |
| ZIP nộp | `23127173_HW06_AI_API_095.zip` |
| Tự đánh giá | 095/100 (tạm) |

## Trạng thái nhanh

| Đã xong | Chưa xong |
| --- | --- |
| 120 TC (35 AI + 5 SV × 3 API), oracle theo **đặc tả** | Assertion Postman cho từng ID |
| Postman + Newman + CI baseline | GitHub Issues, CI fail, Excel, PDF/ZIP |
| 3 bug compliance (SEC-06, FR-10, SEC-03) | Diagram generator tự vẽ |

Chi tiết: `checklist.md`, `test-cases/test-case-matrix.md`.

## Ba API

| Pool | Endpoint | Ý nghĩa |
| --- | --- | --- |
| A | `PUT /api/users/me` | Cập nhật hồ sơ user (FR-04) |
| B | `PUT /api/orders/:id/cancel` | Hủy đơn (FR-10) |
| C | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái (FR-18) |

Không trùng Vân: `/register`, `/api/products/:id`, `POST /api/checkout`.

## Cấu trúc thư mục

```text
23127173_HW06_AI_API_095/
├── api-testing/      # Postman, Newman
├── ci-cd/
├── doc/md/           # báo cáo, AI audit
├── evidence/
├── issues/
├── test-cases/       # ma trận 120 TC + CSV
├── agent-skills/
├── checklist.md
└── roadmap.md
```

Evidence thật (Newman, ảnh Postman/CI) không được thay bằng nội dung AI sinh.
