# HW06-AI API Testing - Submission README

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW06-AI - API Testing on EShop |
| SUT | EShop (`http://localhost:3000`) |
| Tên ZIP | `23127173_HW06_AI_API_095.zip` |
| Điểm tự đánh giá | 095/100 (tạm thời) |
| Trạng thái | Có Postman Runner, Newman local và GitHub Actions baseline evidence; các deliverable còn thiếu được liệt kê tại `checklist.md`. |

## API dự kiến

| Pool | Feature/API dự kiến | Ý nghĩa API | Lý do |
| --- | --- | --- | --- |
| A | FR-04 - `PUT /api/users/me` | Cập nhật thông tin hồ sơ của chính người dùng đã đăng nhập. | Dùng lại nền tảng HW2; có domain partitions cho tên, địa chỉ, số điện thoại và kiểm soát JWT/ownership. |
| B | FR-10 - `PUT /api/orders/:id/cancel` | Hủy một đơn thuộc người dùng hiện tại và chuyển trạng thái sang `canceled` nếu thỏa điều kiện. | Kiểm thử transition/cancellation của đơn hàng. |
| C | FR-18 - `PUT /api/admin/orders/:id/status` | Admin cập nhật trạng thái của một đơn, ví dụ `pending` sang `confirmed`. | Có role authorization, IDOR và state transition phía admin. |

Ba endpoint trên không trùng bộ của Vân: `POST /register`, `GET /api/products/:id`, `POST /api/checkout`. Phạm vi này đã được dùng để thực thi suite HW06; cần xác nhận lại với nhóm nếu danh sách phân công thay đổi.

## Cấu trúc

```text
23127173_HW06_AI_API_095/
|- api-testing/             # Postman collection, environment, data, Newman output
|- ci-cd/                   # workflow và báo cáo CI/CD
|- doc/md/                  # main report, audit, critique, commit log
|- doc/pdf/                 # PDF xuất cuối cùng
|- evidence/                # ảnh header, Postman, Newman, CI/CD, issue thật
|- issues/                  # bug report Markdown
|- test-cases/              # workbook Excel và test summary
|- agent-skills/            # design/pseudocode của test generator
|- scripts/                 # hướng dẫn thực thi/đóng gói
|- roadmap.md
`- checklist.md
```

Không thay thế raw Newman output, ảnh header, issue screenshot, pipeline link hoặc sơ đồ tự vẽ bằng nội dung sinh bởi AI.
