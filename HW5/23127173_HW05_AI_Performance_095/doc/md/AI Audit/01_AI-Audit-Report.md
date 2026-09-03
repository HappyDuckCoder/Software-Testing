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

<div class="audit-entry">

#### AI-001 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “dựa vào Lab\\HW5\\requirement\\requirement.pdf hãy dịch lại vào Lab\\HW5\\requirement\\requirement.md” |
| Output AI | Dịch toàn bộ yêu cầu HW05 từ PDF sang Markdown tiếng Việt. |
| Verdict / SV | **HỢP LỆ — soạn tài liệu.** SV phải đối chiếu bản dịch với PDF gốc; không phải bằng chứng thực thi. |

</div>

<div class="audit-entry">

#### AI-002 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “tạo thư mục nộp bài giống hw4; sau đó tạo file roadmap và checklist cho hw5; tạo các file và thư mục nộp bài cần thiết trước, sau đó chờ tôi; cập nhật ai audit; commit” |
| Output AI | Khởi tạo khung bài nộp HW05, roadmap, checklist và các template tài liệu/audit. |
| Verdict / SV | **CHƯA HOÀN THÀNH — chỉ setup.** SV phải chọn endpoint, chạy test thật, thu evidence, review AI. |

</div>

<div class="audit-entry">

#### AI-003 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “chọn tôi 3 api phù hợp có liên quan đến hw2... không được trùng với [Vân: `/register`, `/api/products/:id`, `POST /api/checkout`]” |
| Output AI | Chọn workflow `POST /api/login` → `GET /api/orders/my-orders` → `PUT /api/orders/:id/cancel`; cập nhật tài liệu. |
| Verdict / SV | **HỢP LỆ — chọn phạm vi.** SV phải xác minh endpoint/port và dữ liệu đơn khi SUT chạy. |

</div>

<div class="audit-entry">

#### AI-004 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “các api đó làm gì, cập nhật doc, cập nhật aiaudit” |
| Output AI | Bổ sung mô tả chức năng, JWT, orderId, trạng thái đơn, rủi ro lockout vào tài liệu HW5. |
| Verdict / SV | **HỢP LỆ — tài liệu.** SV phải đối chiếu behavior với SUT trước khi thiết kế assertion. |

</div>

<div class="audit-entry">

#### AI-005 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “tạo các skill cần thiết trước, cập nhật aiaudit, commit” |
| Output AI | Tạo ba Agent Skill: workflow performance, JMeter E2E plan, quản lý dữ liệu giao dịch. |
| Verdict / SV | **HỢP LỆ — quy trình.** Skill không tạo bằng chứng; SV phải demo và quay video. |

</div>

<div class="audit-entry">

#### AI-006 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “repo Eshop đã tồn tại ở thư mục Eshop; hãy reset db và seed các data phù hợp rồi chạy server...” |
| Output AI | Thiết kế script reset/seed: 50 account `hw5.perf.*`, 12 đơn/account, CSV local git-ignore. |
| Verdict / SV | **CHƯA HOÀN THÀNH — chuẩn bị.** Chưa ghi thành công cho đến khi script chạy và endpoint được kiểm tra. |

</div>

<div class="audit-entry">

#### AI-007 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | Tiếp tục reset DB, seed data và chạy server cho HW5. |
| Output AI | Backend cổng 3000; 50 account, 600 đơn; smoke login → my-orders → cancel thành công. |
| Verdict / SV | **HỢP LỆ — thực thi smoke.** Không phải Load/Stress/Spike; không suy ra số liệu hiệu năng. |

</div>

<div class="audit-entry">

#### AI-008 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “đã tải jmeter rồi, hãy làm ... tạo/run 3 plan, endurance, phân tích log...” |
| Output AI | Tạo JMX Load/Stress/Spike/Endurance; CSV, JWT/orderId, listener riêng. |
| Verdict / SV | **CHƯA HOÀN THÀNH — chưa chạy JMeter.** Không tìm thấy `jmeter.bat` trong PATH. |

</div>

<div class="audit-entry">

#### AI-009 · 31/08/2026 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “ok tải jmeter và chạy, tự chụp minh chứng giúp tôi” |
| Output AI | JMeter 5.6.3; 4 JTL, 4 HTML, ảnh monitor; sửa listener tương thích. |
| Verdict / SV | **HỢP LỆ — thực thi.** Metrics từ raw JTL; không suy diễn RPS tối đa. |

</div>

<div class="audit-entry">

#### AI-010 · 31/08/2026 · Codex (GPT-5) + ImageGen

| Trường | Nội dung |
| --- | --- |
| Prompt | Pipeline Continuous Performance Testing và ảnh workflow. |
| Output AI | GitHub Actions proposal, baseline comparator, gate p95/error rate. |
| Verdict / SV | **HỢP LỆ — đề xuất.** Đã triển khai CI thật — xem AI-020, AI-021. |

