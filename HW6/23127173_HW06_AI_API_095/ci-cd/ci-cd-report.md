# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). Checkout repo + EShop SUT, cài dependency, start backend, generate collection, chạy Newman, upload artefact.

## Evidence — hai run remote (đề §6)

| Run | Ngày | Kết quả job | Newman | Link / ảnh |
| --- | --- | --- | --- | --- |
| **Pass (baseline cũ)** | 01/09 | ✅ Succeeded | 20 req, 0 fail | [run 33500850638](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638/job/99833592169) · `evidence/ci-cd/ci-01`…`ci-05` |
| **Fail (oracle spec)** | 03/09 | ❌ Failed | 102 req, **17 assert fail** | [workflow](https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml) · commit `f21965e` · `evidence/ci-cd/ci-06`…`ci-10` |

## Local (chuẩn nộp bài)

| Run | Kết quả | Minh chứng |
| --- | --- | --- |
| **Full 120 TC oracle** | 182 req, 182 assert, **12 fail** | `api-testing/newman/raw-output/full-120-20260903.txt`, `html-reports/report.html`, `evidence/newman-ui/` |

Run local **182/12** là bộ oracle đặc tả đầy đủ. Run CI 03/09 fail có chủ đích (assertion vi phạm spec trên runner Ubuntu); số liệu 102/17 do workflow CI chưa đồng bộ hoàn toàn với `npm run test` local — ghi rõ trong audit, không dùng thay kết quả local.

## Ghi chú kỹ thuật

- CI dùng Node 20; log cảnh báo deprecation Node/puppeteer — không chặn job.
- SUT health check: `GET /api/products` trả JSON sản phẩm trên `127.0.0.1:3000`.
- Newman trên CI log `X-Student-Id applied: 23127173` (SETUP-01…).
