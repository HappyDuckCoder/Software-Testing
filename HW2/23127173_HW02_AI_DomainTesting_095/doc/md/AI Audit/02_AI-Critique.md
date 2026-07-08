# AI Critique - HW02

Trong HW02, AI giúp tôi đi nhanh hơn ở phần dựng khung báo cáo, tạo Agent Skills, phân chia miền đầu vào, đề xuất test case Domain Testing/BVA và viết lại bug report cho dễ đọc. Tuy nhiên AI không đúng ngay từ đầu. Lỗi lớn nhất là AI có xu hướng suy đoán theo kinh nghiệm thương mại điện tử chung, ví dụ ban đầu đề xuất các trường hồ sơ như ngày sinh, avatar, giới tính dù repo EShop không có. Nếu chỉ tin output đó thì test case sẽ lệch khỏi SUT thật.

AI cũng có bias về "happy path": thường ưu tiên luồng hợp lệ và các lỗi validation dễ thấy, trong khi các lỗi nguy hiểm hơn lại nằm ở API phụ hoặc nhánh ít dùng, như `GET /api/orders/:id` không kiểm tra chủ sở hữu, admin API không kiểm tra role, hoặc state machine cho `canceled -> delivered`. Các lỗi này chỉ lộ ra khi đọc source và chủ động tạo negative test.

Một thiếu sót khác là AI chưa luôn cô lập biến tốt. Ở Feature A, một số test BVA cho tên/địa chỉ bị nhiễu bởi lỗi validation phone, làm kết quả không còn đo đúng biến đang kiểm thử. Sau khi chạy thật, tôi phải ghi nhận gap này thay vì cố làm đẹp số liệu.

Bài học chính là AI phù hợp làm trợ lý có kỷ luật, không phải người phán quyết cuối. Muốn dùng AI tốt trong kiểm thử, tôi phải bắt AI bám requirement, bám source code, ghi rõ giả định, rồi tự chạy SUT, chụp evidence và sửa lại report theo kết quả thật.
