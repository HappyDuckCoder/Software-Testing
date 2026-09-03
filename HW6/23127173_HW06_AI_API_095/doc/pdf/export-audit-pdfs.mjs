import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../..');
const require = createRequire(path.join(hwRoot, 'api-testing/package.json'));
const mdToPdf = require('md-to-pdf').default ?? require('md-to-pdf');

const launchOptions = process.env.PUPPETEER_EXECUTABLE_PATH
  ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
  : undefined;

const auditCss = fs.readFileSync(path.join(__dirname, 'audit-report.css'), 'utf8');
const critiqueCss = fs.readFileSync(path.join(__dirname, 'ai-critique.css'), 'utf8');

const { filename: auditFile } = await mdToPdf(
  { path: path.join(hwRoot, 'doc/md/AI Audit/01_AI-Audit-Report.md') },
  {
    css: auditCss,
    body_class: ['audit-report'],
    launch_options: launchOptions,
    pdf_options: {
      format: 'A4',
      printBackground: true,
      margin: { top: '18mm', right: '16mm', bottom: '20mm', left: '16mm' },
    },
    dest: path.join(__dirname, 'AI-Audit-Report.pdf'),
  }
);
console.log(`Wrote ${auditFile}`);

const { filename: critiqueFile } = await mdToPdf(
  { path: path.join(hwRoot, 'doc/md/AI Audit/02_AI-Critique.md') },
  {
    css: critiqueCss,
    body_class: ['ai-critique'],
    launch_options: launchOptions,
    pdf_options: {
      format: 'A4',
      printBackground: true,
      margin: { top: '22mm', right: '22mm', bottom: '24mm', left: '22mm' },
    },
    dest: path.join(__dirname, 'AI-Critique.pdf'),
  }
);
console.log(`Wrote ${critiqueFile}`);
