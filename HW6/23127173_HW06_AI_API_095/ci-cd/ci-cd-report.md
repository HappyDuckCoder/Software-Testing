# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). Checkout repo + EShop SUT, cài dependency, start backend, chạy Newman, upload artefact.

## Evidence

| Run | Kết quả | Minh chứng |
| --- | --- | --- |
| **Local full 120 (final)** | 182 req, 182 assert, **12 fail** (oracle spec) | `api-testing/newman/raw-output/full-120-20260903.txt`, `html-reports/report.html` |
| Remote baseline (01/09) | Succeeded 21 s | [run 33500850638](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638/job/99833592169) · `evidence/ci-cd/ci-01`…`ci-05` |

Remote baseline (01/09) chạy suite cũ 20 request — giữ làm evidence CI pass. Local final run (03/09) là bộ 120 TC oracle đặc tả.

Chưa có remote fail run có chủ đích.
