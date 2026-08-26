# Evidence — HW04 Automation (23127173)

Bằng chứng thực thi Playwright trên SUT EShop local (`localhost:5180` / `5174` / `3000`).

## Tóm tắt nhanh

| Chỉ số | Giá trị |
| --- | --- |
| Test case thiết kế (spec oracle HW2) | **76** (A:30, B:22, C:24) |
| Browser runs | **9** (3 feature × Chromium/Firefox/WebKit) |
| Tổng execution (9 runs) | 158 Pass / 53 Fail / 12 Skip / 5 Timeout |
| Thời gian matrix | ~19 phút (17/08/2026, headless) |
| Metadata report | `Run by: 23127173` + ISO timestamp |

## Cấu trúc

```text
evidence/
├── execution-summary.json     ← ma trận 9 run + số liệu JSON
├── html-reports/
│   ├── feature-a-chromium/    ← mở index.html trong browser
│   ├── feature-a-firefox/
│   ├── feature-a-webkit/
│   ├── feature-b-chromium/
│   ├── feature-b-firefox/
│   ├── feature-b-webkit/
│   ├── feature-c-chromium/
│   ├── feature-c-firefox/
│   └── feature-c-webkit/
└── demo-video/                ← [CHƯA QUAY] video ≥ 5 phút
```

## Kết quả theo feature (Chromium — baseline)

| Feature | Pass | Fail | Skip | Bug HW2 liên quan |
| --- | ---: | ---: | ---: | --- |
| A — FR-04 Profile | 22 | 8 | 0 | BUG-A-01 phone UI, BUG-A-02 role |
| B — FR-11 Order history | 14 | 4 | 4 | BUG-B-01 order leak, shipping cancel |
| C — FR-18 Admin orders | 18 | 6 | 0 | BUG-C-01 role, BUG-C-02 transition, BUG-C-03 XSS |

> Fail theo **spec oracle** = phát hiện defect SUT, không phải lỗi script.

## Lệnh tái tạo

```bash
cd automation
npm install
npx playwright install
npm run test:full-matrix
```
