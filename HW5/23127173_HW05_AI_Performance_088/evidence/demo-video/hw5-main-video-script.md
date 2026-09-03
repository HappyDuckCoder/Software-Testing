# Kịch bản quay video HW5 chính

**Yêu cầu đề:** YouTube **Unlisted**, ≥ **6 phút**, thuyết minh **tiếng Việt**, JMeter + Task Manager **cùng khung hình** khi demo kịch bản.

**Cách dùng:** Quay **theo thứ tự Mục 0 → Mục 12**. Mỗi mục có **Màn hình / Lệnh / Nói** — đến mục nào làm và nói đúng mục đó.

**Lưu ý:** Không zoom password/JWT. CSV chỉ có account test `hw5.perf.*`.

**Quy ước tên artefact:** `23127173_{Load|Stress|Spike|Endurance}_{YYYYMMDD}` — ví dụ `23127173_Load_20260831.jtl`, `html-reports/23127173_Load_20260831/`. Không dùng tên kiểu `video-*` hay `*-rerun`.

### Biểu đồ ở đâu?

| Nơi xem | Có chart? | Ghi chú |
| --- | --- | --- |
| JMeter GUI — View Results Tree (Load) | Không | Cây request từng dòng |
| JMeter GUI — Summary Report (Stress) | Không | Bảng số |
| JMeter GUI — Aggregate Report (Spike) | Không | Bảng tổng hợp |
| **HTML Dashboard** (`html-reports/.../index.html`) | **Có** | Over Time, Throughput, pie chart |

Đề yêu cầu **3 listener khác nhau** trong plan — đó là bảng/báo cáo, không phải biểu đồ. **Biểu đồ nằm trong HTML report** (sinh bằng `-e -o` khi chạy CLI).

---

## Mục 0 — Chuẩn bị (trước khi bấm Record)

**Thời gian:** ~3 phút, không quay.

**Màn hình:** Hai cửa sổ PowerShell + Task Manager.

### Cửa sổ PowerShell 1 — Backend (giữ mở suốt buổi quay)

```powershell
Set-Location D:\code\Project\TestingProject\Eshop\backend
node server.js
```

Đợi log server lắng nghe cổng **3000**.

### Cửa sổ PowerShell 2 — Biến dùng chung

```powershell
Invoke-RestMethod http://localhost:3000/api/products | Out-Null

Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'

Start-Process taskmgr.exe
```

**Checklist trước Record**

- [ ] Backend chạy, không lỗi đỏ
- [ ] Task Manager mở, tab **Processes**
- [ ] Zoom màn hình 125–150%
- [ ] OBS/Recorder sẵn sàng

**Lỗi thường gặp**

| Lỗi | Cách xử lý |
| --- | --- |
| `The expression after '&'...` | Chưa gán `$jmeter` — copy **cả khối lệnh** có gán biến |
| `Results file ... is not empty` | JTL cũ còn — dùng `Remove-Item` (xem khối live bên dưới) |
| `Start-Process ... cannot find` | HTML chưa sinh — JMeter fail ở bước trước hoặc thiếu `-e -o` |
| `WARN StatusConsoleListener` / `sun.misc.Unsafe` | Cảnh báo JMeter/Java — **bỏ qua** |

> Biến `$jmeter`, `$submission`, `$csv` **chỉ sống trong tab PowerShell hiện tại**. Tab mới → dán lại khối biến ở trên.

---

## Mục 1 — Giới thiệu

**Thời gian:** 0:00 – 0:35

**Màn hình:**

```
Lab\HW5\23127173_HW05_AI_Performance_088\doc\md\main-report.md
```

**Lệnh:** Không cần.

**Nói:**

> Em là Trần Hải Đức, MSSV 23127173. Đây là bài HW05-AI — Kiểm thử hiệu năng REST API của EShop, công cụ chính là Apache JMeter 5.6.3 trên backend local cổng 3000.

---

## Mục 2 — Workflow và phạm vi endpoint

**Thời gian:** 0:35 – 1:20

**Màn hình:** Trong `main-report.md` → mục **§2 Workflow và ba nhóm API**. Highlight bảng ba API bên dưới (Login → My Orders → Cancel).

**Bảng 3 API (đọc khi quay — trùng báo cáo chính):**

