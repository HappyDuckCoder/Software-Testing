# Feature A Report - Pool A

## 1. Feature Selection

| Field | Value |
| --- | --- |
| Pool | Pool A - Authentication, Categories, and Products |
| Selected feature | Personal profile management |
| Feature ID | FR-04 |
| Reason for selection | The EShop repo defines clear profile fields, access-control rules, API behavior, and a phone validation boundary suitable for Domain Testing and BVA. |
| Status | Source-based test design completed; execution pending on EShop SUT |

## 2. Feature Understanding From EShop Repo

| Item | Notes |
| --- | --- |
| Actor/role | Logged-in customer/user. Seed users include `admin@eshop.com` and `test@eshop.com` in `Eshop/backend/database.js`. |
| Preconditions | Backend running on `localhost:3000`; frontend running on the Vite web app; user has a valid JWT token after login. |
| Main flow | User opens `/profile`, sees email as disabled, edits `name`, `phone`, and `shipping_address`, then submits `PUT /api/users/me`. |
| Alternative flows | Missing/invalid token; blank name blocked by HTML `required`; invalid phone blocked by frontend regex; direct API request can bypass frontend validation; malicious `role` in request body. |
| Input variables | `Authorization` token, `name`, `phone`, `shipping_address`, disabled email field, unexpected API fields such as `role` and `email`. |
| Output/result | `GET /api/users/me` returns current user; `PUT /api/users/me` returns `{ message: "Profile updated" }`; frontend shows success or validation alert. |
| Business rules | README FR-04 says users can update only name, phone, and default shipping address; phone must start with `0` and contain 10-11 digits; email cannot be changed via UI; users cannot change `role`. |
| Source evidence | `Eshop/README.md` FR-04, `Eshop/api_specification.md` section 2, `Eshop/frontend-web/src/pages/Profile.jsx`, `Eshop/backend/server.js`, `Eshop/backend/database.js`. |

## 3. Feature Brief - FR-04 Personal Profile Management

### 3.1 Scope

| Item | Value |
| --- | --- |
| Pool | Pool A |
| Feature ID | FR-04 |
| Actor | Logged-in web user/customer |
| Environment | EShop web frontend + backend API |

### 3.2 Flow Analysis

| Flow | Steps | Expected result | Evidence |
| --- | --- | --- | --- |
| View profile | Login, open `/profile`; frontend uses auth context and current user data | Profile form shows email disabled, name, phone, shipping address | `frontend-web/src/pages/Profile.jsx` |
| Fetch profile API | Send `GET /api/users/me` with valid bearer token | API returns current user from `users` table using token user id | `backend/server.js` |
| Update valid profile | Submit `PUT /api/users/me` with `name`, `phone`, `shipping_address` | API updates those fields for `req.user.id` and returns `Profile updated` | `api_specification.md`, `backend/server.js` |
| Reject unauthenticated access | Call `GET`/`PUT /api/users/me` without token or with invalid token | Missing token returns 401; invalid token returns 403 | `authenticateToken` in `backend/server.js` |
| Prevent forbidden profile changes | Attempt to change email or role through UI/API | Email must not change via UI; role must not be client-changeable | `README.md` FR-04; backend currently violates role rule |

### 3.3 Input / Output Inventory

| Variable | Type | Source | Rule |
| --- | --- | --- | --- |
| Authorization token | Header/state | Auth context/API | Required for `/api/users/me`; missing token -> 401; invalid token -> 403 |
| `name` | Text | Profile form/API body | Editable. UI input has `required`; no max length in source. |
| `phone` | Text | Profile form/API body | README rule: starts with `0`, 10-11 digits. Frontend regex currently accepts `[1-9][0-9]{8,9}` instead. |
| `shipping_address` | Textarea/API body | Profile form/API body | Editable default shipping address; no required/max rule in source. |
| Email | Disabled input | Profile form | Displayed but disabled; not included in frontend update body. |
| `role` | Unexpected API body field | Direct API request | README says user cannot change role; backend currently updates role when provided. |

### 3.4 Risks for Testing

| Risk | Why it matters | How to verify |
| --- | --- | --- |
| Frontend phone validation contradicts README | Spec-valid numbers like `0912345678` may be rejected, while invalid non-zero-start numbers may pass | Execute UI tests and API tests separately |
| Backend lacks profile validation | Direct API calls can bypass frontend checks for phone/name | Execute direct `PUT /api/users/me` negative cases |
| Backend accepts `role` in profile update | This violates FR-04 and can become privilege escalation | Send `role: "admin"` in API body, then verify `GET /api/users/me` |
| Email disabled only in UI | API should ignore unexpected email fields | Send `email` in API body and verify email remains unchanged |
| Persistence must be checked through API/refetch | Success alert alone does not prove database update | Verify with `GET /api/users/me` after update |

## 4. Linked Reports

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Execution Summary

| Designed | Executed | Passed | Failed | Not executed | Bugs |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 30 | 0 | 0 | 0 | 30 | 2 |
