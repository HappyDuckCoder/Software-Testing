# Checklist HW05-AI Performance Testing

## Đã hoàn thành

- [x] Chọn workflow không trùng Vân: `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`.
- [x] Xác minh SUT local, port 3000, hardware và DXDIAG.
- [x] Tạo dữ liệu CSV test, reset/seed độc lập và kiểm tra JWT/orderId.
- [x] Tạo/rà soát Load, Stress, Spike theo đúng tên; CSV, assertion, JWT/orderId extraction và ba listener khác nhau.
- [x] Lưu raw JTL và HTML reports cho ba scenario; lưu thêm JTL rerun truy vết ảnh.
- [x] Chụp JMeter + Task Manager cho Load, Stress, Spike, Endurance; chụp CLI/GUI từng scenario.
- [x] Chạy endurance 601.15 s và memory sampling 61 mẫu; báo cáo RPS/peak working set trong phạm vi workload.
- [x] Hoàn thành AI analysis, misinterpretation hunt, feasibility review và AI Critique 297 từ.
- [x] Hoàn thành continuous performance testing proposal, flowchart, baseline comparator và trade-off.
- [x] Cập nhật main report, AI Audit, disclosure, privacy checklist và Agent Skills.
- [x] README có workflow, kết quả, evidence và giới hạn kết luận.

## Còn phải làm trước khi nộp

- [ ] Quay video YouTube unlisted tiếng Việt >= 6 phút, cho thấy tool + resource monitor và narration.
- [ ] Quay video demo end-to-end một Agent Skill trên endpoint group.
- [ ] Xuất PDF từ bản Markdown cuối cùng, kiểm tra ảnh/liên kết và đóng ZIP `23127173_HW05_AI_Performance_095.zip`.
- [ ] Tạo GitHub Issue chỉ khi phát hiện bug/performance issue thật; hiện chưa có defect để báo.
