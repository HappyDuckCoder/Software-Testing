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
# Headless (CI / nhanh)
npm run test:feature-a

# Nhìn Chromium chạy trực tiếp
npm run test:feature-a:headed
npm run test:headed

# Playwright UI (chọn test, xem từng bước)
npm run test:ui
```

```bash
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
