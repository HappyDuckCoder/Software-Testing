# Endurance memory observation - 31/08/2026

Endurance dùng 10 threads, 120 loops/thread, 1.6 s think-time và 1.500 account/đơn độc lập. Script `scripts/monitor-endurance-memory.ps1` lấy mẫu PID backend Node.js `33556` cùng RAM hệ thống mỗi 10 giây trong 620 giây. Raw workload log: `performance/raw-jtl/23127173_Endurance_20260831.jtl`.

| Chỉ số | Min | Mean | Peak |
| --- | ---: | ---: | ---: |
| Backend Node.js Working Set | 76.75 MB | 78.32 MB | **79.14 MB** |
| RAM hệ thống đã dùng | 78.94% | 82.01% | **83.29%** |

Có 61 mẫu trong `endurance-memory-samples-20260831.csv`. Peak 79.14 MB là trần working set **đã quan sát** của backend trong workload này; không gọi đây là giới hạn phần cứng vì máy còn Chrome, VS Code và các tiến trình khác. Không có lỗi parent workflow trong JTL rerun.
