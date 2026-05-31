# Requirement 3 - Test case cho sản phẩm vật lý: remote điều hòa

## 1. Phạm vi và đối tượng kiểm thử

Sản phẩm được chọn là remote điều hòa Casper, model Remote U25 Series, trong ảnh minh chứng `devices/devices.jpg`. Remote có màn hình LCD và các nút chính: Power, Mode, Speed, Turbo, iSAVE, Baby Care, tăng/giảm nhiệt độ, L/R Swing, U/D Swing, Menu và OK.

Ảnh minh chứng hiện có đã đặt remote và thẻ sinh viên trong cùng khung hình. Không được dùng AI để tạo, sửa giả hoặc thay thế ảnh minh chứng này.

## 2. Khai báo thiết bị

| Mục | Giá trị |
| --- | --- |
| Sản phẩm | Remote điều khiển điều hòa |
| Hãng | Casper |
| Model | Remote U25 Series |
| Năm sản xuất | Not visible on provided device evidence |
| Serial number | Not visible on provided device evidence; nếu tìm thấy trên mặt sau/nắp pin thì che 4 ký tự giữa, ví dụ `AB12****78` |
| Ảnh minh chứng | `devices/devices.jpg` - remote + thẻ sinh viên trong cùng khung hình |
| Video minh chứng | `video-youtube-test/link-video.md` - có 5 link YouTube Shorts cho TC-01, TC-02, TC-03, TC-05 và TC-18 |

## 3. Giả định kiểm thử

- Remote có pin và màn hình LCD hiển thị được.
- Điều hòa tương ứng đang hoạt động bình thường và nhận tín hiệu hồng ngoại từ remote.
- Người test đứng ở khoảng cách gần, hướng remote về mắt nhận của điều hòa, trừ khi test case có nội dung cần che tín hiệu hoặc thay đổi khoảng cách.
- Actual result và defect chỉ được kết luận sau khi sinh viên chạy trên thiết bị thật. Bảng dưới gồm 15 test case ban đầu và 3 edge case bổ sung do sinh viên tự tìm ra sau khi test thiết bị.

## 4. Bộ test case

