# CS423 – CSC15003 – Kiểm thử Phần mềm (tăng cường AI · 2026)

## BÀI TẬP VỀ NHÀ – PHIÊN BẢN AI-FIRST (2026 v2.0 · EMS)

## HW03 – Kiểm thử GUI & Khả dụng trên EMS (Event Management System)

## 1. Thông tin chung

| Nội dung | Thông tin |
| --- | --- |
| Mã bài tập | HW03-AI (phiên bản EMS) |
| Thời lượng | 10 giờ |
| Hạn nộp | Xem liên kết nộp bài trên Moodle |
| Hình thức | Bài tập nhóm — một checklist dùng chung cho mỗi nhóm; mỗi thành viên phụ trách riêng một kịch bản |
| Quy mô nhóm | 3–4 sinh viên (bốn kịch bản A–D; nhóm bốn người bao phủ toàn bộ các kịch bản) |
| Nộp bài | Moodle (thư mục nhóm + một báo cáo cho mỗi thành viên) |
| Giảng viên & Trợ giảng | Dr. Lam Quang Vu / Dr. Tran Duy Hoang / MSc. Tran Thi Bich Hanh / MSc. Truong Phuoc Loc / MSc. Ho Tuan Thanh |
| Liên hệ | <lqvu@fit.hcmus.edu.vn> / <tdhoang@fit.hcmus.edu.vn> / <ttbhanh@fit.hcmus.edu.vn> / <tploc@fit.hcmus.edu.vn> / <hthanh@fit.hcmus.edu.vn> |
| Chính sách AI | Mở — bắt buộc có bản khai báo và đính kèm AI Audit Report |
| Mức Bloom-AI yêu cầu | G9.3 (Phân tích) → G9.4 (Cộng tác với AI để kiểm thử khám phá) |

## 2. Nguyên tắc định hướng

Các nguyên tắc này xác định cách bạn phải làm việc trong toàn bộ chuỗi bài tập của học phần. Hãy đọc kỹ trước khi bắt đầu vì bài nộp sẽ được đánh giá dựa trên các nguyên tắc này.

- **Chiến lược AI-First.** Bạn bắt buộc phải áp dụng AI vào các kỹ thuật kiểm thử đã học trên lớp. Tuy nhiên, điều này không có nghĩa là chỉ đưa một prompt chung chung, chẳng hạn: “hãy tạo checklist GUI và tìm vấn đề khả dụng trong ứng dụng này”. Thay vào đó, bạn phải hướng dẫn AI qua từng bước của kỹ thuật như đã học, sử dụng AI như một trợ lý có kỷ luật thay vì một “hộp đen”.
- **Rà soát bởi con người.** Mọi kết quả do AI tạo ra phải được chính sinh viên xem xét cẩn thận. Bạn chịu hoàn toàn trách nhiệm về tính đúng đắn của các kết quả này. Bạn cần thực hiện mọi chỉnh sửa và tinh chỉnh cần thiết — nộp nguyên văn đầu ra AI mà chưa rà soát là không được chấp nhận.
- **AI Audit Report.** Toàn bộ quá trình sử dụng AI phải được ghi lại trong một nhật ký đầy đủ. Bạn được khuyến khích xây dựng Agent Skills để có thể tự động thực hiện các hoạt động này ở những bài tập tương tự. Nếu không dùng AI, bạn vẫn phải khai báo rõ điều đó.
- **Tài liệu hóa.** Toàn bộ quá trình làm việc phải được ghi lại dưới định dạng văn bản như Markdown.
- **Chất lượng quan trọng hơn việc hoàn thành.** Bài làm không chỉ được chấm theo mức độ hoàn thành mà còn theo số lượng và chất lượng sản phẩm: checklist dùng chung, phần thực thi theo từng màn hình, báo cáo khả dụng, ma trận đa nền tảng, bug report, ảnh chụp màn hình và các liên kết tham chiếu.

## 3. Mục tiêu học tập

Sau khi hoàn thành bài tập này, bạn có thể:

