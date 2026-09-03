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

## Prompt AI-019 (03/09/2026)

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
