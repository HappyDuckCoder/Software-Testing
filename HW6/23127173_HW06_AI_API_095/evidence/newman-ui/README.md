# Newman UI evidence

| File | Mô tả |
| --- | --- |
| `newman-full-120-terminal-20260903.png` | Ảnh summary terminal từ lần chạy Newman **120 TC** thật trên `127.0.0.1:3000` (03/09/2026). Hiển thị `X-Student-Id: 23127173`, **128 requests** (8 setup + 120 observation), **128 assertions**, **0 failures**, duration **11.9s**. |
| `newman-full-120-report-20260903.png` | Ảnh phần đầu HTML report (`newman/html-reports/full-120/report.html`) cùng lần chạy. |

**Lệnh tái lập:**

```bash
cd api-testing
npm run test:full120
```

**Raw output:** `api-testing/newman/raw-output/full-120-20260903.txt`
