# HW05-AI Performance Testing - Submission README

## Thông tin bài nộp

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW05-AI - Performance Testing on EShop |
| SUT | EShop - <https://github.com/ttbhanh/eshop-sut> |
| Mục tiêu tự đánh giá | 095/100 (tạm thời, cập nhật sau khi hoàn tất) |
| Tên file nộp | `23127173_HW05_AI_Performance_095.zip` |
| Công cụ dự kiến | JMeter (hoặc k6 nếu được sử dụng) |
| Trạng thái | Khung bài nộp đã tạo; chưa có dữ liệu thực thi |

## Workflow được kiểm thử

Workflow đầu cuối được chọn là: **đăng nhập -> xem lịch sử đơn hàng của chính người dùng -> hủy một đơn đang ở trạng thái `pending` hoặc `confirmed`**.

| Loại tải | API được chọn | Liên hệ HW2 | Lý do chọn |
| --- | --- | --- | --- |
| Auth-heavy | `POST /api/login` | Tiền điều kiện xác thực đã dùng khi kiểm thử FR-11/FR-10. | Cấp JWT cho hai request sau và có hành vi account lockout cần quan sát ở Stress/Spike. |
| Read-heavy | `GET /api/orders/my-orders` | FR-11 - Xem lịch sử đơn hàng. | Đọc danh sách đơn của đúng người dùng, sắp xếp theo ID giảm dần. |
| Transactional | `PUT /api/orders/:id/cancel` | FR-10 - Máy trạng thái đơn hàng; FR-11 có thao tác hủy. | Cập nhật trạng thái đơn; dùng `orderId` lấy từ response lịch sử đơn. |

Ba API trên không trùng với lựa chọn đã công bố của Vân: `POST /register`, `/api/products/:id`, và `POST /api/checkout`.

## Cấu trúc bài nộp

```text
23127173_HW05_AI_Performance_095/
|- README.md
|- roadmap.md
|- checklist.md
|- checklist/
|- doc/md/                         # báo cáo chính, AI Audit, commit log
|- doc/pdf/                        # bản PDF xuất sau cùng
|- performance/
|  |- test-plans/                  # 3 file .jmx/.js Load, Stress, Spike
|  |- data/                        # CSV credentials/product/order
|  |- raw-jtl/                     # 3 log .jtl nguyên gốc
|  `- html-reports/                # 3 thư mục báo cáo HTML
|- evidence/
|  |- resource-monitor/            # tool + backend monitor cùng khung hình
|  |- hardware/                    # dxdiag/screenfetch và bảng thông số
|  |- endurance/                   # bằng chứng soak test 10-15 phút
|  `- demo-video/                  # liên kết YouTube không công khai
|- issues/                         # ghi nhận GitHub Issues và ảnh
|- agent-skills/                   # Agent Skill + hướng dẫn demo
`- scripts/                        # hướng dẫn đóng gói
```

Chỉ đưa vào bài nộp các log, ảnh, report và video được tạo từ lần chạy thật; không thay thế bằng nội dung do AI tạo.

## Tóm tắt kiểm thử (điền sau khi chạy)

| Kịch bản | Nhóm endpoint | Kết quả | Ngưỡng/RPS | Vị trí bằng chứng |
| --- | --- | --- | --- | --- |
| Load | Login + My orders + Cancel order | Chưa chạy | Chưa xác định | `performance/` |
| Stress | Login + My orders + Cancel order | Chưa chạy | Chưa xác định | `performance/` |
| Spike | Login + My orders + Cancel order | Chưa chạy | Chưa xác định | `performance/` |
| Endurance | Workflow duy trì | Chưa chạy | Chưa xác định | `evidence/endurance/` |

Xem [roadmap.md](roadmap.md) và [checklist.md](checklist.md) để thực hiện tiếp.
