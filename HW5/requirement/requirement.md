# HW05 - Kiểm thử hiệu năng

## 1. Thông tin chung

| Hạng mục | Nội dung |
| --- | --- |
| Mã bài tập | HW05-AI |
| Thời lượng | 10 giờ |
| Hạn nộp | Vui lòng xem liên kết nộp bài trên Moodle |
| Hình thức | Bài tập cá nhân |
| Nộp bài | Moodle (báo cáo) |
| Giảng viên & Trợ giảng | TS. Lâm Quang Vũ / TS. Trần Duy Hoàng / ThS. Trần Thị Bích Hạnh / ThS. Trương Phước Lộc / ThS. Hồ Tuấn Thành |
| Liên hệ | lqvu@fit.hcmus.edu.vn / tdhoang@fit.hcmus.edu.vn / ttbhanh@fit.hcmus.edu.vn / tploc@fit.hcmus.edu.vn / hthanh@fit.hcmus.edu.vn |
| Chính sách AI | Mở - bắt buộc có bản khai báo và Báo cáo kiểm toán AI đính kèm |
| Mức Bloom-AI yêu cầu | G9.1 -> G9.6, tùy theo bài tập (xem phần Ánh xạ CLO) |

## 2. Nguyên tắc định hướng

Các nguyên tắc này quy định cách bạn được kỳ vọng thực hiện xuyên suốt chuỗi bài tập của học phần. Hãy đọc kỹ trước khi bắt đầu, vì bài nộp sẽ được đánh giá theo các nguyên tắc này.

- **Chiến lược AI-First.** Bạn bắt buộc áp dụng AI cho các kỹ thuật kiểm thử đã học trên lớp. Tuy nhiên, điều này không có nghĩa là đưa ra một prompt chung chung duy nhất như: "chạy kiểm thử tải và cho tôi biết hiệu năng có tốt không." Thay vào đó, bạn phải hướng dẫn AI qua từng bước của kỹ thuật đúng như đã được giảng dạy, sử dụng AI như một trợ lý có kỷ luật thay vì một hộp đen.
- **Rà soát của con người.** Mọi kết quả do AI tạo ra phải được chính bạn xem xét cẩn thận. Bạn chịu hoàn toàn trách nhiệm về tính đúng đắn của các kết quả này. Bạn được kỳ vọng thực hiện mọi sửa chữa và tinh chỉnh cần thiết - không được chấp nhận việc nộp đầu ra thô của AI mà không rà soát.
- **Báo cáo kiểm toán AI.** Toàn bộ quá trình sử dụng AI phải được ghi lại trong một nhật ký đầy đủ. Bạn được khuyến khích xây dựng Agent Skill có thể tự động thực hiện các hoạt động này cho những bài tập tương tự. Nếu không dùng AI, bạn vẫn phải khai báo rõ điều đó.
- **Tài liệu hóa.** Toàn bộ quy trình làm việc phải được tài liệu hóa dưới định dạng văn bản như Markdown.
- **Chất lượng hơn mức độ hoàn thành.** Bài làm sẽ được chấm không chỉ dựa trên việc hoàn thành mà còn dựa trên số lượng và chất lượng của sản phẩm bàn giao: kế hoạch kiểm thử, tệp dữ liệu, nhật ký thô và các dạng báo cáo, bằng chứng tài nguyên/phần cứng, video minh họa, phần phê bình phân tích AI và các liên kết tham chiếu.

## 3. Mục tiêu học tập

Sau khi hoàn thành bài tập này, bạn có thể:

- Thiết kế và chạy kiểm thử hiệu năng dạng Load, Stress và Spike đối với API backend của SUT bằng JMeter (hoặc k6).
- Thu thập và trình bày các chỉ số hiệu năng cùng giám sát tài nguyên và nhiều dạng báo cáo, đồng thời xác định ngưỡng endurance trên phần cứng của chính bạn.
- Dùng AI để phân tích kết quả, sau đó phê bình phân tích của AI - xác định chỗ AI diễn giải sai chỉ số và đề xuất tối ưu nào là khả thi.
- Đề xuất một pipeline kiểm thử hiệu năng liên tục.
- Thể hiện năng lực Bloom-AI ở các mức G9.2 (Áp dụng), G9.3 (Phân tích), G9.4 (Cộng tác) và G9.6 (Đột phá).