- Thiết kế theo nhóm một GUI checklist tái sử dụng được, dựa trên các heuristic UI được công nhận (Nielsen, Norman, Shneiderman) và giao diện EMS; đồng thời ghi nhận nguồn tham khảo và prompt AI đã sử dụng.
- Áp dụng checklist dùng chung cho các màn hình cụ thể của một kịch bản chức năng được phân công và báo cáo lỗi.
- Thiết kế kịch bản user testing, thực hiện với 5 người dùng thật trên các trang do bạn phụ trách, rồi phân tích kết quả thành Usability Report.
- Thực hiện kiểm thử đa trình duyệt và đa nền tảng cho frontend web EMS trên nhiều hệ điều hành, trình duyệt và loại thiết bị.
- Thể hiện năng lực Bloom-AI ở G9.3 (Phân tích) và G9.4 (Cộng tác với AI để kiểm thử khám phá).

## 4. Hệ thống được kiểm thử (SUT)

**SUT:** EMS — Event Management System, Khoa Công nghệ Thông tin. Đây là ứng dụng web để tạo, công bố và vận hành các sự kiện học thuật, bao gồm quản trị, đăng ký người tham gia, check-in, yêu cầu hỗ trợ, phân tích và cấu hình hệ thống.

- **Web (SUT):** <https://promoter-starboard-prude.ngrok-free.dev/>
- **Tài khoản quản trị** (dùng cho kịch bản quản trị A, C và phía quản trị của D): `admin@gmail.com` / `Admin@123`. Tài khoản phải có vai trò `ADMIN` trên EMS.
- **Tài khoản người dùng** (dùng cho phía người dùng của kịch bản B và D): tự đăng ký tài khoản sinh viên / giảng viên / khách của riêng bạn theo luồng đăng ký EMS. Không dùng chung một tài khoản trong nhóm cho các kịch bản phía người dùng — mỗi thành viên cần tài khoản riêng để các thao tác có thể phân biệt được.

> Ứng dụng được phục vụ qua ngrok tunnel và dữ liệu có thể bị reset định kỳ. Hãy thu thập bằng chứng (ảnh chụp, bản ghi hình) trong lúc thực hiện; không được giả định trạng thái bạn đã tạo ở phiên trước vẫn còn trong phiên sau.

Các chức năng EMS được tổ chức thành các pool sau, tương ứng với bốn kịch bản ở §5:

- **Pool A — Quản trị sự kiện.** KPI Dashboard (Total Events, Total Check-ins, Attendance Rate, Total Users); danh sách Events; Add/Edit Event (upload thumbnail tỉ lệ 4:3 và banner 24:9, nội dung Rich Text, kiểm tra ngày/giờ); cấu hình đăng ký (bật/tắt student/lecturer/guest, Max Slots, Waitlist, vai trò bổ sung); Draft / Publish / Preview / Important Update / Delete; phê duyệt Participants & Reviews; Check-in.
- **Pool B — Trải nghiệm người tham gia.** Trang chủ công khai với featured-event carousel; duyệt theo category và tìm kiếm; chi tiết sự kiện; form đăng ký (chọn vai trò, waitlist); My Registrations và vé barcode/QR; đánh giá sao sau sự kiện.
- **Pool C — Quản trị người dùng.** Danh sách Users (cột Avatar+Name, Role, Member Code, Active, Audit); Assign Role; Block / Unblock; Reset Password; Export to Excel; audit log.
- **Pool D — Yêu cầu hỗ trợ.** Phía người dùng: tạo yêu cầu hỗ trợ (category, nội dung, ảnh đính kèm), danh sách My Requests và chi tiết với phản hồi chính thức. Phía quản trị: danh sách Support Requests (tab Pending / Resolved, tìm theo member code hoặc category), chi tiết yêu cầu với image lightbox, ghi chú nội bộ và phản hồi chính thức.

Ngoài các pool chức năng trên, bài tập tập trung vào giao diện người dùng. Các vấn đề giao diện được tổ chức theo bốn khía cạnh giao diện (interface aspect — IA), là các chiều bao phủ của checklist dùng chung:

