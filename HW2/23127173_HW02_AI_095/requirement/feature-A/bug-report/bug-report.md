# Bug Report - FR-04 Quản lý hồ sơ cá nhân

The following bugs are source-identified from the EShop repo and should be confirmed by executing the related test cases on the running SUT.

| Bug ID | Tóm tắt | Severity | Priority | GitHub Issue | Bằng chứng | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-A-01 | Frontend phone validation contradicts FR-04 README rule | Major | Cao | Chờ bổ sung | `Eshop/README.md` FR-04 vs `Eshop/frontend-web/src/pages/Profile.jsx` regex | Đã xác định từ source; chờ thực thi xác nhận |
| BUG-A-02 | `PUT /api/users/me` allows user to change own `role` | Critical | Cao | Chờ bổ sung | `Eshop/README.md` FR-04 vs `Eshop/backend/server.js` role update branch | Đã xác định từ source; chờ thực thi xác nhận |

## BUG-A-01 - Frontend Phone Validation Contradicts FR-04

### Tóm tắt

The README says a valid profile phone number starts with `0` and has 10-11 digits, but the frontend profile form validates phone using `^[1-9][0-9]{8,9}$`.

### Môi trường

* SUT: EShop web application
* Feature: FR-04 Quản lý hồ sơ cá nhân
* Component: `frontend-web/src/pages/Profile.jsx`

### Tiền điều kiện

1. User is logged in.
2. Profile page is open.

### Các bước tái hiện

1. Enter phone `0912345678`.
2. Submit the profile form.
3. Then enter phone `912345678`.
4. Submit the profile form again.

### Kết quả mong đợi

`0912345678` should be accepted because it starts with `0` and has 10 digits. `912345678` should be rejected because it does not start with `0` and has only 9 digits.

### Kết quả thực tế

Chờ thực thi. Đọc source indicates the opposite may happen because the frontend regex rejects leading `0` and accepts 9-10 digits starting from `1-9`.

### Bằng chứng

Chờ bổ sung screenshot/video. Bằng chứng source: `Profile.jsx` phone regex and README FR-04 phone rule.

## BUG-A-02 - Profile API Allows Role Escalation

### Tóm tắt

FR-04 says users cannot change their own `role`, but `PUT /api/users/me` reads `role` from the request body and includes it in the SQL update when provided.

### Môi trường

* SUT: EShop backend API
* Feature: FR-04 Quản lý hồ sơ cá nhân
* Endpoint: `PUT /api/users/me`

### Tiền điều kiện

1. Normal user account exists, for example `test@eshop.com`.
2. User has a valid bearer token.

### Các bước tái hiện

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

### Kết quả mong đợi

The request should reject `role`, ignore it, or keep the user role as `user`.

### Kết quả thực tế

Chờ thực thi. Đọc source indicates the backend appends `role = ?` to the SQL update when `role` exists in the request body.

### Bằng chứng

Chờ bổ sung API screenshot/log and GitHub Issue link. Bằng chứng source: `backend/server.js` profile update route.





