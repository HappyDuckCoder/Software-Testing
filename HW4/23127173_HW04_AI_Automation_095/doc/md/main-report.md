---
title: "Báo cáo HW04 - Automation Testing on EShop"
author: "Trần Hải Đức — MSSV 23127173"
date: "26/08/2026"
lang: vi-VN
geometry: margin=2.2cm
fontsize: 11pt
---

# Tóm tắt

Báo cáo mô tả quy trình **AI-first** để tự động hóa kiểm thử web EShop cho ba feature đã chọn ở HW02: **FR-04** (hồ sơ cá nhân), **FR-11** (lịch sử đơn hàng user) và **FR-18** (quản lý đơn hàng admin).

| Thành phần | Chi tiết |
| --- | --- |
| Công cụ | Playwright, data-driven JSON, Playwright HTML reporter |
| Browser | Chromium, Firefox, WebKit |
| Oracle | README/spec HW2 — **không** pass theo code buggy |
| Test case | **76** (30 + 22 + 24) |
| Browser runs | **9** (3 × 3 feature) |
| Kết quả tổng | **158 Pass / 53 Fail / 12 Skip / 5 Timeout** |
| Ngày chạy | 17/08/2026 (`npm run test:full-matrix`) |

Fail và skip khớp bug / giới hạn seed đã ghi ở HW2 manual. Human review ghi trong AI gap analysis; AI Critique và AI Audit đính kèm.

# 1. Phạm vi và liên kết HW02

## 1.1 Feature selection

| Pool | Feature ID | TC HW2 | TC HW4 | Thư mục |
| --- | --- | ---: | ---: | --- |
| A | FR-04 | 30 | 30 | `requirement/feature-A/` |
| B | FR-11 | 22 | 22 | `requirement/feature-B/` |
| C | FR-18 | 24 | 24 | `requirement/feature-C/` |

Pool D (mobile) **không** dùng theo đề HW04.

## 1.2 Hệ thống và repository

| Mục | Giá trị |
| --- | --- |
| SUT | EShop — <https://github.com/ttbhanh/eshop-sut> |
| Web / Admin / API | `:5180` / `:5174` / `:3000` |
| Playwright project | `automation/` |
| GitHub issue tracker | <https://github.com/HappyDuckCoder/Software-Testing/issues> (issues #8–#14) |
| Repository automation (public) | <https://github.com/HappyDuckCoder/Software-Testing/tree/main/HW4/23127173_HW04_AI_Automation_095/automation> |
| Nguồn HW2 | `Lab/HW2/23127173_HW02_AI_DomainTesting_095/` |

# 2. Phương pháp (AI-first)

## 2.1 Quy trình từng feature

1. Map 1:1 test case Domain/BVA từ HW2 sang row JSON (`id`, input, `expected.outcome`).
2. Prompt AI **từng bước**: chọn TC → sinh data row → đề xuất selector → assertion → self-critique (không một prompt chung).
3. Sinh spec Playwright đọc JSON qua `loadTestData.ts` — **không** hardcode mảng trong `.spec.ts`.
4. Human review: inspect DOM/API SUT; sửa locator (`profileLocators.ts`, `orderLocators.ts`); chuyển oracle từ code → spec khi phát hiện pass giả.
5. Chạy headed (debug) → full matrix 3 browser → copy evidence.
6. Ghi AI gap analysis + bug report; fail ổn định = defect SUT theo spec.

## 2.2 Assertion patterns (≥ 3)

| Pattern | API Playwright | Ví dụ FR-04 / FR-11 / FR-18 |
| --- | --- | --- |
| URL / navigation | `toHaveURL()` | Chưa login → `/login` |
| Visibility / text | `toBeVisible()`, `toHaveText()` | Message lỗi phone; label trạng thái đơn |
| Count / attribute / state | `toHaveCount()`, `toHaveAttribute()`, `expect(response.status())` | Số dòng đơn; API 403/400 |

## 2.3 Chỉnh sửa tiêu biểu sau human review

| Vấn đề AI | Cách sửa | Feature |
| --- | --- | --- |
| `getByLabel` fail — label không gắn `htmlFor` | `profileLocators.ts`: label + input sibling | A |
| Oracle theo code → 12/12 pass che bug | Chuyển oracle README/spec → 22P/8F | A |
| Port 5173 bị chiếm | `BASE_URL=http://localhost:5180` | All |
| Dialog XSS không handle | `helpers/dialogs.ts` + listener trước assert | C |
| Skip empty-state không ghi lý do | Ghi rõ trong spec + gap analysis | B |

