# EShop HW04 Automation (MSSV 23127173)

Playwright project — push thư mục này lên **GitHub public** và dán URL vào `README.md`.

## Setup

```bash
cp .env.example .env
npm install
npx playwright install
```

Chạy EShop (backend + frontend-web + frontend-admin) trước khi test.

## Chạy test

```bash
npm run test:feature-a
npm run test:feature-b
npm run test:feature-c
npm run test:all-browsers
```

## HTML report

Sau mỗi lần chạy, mở `reports/html/index.html`. Kiểm tra metadata:

- `Run by: 23127173`
- `Run at: <ISO timestamp>`

Copy report vào `../evidence/html-reports/feature-{a,b,c}-{browser}/`.

## Assertion patterns (≥ 3)

1. **URL** — `toHaveURL`
2. **Visibility / text** — `toBeVisible`, `toHaveText`
3. **Count / attribute / validity** — `toHaveCount`, `toHaveAttribute`, `checkValidity`

## Data-driven

Test data: `data/feature-*.json` — **không** hardcode trong spec.
