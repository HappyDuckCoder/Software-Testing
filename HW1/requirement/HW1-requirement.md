# HW01 – Công việc QA/QC · 20 Lỗi · Kiểm thử một Sản phẩm Vật lý

## Thông tin chung

* **Mã bài tập:** HW01-AI
* **Thời lượng:** 5 giờ
* **Hạn nộp:** (xem link nộp bài trên Moodle)
* **Hình thức:** Bài tập cá nhân
* **Nộp bài:** Moodle (báo cáo) + link GitHub repo (artifacts)

### Giảng viên / Trợ giảng

* Dr. Lam Quang Vu
* Dr. Tran Duy Hoang
* MSc. Tran Thi Bich Hanh
* MSc. Truong Phuoc Loc
* MSc. Ho Tuan Thanh

### Liên hệ

* [lqvu@fit.hcmus.edu.vn](mailto:lqvu@fit.hcmus.edu.vn)
* [tdhoang@fit.hcmus.edu.vn](mailto:tdhoang@fit.hcmus.edu.vn)
* [ttbhanh@fit.hcmus.edu.vn](mailto:ttbhanh@fit.hcmus.edu.vn)
* [tploc@fit.hcmus.edu.vn](mailto:tploc@fit.hcmus.edu.vn)
* [hthanh@fit.hcmus.edu.vn](mailto:hthanh@fit.hcmus.edu.vn)

### Chính sách AI

Mở hoàn toàn (*Open*) — BẮT BUỘC khai báo việc sử dụng AI + đính kèm AI Audit Report.

### Mức Bloom-AI yêu cầu

G9.1 → G9.6 tùy bài tập (xem phần “CLO Mapping”).

---

# Mục tiêu học tập

* Mô tả bối cảnh thị trường việc làm QA/QC từ năm 2026+ (bao gồm các vai trò testing có hỗ trợ AI).
* Phân biệt công việc nào AI có thể thay thế / hỗ trợ / không thể thay thế trong QA/QC.
* Thiết kế test case cho MỘT sản phẩm vật lý cụ thể (không phải phần mềm).
* Hiểu: yêu cầu AI Tool tạo mindmap quy trình ISTQB và tìm ra 3 lỗi sai.
* Phân tích: phân tích test case do AI sinh ra và tìm ≥ 3 edge case bị bỏ sót.

---

# Mô tả bài tập

> Lưu ý: HW01 là bài khởi động — KHÔNG sử dụng EShop SUT.
> Bài tập tập trung vào:
>
> * thị trường việc làm QA/QC,
> * các lỗi phần mềm gần đây,
> * kiểm thử một thiết bị vật lý thực tế mà bạn sở hữu.

EShop SUT sẽ được sử dụng từ HW02 trở đi.

---

# Requirement 1 – Thị trường việc làm QA/QC 2026+ (40 điểm)

Tìm 10 tin tuyển dụng QA/QC được đăng TRONG VÒNG 60 NGÀY tính đến ngày nộp bài.

### Bắt buộc

* ≥ 3 vị trí yêu cầu kỹ năng AI/LLM/automation-AI.
* Mỗi tin tuyển dụng phải có:

  * link,
  * screenshot có ngày tháng,
  * mô tả công việc,
  * kỹ năng yêu cầu,
  * mức lương.

### AI Impact Analysis

Viết 1–2 câu phân tích tác động của AI cho mỗi tin tuyển dụng.

### Chống gian lận

Screenshot phải hiển thị tên tài khoản của bạn ở góc màn hình.

### Làm rõ

“Account name” nghĩa là:

* tên đăng nhập,
* hoặc display name trên nền tảng tuyển dụng (LinkedIn, Indeed,…),

không cần trùng với StudentID.

---

# Requirement 2 – 20 lỗi phần mềm giai đoạn 2022–2026 (20 điểm)

Tìm 20 lỗi phần mềm được công khai trong giai đoạn 2022–2026.

### Bắt buộc

* ≥ 5 lỗi liên quan AI/LLM:

  * hallucination,
  * prompt injection,
  * bias.

### Mỗi lỗi phải có

* source link,
* mô tả,
* severity,
* hậu quả,
* giải pháp.

### Yêu cầu mới

Tìm 1 vị trí mà AI bị:

* bias,
* hoặc hallucinate

