# CS423 – CSC15003 – Kiểm thử Phần mềm (tăng cường AI · 2026)

## BÀI TẬP VỀ NHÀ – PHIÊN BẢN AI-FIRST (2026 v2.0 · EShop)

## HW04 – Kiểm thử Tự động hóa trên EShop

## 1. Thông tin chung

| Nội dung | Thông tin |
| --- | --- |
| Mã bài tập | HW04-AI |
| Thời lượng | 10 giờ |
| Hạn nộp | Xem liên kết nộp bài trên Moodle |
| Hình thức | Bài tập cá nhân |
| Nộp bài | Moodle (báo cáo) |
| Giảng viên & Trợ giảng | Dr. Lam Quang Vu / Dr. Tran Duy Hoang / MSc. Tran Thi Bich Hanh / MSc. Truong Phuoc Loc / MSc. Ho Tuan Thanh |
| Liên hệ | <lqvu@fit.hcmus.edu.vn> / <tdhoang@fit.hcmus.edu.vn> / <ttbhanh@fit.hcmus.edu.vn> / <tploc@fit.hcmus.edu.vn> / <hthanh@fit.hcmus.edu.vn> |
| Chính sách AI | Mở — bắt buộc có bản khai báo và đính kèm AI Audit Report |
| Mức Bloom-AI yêu cầu | G9.1 → G9.6, tùy bài tập (xem CLO Mapping) |

## 2. Nguyên tắc định hướng

Các nguyên tắc này xác định cách bạn phải làm việc trong toàn bộ chuỗi bài tập của học phần. Hãy đọc kỹ trước khi bắt đầu vì bài nộp sẽ được đánh giá dựa trên các nguyên tắc này.

- **Chiến lược AI-First.** Bạn bắt buộc phải áp dụng AI vào các kỹ thuật kiểm thử đã học trên lớp. Tuy nhiên, điều này không có nghĩa là chỉ đưa một prompt chung chung, chẳng hạn: “hãy viết toàn bộ script tự động hóa cho chức năng này”. Thay vào đó, bạn phải hướng dẫn AI qua từng bước của kỹ thuật như đã học, sử dụng AI như một trợ lý có kỷ luật thay vì một “hộp đen”.
- **Rà soát bởi con người.** Mọi kết quả do AI tạo ra phải được chính sinh viên xem xét cẩn thận. Bạn chịu hoàn toàn trách nhiệm về tính đúng đắn của các kết quả này. Bạn cần thực hiện mọi chỉnh sửa và tinh chỉnh cần thiết — nộp nguyên văn đầu ra AI mà chưa rà soát là không được chấp nhận.
- **AI Audit Report.** Toàn bộ quá trình sử dụng AI phải được ghi lại trong một nhật ký đầy đủ. Bạn được khuyến khích xây dựng Agent Skills để có thể tự động thực hiện các hoạt động này ở những bài tập tương tự. Nếu không dùng AI, bạn vẫn phải khai báo rõ điều đó.
- **Tài liệu hóa.** Toàn bộ quá trình làm việc phải được ghi lại dưới định dạng văn bản như Markdown.
- **Chất lượng quan trọng hơn việc hoàn thành.** Bài làm không chỉ được chấm theo mức độ hoàn thành mà còn theo số lượng và chất lượng sản phẩm: script tự động hóa, file dữ liệu, báo cáo HTML, bug report, video demo và các liên kết tham chiếu.

## 3. Mục tiêu học tập

Sau khi hoàn thành bài tập này, bạn có thể:

- Dùng AI để sinh script kiểm thử tự động cho frontend web của SUT với Playwright hoặc Selenium, rồi rà soát và tinh chỉnh chúng.
- Áp dụng kiểm thử data-driven và các mẫu assertion, đồng thời chạy toàn bộ bộ test trên nhiều trình duyệt.
- Phê bình script tự động hóa do AI tạo ra: sửa lỗi, phân tích những gì AI sai hoặc bỏ sót, và tạo đầy đủ các sản phẩm đầu ra (báo cáo HTML và bug report).
- Thể hiện năng lực Bloom-AI ở G9.2 (Áp dụng), G9.3 (Phân tích) và G9.4 (Cộng tác với AI).