- **IA-01:** Tiêu chuẩn UI chung (bố cục, căn chỉnh, typography, màu sắc, tính nhất quán, quốc tế hóa EN/VI, trạng thái rỗng/đang tải).
- **IA-02:** Form (nhãn, kiểm tra hợp lệ, vị trí báo lỗi, xử lý trường bắt buộc, upload, rich-text editor).
- **IA-03:** Điều hướng (menu, breadcrumb, tab, sidebar, kéo-thả sắp xếp lại, thao tác quay lại/trở về, deep link).
- **IA-04:** Phản hồi / trạng thái (toast, badge, hộp thoại xác nhận, thanh tiến trình, màu trạng thái, cập nhật thời gian thực).

## 5. Lựa chọn phạm vi

Bài tập này được thực hiện theo nhóm nhưng có phần lõi cá nhân.

- **Sản phẩm nhóm (dùng chung):** Nhóm thiết kế một GUI checklist mà mọi thành viên cùng dùng (Task 1, Part A). Checklist phải bao phủ toàn bộ bốn khía cạnh IA-01…IA-04.
- **Sản phẩm cá nhân:** Mỗi thành viên chọn một trong bốn kịch bản dưới đây và thực hiện từ đầu đến cuối (Task 1 Part B, Task 2, Task 3).

Mỗi thành viên chọn **chính xác một** kịch bản:

- **Kịch bản A — Quản trị viên tạo và quản lý sự kiện.** Nhóm chức năng: vòng đời sự kiện ở phía quản trị.
- **Kịch bản B — Người dùng đăng ký tham dự sự kiện.** Nhóm chức năng: khám phá công khai và đăng ký của người tham gia.
- **Kịch bản C — Quản trị viên quản lý người dùng.** Nhóm chức năng: quản trị người dùng.
- **Kịch bản D — Người dùng gửi yêu cầu hỗ trợ và quản trị viên giải quyết.** Nhóm chức năng: vòng đời yêu cầu hỗ trợ ở cả phía người dùng và quản trị.

Với kịch bản đã chọn, hãy liệt kê ít nhất ba (3) màn hình thuộc nhóm chức năng đó và kiểm thử từng màn hình bằng checklist của nhóm. Các màn hình gợi ý (có thể chọn màn hình khác trong cùng nhóm nhưng phải giải thích lý do):

- **Kịch bản A (chọn ≥ 3):** (A1) Events list với bộ lọc trạng thái và notification dot; (A2) Add/Edit Event form — upload ảnh + Rich Text + kiểm tra ngày/giờ; (A3) Registration & Roles configuration panel — Max Slots / Waitlist / vai trò bổ sung; (A4) Participants & Reviews approval — màu trạng thái, progress bar, Export; (A5) Check-in tab — xử lý trạng thái quét và log thời gian thực.
- **Kịch bản B (chọn ≥ 3):** (B1) Home / events listing — featured carousel, category, search/filter; (B2) Event detail — banner, lịch trình, nút đăng ký, thông báo waitlist; (B3) Registration form — chọn vai trò, vai trò bổ sung, xác nhận; (B4) My Registrations / ticket — trạng thái và barcode/QR; (B5) Post-event review — đánh giá từ 1–5 sao.
- **Kịch bản C (chọn ≥ 3):** (C1) Users list — tìm kiếm, lọc role/active, các cột; (C2) Assign Role / chỉnh sửa user; (C3) Block-Unblock và Reset-Password dialog — xác nhận + audit; (C4) Export to Excel — độ đầy đủ cột và phản hồi tải xuống.
- **Kịch bản D (chọn ≥ 3):** (D1) Người dùng — form tạo support request có ảnh đính kèm; (D2) Người dùng — My Requests list và chi tiết với phản hồi; (D3) Quản trị viên — Support Requests list, tab Pending/Resolved, tìm kiếm; (D4) Quản trị viên — chi tiết request: image lightbox, internal note, official response.

**Quy tắc không trùng lặp.** Trong cùng một nhóm, không có hai thành viên được phụ trách cùng kịch bản và cùng tập màn hình. Khi nhóm có hơn bốn thành viên và một kịch bản được chia sẻ, các thành viên dùng chung kịch bản phải chọn các màn hình khác nhau để phạm vi kiểm thử không chồng lấp.

## 6. Yêu cầu

Với mỗi task dưới đây, hãy ghi lại quy trình thực hiện trong báo cáo và đính kèm bằng chứng bắt buộc. Task 1B, 2 và 3 đều thực hiện trên cùng ba (hoặc nhiều hơn) màn hình của kịch bản đã chọn.