## 4. Hệ thống được kiểm thử (SUT)

**SUT:** EShop - ứng dụng thương mại điện tử mẫu bằng tiếng Việt, được thiết kế cho mục đích thực hành kiểm thử.

**Kho mã nguồn:** <https://github.com/ttbhanh/eshop-sut>

Các tính năng của ứng dụng được tổ chức theo các nhóm sau:

- **Nhóm A - Xác thực, Danh mục và Sản phẩm**
  - FR-01: Đăng ký tài khoản
  - FR-02: Đăng nhập và khóa tài khoản
  - FR-03: Quên mật khẩu và đặt lại mật khẩu (hai bước)
  - FR-04: Quản lý hồ sơ cá nhân
  - FR-05: Liệt kê và tìm kiếm sản phẩm
  - FR-06: Xem chi tiết sản phẩm
- **Nhóm B - Giỏ hàng và Thanh toán**
  - FR-07: Giỏ hàng
  - FR-08: Thanh toán
  - FR-09: Mã giảm giá
  - FR-10: Máy trạng thái đơn hàng
  - FR-11: Xem lịch sử đơn hàng (người dùng)
- **Nhóm C - Web Admin**
  - FR-12: Kiểm soát truy cập
  - FR-13: Bảng điều khiển
  - FR-14: Quản lý danh mục (CRUD)
  - FR-15: Quản lý sản phẩm (CRUD)
  - FR-16: Nhập sản phẩm từ CSV
  - FR-17: Quản lý mã giảm giá (CRUD)
  - FR-18: Quản lý đơn hàng (quản trị viên)
  - FR-19: Quản lý người dùng (quản trị viên)
- **Nhóm D - Ứng dụng di động**

SUT cung cấp một REST backend API được frontend web sử dụng; hãy tham khảo kho mã nguồn để biết chính xác endpoint và cổng sử dụng.

## 5. Phạm vi - Chọn endpoint

Chọn ba nhóm endpoint API backend mục tiêu, ánh xạ từng nhóm tới API của SUT:

- **Thiên về đọc (read-heavy)** - ví dụ: liệt kê/tìm kiếm sản phẩm và chi tiết sản phẩm.
- **Thiên về xác thực (auth-heavy)** - ví dụ: đăng nhập, có xét đến hành vi khóa tài khoản.
- **Giao dịch (transactional)** - ví dụ: thêm vào giỏ hàng và thanh toán/tạo đơn hàng.

Như ở các bài tập trước, hãy bảo đảm lựa chọn của bạn không bị trùng với các thành viên trong nhóm: không có hai thành viên nào được kiểm thử cùng một workflow.

## 6. Yêu cầu

Với mỗi nhiệm vụ sau, hãy tài liệu hóa quy trình trong báo cáo chính và đính kèm bằng chứng được yêu cầu. Hãy xem lại các bài giảng liên quan về kiểm thử hiệu năng trước khi bắt đầu.

### Nhiệm vụ 1 - Thiết kế và thực thi kiểm thử có hỗ trợ AI

Theo chiến lược AI-first, sử dụng một công cụ AI để thiết kế và tạo các kế hoạch kiểm thử, sau đó xem xét, sửa và chịu hoàn toàn trách nhiệm về chúng.