khi giải thích lỗi đó.

### Làm rõ

Yêu cầu này áp dụng cho TỪNG lỗi:

* 20 lỗi → 20 trường hợp bias/hallucination.

---

# Requirement 3 – Test case cho MỘT sản phẩm vật lý (40 điểm)

Chọn MỘT thiết bị gia dụng cụ thể:

* quạt,
* máy lọc nước,
* nồi cơm điện,
* bóng đèn thông minh,
* …

### Bắt buộc

* Nộp 1 ảnh chụp thiết bị + thẻ sinh viên trong CÙNG khung hình.
* Khai báo:

  * hãng,
  * model,
  * năm sản xuất,
  * serial number (che 4 ký tự giữa).

---

## Thiết kế test case

Thiết kế 15 test case gồm:

* Objective,
* Input,
* Steps,
* Expected,
* Actual,
* Verdict.

### Làm rõ

* Tổng cộng 15 test case.
* Thực thi và quay video ≥ 5 test case.
* Không cần quay cả 15.
* Mục tiêu là tìm ≥ 5 defect từ thiết bị khi test.

---

## Edge cases AI không tìm được

≥ 3 test case phải là edge case mà AI Tool KHÔNG tìm ra.

### Sinh viên phải cung cấp

1. Screenshot đoạn chat cho thấy AI không tạo được edge case đó.
2. Giải thích bằng văn bản vì sao AI bỏ sót.

---

## Thực thi thực tế

* Chạy ≥ 5 test case trên thiết bị thật.
* Quay video ngắn ≤ 60 giây.

---

# AI Collaboration Protocol (Bắt buộc)

Khối yêu cầu này áp dụng cho TOÀN BỘ bài tập AI-first.
Không tuân thủ sẽ bị trừ điểm theo rubric.

---

# 1. Mapping với CLO / Bloom-AI

| CLO  | Mô tả                                   | Hoạt động yêu cầu                                  |
| ---- | --------------------------------------- | -------------------------------------------------- |
| G9.1 | Yêu cầu AI tạo ISTQB mindmap và sửa lỗi | R1: AI vẽ QA/QC role mindmap; bạn tìm 3 lỗi        |
| G9.3 | Phân tích output AI – tìm phần thiếu    | R3: tìm ≥ 3 edge case AI bỏ sót trên thiết bị thật |

---

# 2. Công cụ được phép & mức Bloom-AI

Bạn có thể dùng:

* ChatGPT,
* Claude,
* Gemini,
* Copilot,
* Cursor,
* hoặc bất kỳ AI Tool nào khác.

### Yêu cầu

* Phải khai báo trong AI Audit Report.
* Khoa KHÔNG cung cấp tài khoản trả phí.

### Bloom-AI level cho bài này

* G9.1 (Understand)
* G9.3 (Analyse)

---

# 3. AI Audit Report (Bắt buộc đính kèm Appendix)

Mỗi artifact do AI sinh ra phải có 1 entry gồm 5 phần:

| Item              | Nội dung                                  |
| ----------------- | ----------------------------------------- |
| (1) Prompt + tool | Full prompt + tên tool + timestamp        |
| (2) AI output     | Full output hoặc screenshot có annotation |
| (3) Verdict       | VALID / INVALID / INCOMPLETE + lý do      |
| (4) Reasoning     | 2–5 câu trích dẫn ISTQB hoặc slide        |
| (5) Student fix   | Phiên bản đã sửa + highlight thay đổi     |

### Làm rõ

Một batch sinh từ một prompt = 1 artifact.

Ví dụ:

* 15 test case sinh từ 1 prompt
  → tính là 1 Audit Report entry.

---

## Cuối báo cáo phải có

* Tỉ lệ VALID / INVALID / INCOMPLETE.
* Kết luận:

  * khi nào nên dùng AI,
  * khi nào không nên dùng AI.

---

# 4. AI Critique (200–300 từ, bắt buộc)

Viết đoạn 200–300 từ phê bình AI:

* AI sai ở đâu?
* Bias ở đâu?
* Thiếu gì?
* Vì sao AI thất bại?
* Bạn học được nguyên tắc gì khi cộng tác với AI?

---

# 5. Mandatory Disclosure

Template chuẩn:

