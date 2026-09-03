# Ma trận test case HW06

Mỗi API có **40** test case: **35 do AI sinh** (sinh viên đã rà soát và chấp nhận toàn bộ) và **5 do sinh viên tự bổ sung** (khoảng trống AI hay bỏ sót). Oracle lấy từ `Eshop/api_specification.md` và `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02, SEC-03, SEC-06), **không** suy ra từ mã nguồn backend.

| ID | Pool | Endpoint | Mô tả test case | Nguồn | Lý do AI bỏ sót (chỉ áp dụng TC sinh viên) |
| --- | --- | --- | --- | --- | --- |
| A-001 | A | PUT /api/users/me | Cập nhật profile hợp lệ đầy đủ | AI sinh | — |
| A-002 | A | PUT /api/users/me | Tên đúng độ dài tối thiểu | AI sinh | — |
| A-003 | A | PUT /api/users/me | Tên đúng độ dài tối đa | AI sinh | — |
| A-004 | A | PUT /api/users/me | Tên tiếng Việt có dấu | AI sinh | — |
| A-005 | A | PUT /api/users/me | Tên có khoảng trắng đầu/cuối | AI sinh | — |
| A-006 | A | PUT /api/users/me | Thiếu trường name | AI sinh | — |
| A-007 | A | PUT /api/users/me | Trường name = null | AI sinh | — |
| A-008 | A | PUT /api/users/me | Trường name là số | AI sinh | — |
| A-009 | A | PUT /api/users/me | Tên chứa payload SQL injection | AI sinh | — |
| A-010 | A | PUT /api/users/me | Tên chứa payload XSS | AI sinh | — |
| A-011 | A | PUT /api/users/me | Địa chỉ đúng định dạng Việt Nam | AI sinh | — |
| A-012 | A | PUT /api/users/me | Địa chỉ chuỗi rỗng | AI sinh | — |
| A-013 | A | PUT /api/users/me | Thiếu trường shipping_address | AI sinh | — |
| A-014 | A | PUT /api/users/me | Trường shipping_address = null | AI sinh | — |
| A-015 | A | PUT /api/users/me | Địa chỉ quá dài | AI sinh | — |
| A-016 | A | PUT /api/users/me | Địa chỉ chứa payload SQL injection | AI sinh | — |
| A-017 | A | PUT /api/users/me | Địa chỉ chứa payload XSS | AI sinh | — |
| A-018 | A | PUT /api/users/me | SĐT hợp lệ 10 chữ số | AI sinh | — |
| A-019 | A | PUT /api/users/me | SĐT hợp lệ 11 chữ số | AI sinh | — |
| A-020 | A | PUT /api/users/me | SĐT bắt đầu bằng số 0 | AI sinh | — |
| A-021 | A | PUT /api/users/me | SĐT quá ngắn | AI sinh | — |
| A-022 | A | PUT /api/users/me | SĐT quá dài | AI sinh | — |
| A-023 | A | PUT /api/users/me | SĐT chứa chữ cái | AI sinh | — |
| A-024 | A | PUT /api/users/me | SĐT chứa ký tự đặc biệt | AI sinh | — |
| A-025 | A | PUT /api/users/me | SĐT chỉ có khoảng trắng | AI sinh | — |
| A-026 | A | PUT /api/users/me | Trường phone = null | AI sinh | — |
| A-027 | A | PUT /api/users/me | Thiếu JWT | AI sinh | — |
| A-028 | A | PUT /api/users/me | JWT sai định dạng | AI sinh | — |
| A-029 | A | PUT /api/users/me | JWT hết hạn | AI sinh | — |
| A-030 | A | PUT /api/users/me | Token user khác không sửa được hồ sơ người khác | AI sinh | — |
| A-031 | A | PUT /api/users/me | Gán trường role từ client (SEC-06) | AI sinh | — |
| A-032 | A | PUT /api/users/me | Gán trường isAdmin từ client | AI sinh | — |
| A-033 | A | PUT /api/users/me | Gửi thêm trường lạ không có trong đặc tả | AI sinh | — |
| A-034 | A | PUT /api/users/me | Thiếu header Content-Type | AI sinh | — |
| A-035 | A | PUT /api/users/me | Kiểm tra schema/message phản hồi thành công | AI sinh | — |
| A-036 | A | PUT /api/users/me | Gửi body rỗng | Sinh viên bổ sung | AI ít nghĩ tới body hoàn toàn rỗng khi API vẫn yêu cầu JWT. |
| A-037 | A | PUT /api/users/me | User A, B, C cập nhật hồ sơ đồng thời | Sinh viên bổ sung | AI không mô phỏng nhiều user cập nhật đồng thời. |
| A-038 | A | PUT /api/users/me | Đổi mật khẩu rồi cập nhật profile | Sinh viên bổ sung | AI không nối luồng đổi mật khẩu rồi cập nhật profile ngay sau đó. |
| A-039 | A | PUT /api/users/me | Tên có emoji | Sinh viên bổ sung | AI chỉ test emoji ở nhóm student cũ, chưa tách riêng tên. |
| A-040 | A | PUT /api/users/me | Địa chỉ có emoji | Sinh viên bổ sung | AI chưa thử emoji trong địa chỉ giao hàng. |
| B-001 | B | PUT /api/orders/:id/cancel | Hủy đơn pending của chính mình | AI sinh | — |
| B-002 | B | PUT /api/orders/:id/cancel | Hủy cùng một đơn hai lần | AI sinh | — |
| B-003 | B | PUT /api/orders/:id/cancel | Hủy đơn confirmed của chính mình | AI sinh | — |
| B-004 | B | PUT /api/orders/:id/cancel | Hủy đơn đang shipping | AI sinh | — |
| B-005 | B | PUT /api/orders/:id/cancel | Hủy đơn delivered | AI sinh | — |
| B-006 | B | PUT /api/orders/:id/cancel | Hủy đơn đã canceled | AI sinh | — |
| B-007 | B | PUT /api/orders/:id/cancel | Hủy ngay sau khi checkout | AI sinh | — |
| B-008 | B | PUT /api/orders/:id/cancel | ID đơn là số hợp lệ | AI sinh | — |
| B-009 | B | PUT /api/orders/:id/cancel | ID đơn = 0 | AI sinh | — |
| B-010 | B | PUT /api/orders/:id/cancel | ID đơn âm | AI sinh | — |
| B-011 | B | PUT /api/orders/:id/cancel | ID đơn dạng thập phân | AI sinh | — |
| B-012 | B | PUT /api/orders/:id/cancel | ID đơn là chữ cái | AI sinh | — |
| B-013 | B | PUT /api/orders/:id/cancel | ID đơn chứa SQL injection | AI sinh | — |
| B-014 | B | PUT /api/orders/:id/cancel | ID đơn chứa XSS | AI sinh | — |
| B-015 | B | PUT /api/orders/:id/cancel | ID đơn rất lớn | AI sinh | — |
| B-016 | B | PUT /api/orders/:id/cancel | ID đơn không tồn tại | AI sinh | — |
| B-017 | B | PUT /api/orders/:id/cancel | Thiếu ID trên đường dẫn | AI sinh | — |
| B-018 | B | PUT /api/orders/:id/cancel | URL có query string thừa | AI sinh | — |
| B-019 | B | PUT /api/orders/:id/cancel | URL có dấu / ở cuối | AI sinh | — |
| B-020 | B | PUT /api/orders/:id/cancel | Thiếu JWT | AI sinh | — |
| B-021 | B | PUT /api/orders/:id/cancel | JWT sai định dạng | AI sinh | — |
| B-022 | B | PUT /api/orders/:id/cancel | JWT hết hạn | AI sinh | — |
| B-023 | B | PUT /api/orders/:id/cancel | Hủy đơn của user khác (IDOR) | AI sinh | — |
| B-024 | B | PUT /api/orders/:id/cancel | Dùng token admin để hủy | AI sinh | — |
| B-025 | B | PUT /api/orders/:id/cancel | Header Authorization viết thường | AI sinh | — |
| B-026 | B | PUT /api/orders/:id/cancel | Thiếu tiền tố Bearer | AI sinh | — |
| B-027 | B | PUT /api/orders/:id/cancel | Bearer token rỗng | AI sinh | — |
| B-028 | B | PUT /api/orders/:id/cancel | Gọi bằng GET thay vì PUT | AI sinh | — |
| B-029 | B | PUT /api/orders/:id/cancel | Gửi body JSON không mong đợi | AI sinh | — |
| B-030 | B | PUT /api/orders/:id/cancel | Kiểm tra schema phản hồi thành công | AI sinh | — |
| B-031 | B | PUT /api/orders/:id/cancel | Trạng thái lưu thành canceled | AI sinh | — |
| B-032 | B | PUT /api/orders/:id/cancel | Lịch sử đơn phản ánh đã hủy | AI sinh | — |
| B-033 | B | PUT /api/orders/:id/cancel | Hủy đồng thời (race) | AI sinh | — |
| B-034 | B | PUT /api/orders/:id/cancel | Hủy sau khi admin confirmed | AI sinh | — |
| B-035 | B | PUT /api/orders/:id/cancel | Hủy sau khi admin chuyển shipping | AI sinh | — |
| B-036 | B | PUT /api/orders/:id/cancel | Thử lại sau khi mất kết nối | Sinh viên bổ sung | AI không mô phỏng retry sau mất kết nối. |
| B-037 | B | PUT /api/orders/:id/cancel | Đường dẫn Unicode trong URL | Sinh viên bổ sung | AI chưa thử ID đơn dạng Unicode trên path. |
| B-038 | B | PUT /api/orders/:id/cancel | Token Bearer có khoảng trắng thừa | Sinh viên bổ sung | AI chưa thử Bearer token có khoảng trắng. |
| B-039 | B | PUT /api/orders/:id/cancel | Hủy đơn khi phản hồi chậm (timeout) | Sinh viên bổ sung | AI không kiểm tra hành vi khi phản hồi chậm. |
| B-040 | B | PUT /api/orders/:id/cancel | Gửi body JSON khi hủy đơn | Sinh viên bổ sung | AI giả định endpoint hủy đơn không có body. |
| C-001 | C | PUT /api/admin/orders/:id/status | Admin: pending → confirmed | AI sinh | — |
| C-002 | C | PUT /api/admin/orders/:id/status | Admin: confirmed → shipping | AI sinh | — |
| C-003 | C | PUT /api/admin/orders/:id/status | Admin: shipping → delivered | AI sinh | — |
| C-004 | C | PUT /api/admin/orders/:id/status | Admin: pending → canceled | AI sinh | — |
| C-005 | C | PUT /api/admin/orders/:id/status | Admin: confirmed → canceled | AI sinh | — |
| C-006 | C | PUT /api/admin/orders/:id/status | Admin: shipping → canceled (bị từ chối) | AI sinh | — |
| C-007 | C | PUT /api/admin/orders/:id/status | Admin: delivered → canceled (bị từ chối) | AI sinh | — |
| C-008 | C | PUT /api/admin/orders/:id/status | Admin: canceled → pending (bị từ chối) | AI sinh | — |
| C-009 | C | PUT /api/admin/orders/:id/status | Admin: delivered → confirmed (bị từ chối) | AI sinh | — |
| C-010 | C | PUT /api/admin/orders/:id/status | Admin: status = returned (không hợp lệ) | AI sinh | — |
| C-011 | C | PUT /api/admin/orders/:id/status | Thiếu trường status | AI sinh | — |
| C-012 | C | PUT /api/admin/orders/:id/status | Trường status = null | AI sinh | — |
| C-013 | C | PUT /api/admin/orders/:id/status | Trường status rỗng | AI sinh | — |
| C-014 | C | PUT /api/admin/orders/:id/status | Trường status là số | AI sinh | — |
| C-015 | C | PUT /api/admin/orders/:id/status | Trường status viết hoa lẫn lộn | AI sinh | — |
| C-016 | C | PUT /api/admin/orders/:id/status | Trường status có khoảng trắng | AI sinh | — |
| C-017 | C | PUT /api/admin/orders/:id/status | Status chứa SQL injection | AI sinh | — |
| C-018 | C | PUT /api/admin/orders/:id/status | Status chứa XSS | AI sinh | — |
| C-019 | C | PUT /api/admin/orders/:id/status | Gửi thêm trường lạ trong body | AI sinh | — |
| C-020 | C | PUT /api/admin/orders/:id/status | Thiếu JWT | AI sinh | — |
| C-021 | C | PUT /api/admin/orders/:id/status | JWT sai định dạng | AI sinh | — |
| C-022 | C | PUT /api/admin/orders/:id/status | JWT hết hạn | AI sinh | — |
| C-023 | C | PUT /api/admin/orders/:id/status | Token user thường bị từ chối (SEC-03) | AI sinh | — |
| C-024 | C | PUT /api/admin/orders/:id/status | Token user khác bị từ chối | AI sinh | — |
| C-025 | C | PUT /api/admin/orders/:id/status | ID đơn = 0 | AI sinh | — |
| C-026 | C | PUT /api/admin/orders/:id/status | ID đơn âm | AI sinh | — |
| C-027 | C | PUT /api/admin/orders/:id/status | ID đơn dạng thập phân | AI sinh | — |
| C-028 | C | PUT /api/admin/orders/:id/status | ID đơn là chữ cái | AI sinh | — |
| C-029 | C | PUT /api/admin/orders/:id/status | ID đơn chứa SQL injection | AI sinh | — |
| C-030 | C | PUT /api/admin/orders/:id/status | ID đơn không tồn tại | AI sinh | — |
| C-031 | C | PUT /api/admin/orders/:id/status | Thiếu ID trên đường dẫn | AI sinh | — |
| C-032 | C | PUT /api/admin/orders/:id/status | Gọi bằng GET thay vì PUT | AI sinh | — |
| C-033 | C | PUT /api/admin/orders/:id/status | Kiểm tra schema/message phản hồi | AI sinh | — |
| C-034 | C | PUT /api/admin/orders/:id/status | Trạng thái lưu đúng sau chuyển tiếp | AI sinh | — |
| C-035 | C | PUT /api/admin/orders/:id/status | Cập nhật trạng thái đồng thời (race) | AI sinh | — |
| C-036 | C | PUT /api/admin/orders/:id/status | Chuyển pending → confirmed hai lần liên tiếp | Sinh viên bổ sung | AI chưa thử chuyển tiếp trùng lặp sau khi đã confirmed. |
| C-037 | C | PUT /api/admin/orders/:id/status | Token admin có khoảng trắng thừa | Sinh viên bổ sung | AI chưa thử token admin có khoảng trắng. |
| C-038 | C | PUT /api/admin/orders/:id/status | Body là mảng JSON thay vì object | Sinh viên bổ sung | AI chưa gửi body dạng mảng JSON. |
| C-039 | C | PUT /api/admin/orders/:id/status | Giá trị status quá dài | Sinh viên bổ sung | AI chưa thử chuỗi status vượt độ dài enum. |
| C-040 | C | PUT /api/admin/orders/:id/status | Đổi trạng thái ngay sau khi tạo đơn bằng checkout | Sinh viên bổ sung | AI chưa gắn chặt chuyển trạng thái ngay sau fixture checkout. |

## Ghi chú

- **35 TC AI/pool:** đã được sinh viên duyệt; không ghi lại cột verdict vì toàn bộ được chấp nhận dùng tiếp.
- **5 TC sinh viên/pool:** tập trung retry, Unicode, token lỗi, concurrency, emoji, body lạ — những góc AI ít đề xuất.
- Tham chiếu đặc tả chính: FR-04 (profile), FR-10 (state machine), FR-18 (admin order), SEC-02/03/06.

## Newman — oracle đặc tả (03/09/2026)

Collection assert **theo đặc tả**, không còn chế độ baseline che lỗi. Trên SUT hiện tại, các case sau **FAIL** (đúng kỳ vọng test — phát hiện bug):

| TC / Request | Bug ID | Oracle đặc tả | SUT thực tế |
| --- | --- | --- | --- |
| Core A-004 / Obs A-031, A-032 | HW6-BUG-01 | 400 — client không đổi `role` (SEC-06) | 200 |
| Core B-004 / Obs B-004 | HW6-BUG-02 | 400 — không hủy đơn `shipping` (FR-10) | 200 |
| Core C-003 | HW6-BUG-03 | 403 — user token không đổi admin status (SEC-03) | 200 |

Observation A-031/A-032/B-004 lặp lại cùng oracle (SEC-06, FR-10). SEC-03 chỉ assert ở core C-003 để tránh xung đột fixture.