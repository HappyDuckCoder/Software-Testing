# Postman, Newman and CI implementation reference

## Collection-level pre-request script

Use a collection-level script, then confirm in Postman Console during a real run:

```javascript
pm.request.headers.upsert({ key: 'X-Student-Id', value: '23127173' });
```

If authorization is managed in the script, fail fast when the required variable is absent; do not substitute a hard-coded secret.

## Assertion patterns

Use only assertions supported by the verified API contract. Typical examples:

```javascript
pm.test('status matches the approved oracle', () => {
  pm.response.to.have.status(Number(pm.variables.get('expectedStatus')));
});

pm.test('response is JSON', () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');
  pm.response.json();
});

pm.test('required response fields exist', () => {
  const body = pm.response.json();
  pm.expect(body).to.have.property('message'); // replace with endpoint-specific schema
});
```

Do not use the illustrative `message` assertion unless it is in the endpoint's approved response contract. For a mutation, use a follow-up read/API/database-visible check only when authorized and safe.

## Newman command template

Record the actual expanded command in the report. Example structure:

```powershell
newman run api-testing/postman/collections/<collection>.json `
  -e api-testing/postman/environments/<environment>.json `
  -d api-testing/data/<data>.csv `
  -r cli,htmlextra `
  --reporter-htmlextra-export api-testing/newman/html-reports/<run>/report.html
```

Omit `-d` or `htmlextra` when not used/installed; do not claim a reporter or data-driven run that was not executed. Preserve CLI output under `api-testing/newman/raw-output/` and note the hostname in it.

## CI minimum contract

The workflow should check out the collection revision; install exact dependencies; start/provision the target SUT; wait for a health check with a bounded timeout; run Newman; always upload raw/HTML reports; and fail the job when tests fail. Keep tokens/secrets in CI secret storage, not collection/environment files. Record the workflow URL, commit SHA and artifact link for both required runs.
