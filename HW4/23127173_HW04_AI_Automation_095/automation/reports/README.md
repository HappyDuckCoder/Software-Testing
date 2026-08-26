# Playwright reports — cấu trúc lưu kết quả

## Thư mục làm việc (sau cleanup)

| Path | Vai trò |
| --- | --- |
| `feature-{a,b,c}/summary-{browser}.json` | **9 JSON** từng run (giữ cho nộp/git) |
| `../evidence/html-reports/feature-*-*/` | **9 HTML reports** chính thức |
| `../evidence/execution-summary.json` | Ma trận tổng 9 runs |

Playwright tạo tạm `html/` và `../test-results/` mỗi lần chạy — nếu cần dọn, **move** sang `../../_archive/` (không xóa).

## Archive (artefact dư)

Đã move (17/08/2026) → `_archive/2026-08-17-cleanup/`:

| Archive | Nguồn cũ |
| --- | --- |
| `automation-reports-runs/` | `reports/runs/` (trùng evidence) |
| `automation-reports-html-last/` | `reports/html/` (run cuối) |
| `automation-test-results/` | `test-results/` |
| `automation-summary-last.json` | `reports/summary.json` |
| `html-report-media/` | webm/png từ evidence |

## Mở report

```text
Feature A Chromium:  ../../evidence/html-reports/feature-a-chromium/index.html
Feature B Firefox:   ../../evidence/html-reports/feature-b-firefox/index.html
Feature C WebKit:    ../../evidence/html-reports/feature-c-webkit/index.html
```

## Lệnh

```bash
npm run test:full-matrix    # 9 runs → evidence/html-reports/ (strip media)
npm run report              # sau khi chạy test đơn — mở reports/html (tạm)
```
