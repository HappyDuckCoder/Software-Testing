# Tổng kết thực thi GUI Checklist — Scenario B

## Phạm vi

Ba log dưới đây dùng cùng Scenario B và cùng SUT EMS: B1 Dashboard, B2 Event detail/registration, B4 Profile/My Registrations.

| Màn hình | Log thực thi | PASS | FAIL | N/A | Screenshot lỗi |
| --- | --- | ---: | ---: | ---: | --- |
| B1 / screen-1 | `screen-1/checklist-execution.md` | 39 | 2 | 0 | `evidence/automated-gui/B1-reflow-320-20260804.png` |
| B2 / screen-2 | `screen-2/checklist-execution.md` | 39 | 2 | 0 | `evidence/automated-gui/B2-reflow-320-20260804.png` |
| B4 / screen-3 | `screen-3/checklist-execution.md` | 39 | 2 | 0 | `evidence/automated-gui/B4-reflow-320-20260804.png` |
| **Tổng** | **3 log** | **117** | **6** | **0** | **3 ảnh** |

## Đối chiếu checklist chung

- Ba log đã có **41 mục/màn hình**, tương đương 123 kết quả Passed/Failed.
- Những tiêu chí có điều kiện được ghi `[PASS]` cùng note khi widget/trạng thái không xuất hiện; đây là kết quả quan sát điều kiện không kích hoạt, không phải chuyển đổi hàng loạt không có căn cứ.
- Retest reflow 320×720 trên Chrome phát hiện cuộn ngang ở cả ba màn hình: B1/B2 `scrollWidth` 342 px, B4 458 px, trong khi `clientWidth` 305 px. Mỗi màn hình có hai FAIL cùng một nguyên nhân (IA01-05 và IA01-11) và dùng chung screenshot tương ứng.
- Finding F-06 theo dõi lỗi reflow chung; ảnh Task 2 và Task 3 được lưu ở artefact riêng, không tính vào thống kê này.

## Liên kết artefact

- Checklist dùng chung: `../../../checklist/gui-checklist.md`.
- B1: `screen-1/checklist-execution.md`.
- B2: `screen-2/checklist-execution.md`.
- B4: `screen-3/checklist-execution.md`.
