# Export PDF (Pandoc + XeLaTeX)

Đã export **26/08/2026**:

| File PDF | Nguồn Markdown |
| --- | --- |
| `main-report.pdf` | `doc/md/main-report.md` |
| `AI-Audit-Appendix.pdf` | Gộp `doc/md/AI Audit/*.md` + `appendixA-prompt-log.md` |

## Lệnh tái tạo (PowerShell)

```powershell
$md  = "doc/md"
$pdf = "doc/pdf"

# Main report
pandoc "$md/main-report.md" -o "$pdf/main-report.pdf" `
  --pdf-engine=xelatex -V lang=vi-VN -V geometry:margin=2.2cm `
  -V fontsize=11pt -V mainfont="Times New Roman"

# AI Audit (thay `\` → `/` trong bản gộp tạm để tránh lỗi LaTeX)
$files = @(
  "$md/AI Audit/01_AI-Audit-Report.md",
  "$md/AI Audit/02_AI-Critique.md",
  "$md/AI Audit/03_Mandatory-Disclosure.md",
  "$md/AI Audit/04_AI-Privacy-Checklist.md",
  "$md/appendixA-prompt-log.md"
)
$tmp = "$pdf/_export-ai-audit-combined.md"
(($files | ForEach-Object { Get-Content $_ -Raw -Encoding UTF8 }) -join "`n`n\\newpage`n`n") -replace '\\','/' |
  Set-Content $tmp -Encoding UTF8
pandoc $tmp -o "$pdf/AI-Audit-Appendix.pdf" `
  --pdf-engine=xelatex -V lang=vi-VN -V geometry:margin=2.2cm `
  -V fontsize=11pt -V mainfont="Times New Roman"
Remove-Item $tmp -Force
```

> Emoji (✅/⏳) có thể hiển thị trống trong PDF — dùng chữ "OK" / "Chua" trong Markdown nếu cần bản in đẹp hơn.
