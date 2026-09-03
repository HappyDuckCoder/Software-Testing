# Checklist HW05-AI — Kiểm thử hiệu năng

## Đã hoàn thành

- [x] Chọn workflow không trùng Vân: `POST /api/login` → `GET /api/orders/my-orders` → `PUT /api/orders/:id/cancel`.
- [x] Xác minh SUT local, cổng 3000, phần cứng và DXDIAG.
- [x] CSV test, reset/seed độc lập, kiểm tra JWT và orderId.
- [x] Load, Stress, Spike đúng tên; CSV, assertion, trích JWT/orderId; ba listener khác nhau.
- [x] JTL thô và HTML report cho ba kịch bản; JTL rerun đối chiếu ảnh.
- [x] Ảnh JMeter + Task Manager (Load, Stress, Spike, Endurance); ảnh CLI/GUI JMeter.
- [x] Endurance 601,15 giây; 61 mẫu RAM; báo cáo RPS và peak working set.
- [x] Phân tích AI, truy tìm diễn giải sai, đánh giá đề xuất tối ưu; AI Critique ≤300 từ.
- [x] Đề xuất kiểm thử hiệu năng liên tục, flowchart, baseline comparator, trade-off.
- [x] Báo cáo chính, AI Audit, Mandatory Disclosure, Privacy Checklist, Agent Skills.
- [x] README: workflow, kết quả, link GitHub, bảng tự đánh giá §15.
- [x] PDF: `doc/pdf/main-report.pdf`, `AI-Audit-Report.pdf`, `AI-Critique.pdf`.
- [x] Git commit log: `doc/md/Git Commit Log/git-commit-log.txt`.

## Còn phải làm trước khi nộp Moodle

- [ ] Video YouTube unlisted ≥ 6 phút (tiếng Việt, tool + monitor cùng khung).
- [ ] Video demo Agent Skill end-to-end trên một nhóm endpoint.
- [ ] Cập nhật `evidence/demo-video/link-video.md` với link thật.
- [ ] Đóng ZIP `23127173_HW05_AI_Performance_090.zip`.
- [ ] GitHub Issue — chỉ khi có bug thật; hiện không có defect.
