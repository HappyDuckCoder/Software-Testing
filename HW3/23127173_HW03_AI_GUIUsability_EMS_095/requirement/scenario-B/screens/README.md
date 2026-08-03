# Tổng kết thực thi GUI Checklist — Scenario B

## Phạm vi

Ba log dưới đây dùng cùng Scenario B và cùng SUT EMS: B1 Dashboard, B2 Event detail/registration, B4 Profile/My Registrations.

| Màn hình | Log thực thi | PASS | FAIL | N/A | Screenshot lỗi |
| --- | --- | ---: | ---: | ---: | --- |
| B1 / screen-1 | `screen-1/checklist-execution.md` | 15 | 0 | 25 | Không có |
| B2 / screen-2 | `screen-2/checklist-execution.md` | 25 | 0 | 15 | Không có |
| B4 / screen-3 | `screen-3/checklist-execution.md` | 17 | 0 | 23 | Không có |
| **Tổng** | **3 log** | **57** | **0** | **63** | **0** |

## Đối chiếu checklist chung

- Ba log hiện có **40 mục/màn hình**, tương đương 120 kết quả đã ghi.
- Checklist chung hiện đã có **41 mục** sau khi bổ sung IA01-11 (WCAG Reflow/zoom 200%). IA01-11 chưa được thực thi trên B1, B2 và B4, nên còn thiếu 3 kết quả để khớp 123 lượt kiểm tra.
- Các dòng `N/A` phản ánh widget/trạng thái không xuất hiện trong lượt quan sát. Requirement HW3 yêu cầu Passed/Failed; cần sinh viên quyết định cách xử lý đúng rubric trước khi nộp, không tự đổi `N/A` thành PASS/FAIL khi chưa có quan sát tương ứng.
- Không có mục FAIL trong ba log hiện tại; vì thế không có screenshot lỗi Task 1B cần đính kèm. Các ảnh Task 2 và Task 3 được lưu ở artefact riêng, không tính vào thống kê này.

## Liên kết artefact

- Checklist dùng chung: `../../../checklist/gui-checklist.md`.
- B1: `screen-1/checklist-execution.md`.
- B2: `screen-2/checklist-execution.md`.
- B4: `screen-3/checklist-execution.md`.
