# PDF & sơ đồ nộp bài

| File | Nguồn |
| --- | --- |
| `main-report.pdf` | `doc/md/main-report.md` + `doc/pdf/main-report.css` |
| `hw6-api-testing-workflow.png` | Flowchart workflow (tự vẽ) |

## Xuất PDF báo cáo chính

```powershell
cd api-testing
npm run export:report-pdf
```

Hoặc extension **Markdown PDF** trong Cursor: mở `doc/md/main-report.md` → Export PDF (output: `doc/pdf/`).

## Xuất lại AI Audit và Critique

Mở từng Markdown trong Cursor và dùng extension **Markdown PDF**. Khi cần chạy bằng CLI trên Windows có Chrome cài sẵn:

```powershell
cd api-testing
$env:PUPPETEER_EXECUTABLE_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
node ../doc/pdf/export-audit-pdfs.mjs
```

Hai file đích là `AI-Audit-Report.pdf` và `AI-Critique.pdf` trong thư mục này. Biến môi trường trên cũng được `export-main-report.mjs` hỗ trợ khi Puppeteer chưa có Chrome trong cache.
