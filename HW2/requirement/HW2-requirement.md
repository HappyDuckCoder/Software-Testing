# HW02 - Domain Testing trên EShop

## Thông tin chung

* **Mã bài tập:** HW02-AI
* **Thời lượng:** 10 giờ
* **Hạn nộp:** (xem link nộp bài trên Moodle)
* **Hình thức:** Bài tập cá nhân
* **Nộp bài:** Moodle (báo cáo)

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

Mở hoàn toàn (*Open*) - BẮT BUỘC khai báo việc sử dụng AI và đính kèm AI Audit Report.

### Mức Bloom-AI yêu cầu

G9.1 -> G9.6 tùy bài tập (xem phần "CLO Mapping").

---

# Nguyên tắc thực hiện

Các nguyên tắc sau áp dụng xuyên suốt chuỗi bài tập trong môn học. Sinh viên cần đọc kỹ trước khi làm bài vì bài nộp sẽ được đánh giá dựa trên các nguyên tắc này.

### AI-First Strategy

Sinh viên bắt buộc áp dụng AI vào các kỹ thuật kiểm thử đã học trên lớp.

Tuy nhiên, điều này KHÔNG có nghĩa là chỉ dùng một prompt chung chung như:

> "generate test cases and find bugs in this feature"

Thay vào đó, sinh viên phải hướng dẫn AI đi qua từng bước của kỹ thuật kiểm thử như đã được dạy, sử dụng AI như một trợ lý có kỷ luật thay vì một hộp đen.

### Human Review

Mọi kết quả do AI tạo ra phải được sinh viên kiểm tra cẩn thận.

Sinh viên chịu trách nhiệm hoàn toàn về tính đúng đắn của kết quả, phải tự sửa lỗi và tinh chỉnh khi cần.

Nộp nguyên văn output thô của AI mà không review là KHÔNG được chấp nhận.

### AI Audit Report

Toàn bộ quá trình sử dụng AI phải được ghi lại trong một log đầy đủ.

Sinh viên được khuyến khích xây dựng Agent Skills để tự động áp dụng các kỹ thuật kiểm thử này cho các bài tập tương tự.

Nếu không sử dụng AI, sinh viên vẫn phải khai báo rõ điều đó.

### Documentation

Toàn bộ quá trình làm việc phải được ghi nhận ở định dạng văn bản, ví dụ Markdown.

### Quality over Completion

Bài làm không chỉ được chấm dựa trên việc có hoàn thành hay không, mà còn dựa trên số lượng và chất lượng của các deliverable:

* báo cáo tổng quát,
* test case report,
* bug report,
* test summary report,
* script,
* screenshot,
* video,
* link tham khảo.

---

# Mục tiêu học tập

Sau khi hoàn thành bài tập này, sinh viên có thể:

* Áp dụng kỹ thuật Domain Testing và Boundary Value Analysis cho một System Under Test thực tế.
* Thể hiện năng lực Bloom-AI ở mức:

  * G9.2 (Apply),
  * G9.3 (Analyse).

---

# System Under Test (SUT)

SUT của bài tập là:

> **EShop** - một ứng dụng demo thương mại điện tử tiếng Việt, được thiết kế để thực hành kiểm thử.

### Repository

* <https://github.com/ttbhanh/eshop-sut>

### Các nhóm chức năng

Ứng dụng được chia thành các pool chức năng sau.

## Pool A - Authentication, Categories, and Products

* **FR-01:** Account registration
* **FR-02:** Login and account lockout
* **FR-03:** Forgot password and password reset (two steps)
* **FR-04:** Personal profile management
* **FR-05:** Product listing and search
* **FR-06:** Product detail view

## Pool B - Shopping Cart and Checkout

* **FR-07:** Shopping cart
* **FR-08:** Checkout
* **FR-09:** Discount coupons
* **FR-10:** Order state machine
* **FR-11:** Order history view (user)

## Pool C - Web Admin

* **FR-12:** Access control
* **FR-13:** Dashboard
* **FR-14:** Category management (CRUD)
* **FR-15:** Product management (CRUD)
* **FR-16:** Product import from CSV
* **FR-17:** Coupon management (CRUD)
* **FR-18:** Order management (admin)
* **FR-19:** User management (admin)

## Pool D - Mobile App

* Các chức năng thuộc ứng dụng mobile.

---

# Feature Selection

Trong mỗi nhóm, mỗi sinh viên phải chọn **4 feature**, gồm:

* 1 feature từ Pool A,
* 1 feature từ Pool B,
* 1 feature từ Pool C,
* 1 feature từ Pool D.

### Ràng buộc trong nhóm