## 4. Hệ thống được kiểm thử (SUT)

**SUT:** EShop — ứng dụng demo thương mại điện tử tiếng Việt dùng cho thực hành kiểm thử.

- **Repository:** <https://github.com/ttbhanh/eshop-sut>

Các chức năng của ứng dụng được tổ chức thành các pool sau:

- **Pool A — Xác thực, Danh mục và Sản phẩm**
  - FR-01: Đăng ký tài khoản
  - FR-02: Đăng nhập và khóa tài khoản
  - FR-03: Quên mật khẩu và đặt lại mật khẩu (hai bước)
  - FR-04: Quản lý hồ sơ cá nhân
  - FR-05: Danh sách sản phẩm và tìm kiếm
  - FR-06: Xem chi tiết sản phẩm
- **Pool B — Giỏ hàng và Thanh toán**
  - FR-07: Giỏ hàng
  - FR-08: Thanh toán (Checkout)
  - FR-09: Mã giảm giá (Coupon)
  - FR-10: Máy trạng thái đơn hàng
  - FR-11: Lịch sử đơn hàng (phía người dùng)
- **Pool C — Quản trị Web**
  - FR-12: Kiểm soát truy cập
  - FR-13: Dashboard
  - FR-14: Quản lý danh mục (CRUD)
  - FR-15: Quản lý sản phẩm (CRUD)
  - FR-16: Import sản phẩm từ CSV
  - FR-17: Quản lý coupon (CRUD)
  - FR-18: Quản lý đơn hàng (admin)
  - FR-19: Quản lý người dùng (admin)
- **Pool D — Ứng dụng Mobile**

## 5. Lựa chọn chức năng

Tự động hóa **cùng ba (3) chức năng web** bạn đã chọn ở HW02 — mỗi pool A, B và C một chức năng. Chức năng Pool D (mobile) không dùng trong bài tập này vì bạn tự động hóa frontend web.

Nếu chưa hoàn thành HW02, hãy tự khai báo ba chức năng web từ Pool A–C trực tiếp trong báo cáo và nêu rõ lý do HW02 không có sẵn.

Trong cùng một nhóm, đảm bảo lựa chọn của bạn không trùng với thành viên khác, tương tự như HW02.

## 6. Yêu cầu

Với mỗi task dưới đây, hãy ghi lại quy trình thực hiện trong báo cáo và đính kèm bằng chứng bắt buộc. Hãy xem lại bài giảng liên quan về kiểm thử tự động trước khi bắt đầu.

### Task 1 — Script tự động hóa do AI sinh ra

Theo chiến lược AI-first, dùng công cụ AI để sinh script tự động hóa, rồi rà soát, sửa lỗi và chịu trách nhiệm hoàn toàn về chúng.

