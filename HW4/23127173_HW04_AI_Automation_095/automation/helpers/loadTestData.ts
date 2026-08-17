import fs from 'fs';
import path from 'path';
import type { ProfileExpected, ProfileInput, ProfileTestRow } from './profileSpec';

export type TestRow = ProfileTestRow & {
  type?: 'positive' | 'negative' | 'edge' | 'boundary';
  assertionPattern?: 'url' | 'visibility' | 'text' | 'attribute' | 'count' | 'state';
  group?: 'empty' | 'with-orders';
  action?: string;
  skip?: boolean;
  skipReason?: string;
  input?: ProfileInput & Record<string, string>;
  expected?: ProfileExpected & { httpStatus?: number };
};

export function loadTestData(filename: string): TestRow[] {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw) as { tests: TestRow[] };
  return parsed.tests;
}
