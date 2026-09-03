# Raw JTL logs

Không chỉnh sửa hoặc tạo giả log gốc. Quy ước tên: `23127173_{Load|Stress|Spike|Endurance}_{YYYYMMDD}.jtl`.

Mỗi workflow E2E ghi **4 dòng** trong JTL gốc: 1 transaction cha `E2E login - orders - cancel` + 3 HTTP sampler. Ví dụ Endurance: **1.200 workflow / 4.800 sample**.

| File | Vai trò |
| --- | --- |
| `23127173_*_20260831.jtl` | **Nguồn chính** — nộp bài, phân tích API từng bước |
| `23127173_*_20260831_parents-only.jtl` | **Bản lọc** — chỉ dòng cha; sinh bằng `scripts/extract-parent-jtl.ps1` |

```powershell
# Endurance (mặc định)
.\scripts\extract-parent-jtl.ps1

# Cả bốn kịch bản
.\scripts\extract-parent-jtl.ps1 -AllScenarios
```

p95 workflow và throughput báo cáo chỉ đếm dòng cha; file `*_parents-only.jtl` giúp đọc nhanh, không thay JTL gốc.