### Task 1 — GUI Checklist

#### Phần A — Checklist dùng chung (sản phẩm nhóm)

- Theo nhóm, thiết kế một GUI checklist có **hơn 40 mục**, cùng bao phủ bốn khía cạnh giao diện: tiêu chuẩn UI chung (IA-01), form (IA-02), điều hướng (IA-03), và phản hồi / trạng thái (IA-04). Hãy xem lại bài giảng về GUI checklist (10 heuristic của Nielsen, 6 nguyên tắc của Norman, 8 quy tắc vàng của Shneiderman và checklist theo từng widget) trước khi bắt đầu.
- Xây dựng checklist dựa trên nguồn tham khảo. Dùng công cụ AI để sinh tập mục ban đầu, sau đó phản biện và bổ sung các mục của riêng nhóm. Nộp các sản phẩm nhóm gồm: (1) checklist, (2) danh sách nguồn tham khảo đã sử dụng (sách, bài viết, tiêu chuẩn, slide môn học), và (3) các prompt AI dùng để tạo và tinh chỉnh checklist.
- Với mỗi mục bổ sung ngoài đầu ra AI, giải thích vì sao AI bỏ sót — ví dụ: chất lượng prompt, giới hạn của mô hình, hoặc đặc điểm riêng của giao diện EMS. Những mục AI thường bỏ sót gồm accessibility, bố cục phải-sang-trái (RTL), dark mode, điều hướng bàn phím và quốc tế hóa EN/VI; đây chỉ là ví dụ.

#### Phần B — Thực thi trên kịch bản của bạn (sản phẩm cá nhân)

- Thực thi checklist dùng chung trên từng màn hình đã chọn (≥ 3 màn hình), đánh dấu mọi mục là **Passed** hoặc **Failed** theo từng màn hình. Thêm cột Notes ghi lý do cho mỗi mục Failed. Chỉ đính kèm screenshot cho các mục Failed.
- Báo cáo tất cả bug phát hiện được trong báo cáo và qua kênh nộp ở §7. Với mỗi bug, cần có: màn hình, bước tái hiện, kết quả mong đợi so với thực tế, mức độ nghiêm trọng và screenshot.

### Task 2 — User Testing với 5 người dùng thật → Usability Report

Thay vì tự đánh giá khả dụng, hãy thiết kế một kịch bản user testing, thực hiện với năm (5) người dùng thật trên ≥ 3 màn hình thuộc phạm vi của bạn, sau đó thu thập và phân tích kết quả thành Usability Report cho các trang web đó. Hãy xem lại bài giảng về usability testing trước khi bắt đầu.

#### Giai đoạn 1 — Thiết kế và chuẩn bị

- Viết task scenario. Chuyển phạm vi màn hình thành một nhiệm vụ thực tế, hướng mục tiêu mà người dùng phải hoàn thành — nêu mục tiêu, không nêu các bước nhấp cụ thể. Ví dụ Kịch bản B: “đăng ký một workshop sắp diễn ra và cho tôi xem QR check-in của bạn”; Kịch bản D: “báo cáo việc đăng ký thất bại và theo dõi yêu cầu cho đến khi được giải quyết”.
- Xác định dữ liệu sẽ đo. Tối thiểu gồm: thành công tác vụ (hoàn thành / một phần / thất bại), thời gian hoàn thành, số lỗi / lần do dự, và điểm SUS hoặc UEQ-S sau tác vụ. Bổ sung một bộ ngắn câu hỏi mở về mức độ rõ ràng, khả năng phục hồi sau lỗi, tốc độ và độ tin cậy.
- Tuyển năm (5) người tham gia thật phù hợp với chân dung người dùng mục tiêu (sinh viên, giảng viên hoặc người tham dự sự kiện tùy kịch bản), có thông tin liên hệ có thể xác minh (Zalo / email / điện thoại; che bốn chữ số giữa). Người tham gia phải ở ngoài lớp học này.
- Chạy pilot với một người bổ sung để phát hiện task mơ hồ hoặc luồng hỏng, sau đó tinh chỉnh trước các phiên chính thức.

