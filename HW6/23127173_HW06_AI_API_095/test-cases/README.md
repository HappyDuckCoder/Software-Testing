# Test case và tóm tắt kết quả

Thư mục này chứa ma trận **120 test case** (40/API × 3 API) và bản map sang request thực thi.

## File chính

| File | Nội dung |
| --- | --- |
| `test-case-matrix.md` | Danh sách ID, endpoint, mô tả tiếng Việt, nguồn AI/sinh viên |
| `execution-mapping.md` | Điều kiện, request, oracle theo **đặc tả EShop** (không theo code) |
| `test-case-source.csv` | Bản CSV để import Excel/workbook |

## Quy ước

- **35 TC AI / API:** sinh viên đã duyệt toàn bộ, không giữ cột verdict.
- **5 TC sinh viên / API:** bổ sung khoảng trống AI (retry, Unicode, token lỗi, emoji, body lạ…).
- Oracle tham chiếu: `Eshop/api_specification.md`, `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02, SEC-03, SEC-06).

## Việc còn lại trước khi nộp

- [ ] Xuất file Excel kèm cột **Kết quả thực tế** sau khi chạy Postman/Newman.
- [ ] Cập nhật Pass/Fail cho từng ID sau mỗi lần chạy compliance/baseline.

Sinh lại ma trận từ script:

```bash
node test-cases/scripts/generate-matrix.mjs
```