</div>

<div class="audit-entry">

#### AI-011 · 31/08/2026 22:26 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Review và hoàn thiện lại main-report; cập nhật audit.” |
| Output AI | Viết lại báo cáo chính; sửa diễn giải think-time vs backend latency. |
| Verdict / SV | **HỢP LỆ — rà soát doc.** |

</div>

<div class="audit-entry">

#### AI-012 · 31/08/2026 22:47 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Bổ sung ảnh JMeter + Task Manager; ảnh dxdiag; đo memory.” |
| Output AI | Ảnh monitor 4 scenario; DXDIAG; 61 mẫu RAM endurance. |
| Verdict / SV | **HỢP LỆ — evidence.** Peak 79,14 MB chỉ là quan sát workload. |

</div>

<div class="audit-entry">

#### AI-013 · 31/08/2026 22:54 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “cap 4 ảnh terminal cmd và 4 ảnh gui jmeter.” |
| Output AI | 8 ảnh CLI/GUI JMeter cho 4 kịch bản. |
| Verdict / SV | **HỢP LỆ — evidence giao diện.** |

</div>

<div class="audit-entry">

#### AI-014 · 31/08/2026 22:56 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Review lại folder nộp … xóa thư mục dư.” |
| Output AI | Xóa thư mục rỗng `checklist/`; giữ artefact cần thiết. |
| Verdict / SV | **HỢP LỆ — dọn dẹp.** |

</div>

<div class="audit-entry">

#### AI-015 · 31/08/2026 23:01 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Review lại báo cáo, hoàn thiện hơn, cập nhật audit, commit.” |
| Output AI | Bổ sung quy trình tái lập, tiêu chí validity, baseline cross-check. |
| Verdict / SV | **HỢP LỆ — doc review.** |

</div>

<div class="audit-entry">

#### AI-016 · 31/08/2026 23:05 · Codex (GPT-5)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Cho kịch bản quay HW5 chính…” |
| Output AI | Kịch bản video 8–9 phút với lệnh cụ thể. |
| Verdict / SV | **HỢP LỆ — hướng dẫn quay.** |

</div>

<div class="audit-entry">

#### AI-017 · 03/09/2026 · Cursor (Composer)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Kiểm tra HW5; sửa doc tiếng Việt; xuất PDF; Mandatory; commit.” |
| Output AI | Viết lại báo cáo, README, Mandatory; CSS + PDF; checklist. |
| Verdict / SV | **HỢP LỆ — tài liệu.** Video/ZIP do SV. |

</div>

<div class="audit-entry">

#### AI-018 · 03/09/2026 · Cursor (Composer)

| Trường | Nội dung |
| --- | --- |
| Prompt | “Sửa PDF Audit/Critique xấu; CSS landscape; cover FIT.” |
| Output AI | CSS audit/critique; xuất lại 4 file PDF HW5+HW6. |
| Verdict / SV | **HỢP LỆ — định dạng PDF.** Không đổi nội dung audit. |

</div>

<div class="audit-entry">

#### AI-019 · 03/09/2026 · Cursor (Composer)

| Trường | Nội dung |
| --- | --- |
| Prompt | «lỗi PDF audit — bảng vỡ, chữ dính liền» |
| Output AI | Chuyển 18 mục audit sang layout thẻ 2 cột; sửa CSS portrait; xuất lại PDF. |
| Verdict / SV | **HỢP LỆ — sửa hiển thị PDF.** Không đổi nội dung audit. |

</div>

<div class="audit-entry">

#### AI-020 · 03/09/2026 · Cursor (Composer)

| Trường | Nội dung |
| --- | --- |
| Prompt | «Sửa CI performance: chạy Load+Stress+Spike thật; lỗi cd Eshop/backend» |
| Output AI | Workflow checkout `eshop-sut`; path `HW5/...`; JMeter 5.6.3; seed trước mỗi kịch bản; `HW5_BACKEND_DIR` trong reset-seed. |
| Verdict / SV | **HỢP LỆ — CI.** Run [#33755210272](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33755210272) Success 6m40s. |

</div>

<div class="audit-entry">

#### AI-021 · 03/09/2026 · Cursor (Composer)

| Trường | Nội dung |
| --- | --- |
| Prompt | «Cập nhật minh chứng CI cho HW5; cập nhật audit» |
| Output AI | `ci-cd-report.md`, ảnh `evidence/ci-cd/`, cập nhật main-report §8, README, checklist. |
| Verdict / SV | **HỢP LỆ — evidence.** Link run + 3 ảnh; artefact `hw5-performance-jtl-html`. |

</div>

## 3. Quy tắc cập nhật

Mỗi lần dùng AI tiếp theo, thêm một dòng: ngày giờ, công cụ, prompt, đầu ra, verdict, lý do và phần SV đã kiểm chứng. Không ghi dữ liệu thực thi chưa xảy ra.
