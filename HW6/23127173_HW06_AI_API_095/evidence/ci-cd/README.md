# CI/CD evidence

## Remote pass — 03/09/2026 ✅

Ảnh do sinh viên chụp từ GitHub Actions · workflow **HW6 EShop API tests** · [Actions](https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml).

| # | File | Nội dung |
| --- | --- | --- |
| 1 | `ci-06-workflow-run-20260903.png` | Run overview |
| 2 | `ci-07-checkout-eshop-sut-20260903.png` | Checkout EShop SUT |
| 3 | `ci-08-install-dependencies-20260903.png` | Install SUT + Newman |
| 4 | `ci-09-sut-health-check-20260903.png` | SUT health check (`/api/products`) |
| 5 | `ci-10-newman-summary-20260903.png` | Newman summary (pass run) |

## Remote fail — ⏳ chờ chụp

Chạy thủ công job **`oracle-fail`** (xem `ci-cd/HOW-TO-CAPTURE-CI.md`) → kỳ vọng job **Failed**, **182 req / 12 assert fail** (khớp local).

Lưu ảnh vào `evidence/ci-cd/` với prefix `ci-fail-*` (SV tự chụp sau khi chạy workflow).

## Đã xóa (sai / baseline cũ)

`ci-01`…`ci-05` (01/09) — suite baseline 20 request không còn dùng làm evidence.