| Bước | Nhóm tải | API | Dữ liệu vào/ra | FR |
| ---: | --- | --- | --- | --- |
| 1 | **Xác thực** (auth-heavy) | `POST /api/login` | CSV `email,password` → JWT (`Extract JWT`, `$.token`) | FR-02 |
| 2 | **Đọc** (read-heavy) | `GET /api/orders/my-orders` | Header `Bearer ${jwt}` → danh sách đơn → `orderId` | FR-11 |
| 3 | **Giao dịch** (transactional) | `PUT /api/orders/:id/cancel` | JWT + `${orderId}` → đơn `canceled` | FR-10, FR-11 |

Workflow **không trùng** bộ API của Vân: không dùng `/register`, `/api/products/:id`, `POST /api/checkout`.

**Lệnh:** Không cần.

**Nói:**

> Ba kịch bản Load, Stress và Spike dùng **cùng một workflow** E2E trong **một test plan** — không phải 9 test riêng từng API.
>
> Bước 1 — **auth-heavy**: `POST /api/login`, data-driven từ CSV, JMeter trích JWT bằng JSON PostProcessor.
>
> Bước 2 — **read-heavy**: `GET /api/orders/my-orders`, gửi Bearer token, trích `orderId` từ đơn chưa hủy.
>
> Bước 3 — **transactional**: `PUT /api/orders/:id/cancel`, dùng JWT và orderId động — mỗi virtual user một tài khoản riêng, không tranh ID.

---

## Mục 3 — Reset và seed dữ liệu

**Thời gian:** 1:20 – 2:05

**Màn hình:** PowerShell 2 chạy seed → mở `reset-seed-hw5.mjs` (không zoom password).

**Lệnh:**

```powershell
Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs
```

Chờ JSON: `"accounts": 50`, `"eligibleOrders": 600`.

**Nói:**

> Trước mỗi lần chạy em reset và seed lại database. Mỗi virtual user có tài khoản và đơn riêng. Login trích JWT, orders trích orderId động, cancel dùng hai giá trị đó.

---

## Mục 4 — JMeter Load: cấu trúc plan

**Thời gian:** 2:05 – 2:55

**Màn hình:** JMeter GUI — plan Load.

**Lệnh:**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
& $jmeter -J"hw5.data.file=$csv" -t "$submission\performance\test-plans\23127173_Load_20260831.jmx"
```

Trong JMeter, mở lần lượt:

1. **CSV Data Set Config**
2. **Extract JWT** — `$.token`
3. **Extract eligible order ID**
4. **Response Assertion** — HTTP 200

**Nói:**

> Plan Load data-driven từ CSV, có extractor JWT và orderId, assertion HTTP 200. Listener của Load là View Results Tree — theo đề, đây là báo cáo dạng cây, không phải biểu đồ.

---

## Mục 5 — JMeter Load: tham số + Task Manager

**Thời gian:** 2:55 – 3:35

**Màn hình:** **JMeter + Task Manager cùng khung** (bắt buộc).

Trong JMeter (Load):

1. **Thread Group** — 10 threads, ramp-up 20 s
2. **Constant Timer** — 1500 ms
3. **View Results Tree**

Hoặc mở ảnh evidence:

```
evidence\resource-monitor\load-jmeter-task-manager-20260831.png
```

**Lệnh chạy live (tùy chọn):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
$stamp = '20260831'   # đổi thành (Get-Date -Format 'yyyyMMdd') nếu chạy ngày khác
$jtl = "$submission\performance\raw-jtl\23127173_Load_$stamp.jtl"
$html = "$submission\performance\html-reports\23127173_Load_$stamp"

Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs

Set-Location D:\code\Project\TestingProject\Lab
Remove-Item $jtl -Force -ErrorAction SilentlyContinue
Remove-Item $html -Recurse -Force -ErrorAction SilentlyContinue

& $jmeter -n -J"hw5.data.file=$csv" `
  -t "$submission\performance\test-plans\23127173_Load_$stamp.jmx" `
  -l $jtl `
  -e -o $html
