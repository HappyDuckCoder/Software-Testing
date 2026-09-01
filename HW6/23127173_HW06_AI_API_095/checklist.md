# Checklist HW06-AI API Testing

## Chuẩn bị

- [ ] Xác nhận API A/B/C không trùng lựa chọn thành viên khác.
- [ ] Xác minh SUT, base URL, tài khoản user/admin và dữ liệu đơn hàng an toàn để reset.
- [ ] Ghi commit log từ bước đầu.

## Mỗi API (lặp 3 lần)

- [ ] AI sinh >=35 TC theo từng bước, bao phủ domain, state, security, schema.
- [ ] Audit từng TC: `VALID`/`INVALID`/`INCOMPLETE`, lý do và bản sửa.
- [ ] Thêm >=5 TC tự tìm; giải thích khoảng trống AI.
- [ ] Thiết kế assertion request/status/body/schema và cleanup dữ liệu.
- [ ] Thực thi thật, lưu collection + Newman raw/HTML report.
- [ ] Triage lỗi thật và tạo GitHub Issue kèm screenshot nếu có.

## Toàn bài

- [ ] Mọi request có `X-Student-Id: 23127173`; chụp console pre-request script thật.
- [ ] Liệt kê Postman features đã thực sự sử dụng.
- [ ] Có CI/CD workflow, một run pass và một run fail, kèm links/screenshots.
- [ ] Excel test cases/test summary phản ánh đúng kết quả chạy.
- [ ] Diagram test-generator được tự vẽ; pseudocode có thể tái lập.
- [ ] AI Critique dài 200-300 từ và AI Audit đầy đủ.
- [ ] Xuất/kiểm tra PDF, cập nhật README + git log, đóng ZIP đúng tên.