- **Thiết kế và tạo bằng AI.** Điều khiển một công cụ AI theo từng bước, không dùng một prompt chung chung duy nhất, để thiết kế và tạo ba kế hoạch kiểm thử: Load, Stress và Spike. Cả ba kế hoạch phải thực thi cùng một workflow đầu cuối, bao phủ cả ba nhóm endpoint: auth-heavy, read-heavy và transactional. Ví dụ, một người dùng ảo có thể đăng nhập, duyệt hoặc tìm kiếm sản phẩm, sau đó thêm một sản phẩm vào giỏ và hoàn tất thanh toán. Nhờ AI hỗ trợ chọn các tham số thực tế (think-time, ramp-up, số lượng thread/người dùng ảo) cho từng kịch bản, và giải thích ngắn gọn workflow bao phủ từng nhóm endpoint như thế nào.
- **Làm workflow dựa trên dữ liệu.** Sử dụng dữ liệu đầu vào CSV trong workflow đầu cuối để tham số hóa request (ví dụ: thông tin đăng nhập, ID sản phẩm hoặc payload đơn hàng). Có thể dùng một hoặc nhiều tệp CSV tùy theo workflow.
- **Dùng ba dạng báo cáo khác nhau.** Trên ba kế hoạch kiểm thử, hãy dùng ba loại listener/báo cáo riêng biệt (ví dụ: View Results Tree, Summary Report, Aggregate Report); không lặp lại loại nào. (Theo thuật ngữ JMeter; người dùng k6 cung cấp các đầu ra tương đương nhưng khác nhau.)
- Đặt tên mỗi kế hoạch kiểm thử theo mẫu `{StudentID}_{ScenarioType}_{YYYYMMDD}`.
- **Rà soát và sửa (con người).** Phê bình các kế hoạch kiểm thử do AI tạo và sửa chúng. Báo cáo những gì AI làm sai hoặc bỏ sót - ví dụ: ramp-up hoặc think-time không thực tế, số thread sai, assertion yếu, hoặc thiếu xử lý khóa tài khoản - đồng thời giải thích lý do AI bỏ sót (chất lượng prompt, giới hạn của mô hình hoặc đặc điểm của endpoint). Bạn chịu hoàn toàn trách nhiệm về các kế hoạch kiểm thử cuối cùng.
- **Chạy đầy đủ nhất có thể, kèm bằng chứng.** Thực thi cả ba kịch bản và, với mỗi lần chạy, chụp ảnh công cụ cùng mức sử dụng tài nguyên của tiến trình backend (htop / Task Manager / Activity Monitor), kèm báo cáo phần cứng (ảnh dxdiag / screenfetch và bảng thông số). Khi các lần chạy Stress/Spike kích hoạt khóa đăng nhập sau 3 lần thất bại, hãy đặt lại khóa giữa các lần chạy và tài liệu hóa các bước. Tạo các nhật ký `.jtl` thô và các thư mục báo cáo HTML.
- **Xác định ngưỡng endurance.** Chạy kiểm thử endurance/soak ngắn (khoảng 10-15 phút ở tải duy trì) để thực nghiệm tìm ngưỡng của phần cứng; báo cáo bằng các con số cụ thể (ví dụ: RPS ổn định tối đa, ngưỡng bộ nhớ).
- **Ghi video minh họa.** Một video YouTube không công khai với tổng thời lượng ít nhất 6 phút (có thể chia thành một clip cho mỗi kịch bản), hiển thị công cụ và trình theo dõi tài nguyên trong cùng khung hình, có lời thuyết minh tiếng Việt của chính bạn.
- **Báo cáo vấn đề.** Ghi lại bất kỳ lỗi thực tế hoặc vấn đề hiệu năng nào (phản hồi lỗi, crash, hồi quy chức năng) trên trang GitHub Issues, có ảnh chụp màn hình. Việc ghi nhận các vấn đề hiệu năng như độ trễ cao hoặc tỷ lệ lỗi tăng cao được khuyến khích nhưng không bị trừ điểm nếu không có.

### Nhiệm vụ 2 - Phân tích AI và truy tìm diễn giải sai

Theo chiến lược AI-first, dùng AI để phân tích kết quả, sau đó phê bình đầu ra của AI - phần phân tích là đầu ra của AI, còn phần rà soát là của bạn.

