<div class="cover">

**Khoa Công nghệ Thông tin (FIT) — Trường ĐH Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Phê bình AI — HW05-AI

<p class="meta">≤300 từ · MSSV 23127173 · Trần Hải Đức · 03/09/2026</p>

</div>

<div class="critique-body">

AI hỗ trợ tốt ở phần cơ học: chia workflow thành đăng nhập, đọc đơn và hủy đơn; sinh kế hoạch JMeter; tạo dữ liệu seed riêng theo người dùng ảo; và tổng hợp JTL thô. Tuy nhiên, đầu ra đầu tiên không thể dùng nguyên trạng. Cấu hình listener có thuộc tính `grpThreads`/`groupThreads` không tương thích JMeter 5.6.3, nên plan không chạy cho đến khi tôi bỏ cấu hình save-service tùy biến và kiểm tra lại XML. AI cũng có nguy cơ đọc nhầm transaction cha: 4.800 sample trong endurance không phải 4.800 workflow, mà là 1.200 workflow nhân ba HTTP sampler cộng một dòng cha. Quan trọng hơn, p95 E2E khoảng 4,8 giây trông giống hồi quy hiệu năng, nhưng khi đối chiếu từng endpoint, login/đọc/hủy chỉ vài đến vài chục mili-giây. Nguyên nhân là Constant Timer nằm trong transaction, khiến thời gian cha bao gồm think-time. Nếu tin ngay bảng tổng hợp, tôi có thể báo lỗi backend không tồn tại.

AI còn gợi ý index, connection pool và SQLite WAL. Tôi xem index/WAL là giả thuyết cần benchmark A/B, không phải kết luận; connection pool chưa có căn cứ với SUT SQLite. AI bỏ sót giới hạn evidence: một ảnh Task Manager không chứng minh trần bộ nhớ, và không thay thế video thuyết minh. Bài học: AI chỉ đáng tin khi prompt nêu rõ cách đo, phạm vi timer, workload và nguồn JTL thô. Vai trò của tôi là tái tính số liệu, so sánh profile cùng điều kiện, giữ giới hạn chưa chứng minh, và từ chối đề xuất không có bằng chứng.

</div>
