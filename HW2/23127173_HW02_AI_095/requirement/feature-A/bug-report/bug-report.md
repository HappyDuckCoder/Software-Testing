# Bug Report - FR-04 Personal Profile Management

The following bugs are source-identified from the EShop repo and should be confirmed by executing the related test cases on the running SUT.

| Bug ID | Summary | Severity | Priority | GitHub Issue | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-A-01 | Frontend phone validation contradicts FR-04 README rule | Major | High | Pending | `Eshop/README.md` FR-04 vs `Eshop/frontend-web/src/pages/Profile.jsx` regex | Source identified; execution pending |
| BUG-A-02 | `PUT /api/users/me` allows user to change own `role` | Critical | High | Pending | `Eshop/README.md` FR-04 vs `Eshop/backend/server.js` role update branch | Source identified; execution pending |

## BUG-A-01 - Frontend Phone Validation Contradicts FR-04

### Summary

The README says a valid profile phone number starts with `0` and has 10-11 digits, but the frontend profile form validates phone using `^[1-9][0-9]{8,9}$`.

### Environment

* SUT: EShop web application
* Feature: FR-04 Personal profile management
* Component: `frontend-web/src/pages/Profile.jsx`

### Preconditions

1. User is logged in.
2. Profile page is open.

### Steps to Reproduce

1. Enter phone `0912345678`.
2. Submit the profile form.
3. Then enter phone `912345678`.
4. Submit the profile form again.

### Expected Result

`0912345678` should be accepted because it starts with `0` and has 10 digits. `912345678` should be rejected because it does not start with `0` and has only 9 digits.

### Actual Result

Pending execution. Source inspection indicates the opposite may happen because the frontend regex rejects leading `0` and accepts 9-10 digits starting from `1-9`.

### Evidence

Pending screenshot/video. Source evidence: `Profile.jsx` phone regex and README FR-04 phone rule.

## BUG-A-02 - Profile API Allows Role Escalation

### Summary

FR-04 says users cannot change their own `role`, but `PUT /api/users/me` reads `role` from the request body and includes it in the SQL update when provided.

### Environment

* SUT: EShop backend API
* Feature: FR-04 Personal profile management
* Endpoint: `PUT /api/users/me`

### Preconditions

1. Normal user account exists, for example `test@eshop.com`.
2. User has a valid bearer token.

### Steps to Reproduce

1. Login as a normal user and capture the token.
2. Send `PUT /api/users/me` with body:

```json
{
  "name": "Test User",
  "phone": "0912345678",
  "shipping_address": "227 Nguyen Van Cu",
  "role": "admin"
}
```

3. Send `GET /api/users/me`.

### Expected Result

The request should reject `role`, ignore it, or keep the user role as `user`.

### Actual Result

Pending execution. Source inspection indicates the backend appends `role = ?` to the SQL update when `role` exists in the request body.

### Evidence

Pending API screenshot/log and GitHub Issue link. Source evidence: `backend/server.js` profile update route.
