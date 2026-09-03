# Hướng dẫn chạy CI pass / fail và chụp ảnh

Workflow: `.github/workflows/hw6-api-tests.yml`

Hai job — **cùng full 120 TC** (182 request), không smoke:

| Job | Collection | Kết quả job | Newman |
| --- | --- | --- | --- |
| **`full-pass`** | observation (no 5xx) | ✅ Xanh | 182 req, **0 fail** |
| **`full-fail`** | oracle đặc tả | ❌ Đỏ | 182 req, **~12 fail** |

## Vì sao trước đó thấy job “Skipped”?

Workflow cũ có **2 job** (`full-pass` + `full-fail`) nhưng mỗi lần chỉ chạy **1** → job còn lại luôn hiện ⏭ Skipped (bình thường, không phải lỗi).

Workflow mới chỉ còn **1 job** `newman` — tên job = `full-pass` hoặc `full-fail` tùy lựa chọn, **không còn job skip**.

**Lưu ý:** Push chỉ trigger khi đổi file trong `HW6/**` hoặc workflow file. Sau khi sửa workflow, **push lên GitHub** rồi mới Run workflow.

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

Lưu pass: prefix **`ci-pass-*`** (đã có: run [#8](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307)).

Lưu fail: prefix **`ci-fail-*`** (đã có: run [#7](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556)).

## 4. Test local

```powershell
cd api-testing
$env:COLLECTION_MODE='observation'; node scripts/generate-collection.mjs; npm run test:ci-pass
$env:COLLECTION_MODE='oracle'; node scripts/generate-collection.mjs; npm run test:ci-fail
npm run generate:collection   # khôi phục oracle cho local
```
