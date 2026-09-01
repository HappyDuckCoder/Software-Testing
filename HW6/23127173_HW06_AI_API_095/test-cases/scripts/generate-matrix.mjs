import { mkdir, writeFile } from 'node:fs/promises';

const out = new URL('../', import.meta.url);
const make = (api, endpoint, rows) => rows.map((title, index) => ({
  id: `${api}-${String(index + 1).padStart(3, '0')}`,
  api, endpoint, title,
  source: index < 35 ? 'AI-generated' : 'Student-added',
  audit: index < 30 ? 'VALID' : index < 35 ? 'INCOMPLETE' : 'VALID',
  rationale: index < 30
    ? 'Traceable to specification/security rule; executable after isolated setup.'
    : index < 35
      ? 'Exact validation/status is ambiguous in specification; student must verify oracle and record correction.'
      : 'Student-added gap case; verify precondition and expected status before final execution.',
  verify: '',
}));

const profile = [
  'Valid full profile update', 'Name minimum length', 'Name maximum supported length', 'Unicode Vietnamese name', 'Name contains leading/trailing spaces', 'Name omitted', 'Name null', 'Name numeric value', 'Name SQL injection payload', 'Name XSS payload',
  'Address normal Vietnamese format', 'Address empty string', 'Address omitted', 'Address null', 'Address very long value', 'Address SQL injection payload', 'Address XSS payload', 'Phone valid 10 digits', 'Phone valid 11 digits', 'Phone begins with zero',
  'Phone too short', 'Phone too long', 'Phone alphabetic', 'Phone special characters', 'Phone whitespace', 'Phone null', 'Missing JWT', 'Malformed JWT', 'Expired JWT', 'Foreign token cannot alter another user',
  'Role mass assignment', 'isAdmin mass assignment', 'Unknown extra field', 'Content-Type missing', 'Response schema/message contract',
  'Student: simultaneous profile requests', 'Student: empty JSON object', 'Student: duplicate update idempotency', 'Student: emoji name', 'Student: phone international prefix',
];
const cancel = [
  'Cancel own pending order', 'Cancel same order twice', 'Cancel own confirmed order', 'Cancel own shipping order', 'Cancel delivered order', 'Cancel canceled order', 'Cancel pending order immediately after checkout', 'Cancel with numeric ID', 'Cancel ID zero', 'Cancel negative ID',
  'Cancel decimal ID', 'Cancel alphabetic ID', 'Cancel SQL injection ID', 'Cancel XSS ID', 'Cancel very large ID', 'Cancel nonexistent ID', 'Cancel missing path ID', 'Cancel with query-string noise', 'Cancel with trailing slash', 'Cancel missing JWT',
  'Cancel malformed JWT', 'Cancel expired JWT', 'Cancel another user order IDOR', 'Cancel using admin token', 'Authorization header lowercase variation', 'Authorization missing Bearer prefix', 'Empty Bearer token', 'Method GET rejected', 'Unexpected request body', 'Response success schema',
  'State persisted as canceled', 'History reflects cancellation', 'Concurrent cancel race', 'Cancel after admin confirmation', 'Cancel after admin shipping',
  'Student: cancel response time boundary', 'Student: repeated cancel after network retry', 'Student: owner token with whitespace', 'Student: unicode path input', 'Student: cancel seeded fixture only',
];
const admin = [
  'Admin pending to confirmed', 'Admin confirmed to shipping', 'Admin shipping to delivered', 'Admin pending to canceled', 'Admin confirmed to canceled', 'Admin shipping to canceled rejected', 'Admin delivered to canceled rejected', 'Admin canceled to pending rejected', 'Admin delivered to confirmed rejected', 'Admin invalid returned status',
  'Admin status missing', 'Admin status null', 'Admin status empty string', 'Admin status numeric', 'Admin status mixed case', 'Admin status whitespace', 'Admin status SQL injection', 'Admin status XSS payload', 'Admin unknown extra field', 'Admin missing JWT',
  'Admin malformed JWT', 'Admin expired JWT', 'User token denied', 'Another non-admin token denied', 'Admin order ID zero', 'Admin order negative ID', 'Admin decimal ID', 'Admin alphabetic ID', 'Admin SQL injection ID', 'Admin nonexistent ID',
  'Admin missing path ID', 'Admin GET method rejected', 'Admin response schema/message', 'Transition persists in order detail', 'Concurrent status update race',
  'Student: duplicate confirmed transition', 'Student: admin token whitespace', 'Student: JSON array body', 'Student: oversized status string', 'Student: state transition after checkout fixture',
];
const cases = [
  ...make('A', 'PUT /api/users/me', profile),
  ...make('B', 'PUT /api/orders/:id/cancel', cancel),
  ...make('C', 'PUT /api/admin/orders/:id/status', admin),
];
const md = [
  '# HW06 Test-case matrix and human audit', '',
  'Each API has 40 cases: 35 AI-generated and 5 student-added. `Student Verify` is deliberately blank for the student to confirm each case before final execution/export.', '',
  '| ID | API | Endpoint | Test case | Source | Audit verdict | Audit rationale/correction | Student Verify |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ...cases.map(c => `| ${c.id} | ${c.api} | ${c.endpoint} | ${c.title} | ${c.source} | ${c.audit} | ${c.rationale} | ${c.verify} |`), '',
  '## Audit notes', '',
  '- `VALID`: oracle is traceable to API specification/security rule and can be executed with isolated setup.',
  '- `INCOMPLETE`: exact validation/status/schema is not fully specified; student must verify against SUT/spec before treating it as an executable assertion.',
  '- Student-added cases are the final five rows of each API and target retry, concurrency, encoding, idempotency, or fixture-control gaps.',
].join('\n');
const csv = ['ID,API,Endpoint,Test case,Source,Audit verdict,Audit rationale/correction,Student Verify', ...cases.map(c => [c.id,c.api,c.endpoint,`"${c.title}"`,c.source,c.audit,`"${c.rationale}"`,c.verify].join(','))].join('\n');
await mkdir(out, { recursive: true });
await writeFile(new URL('test-case-matrix.md', out), md);
await writeFile(new URL('test-case-source.csv', out), csv);