```

**Nói:**

> Load: 10 user, ramp-up 20 giây, think-time 1,5 giây. Em đặt JMeter và Task Manager cùng khung để thấy tiến trình Node.js backend.

**Sau mục này:** Đóng JMeter Load.

---

## Mục 6 — JMeter Stress

**Thời gian:** 3:35 – 4:15

**Màn hình:** JMeter + Task Manager cùng khung.

**Lệnh mở GUI:**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
& $jmeter -J"hw5.data.file=$csv" -t "$submission\performance\test-plans\23127173_Stress_20260831.jmx"
```

Chỉ: Thread Group 30/30 s → Timer 1000 ms → **Summary Report** (bảng, không chart).

Ảnh evidence: `evidence\resource-monitor\stress-jmeter-task-manager-20260831.png`

**Lệnh chạy live (tùy chọn):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
$stamp = '20260831'
$jtl = "$submission\performance\raw-jtl\23127173_Stress_$stamp.jtl"
$html = "$submission\performance\html-reports\23127173_Stress_$stamp"

Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs

Set-Location D:\code\Project\TestingProject\Lab
Remove-Item $jtl -Force -ErrorAction SilentlyContinue
Remove-Item $html -Recurse -Force -ErrorAction SilentlyContinue

& $jmeter -n -J"hw5.data.file=$csv" `
  -t "$submission\performance\test-plans\23127173_Stress_$stamp.jmx" `
  -l $jtl `
  -e -o $html
```

**Nói:**

> Stress: 30 user, ramp-up 30 giây. Listener Summary Report — khác Load theo yêu cầu đề.

**Sau mục này:** Đóng JMeter Stress.

---

## Mục 7 — JMeter Spike

**Thời gian:** 4:15 – 4:55

**Màn hình:** JMeter + Task Manager cùng khung.

**Lệnh mở GUI:**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
& $jmeter -J"hw5.data.file=$csv" -t "$submission\performance\test-plans\23127173_Spike_20260831.jmx"
```

Chỉ: 50 threads, ramp-up 1 s → Timer 500 ms → **Aggregate Report**.

Ảnh evidence: `evidence\resource-monitor\spike-jmeter-task-manager-20260831.png`

**Lệnh chạy live (tùy chọn):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
$stamp = '20260831'
$jtl = "$submission\performance\raw-jtl\23127173_Spike_$stamp.jtl"
$html = "$submission\performance\html-reports\23127173_Spike_$stamp"

Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_088\scripts\reset-seed-hw5.mjs

Set-Location D:\code\Project\TestingProject\Lab
Remove-Item $jtl -Force -ErrorAction SilentlyContinue
Remove-Item $html -Recurse -Force -ErrorAction SilentlyContinue

& $jmeter -n -J"hw5.data.file=$csv" `
  -t "$submission\performance\test-plans\23127173_Spike_$stamp.jmx" `
  -l $jtl `
  -e -o $html
```

**Nói:**

> Spike: 50 user, ramp-up 1 giây, burst tải. Listener Aggregate Report. Ba kịch bản đều 0 lỗi HTTP trong các lần chạy đã lưu.

**Sau mục này:** Đóng JMeter Spike.

---

## Mục 8 — JTL, HTML report và biểu đồ

**Thời gian:** 4:55 – 5:45

**Màn hình:** Mở trên **Chrome/Edge** (không mở bằng VS Code):

```
performance\html-reports\23127173_Load_20260831\index.html
performance\html-reports\23127173_Stress_20260831\index.html
performance\html-reports\23127173_Spike_20260831\index.html
```

**Lệnh mở nhanh Load dashboard:**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$submission = 'HW5\23127173_HW05_AI_Performance_088'
Start-Process (Resolve-Path "$submission\performance\html-reports\23127173_Load_20260831\index.html").Path
```

Trong dashboard, click menu trái:

1. **Dashboard** — pie Requests Summary, bảng Statistics
2. **Over Time** — Response Times Over Time, Threads Over Time
3. **Throughput** — Hits Per Second

(Có thể mở thêm JTL thô trong VS Code: `performance\raw-jtl\23127173_Load_20260831.jtl`)

**Nói:**

> Listener trong JMeter GUI là bảng theo yêu cầu đề. Biểu đồ nằm trong HTML Dashboard sinh từ JTL bằng cờ `-e -o`. Đây là artefact gốc ngày 31/08: Load 10 workflow, Stress 30, Spike 50 — đều 0 lỗi.

---

## Mục 9 — Endurance và giám sát RAM

**Thời gian:** 5:45 – 6:45

