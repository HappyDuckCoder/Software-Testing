# Roadmap hoàn thành HW04-AI Automation — mục tiêu 95/100

## 1. Mục tiêu nộp bài

| Mục | Mục tiêu |
| --- | --- |
| Sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW04-AI — Automation Testing on EShop |
| Mục tiêu điểm | 095/100 |
| SUT | EShop — <https://github.com/ttbhanh/eshop-sut> |
| File nộp | `23127173_HW04_AI_Automation_095.zip` |
| Feature (khớp HW02) | FR-04 (A), FR-11 (B), FR-18 (C) |

Roadmap này giúp hoàn thành HW04 ở mức gần tối đa: script data-driven, ≥ 12 TC/feature, 3 browser, HTML report có `Run by: 23127173`, AI gap analysis, bug evidence, video demo, Agent Skill và AI audit đầy đủ.

---

## 2. Chiến lược ăn điểm theo rubric

| Hạng mục | Điểm | Chiến lược đạt điểm cao |
| --- | ---: | --- |
| Task 1 — Feature A | 25 | ≥ 12 TC từ HW2 FR-04; JSON data; 3 assertion patterns; chạy Chromium/Firefox/WebKit; HTML report; AI gap + sửa script AI. |
| Task 1 — Feature B | 25 | Tương tự FR-11; ưu tiên empty list, sort, status label, cancel button, auth. |
| Task 1 — Feature C | 25 | Tương tự FR-18; admin login, order list, status transition, permission. |
| Task 2 — Video demo | 15 | ≥ 5 phút, tiếng Việt, 1 script E2E + multi-browser + HTML report; nói ≥ 1 fix sau AI review; face-cam hoặc `whoami`/`hostname`. |
| Agent Skills | 10 | Skill tái sử dụng quy trình data-driven + multi-browser; video demo end-to-end trên 1 feature. |
| **Tổng** | **100** | Target 95: đủ 3 feature, 9+ browser runs, audit, ≥ 8 commit script, video, README summary. |

---

## 3. Cấu trúc thư mục

```text
Lab/HW4/23127173_HW04_AI_Automation_095/
├── README.md
├── checklist.md
├── roadmap.md
├── doc/
│   ├── md/
│   │   ├── main-report.md
│   │   ├── appendixA-prompt-log.md
│   │   ├── hw4-consistency-coverage-review.md
│   │   ├── AI Audit/
│   │   │   ├── 01_AI-Audit-Report.md
│   │   │   ├── 02_AI-Critique.md
│   │   │   ├── 03_Mandatory-Disclosure.md
│   │   │   └── 04_AI-Privacy-Checklist.md
│   │   └── Git Commit Log/
│   │       └── git-commit-log.txt
│   └── pdf/
├── requirement/
│   ├── feature-A/          # FR-04
│   ├── feature-B/          # FR-11
│   └── feature-C/          # FR-18
├── automation/             # Repo GitHub công khai (push riêng)
│   ├── playwright.config.ts
│   ├── tests/
│   ├── data/
│   └── reports/
├── agent-skills/
│   └── playwright-automation-builder/
└── evidence/
    ├── html-reports/
    └── demo-video/
```

---

## 4. Map HW02 → HW04 automation

| Feature | HW2 test nguồn | Automation focus | File chính |
| --- | --- | --- | --- |
| FR-04 | Domain + BVA Feature A (30 TC) | Chọn ≥ 12 TC UI/API: name, phone, address, email locked, role injection | `feature-a-profile.spec.ts`, `feature-a-profile.json` |
| FR-11 | Domain + BVA Feature B (22 TC) | Empty orders, sort, status color, cancel, 401/403 | `feature-b-order-history.spec.ts` |
| FR-18 | Domain + BVA Feature C (24 TC) | Admin list, status update, invalid transition, non-admin block | `feature-c-admin-orders.spec.ts` |

---

## 5. Quy trình từng feature (8 bước)

### Bước 1 — Hiểu feature (tái sử dụng HW02)

- Deliverable: `requirement/feature-X/feature-X-report.md`
- Copy/tóm tắt từ HW2; cập nhật phần automation scope.

### Bước 2 — AI sinh script có kiểm soát

