<div class="cover">

**Khoa Công nghệ Thông tin (FIT) — Trường ĐH Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Báo cáo kiểm toán AI — HW05-AI

<p class="subtitle">Phụ lục bắt buộc · MSSV 23127173 · Trần Hải Đức · Cập nhật 03/09/2026</p>

</div>

## 1. Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Mã bài tập | HW05-AI — Kiểm thử hiệu năng |
| Công cụ AI | Codex (GPT-5); Cursor (Composer) |
| Có dùng AI | Có |

**Tuyên bố:** *I use AI tools for the following tasks.*

## 2. Nhật ký tương tác AI

| ID | Thời gian (UTC+7) | Công cụ AI | Prompt/Yêu cầu | Đầu ra AI | Verdict và phần sinh viên phải kiểm tra |
| --- | --- | --- | --- | --- | --- |
| AI-001 | 31/08/2026 | Codex (GPT-5) | “dựa vào Lab\\HW5\\requirement\\requirement.pdf hãy dịch lại vào Lab\\HW5\\requirement\\requirement.md” | Dịch toàn bộ yêu cầu HW05 từ PDF sang Markdown tiếng Việt. | **HỢP LỆ — soạn tài liệu.** SV phải đối chiếu bản dịch với PDF gốc; không phải bằng chứng thực thi. |
| AI-002 | 31/08/2026 | Codex (GPT-5) | “tạo thư mục nộp bài giống hw4; sau đó tạo file roadmap và checklist cho hw5; tạo các file và thư mục nộp bài cần thiết trước, sau đó chờ tôi; cập nhật ai audit; commit” | Khởi tạo khung bài nộp HW05, roadmap, checklist và các template tài liệu/audit. | **CHƯA HOÀN THÀNH — chỉ setup.** SV phải chọn endpoint, chạy test thật, thu evidence, review AI. |
| AI-003 | 31/08/2026 | Codex (GPT-5) | “chọn tôi 3 api phù hợp có liên quan đến hw2... không được trùng với [Vân: `/register`, `/api/products/:id`, `POST /api/checkout`]” | Chọn workflow `POST /api/login` → `GET /api/orders/my-orders` → `PUT /api/orders/:id/cancel`; cập nhật tài liệu. | **HỢP LỆ — chọn phạm vi.** SV phải xác minh endpoint/port và dữ liệu đơn khi SUT chạy. |
| AI-004 | 31/08/2026 | Codex (GPT-5) | “các api đó làm gì, cập nhật doc, cập nhật aiaudit” | Bổ sung mô tả chức năng, JWT, orderId, trạng thái đơn, rủi ro lockout vào tài liệu HW5. | **HỢP LỆ — tài liệu.** SV phải đối chiếu behavior với SUT trước khi thiết kế assertion. |
| AI-005 | 31/08/2026 | Codex (GPT-5) | “tạo các skill cần thiết trước, cập nhật aiaudit, commit” | Tạo ba Agent Skill: workflow performance, JMeter E2E plan, quản lý dữ liệu giao dịch. | **HỢP LỆ — quy trình.** Skill không tạo bằng chứng; SV phải demo và quay video. |
| AI-006 | 31/08/2026 | Codex (GPT-5) | “repo Eshop đã tồn tại ở thư mục Eshop; hãy reset db và seed các data phù hợp rồi chạy server...” | Thiết kế script reset/seed: 50 account `hw5.perf.*`, 12 đơn/account, CSV local git-ignore. | **CHƯA HOÀN THÀNH — chuẩn bị.** Chưa ghi thành công cho đến khi script chạy và endpoint được kiểm tra. |
| AI-007 | 31/08/2026 | Codex (GPT-5) | Tiếp tục reset DB, seed data và chạy server cho HW5. | Backend cổng 3000; 50 account, 600 đơn; smoke login → my-orders → cancel thành công. | **HỢP LỆ — thực thi smoke.** Không phải Load/Stress/Spike; không suy ra số liệu hiệu năng. |
| AI-008 | 31/08/2026 | Codex (GPT-5) | “đã tải jmeter rồi, hãy làm ... tạo/run 3 plan, endurance, phân tích log...” | Tạo JMX Load/Stress/Spike/Endurance; CSV, JWT/orderId, listener riêng. | **CHƯA HOÀN THÀNH — chưa chạy JMeter.** Không tìm thấy `jmeter.bat` trong PATH. |
| AI-009 | 31/08/2026 | Codex (GPT-5) | “ok tải jmeter và chạy, tự chụp minh chứng giúp tôi” | JMeter 5.6.3; 4 JTL, 4 HTML, ảnh monitor; sửa listener tương thích. | **HỢP LỆ — thực thi.** Metrics từ raw JTL; không suy diễn RPS tối đa. |
| AI-010 | 31/08/2026 | Codex (GPT-5) + ImageGen | Pipeline Continuous Performance Testing và ảnh workflow. | GitHub Actions proposal, baseline comparator, gate p95/error rate. | **HỢP LỆ — đề xuất.** Chưa bật CI thật. |
| AI-011 | 31/08/2026 22:26 | Codex (GPT-5) | “Review và hoàn thiện lại main-report; cập nhật audit.” | Viết lại báo cáo chính; sửa diễn giải think-time vs backend latency. | **HỢP LỆ — rà soát doc.** |
| AI-012 | 31/08/2026 22:47 | Codex (GPT-5) | “Bổ sung ảnh JMeter + Task Manager; ảnh dxdiag; đo memory.” | Ảnh monitor 4 scenario; DXDIAG; 61 mẫu RAM endurance. | **HỢP LỆ — evidence.** Peak 79,14 MB chỉ là quan sát workload. |
| AI-013 | 31/08/2026 22:54 | Codex (GPT-5) | “cap 4 ảnh terminal cmd và 4 ảnh gui jmeter.” | 8 ảnh CLI/GUI JMeter cho 4 kịch bản. | **HỢP LỆ — evidence giao diện.** |
| AI-014 | 31/08/2026 22:56 | Codex (GPT-5) | “Review lại folder nộp … xóa thư mục dư.” | Xóa thư mục rỗng `checklist/`; giữ artefact cần thiết. | **HỢP LỆ — dọn dẹp.** |
| AI-015 | 31/08/2026 23:01 | Codex (GPT-5) | “Review lại báo cáo, hoàn thiện hơn, cập nhật audit, commit.” | Bổ sung quy trình tái lập, tiêu chí validity, baseline cross-check. | **HỢP LỆ — doc review.** |
| AI-016 | 31/08/2026 23:05 | Codex (GPT-5) | “Cho kịch bản quay HW5 chính…” | Kịch bản video 8–9 phút với lệnh cụ thể. | **HỢP LỆ — hướng dẫn quay.** |
| AI-017 | 03/09/2026 | Cursor (Composer) | “Kiểm tra HW5; sửa doc tiếng Việt; xuất PDF; Mandatory; commit.” | Viết lại báo cáo, README, Mandatory; CSS + PDF; checklist. | **HỢP LỆ — tài liệu.** Video/ZIP do SV. |
| AI-018 | 03/09/2026 | Cursor (Composer) | “Sửa PDF Audit/Critique xấu; CSS landscape; cover FIT.” | CSS audit/critique; xuất lại 4 file PDF HW5+HW6. | **HỢP LỆ — định dạng PDF.** Không đổi nội dung audit. |

## 3. Quy tắc cập nhật

Mỗi lần dùng AI tiếp theo, thêm một dòng: ngày giờ, công cụ, prompt, đầu ra, verdict, lý do và phần SV đã kiểm chứng. Không ghi dữ liệu thực thi chưa xảy ra.