| TC ID | Objective | Input | Steps | Expected | Actual | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| TC-01 | Kiểm tra bật/tắt cơ bản bằng nút Power. | Nút Power màu đỏ. | 1. Đặt remote hướng về điều hòa. 2. Nhấn Power để bật. 3. Đợi điều hòa phản hồi. 4. Nhấn Power lần nữa để tắt. | Điều hòa bật/tắt tương ứng; remote hiển thị trạng thái power rõ ràng; có tiếng beep hoặc phản hồi từ điều hòa. | Đúng như Expected. | Pass |
| TC-02 | Kiểm tra chuyển chế độ làm mát. | Nút Mode đến chế độ Cool. | 1. Bật điều hòa. 2. Nhấn Mode đến khi LCD hiển thị `COOL`. 3. Đợi 10-20 giây. | LCD hiển thị Cool; điều hòa chuyển sang chế độ làm mát; cánh gió/quạt phản hồi ổn định. | Đúng như Expected. | Pass |
| TC-03 | Kiểm tra tăng/giảm nhiệt độ trong ngưỡng hợp lệ. | Nút `+` và `-`. | 1. Bật Cool. 2. Nhấn `+` nhiều lần đến giới hạn trên. 3. Nhấn `-` nhiều lần đến giới hạn dưới. | Nhiệt độ thay đổi từng bước, không vượt ngưỡng hỗ trợ của máy; LCD không bị treo hoặc hiển thị ký tự lạ. | Đúng như Expected. | Pass |
| TC-04 | Kiểm tra nút Speed thay đổi tốc độ quạt. | Nút Speed. | 1. Bật Cool. 2. Nhấn Speed từng lần. 3. Quan sát icon/tốc độ quạt. | Mỗi lần nhấn chuyển sang tốc độ khác theo vòng lặp; điều hòa phản hồi đúng. | Ở quạt silent thì nghe tiếng nhỏ, ở turbo thì nghe tiếng mạnh. | Pass |
| TC-05 | Kiểm tra nút Turbo. | Nút Turbo. | 1. Bật Cool. 2. Nhấn Turbo. 3. Đợi 10-20 giây. 4. Nhấn Turbo lần nữa nếu có chế độ tắt. | Chế độ Turbo được bật/tắt rõ ràng; máy tăng công suất/quạt theo thiết kế; LCD hiển thị icon/chữ tương ứng. | Đúng như Expected. | Pass |
| TC-06 | Kiểm tra L/R Swing. | Nút L/R Swing. | 1. Bật điều hòa. 2. Nhấn L/R Swing. 3. Quan sát cánh đảo gió trái/phải. 4. Nhấn lại để dừng/chuyển vị trí. | Cánh gió trái/phải di chuyển hoặc đổi trạng thái theo lệnh; không bị kẹt. | Đúng như Expected. | Pass |
| TC-07 | Kiểm tra U/D Swing. | Nút U/D Swing. | 1. Bật điều hòa. 2. Nhấn U/D Swing. 3. Quan sát cánh đảo gió lên/xuống. 4. Nhấn lại để dừng/chuyển vị trí. | Cánh gió lên/xuống di chuyển hoặc đổi trạng thái theo lệnh; không bị kẹt. | Đúng như Expected. | Pass |
| TC-08 | Kiểm tra iSAVE có lưu/khôi phục cấu hình. | Nhiệt độ, Mode, Speed, nút iSAVE. | 1. Đặt Cool, nhiệt độ X, speed Y. 2. Nhấn iSAVE. 3. Đổi cấu hình sang giá trị khác. 4. Nhấn iSAVE lại. | Remote/điều hòa khôi phục cấu hình đã lưu hoặc kích hoạt chế độ tiết kiệm đúng theo manual. | iSAVE chỉ lưu trạng thái đầu tiên, bấm iSAVE thì không lưu trạng thái gần nhất. | Fail |
| TC-09 | Kiểm tra Baby Care không xung đột với Turbo. | Nút Baby Care và Turbo. | 1. Bật Cool. 2. Nhấn Baby Care. 3. Nhấn Turbo. 4. Quan sát LCD và phản hồi máy. | Hệ thống xử lý ưu tiên rõ ràng: hoặc không cho bật đồng thời, hoặc tự tắt chế độ xung đột; không để LCD hiển thị trạng thái mâu thuẫn. | Đúng như Expected. | Pass |
| TC-10 | Kiểm tra Menu/OK điều hướng tính năng phụ. | Nút Menu và OK. | 1. Nhấn Menu. 2. Dùng phím điều hướng nếu có. 3. Nhấn OK. 4. Đợi timeout. | Menu hiển thị/đổi mục rõ ràng; OK xác nhận đúng; nếu không thao tác thì menu thoát an toàn. | Đúng như Expected. | Pass |
| TC-11 | Kiểm tra bấm nhanh Power liên tiếp. | Power x 5 trong 3 giây. | 1. Hướng remote về điều hòa. 2. Nhấn Power liên tiếp 5 lần nhanh. 3. Quan sát LCD và điều hòa. | Trạng thái cuối cùng phải nhất quán với số lần nhấn; remote không treo; điều hòa không vào trạng thái nửa bật/nửa tắt. | Đúng như Expected. | Pass |
| TC-12 | Kiểm tra bấm giữ `+`/`-` quá giới hạn. | Giữ `+` 5 giây, giữ `-` 5 giây. | 1. Bật Cool. 2. Giữ `+` đến giới hạn trên. 3. Giữ tiếp 5 giây. 4. Lặp lại với `-`. | Remote clamp giá trị tại giới hạn, không tràn số, không nhảy về giá trị bất thường. | Đúng như Expected. | Pass |
| TC-13 | Kiểm tra gửi lệnh khi bị che tín hiệu hồng ngoại. | Tay/giấy che đầu remote. | 1. Bật điều hòa. 2. Che đầu phát IR của remote. 3. Nhấn Mode hoặc Speed. 4. Bỏ che và nhấn lại. | Khi bị che, điều hòa không đổi trạng thái nhưng remote có thể vẫn đổi LCD; khi bỏ che, lệnh mới được nhận bình thường. | Dù che đầu hồng ngoại, vẫn có thể thao tác bình thường. | Fail |
| TC-14 | Kiểm tra khoảng cách/góc nghiêng lớn. | Khoảng cách 5-7m, góc lệch. | 1. Đứng cách điều hòa 5-7m. 2. Hướng remote lệch trái/phải. 3. Nhấn Power/Mode. 4. Lặp lại khi hướng thẳng. | Lệnh chỉ ổn định khi nằm trong góc/khoảng cách hỗ trợ; nếu thất bại phải thất bại rõ ràng, không gây đổi trạng thái bất ngờ. | Dù góc nghiêng nào thì vẫn bấm bình thường. | Fail |
| TC-15 | Kiểm tra LCD mờ/low battery. | Pin yếu hoặc pin gần hết. | 1. Quan sát LCD với pin hiện tại. 2. Nếu có pin yếu, thử gửi Power/Mode. 3. Thay pin mới và lặp lại. | Remote cần có dấu hiệu pin yếu rõ; lệnh không chập chờn theo cách gây nhầm lẫn; thay pin mới khôi phục ổn định. | Vì pin vẫn đầy nên không thể test. | Pending |
| TC-16 | Edge case: điều hòa chỉ được bật khi bấm nút nguồn. | Điều hòa đang tắt; nhấn Turbo, Mode, Speed. | 1. Đảm bảo điều hòa đang tắt. 2. Không bấm Power. 3. Nhấn lần lượt Turbo, Mode, Speed. 4. Quan sát điều hòa và LCD remote. | Điều hòa không được bật khi người dùng chỉ bấm các nút tính năng; chỉ nút Power mới bật điều hòa. | Bấm các nút tính năng như Turbo, Mode, Speed thì điều hòa vẫn bật. | Fail |
| TC-17 | Edge case: chuyển từ Cool sang Dry có tự điều chỉnh quạt không. | Đang ở Cool; bấm Mode sang Dry. | 1. Bật điều hòa ở chế độ Cool. 2. Đặt tốc độ quạt khác mức yếu nhất. 3. Bấm Mode để chuyển sang Dry. 4. Quan sát tốc độ quạt sau khi đổi mode. | Khi chuyển sang Dry, điều hòa tự điều chỉnh tốc độ quạt về mức phù hợp cho hút ẩm. | Quạt tự động về mức yếu nhất. | Pass |
| TC-18 | Edge case: Baby Care phải khóa cấu hình cố định. | Đang bật Baby Care; nhấn `+`, `-`, L/R Swing, U/D Swing. | 1. Bật điều hòa. 2. Nhấn Baby Care. 3. Thử tăng/giảm nhiệt độ. 4. Thử đổi chiều gió. 5. Quan sát LCD và điều hòa. | Khi Baby Care bật, các cấu hình bảo vệ/thoải mái cho trẻ em phải được cố định; không cho thay đổi nhiệt độ hoặc hướng gió nếu chế độ quy định như vậy. | Không thể tăng/giảm nhiệt độ hay đổi chiều gió khi Baby Care đang bật. | Pass |