Chi tiết: `requirement/feature-*/ai-gap-analysis/ai-gap-analysis.md`, AI Critique `doc/md/AI Audit/02_AI-Critique.md`.

# 3. Task 1 — Kết quả automation

## 3.1 Cấu trúc artifact

| Artifact | Đường dẫn |
| --- | --- |
| Test data | `automation/data/feature-{a,b,c}-*.json` |
| Spec | `automation/tests/feature-*.spec.ts` |
| Helpers | `automation/helpers/` |
| HTML report (nộp) | `evidence/html-reports/feature-*-{browser}/` |
| Summary JSON | `automation/reports/feature-*/summary-*.json` |
| Execution tổng | `evidence/execution-summary.json` |
| Minh chứng per-feature | `requirement/feature-*/automation/` (index.html + summary) |
| Bug report | `requirement/feature-*/bug-report/bug-report.md` |
| Screenshot fail | `requirement/feature-*/bug-report/screenshots/` |

Metadata HTML: `"Run by": "23127173"` trong `playwright.config.ts` → hiển thị trong report và `summary-*.json`.

## 3.2 Ma trận 9 browser runs

| Feature | Chromium | Firefox | WebKit |
| --- | --- | --- | --- |
| A — FR-04 (30 TC) | 22P / 8F | 22P / 8F | 22P / 8F |
| B — FR-11 (22 TC) | 14P / 4F / 4S | 14P / 4F / 4S | 13P / 5F / 4S |
| C — FR-18 (24 TC) | 18P / 6F | 15P / 4F / 5T | 18P / 6F |

**Tổng:** 158 Pass / 53 Fail / 12 Skip / 5 Timeout. Ma trận chi tiết: `checklist/execution-matrix.md`.

## 3.3 Feature A — FR-04 Quản lý hồ sơ

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 30 (18 Domain + 12 BVA) |
| Kết quả | 22 Pass / 8 Fail (mỗi browser) |
| Bug phát hiện | BUG-A-01 (regex phone UI); BUG-A-02 (role escalation API) |
| Auto TC fail | A-AUTO-06,08,12,17,20,21,23,24 |
| Báo cáo | `requirement/feature-A/feature-A-report.md` |
| Gap analysis | `requirement/feature-A/ai-gap-analysis/` |

## 3.4 Feature B — FR-11 Lịch sử đơn hàng

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 22 (14 Domain + 8 BVA) |
| Kết quả Chromium | 14 Pass / 4 Fail / 4 Skip |
| Bug phát hiện | BUG-B-01 (order detail leak); BUG-B-02 (nút hủy shipping/canceled) |
| Skip có lý do | B-AUTO-01,15,16 (empty/single-order — user seed đã có đơn); B-AUTO-22 (`returned` không seed được) |
| Báo cáo | `requirement/feature-B/feature-B-report.md` |

## 3.5 Feature C — FR-18 Quản lý đơn admin

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 24 (16 Domain + 8 BVA) |
| Kết quả Chromium | 18 Pass / 6 Fail |
| Bug phát hiện | BUG-C-01 (user token admin API); BUG-C-02 (canceled→delivered); BUG-C-03 (XSS địa chỉ) |
| Timeout WebKit | 5 (transition admin — Firefox run) |
| Báo cáo | `requirement/feature-C/feature-C-report.md` |
| Test-results media | `requirement/feature-C/automation/test-results/` |

## 3.6 Bug summary

