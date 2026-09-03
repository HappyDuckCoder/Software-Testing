import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dateTag = process.env.NEWMAN_DATE_TAG || '20260903';

const collection = 'postman/collections/23127173_HW06_EShop_API.postman_collection.json';
const environment = 'postman/environments/eshop.local.template.postman_environment.json';
const txtOut = path.join(root, `newman/raw-output/full-120-${dateTag}.txt`);
const jsonOut = path.join(root, `newman/raw-output/full-120-${dateTag}.json`);
const htmlOut = path.join(root, 'newman/html-reports/report.html');

const quote = (value) => `"${value.replace(/"/g, '\\"')}"`;

const command = [
  'npx newman run',
  quote(collection),
  '-e',
  quote(environment),
  '--folder "00 Setup"',
  '--folder "A FR-04 Profile (40 TC)"',
  '--folder "C FR-18 Admin order status (40 TC)"',
  '--folder "B FR-10 Cancel order (40 TC)"',
  '--disable-unicode',
  '-r cli,json,htmlextra',
  `--reporter-json-export ${quote(jsonOut)}`,
  `--reporter-htmlextra-export ${quote(htmlOut)}`,
].join(' ');

if (process.platform === 'win32') {
  try {
    execSync('chcp 65001 >nul', { stdio: 'ignore', shell: true });
  } catch {
    // ignore
  }
}

fs.mkdirSync(path.dirname(txtOut), { recursive: true });
fs.mkdirSync(path.dirname(htmlOut), { recursive: true });

let output = '';
let exitCode = 0;

try {
  output = execSync(command, {
    cwd: root,
    encoding: 'utf8',
    env: {
      ...process.env,
      PYTHONIOENCODING: 'utf-8',
      NODE_NO_WARNINGS: '1',
    },
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  });
} catch (err) {
  output = [err.stdout ?? '', err.stderr ?? ''].join('\n').replace(/^\n+/, '');
  exitCode = err.status ?? 1;
}

output = output.replace(/\r?\n?\(node:\d+\).*DeprecationWarning[\s\S]*?(?=\r?\n\r?\n|$)/g, '').trimEnd();

fs.writeFileSync(txtOut, output, { encoding: 'utf8' });
process.stdout.write(output);

if (exitCode !== 0) {
  console.log('\nNewman finished with failing assertions (expected for spec oracle).');
}

process.exit(exitCode);
