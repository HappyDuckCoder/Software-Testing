# API test artifacts

| Thư mục | Nội dung |
| --- | --- |
| `postman/collections/` | Collection final: 62 setup + 120 TC |
| `postman/environments/` | Environment template |
| `newman/raw-output/` | `full-120-20260903.txt` + `.json` (final run) |
| `newman/html-reports/` | `report.html` |

## Lệnh

```bash
npm run generate:all   # sinh ma trận + collection
npm run test           # Newman full 120 + setup (182 assertion)
npm run evidence:postman  # JSON + PNG Postman (../evidence/postman-ui/)
```

**Final run (03/09/2026):** 182 request, 182 assertion, **12 fail** (oracle đặc tả). Script `scripts/run-newman.mjs` ghi UTF-8 + `--disable-unicode` (tránh lỗi font Windows).

Pre-request script: `X-Student-Id: 23127173`. Minh chứng: `../evidence/newman-ui/`, `../evidence/postman-ui/`.
