import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const studentId = process.env.STUDENT_ID ?? '23127173';
const runAt = new Date().toISOString();
const headed = process.env.HEADED === '1' || process.env.HEADED === 'true';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  timeout: 60_000,
  metadata: {
    'Run by': studentId,
    'Run at': runAt,
    Course: 'CS423 HW04 Automation',
  },
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'reports/html' }],
    ['json', { outputFile: 'reports/summary.json' }],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:5180',
    headless: !headed,
    launchOptions: headed ? { slowMo: 250 } : undefined,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: headed ? 'on' : 'off',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
