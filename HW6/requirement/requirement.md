# HW06 - Kiểm thử API

## 1. Thông tin chung

| Mục | Nội dung |
| --- | --- |
| Mã bài tập | HW06-AI |
| Thời lượng | 10 giờ |
| Hạn nộp | Xem liên kết nộp bài trên Moodle |
| Hình thức | Cá nhân |
| Sản phẩm nộp | Báo cáo trên Moodle |
| Chính sách AI | Mở; bắt buộc có tuyên bố và AI Audit Report đính kèm |
| Bloom-AI yêu cầu | G9.1 đến G9.6 tùy hạng mục; trọng tâm G9.2-G9.5 |

## 2. Nguyên tắc thực hiện

- **AI-first:** dùng AI theo từng bước của kỹ thuật kiểm thử API đã học, không dùng một prompt tổng quát để giao toàn bộ việc.
- **Rà soát bởi con người:** sinh viên chịu trách nhiệm về mọi đầu ra AI, phải sửa và hoàn thiện trước khi nộp.
- **AI Audit:** lưu đầy đủ nhật ký dùng AI; có thể xây Agent Skill tái sử dụng. Nếu không dùng AI vẫn phải tuyên bố rõ.
- **Tài liệu hóa:** ghi toàn bộ quá trình bằng định dạng văn bản như Markdown.
- **Ưu tiên chất lượng:** đánh giá dựa trên số lượng/chất lượng test case, AI audit, Postman collection, Newman report, bug report, thiết kế test generator và các liên kết tham chiếu.

## 3. Kết quả học tập

Sau bài tập, sinh viên có thể tạo test case API từ đặc tả với AI rồi audit/mở rộng; kiểm thử domain partition, state transition, security và schema; phát hiện lỗi AI bỏ sót; và thiết kế AI-driven test generator cho EShop. Bài tập thể hiện G9.2 Apply, G9.3 Analyse, G9.4 Collaborate và G9.5 Create.

## 4. Hệ thống kiểm thử

SUT là **EShop**, ứng dụng thương mại điện tử tiếng Việt phục vụ thực hành kiểm thử: <https://github.com/ttbhanh/eshop-sut>. Repository có `api_specification.md`, bao gồm endpoint và các yêu cầu bảo mật SEC-01 đến SEC-07.

| Pool | Chức năng |
| --- | --- |
| A - Authentication, Categories, Products | FR-01 đăng ký; FR-02 login/lockout; FR-03 quên/đặt lại mật khẩu; FR-04 hồ sơ; FR-05 tìm kiếm sản phẩm; FR-06 chi tiết sản phẩm |
| B - Cart, Checkout | FR-07 giỏ hàng; FR-08 checkout; FR-09 coupon; FR-10 máy trạng thái đơn hàng; FR-11 lịch sử đơn hàng |
| C - Web Admin | FR-12 phân quyền; FR-13 dashboard; FR-14 category CRUD; FR-15 product CRUD; FR-16 import CSV; FR-17 coupon CRUD; FR-18 quản lý đơn; FR-19 quản lý người dùng |
| D - Mobile | Không dùng trong HW06 vì bài tập nhắm đến backend API |

## 5. Chọn API

Chọn đúng **3 API**: một API cho mỗi Pool A, B và C. Ví dụ: login/search sản phẩm (A), cart/checkout/tạo đơn (B), thao tác product/order của admin có đổi trạng thái (C). Ba API không được trùng với lựa chọn của thành viên khác trong nhóm.

## 6. Pipeline bắt buộc cho từng API

1. **Sinh bằng AI:** cung cấp đặc tả API và điều khiển AI từng bước để tạo tối thiểu **35 test case/API**. Bao phủ domain partition cho mọi tham số, state transition (bao gồm `pending -> confirmed -> shipping -> delivered` và quy tắc hủy), security (SQL injection, IDOR, role escalation, SEC-01--SEC-07) và schema validation đúng đặc tả.
2. **Audit thủ công:** gắn nhãn từng test case AI là `VALID`, `INVALID` hoặc `INCOMPLETE`, nêu lý do và sửa các ca không đạt.
3. **Mở rộng:** thêm ít nhất 5 test case do sinh viên tự tìm ra mà AI bỏ sót, ưu tiên security/state transition; giải thích nguyên nhân AI bỏ sót.
4. **Thực thi:** chạy bằng Postman + Newman (hoặc Karate/RestAssured). Mọi request có header `X-Student-Id: {StudentID}`, ví dụ qua pre-request script. Nộp Newman/HTML report.
5. **Báo lỗi:** ghi các lỗi thật trong Markdown và GitHub Issues; mỗi issue có screenshot. Không tạo hoặc bịa lỗi/bằng chứng.