**Màn hình:**

```
evidence\endurance\memory-observation.md
evidence\resource-monitor\endurance-jmeter-task-manager-20260831.png
performance\html-reports\23127173_Endurance_20260831\index.html
evidence\hardware\dxdiag-hardware-20260831.png
```

**Lệnh mở plan Endurance (chỉ xem cấu hình — không chạy live):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_088'
$csv = 'D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088\performance\data\hw5-users.local.csv'
& $jmeter -J"hw5.data.file=$csv" -t "$submission\performance\test-plans\23127173_Endurance_20260831.jmx"
```

**Lệnh lọc JTL chỉ còn dòng workflow cha (demo / đọc nhanh):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088
.\scripts\extract-parent-jtl.ps1 -AllScenarios
```

Mở file đã lọc (Endurance — 1.200 dòng + header):

```
performance\raw-jtl\23127173_Endurance_20260831_parents-only.jtl
```

**Nói:**

> Endurance ~601 giây, **1.200 workflow cha**, peak RAM backend 79,14 MB. JTL gốc có 4.800 dòng vì mỗi workflow ghi thêm 3 HTTP sampler — em lọc bằng script `extract-parent-jtl.ps1` để xem đúng 1.200 dòng cha; file gốc vẫn giữ để chứng minh latency từng API. Cấu hình máy từ DXDIAG — không gọi đó là giới hạn production.

**Sau mục này:** Đóng JMeter Endurance.

---

## Mục 10 — Phân tích AI và đọc JTL

**Thời gian:** 6:45 – 7:35

**Màn hình:** Cạnh nhau hoặc lần lượt:

```
performance\raw-jtl\23127173_Endurance_20260831.jtl          # gốc — 4.800 sample
performance\raw-jtl\23127173_Endurance_20260831_parents-only.jtl   # 1.200 workflow
doc\md\main-report.md → §7 Phân tích AI
```

**Lệnh (nếu chưa chạy ở Mục 9):**

```powershell
Set-Location D:\code\Project\TestingProject\Lab\HW5\23127173_HW05_AI_Performance_088
.\scripts\extract-parent-jtl.ps1
```

**Nói:**

> Cả bốn JTL gốc đều **0 lỗi**, toàn HTTP 200. AI dễ nhầm 4.800 sample là 4.800 workflow; thực tế **1.200 workflow cha** — mỗi dòng trong file `parents-only` là một lần E2E hoàn chỉnh. p95 ~4,8 giây là transaction có think-time; mở JTL gốc thì login/orders/cancel chỉ vài đến vài chụm ms. Stress p95 thấp hơn Load vì think-time ngắn hơn, không phải backend nhanh hơn khi tải cao.

---

## Mục 11 — Pipeline CI (đã chạy thật)

**Thời gian:** 7:35 – 8:20

**Màn hình:**

```
continuous-performance-testing\workflow.png
continuous-performance-testing\ci-cd-report.md
evidence\ci-cd\hw5-ci-pass-03-job-success.png
```

Mở link run (trình duyệt): https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33755210272

**Lệnh:** Không cần.

**Nói:**

> Pipeline CI đã triển khai trên GitHub Actions — job Load + Stress + Spike, không phải smoke. Run số 33755210272 pass trong 6 phút 40 giây: clone eshop-sut, seed lại trước mỗi kịch bản, so baseline Load, upload artefact JTL và HTML. Endurance vẫn chỉ chạy local vì khoảng 601 giây.

---

## Mục 12 — AI Audit và kết luận

**Thời gian:** 8:20 – 8:45

**Màn hình:**

```
doc\md\AI Audit\01_AI-Audit-Report.md
doc\pdf\AI-Audit-Report.pdf
```

**Lệnh:** Không cần.

**Nói:**

> Toàn bộ tương tác AI được ghi trong AI Audit. Em đã rà soát output, có PDF và artefact thô trên GitHub; nộp ZIP và link video này lên Moodle. Cảm ơn thầy cô.

---

## Sau khi quay xong

1. Upload YouTube → **Unlisted**
2. Dán link vào `evidence/demo-video/link-video.md`
3. Khi nói RPS/RAM: dùng **“quan sát được trong workload/cấu hình này”**

**Tổng thời lượng:** ~8 phút 45 giây
