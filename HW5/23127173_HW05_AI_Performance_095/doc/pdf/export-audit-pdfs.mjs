import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../..');
const require = createRequire(path.join(__dirname, 'package.json'));
const mdToPdf = require('md-to-pdf').default ?? require('md-to-pdf');

for (const [source, destination] of [
  ['01_AI-Audit-Report.md', 'AI-Audit-Report.pdf'],
  ['02_AI-Critique.md', 'AI-Critique.pdf'],
]) {
  const { filename } = await mdToPdf(
    { path: path.join(hwRoot, 'doc/md/AI Audit', source) },
    {
      launch_options: process.env.PUPPETEER_EXECUTABLE_PATH
        ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
        : undefined,
      pdf_options: {
        format: 'A4',
        printBackground: true,
        margin: { top: '18mm', right: '18mm', bottom: '18mm', left: '18mm' },
      },
      dest: path.join(__dirname, destination),
    }
  );
  console.log(`Wrote ${filename}`);
}
