# Domain Testing - FR-04 Quản lý hồ sơ cá nhân

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | `backend/server.js`, AuthContext | Bắt buộc cho `GET`/`PUT /api/users/me`; missing token is 401; invalid token is 403 | Có bằng chứng source |
| `name` | Text | `Profile.jsx`, `server.js` | UI input is `required`; backend has no explicit validation | Test UI and API paths separately |
| `phone` | Text | `README.md`, `Profile.jsx` | README: starts with `0`, 10-11 digits. Frontend regex contradicts this: `^[1-9][0-9]{8,9}$` | Cao-risk validation mismatch |
| `shipping_address` | Text | `api_specification.md`, `Profile.jsx` | Editable default shipping address; no required/max limit in source | Rỗng address should be tested |
| Email | Text/display | `README.md`, `Profile.jsx` | Email is disabled in UI and not sent by frontend update body | API unexpected field should be ignored |
| `role` | Text/unexpected field | `README.md`, `server.js` | README forbids user role change; backend currently updates `role` if supplied | Security negative test |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| A-DT-EC-01 | Token xác thực | Valid | Valid bearer token from login | token for `test@eshop.com` | Required access state |
| A-DT-EC-02 | Token xác thực | Invalid | Thiếu token | no `Authorization` header | Should return 401 |
| A-DT-EC-03 | Token xác thực | Invalid | Malformed/expired token | `Bearer invalid.token` | Should return 403 |
| A-DT-EC-04 | `name` | Valid | Non-empty text | `Nguyen Van A` | Normal update |
| A-DT-EC-05 | `name` | Invalid for UI | Rỗng string | `` | HTML `required` should block form submit |
| A-DT-EC-06 | `phone` | Valid by README | Starts `0`, 10 digits | `0912345678` | Lower valid phone length |
| A-DT-EC-07 | `phone` | Valid by README | Starts `0`, 11 digits | `09123456789` | Upper valid phone length |
| A-DT-EC-08 | `phone` | Invalid by README | Does not start with `0` | `912345678` | Frontend currently accepts this class |
| A-DT-EC-09 | `phone` | Invalid | Too short | `091234567` | Below phone lower bound |
| A-DT-EC-10 | `phone` | Invalid | Too long | `091234567890` | Above phone upper bound |
| A-DT-EC-11 | `phone` | Invalid | Contains non-digit characters | `09AB345678` | Format validation |
| A-DT-EC-12 | `shipping_address` | Valid | Normal address | `227 Nguyen Van Cu, District 5` | Representative update |
| A-DT-EC-13 | `shipping_address` | Valid | Rỗng address | `` | No required rule in source |
| A-DT-EC-14 | Email | Valid/no-op | Email remains unchanged | `test@eshop.com` | UI disables email |
| A-DT-EC-15 | Email | Invalid/no-op | Unexpected email field in API body | `attacker@eshop.com` | API should not update email via profile |
| A-DT-EC-16 | `role` | Invalid | Unexpected role escalation field | `admin` | README forbids role change |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| A-DT-C01 | Token + `/api/users/me` | API uses `req.user.id`; profile update should affect only logged-in user | Verify current user id/profile after update |
| A-DT-C02 | Frontend phone + README phone | UI should enforce the same rule as README | Include tests expected to reveal regex mismatch |
| A-DT-C03 | Frontend validation + backend API | Backend must not rely only on frontend validation | Include direct API negative tests |
| A-DT-C04 | Email + profile update | Email is display-only in profile management | Test disabled UI and unexpected API email payload |
| A-DT-C05 | Role + profile update | User must not self-modify `role` | Include direct API role escalation test |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-DT-01 | View own profile after login | A-DT-EC-01, A-DT-EC-06, A-DT-C01 | Token=valid user token; name=current Test User; phone=current/unchanged; shipping_address=current/unchanged; email=test@eshop.com disabled/not sent; role=not sent | Login as `test@eshop.com` / `Test1234!` | Open `/profile` | Form displays disabled email, name, phone, and shipping address for logged-in user | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| A-DT-02 | Fetch own profile by API | A-DT-EC-01, A-DT-EC-06, A-DT-C01 | Token=valid user token; name=current Test User; phone=current/unchanged; shipping_address=current/unchanged; email=test@eshop.com disabled/not sent; role=not sent | Token hợp lệ | Send request with `Authorization: Bearer <token>` | API returns current user object for token user id | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-03 | Block profile API without token | A-DT-EC-02 | Token=missing; name=N/A; phone=N/A; shipping_address=N/A; email=N/A; role=N/A | Backend running | Send `GET /api/users/me` without `Authorization` | Response 401 `Unauthorized` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-04 | Block profile API with invalid token | A-DT-EC-03 | Token=Bearer invalid.token; name=N/A; phone=N/A; shipping_address=N/A; email=N/A; role=N/A | Backend running | Send `GET /api/users/me` with malformed token | Response 403 `Forbidden` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-05 | Cập nhật hồ sơ hợp lệ through API | A-DT-EC-01, A-DT-EC-04, A-DT-EC-06, A-DT-EC-09, A-DT-EC-12, A-DT-C01 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Token hợp lệ | Send `PUT /api/users/me`; then `GET /api/users/me` | API returns `Profile updated`; persisted fields match request | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-06 | Cập nhật hồ sơ hợp lệ through UI using README-valid phone | A-DT-EC-01, A-DT-EC-04, A-DT-EC-06, A-DT-EC-09, A-DT-EC-12, A-DT-C02 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập on frontend | Enter name/address/phone; click update | Nên accept because README says phone starts `0`, 10-11 digits | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; likely exposes frontend bug |
| A-DT-07 | Reject empty name in UI | A-DT-EC-05 | Token=valid user token; name=empty; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập on frontend | Clear name; submit form | Browser blocks submit because name input is `required` | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| A-DT-08 | Reject phone that does not start with 0 | A-DT-EC-08, A-DT-C02 | Token=valid user token; name=Nguyen Van A; phone=912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập on frontend | Enter phone; submit | Nên reject by README rule | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; likely exposes frontend bug |
| A-DT-09 | Reject phone below 10 digits | A-DT-EC-09 | Token=valid user token; name=Nguyen Van A; phone=091234567; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập or API client | Submit cập nhật hồ sơ | Nên reject by README rule | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-DT-10 | Reject phone above 11 digits | A-DT-EC-10 | Token=valid user token; name=Nguyen Van A; phone=091234567890; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập or API client | Submit cập nhật hồ sơ | Nên reject by README rule | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-DT-11 | Reject phone containing letters | A-DT-EC-11 | Token=valid user token; name=Nguyen Van A; phone=09AB345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập or API client | Submit cập nhật hồ sơ | Nên reject non-digit phone | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-DT-12 | Accept 11-digit phone starting with 0 | A-DT-EC-07, A-DT-C02 | Token=valid user token; name=Nguyen Van A; phone=09123456789; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập or API client | Submit update; refetch hồ sơ | Nên accept and persist per README | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; likely frontend rejects |
| A-DT-13 | Update normal shipping address | A-DT-EC-01, A-DT-EC-04, A-DT-EC-06, A-DT-EC-12 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu, District 5; email=test@eshop.com disabled/not sent; role=not sent | Token hợp lệ | Send update; refetch hồ sơ | `shipping_address` persists exactly | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-14 | Allow empty shipping address | A-DT-EC-13 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=empty; email=test@eshop.com disabled/not sent; role=not sent | Token hợp lệ | Xóa địa chỉ; cập nhật; refetch hồ sơ | Rỗng address is accepted because source has no required rule | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-DT-15 | Ensure email cannot be edited via UI | A-DT-EC-14, A-DT-C04 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled UI field; role=not sent | Đã đăng nhập on frontend | Inspect profile form; attempt to focus/edit email | Email input is disabled and not editable | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| A-DT-16 | Ignore unexpected email in API profile update | A-DT-EC-15, A-DT-C04 | Token=valid user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=attacker@eshop.com sent unexpectedly; role=not sent | Token hợp lệ | Send `PUT /api/users/me`; then `GET /api/users/me` | Email remains unchanged because profile API body does not support email | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| A-DT-17 | Prevent role escalation through profile API | A-DT-EC-16, A-DT-C05 | Token=valid normal-user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=admin sent unexpectedly | Token hợp lệ for normal user | Send `PUT /api/users/me`; then `GET /api/users/me` | Role remains `user` or request is rejected | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API; source indicates bug |
| A-DT-18 | Verify update affects only current user | A-DT-C01 | Token=valid normal-user token; name=Nguyen Van A; phone=0912345678; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent; target_user_id=implicit token owner only | Two users exist in seed DB | Update profile as `test@eshop.com`; inspect admin user separately if possible | Only token owner's row changes | Chưa chạy | Chưa chạy | Chờ bổ sung API/DB evidence |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* This version is dựa trên source, not assumption-based. Removed non-existent fields from the previous draft: DOB, gender, avatar.
* Source review found likely defects before execution: frontend phone regex contradicts README, and backend accepts `role` in profile update.