> “[Test cases / script / dataset / report] was initially generated by [AI tool name]; I reviewed and modified [section X], added [edge cases Y, Z]; [section W] was written entirely by me. The detailed AI Audit Report is attached as Appendix A. I confirm I did not use AI to generate any artifact listed in the prohibited category below.”

---

# 6. Cơ chế chống gian lận AI (Ràng buộc)

Các artifact sau TUYỆT ĐỐI không được AI tạo:

* Ảnh thiết bị + thẻ sinh viên.
* Video test phải có giọng nói thật của bạn.
* 10 screenshot job posting phải có username/login của bạn.
* Prompt log `.md` có timestamp cho mọi prompt AI.

Nếu bị phát hiện AI-generated:

* toàn bộ HW = 0,
* chuyển hội đồng kỷ luật.

---

# 7. Oral Defense

30% sinh viên sẽ bị gọi vấn đáp ngẫu nhiên:

* thời lượng 5–7 phút,
* trong tuần sau deadline.

### Nội dung

* Chạy live test case.
* Giải thích vì sao chọn input X thay vì Y.
* Chỉ ra 1 lỗi AI tạo mà bạn sửa.

### Hình phạt

Fail ≥ 2 câu:
→ điểm HW × 0.5.

---

# Template bắt buộc (thư mục AI Templates)

Mọi bài AI-assisted phải đính kèm:

* [AI-02] AI Audit Report
* [AI-03] AI Disclosure Form
* [AI-05] Privacy & Responsible Use Checklist

### Project lớn cần thêm

* [AI-04] Reflective Statement

### Điều kiện bắt buộc

[AI-06] Student Acknowledgement phải ký từ tuần 1 trước khi bất kỳ bài AI-assisted nào được chấm.

---

# Quy định nộp bài

### Tên file

`StudentID_HW01_AI_<grade>.zip`

### SelfAssessedGrade

* 3 chữ số,
* từ 000–100.

---

# Nội dung bắt buộc trong file .zip

* Main report PDF

  * có:

    * AI Audit Report,
    * AI Critique,
    * Mandatory Disclosure.

* Appendix A:

  * prompt log `.md` hoặc `.txt`.

* Excel:

  * Test Cases,
  * Checklist,
  * Test Summary Report.

* Bug screenshots:

  * KHÔNG dùng FIT Mantis cho HW01 nữa.
  * Log defect bằng GitHub Issues trong repo cá nhân.
  * Có screenshot trang Issues hiện GitHub username.

* Ảnh thiết bị + thẻ sinh viên.

* Link YouTube Unlisted của ≥ 5 video demo.

### Làm rõ

YouTube Unlisted là nền tảng chính.
Google Drive/OneDrive chỉ được dùng nếu YouTube chặn video do copyright.

* QA/QC role mindmap (PNG / Markdown).
* [AI-02] AI Audit Report.
* [AI-03] AI Disclosure Form.
* [AI-05] AI Privacy Checklist.
* Self-assessment section cuối report.

### Nộp

Qua Moodle.

---

# Rubric chấm điểm

| Mục  | Nội dung                            | Điểm |
| ---- | ----------------------------------- | ---- |
| 1    | Job Market 2026+                    | 40   |
| 2    | Software Defects 2022–2026          | 20   |
| 3    | Physical-product test design        | 25   |
| AI-1 | AI Audit Report                     | 8    |
| AI-2 | AI Critique + Disclosure            | 4    |
| AI-3 | AI Checklist + anti-cheat artifacts | 3    |
|      | Tổng                                | 100  |

> Nếu thiếu Audit Report / prompt log / critique → mất TOÀN BỘ AI Compliance column.

---

# Tài liệu tham khảo

* ISTQB Foundation Level Syllabus (latest)
* Hardman P. (2025). A Post-AI Learning Taxonomy
* Fuster Rabella M. (2025). OECD Education Working Paper No. 338
* Anthropic (2025). Building reliable AI test agents
* DeepEval & Promptfoo documentation

---

# Quy định khác

* Không chấp nhận nộp trễ.
* Khai báo AI giả mạo:

  * 0 điểm,
  * chuyển hội đồng kỷ luật.
* Mọi prompt AI đều được log tập trung.
* Copy giữa sinh viên (kể cả prompt):

  * cả hai cùng 0 điểm.