Trong cùng một nhóm sinh viên, các thành viên phải đảm bảo:

* không chọn trùng feature,
* mỗi feature chỉ được một sinh viên trong nhóm phụ trách.

---

# Requirements

Với mỗi feature đã chọn, sinh viên phải hoàn thành các yêu cầu sau.

---

# Requirement 1 - Domain Testing

Với sự hỗ trợ của AI tools, áp dụng kỹ thuật **Domain Testing** để thiết kế một bộ test case đầy đủ cho feature.

### Bắt buộc

* Thiết kế test case bằng kỹ thuật Domain Testing.
* Có thể bổ sung thêm test case khi cần để tăng độ bao phủ.
* Cung cấp giải thích chi tiết từng bước về cách áp dụng kỹ thuật.
* Review lại bài giảng trước khi thực hiện.

### Yêu cầu về giải thích

Báo cáo phải thể hiện rõ:

* xác định domain/input space,
* phân tích các biến đầu vào liên quan,
* chia miền giá trị hợp lệ / không hợp lệ,
* xác định representative values,
* tạo test case từ các miền đã phân tích,
* lý do chọn từng nhóm test case.

---

# Requirement 2 - Boundary Value Analysis

Với sự hỗ trợ của AI tools, áp dụng kỹ thuật **Boundary Value Analysis** để thiết kế một bộ test case đầy đủ cho feature.

### Bắt buộc

* Thiết kế test case bằng kỹ thuật Boundary Value Analysis.
* Có thể bổ sung thêm test case khi cần để tăng độ bao phủ.
* Cung cấp giải thích chi tiết từng bước về cách áp dụng kỹ thuật.
* Review lại bài giảng trước khi thực hiện.

### Yêu cầu về giải thích

Báo cáo phải thể hiện rõ:

* xác định các boundary quan trọng,
* xác định giá trị tại biên,
* xác định giá trị ngay dưới biên,
* xác định giá trị ngay trên biên,
* tạo test case từ các boundary value,
* lý do chọn các boundary đó.

---

# Requirement 3 - AI Gap Analysis

Nếu AI tools bỏ sót bất kỳ test case hoặc bug nào, sinh viên phải báo cáo lại.

### Bắt buộc

Với các thiếu sót của AI, cần giải thích vì sao AI bỏ sót, ví dụ:

* prompt đầu vào chưa đủ chất lượng,
* AI tool có giới hạn,
* feature under test có độ phức tạp cao,
* AI không hiểu đầy đủ business rule,
* AI bỏ qua edge case hoặc negative case.

### Sinh viên phải làm rõ

* AI đã đề xuất gì.
* AI bỏ sót gì.
* Sinh viên phát hiện và bổ sung như thế nào.
* Bài học rút ra khi cộng tác với AI trong kỹ thuật kiểm thử.

---

# Requirement 4 - Bug Reporting

Tất cả bug tìm được phải được báo cáo ở cả hai nơi:

* trong Markdown report,
* trên GitHub Issues page của nhóm.

### Bắt buộc

Mỗi GitHub Issue phải có:

* tiêu đề bug rõ ràng,
* mô tả bug,
* steps to reproduce,
* expected result,
* actual result,
* severity / priority nếu có,
* screenshot minh họa bug.

### Trong Markdown report

Báo cáo Markdown phải có phần bug report tương ứng, liên kết hoặc tham chiếu đến GitHub Issue.

---

# Agent Skill

Sinh viên được khuyến khích xây dựng **Agent Skills** để áp dụng tự động:

* Domain Testing,
* Boundary Value Analysis.

Mục tiêu là có thể tái sử dụng các skill này cho những feature khác trong các nhiệm vụ kiểm thử về sau.

### Nếu có xây dựng skill

Sinh viên cần nộp kèm:

* source hoặc artifact của skill,
* video demo,
* link YouTube cho video demo.

### Video demo

Video cần thể hiện end-to-end cách sinh viên sử dụng skill trên một feature hoàn chỉnh.

---

# Công cụ được phép & mức Bloom-AI

Sinh viên có thể dùng:

* ChatGPT,
* Claude,
* Gemini,
* Copilot,
* Cursor,
* bất kỳ AI tool nào khác,
* tùy chọn: AI test-generation tools như Diffblue để cross-check.

### Yêu cầu

* Phải khai báo trong AI Audit Report.
* Mức Bloom-AI yêu cầu cho bài này:

  * G9.2 (Apply),
  * G9.3 (Analyse).

---

# AI Audit Report (Bắt buộc đính kèm Appendix)

Đính kèm AI Audit Report dưới dạng appendix.

Sinh viên có thể sử dụng nội dung từ các AI Templates được cung cấp nếu cần.