#### Giai đoạn 2 — Thực hiện 5 phiên (mỗi người tham gia một phiên)

- Thiết lập bối cảnh. Nói rõ với người tham gia rằng bạn đang kiểm thử sản phẩm, không phải kiểm thử họ; yêu cầu họ suy nghĩ thành lời.
- Quan sát trung lập. Không đưa gợi ý dẫn dắt; chỉ can thiệp khi họ hoàn toàn bế tắc. Ghi lại màn hình (và âm thanh nếu có đồng ý) cùng ghi chú có cấu trúc về điểm gây cản trở, lỗi, do dự và sự khó chịu được nói ra.
- Kết thúc mỗi phiên. Cho người tham gia hoàn thành thang đo SUS / UEQ-S, sau đó trả lời các câu hỏi mở.

#### Giai đoạn 3 — Thu thập, phân tích và báo cáo

- Chấm điểm SUS / UEQ-S của năm người tham gia và lập bảng các chỉ số tác vụ (tỉ lệ thành công, thời gian trung bình, lỗi).
- Phân tích khả dụng của các trang web liên quan: nhóm các điểm đau tương tự, tách bug đơn lẻ khỏi vấn đề thiết kế mang tính hệ thống, và xếp hạng phát hiện theo mức độ nghiêm trọng (0–4).
- Lập báo cáo. Usability Report phải có: kịch bản, bảng người tham gia (5 người, đã che thông tin), bảng chỉ số, các phát hiện đã xếp hạng kèm screenshot từng phát hiện, và danh sách khuyến nghị cụ thể theo thứ tự ưu tiên. Ghi các bug thực sự qua kênh ở §7.
- TA có thể gọi ngẫu nhiên hai (2) người tham gia để xác minh. Giả mạo người tham gia sẽ bị **0 điểm Task 2**.

### Task 3 — Đa trình duyệt / Đa nền tảng

Kiểm thử cách ba chức năng/màn hình của bạn hiển thị và hoạt động trên ma trận tương thích rộng. Hãy xem lại bài giảng về compatibility testing (sự khác nhau giữa emulator/simulator/thiết bị thật và “các bậc” BrowserStack) trước khi bắt đầu.

- **Phạm vi bắt buộc:** Với mỗi màn hình, lập ma trận tương thích bao phủ:
  - **3 hệ điều hành** — ví dụ Windows, macOS, Android hoặc iOS.
  - **5 trình duyệt** — ví dụ Chrome, Firefox, Safari, Edge, Opera (hoặc Samsung Internet trên mobile).
  - **3 loại thiết bị** — desktop, tablet và điện thoại.
- Ma trận không cần bao phủ tất cả tổ hợp `3 × 5 × 3`, nhưng với **mỗi trong ba màn hình**, phải kiểm thử ít nhất một lần mọi hệ điều hành, mọi trình duyệt và mọi loại thiết bị. Nêu rõ các ô đã bao phủ và đánh dấu từng ô **Pass / Fail**.
- Sử dụng trial BrowserStack hoặc LambdaTest (khuyến nghị mạnh). Nếu trial đã hết, thay thế bằng cloud tool khác (Sauce Labs, CrossBrowserTesting) hoặc thiết bị vật lý thật, với điều kiện mỗi screenshot hiển thị rõ tên browser / OS / device cùng URL EMS. Bạn tự chịu trách nhiệm có quyền truy cập trial.
- Chụp screenshot cho mọi ô trong ma trận; từng screenshot phải chèn username theo dạng `MSSV@....edu.vn` (email mã số sinh viên). Đính kèm screenshot cho mọi lỗi hiển thị/bố cục Fail kèm ghi chú ngắn về lỗi (tràn nội dung, chồng lấp, vỡ bố cục, chữ khó đọc, control không phản hồi, v.v.).

## 7. Bug & Usability Findings — Kênh nộp bài

Mọi defect và mọi cải tiến usability được đề xuất trong Tasks 1–3 phải được báo cáo **hai lần**:

