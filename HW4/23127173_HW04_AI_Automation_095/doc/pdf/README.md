Export PDF từ Markdown bằng Pandoc/XeLaTeX trước khi nộp:

- `main-report.pdf` ← `doc/md/main-report.md`
- `AI-Audit-Appendix.pdf` ← gộp `doc/md/AI Audit/*.md` (tùy chọn)

```bash
# Ví dụ (chạy từ thư mục doc/md):
pandoc main-report.md -o ../pdf/main-report.pdf --pdf-engine=xelatex -V lang=vi-VN
```
