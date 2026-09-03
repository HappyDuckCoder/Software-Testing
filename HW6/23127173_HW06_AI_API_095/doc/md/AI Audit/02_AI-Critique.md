# AI Critique (276 từ)

AI giúp nhanh phần “khung”: dịch đề, chọn API, gom collection setup và gợi ý hàng chục test case theo domain/state/security. Tuy nhiên hai lệch hướng đáng chú ý. Thứ nhất, AI dễ thiên về hành vi code thay vì đặc tả — ví dụ suy status từ comment trong `server.js` thay vì FR-10 trong README. Lần rà soát này đã chuyển oracle sang `api_specification.md` và FR/SEC, nên ba bug compliance (role, hủy shipping, user gọi admin API) mới có cơ sở nộp bài rõ ràng.

Thứ hai, AI hay gom “đủ số lượng” bằng observation chỉ kiểm không lỗi 5xx, trong khi đề yêu cầu từng case có expected status/schema. Ma trận 120 dòng tiếng Việt và map thực thi theo spec là bước cần thiết; chưa thay việc gắn assertion Postman cho từng ID.

Về khoảng trống AI: 15 test sinh viên bổ sung (body rỗng, emoji, retry mạng, path Unicode, token whitespace, chuyển tiếp trùng…) là những góc spec không cấm nhưng AI ít liệt kê, vì prompt thường tập trung happy path và enum cơ bản. Sinh viên duyệt hết 105 case AI nên không cần giữ cột verdict — tiết kiệm thời gian nhưng vẫn phải hiểu từng dòng trước khi chạy.

Bài học hợp tác: luôn mở README FR/SEC trước khi khóa oracle; tách “chạy được” và “đúng spec”; không tin số assertion pass của observation. AI phù hợp sinh nháp và checklist; sinh viên giữ quyền quyết định TC bổ sung, evidence và Issue thật.
