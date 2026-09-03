<div class="cover">

**Khoa Công nghệ Thông tin (FIT) — Trường ĐH Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Báo cáo kiểm thử hiệu năng — HW05-AI

| | |
| --- | --- |
| **Họ tên** | Trần Hải Đức |
| **MSSV** | 23127173 |
| **Hệ thống** | EShop API — `http://localhost:3000` |
| **Ngày chạy chính** | 31/08/2026 |
| **Công cụ** | Apache JMeter 5.6.3, Task Manager, DXDIAG |
| **Kho mã nguồn** | [Software-Testing / HW5](https://github.com/HappyDuckCoder/Software-Testing/tree/homework5-v2/HW5/23127173_HW05_AI_Performance_088) |

</div>

---

## Tóm tắt kết quả

| Chỉ số | Giá trị |
| --- | --- |
| Workflow E2E | Đăng nhập → xem đơn của tôi → hủy đơn |
| Kịch bản bắt buộc | Load · Stress · Spike (cùng workflow) |
| Kịch bản bổ sung | Endurance ~10 phút (601,15 giây) |
| Tổng workflow đã chạy | 10 + 30 + 50 + 1.200 = **1.290** |
| Lỗi HTTP / parent | **0** trên mọi lần chạy |
| Ngưỡng bền quan sát | **1,980 workflow/s** (endurance, 10 luồng) |
| Peak bộ nhớ backend | **79,14 MB** working set (61 mẫu/10 giây) |
| Tự đánh giá | **088 / 100** (chưa có video) |

**Lưu ý quan trọng:** p95 của transaction cha **bao gồm think-time**, không phải độ trễ backend thuần. Không suy diễn RPS thành năng lực production.

---

## 1. Mục tiêu, hệ thống và môi trường

Bài tập kiểm thử hiệu năng workflow REST đầu-cuối trên EShop qua bốn kịch bản (Load, Stress, Spike, Endurance), phân tích nhật ký JTL thô và đề xuất kiểm thử hiệu năng liên tục. Backend EShop dùng SQLite cục bộ. Trước mỗi lần chạy ngắn, dữ liệu được reset và seed bằng script `reset-seed-hw5.mjs`.

| Thành phần | Giá trị đã xác minh |
| --- | --- |
| Máy chạy | ASUS TUF Gaming A15 FA506NFR_FA506NFR |
| CPU | AMD Ryzen 7 7435HS — 8 nhân / 16 luồng logic, 3,10 GHz |
| RAM | 15,82 GiB |
| Hệ điều hành | Windows 11 Home 64-bit, 10.0.26200 |
| SUT / máy sinh tải | Backend EShop local; JMeter 5.6.3; Node.js |

Ảnh DXDIAG xác nhận cấu hình phần cứng: `evidence/hardware/dxdiag-hardware-20260831.png`.

---

## 2. Workflow và ba nhóm API

Workflow tái sử dụng phạm vi HW2, **không trùng** bộ API của Vân (`/register`, `/api/products/:id`, `POST /api/checkout`):

| Bước | Nhóm tải | API | Dữ liệu vào/ra | FR liên quan |
| --- | --- | --- | --- | --- |
| 1 | Xác thực | `POST /api/login` | CSV `email,password` → JWT | FR-02 |
| 2 | Đọc | `GET /api/orders/my-orders` | JWT → danh sách đơn → `orderId` | FR-11 |
| 3 | Giao dịch | `PUT /api/orders/:id/cancel` | JWT + `orderId` → trạng thái `canceled` | FR-10, FR-11 |

Mỗi người dùng ảo dùng một tài khoản riêng. Script seed tạo đơn `pending`/`confirmed` để trích `orderId` động, không hard-code ID. CSV local không chứa tài khoản thật và bị git-ignore.

---

## 3. Thiết kế bằng AI và rà soát thủ công

AI được dùng **theo từng bước** (không một prompt chung) để chọn workflow, dựng kế hoạch JMeter, seed dữ liệu và phân tích JTL — chi tiết trong AI Audit. Bốn kế hoạch sinh từ `generate-jmeter-plans.mjs`, sau đó được kiểm tra XML và sửa lỗi trước khi chạy.

Ba kế hoạch bắt buộc dùng **ba loại listener khác nhau**:

| Kịch bản | Tệp kế hoạch | Luồng / ramp-up / vòng lặp | Think-time | Listener | Mục đích |
| --- | --- | --- | --- | --- | --- |
| Load | `23127173_Load_20260831.jmx` | 10 / 20 s / 1 | 1,5 s | View Results Tree | Tải nhẹ, tránh burst ban đầu |
| Stress | `23127173_Stress_20260831.jmx` | 30 / 30 s / 1 | 1,0 s | Summary Report | Tải cao hơn Load |
| Spike | `23127173_Spike_20260831.jmx` | 50 / 1 s / 1 | 0,5 s | Aggregate Report | Tăng đột biến có chủ đích |
| Endurance | `23127173_Endurance_20260831.jmx` | 10 / 30 s / 120 | 1,6 s | Summary Report (bổ sung) | Soak 601,15 s |

**Rà soát thủ công:** Listener do AI sinh lần đầu có thuộc tính `grpThreads`/`groupThreads` không tương thích JMeter 5.6.3 — đã bỏ cấu hình save-service tùy biến và xác nhận JMX chạy được. Credentials đều hợp lệ nên **không phát sinh khóa tài khoản**; quy trình reset/seed được ghi trong `evidence/seed-reset.md`.

### Quy trình tái lập

1. `node scripts/reset-seed-hw5.mjs` — 50 tài khoản, 600 đơn test.
2. Endurance: `HW5_ACCOUNT_COUNT=1500` và `HW5_ORDERS_PER_ACCOUNT=1`.
3. JMeter non-GUI: `-Jhw5.data.file=<CSV>`, `-l <JTL>`, `-e -o <HTML>`.
4. Một lần chạy **hợp lệ** khi mọi parent transaction và ba HTTP sampler đều `success=true`/HTTP 200, CSV đủ dòng, JTL/HTML cùng một lần chạy.

---

## 4. Bằng chứng và quy ước số liệu

Nhật ký JTL thô và báo cáo HTML là nguồn chính. **Workflow** chỉ đếm transaction cha `E2E login - orders - cancel`; mỗi workflow có ba HTTP sampler nên JTL gốc có bốn sample/workflow. p95 tính nearest-rank từ dòng parent trong JTL thô.

| Kịch bản | JTL thô (nộp) | JTL cha (lọc) | Báo cáo HTML | Workflow cha / tổng sample |
| --- | --- | --- | --- | ---: |
| Load | `23127173_Load_20260831.jtl` | `*_Load_*_parents-only.jtl` | `html-reports/23127173_Load_20260831/` | 10 / 40 |
| Stress | `23127173_Stress_20260831.jtl` | `*_Stress_*_parents-only.jtl` | `html-reports/23127173_Stress_20260831/` | 30 / 120 |
| Spike | `23127173_Spike_20260831.jtl` | `*_Spike_*_parents-only.jtl` | `html-reports/23127173_Spike_20260831/` | 50 / 200 |
| Endurance | `23127173_Endurance_20260831.jtl` | `*_Endurance_*_parents-only.jtl` | `html-reports/23127173_Endurance_20260831/` | 1.200 / 4.800 |

Bản `*_parents-only.jtl` do script `scripts/extract-parent-jtl.ps1` lọc từ JTL gốc — **không thay thế** log thô; dùng khi cần xem đúng 1.200 (hoặc 10/30/50) dòng workflow.

**Ảnh minh chứng:**

- JMeter + Task Manager cùng khung: `evidence/resource-monitor/` (Load, Stress, Spike, Endurance).
- Giao diện CLI/GUI JMeter: `evidence/jmeter-ui/` (8 ảnh).

**Kiểm tra chéo:** Baseline comparator đọc `23127173_Endurance_20260831.jtl` — 1.200 workflow cha, p95 4.840 ms, tỷ lệ lỗi 0%, tăng p95 3,58% so với Load 4.659 ms (dưới ngưỡng 20%).

---

## 5. Kết quả Load, Stress và Spike

| Kịch bản | Workflow | Lỗi | Trung bình | p95 | Max | Throughput |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Load | 10 | 0 | 4.536,80 ms | 4.659 ms | 4.659 ms | 0,445 workflow/s |
| Stress | 30 | 0 | 3.021,87 ms | 3.022 ms | 3.123 ms | 0,938 workflow/s |
| Spike | 50 | 0 | 1.548,66 ms | 1.682 ms | 1.714 ms | 20,400 workflow/s |

Không có lỗi HTTP. Ví dụ Load: endpoint trung bình login 5,8 ms, my-orders 3,0 ms, cancel 12,3 ms — nhưng parent trung bình 4.536,8 ms vì Constant Timer nằm trong transaction. Spike throughput cao do ramp 1 giây và think-time nhỏ; **không chứng minh** năng lực bền vững.

---

## 6. Endurance và ngưỡng quan sát

Endurance hoàn tất **601,15 giây**: 10 luồng × 120 vòng = 1.200 workflow cha, 4.800 sample, 0 lỗi.

| Chỉ số | Giá trị |
| --- | --- |
| p95 workflow cha | 4.840 ms |
| Throughput JMeter | 1,980 workflow/s |
| Endpoint trung bình (login / đọc / hủy) | 2,42 / 2,48 / 16,69 ms |

**Ngưỡng bền quan sát:** 1,980 workflow/s không lỗi trong 601,15 giây — **không phải** RPS tối đa vì chưa tăng tải dần để tìm điểm gãy.

**Giám sát bộ nhớ** (61 mẫu / 10 giây, 620 giây):

| Chỉ số | Min | Trung bình | Peak |
| --- | ---: | ---: | ---: |
| Working set backend Node.js | 76,75 MB | 78,32 MB | **79,14 MB** |
| RAM hệ thống đã dùng | 78,94% | 82,01% | 83,29% |

Chi tiết: `evidence/endurance/endurance-memory-samples-20260831.csv`.

---

## 7. Phân tích AI và chỗ AI diễn giải sai

| AI nói (sai / thiếu) | Giá trị đúng từ JTL | Rà soát thủ công |
| --- | --- | --- |
| "4.800 sample = 4.800 workflow" | 1.200 workflow cha + 3.600 HTTP con | Chỉ đếm dòng parent khi báo RPS |
| "p95 4.840 ms = backend chậm" | Endpoint mean: 2,42 / 2,48 / 16,69 ms | Parent gồm think-time |
| "Spike 20,400 workflow/s = capacity bền" | Spike: 50 user, ramp 1 s; endurance: 10 user, think 1,6 s | Không ngoại suy giữa profile khác nhau |

**Đề xuất tối ưu của AI:**

| Đề xuất | Phân loại | Lý do |
| --- | --- | --- |
| Thêm index DB | Khả thi thử nghiệm | Chưa có query plan, chưa triển khai |
| Bật SQLite WAL | Khả thi benchmark A/B | Chưa có contention đo được |
| Connection pool | Không có căn cứ | SUT SQLite hiện tại không cần pool |

---

## 8. Đề xuất kiểm thử hiệu năng liên tục (Nhiệm vụ 3)

![Luồng kiểm thử hiệu năng liên tục](assets/workflow.png)

Workflow triển khai tại `.github/workflows/github-actions-performance.yml` — **đã chạy thật trên GitHub Actions**.

| Mục | Chi tiết |
| --- | --- |
| Run minh chứng | [Actions run #33755210272](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33755210272) |
| Job | **Load + Stress + Spike** (không smoke) |
| Kết quả | ✅ Success · 6m 40s · 03/09/2026 |
| Artefact | `hw5-performance-jtl-html` (3,07 MB — JTL/HTML ba kịch bản) |
| Ảnh | `evidence/ci-cd/hw5-ci-pass-01`…`03` |
| Báo cáo CI | `continuous-performance-testing/ci-cd-report.md` |

Luồng trên runner:

1. Checkout repo + clone `ttbhanh/eshop-sut`.
2. Cài SUT, JMeter 5.6.3, khởi động backend cổng 3000.
3. **Load** — seed → JMeter → so baseline (gate p95 / error rate).
4. **Stress** — seed lại → JMeter.
5. **Spike** — seed lại (50 account) → JMeter.
6. Upload JTL/HTML.

**Endurance (~601 s)** chỉ chạy local — không đưa vào CI.

**Đánh đổi:** Runner CI khác máy local → baseline Load có thể cần rebaseline; lọc path tiết kiệm chi phí nhưng có thể bỏ sót thay đổi gián tiếp; ngưỡng 20% giảm báo động giả nhưng có thể bỏ lỡ regression nhỏ.

---

## 9. Bảng tự đánh giá (đề §15)

| STT | Tiêu chí | Điểm tối đa | Tự chấm |
| --- | --- | ---: | ---: |
| 1 | Nhiệm vụ 1 — Kiểm thử Load | 30 | 29 |
| 2 | Nhiệm vụ 1 — Kiểm thử Stress | 20 | 19 |
| 3 | Nhiệm vụ 1 — Kiểm thử Spike | 20 | 19 |
| 4 | Nhiệm vụ 2 — Phân tích AI + truy tìm diễn giải sai | 10 | 9 |
| 5 | Nhiệm vụ 3 — Đề xuất kiểm thử hiệu năng liên tục | 10 | 10 |
| 6 | Agent Skills | 10 | 2 |
| | **Tổng** | **100** | **88** |

Tự chấm **088**; video HW5 chính ≥6 phút đã nộp tại [YouTube](https://youtu.be/TF93U3aXK9M). Agent Skills chỉ **2/10** vì không nộp video demo riêng.

---

## 10. Kết luận và trạng thái nộp bài

**Đã có:** bốn JMX, CSV local, reset/seed, bốn JTL thô, bốn báo cáo HTML, ảnh monitor/phần cứng/JMeter, ba Agent Skill, **CI Load+Stress+Spike pass** ([run #33755210272](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33755210272)), AI Audit, AI Critique, PDF báo cáo.

**Không có bug thật** trong các lần chạy → không tạo GitHub Issue (theo đề, không bị trừ điểm).

**Trạng thái trước khi nộp Moodle:**

- Video YouTube HW5 ≥ 6 phút: [https://youtu.be/TF93U3aXK9M](https://youtu.be/TF93U3aXK9M).
- Không nộp video demo Agent Skill riêng; Agent Skills tự chấm 2/10.
- Đóng ZIP `23127173_HW05_AI_Performance_088.zip`.

Tài liệu AI: `doc/md/AI Audit/`. Báo cáo này **không thay thế** artefact thô (JTL, HTML, ảnh).
