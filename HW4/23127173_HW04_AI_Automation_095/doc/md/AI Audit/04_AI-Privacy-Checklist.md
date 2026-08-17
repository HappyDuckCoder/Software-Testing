# AI & Privacy Checklist — HW04

- [ ] Không lưu mật khẩu, token JWT, cookie session vào script, JSON data, audit hoặc screenshot công khai.
- [x] File `.env` chỉ dùng local; không commit `.env` lên GitHub (chỉ commit `.env.example`). `.gitignore` root + `automation/.gitignore` đã cấu hình.
- [ ] Tài khoản test EShop (`test@eshop.com`, `admin@eshop.com`) không ghi plaintext password trong báo cáo nộp bài nếu không bắt buộc.
- [ ] Video demo không lộ secret; terminal `whoami`/`hostname` được phép theo đề bài.
- [ ] Mọi output AI (script, gap analysis) đã được sinh viên review trước khi chạy và nộp.
- [x] AI Audit Report ghi prompt khởi tạo roadmap (AI-001) và toàn bộ phiên 17/08/2026 (AI-002…AI-013).
- [x] Prompt log cập nhật đủ các phiên sinh/sửa automation (đến Feature A 12/12 headed).
- [ ] Sinh viên xác nhận HTML report và video là bằng chứng thật, không AI-generated/fabricated.