1. Nộp từng finding qua Google Form: <https://forms.gle/CJQFQCAXcsDbXDMM9> — dùng email mã số sinh viên (`MSSV@....edu.vn`, hoặc địa chỉ mà form yêu cầu) để các bài nộp có thể quy về đúng người.
2. Tổng hợp mọi finding vào một file — **Bug & Usability Findings Log** — và đưa vào bài nộp. Log phải tổng hợp mọi nội dung đã gửi lên form, tối thiểu có các cột: `ID · Scenario/Screen · Type (Bug | Usability) · Description · Steps/Heuristic · Severity · Suggested fix · Screenshot ref · Form-submission timestamp`.

File tổng hợp và các bài gửi form phải nhất quán; TA có thể đối chiếu số lượng.

## 8. Agent Skill

- Bạn được khuyến khích xây dựng Agent Skills áp dụng việc thực thi GUI checklist, đánh giá usability theo heuristic và chạy ma trận compatibility để có thể tái sử dụng trên các màn hình và luồng EMS khác.
- Nộp các skill cùng video minh họa (liên kết YouTube) cho thấy đầy đủ cách dùng skill trên một màn hình hoặc luồng hoàn chỉnh.

## 9. Công cụ được phép và mức Bloom-AI

Bạn có thể sử dụng các công cụ sau và phải khai báo chúng trong AI Audit Report:

- Bất kỳ công cụ AI nào bạn chọn (ví dụ: ChatGPT, Claude, Gemini, Copilot, Cursor).
- Trial BrowserStack hoặc LambdaTest (hoặc cloud cross-browser tool / thiết bị thật khác).
- Google Forms (kênh nộp finding tại §7).

Mức Bloom-AI bắt buộc cho bài tập này là G9.3 (Analyse) và G9.4 (Collaborate).

## 10. AI Audit Report (Phụ lục bắt buộc)

Đính kèm AI Audit Report dưới dạng phụ lục. Có thể dùng nội dung của AI Templates được cung cấp nếu cần.

- Nếu không dùng AI, khai báo: “I do not use any AI help in this exercise.”
- Nếu có dùng AI, khai báo: “I use AI tools for the following tasks,” và với mỗi tương tác, ghi tên công cụ AI, ngày giờ, prompt của bạn và đầu ra AI.

Để đơn giản hóa, bạn được khuyến khích tạo skill hoặc rule để tự động trích xuất thông tin trên sau một phiên AI. Các prompt nhóm dùng để xây dựng checklist (§6, Task 1 Part A) cũng thuộc phần này.

## 11. AI Critique (200–300 từ, bắt buộc)

Viết một đoạn 200–300 từ phê bình AI. AI đã sai, thiên kiến hoặc thiếu sót ở đâu? Vì sao AI không phát hiện vấn đề đó? Bạn đã học được nguyên tắc gì về cộng tác với AI trong bài tập này? Có thể dùng nội dung từ AI Templates nếu cần.

## 12. Ràng buộc chống gian lận bằng AI

Bài tập này dựa trên việc chạy thật với EMS đang hoạt động và thu thập bằng chứng đa nền tảng thật. Các nội dung dưới đây **không được AI tạo ra hoặc làm giả**; TA sẽ xác minh khi chấm:

- Bằng chứng thực thi theo từng màn hình — screenshot các màn hình EMS thật bạn đã kiểm thử, thể hiện trạng thái thật.
- Screenshot đa nền tảng phải có lớp phủ email mã số sinh viên (`MSSV@....edu.vn`) cùng URL EMS và thông tin browser/OS/device.
- Năm (5) người tham gia user testing (tên cùng Zalo / số điện thoại, che bốn số giữa) và dữ liệu phiên thô. TA có thể gọi ngẫu nhiên tối đa hai người; giả mạo sẽ làm bài vô hiệu.

## 13. Git Commit Log

- Tạo Git commit mới cho từng bước trong quy trình kiểm thử (ví dụ: thiết kế checklist, thực thi checklist theo từng màn hình, ghi bug, đánh giá heuristic và mỗi lần chạy đa nền tảng).
- Cung cấp Git commit log trong một file định dạng văn bản.

## 14. Bảo vệ vấn đáp

30% sinh viên được chọn ngẫu nhiên có thể được mời tham gia bảo vệ vấn đáp 5–7 phút trong tuần sau hạn nộp, để giải thích cách đã hoàn thành bài tập.

## 15. Quy định nộp bài

