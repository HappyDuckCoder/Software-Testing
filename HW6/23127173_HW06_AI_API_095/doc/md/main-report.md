# Báo cáo kiểm thử API - HW06-AI

## 1. Scope và môi trường

_Điền sau khi xác minh SUT. Không coi API dự kiến trong README là scope đã chốt._

## 2. API selection

Xem [api-selection.md](api-selection.md) để ghi endpoint, pool, precondition và lý do chọn.

## 3. Phương pháp

Mỗi API có pipeline: AI generation -> human audit -> student extension -> Postman/Newman execution -> bug triage. Test case bao phủ domain partitions, state transition, security và response schema.

## 4. Kết quả theo API

| API | AI-generated | Valid | Invalid/Incomplete đã sửa | Student-added | Executed | Pass | Fail | Bugs |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Chưa chạy | - | - | - | - | - | - | - |
| B | Chưa chạy | - | - | - | - | - | - | - |
| C | Chưa chạy | - | - | - | - | - | - | - |

## 5. Postman/Newman

Ghi các tính năng đã dùng thực tế và link collection/environment/data/report. Mọi request phải có `X-Student-Id: 23127173`; đặt ảnh console thật tại `evidence/header/`.

## 6. CI/CD

Xem [CI/CD report](../../ci-cd/ci-cd-report.md). Báo cáo hai run có link/screenshot thật, không dùng ảnh mô phỏng.

## 7. Bug report

Chỉ liệt kê lỗi tái lập được và GitHub Issue có screenshot. Nếu không tìm thấy lỗi, ghi rõ phạm vi và kết quả, không tạo issue giả.

## 8. AI-driven test generator

Xem [thiết kế và pseudocode](../../agent-skills/eshop-api-test-generator/README.md). Diagram trong gói nộp phải do sinh viên tự vẽ.

## 9. Kết luận và giới hạn

_Điền sau thực thi, nêu rõ dataset, thời điểm chạy, phiên bản SUT và giới hạn coverage._
