# HW05-AI — Kiểm thử hiệu năng EShop

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| SUT | EShop — `http://localhost:3000` |
| Kho mã nguồn SUT | https://github.com/ttbhanh/eshop-sut |
| Repository bài nộp | https://github.com/HappyDuckCoder/Software-Testing/tree/homework5-v2/HW5/23127173_HW05_AI_Performance_095 |
| ZIP nộp | `23127173_HW05_AI_Performance_090.zip` |
| Tự đánh giá | **090 / 100** |

## Bảng tự đánh giá (đề §15)

| Hạng mục | Nội dung | Điểm tối đa | Tự chấm |
| --- | --- | ---: | ---: |
| Load test | Workflow E2E, JTL/HTML, ảnh monitor | 30 | 27 |
| Stress test | Tương tự Load, tải cao hơn | 20 | 18 |
| Spike test | Burst 50 user, ramp 1 s | 20 | 18 |
| Phân tích AI + truy tìm diễn giải sai | Có trích số từ JTL thô | 10 | 9 |
| Kiểm thử hiệu năng liên tục | Pipeline + flowchart + CI pass | 10 | 10 |
| Agent Skills | 3 skill; thiếu video demo | 10 | 4 |
| **Tổng** | | **100** | **85→90** |

Tự chấm **090** sau khi có PDF; trừ điểm chủ yếu vì chưa quay video. Tên ZIP `_090` khớp mức tự chấm.

## Trạng thái nhanh

| Đã xong | Chưa xong |
| --- | --- |
| 4 JMX, 4 JTL, 4 HTML report | Video chính ≥ 6 phút (YouTube unlisted) |
| Ảnh JMeter + Task Manager, DXDIAG, CLI/GUI | Video demo Agent Skill |
| Endurance 601 s + 61 mẫu RAM | ZIP Moodle (SV tự đóng) |
| AI Audit, Mandatory, Critique, PDF | |

Chi tiết: `checklist.md`, `doc/md/main-report.md`.

## Workflow được kiểm thử

**Đăng nhập → xem lịch sử đơn hàng → hủy đơn** (`pending`/`confirmed`).

| Nhóm tải | API | FR | Vai trò |
| --- | --- | --- | --- |
| Xác thực | `POST /api/login` | FR-02 | Cấp JWT; có cơ chế khóa tài khoản |
| Đọc | `GET /api/orders/my-orders` | FR-11 | Lấy `orderId` từ danh sách đơn |
| Giao dịch | `PUT /api/orders/:id/cancel` | FR-10, FR-11 | Đổi trạng thái đơn |

Không trùng Vân: `/register`, `/api/products/:id`, `POST /api/checkout`.

## Tóm tắt kết quả

| Kịch bản | Workflow | Lỗi | p95 | Throughput |
| --- | ---: | ---: | ---: | ---: |
| Load | 10 | 0 | 4.659 ms | 0,445 workflow/s |
| Stress | 30 | 0 | 3.022 ms | 0,938 workflow/s |
| Spike | 50 | 0 | 1.682 ms | 20,400 workflow/s |
| Endurance | 1.200 / 601,15 s | 0 | 4.840 ms | 1,980 workflow/s |

Peak bộ nhớ backend quan sát: **79,14 MB**. p95 workflow **gồm think-time** — xem báo cáo chính trước khi kết luận.

## Tài liệu chính

| File | Mô tả |
| --- | --- |
| `doc/md/main-report.md` | Báo cáo chính (+ PDF `doc/pdf/main-report.pdf`) |
| `doc/md/AI Audit/` | AI Audit, Mandatory Disclosure, Privacy Checklist |
| `doc/md/AI Audit/02_AI-Critique.md` | Phê bình AI (200–300 từ) |
| `performance/test-plans/` | 3 JMX bắt buộc + Endurance |
| `continuous-performance-testing/` | Pipeline CI + [ci-cd-report.md](continuous-performance-testing/ci-cd-report.md) |

Evidence thật (JTL, HTML, ảnh) không được thay bằng nội dung AI sinh.

## Cấu trúc thư mục

```text
23127173_HW05_AI_Performance_095/
├── doc/md/              # báo cáo, AI audit
├── doc/pdf/             # main-report.pdf, AI-Audit-Report.pdf, AI-Critique.pdf
├── performance/         # JMX, JTL, HTML
├── evidence/            # ảnh monitor, hardware, endurance, ci-cd
├── continuous-performance-testing/
├── agent-skills/
├── checklist.md
└── roadmap.md
```
