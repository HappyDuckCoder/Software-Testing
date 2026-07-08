# Domain Testing - FR-04 Personal Profile Management

## 1. Input Domain

| Variable | Type | Source | Constraints | Notes |
| --- | --- | --- | --- | --- |
| Authorization token | Header/state | `backend/server.js`, AuthContext | Required for `GET`/`PUT /api/users/me`; missing token is 401; invalid token is 403 | Source-backed |
| `name` | Text | `Profile.jsx`, `server.js` | UI input is `required`; backend has no explicit validation | Test UI and API paths separately |
| `phone` | Text | `README.md`, `Profile.jsx` | README: starts with `0`, 10-11 digits. Frontend regex contradicts this: `^[1-9][0-9]{8,9}$` | High-risk validation mismatch |
| `shipping_address` | Text | `api_specification.md`, `Profile.jsx` | Editable default shipping address; no required/max limit in source | Empty address should be tested |
| Email | Text/display | `README.md`, `Profile.jsx` | Email is disabled in UI and not sent by frontend update body | API unexpected field should be ignored |
| `role` | Text/unexpected field | `README.md`, `server.js` | README forbids user role change; backend currently updates `role` if supplied | Security negative test |

## 2. Equivalence Classes

| Class ID | Variable | Valid/Invalid | Partition | Representative value | Reason |
| --- | --- | --- | --- | --- | --- |
| A-DT-EC-01 | Authorization token | Valid | Valid bearer token from login | token for `test@eshop.com` | Required access state |
| A-DT-EC-02 | Authorization token | Invalid | Missing token | no `Authorization` header | Should return 401 |
| A-DT-EC-03 | Authorization token | Invalid | Malformed/expired token | `Bearer invalid.token` | Should return 403 |
| A-DT-EC-04 | `name` | Valid | Non-empty text | `Nguyen Van A` | Normal update |
| A-DT-EC-05 | `name` | Invalid for UI | Empty string | `` | HTML `required` should block form submit |
| A-DT-EC-06 | `phone` | Valid by README | Starts `0`, 10 digits | `0912345678` | Lower valid phone length |
| A-DT-EC-07 | `phone` | Valid by README | Starts `0`, 11 digits | `09123456789` | Upper valid phone length |
| A-DT-EC-08 | `phone` | Invalid by README | Does not start with `0` | `912345678` | Frontend currently accepts this class |
| A-DT-EC-09 | `phone` | Invalid | Too short | `091234567` | Below phone lower bound |
| A-DT-EC-10 | `phone` | Invalid | Too long | `091234567890` | Above phone upper bound |
| A-DT-EC-11 | `phone` | Invalid | Contains non-digit characters | `09AB345678` | Format validation |
| A-DT-EC-12 | `shipping_address` | Valid | Normal address | `227 Nguyen Van Cu, District 5` | Representative update |
| A-DT-EC-13 | `shipping_address` | Valid | Empty address | `` | No required rule in source |
| A-DT-EC-14 | Email | Valid/no-op | Email remains unchanged | `test@eshop.com` | UI disables email |
| A-DT-EC-15 | Email | Invalid/no-op | Unexpected email field in API body | `attacker@eshop.com` | API should not update email via profile |
| A-DT-EC-16 | `role` | Invalid | Unexpected role escalation field | `admin` | README forbids role change |

## 3. Cross-Variable Constraints

| Constraint ID | Variables / State | Rule | Test impact |
| --- | --- | --- | --- |
| A-DT-C01 | Token + `/api/users/me` | API uses `req.user.id`; profile update should affect only logged-in user | Verify current user id/profile after update |
| A-DT-C02 | Frontend phone + README phone | UI should enforce the same rule as README | Include tests expected to reveal regex mismatch |
| A-DT-C03 | Frontend validation + backend API | Backend must not rely only on frontend validation | Include direct API negative tests |
| A-DT-C04 | Email + profile update | Email is display-only in profile management | Test disabled UI and unexpected API email payload |
| A-DT-C05 | Role + profile update | User must not self-modify `role` | Include direct API role escalation test |

## 4. Domain Test Cases

| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-DT-01 | View own profile after login | Valid login token | Login as `test@eshop.com` / `Test1234!` | Open `/profile` | Form displays disabled email, name, phone, and shipping address for logged-in user | Not run | Not run | Pending screenshot |
| A-DT-02 | Fetch own profile by API | `GET /api/users/me` with valid token | Valid token | Send request with `Authorization: Bearer <token>` | API returns current user object for token user id | Not run | Not run | Pending API evidence |
| A-DT-03 | Block profile API without token | No token | Backend running | Send `GET /api/users/me` without `Authorization` | Response 401 `Unauthorized` | Not run | Not run | Pending API evidence |
| A-DT-04 | Block profile API with invalid token | `Bearer invalid.token` | Backend running | Send `GET /api/users/me` with malformed token | Response 403 `Forbidden` | Not run | Not run | Pending API evidence |
| A-DT-05 | Update valid profile through API | `name=Nguyen Van A`, `phone=0912345678`, `shipping_address=227 Nguyen Van Cu` | Valid token | Send `PUT /api/users/me`; then `GET /api/users/me` | API returns `Profile updated`; persisted fields match request | Not run | Not run | Pending API evidence |
| A-DT-06 | Update valid profile through UI using README-valid phone | Phone `0912345678` | Logged in on frontend | Enter name/address/phone; click update | Should accept because README says phone starts `0`, 10-11 digits | Not run | Not run | Pending screenshot; likely exposes frontend bug |
| A-DT-07 | Reject empty name in UI | Empty `name`; other fields valid | Logged in on frontend | Clear name; submit form | Browser blocks submit because name input is `required` | Not run | Not run | Pending screenshot |
| A-DT-08 | Reject phone that does not start with 0 | Phone `912345678` | Logged in on frontend | Enter phone; submit | Should reject by README rule | Not run | Not run | Pending screenshot; likely exposes frontend bug |
| A-DT-09 | Reject phone below 10 digits | Phone `091234567` | Logged in or API client | Submit profile update | Should reject by README rule | Not run | Not run | Pending evidence |
| A-DT-10 | Reject phone above 11 digits | Phone `091234567890` | Logged in or API client | Submit profile update | Should reject by README rule | Not run | Not run | Pending evidence |
| A-DT-11 | Reject phone containing letters | Phone `09AB345678` | Logged in or API client | Submit profile update | Should reject non-digit phone | Not run | Not run | Pending evidence |
| A-DT-12 | Accept 11-digit phone starting with 0 | Phone `09123456789` | Logged in or API client | Submit update; refetch profile | Should accept and persist per README | Not run | Not run | Pending evidence; likely frontend rejects |
| A-DT-13 | Update normal shipping address | Address `227 Nguyen Van Cu, District 5` | Valid token | Send update; refetch profile | `shipping_address` persists exactly | Not run | Not run | Pending API evidence |
| A-DT-14 | Allow empty shipping address | Empty `shipping_address` | Valid token | Clear address; update; refetch profile | Empty address is accepted because source has no required rule | Not run | Not run | Pending evidence |
| A-DT-15 | Ensure email cannot be edited via UI | Email field | Logged in on frontend | Inspect profile form; attempt to focus/edit email | Email input is disabled and not editable | Not run | Not run | Pending screenshot |
| A-DT-16 | Ignore unexpected email in API profile update | Body includes `email=attacker@eshop.com` plus valid profile fields | Valid token | Send `PUT /api/users/me`; then `GET /api/users/me` | Email remains unchanged because profile API body does not support email | Not run | Not run | Pending API evidence |
| A-DT-17 | Prevent role escalation through profile API | Body includes `role=admin` plus valid profile fields | Valid token for normal user | Send `PUT /api/users/me`; then `GET /api/users/me` | Role remains `user` or request is rejected | Not run | Not run | Pending API evidence; source indicates bug |
| A-DT-18 | Verify update affects only current user | Valid token for normal user; no user id parameter | Two users exist in seed DB | Update profile as `test@eshop.com`; inspect admin user separately if possible | Only token owner's row changes | Not run | Not run | Pending API/DB evidence |

## 5. Review Notes

* Agent skills used: `eshop-feature-inspector`, `domain-testing-designer`.
* This version is source-based, not assumption-based. Removed non-existent fields from the previous draft: DOB, gender, avatar.
* Source review found likely defects before execution: frontend phone regex contradicts README, and backend accepts `role` in profile update.
