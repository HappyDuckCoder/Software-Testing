import { readFile } from "node:fs/promises";

const [jtlPath, baselinePath] = process.argv.slice(2);
if (!jtlPath || !baselinePath) {
  throw new Error("Usage: node compare-performance-baseline.mjs <result.jtl> <baseline.json>");
}

const baseline = JSON.parse(await readFile(baselinePath, "utf8"));
const lines = (await readFile(jtlPath, "utf8")).trim().split(/\r?\n/);
function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += character;
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += character;
    }
  }
  values.push(value);
  return values;
}

const headers = parseCsvLine(lines.shift());
const column = Object.fromEntries(headers.map((name, index) => [name, index]));
const workflows = lines
  .map(parseCsvLine)
  .filter((row) => row[column.label] === baseline.workflowLabel);

if (workflows.length === 0) {
  throw new Error(`No '${baseline.workflowLabel}' transaction rows found in ${jtlPath}.`);
}

const elapsed = workflows.map((row) => Number(row[column.elapsed])).sort((a, b) => a - b);
const p95 = elapsed[Math.ceil(elapsed.length * 0.95) - 1];
const failures = workflows.filter((row) => row[column.success] !== "true").length;
const errorRatePercent = (failures / workflows.length) * 100;
const p95IncreasePercent = ((p95 - baseline.p95Ms) / baseline.p95Ms) * 100;
const summary = { workflows: workflows.length, p95, errorRatePercent, p95IncreasePercent };
console.log(JSON.stringify(summary, null, 2));

if (p95IncreasePercent > baseline.maxP95IncreasePercent || errorRatePercent > baseline.maxErrorRatePercent) {
  console.error("Performance regression gate failed.");
  process.exitCode = 1;
}
