---
title: "Báo cáo HW04 - Automation Testing on EShop"
author: "MSSV 23127173"
date: "17/08/2026"
lang: vi-VN
geometry: margin=2.2cm
fontsize: 11pt
---

# Tóm tắt

Báo cáo mô tả quy trình AI-first để tự động hóa kiểm thử web EShop cho ba feature đã chọn ở HW02: **FR-04** (hồ sơ cá nhân), **FR-11** (lịch sử đơn hàng user) và **FR-18** (quản lý đơn hàng admin). Công cụ: **Playwright**, data-driven từ JSON, chạy **Chromium / Firefox / WebKit**, oracle = **README/spec HW2** (không pass theo code buggy).

**Kết quả thực thi (17/08/2026):** 76 test case thiết kế; **9 browser runs** hoàn tất; tổng **158 Pass / 53 Fail / 12 Skip / 5 Timeout**. Fail khớp bug đã ghi ở HW2 manual.

# 1. Phạm vi và liên kết HW02

| Pool | Feature ID | TC | Mô tả | HW04 |
| --- | --- | ---: | --- | --- |
| A | FR-04 | 30 | Quản lý hồ sơ cá nhân | `requirement/feature-A/` |
| B | FR-11 | 22 | Lịch sử đơn hàng user | `requirement/feature-B/` |
| C | FR-18 | 24 | Quản lý đơn hàng admin | `requirement/feature-C/` |

SUT: EShop — <https://github.com/ttbhanh/eshop-sut>  
Repository automation: `[ĐIỀN URL GITHUB]`

# 2. Phương pháp (AI-first)

## 2.1 Quy trình từng feature

1. Map 1:1 test case Domain/BVA từ HW2.
2. Prompt AI: TC → data row → selector → assertion → self-critique.
3. Data trong `automation/data/*.json` (không hardcode trong spec).
4. Human review selector/oracle; chạy headed rồi multi-browser.
5. Ghi AI gap analysis; fail = defect SUT theo spec.

## 2.2 Assertion patterns (≥ 3)

| Pattern | Ví dụ | Dùng cho |
| --- | --- | --- |
| URL / navigation | `toHaveURL()` | Login redirect |
| Visibility / text | `toBeVisible()`, `toHaveText()` | Label, message |
| Count / attribute / state | `toHaveCount()`, HTTP status | Danh sách đơn, API deny |

# 3. Kết quả Task 1 — Automation

## 3.1 Ma trận 9 browser runs

| Feature | Chromium | Firefox | WebKit |
| --- | --- | --- | --- |
| A (30 TC) | 22P/8F | 22P/8F | 22P/8F |
| B (22 TC) | 14P/4F/4S | 14P/4F/4S | 13P/5F/4S |
| C (24 TC) | 18P/6F | 15P/4F/5T | 18P/6F |

Chi tiết: `checklist/execution-matrix.md`, `evidence/execution-summary.json`.

## 3.2 Feature A — FR-04

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 30 (18 DT + 12 BVA) |
| Chromium | 22 Pass / 8 Fail |
| Bug | BUG-A-01 phone UI; BUG-A-02 role API |
| Data | `automation/data/feature-a-profile.json` |
| Gap | `requirement/feature-A/ai-gap-analysis/` |

## 3.3 Feature B — FR-11

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 22 (14 DT + 8 BVA) |
| Chromium | 14 Pass / 4 Fail / 4 Skip |
| Bug | BUG-B-01 order leak; shipping/canceled cancel button |
| Skip | Empty state + status `returned` không seed được |

## 3.4 Feature C — FR-18

| Chỉ số | Giá trị |
| --- | --- |
| Test case | 24 (16 DT + 8 BVA) |
| Chromium | 18 Pass / 6 Fail |
| Bug | BUG-C-01 admin role; BUG-C-02 transition; BUG-C-03 XSS |

## 3.5 Test không tự động hóa

| ID | Lý do |
| --- | --- |
| B-BVA-08 | Status `returned` không tạo được qua API công khai — `skip` có ghi chú |

# 4. Task 2 — Video demo

| Mục | Giá trị |
| --- | --- |
| Link YouTube | `[CHƯA QUAY]` |
| Thời lượng | ≥ 5 phút |
| Nội dung | Feature A/B/C + multi-browser + HTML report + sửa sau AI review |

# 5. Agent Skill

`playwright-automation-builder` — data-driven + multi-browser + gap analysis.  
Video skill: `agent-skills/demo-videos/link-video.md`

# 6. AI Audit & Critique

- AI Audit: `doc/md/AI Audit/01_AI-Audit-Report.md` (AI-001…AI-017)
- AI Critique: `doc/md/AI Audit/02_AI-Critique.md`
- Prompt log: `doc/md/appendixA-prompt-log.md`

# 7. Tự đánh giá (mục tiêu 95/100)

| STT | Tiêu chí | Max | Tự đánh giá |
| ---: | --- | ---: | ---: |
| 1 | Task 1 — A/B/C | 75 | 72 |
| 2 | Task 2 — Video | 15 | 14 |
| 3 | Agent Skills | 10 | 9 |
| | **Tổng** | **100** | **95** |

# 8. Phụ lục

- HTML reports: `evidence/html-reports/`
- Execution JSON: `evidence/execution-summary.json`
- Git commit log: `doc/md/Git Commit Log/git-commit-log.txt`
