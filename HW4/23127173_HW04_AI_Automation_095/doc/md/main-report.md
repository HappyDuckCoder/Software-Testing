---
title: "Báo cáo HW04 - Automation Testing on EShop"
author: "MSSV 23127173"
date: "17/08/2026"
lang: vi-VN
geometry: margin=2.2cm
fontsize: 11pt
---

# Tóm tắt

Báo cáo mô tả quy trình AI-first để tự động hóa kiểm thử web EShop cho ba feature đã chọn ở HW02: **FR-04** (hồ sơ cá nhân), **FR-11** (lịch sử đơn hàng user) và **FR-18** (quản lý đơn hàng admin). Công cụ chính: **Playwright**, data-driven từ file JSON, chạy trên **Chromium / Firefox / WebKit**, báo cáo HTML có metadata `Run by: 23127173`.

_Kết quả thực thi: [ĐIỀN SAU KHI CHẠY TEST — tổng TC, pass/fail, 9 browser runs, số bug]._

# 1. Phạm vi và liên kết HW02

| Pool | Feature ID | Mô tả | Thư mục HW02 | Thư mục HW04 |
| --- | --- | --- | --- | --- |
| A | FR-04 | Quản lý hồ sơ cá nhân | `Lab/HW2/.../feature-A/` | `requirement/feature-A/` |
| B | FR-11 | Lịch sử đơn hàng user | `Lab/HW2/.../feature-B/` | `requirement/feature-B/` |
| C | FR-18 | Quản lý đơn hàng admin | `Lab/HW2/.../feature-C/` | `requirement/feature-C/` |

SUT: EShop — <https://github.com/ttbhanh/eshop-sut>  
Repository automation công khai: `[ĐIỀN URL GITHUB]`

# 2. Phương pháp (AI-first)

## 2.1 Quy trình từng feature

1. Chọn ≥ 12 test case từ Domain/BVA HW02.
2. Prompt AI từng bước: map TC → data row → selector → assertion pattern → self-critique.
3. Lưu data trong `automation/data/*.json` (không hardcode trong spec).
4. Rà soát và sửa script (selector, wait, assertion).
5. Chạy 3 browser; lưu HTML report.
6. Ghi AI gap analysis và bug (nếu có).

## 2.2 Assertion patterns (≥ 3)

| Pattern | Ví dụ Playwright | Dùng cho |
| --- | --- | --- |
| URL / navigation | `expect(page).toHaveURL(...)` | Login redirect, admin route |
| Visibility / text | `expect(locator).toBeVisible()`, `toHaveText()` | Message, label trạng thái |
| Count / attribute / state | `toHaveCount()`, `toHaveAttribute()`, `toBeDisabled()` | Danh sách đơn, email readonly |

# 3. Kết quả Task 1 — Automation

## 3.1 Feature A — FR-04

| Chỉ số | Giá trị |
| --- | --- |
| Test case tự động hóa | 12 (kế hoạch) |
| Đã chạy / Pass / Fail | `[CHƯA CHẠY]` |
| Browser runs | 0 / 3 |
| Data file | `automation/data/feature-a-profile.json` |
| Script | `automation/tests/feature-a-profile.spec.ts` |
| AI gap | `requirement/feature-A/ai-gap-analysis/ai-gap-analysis.md` |

## 3.2 Feature B — FR-11

| Chỉ số | Giá trị |
| --- | --- |
| Test case tự động hóa | 12 (kế hoạch) |
| Đã chạy / Pass / Fail | `[CHƯA CHẠY]` |
| Browser runs | 0 / 3 |

## 3.3 Feature C — FR-18

| Chỉ số | Giá trị |
| --- | --- |
| Test case tự động hóa | 12 (kế hoạch) |
| Đã chạy / Pass / Fail | `[CHƯA CHẠY]` |
| Browser runs | 0 / 3 |

## 3.4 Test không tự động hóa (nếu có)

| ID HW2 | Lý do |
| --- | --- |
| `[ĐIỀN]` | Ví dụ: cần thao tác API trực tiếp ngoài UI, captcha, file upload phức tạp |

# 4. Task 2 — Video demo

| Mục | Giá trị |
| --- | --- |
| Link YouTube (unlisted) | `[ĐIỀN]` |
| Thời lượng | `[≥ 5 phút]` |
| Script demo | `[Feature A/B/C]` |
| Fix sau AI review đã nói trong video | `[ĐIỀN]` |
| Authorship | face-cam / `whoami` + `hostname` |

# 5. Agent Skill

Skill: `playwright-automation-builder` — quy trình data-driven + multi-browser từ feature brief HW2.  
Video demo skill: `agent-skills/demo-videos/link-video.md`

# 6. AI Audit & Critique

- AI Audit: `doc/md/AI Audit/01_AI-Audit-Report.md`
- AI Critique: `doc/md/AI Audit/02_AI-Critique.md`
- Prompt log: `doc/md/appendixA-prompt-log.md`

# 7. Tự đánh giá (mục tiêu 95/100)

| STT | Tiêu chí | Điểm max | Tự đánh giá |
| ---: | --- | ---: | ---: |
| 1 | Task 1 — Feature A | 25 | 24 |
| 1 | Task 1 — Feature B | 25 | 24 |
| 1 | Task 1 — Feature C | 25 | 24 |
| 2 | Task 2 — Video | 15 | 14 |
| 3 | Agent Skills | 10 | 9 |
| | **Tổng** | **100** | **95** |

_Điều chỉnh sau khi chấm lại theo bằng chứng thật._

# 8. Phụ lục

- Git commit log: `doc/md/Git Commit Log/git-commit-log.txt`
- HTML reports: `evidence/html-reports/`
- Bug reports: `requirement/feature-*/bug-report/`
