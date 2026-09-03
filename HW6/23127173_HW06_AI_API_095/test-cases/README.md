# Test case và tóm tắt kết quả

Thư mục này chứa ma trận **120 test case** (40/API × 3 API) và bản map sang request thực thi.

## File chính

| File | Nội dung |
| --- | --- |
| `test-case-matrix.md` | Danh sách ID, endpoint, mô tả tiếng Việt, nguồn AI/sinh viên |
| `execution-mapping.md` | Điều kiện, request, oracle theo **đặc tả EShop** (không theo code) |
| `oracle-execution.json` | Map oracle + body cho generator Postman |
| `test-case-source.csv` | Bản CSV import Excel |
| `23127173_HW06_test-summary-20260903.xlsx` | **Test summary** — 120 TC, cột PASS/FAIL từ Newman 03/09 |

## Quy ước

- **35 TC AI / API:** sinh viên đã duyệt toàn bộ, không giữ cột verdict.
- **5 TC sinh viên / API:** bổ sung khoảng trống AI (retry, Unicode, token lỗi, emoji, body lạ…).
- Oracle tham chiếu: `Eshop/api_specification.md`, `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02, SEC-03, SEC-06).

## Script

```bash
node test-cases/scripts/generate-matrix.mjs          # ma trận + CSV + oracle-execution.json
node test-cases/scripts/generate-excel-summary.mjs   # Excel sau npm run test
```

Kết quả Excel mới nhất: **108 PASS / 12 FAIL** (khớp Newman oracle spec).