- **Phân tích bằng AI.** Sau khi thu thập kết quả thô, prompt một công cụ AI để phân tích các nhật ký `.jtl` và đề xuất ngưỡng hiệu năng.
- **Rà soát và sửa (con người).** Phê bình phân tích của AI và chỉ ra chỗ AI diễn giải hoặc đọc sai các chỉ số. Với mỗi diễn giải sai, trích dẫn giá trị đúng từ nhật ký `.jtl` thô và giải thích lỗi đó.
- **Đánh giá các đề xuất của AI.** Yêu cầu AI đề xuất tối ưu (ví dụ: thêm chỉ mục cơ sở dữ liệu, connection pool hoặc bật SQLite WAL) và phân loại từng đề xuất là khả thi hay bịa đặt, kèm lập luận.

### Nhiệm vụ 3 - Đề xuất Kiểm thử Hiệu năng Liên tục (Đột phá)

Trong phần kết luận, đề xuất mô hình kiểm thử hiệu năng liên tục theo dõi các commit của SUT, quyết định có chạy kiểm thử hiệu năng hay không, và gắn cờ các hồi quy p95. Bao gồm một lưu đồ và phần thảo luận về các đánh đổi (chi phí, cảnh báo sai).

## 7. Agent Skill

- Bạn được khuyến khích xây dựng một Agent Skill áp dụng workflow kiểm thử hiệu năng và phân tích nhật ký này để có thể tái sử dụng với các endpoint bổ sung trong các nhiệm vụ kiểm thử sau.
- Nộp skill cùng một video minh họa (liên kết YouTube) thể hiện từ đầu đến cuối cách bạn dùng skill trên một nhóm endpoint hoàn chỉnh.

## 8. Công cụ được phép và mức Bloom-AI

Bạn có thể sử dụng các công cụ sau và phải khai báo chúng trong Báo cáo kiểm toán AI:

- JMeter (mặc định) hoặc k6 (điểm thưởng).
- Bất kỳ công cụ AI nào bạn chọn (ví dụ: ChatGPT, Claude, Gemini) - để phân tích nhật ký.
- Công cụ theo dõi tài nguyên (htop / Task Manager / Activity Monitor).

Mức Bloom-AI bắt buộc cho bài tập này là G9.2 (Áp dụng), G9.3 (Phân tích), G9.4 (Cộng tác) và G9.6 (Đột phá).

## 9. Báo cáo kiểm toán AI (Phụ lục bắt buộc)

Đính kèm Báo cáo kiểm toán AI như một phụ lục. Có thể dùng nội dung của các AI Template được cung cấp nếu cần.

- Nếu không dùng AI, khai báo: `I do not use any AI help in this exercise.`
- Nếu có dùng AI, khai báo: `I use AI tools for the following tasks,` và đưa vào các thông tin sau cho mỗi lần tương tác:
  - Tên công cụ AI
  - Ngày và giờ
  - Prompt của bạn
  - Đầu ra của AI

Để đơn giản hóa quy trình này, bạn được khuyến khích tạo skill hoặc rule tự động trích xuất các thông tin trên sau một phiên AI.

## 10. Phê bình AI (200-300 từ, bắt buộc)

Viết một đoạn 200-300 từ phê bình AI. Hãy trả lời các câu hỏi: AI đã làm sai, thiên lệch hoặc thiếu sót điều gì? Vì sao AI không phát hiện được vấn đề? Bạn đã học được nguyên tắc nào về cộng tác với AI trong bài tập này?

Có thể dùng nội dung của các AI Template được cung cấp nếu cần.

## 11. Ràng buộc chống gian lận bằng AI

Bài tập này dựa trên bằng chứng thực thi có thật và có thể quy kết được. Các nội dung sau không được do AI tạo hoặc làm giả; trợ giảng sẽ xác minh khi chấm:

- Tên tệp kế hoạch kiểm thử, phải tuân theo mẫu `{StudentID}_{ScenarioType}_{YYYYMMDD}`.
- Các tệp nhật ký `.jtl` thô, đính kèm đầy đủ - không chỉ phần tóm tắt.
- Video minh họa phải hiển thị công cụ và trình theo dõi tài nguyên trong cùng khung hình, với giọng thuyết minh của chính bạn.
- Báo cáo phần cứng có hostname khớp với các lần triển khai ở bài tập trước.

