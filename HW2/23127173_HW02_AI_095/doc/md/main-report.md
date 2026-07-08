# HW02-AI Main Report - Domain Testing trên EShop

## 1. Thông tin chung

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW02-AI - Domain Testing trên EShop |
| SUT | EShop |
| Repository | <https://github.com/ttbhanh/eshop-sut> |
| Chính sách AI | Open, bắt buộc có AI Audit Report |
| Mức tự đánh giá mục tiêu | 095 |

## 2. Feature đã chọn

| Pool | Feature | Lý do chọn | Trạng thái |
| --- | --- | --- | --- |
| Pool A | FR-04 - Quản lý hồ sơ cá nhân | Có miền input rõ cho `name`, `phone`, `shipping_address`, token và trường ngoài dự kiến | Đã chạy 30 test |
| Pool B | FR-11 - Xem lịch sử đơn hàng của user | Có miền dữ liệu danh sách đơn, quyền sở hữu, token, trạng thái đơn | Đã chạy 22 test |
| Pool C | FR-18 - Quản lý đơn hàng của admin | Có miền role admin, danh sách đơn, transition trạng thái và dữ liệu user nhập | Đã chạy 24 test |
| Pool D - Mobile | FR-10 - Máy trạng thái đơn hàng | Kiểm tra state machine qua user/mobile cancel flow và admin transition flow | Đã chạy 25 test |

## 3. Artifact map

| Artifact | Đường dẫn |
| --- | --- |
| README và test summary | `README.md` |
| Review consistency/coverage | `doc/md/hw2-consistency-coverage-review.md` |
| Feature A report | `requirement/feature-A/feature-A-report.md` |
| Feature B report | `requirement/feature-B/feature-B-report.md` |
| Feature C report | `requirement/feature-C/feature-C-report.md` |
| Feature D mobile report | `requirement/feature-D-mobile/feature-D-mobile-report.md` |
| Thư mục ảnh minh chứng Feature A | `requirement/feature-A/domain-testing/`, `requirement/feature-A/boundary-value-analysis/`, `requirement/feature-A/bug-report/screenshots/` |
| Thư mục ảnh minh chứng Feature B | `requirement/feature-B/domain-testing/`, `requirement/feature-B/boundary-value-analysis/`, `requirement/feature-B/bug-report/screenshots/` |
| Thư mục ảnh minh chứng Feature C | `requirement/feature-C/domain-testing/`, `requirement/feature-C/boundary-value-analysis/`, `requirement/feature-C/bug-report/screenshots/` |
| Thư mục ảnh minh chứng Feature D | `requirement/feature-D-mobile/domain-testing/`, `requirement/feature-D-mobile/boundary-value-analysis/`, `requirement/feature-D-mobile/bug-report/screenshots/` |
| Agent Skills | `agent-skills/` |
| AI Audit | `doc/md/AI Audit/01_AI-Audit-Report.md` |
| AI Critique | `doc/md/AI Audit/02_AI-Critique.md` |
| Mandatory Disclosure | `doc/md/AI Audit/03_Mandatory-Disclosure.md` |
| Git commit log | `doc/md/Git Commit Log/git-commit-log.txt` |

## 4. Test summary

| Feature | Designed | Executed | Passed | Failed | Warning | Not executed | Bug/Warning chính |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Feature A - FR-04 | 30 | 30 | 10 | 14 | 6 | 0 | 2 |
| Feature B - FR-11 | 22 | 22 | 18 | 2 | 2 | 0 | 2 |
| Feature C - FR-18 | 24 | 24 | 18 | 6 | 0 | 0 | 3 |
| Feature D - FR-10 | 25 | 25 | 21 | 4 | 0 | 0 | 2 |
| **Tổng** | **101** | **101** | **67** | **26** | **8** | **0** | **9 bug/warning chính** |

## 5. Kết quả chính theo feature

Feature A phát hiện 2 lỗi quan trọng: frontend kiểm tra số điện thoại trái README và API cho phép user gửi `role=admin` khi cập nhật hồ sơ.

Feature B đạt phần hiển thị lịch sử đơn hàng cơ bản, nhưng phát hiện lỗi lộ chi tiết đơn hàng qua `GET /api/orders/:id`. Ngoài ra có warning liên FR-10 vì màn hình history vẫn cho thao tác hủy đơn `shipping`.

Feature C phát hiện 3 lỗi lớn: API admin thiếu kiểm tra role, state machine cho `canceled -> delivered`, và admin UI có XSS qua `shipping_address`.

Feature D tập trung vào FR-10 và xác nhận 2 lỗi state machine: user hủy được đơn `shipping`, admin chuyển được `canceled -> delivered`.

## 6. Đối chiếu yêu cầu HW2

| Yêu cầu | Đánh giá |
| --- | --- |
| Chọn 4 feature, mỗi pool một feature | Đạt: A/FR-04, B/FR-11, C/FR-18, D/FR-10 |
| Domain Testing cho từng feature | Đạt: có phân tích miền, class/condition và test case |
| Boundary Value Analysis cho từng feature | Đạt: có boundary/class và test case BVA |
| AI Gap Analysis | Đạt: có file riêng cho cả 4 feature |
| Bug report Markdown | Đạt: có file bug report cho cả 4 feature |
| GitHub Issues / screenshot bug | Đã có screenshot trong `requirement/feature-*/bug-report/screenshots/`; nếu giảng viên yêu cầu URL issue thật thì gắn thêm link |
| AI Audit và Mandatory Disclosure | Đạt, đã cập nhật |
| AI Critique 200-300 từ | Đạt, đã viết bản cuối |
| Agent Skill | Đã có source skill; video demo skill sẽ do sinh viên tự bổ sung sau nếu rubric chấm phần demo |
| Git commit log | Đã paste log thật trong `doc/md/Git Commit Log/git-commit-log.txt`; nên cập nhật lại sau commit cuối |
| PDF report | Sinh viên sẽ export PDF khi đóng gói nộp bài |

## 7. Self-assessment

| No. | Criteria | Grade | Self-Assessed Grade |
| --- | --- | ---: | ---: |
| 1 | Feature A (Domain + Boundary) | 25 | 24 |
| 2 | Feature B (Domain + Boundary) | 25 | 24 |
| 3 | Feature C (Domain + Boundary) | 25 | 24 |
| 4 | Feature D (Mobile, Domain + Boundary) | 15 | 14 |
| 5 | Agent Skills | 10 | 9 |
| | **Total** | **100** | **95** |

## 8. Mandatory Disclosure

Xem `doc/md/AI Audit/03_Mandatory-Disclosure.md`.