- **Sinh bằng AI.** Với mỗi chức năng trong ba chức năng đã chọn, dẫn dắt công cụ AI — từng bước, không dùng một prompt chung chung — để chuyển ít nhất 12 test case thành script tự động hóa. 12 test case có thể là tổ hợp bất kỳ của positive, negative và edge case — mọi loại đều được tính vào mức tối thiểu.
- **Làm script data-driven.** Dữ liệu kiểm thử phải lưu trong file `.csv` hoặc `.json` riêng (không chấp nhận mảng hoặc object hardcode trực tiếp trong script), và script phải dùng ít nhất ba mẫu assertion khác nhau.
- **Chạy trên ít nhất 3 trình duyệt** (Chromium / Firefox / WebKit, hoặc Chrome / Edge / Firefox). Mỗi chức năng phải chạy trên cả ba trình duyệt — tối thiểu 9 lần chạy trình duyệt trong toàn bộ bộ test. Mỗi lần chạy phải tạo báo cáo HTML (Allure hoặc Playwright HTML reporter) hiển thị rõ `"Run by: <StudentID>"` (trong tiêu đề, header, footer hoặc metadata của báo cáo).
- **Rà soát và sửa (human review).** Phê bình script do AI tạo ra và chỉnh sửa chúng. Báo cáo những gì AI sai hoặc bỏ sót — ví dụ: selector dễ vỡ, assertion yếu hoặc thiếu, bỏ sót edge case, hoặc wait gây flaky — và giải thích vì sao AI bỏ sót (chất lượng prompt, giới hạn mô hình, hoặc đặc điểm riêng của chức năng). Bạn chịu trách nhiệm hoàn toàn về script cuối cùng.
- **Hoàn thiện automation tối đa có thể.** Mục tiêu là bộ test chạy end-to-end và tạo bộ sản phẩm đầu ra đầy đủ nhất có thể: báo cáo HTML đa trình duyệt và, khi assertion thất bại phát hiện defect thật, bug report. Ghi các bug đó cả trong báo cáo Markdown và trên trang GitHub Issues, đính kèm screenshot cho mỗi issue. Ghi lại các test case không thể tự động hóa và giải thích lý do.

### Task 2 — Video demo

Quay video YouTube ở chế độ unlisted, dài ít nhất 5 phút, thuyết minh bằng tiếng Việt, trình diễn một trong các script tự động hóa của bạn chạy end-to-end (bao gồm lần chạy đa trình duyệt và báo cáo HTML được tạo ra).

- Thuyết minh ít nhất một chỉnh sửa bạn đã thực hiện với script do AI sinh ra trong quá trình rà soát.
- Video phải chứng minh quyền tác giả bằng cách hiển thị face-cam hoặc terminal chạy `whoami` và `hostname`.

## 7. Agent Skill

- Bạn được khuyến khích xây dựng Agent Skill áp dụng quy trình tự động hóa này (data-driven, sinh và bảo trì script đa trình duyệt) để có thể tái sử dụng trên các chức năng kiểm thử khác.
- Nộp skill cùng video minh họa (liên kết YouTube) cho thấy đầy đủ cách dùng skill trên một chức năng hoàn chỉnh.

## 8. Công cụ được phép và mức Bloom-AI

Bạn có thể sử dụng các công cụ sau và phải khai báo chúng trong AI Audit Report:

- Bất kỳ công cụ AI nào bạn chọn (ví dụ: ChatGPT, Claude, Gemini, Copilot, Cursor) — để sinh script tự động hóa.
- Playwright (khuyến nghị) hoặc Selenium 4+.
- Allure hoặc Playwright HTML reporter.

Mức Bloom-AI bắt buộc cho bài tập này là G9.2 (Apply), G9.3 (Analyse) và G9.4 (Collaborate).

## 9. AI Audit Report (Phụ lục bắt buộc)

Đính kèm AI Audit Report dưới dạng phụ lục. Có thể dùng nội dung của AI Templates được cung cấp nếu cần.

- Nếu không dùng AI, khai báo: “I do not use any AI help in this exercise.”
- Nếu có dùng AI, khai báo: “I use AI tools for the following tasks,” và với mỗi tương tác, ghi:
  - Tên công cụ AI
  - Ngày giờ
  - Prompt của bạn
  - Đầu ra AI

Để đơn giản hóa, bạn được khuyến khích tạo skill hoặc rule để tự động trích xuất thông tin trên sau một phiên AI.

## 10. AI Critique (200–300 từ, bắt buộc)

Viết một đoạn 200–300 từ phê bình AI. Trả lời các câu hỏi: AI đã sai, thiên kiến hoặc thiếu sót ở đâu? Vì sao AI không phát hiện vấn đề đó? Bạn đã học được nguyên tắc gì về cộng tác với AI trong bài tập này? Có thể dùng nội dung từ AI Templates nếu cần.

