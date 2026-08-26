# Bug Report — Feature B (FR-11)

> Defect phát hiện bởi automation HW04 (oracle = spec FR-11/FR-10). GitHub Issue: `[CHƯA TẠO]`.

## 1. Tổng quan

| Bug ID | Tóm tắt | Severity | Auto TC fail | HW2 ref | HTML evidence |
| --- | --- | --- | --- | --- | --- |
| BUG-B-01 | `GET /api/orders/:id` lộ đơn user khác | Critical | B-AUTO-13,19 | B-DT-13, B-BVA-05 | `evidence/html-reports/feature-b-chromium/` |
| BUG-B-02 | Nút hủy trên đơn `shipping` / `canceled` | Major | B-AUTO-09,11,21 | B-DT-09/11, B-BVA-07 | `evidence/html-reports/feature-b-chromium/` |

Chi tiết: `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-B/bug-report/bug-report.md`.

## 2. BUG-B-01 — Order detail leak

**Expected:** User chỉ xem đơn của mình — cross-user → 403/404.  
**Actual:** `GET /api/orders/:id` trả 200 + dữ liệu đơn user khác.  
**Automation:** Fail ổn định Chromium/Firefox; WebKit B-AUTO-19 thêm 1 fail.

## 3. BUG-B-02 — Cancel button sai state machine

**Expected (FR-10):** Không hủy đơn `shipping`; không hiện nút hủy khi `canceled`.  
**Actual:** UI vẫn hiển thị «Hủy đơn».  
**Automation:** B-AUTO-09,11,21 fail.

## 4. Screenshot

Ảnh HW2: `Lab/HW2/.../feature-B/bug-report/screenshots/` (`BUG-B-01-*.png`, `WARNING-B-01-*.png`).  
Automation fail: `requirement/feature-B/automation/html-reports/feature-b-chromium/index.html`.  
Screenshot: `bug-report/screenshots/automation-fail-chromium-*.png`.
