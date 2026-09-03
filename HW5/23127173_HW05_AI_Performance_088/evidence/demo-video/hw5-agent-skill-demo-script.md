# Kịch bản quay video — Demo Agent Skill (HW5)

**Yêu cầu đề:** YouTube **Unlisted**, thuyết minh **tiếng Việt**, thể hiện **từ đầu đến cuối** cách dùng **một Agent Skill** trên **một nhóm endpoint hoàn chỉnh**.

**Skill demo trong video này:** `transactional-test-data-manager`
**Nhóm endpoint:** **Giao dịch (transactional)** — `PUT /api/orders/:id/cancel` (FR-10, FR-11)

**Thời lượng gợi ý:** 3–5 phút.

**Cách dùng:** Quay **Mục 0 → Mục 7**. Mỗi mục có **Màn hình / Lệnh / Prompt / Nói**.

**Lưu ý:** Không zoom password/JWT. Account test chỉ `hw5.perf.*@eshop.local`.

**Hai skill còn lại** (chỉ nhắc ở Mục 1, không cần demo đầy đủ):

| Skill | Nhóm endpoint |
| --- | --- |
| `jmeter-e2e-plan-builder` | Auth + read + transactional trong JMX |
| `performance-testing-and-log-analysis` | Toàn workflow Load/Stress/Spike + JTL |

---

## Mục 0 — Chuẩn bị (không quay)

**Terminal 1 — Backend (bắt buộc trước mọi lệnh):**

```powershell
Set-Location D:\code\Project\TestingProject\Eshop\backend
node server.js
```

**Terminal 2 — Kiểm tra SUT:**

```powershell
Invoke-RestMethod http://localhost:3000/api/products | Out-Null
Write-Host 'Backend OK'
```

**Cursor:** Mở workspace `TestingProject`, mở thư mục `Lab/HW5/23127173_HW05_AI_Performance_088`.

---

## Mục 1 — Giới thiệu skill và phạm vi

**Thời gian:** 0:00 – 0:30

**Màn hình:**

```
agent-skills\skill-catalog.md
agent-skills\transactional-test-data-manager\SKILL.md
```

**Lệnh:** Không cần.

**Nói:**

> Em demo skill **transactional-test-data-manager** trên nhóm endpoint **giao dịch**: hủy đơn `PUT /api/orders/:id/cancel`. Skill này không chạy JMeter thay em — nó chuẩn hóa **seed, reset và kiểm tra dữ liệu** trước khi chạy performance test, để mỗi virtual user có đơn riêng, không tranh `orderId`.

---

## Mục 2 — Mở skill trong Cursor và gán ngữ cảnh

**Thời gian:** 0:30 – 1:10

**Màn hình:** Cursor Chat — gõ `@` → chọn file skill:

```
agent-skills/transactional-test-data-manager/SKILL.md
```

**Prompt mẫu (copy vào Cursor, đọc to khi quay):**

```text
@agent-skills/transactional-test-data-manager/SKILL.md

Em chuẩn bị chạy performance test workflow HW5:
POST /api/login → GET /api/orders/my-orders → PUT /api/orders/:id/cancel.

Hãy theo skill transactional-test-data-manager:
1) Liệt kê quy tắc dữ liệu cho nhóm endpoint transactional (cancel).
2) Đối chiếu script reset-seed-hw5.mjs hiện tại đã đáp ứng chưa.
3) Đưa checklist Pre-run validation trước khi chạy JMeter Spike 50 user.
Không tạo JTL hay số liệu giả.
```

**Nói:**

> Em @ skill vào chat để AI bám đúng quy trình trong SKILL.md — phân biệt **kế hoạch/skill** với **evidence thật** do em chạy tay.

*(Có thể cắt nhanh phần AI trả lời — giữ 1–2 câu AI nhắc: một user một đơn, loại trừ `canceled`, cần reset trước mỗi run.)*

---

## Mục 3 — Seed / reset theo skill

**Thời gian:** 1:10 – 1:50

**Màn hình:** Terminal 2 + file `scripts/reset-seed-hw5.mjs` (không zoom password trong CSV).

**Lệnh:**

```powershell
Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs
```

Chờ JSON:

```json
"accounts": 50,
"eligibleOrders": 600,
"ordersPerAccount": 12
```

**Nói:**

> Theo skill, trước mỗi lần chạy em reset database test và seed lại: 50 account `hw5.perf.*`, mỗi account 12 đơn `pending` hoặc `confirmed` — đủ cho Spike 50 user, mỗi user hủy một đơn riêng.

---

## Mục 4 — Pre-run validation (nhóm transactional)

**Thời gian:** 1:50 – 3:00

**Màn hình:** Terminal 2 chạy script kiểm tra — map đúng mục **Pre-run validation** trong SKILL.md.

