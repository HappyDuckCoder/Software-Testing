# Hướng dẫn chạy CI pass / fail và chụp ảnh

Workflow: `.github/workflows/hw6-api-tests.yml`

Hai job — **cùng full 120 TC** (182 request), không smoke:

| Job | Collection | Kết quả job | Newman |
| --- | --- | --- | --- |
| **`full-pass`** | observation (no 5xx) | ✅ Xanh | 182 req, **0 fail** |
| **`full-fail`** | oracle đặc tả | ❌ Đỏ | 182 req, **~12 fail** |

## 1. Push lên `homework6`

Job **`full-pass`** tự chạy sau push → chụp ảnh pass nếu cần.

## 2. Chạy CI fail (chụp minh chứng)

1. https://github.com/HappyDuckCoder/Software-Testing/actions/workflows/hw6-api-tests.yml
2. **Run workflow** → branch `homework6`
3. Chọn **`full-fail`** → Run
4. Job **`full-fail`** ❌ Failed — summary **182 / 12 fail**

## 3. Ảnh nên chụp

**Pass** (`full-pass`): overview, checkout, install, health, Newman summary **0 failed**.

**Fail** (`full-fail`): overview (Failed), checkout, install, health, Newman log + summary **12 failed assertions**.

Lưu pass: `ci-06`…`ci-10` (đã có) hoặc chụp lại từ job `full-pass`.

Lưu fail: prefix **`ci-fail-*`** trong `evidence/ci-cd/`.

## 4. Test local

```powershell
cd api-testing
$env:COLLECTION_MODE='observation'; node scripts/generate-collection.mjs; npm run test:ci-pass
$env:COLLECTION_MODE='oracle'; node scripts/generate-collection.mjs; npm run test:ci-fail
npm run generate:collection   # khôi phục oracle cho local
```
