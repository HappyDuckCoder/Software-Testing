# CI/CD evidence

## Remote pass — 01/09/2026

[run 33500850638 / job 99833592169](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638/job/99833592169) · job succeeded · 21 s · suite baseline cũ (20 request).

| File | Nội dung |
| --- | --- |
| `ci-01-setup-node-20260901.png` | Setup Node + job identity |
| `ci-02-checkout-eshop-sut-20260901.png` | Checkout `ttbhanh/eshop-sut` |
| `ci-03-install-dependencies-20260901.png` | `npm ci` SUT + Newman |
| `ci-04-newman-baseline-student-id-20260901.png` | Newman baseline + `X-Student-Id: 23127173` |
| `ci-05-workflow-succeeded-20260901.png` | Job succeeded (all steps green) |

## Remote fail — 03/09/2026

Trigger: push commit `f21965e` (*Bo sung bao cao…*) · workflow **HW6 EShop API tests** · [Actions workflow](https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml).

Ảnh do sinh viên chụp từ GitHub Actions (5 bước):

| # | File | Nội dung |
| --- | --- | --- |
| 1 | `ci-06-workflow-run-20260903.png` | Run overview — job `baseline`, commit `f21965e` |
| 2 | `ci-07-checkout-eshop-sut-20260903.png` | Checkout EShop SUT (`85af3ba…`) |
| 3 | `ci-08-install-dependencies-20260903.png` | Install SUT + Newman dependencies |
| 4 | `ci-09-sut-health-check-20260903.png` | Start SUT + `curl /api/products` 200 |
| 5 | `ci-10-newman-summary-20260903.png` | Newman summary: **102 req / 102 assert / 17 fail** |

Run **fail** trên CI do assertion oracle đặc tả (vi phạm spec) — khớp hướng bug report. Run local đầy đủ vẫn là chuẩn: **182 req / 12 fail** (`full-120-20260903.txt`).