### Nếu không sử dụng AI

Phải khai báo:

> "I do not use any AI help in this exercise."

### Nếu có sử dụng AI

Phải khai báo:

> "I use AI tools for the following tasks,"

Và với mỗi interaction, cần ghi lại:

* tên AI tool,
* ngày và giờ,
* prompt của sinh viên,
* output của AI.

### Khuyến khích

Sinh viên được khuyến khích tạo skill hoặc rule để tự động trích xuất thông tin trên sau mỗi phiên làm việc với AI.

---

# AI Critique (200-300 từ, bắt buộc)

Viết một đoạn 200-300 từ phê bình AI.

### Nội dung cần trả lời

* AI sai ở đâu?
* AI có bias ở đâu?
* AI thiếu sót ở đâu?
* Vì sao AI không bắt được vấn đề?
* Sinh viên học được nguyên tắc gì khi cộng tác với AI trong bài tập này?

Sinh viên có thể sử dụng nội dung từ các AI Templates được cung cấp nếu cần.

---

# Anti-AI-Cheat Constraints

Không có ràng buộc chống gian lận AI riêng cho bài này.

---

# Git Commit Log

Sinh viên phải tạo một Git commit mới cho mỗi bước trong quy trình kiểm thử của từng feature.

### Bắt buộc

* Mỗi bước testing procedure của mỗi feature phải có commit riêng.
* Cung cấp Git commit log ở định dạng text-based file.

### Ví dụ nội dung commit log

Commit log nên thể hiện được:

* feature được kiểm thử,
* bước thực hiện,
* thay đổi trong test case / report / bug report,
* thời điểm commit.

---

# Oral Defense

30% sinh viên có thể được chọn ngẫu nhiên để vấn đáp.

### Thời lượng

* 5-7 phút.
* Diễn ra trong tuần sau deadline.

### Nội dung vấn đáp

Sinh viên cần giải thích cách hoàn thành bài tập, bao gồm:

* feature đã chọn,
* cách áp dụng Domain Testing,
* cách áp dụng Boundary Value Analysis,
* bug đã tìm được,
* cách sử dụng AI,
* phần sinh viên đã review / sửa lại output của AI.

---

# Quy định nộp bài

### Tên file

`<StudentID>_HW02_AI_DomainTesting_<SelfAssessedGrade>.zip`

### SelfAssessedGrade

* 3 chữ số,
* nằm trong khoảng `[000, 100]`.

### Ví dụ

`25127001_HW02_AI_DomainTesting_090.zip`

---

# Nội dung bắt buộc trong file .zip

File `.zip` phải bao gồm:

* Main report (Markdown + PDF), trong đó có:

  * Domain Testing report,
  * Boundary Value Analysis report.

* Bug report, có screenshot bug trên GitHub Issues page.
* AI Critique và AI Audit Report (Markdown + PDF).
* Git commit log (text file).
* `README.md` chứa:

  * self-assessment table,
  * test summary report,
  * số lượng feature,
  * số lượng test case đã thiết kế,
  * số lượng test case đã thực thi,
  * số lượng test case passed,
  * số lượng test case failed,
  * số lượng test case chưa thực thi,
  * số lượng bug,
  * demo videos.

* Các tài liệu hỗ trợ khác nếu có.

### Nộp

Qua Moodle.

Với deadline, xem link nộp bài trên Moodle.

---

# Assessment Template

| No. | Criteria                         | Grade | Self-Assessed Grade |
| --- | -------------------------------- | ----- | ------------------- |
| 1   | Feature A (Domain + Boundary)    | 25    |                     |
| 2   | Feature B (Domain + Boundary)    | 25    |                     |
| 3   | Feature C (Domain + Boundary)    | 25    |                     |
| 4   | Feature D (Mobile, Domain + Boundary) | 15 |                     |
| 5   | Agent Skills                     | 10    |                     |
|     | **Total**                        | **100** |                   |

---

# Tài liệu tham khảo

* ISTQB Foundation Level Syllabus (latest edition).
* Hardman, P. (2025). *A Post-AI Learning Taxonomy*.
* Fuster Rabella, M. (2025). *OECD Education Working Paper No. 338*.
* Anthropic (2025). *Building Reliable AI Test Agents* - engineering blog.
* DeepEval & Promptfoo documentation - LLM testing frameworks.

---

# Quy định khác

* Không chấp nhận nộp trễ.
* Thiếu bất kỳ tài liệu bắt buộc nào sẽ bị 0 điểm.
* Copy giữa sinh viên, bao gồm cả prompt, sẽ khiến cả hai bên bị 0 điểm.
