# Checklist HW05-AI Performance Testing

## 1. Chuẩn bị

- [x] Chọn endpoint của SUT cho auth-heavy, read-heavy và transactional: `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`.
- [ ] Xác nhận workflow không trùng với thành viên khác (nếu có phân công nhóm).
- [ ] Xác minh port, phiên bản SUT, hostname và cấu hình phần cứng khi chạy.
- [ ] Chuẩn bị dữ liệu CSV không chứa mật khẩu/token thật.
- [ ] Chuẩn bị cách reset khóa tài khoản sau 3 lần đăng nhập thất bại.

## 2. Task 1 - Test design và execution

- [ ] Có AI Audit cho từng bước thiết kế thay vì một prompt chung chung.
- [ ] Có một workflow E2E bao phủ auth-heavy, read-heavy và transactional.
- [ ] Tạo Load test plan tên `{StudentID}_Load_{YYYYMMDD}`.
- [ ] Tạo Stress test plan tên `{StudentID}_Stress_{YYYYMMDD}`.
- [ ] Tạo Spike test plan tên `{StudentID}_Spike_{YYYYMMDD}`.
- [ ] Review và sửa tham số AI đề xuất: users/threads, ramp-up, think-time, assertions và lockout.
- [ ] Dùng CSV cho credentials, product ID hoặc payload đơn hàng.
- [ ] Dùng ba listener/report khác nhau trên ba kịch bản.
- [ ] Lưu ba `.jtl` nguyên gốc và ba thư mục HTML report.
- [ ] Chụp mỗi lần chạy: công cụ + resource monitor backend cùng khung hình.
- [ ] Đính kèm ảnh dxdiag/screenfetch và bảng thông số phần cứng.
- [ ] Chạy soak test 10-15 phút; ghi RPS ổn định tối đa và trần memory.
- [ ] Tạo GitHub Issue cho bug/vấn đề hiệu năng thực tế (nếu có), kèm ảnh.
- [ ] Quay video YouTube không công khai >= 6 phút, thuyết minh tiếng Việt.

## 3. Task 2 - AI analysis và misinterpretation hunt

- [ ] Đưa `.jtl` thực tế cho AI phân tích.
- [ ] Với mỗi diễn giải sai của AI, ghi giá trị đúng từ log thô và giải thích.
- [ ] Phân loại từng đề xuất tối ưu là khả thi hoặc hallucinated, có lý do.

## 4. Task 3 - Continuous Performance Testing

- [ ] Có flowchart theo dõi commit, quyết định chạy test và phát hiện hồi quy p95.
- [ ] Thảo luận chi phí và false alarms.

## 5. Tài liệu và nộp bài

- [ ] Hoàn thành báo cáo chính Markdown + PDF.
- [ ] Hoàn thành AI Critique 200-300 từ sau khi có kết quả thật.
- [ ] Hoàn thành AI Audit, disclosure và privacy checklist.
- [ ] Hoàn thành Agent Skill và video demo end-to-end trên một endpoint group.
- [ ] Xuất Git commit log ra file text.
- [ ] README có tự đánh giá, kịch bản, endpoint groups, endurance threshold, số issue và link video.
- [ ] Kiểm tra tên ZIP: `23127173_HW05_AI_Performance_<SelfAssessedGrade>.zip`.
