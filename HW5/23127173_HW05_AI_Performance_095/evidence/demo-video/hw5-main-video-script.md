# Kịch bản quay video HW5 chính (8-9 phút)

Video phải ở chế độ **YouTube Unlisted**, tổng thời lượng ít nhất 6 phút và thuyết minh tiếng Việt. Dùng hai cửa sổ: một cửa sổ chạy backend/CMD và một cửa sổ JMeter; tại các đoạn Load/Stress/Spike, đặt JMeter và Task Manager cùng khung hình.

## 0. Chuẩn bị trước khi bấm record

Mở PowerShell thứ nhất và chạy backend:

```powershell
Set-Location D:\code\Project\TestingProject\Eshop\backend
node server.js
```

Giữ cửa sổ này mở. Mở PowerShell thứ hai để seed/test:

```powershell
Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_095\scripts\reset-seed-hw5.mjs
```

Mở Task Manager khi cần evidence:

```powershell
Start-Process taskmgr.exe
```

Đặt biến dùng chung cho các lệnh JMeter bên dưới:

```powershell
Set-Location D:\code\Project\TestingProject\Lab
$jmeter = 'D:\tools\apache-jmeter-5.6.3\bin\jmeter.bat'
$submission = 'HW5\23127173_HW05_AI_Performance_095'
$csv = (Resolve-Path "$submission\performance\data\hw5-users.local.csv").Path
```

Không đọc hoặc chiếu JWT/password thật. CSV hiện tại chỉ có account `hw5.perf.*` do script seed tạo.

## Timeline và lời thoại

| Thời gian | Màn hình/lệnh | Lời thoại gợi ý |
| ---: | --- | --- |
| 0:00-0:35 | Mở `$submission\doc\md\main-report.md`. | “Em là Trần Hải Đức, MSSV 23127173. Đây là HW05-AI Performance Testing cho EShop REST API, dùng Apache JMeter 5.6.3.” |
| 0:35-1:20 | Mở phần Workflow trong report. | “Một workflow chung cho ba kịch bản là login, xem lịch sử đơn và hủy đơn; nó bao phủ auth-heavy, read-heavy, transactional và không trùng lựa chọn đã công bố của Vân.” |
| 1:20-2:05 | Quay PowerShell chạy seed và mở `reset-seed-hw5.mjs`. | “Em reset/seed trước run. Mỗi virtual user có account/đơn riêng. Login trích JWT, orders trích orderId, cancel dùng hai giá trị đó.” |
| 2:05-2:55 | Mở JMeter GUI Load bằng lệnh bên dưới; mở CSV Data Set, JSON Extractors và assertions. | “Plan là data-driven, có assertion HTTP 200 và không hard-code order.” |
| 2:55-3:35 | Mở Load Thread Group, View Results Tree và Task Manager cùng khung. | “Load dùng 10 users, ramp-up 20 giây, think-time 1.5 giây, listener View Results Tree.” |
| 3:35-4:15 | Mở Stress Thread Group, Summary Report và Task Manager cùng khung. | “Stress dùng 30 users, ramp-up 30 giây, think-time 1 giây, listener Summary Report.” |
| 4:15-4:55 | Mở Spike Thread Group, Aggregate Report và Task Manager cùng khung. | “Spike dùng 50 users, ramp-up 1 giây, think-time 0.5 giây, listener Aggregate Report.” |
| 4:55-5:45 | Mở `performance/raw-jtl/` và `performance/html-reports/`, hoặc bảng kết quả trong report. | “Load có 10, Stress 30, Spike 50 workflow; cả ba không có lỗi HTTP. Raw JTL và HTML report được giữ nguyên.” |
| 5:45-6:45 | Mở `evidence/endurance/memory-observation.md`, ảnh Task Manager và HTML Endurance. | “Endurance chạy 601.15 giây với 1,200 workflow, 0 lỗi, 1.980 workflow/s. Có 61 mẫu RAM; backend peak 79.14 MB trong workload này.” |
| 6:45-7:35 | Mở mục AI analysis trong report. | “4,800 sample không phải 4,800 workflow. p95 E2E khoảng 4.8 giây có think-time JMeter; endpoint backend riêng chỉ vài đến vài chục ms. Vì vậy không gọi p95 đó là backend latency.” |
| 7:35-8:20 | Mở `continuous-performance-testing/workflow.png` và YAML. | “Pipeline đề xuất chạy khi backend/database đổi, seed, JMeter smoke, so sánh p95/error rate và upload artefact. Gate là error rate trên 1% hoặc p95 tăng trên 20%; trade-off là CI cost và false alarm.” |
| 8:20-8:45 | Mở AI Audit và conclusion. | “AI Audit ghi tool, prompt, output và phần em đã review. Các việc còn lại là video, PDF và ZIP.” |

## Lệnh mở GUI theo scenario

Chạy từng lệnh trong PowerShell sau khi đã tạo `$jmeter` và `$submission`:

```powershell
& $jmeter -t "$submission\performance\test-plans\23127173_Load_20260831.jmx"
& $jmeter -t "$submission\performance\test-plans\23127173_Stress_20260831.jmx"
& $jmeter -t "$submission\performance\test-plans\23127173_Spike_20260831.jmx"
& $jmeter -t "$submission\performance\test-plans\23127173_Endurance_20260831.jmx"
```

Mỗi lệnh mở một cửa sổ JMeter. Mở xong scenario nào thì đóng cửa sổ đó trước khi mở scenario tiếp theo để màn hình gọn.

## Lệnh chạy lại Load/Stress/Spike nếu cần demo live

Chỉ chạy khi muốn có một run live mới. Luôn seed lại trước mỗi run vì cancel làm thay đổi state đơn hàng.

```powershell
Set-Location D:\code\Project\TestingProject
node .\Lab\HW5\23127173_HW05_AI_Performance_095\scripts\reset-seed-hw5.mjs
Set-Location D:\code\Project\TestingProject\Lab
& $jmeter -n -t "$submission\performance\test-plans\23127173_Load_20260831.jmx" -Jhw5.data.file=$csv -l "$submission\performance\raw-jtl\video-load-rerun.jtl"
```

Thay `Load` bằng `Stress` hoặc `Spike` cho scenario tương ứng. Không cần chạy lại endurance trong lúc quay; mở JTL/HTML và evidence endurance có sẵn để tiết kiệm hơn 10 phút.

## Kết thúc sau khi upload

1. Đặt video là **Unlisted**.
2. Chép link vào `link-video.md` tại thư mục này.
3. Không tuyên bố RPS/peak memory là production capacity; dùng đúng cụm “quan sát được trong workload/cấu hình này”.