- Quy tắc đặt tên tệp:

  ```text
  <StudentID>_HW03_AI_GUIUsability_EMS_<SelfAssessedGrade>.zip
  ```

- `SelfAssessedGrade`: số gồm 3 chữ số trong khoảng `[000, 100]`.
- Ví dụ:

  ```text
  25127001_HW03_AI_GUIUsability_EMS_090.zip
  ```

- **Sản phẩm cấp nhóm** (nộp một lần cho mỗi nhóm; mỗi thành viên cũng giữ một bản):
  - GUI checklist dùng chung (Excel hoặc Markdown, > 40 mục trên IA-01…IA-04).
  - Danh sách nguồn tham khảo và các prompt AI dùng để tạo checklist.

- **Tệp `.zip` cá nhân** — bắt buộc gồm:
  - Báo cáo chính (Markdown + PDF): kịch bản đã chọn, ≥ 3 màn hình và lý do chọn, kết quả thực thi checklist cho từng màn hình, Usability Report và báo cáo đa nền tảng.
  - Bằng chứng user testing: task scenario, bảng 5 người tham gia (thông tin liên hệ đã che), ghi chú quan sát mỗi phiên, câu trả lời SUS / UEQ-S, bảng chỉ số và bản ghi màn hình nếu có.
  - Bug & Usability Findings Log (file tổng hợp §7), nhất quán với các bài gửi Google Form.
  - Screenshot đa trình duyệt / đa nền tảng (có lớp phủ Student-ID).
  - AI Critique và AI Audit Report (Markdown + PDF).
  - Git commit log (file văn bản).
  - Agent Skills + liên kết video demo.
  - `README.md` có bảng tự đánh giá và test summary: kịch bản đã chọn; màn hình đã test; số mục checklist đã thiết kế / thực thi / Pass / Fail; số bug; số người tham gia user testing (5) và vấn đề usability theo mức độ nghiêm trọng; số ô compatibility đã bao phủ; video demo.
  - Mọi tài liệu hỗ trợ khác.

- Nộp lên Moodle. Xem hạn nộp tại liên kết nộp bài.

## 16. Mẫu đánh giá

| STT | Tiêu chí | Điểm | Tự đánh giá |
| ---: | --- | ---: | --- |
| 1a | Task 1A — Checklist dùng chung (> 40 mục, IA-01…IA-04) + nguồn tham khảo + prompt AI (nhóm) | 15 | |
| 1b | Task 1B — Thực thi checklist trên ≥ 3 màn hình + bug report (cá nhân) | 15 | |
| 2 | Task 2 — User testing với 5 người dùng thật (kịch bản + 5 phiên + phân tích → Usability Report) | 25 | |
| 3 | Task 3 — Ma trận đa trình duyệt / đa nền tảng (3 OS × 5 browser × 3 loại thiết bị) | 25 | |
| 4 | Nộp Bug & Usability Findings (Google Form) + log tổng hợp | 10 | |
| 5 | Agent Skills | 10 | |
| | **Tổng cộng** | **100** | |

## 17. Tài liệu tham khảo

- ISTQB Foundation Level Syllabus (phiên bản mới nhất).
- Nielsen, J. *10 Usability Heuristics for User Interface Design*.
- Norman, D. *The Design of Everyday Things* (6 nguyên tắc).
- Shneiderman, B. *Eight Golden Rules of Interface Design*.
- Slide môn học: GUI + Usability + Compatibility Testing (AI-First, Combined).
- Tài liệu BrowserStack / LambdaTest — kiểm thử đa trình duyệt và đa nền tảng.
- Hardman, P. (2025). *A Post-AI Learning Taxonomy*.

## 18. Quy định khác

- Không chấp nhận nộp trễ.
- Thiếu bất kỳ tài liệu bắt buộc nào sẽ nhận **0 điểm**.
- Sao chép giữa các sinh viên — bao gồm cả prompt — sẽ khiến cả hai bên nhận **0 điểm**.

Checklist dùng chung của nhóm được kỳ vọng là giống nhau trong nhóm; mọi nội dung khác (chọn màn hình, thực thi, usability, đa nền tảng, findings) phải là sản phẩm cá nhân của bạn.