## 5. Test case đã quay video

| Video | Test case | Lý do chọn |
| --- | --- | --- |
| V1 | TC-01 | [YouTube Shorts](https://youtube.com/shorts/sGEjxL-i4Ts?feature=share) - chứng minh remote gửi lệnh Power thật. |
| V2 | TC-02 | [YouTube Shorts](https://youtube.com/shorts/9te5ZgJJPrM?feature=share) - chứng minh chế độ Cool trên LCD và điều hòa. |
| V3 | TC-03 | [YouTube Shorts](https://youtube.com/shorts/CZnAIcFSs0g?feature=share) - chứng minh nhiệt độ tăng/giảm trong ngưỡng. |
| V4 | TC-05 | [YouTube Shorts](https://youtube.com/shorts/6q_QbNK5G1E?feature=share) - chứng minh nút Turbo. |
| V5 | TC-18 | [YouTube Shorts](https://youtube.com/shorts/wzYjL1a-N4A) - chứng minh Baby Care khóa cấu hình. |

## 6. Defect log từ các failed test case

Defect log dưới đây được viết lại dựa trên các test case có verdict `Fail`: TC-08, TC-13, TC-14 và TC-16. Các test case `Pass` hoặc `Pending` không được tính là defect để tránh ghi lỗi không có bằng chứng.

| Defect ID | Liên quan TC | Summary | Steps tái hiện | Expected | Actual | Severity | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-01 | TC-08 | iSAVE không lưu/cập nhật cấu hình gần nhất. | 1. Đặt một cấu hình Cool gồm nhiệt độ/tốc độ quạt. 2. Bấm iSAVE. 3. Đổi sang cấu hình khác. 4. Bấm iSAVE lại để kiểm tra cấu hình được lưu/khôi phục. | iSAVE phải lưu hoặc khôi phục cấu hình theo lần cấu hình người dùng mong muốn. | iSAVE chỉ lưu trạng thái đầu tiên; bấm iSAVE không lưu trạng thái gần nhất. | Medium | Open |
| D-02 | TC-13 | Remote vẫn điều khiển được khi đầu phát hồng ngoại bị che. | 1. Bật điều hòa. 2. Che đầu phát IR của remote bằng tay/giấy. 3. Nhấn Mode hoặc Speed. 4. Quan sát điều hòa. | Khi đầu phát IR bị che, điều hòa không nên nhận lệnh; sau khi bỏ che thì lệnh mới được nhận bình thường. | Dù che đầu hồng ngoại, vẫn có thể thao tác bình thường. | Low | Open |
| D-03 | TC-14 | Điều hòa vẫn nhận lệnh ở mọi góc nghiêng đã thử, không thể hiện giới hạn góc/khoảng cách. | 1. Đứng cách điều hòa 5-7m. 2. Hướng remote lệch trái/phải. 3. Nhấn Power/Mode. 4. Lặp lại với nhiều góc nghiêng. | Lệnh chỉ ổn định trong góc/khoảng cách hỗ trợ; ngoài vùng hỗ trợ thì phải thất bại rõ ràng. | Dù góc nghiêng nào trong lần test thì vẫn bấm bình thường. | Low | Open |
| D-04 | TC-16 | Các nút tính năng có thể bật điều hòa khi máy đang tắt. | 1. Đảm bảo điều hòa đang tắt. 2. Không bấm Power. 3. Nhấn Turbo, Mode, Speed. 4. Quan sát điều hòa. | Điều hòa chỉ được bật khi người dùng bấm nút Power. | Bấm các nút tính năng như Turbo, Mode, Speed thì điều hòa vẫn bật. | High | Open |

## 7. Edge cases AI không tìm được

| Edge case | Test case | Vì sao AI dễ bỏ sót |
| --- | --- | --- |
| Điều hòa chỉ được bật khi bấm nút nguồn | TC-16 | AI thường xem Turbo/Mode/Speed là nút tính năng sau khi máy đã bật, nên bỏ sót trạng thái tiền điều kiện "máy đang tắt" và việc nút tính năng có thể kích hoạt máy ngoài ý muốn. |
| Chuyển từ Cool sang Dry có tự điều chỉnh quạt không | TC-17 | AI hay chỉ kiểm tra LCD có đổi mode, nhưng không kiểm tra tác động phụ của mode Dry lên fan speed. |
| Baby Care phải khóa cấu hình cố định | TC-18 | AI thường chỉ kiểm tra nút Baby Care bật/tắt, bỏ qua ràng buộc an toàn/comfort: khi Baby Care đang bật thì người dùng không được thay đổi nhiệt độ hoặc hướng gió. |

Sinh viên đã bổ sung screenshot đoạn chat với AI trong `screenshot-AI/screenshot-chat-ai.png` để minh chứng AI không sinh ra các edge case trên trong prompt baseline. Screenshot này là minh chứng thật từ phiên chat AI, không được tạo bằng AI.

## 8. Đối chiếu requirement và policy

| Hạng mục | Trạng thái |
| --- | --- |
| Chọn một thiết bị gia dụng cụ thể | Đạt: remote điều hòa Casper Remote U25 Series. |
| Ảnh thiết bị + thẻ sinh viên | Đạt: `devices/devices.jpg`. |
| Hãng/model/năm/serial che 4 ký tự giữa | Đạt một phần: đã có hãng/model; năm sản xuất và serial không hiển thị trên ảnh minh chứng. |
| 15 test case có Objective/Input/Steps/Expected/Actual/Verdict | Đạt: có 18 test case, bao gồm 15 test case ban đầu và 3 edge case bổ sung. |
| >= 5 test case có video <= 60 giây | Đạt: đã có 5 link trong `video-youtube-test/link-video.md` cho TC-01, TC-02, TC-03, TC-05 và TC-18. |
| >= 3 edge case AI không tìm được | Đạt về nội dung: TC-16, TC-17, TC-18 do sinh viên tự tìm ra; có screenshot chat minh chứng. |
| >= 5 defect từ thiết bị | Chưa đạt nếu tính đúng rubric >= 5: hiện có 4 confirmed defects từ TC-08, TC-13, TC-14 và TC-16. |
| Không dùng AI tạo minh chứng cấm | Đạt: tài liệu này không tạo ảnh/video/screenshot giả; các minh chứng vật lý do sinh viên tự tạo. |

## 9. GitHub Issues cho bug screenshots

Theo requirement, HW01 không dùng FIT Mantis. Defect cần được log bằng GitHub Issues trong repo cá nhân và cần có screenshot trang Issues hiện GitHub username.

Thư mục `github-issues/` đã có các draft Markdown để sinh viên copy lên GitHub Issues:

| Defect ID | Draft local | Trạng thái |
| --- | --- | --- |
| D-01 | `github-issues/D-01-isave-not-saving-latest-config.md` | Đã tạo GitHub Issue `#1`; screenshot `github-issues/screenshot-defect/D01.png` |
| D-02 | `github-issues/D-02-remote-works-when-ir-blocked.md` | Đã tạo GitHub Issue `#2`; screenshot `github-issues/screenshot-defect/D02.png` |
| D-03 | `github-issues/D-03-commands-work-at-all-tested-angles.md` | Đã tạo GitHub Issue `#3`; screenshot `github-issues/screenshot-defect/D03.png` |
| D-04 | `github-issues/D-04-feature-buttons-power-on-ac.md` | Đã tạo GitHub Issue `#4`; screenshot `github-issues/screenshot-defect/D04.png` |

File `github-issues/github-issues-links.md` đã ghi link issue thật trong repo `HappyDuckCoder/Software-Testing`. Screenshot danh sách issue nằm tại `github-issues/screenshot-defect/list-defect.png` và hiển thị GitHub username `HappyDuckCoder`.