## 11. Ràng buộc chống gian lận bằng AI

Bài tập này dựa trên bằng chứng thực thi có thể xác minh. Các nội dung dưới đây **không được AI tạo ra hoặc làm giả**; TA sẽ xác minh khi chấm:

- Báo cáo HTML, phải chứa `"Run by: <StudentID>"` cùng timestamp ISO.
- Video demo, phải có giọng thuyết minh của chính bạn và hiển thị face-cam hoặc terminal chạy `whoami` và `hostname`.

## 12. Git Commit Log

- Duy trì repository GitHub công khai với lịch sử commit có ý nghĩa: ít nhất 8 commit. Chỉ các commit thay đổi file script kiểm thử (`.spec.js`, `.spec.ts` hoặc tương đương) mới được tính vào mức tối thiểu 8 commit; commit chỉ chạm README, PDF hoặc tài liệu không phải test không được tính.
- Cung cấp Git commit log trong một file định dạng văn bản.

## 13. Bảo vệ vấn đáp

30% sinh viên được chọn ngẫu nhiên có thể được mời tham gia bảo vệ vấn đáp 5–7 phút trong tuần sau hạn nộp, để giải thích cách đã hoàn thành bài tập.

## 14. Quy định nộp bài

- Quy tắc đặt tên tệp:

  ```text
  <StudentID>_HW04_AI_Automation_<SelfAssessedGrade>.zip
  ```

- `SelfAssessedGrade`: số gồm 3 chữ số trong khoảng `[000, 100]`.
- Ví dụ:

  ```text
  25127001_HW04_AI_Automation_090.zip
  ```

- **Nội dung bắt buộc trong tệp `.zip`:**
  - Báo cáo chính (Markdown + PDF), gồm báo cáo automation và phần rà soát / phân tích khoảng trống của script do AI sinh ra.
  - Liên kết repository GitHub công khai (script, file dữ liệu và báo cáo HTML).
  - Báo cáo HTML đa trình duyệt (Allure / Playwright).
  - Liên kết video demo YouTube unlisted.
  - AI Critique và AI Audit Report (Markdown + PDF).
  - Git commit log (file văn bản).
  - Bug report, kèm screenshot bug trên trang GitHub Issues (nếu có).
  - `README.md` có bảng tự đánh giá (bên dưới) và test summary report: số chức năng; số test case đã tự động hóa, thực thi, pass và fail; số lần chạy trình duyệt; số bug; và liên kết video demo.
  - Mọi tài liệu hỗ trợ khác.

- Nộp lên Moodle. Xem hạn nộp tại liên kết nộp bài.

## 15. Mẫu đánh giá

| STT | Tiêu chí | Điểm | Tự đánh giá |
| ---: | --- | ---: | --- |
| 1 | Task 1 — Chức năng A | 25 | |
| 1 | Task 1 — Chức năng B | 25 | |
| 1 | Task 1 — Chức năng C | 25 | |
| 2 | Task 2 — Video demo | 15 | |
| 3 | Agent Skills | 10 | |
| | **Tổng cộng** | **100** | |

## 16. Tài liệu tham khảo

- ISTQB Foundation Level Syllabus (phiên bản mới nhất).
- Hardman, P. (2025). *A Post-AI Learning Taxonomy*.
- Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
- Anthropic (2025). *Building Reliable AI Test Agents* — engineering blog.
- Tài liệu DeepEval & Promptfoo — framework kiểm thử LLM.
- Slide môn học: Test Automation (AI-First).

## 17. Quy định khác

- Không chấp nhận nộp trễ.
- Thiếu bất kỳ tài liệu bắt buộc nào sẽ nhận **0 điểm**.
- Sao chép giữa các sinh viên — bao gồm cả prompt — sẽ khiến cả hai bên nhận **0 điểm**.
