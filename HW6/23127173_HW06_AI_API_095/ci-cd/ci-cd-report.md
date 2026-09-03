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

Run local **182/12** là bộ oracle đặc tả đầy đủ.

### Chạy CI fail mới (sau khi cập nhật workflow)

1. Push nhánh `homework6`
2. Actions → **HW6 EShop API tests** → **Run workflow** → chọn **`oracle-fail`**
3. Job `oracle-fail` sẽ **Failed** — kỳ vọng **182 req / 12 assert fail** (giống local)
4. Chụp ảnh theo `ci-cd/HOW-TO-CAPTURE-CI.md`

Run CI cũ (03/09, job `baseline`, 102/17) vẫn giữ tại `ci-06`…`ci-10` cho đến khi thay bằng ảnh `oracle-fail` mới.

## Ghi chú kỹ thuật

- CI dùng Node 20; log cảnh báo deprecation Node/puppeteer — không chặn job.
- SUT health check: `GET /api/products` trả JSON sản phẩm trên `127.0.0.1:3000`.
- Newman trên CI log `X-Student-Id applied: 23127173` (SETUP-01…).
