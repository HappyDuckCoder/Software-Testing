# Postman runner evidence

Ảnh minh chứng Postman Runner **03/09/2026**, tái lập từ collection thật sau khi restart EShop (seed sạch). Script `api-testing/scripts/generate-postman-evidence.mjs` chạy Newman trên cùng collection Postman (Setup + 120 observation), xuất JSON, rồi chụp PNG runner summary từ kết quả thực tế.

| No. | Capture | Nội dung | Filename |
| --- | --- | --- | --- |
| 1 | Runner configuration | Folder Setup + A/B/C Observation 40 TC (128 request), environment `eshop.local.template`, host `127.0.0.1:3000`. | `postman-runner-config-20260903.png` |
| 2 | Run summary | **128 passed**, **0 failed**, duration **~12.1 s**, average response **~10 ms**. | `postman-run-results-20260903.png` |
| 3 | Run details | Mẫu 18 request đầu trong run (method, status, assertion pass). | `postman-run-details-negative-cases-20260903.png` |
| 4 | C-001 request body | Traceability `PUT /api/admin/orders/{{adminOrderId}}/status`, body `{ "status": "confirmed" }`. | `postman-c001-request-body-20260903.png` |
| 5 | C-001 request headers | `Authorization: Bearer [REDACTED]`, `X-Student-Id: 23127173`. | `postman-c001-request-headers-20260903.png` |

**Tái lập:**

```bash
# restart EShop backend trước
cd api-testing
node scripts/generate-postman-evidence.mjs
```

**Raw JSON:** `api-testing/newman/raw-output/full-120-20260903.json`

**Lưu ý:** Ảnh 4–5 là cấu hình request (traceability), không phải sent-result. Ảnh 1–3 phản ánh kết quả run thật trên SUT; observation suite assert non-5xx (giống Newman full 120).