**Lệnh — kiểm tra 1 user mẫu (không hiện password trên màn hình):**

```powershell
$base = 'http://localhost:3000'
$email = 'hw5.perf.001@eshop.local'
$password = 'Hw5Perf!001'   # chỉ dùng local test — không zoom khi quay

# Bước A — Login (auth — tiền đề cho cancel)
$loginBody = @{ email = $email; password = $password } | ConvertTo-Json
$login = Invoke-RestMethod -Uri "$base/api/login" -Method Post -Body $loginBody -ContentType 'application/json'
$headers = @{ Authorization = "Bearer $($login.token)" }
Write-Host "Login OK — user $($login.user.email)"

# Bước B — My orders (read — lấy orderId)
$orders = Invoke-RestMethod -Uri "$base/api/orders/my-orders" -Headers $headers
$eligible = $orders | Where-Object { $_.status -ne 'canceled' }
Write-Host "Eligible orders: $($eligible.Count) (first id=$($eligible[0].id), status=$($eligible[0].status))"

# Bước C — Cancel (transactional — nhóm endpoint demo)
$orderId = $eligible[0].id
$cancel = Invoke-RestMethod -Uri "$base/api/orders/$orderId/cancel" -Method Put -Headers $headers
Write-Host "Cancel OK — $($cancel.message)"
```

**Lệnh — kiểm tra nhanh CSV đủ 50 dòng (Spike):**

```powershell
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
((Import-Csv $csv).Count)
# Kỳ vọng: 50
```

**Sau demo cancel 1 đơn — seed lại trước khi chạy JMeter thật:**

```powershell
Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs
```

**Nói:**

> Skill yêu cầu xác nhận ba điều: login được, `my-orders` có đơn eligible, cancel được với JWT của đúng user. Em vừa smoke test **nhóm transactional** end-to-end bằng REST. CSV có 50 account khớp Spike 50 thread. Sau smoke em **seed lại** để performance test không bị thiếu đơn.

---

## Mục 5 — Liên kết skill với JMeter (transactional sampler)

**Thời gian:** 3:00 – 3:45

**Màn hình:** JMeter GUI — plan Load hoặc Spike:

```
performance\test-plans\23127173_Load_20260831.jmx
```

Mở lần lượt (không chạy live nếu đang quay evidence cũ):

1. **Extract eligible order ID** — JSONPath `$[?(@.status != 'canceled')].id`
2. **PUT /api/orders/:id/cancel** — path `/api/orders/${orderId}/cancel`
3. **Bearer JWT** trên cancel

**Lệnh mở GUI (tùy chọn):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
& $jmeter -J"hw5.data.file=$csv" -t "$submission\performance\test-plans\23127173_Load_20260831.jmx"
```

**Nói:**

> Skill data manager đảm bảo **phía database**; JMeter plan map sang **Extract orderId** và PUT cancel — cùng quy tắc loại trừ đơn `canceled`. Hai lớp này phải khớp thì load test mới 0 lỗi.

---

## Mục 6 — Boundary skill (evidence thật)

**Thời gian:** 3:45 – 4:15

**Màn hình:** Cuối file `SKILL.md` — mục **Boundary**:

```
agent-skills\transactional-test-data-manager\SKILL.md  →  ## Boundary
```

**Nói:**

> Skill **không** tạo JTL, HTML report hay video. Em dùng skill để chuẩn bị và validate; evidence hiệu năng vẫn từ lần chạy JMeter thật và được ghi trong AI Audit mục AI-005.

---

## Mục 7 — Kết luận

**Thời gian:** 4:15 – 4:30

**Màn hình:** `doc/md/AI Audit/01_AI-Audit-Report.md` → **AI-005** (tạo 3 skill).

**Nói:**

> Video này demo skill **transactional-test-data-manager** trên nhóm endpoint hủy đơn: seed, validate REST, liên kết JMeter. Ba skill nằm trong `agent-skills/`; link video skill và video HW5 chính em ghi trong `evidence/demo-video/link-video.md`. Cảm ơn thầy cô.

---

## Sau khi quay

1. Upload YouTube → **Unlisted**
2. Dán link vào `evidence/demo-video/link-video.md` (mục Agent Skill)
3. Cập nhật `README.md` nếu cần

## Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách xử lý |
| --- | --- | --- |
| `Connection refused` | Backend chưa chạy | `node server.js` ở Terminal 1 trước |
| Cancel 404 | Sai `orderId` hoặc đơn đã canceled | Chạy lại `reset-seed-hw5.mjs` |
| CSV < 50 dòng | Seed chưa chạy / sai path | Chạy seed, kiểm tra `hw5-users.local.csv` |
| Spike 100% Err | Backend down hoặc thiếu seed | Backend UP + seed + xóa JTL cũ rồi chạy lại |
