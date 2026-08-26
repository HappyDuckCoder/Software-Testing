# AI & Privacy Checklist — HW04

Review date: **26/08/2026** — MSSV 23127173

- [x] Không lưu mật khẩu, token JWT, cookie session vào script, JSON data, audit hoặc screenshot công khai. Credential chỉ trong `automation/.env` (local).
- [x] File `.env` chỉ dùng local; không commit `.env` lên GitHub (chỉ commit `.env.example`). `.gitignore` root + `automation/.gitignore` đã cấu hình.
- [x] Tài khoản test EShop (`test@eshop.com`, `admin@eshop.com`) — mật khẩu chỉ trong `.env.example` placeholder (`your_password_here`), không ghi plaintext trong báo cáo nộp.
- [ ] Video demo chưa quay — khi quay: không lộ secret; terminal `whoami`/`hostname` được phép theo đề bài.
- [x] Mọi output AI (script, gap analysis, AI Critique) đã được sinh viên review trước khi chạy và nộp.
- [x] AI Audit Report ghi đủ phiên 17/08/2026 (AI-001…AI-019) và 26/08/2026 (AI-020…AI-022).
- [x] Prompt log cập nhật đủ các phiên sinh/sửa automation và audit.
- [x] HTML report (9 runs) là bằng chứng thật từ Playwright — không AI-generated/fabricated. Video demo: chưa có (sẽ xác nhận sau khi quay).
