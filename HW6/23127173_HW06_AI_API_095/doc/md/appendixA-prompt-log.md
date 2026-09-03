# Phụ lục A — Nhật ký prompt

Chi tiết audit: `AI Audit/01_AI-Audit-Report.md`.

| ID | Giai đoạn | Mục tiêu | Tool |
| --- | --- | --- | --- |
| AI-001 … AI-016 | 01/09 | Khung, API, Newman, CI, ma trận draft | Codex (GPT-5) |
| AI-017 | 03/09 | Rà tiến độ, Audit/Mandatory FIT | Cursor (Composer 2.5) |
| AI-018 | 03/09 | Ma trận tiếng Việt, oracle spec, 15 TC SV | Cursor (Composer 2.5) |
| AI-019 | 03/09 | Sinh lại TC + collection; khởi động EShop cho retest | Cursor (Composer 2.5) |
| AI-020 | 03/09 | Newman full 120 TC + minh chứng mới | Cursor (Composer 2.5) |
| AI-021 | 03/09 | Postman evidence 5 ảnh | Cursor (Composer 2.5) |
| AI-022 | 03/09 | Oracle đặc tả → fail; minh chứng + commit | Cursor (Composer 2.5) |
| AI-023 | 03/09 | Redesign 120 TC bám spec; fixture riêng; 12 fail Newman | Cursor (Composer 2.5) |
| AI-024 | 03/09 | Review TC + document; bug report có Postman | Cursor (Composer 2.5) |
| AI-025 | 03/09 | Giải thích seed DB / trạng thái SUT | Cursor (Composer 2.5) |
| AI-026 | 03/09 | Giải thích test xanh vs bug report | Cursor (Composer 2.5) |
| AI-027 | 03/09 | Giải thích Postman không export HTML runner | Cursor (Composer 2.5) |
| AI-028 | 03/09 | Xác nhận đồng bộ `api-testing/` sau redesign | Cursor (Composer 2.5) |
| AI-029 | 03/09 | Dọn artifact trùng; giữ bản final 03/09 | Cursor (Composer 2.5) |
| AI-030 | 03/09 | Giải thích lỗi font terminal Newman | Cursor (Composer 2.5) |
| AI-031 | 03/09 | Fix UTF-8 raw output + cập nhật audit đủ prompt | Cursor (Composer 2.5) |
| AI-032 | 03/09 | Thay 5 ảnh Postman Desktop gốc; rà soát evidence thiếu | Cursor (Composer 2.5) |
| AI-033 | 03/09 | Postman Console `X-Student-Id` — ảnh Desktop gốc | Cursor (Composer 2.5) |
| AI-034 | 03/09 | Review doc + commit Postman evidence Desktop | Cursor (Composer 2.5) |
| AI-035 | 03/09 | Excel test summary + PDF + flowchart | Cursor (Composer 2.5) |
| AI-036 | 03/09 | Review toàn bộ doc + đồng bộ AI Audit | Cursor (Composer 2.5) |
| AI-037 | 03/09 | Main report PDF styled + git commit log + commit | Cursor (Composer 2.5) |
| AI-038 | 03/09 | Bổ sung báo cáo §6/§14 + README self-assessment | Cursor (Composer 2.5) |
| AI-039 | 03/09 | 5 ảnh CI GitHub Actions (pass+fail evidence) | Cursor (Composer 2.5) |

## Prompt AI-039 (03/09/2026)

```text
dùng 5 ảnh minh chứng này
```

## Prompt AI-038 (03/09/2026)

```text
bổ sung các thứ liên quan đến báo cáo thì bạn bổ sung cho tôi
cập nhật audit
commit
```

## Prompt AI-037 (03/09/2026)

```text
chỉ cần export main report, với export cho đẹp đẹp hơn một tí
cập nhật Lab\HW6\23127173_HW06_AI_API_095\doc\md\Git Commit Log\git-commit-log.txt
cập nhật audit
commit
```

## Prompt AI-036 (03/09/2026)

```text
review lại toàn bộ các doc, cập nhật ai audit
```

## Prompt AI-035 (03/09/2026)

```text
thêm Excel test summary, dùng flowchart có sẵn, tạo PDF
```

## Prompt AI-034 (03/09/2026)

```text
cập nhật audit, cập nhật doc, review doc, commit
```

## Prompt AI-018 (03/09/2026)

```text
đọc lại quá trình đã làm ở prompt hồi nãy
đọc lại repo Eshop trong thư mục Eshop
đọc lại mục specification vì thiết kế theo spec không thiết kế theo code

TC nào do AI generate thì bỏ cột valid, tôi ok hết rồi
TC nào do student generate k cần validate nữa

[5 TC pool A / B / C — danh sách sinh viên cung cấp]

sửa lại toàn bộ document là 100% tiếng việt...
cập nhật aiaudit, mandatory vì dụng model mới
```

## Prompt AI-031 (03/09/2026)

```text
fix lại chỗ đó, tất cả các prompt đều phải cập nhật audit
```

## Prompt AI-029 (03/09/2026)

```text
xóa các file không cần thiết đi, cái nào chạy nhiều lần thì dữ bản final thôi
```

```text
chạy script sinh lại các TC để chuẩn bị test lại newman, postman
chạy repo Eshop để chuẩn bị test lại
cập nhật audit
commit
```


```text
xem Lab\HW6
xem Lab\HW6\requirement\requirement.pdf
xem tôi làm đến đâu rồi, xem tôi còn thiếu những bước gì
bổ sung ai audit, ai mantory
```
