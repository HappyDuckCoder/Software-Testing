# Báo cáo Feature D Mobile - FR-10 Máy trạng thái đơn hàng

## 1. Thông tin feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool D - Mobile App |
| Feature ID | FR-10 |
| Feature | Máy trạng thái đơn hàng |
| Actor chính | User/mobile user và admin |
| Hệ thống kiểm thử | EShop backend API, user order history flow và admin orders flow |
| Trạng thái | Đã chạy toàn bộ test case hiện có |

Feature D kiểm tra luật trạng thái đơn hàng của EShop. Với user/mobile, trọng tâm là quyền hủy đơn. Với admin, trọng tâm là chuyển trạng thái đơn theo state machine. Rule đúng cần giữ là:

```text
pending -> confirmed -> shipping -> delivered
pending -> canceled
confirmed -> canceled
```

Trong đó `delivered` và `canceled` là trạng thái kết thúc, không được chuyển tiếp nữa.

## 2. Phạm vi kiểm thử

| Thành phần | Vai trò trong kiểm thử |
| --- | --- |
| `Eshop/backend/server.js` | API checkout, user cancel và admin update status |
| `Eshop/frontend-web/src/pages/Profile.jsx` | User xem/hủy đơn từ lịch sử đơn hàng |
| `Eshop/frontend-admin/src/App.jsx` | Admin chuyển trạng thái đơn |
| `Eshop/README.md` | Đối chiếu FR-10 và rule hủy đơn |

Bộ test có dùng lại một số ảnh từ Feature C vì Feature C cũng kiểm tra cùng endpoint admin transition của FR-10. Việc dùng lại này hợp lý khi cùng dữ liệu, cùng API và cùng rule.

## 3. Tóm tắt kết quả thực thi

| Nhóm test | Tổng số | Pass | Fail | Warning | Chưa chạy |
| --- | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 14 | 12 | 2 | 0 | 0 |
| Boundary Value Analysis | 11 | 9 | 2 | 0 | 0 |
| **Tổng cộng** | **25** | **21** | **4** | **0** | **0** |

## 4. Kết quả đáng chú ý

| Test ID | Verdict | Nhận xét |
| --- | --- | --- |
| D-DT-01 / D-BVA-01 | Pass | Đơn mới sau checkout bắt đầu đúng ở `pending`. |
| D-DT-02 đến D-DT-04 | Pass | Chuỗi admin hợp lệ `pending -> confirmed -> shipping -> delivered` chạy đúng. |
| D-DT-05, D-DT-06 | Pass | User hủy được đơn ở `pending` và `confirmed`, đúng rule. |
| D-DT-07 / D-BVA-07 | Fail | User vẫn hủy được đơn `shipping`, trong khi FR-10 chỉ cho hủy tới `confirmed`. |
| D-DT-08, D-DT-09 | Pass | User không hủy được đơn `delivered` hoặc hủy lại đơn `canceled`. |
| D-DT-10 / D-BVA-10 | Pass | User không hủy được đơn của người khác. |
| D-DT-11 | Pass | Admin không được nhảy thẳng `pending -> shipping`. |
| D-DT-12 / D-BVA-04 | Pass | `delivered -> canceled` bị chặn đúng. |
| D-DT-13 / D-BVA-08 | Fail | Admin vẫn chuyển được `canceled -> delivered`, sai rule trạng thái kết thúc. |
| D-DT-14 / D-BVA-11 | Pass | Trạng thái lạ `returned` bị từ chối. |

## 5. Bug được lập từ kết quả test

| Bug ID | Test liên quan | Mức độ | Tóm tắt |
| --- | --- | --- | --- |
| BUG-D-01 | D-DT-07, D-BVA-07 | Major | User có thể hủy đơn đang `shipping`. |
| BUG-D-02 | D-DT-13, D-BVA-08 | Major | Admin có thể chuyển đơn `canceled` sang `delivered`. |

Chi tiết từng bug nằm trong `bug-report/bug-report.md`.

## 6. Đánh giá mức đạt của Feature D

Feature D đạt nhiều phần cốt lõi: đơn mới tạo đúng trạng thái, các bước admin hợp lệ hoạt động, user hủy được ở hai trạng thái được phép, hệ thống chặn được một số transition sai như `pending -> shipping`, `delivered -> canceled`, trạng thái lạ và hủy đơn của người khác.

Tuy nhiên feature chưa đạt hoàn toàn vì còn hai lỗi state machine. Lỗi thứ nhất nằm ở user cancel: hệ thống cho hủy đơn `shipping`. Lỗi thứ hai nằm ở admin transition: hệ thống cho chuyển `canceled -> delivered`. Hai lỗi này đều làm trạng thái đơn hàng không còn đáng tin, nên cần sửa trước khi coi FR-10 là ổn.

## 7. Liên kết artifact

| Artifact | Đường dẫn |
| --- | --- |
| Domain Testing | `domain-testing/domain-testing.md` |
| Boundary Value Analysis | `boundary-value-analysis/boundary-value-analysis.md` |
| Bug Report | `bug-report/bug-report.md` |
| AI Gap Analysis | `ai-gap-analysis/ai-gap-analysis.md` |
