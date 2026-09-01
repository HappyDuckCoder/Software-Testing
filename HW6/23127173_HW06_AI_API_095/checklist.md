# Checklist HW06-AI API Testing

## Chuẩn bị

- [ ] Xác nhận API A/B/C không trùng lựa chọn thành viên khác.
- [x] Xác minh SUT local `127.0.0.1:3000`, tài khoản user/admin và dữ liệu order reset khi backend khởi động.
- [ ] Ghi commit log từ bước đầu.

## Mỗi API (lặp 3 lần)

- [ ] AI sinh >=35 TC theo từng bước, bao phủ domain, state, security, schema.
- [ ] Audit từng TC: `VALID`/`INVALID`/`INCOMPLETE`, lý do và bản sửa.
- [ ] Thêm >=5 TC tự tìm; giải thích khoảng trống AI.
- [ ] Thiết kế assertion request/status/body/schema và cleanup dữ liệu.
- [ ] Thực thi thật, lưu collection + Newman raw/HTML report.
- [ ] Triage lỗi thật và tạo GitHub Issue kèm screenshot nếu có.

## Toàn bài

- [x] Newman collection-level pre-request script áp dụng `X-Student-Id: 23127173`; CLI log có xác nhận từng request.
- [x] Liệt kê Postman/Newman features đã thực sự dùng trong main report.
- [ ] Chạy Postman Desktop và chụp Postman Console thật cho header (Newman CLI không thay thế được).
- [ ] Có CI/CD workflow, một run pass và một run fail, kèm links/screenshots. Workflow đã tạo; remote run chưa có.
- [ ] Excel test cases/test summary phản ánh đúng kết quả chạy.
- [ ] Diagram test-generator được tự vẽ; pseudocode có thể tái lập.
- [ ] AI Critique dài 200-300 từ và AI Audit đầy đủ.
- [ ] Xuất/kiểm tra PDF, cập nhật README + git log, đóng ZIP đúng tên.
