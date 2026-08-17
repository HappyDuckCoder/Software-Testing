# EShop HW04 Automation (MSSV 23127173)

Playwright project — push thư mục này lên **GitHub public** và dán URL vào `README.md`.

## Setup

```bash
cp .env.example .env
npm install
npx playwright install
```

Chạy EShop trước khi test (port **5180** cho web — tránh xung đột app khác trên 5173):

```bash
# Terminal 1 — backend
cd Eshop/backend
node server.js

# Terminal 2 — frontend web (port 5180)
cd Eshop/frontend-web
npm run dev -- --host 127.0.0.1 --port 5180

# Terminal 3 — admin
cd Eshop/frontend-admin
npm run dev -- --host 127.0.0.1 --port 5174
```

## Chạy test

```bash
# Full matrix: 9 browser runs + copy evidence (khuyến nghị trước nộp)
npm run test:full-matrix

# Headless từng feature
npm run test:feature-a
npm run test:feature-b
npm run test:feature-c
npm run test:all-browsers

# Headed Chromium (demo)
npm run test:feature-a:headed
npm run test:headed
npm run test:ui
```

## Test coverage (spec oracle HW2)

| Feature | File data | TC |
| --- | --- | ---: |
| FR-04 Profile | `data/feature-a-profile.json` | 30 |
| FR-11 Order history | `data/feature-b-order-history.json` | 22 |
| FR-18 Admin orders | `data/feature-c-admin-orders.json` | 24 |

## HTML report

Sau mỗi lần chạy: `reports/html/index.html` (metadata `Run by: 23127173`).

`npm run test:full-matrix` tự copy vào `../evidence/html-reports/` và ghi `../evidence/execution-summary.json`.
Per-browser JSON: `reports/feature-{a,b,c}/summary-{browser}.json`.

## Assertion patterns (≥ 3)

1. **URL** — `toHaveURL`
2. **Visibility / text** — `toBeVisible`, `toHaveText`
3. **Count / attribute / validity** — `toHaveCount`, `toHaveAttribute`, `checkValidity`

## Data-driven

Test data: `data/feature-*.json` — **không** hardcode trong spec.
