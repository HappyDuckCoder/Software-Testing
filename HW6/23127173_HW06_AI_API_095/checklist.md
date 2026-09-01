# Checklist HW06-AI API Testing

## Chuẩn bị

- [x] Xác nhận API A/B/C không trùng lựa chọn đã công bố của Vân (`/register`, product detail, checkout).
- [x] Xác minh SUT local `127.0.0.1:3000`, tài khoản user/admin và dữ liệu order reset khi backend khởi động.
- [ ] Ghi commit log từ bước đầu.

## Mỗi API (lặp 3 lần)

- [ ] AI sinh >=35 TC theo từng bước, bao phủ domain, state, security, schema.
- [ ] Audit từng TC: `VALID`/`INVALID`/`INCOMPLETE`, lý do và bản sửa.
- [ ] Thêm >=5 TC tự tìm; giải thích khoảng trống AI.
- [ ] Thiết kế assertion request/status/body/schema và cleanup dữ liệu.
- [x] Thực thi core suite thật; đã lưu collection + Newman raw/HTML report (chưa đạt ngưỡng số lượng TC của đề).
- [ ] Triage lỗi thật và tạo GitHub Issue kèm screenshot nếu có.

## Toàn bài

- [x] Newman collection-level pre-request script áp dụng `X-Student-Id: 23127173`; CLI log có xác nhận từng request.
- [x] Liệt kê Postman/Newman features đã thực sự dùng trong main report.
- [x] Chạy Postman Desktop; đã lưu năm ảnh Runner/result/request traceability. Student-ID được xác nhận trong Newman local/CI logs.
- [ ] Có CI/CD workflow, một run pass và một run fail, kèm links/screenshots. Đã có remote baseline pass; chưa có remote fail có chủ đích/được phân loại.
- [ ] Excel test cases/test summary phản ánh đúng kết quả chạy.
- [ ] Diagram test-generator được tự vẽ; pseudocode có thể tái lập.
- [x] AI Critique 200-300 từ và AI Audit được cập nhật đến evidence Postman/CI.
- [ ] Xuất/kiểm tra PDF, cập nhật README + git log, đóng ZIP đúng tên.
