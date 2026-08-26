# Execution Matrix — HW04 (23127173)

Ngày chạy: **17/08/2026**  
Oracle: README/spec HW2 (Domain + BVA)  
Lệnh: `npm run test:full-matrix` trong `automation/`

## Ma trận 9 browser runs

| Run ID | Feature | Browser | Pass | Fail | Skip | Timeout | Exit |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| feature-a-chromium | FR-04 | Chromium | 22 | 8 | 0 | 0 | ≠0 |
| feature-a-firefox | FR-04 | Firefox | 22 | 8 | 0 | 0 | ≠0 |
| feature-a-webkit | FR-04 | WebKit | 22 | 8 | 0 | 0 | ≠0 |
| feature-b-chromium | FR-11 | Chromium | 14 | 4 | 4 | 0 | ≠0 |
| feature-b-firefox | FR-11 | Firefox | 14 | 4 | 4 | 0 | ≠0 |
| feature-b-webkit | FR-11 | WebKit | 13 | 5 | 4 | 0 | ≠0 |
| feature-c-chromium | FR-18 | Chromium | 18 | 6 | 0 | 0 | ≠0 |
| feature-c-firefox | FR-18 | Firefox | 15 | 4 | 0 | 5 | ≠0 |
| feature-c-webkit | FR-18 | WebKit | 18 | 6 | 0 | 0 | ≠0 |
| **Tổng** | | | **158** | **53** | **12** | **5** | |

## Fail ổn định (khớp HW2 manual)

| Bug ID | Test case | Mô tả |
| --- | --- | --- |
| BUG-A-01 | A-AUTO-06,08,12,17,20,21,23,24 | Phone regex UI ≠ spec |
| BUG-A-02 | A-AUTO-17 | Role escalation qua API |
| BUG-B-01 | B-AUTO-13,19 | GET `/api/orders/:id` lộ đơn user khác |
| BUG-B-02 | B-AUTO-09,11,21 | Nút hủy trên shipping/canceled |
| BUG-C-01 | C-AUTO-04 | User token truy cập admin API |
| BUG-C-02 | C-AUTO-12,16,22 | canceled→delivered + nút terminal |
| BUG-C-03 | C-AUTO-15,24 | XSS địa chỉ admin |

## Skip có lý do

| Test | Lý do |
| --- | --- |
| B-AUTO-01,15,16 | Empty/single-order boundary — user test đã có nhiều đơn |
| B-AUTO-22 | Không seed status `returned` qua API |

## Evidence paths

- JSON: `evidence/execution-summary.json`
- HTML: `evidence/html-reports/feature-*-{browser}/index.html`
- Per-browser JSON: `automation/reports/feature-{a,b,c}/summary-{browser}.json`
