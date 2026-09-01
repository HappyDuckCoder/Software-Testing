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
| Công cụ thực tế | Apache JMeter 5.6.3, Task Manager, DXDIAG |
| Trạng thái | Đã có JMX, raw JTL, HTML reports, ảnh resource/hardware và endurance memory sampling; còn video, PDF và ZIP |

## Workflow được kiểm thử

Workflow đầu cuối được chọn là: **đăng nhập -> xem lịch sử đơn hàng của chính người dùng -> hủy một đơn đang ở trạng thái `pending` hoặc `confirmed`**.

| Loại tải | API được chọn | Liên hệ HW2 | Lý do chọn |
| --- | --- | --- | --- |
| Auth-heavy | `POST /api/login` | Tiền điều kiện xác thực đã dùng khi kiểm thử FR-11/FR-10. | Cấp JWT cho hai request sau và có hành vi account lockout cần quan sát ở Stress/Spike. |
| Read-heavy | `GET /api/orders/my-orders` | FR-11 - Xem lịch sử đơn hàng. | Đọc danh sách đơn của đúng người dùng, sắp xếp theo ID giảm dần. |
| Transactional | `PUT /api/orders/:id/cancel` | FR-10 - Máy trạng thái đơn hàng; FR-11 có thao tác hủy. | Cập nhật trạng thái đơn; dùng `orderId` lấy từ response lịch sử đơn. |

Ba API trên không trùng với lựa chọn đã công bố của Vân: `POST /register`, `/api/products/:id`, và `POST /api/checkout`.

`POST /api/login` trả JWT; `GET /api/orders/my-orders` dùng JWT để đọc các đơn của user và lấy `orderId`; `PUT /api/orders/:id/cancel` dùng JWT + `orderId` để đổi trạng thái đơn thành `canceled`.

## Cấu trúc bài nộp

```text
23127173_HW05_AI_Performance_095/
|- README.md
|- roadmap.md
|- checklist.md
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

## Agent Skills

Ba skill tái sử dụng được đặt trong `agent-skills/`: `performance-testing-and-log-analysis`, `jmeter-e2e-plan-builder` và `transactional-test-data-manager`. Xem `agent-skills/skill-catalog.md`.

## Tóm tắt kiểm thử

| Kịch bản | Nhóm endpoint | Kết quả | Ngưỡng/RPS | Vị trí bằng chứng |
| --- | --- | --- | --- | --- |
| Load | Login + My orders + Cancel order | 10 workflow, 0 lỗi | p95 4,659 ms; 0.445 workflow/s | `performance/raw-jtl/`, `performance/html-reports/` |
| Stress | Login + My orders + Cancel order | 30 workflow, 0 lỗi | p95 3,022 ms; 0.938 workflow/s | `performance/raw-jtl/`, `performance/html-reports/` |
| Spike | Login + My orders + Cancel order | 50 workflow, 0 lỗi | p95 1,682 ms; 20.400 workflow/s | `performance/raw-jtl/`, `performance/html-reports/` |
| Endurance | Workflow duy trì | 1,200 workflow / 601.15 s, 0 lỗi | 1.980 workflow/s; backend peak 79.14 MB | `evidence/endurance/` |

Xem [main report](doc/md/main-report.md) để biết p95 parent có gồm think-time, phạm vi kết luận và evidence đầy đủ. Không suy diễn các RPS trên thành capacity production.

Xem [roadmap.md](roadmap.md) và [checklist.md](checklist.md) để thực hiện tiếp.
