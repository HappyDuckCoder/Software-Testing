# Báo cáo kiểm thử API - HW06-AI

## 1. Scope và môi trường

SUT: EShop backend Node.js/Express/SQLite, `http://127.0.0.1:3000`. Ngày chạy: 01/09/2026. Newman 6.2.1 với `newman-reporter-htmlextra`; collection-level pre-request script đặt `X-Student-Id: 23127173` và Newman CLI ghi nhận header này ở mọi request. Backend được khởi động cục bộ; mỗi lần khởi động `database.js` reset/seed CSDL mẫu, vì vậy các order test được cô lập.

## 2. API selection

| Pool | API | Ý nghĩa | Oracle chính |
| --- | --- | --- | --- |
| A | `PUT /api/users/me` | Cập nhật profile của user hiện tại. | FR-04, SEC-02, SEC-06 |
| B | `PUT /api/orders/:id/cancel` | User hủy đơn của mình khi trạng thái cho phép. | FR-10, SEC-02 |
| C | `PUT /api/admin/orders/:id/status` | Admin cập nhật trạng thái đơn theo state machine. | FR-10, FR-12, FR-18, SEC-03 |

## 3. Phương pháp

Mỗi API có pipeline: AI generation -> human audit -> student extension -> Postman/Newman execution -> bug triage. Test case bao phủ domain partitions, state transition, security và response schema.

## 4. Kết quả theo API

| API | AI-generated | Valid | Invalid/Incomplete đã sửa | Student-added | Executed | Pass | Fail | Bugs |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Draft đang mở rộng | Core reviewed | 1 security case | 4 core | 4 | 3 baseline + 1 compliance defect | 1 | 1 |
| B | Draft đang mở rộng | Core reviewed | 1 state case | 4 core | 4 | 3 baseline + 1 compliance defect | 1 | 1 |
| C | Draft đang mở rộng | Core reviewed | 1 authorization case | 4 core | 4 | 3 baseline + 1 compliance defect | 1 | 1 |

`baseline` ghi nhận hành vi hiện tại để kiểm tra collection; `compliance` giữ expected result theo requirement. Compliance run chạy thật 20 request/21 assertion, có ba assertion fail chính là ba bug trong `issues/bug-report.md`.

## 5. Postman/Newman

Collection: `api-testing/postman/collections/23127173_HW06_EShop_API.postman_collection.json`. Tính năng đã dùng: collection folders, collection-level pre-request script, environment variables, setup chain qua environment variables, CLI execution và HTML reporter. Raw/HTML output: `api-testing/newman/raw-output/` và `api-testing/newman/html-reports/`.

Ảnh Newman chạy thật: `evidence/newman-ui/newman-baseline-terminal-20260901.png`.

Chưa có ảnh Postman Console GUI: Postman Desktop được phát hiện/cài đặt nhưng không khởi động trong môi trường hiện tại. Newman CLI output và ảnh terminal là bằng chứng thực thi thật nhưng không thay thế ảnh Console bắt buộc của đề; mục này còn cần chạy Postman Desktop và chụp ảnh thật.

## 6. CI/CD

Xem [CI/CD report](../../ci-cd/ci-cd-report.md). Báo cáo hai run có link/screenshot thật, không dùng ảnh mô phỏng.

## 7. Bug report

Ba defect tái lập được đã ghi tại `issues/bug-report.md`. GitHub Issues/screenshots chưa được tạo vì chưa có công cụ đăng nhập GitHub trong môi trường; không bịa Issue number.

## 8. AI-driven test generator

Xem [thiết kế và pseudocode](../../agent-skills/eshop-api-test-generator/README.md). Diagram trong gói nộp phải do sinh viên tự vẽ.

## 9. Kết luận và giới hạn

Core suite chứng minh collection, header và Newman pipeline chạy trên localhost; compliance mode phát hiện ba lỗi nghiêm trọng về privilege escalation, state rule và admin authorization. Bài chưa hoàn tất các deliverable bắt buộc: >=35 AI-generated/audited cases mỗi API, >=5 student-added cases mỗi API, Excel test workbook, Postman Desktop Console screenshot, GitHub Issues/screenshot, remote CI runs, PDF export và video/demo. Các mục này giữ trạng thái pending thay vì bị bịa.
