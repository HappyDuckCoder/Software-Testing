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

AI Audit và Critique giữ ở Markdown (`doc/md/AI Audit/`); không bắt buộc xuất PDF riêng.
