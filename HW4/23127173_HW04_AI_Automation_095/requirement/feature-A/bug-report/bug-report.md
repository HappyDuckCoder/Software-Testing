# Bug Report — Feature A (FR-04)

> Defect phát hiện bởi automation HW04 (oracle = spec FR-04). GitHub Issue: `[CHƯA TẠO]`.

## 1. Tổng quan

| Bug ID | Tóm tắt | Severity | Auto TC fail | HW2 ref | HTML evidence |
| --- | --- | --- | --- | --- | --- |
| BUG-A-01 | Regex phone UI ≠ spec FR-04 | Major | A-AUTO-06,08,12,20,21,23,24 | A-DT-06/08/12, A-BVA-02/03/05/06 | `evidence/html-reports/feature-a-chromium/` |
| BUG-A-02 | API cho user đổi `role` → admin | Critical | A-AUTO-17 | A-DT-17 | `evidence/html-reports/feature-a-chromium/` |

Chi tiết mô tả, steps, root cause: `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-A/bug-report/bug-report.md`.

## 2. BUG-A-01 — Phone validation sai spec

**Expected (spec):** Số bắt đầu `0`, dài 10–11 chữ số; từ chối số không bắt đầu `0`.  
**Actual (UI):** Regex `^[1-9][0-9]{8,9}$` trong `Profile.jsx` — đảo ngược quy tắc.  
**Automation:** 8 fail ổn định trên cả 3 browser (22P/8F).

## 3. BUG-A-02 — Role escalation qua API

**Expected:** `PUT /api/users/me` không cho user tự đổi `role`.  
**Actual:** API chấp nhận `role: admin`.  
**Automation:** A-AUTO-17 fail trên cả 3 browser.

## 4. Screenshot

Ảnh HW2 manual: `Lab/HW2/.../feature-A/bug-report/screenshots/` (`BUG-A-01-*.png`, `BUG-A-02-*.png`).  
Fail automation: `requirement/feature-A/automation/html-reports/feature-a-chromium/index.html`.  
Screenshot: `bug-report/screenshots/automation-fail-chromium-*.png`.