## 12. Nhật ký Git commit

- Tạo một Git commit mới cho từng bước của quy trình (ví dụ: kế hoạch kiểm thử cho từng kịch bản, phần phân tích AI và đề xuất kiểm thử liên tục).
- Cung cấp nhật ký Git commit ở định dạng tệp văn bản.

## 13. Bảo vệ vấn đáp

30% sinh viên được chọn ngẫu nhiên có thể được mời tham gia bảo vệ vấn đáp 5-7 phút trong tuần sau hạn nộp, để giải thích cách hoàn thành bài tập này.

## 14. Quy định nộp bài

- Định dạng tên tệp: `<StudentID>_HW05_AI_Performance_<SelfAssessedGrade>.zip`
  - `SelfAssessedGrade`: số có 3 chữ số trong khoảng `[000, 100]`.
  - Ví dụ: `25127001_HW05_AI_Performance_090.zip`
- Nội dung bắt buộc của tệp `.zip`:
  - Báo cáo chính (Markdown + PDF), gồm báo cáo kiểm thử hiệu năng và phần phê bình phân tích AI.
  - Liên kết kho GitHub công khai (kế hoạch kiểm thử và tệp dữ liệu).
  - Ba kế hoạch kiểm thử (Load / Stress / Spike) theo quy ước đặt tên tệp.
  - Ba nhật ký `.jtl` thô và ba thư mục báo cáo HTML.
  - Ảnh chụp trình theo dõi tài nguyên và thông số phần cứng.
  - Liên kết video minh họa YouTube không công khai.
  - Phê bình AI và Báo cáo kiểm toán AI (Markdown + PDF).
  - Nhật ký Git commit (tệp văn bản).
  - Báo cáo lỗi, kèm ảnh chụp mọi vấn đề trên trang GitHub Issues (nếu có).
  - Tệp `README.md` chứa bảng tự đánh giá (bên dưới) và báo cáo tóm tắt kiểm thử: các kịch bản đã chạy; các nhóm endpoint được bao phủ; ngưỡng endurance (có số liệu); số lượng lỗi/vấn đề hiệu năng; và liên kết video minh họa.
  - Mọi tài liệu hỗ trợ khác.
- Nộp lên Moodle. Xem hạn nộp tại liên kết nộp bài.

## 15. Mẫu đánh giá

| STT | Tiêu chí | Điểm | Tự đánh giá |
| --- | --- | ---: | --- |
| 1 | Nhiệm vụ 1 - Kiểm thử Load | 30 | |
| 2 | Nhiệm vụ 1 - Kiểm thử Stress | 20 | |
| 3 | Nhiệm vụ 1 - Kiểm thử Spike | 20 | |
| 4 | Nhiệm vụ 2 - Phân tích AI + truy tìm diễn giải sai (có giá trị đúng từ nhật ký thô) | 10 | |
| 5 | Nhiệm vụ 3 - Đề xuất Kiểm thử Hiệu năng Liên tục (G9.6) | 10 | |
| 6 | Agent Skills | 10 | |
|  | **Tổng** | **100** | |

## 16. Tài liệu tham khảo

- ISTQB Foundation Level Syllabus (phiên bản mới nhất).
- Hardman, P. (2025). *A Post-AI Learning Taxonomy*.
- Fuster Rabella, M. (2025). *OECD Education Working Paper No. 338*.
- Anthropic (2025). *Building Reliable AI Test Agents* - engineering blog.
- Tài liệu DeepEval & Promptfoo - các framework kiểm thử LLM.

## 17. Quy định khác

- Không được nộp trễ.
- Thiếu bất kỳ tài liệu bắt buộc nào sẽ nhận 0 điểm.
- Sao chép giữa các sinh viên - bao gồm cả prompt - sẽ khiến cả hai bên nhận điểm 0.