| Bug ID | Feature | Severity | Mô tả ngắn | GitHub Issue |
| --- | --- | --- | --- | --- |
| BUG-A-01 | FR-04 | Major | Phone regex UI ≠ spec | [#8](https://github.com/HappyDuckCoder/Software-Testing/issues/8) |
| BUG-A-02 | FR-04 | Critical | API cho user đổi role | [#9](https://github.com/HappyDuckCoder/Software-Testing/issues/9) |
| BUG-B-01 | FR-11 | Critical | GET `/api/orders/:id` lộ đơn user khác | [#10](https://github.com/HappyDuckCoder/Software-Testing/issues/10) |
| BUG-B-02 | FR-11 | Major | Nút hủy trên shipping/canceled | [#11](https://github.com/HappyDuckCoder/Software-Testing/issues/11) |
| BUG-C-01 | FR-18 | Critical | User token truy cập admin API | [#12](https://github.com/HappyDuckCoder/Software-Testing/issues/12) |
| BUG-C-02 | FR-18 | Major | State machine canceled→delivered | [#13](https://github.com/HappyDuckCoder/Software-Testing/issues/13) |
| BUG-C-03 | FR-18 | Critical | XSS địa chỉ admin UI | [#14](https://github.com/HappyDuckCoder/Software-Testing/issues/14) |

Screenshot automation và ảnh GitHub issue: `requirement/feature-*/bug-report/screenshots/`. Chi tiết steps/impact: tham chiếu bug report HW2 cùng ID.

## 3.7 Test không tự động hóa / skip

| ID | Loại | Lý do |
| --- | --- | --- |
| B-BVA-08 / B-AUTO-22 | Skip | Status `returned` không seed qua API công khai |
| B-AUTO-01,15,16 | Skip | Empty/single-order — cần DB sạch hoặc user riêng |

# 4. Task 2 — Video demo

| Mục | Giá trị |
| --- | --- |
| Link YouTube (unlisted) | `[CHƯA QUAY]` → ghi tại `agent-skills/demo-videos/link-video.md` |
| Thời lượng | ≥ 5 phút, tiếng Việt |
| Nội dung bắt buộc | E2E headed/headless; ≥ 2 browser; mở HTML report (`Run by: 23127173`); nói ≥ 1 fix sau AI review |
| Xác thực tác giả | Face-cam hoặc terminal `whoami` + `hostname` |

# 5. Agent Skill

| Mục | Path |
| --- | --- |
| Skill | `agent-skills/playwright-automation-builder/SKILL.md` |
| Catalog | `agent-skills/skill-catalog.md` |
| Video minh họa skill | `[CHƯA QUAY]` — cùng hoặc riêng link YouTube |

Quy trình skill: chọn TC HW2 → sinh JSON → spec Playwright → chạy 3 browser → gap analysis → evidence.

# 6. AI Audit & Critique

| Tài liệu | Path | Trạng thái |
| --- | --- | --- |
| AI Audit Report | `doc/md/AI Audit/01_AI-Audit-Report.md` | AI-001…AI-033 |
| AI Critique (200–300 từ) | `doc/md/AI Audit/02_AI-Critique.md` | ✅ |
| Mandatory Disclosure | `doc/md/AI Audit/03_Mandatory-Disclosure.md` | ✅ |
| Privacy Checklist | `doc/md/AI Audit/04_AI-Privacy-Checklist.md` | ✅ (video pending) |
| Prompt log | `doc/md/appendixA-prompt-log.md` | ✅ |

Export PDF audit: `doc/pdf/AI-Audit-Appendix.pdf` (✅ 26/08/2026).

# 7. Git & nộp bài

| Mục | Trạng thái |
| --- | --- |
| GitHub issue tracker | ✅ [Issues #8–#14](https://github.com/HappyDuckCoder/Software-Testing/issues) |
| Repository automation | ✅ [automation/](https://github.com/HappyDuckCoder/Software-Testing/tree/main/HW4/23127173_HW04_AI_Automation_095/automation) |
| Git commit log | ✅ `doc/md/Git Commit Log/git-commit-log.txt` |
| Commit `.spec.ts` (§12) | ✅ **8/8** trên GitHub main |
| Main report PDF | `doc/pdf/main-report.pdf` — ✅ export 26/08/2026 |
| AI Audit PDF | `doc/pdf/AI-Audit-Appendix.pdf` — ✅ export 26/08/2026 |
| Zip nộp | `23127173_HW04_AI_Automation_095.zip` — chưa tạo |

# 8. Tự đánh giá

| STT | Tiêu chí | Max | Tự đánh giá | Ghi chú |
| ---: | --- | ---: | ---: | --- |
| 1 | Task 1 — Feature A | 25 | 24 | 30 TC, gap, bug report |
| 1 | Task 1 — Feature B | 25 | 24 | 22 TC, skip có lý do |
| 1 | Task 1 — Feature C | 25 | 24 | 24 TC, 6 fail bug HW2 |
| 2 | Task 2 — Video | 15 | 14 | Chưa quay — mục tiêu sau nộp |
| 3 | Agent Skills | 10 | 9 | Skill ✅; video skill pending |
| | **Tổng (mục tiêu)** | **100** | **95** | |
| | **Tổng (hiện tại)** | **100** | **~82** | Còn video và bằng chứng push/commit source automation |

# 9. Phụ lục — đường dẫn nhanh

| Loại | Path |
| --- | --- |
| Checklist nộp | `checklist.md` |
| Ma trận execution | `checklist/execution-matrix.md` |
| Consistency review | `doc/md/hw4-consistency-coverage-review.md` |
| HTML reports | `evidence/html-reports/` |
| Execution JSON | `evidence/execution-summary.json` |
| Lệnh full matrix | `cd automation && npm run test:full-matrix` |
