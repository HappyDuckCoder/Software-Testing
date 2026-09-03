# PDF và sơ đồ nộp bài

| File | Nguồn |
| --- | --- |
| `main-report.pdf` | `doc/md/main-report.md` + `doc/pdf/main-report.css` |
| `AI-Audit-Report.pdf` | `doc/md/AI Audit/01_AI-Audit-Report.md` |
| `AI-Critique.pdf` | `doc/md/AI Audit/02_AI-Critique.md` |
| `workflow.png` | `continuous-performance-testing/workflow.png` |

## Xuất PDF báo cáo chính

**Cách 1 — Extension Markdown PDF trong Cursor (khuyến nghị):**

1. Mở `doc/md/main-report.md`.
2. Chuột phải → **Markdown PDF: Export (pdf)**.
3. File xuất vào `doc/pdf/` (cấu hình trong `.vscode/settings.json`).

**Cách 2 — Dòng lệnh:**

```powershell
cd doc/pdf
npm install
$env:PUPPETEER_EXECUTABLE_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
node export-main-report.mjs
node export-audit-pdfs.mjs
```

## Lưu ý

- CSS `main-report.css` tạo cover FIT, bảng có header màu, font Segoe UI/Times New Roman.
- Kiểm tra ảnh workflow và bảng hiển thị đúng trước khi nộp.
- Không xuất PDF từ nội dung AI bịa; chỉ từ markdown đã rà soát.
