# Bug Report — Feature C (FR-18)

> Defect phát hiện bởi automation HW04 (oracle = spec FR-18/FR-10). GitHub Issue: `[CHƯA TẠO]`.

## 1. Tổng quan

| Bug ID | Tóm tắt | Severity | Auto TC fail | HW2 ref | HTML evidence |
| --- | --- | --- | --- | --- | --- |
| BUG-C-01 | User token truy cập admin orders API | Critical | C-AUTO-04 | C-DT-04 | `evidence/html-reports/feature-c-chromium/` |
| BUG-C-02 | `canceled → delivered` + nút terminal | Major | C-AUTO-12,16,22 | C-DT-12/16, C-BVA-06 | `evidence/html-reports/feature-c-chromium/` |
| BUG-C-03 | XSS địa chỉ giao hàng admin UI | Critical | C-AUTO-15,24 | C-DT-15, C-BVA-08 | `evidence/html-reports/feature-c-chromium/` |

Chi tiết: `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-C/bug-report/bug-report.md`.

## 2. BUG-C-01 — Admin API không check role

**Expected:** User thường → `GET /api/admin/orders` = 403.  
**Actual:** Trả 200 + danh sách đơn.  
**Automation:** C-AUTO-04 fail cả 3 browser.

## 3. BUG-C-02 — State machine vi phạm FR-10

**Expected:** `canceled` là terminal; `canceled → delivered` = 400.  
**Actual:** Backend/UI cho phép chuyển; nút «Đánh dấu Đã giao» vẫn hiện.  
**Automation:** C-AUTO-12,16,22 fail; Firefox có thêm 5 timeout liên quan transition.

## 4. BUG-C-03 — Stored XSS qua shipping address

**Expected:** Escape HTML trong địa chỉ hiển thị admin.  
**Actual:** Script `<img onerror=alert(1)>` thực thi dialog.  
**Automation:** C-AUTO-15,24 fail; đã sửa handler dialog trong spec sau AI review (AI-018).

## 5. Screenshot

Ảnh HW2: `Lab/HW2/.../feature-C/bug-report/screenshots/` (`BUG-C-01…03-*.png`).  
Automation fail: `requirement/feature-C/automation/html-reports/feature-c-chromium/index.html`.  
Screenshot: `bug-report/screenshots/automation-fail-chromium-*.png`; WebKit artifacts: `automation/test-results/`.
