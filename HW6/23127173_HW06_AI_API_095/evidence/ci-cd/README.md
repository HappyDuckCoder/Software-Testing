# CI/CD evidence

Ảnh do sinh viên chụp từ GitHub Actions · workflow **HW6 EShop API tests** · [Actions](https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml).

## Remote fail — run #7 · 03/09/2026 ✅

| # | File | Nội dung |
| --- | --- | --- |
| 1 | `ci-fail-01-run-overview-20260903.png` | Run overview — job **`full-fail`**, Queued |
| 2 | `ci-fail-02-setup-20260903.png` | Setup: checkout, Node, checkout EShop SUT |
| 3 | `ci-fail-03-newman-fail-20260903.png` | Newman oracle fail + upload artifact `hw6-newman-full-fail.zip` |

Kỳ vọng: job **Failed**, Newman oracle (~12 assert fail), `X-Student-Id: 23127173` trong log.

## Remote pass — run #8 · 03/09/2026 ✅

| # | File | Nội dung |
| --- | --- | --- |
| 1 | `ci-pass-01-run-overview-20260903.png` | Run overview — job **`full-pass`**, Queued |
| 2 | `ci-pass-02-setup-20260903.png` | Setup: checkout, Node (in progress) |
| 3 | `ci-pass-03-newman-success-20260903.png` | Newman observation pass (0 fail) + upload reports |

Kỳ vọng: job **Succeeded**, Newman observation **0 failed assertions**.

## Đã thay thế / xóa

- `ci-06`…`ci-10` (pass cũ, workflow trước `full-pass`/`full-fail`) — thay bằng 6 ảnh trên.
- `ci-01`…`ci-05` (baseline 01/09) — suite cũ, không còn dùng.
