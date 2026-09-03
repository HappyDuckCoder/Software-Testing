# AI & Privacy Checklist - HW05

- [x] Không đưa token, cookie, mật khẩu thật hay dữ liệu cá nhân vào prompt, CSV, log audit hoặc ảnh công khai.
- [x] CSV chỉ dùng account `hw5.perf.*` do seed local tạo và không chứa secret thật.
- [x] Đã kiểm tra ảnh evidence: không có JWT/password; DXDIAG có hostname phục vụ đối chiếu hardware.
- [x] Ảnh CI (`evidence/ci-cd/`) không lộ secret; chỉ hiển thị log workflow công khai.
- [x] Ghi rõ AI hỗ trợ thiết kế, automation và review; raw artefact được phân biệt với nội dung AI.
- [x] Đã rà soát JMX, JTL, HTML, ảnh và số liệu trước khi ghi báo cáo.
- [x] PDF báo cáo chính + AI Audit + Critique (`doc/pdf/`).
- [x] Mandatory Disclosure đã ghi Codex và Cursor (Composer), ngày 03/09/2026.