- Prompt tách bước: (1) chọn TC từ HW2, (2) thiết kế Page Object/selectors, (3) sinh skeleton data-driven, (4) thêm assertion patterns, (5) AI self-critique.
- Log: `appendixA-prompt-log.md`, `01_AI-Audit-Report.md`

### Bước 3 — Data-driven

- Deliverable: `automation/data/feature-*.json` (≥ 12 rows/feature)
- Cột gợi ý: `id`, `hw2Ref`, `type`, `precondition`, `input`, `expected`, `assertionPattern`

### Bước 4 — Viết/sửa script Playwright

- Deliverable: `automation/tests/feature-*.spec.ts`
- ≥ 3 assertion patterns: `toHaveURL`, `toBeVisible`/`toHaveText`, `toHaveCount`/`toHaveAttribute`/`toHaveCSS`
- Không hardcode mảng test trong spec.

### Bước 5 — Chạy đa trình duyệt

- Mỗi feature chạy trên Chromium, Firefox, WebKit.
- Lệnh: `npm run test:feature-a -- --project=chromium` (và firefox, webkit)
- Lưu HTML report vào `evidence/html-reports/feature-a-chromium/` …

### Bước 6 — Human review + AI gap

- Deliverable: `requirement/feature-X/ai-gap-analysis/ai-gap-analysis.md`
- Ghi: selector fragile, wait flaky, thiếu edge case, assertion yếu.

### Bước 7 — Bug report

- Nếu fail do defect thật: GitHub Issue + screenshot + `bug-report.md`

### Bước 8 — Commit (chỉ `.spec.ts`)

- ≥ 8 commit thay đổi file test; ví dụ:
  - `HW04 feature-A scaffold data-driven tests`
  - `HW04 feature-A fix phone selector after AI review`
  - …

---

## 6. Roadmap theo ngày (10 giờ)

| Ngày | Việc | Output |
| --- | --- | --- |
| 1 | Setup EShop + Playwright; chốt 12 TC/feature từ HW2 | `automation/` chạy được 1 smoke test |
| 2 | Feature A: AI sinh + sửa script + chạy 3 browser | Report A + 3 HTML |
| 3 | Feature B: tương tự | Report B + 3 HTML |
| 4 | Feature C: tương tự | Report C + 3 HTML |
| 5 | Video demo + Agent Skill + tổng hợp report/audit/PDF/zip | Nộp Moodle |

---

## 7. Definition of Done

| Mục | Điều kiện |
| --- | --- |
| Feature report | Khớp HW02, có automation scope |
| Script | ≥ 12 TC/feature, data JSON, ≥ 3 assertion patterns |
| Browser | 9 runs (3×3), HTML có `Run by: 23127173` + ISO timestamp |
| AI gap | ≥ 2 gap rõ/feature |
| Bug | Issue + screenshot nếu có defect |
| Video | ≥ 5 phút, tiếng Việt, authorship proof |
| Git | ≥ 8 commit `.spec.ts`; log trong txt |
| Audit | Prompt/output đầy đủ; Critique 200–300 từ |

---

## 8. Rủi ro mất điểm

| Rủi ro | Cách né |
| --- | --- |
| Hardcode data trong spec | Dùng `automation/data/*.json` |
| Một prompt “viết hết script” | Tách prompt theo bước kỹ thuật |
| HTML report thiếu StudentID | Kiểm tra `metadata` trong `playwright.config.ts` |
| Commit README không tính | Chỉ đếm commit đổi `.spec.ts` |
| Video thiếu `whoami`/face-cam | Quay terminal đầu video |
| Thiếu PDF / zip sai tên | Export trước khi zip |

---

## 9. Prompt khởi tạo (đã audit)

Prompt gốc (17/08/2026):

```text
đọc lại requirement và lên plan, soạn checklist, cấu trúc thư mục và tạo các file tương ứng để tôi được 95/100 điểm vào Lab\HW4\23127173_HW04_AI_Automation_095

bắt chước cách cấu trúc thư mục của HW3 và các tính năng ở HW2

bổ sung AI audit
```

Verdict: **INCOMPLETE** — AI chỉ tạo khung thư mục, roadmap, checklist và template; sinh viên vẫn phải chạy SUT, hoàn thiện script, quay video, push GitHub và export PDF.
