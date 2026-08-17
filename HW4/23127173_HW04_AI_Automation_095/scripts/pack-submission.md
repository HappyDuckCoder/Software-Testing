# Đóng gói zip nộp bài (PowerShell)

Chạy từ thư mục **cha** của `23127173_HW04_AI_Automation_095/`:

```powershell
$src = "23127173_HW04_AI_Automation_095"
$dest = "23127173_HW04_AI_Automation_095.zip"

# Loại theo .gitignore + node_modules
$exclude = @(
  'node_modules',
  '.env',
  'test-results',
  'playwright-report',
  'blob-report',
  '.git'
)

# Cần Compress-Archive hoặc 7z; ví dụ thủ công:
# 1. Xóa automation/node_modules nếu có
# 2. Không copy automation/.env
# 3. Giữ evidence/html-reports/ (9 folders)
# 4. Giữ evidence/execution-summary.json
```

## Checklist trước khi zip

| Loại | Lý do |
| --- | --- |
| `automation/node_modules/` | Cài lại bằng `npm install` |
| `automation/.env` | Chứa password — chỉ giữ `.env.example` |
| `automation/test-results/` | Screenshot/video fail tạm, rất nặng |
| `automation/reports/html/` | Bản copy đã có trong `evidence/html-reports/` |
| `evidence/html-reports/**/*.webm` | Video đính kèm Playwright (~227 file, ~15MB) — **không commit git** |
| `evidence/html-reports/**/*.png` | Screenshot fail trong report — optional, đã ignore cho git |

## Phải có trong zip

| Path | Mục đích |
| --- | --- |
| `evidence/html-reports/feature-*-*/index.html` | 9 browser runs |
| `evidence/execution-summary.json` | Số liệu tổng |
| `automation/data/*.json` | 76 TC data-driven |
| `automation/tests/*.spec.ts` | Script E2E |
| `doc/md/main-report.md` | Báo cáo |
| `doc/md/AI Audit/` | AI Audit |
