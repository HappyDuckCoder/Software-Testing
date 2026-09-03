# Hướng dẫn chạy CI pass / fail và chụp ảnh

Workflow: `.github/workflows/hw6-api-tests.yml`

## 1. Push commit workflow mới lên `homework6`

Sau khi push, job **`pass-smoke`** tự chạy (chỉ folder `00 Setup` — kỳ vọng **0 fail**, job ✅).

## 2. Chạy CI fail thủ công (để chụp ảnh)

1. Mở https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml
2. **Run workflow** → branch `homework6`
3. Chọn **`oracle-fail`** → Run workflow
4. Đợi job **`oracle-fail`** ❌ Failed (đúng — ~**182 req / 12 assert fail**, khớp local)

## 3. Ảnh nên chụp (job `oracle-fail`)

| # | Bước | Ghi chú |
| --- | --- | --- |
| 1 | Run overview | Tên job `oracle-fail`, trạng thái Failed |
| 2 | Checkout EShop SUT | |
| 3 | Install dependencies | |
| 4 | Start SUT health check | JSON products |
| 5 | **Run Newman oracle fail** | Log `X-Student-Id applied: 23127173` |
| 6 | **Summary cuối** | Bảng `182` requests / **`12` failed assertions** |

Lưu vào `evidence/ci-cd/` với prefix **`ci-fail-*`** (không ghi đè `ci-06`…`ci-10` — đã là pass).

## 4. CI pass

Đã có: `ci-06`…`ci-10`. Chụp lại (nếu cần): Run workflow → **`pass-smoke`** → job ✅.

## 5. Test local trước khi push

```powershell
cd api-testing
npm run test:ci-pass   # expect exit 0
npm run test:ci-fail   # expect exit non-zero, ~12 fail
```