Yêu cầu chung: sử dụng hợp lý các tính năng Postman (workspace, collection, variables, environments, data-driven run, monitor, mock server...), liệt kê chúng trong báo cáo. Tích hợp CI/CD, mô tả cấu hình pipeline và hai run: một run toàn bộ pass và một run có test fail, mỗi run có screenshot và link.

## 7. Agent Skill

Thiết kế AI-driven API test generator: từ API specification sinh test case tự động. Nộp sơ đồ **tự vẽ** và pseudocode. Khuyến khích cài thành reusable Agent Skill và quay video demo tạo test cho một API. Sơ đồ không được AI-generated trực tiếp.

## 8. Công cụ và mức Bloom-AI

Được dùng AI bất kỳ (ChatGPT, Claude, Gemini, Copilot, Cursor), Postman + Newman hoặc Karate/RestAssured; tùy chọn Promptfoo, DeepEval, Ragas. Khai báo tất cả trong AI Audit.

## 9. AI Audit Report - phụ lục bắt buộc

Nếu không dùng AI, ghi: “I do not use any AI help in this exercise.” Nếu dùng AI, ghi: “I use AI tools for the following tasks,” và với từng tương tác phải có tên công cụ, ngày giờ, prompt, AI output. Nên có skill/rule trích xuất nhật ký tự động.

## 10. AI Critique - bắt buộc, 200-300 từ

Viết một đoạn 200-300 từ: AI đã sai/thiên lệch/thiếu gì, vì sao bỏ sót, và nguyên tắc hợp tác với AI rút ra từ bài tập.

## 11. Ràng buộc chống gian lận AI

Không được AI tạo hoặc bịa các bằng chứng sau: ảnh console của pre-request script mang `X-Student-Id`, output Newman có hostname khớp deployment (`localhost`/`127.0.0.1` được chấp nhận), và sơ đồ test-generator tự vẽ. TA sẽ xác minh.

## 12. Git commit log

Tạo commit mới cho từng bước (generation, audit, extension, execution cho từng API) và nộp commit log ở định dạng text.

## 13. Bảo vệ miệng

Ngẫu nhiên 30% sinh viên được mời bảo vệ 5-7 phút trong tuần sau hạn nộp.

## 14. Quy cách nộp

Tên ZIP: `<StudentID>_HW06_AI_API_<SelfAssessedGrade>.zip`, trong đó điểm tự đánh giá là 3 chữ số từ 000 đến 100; ví dụ `25127001_HW06_AI_API_090.zip`.

ZIP phải gồm: main report Markdown + PDF và AI audit; link public GitHub; Postman collection JSON + Newman HTML report + danh sách Postman features; CI/CD report và hai pipeline run; Excel test cases + test summary; diagram/pseudocode generator; tùy chọn OpenAPI convert (nếu AI tạo thì audit); bug report + screenshots GitHub Issues; AI critique/audit ở Markdown + PDF; git commit log; README có bảng self-assessment và số API/test case/bug; các tài liệu hỗ trợ khác.

## 15. Bảng đánh giá

| Hạng mục | Điểm tối đa |
| --- | ---: |
| API 1 - generate + audit + extend + execute + bugs | 30 |
| API 2 - pipeline tương tự | 30 |
| API 3 - pipeline tương tự | 30 |
| Agent Skill - AI-driven test generator | 10 |
| **Tổng** | **100** |

## 16. Tài liệu tham khảo

- ISTQB Foundation Level Syllabus (bản mới nhất).
- Hardman (2025), *A Post-AI Learning Taxonomy*.
- Fuster Rabella (2025), OECD Education Working Paper No. 338.
- Anthropic (2025), *Building Reliable AI Test Agents*.
- Tài liệu DeepEval và Promptfoo.

## 17. Quy định khác

- Không chấp nhận nộp muộn.
- Thiếu bất kỳ tài liệu bắt buộc nào: 0 điểm.
- Sao chép giữa sinh viên, gồm cả prompt: cả hai nhận 0 điểm.
