# HW2 Consistency & Coverage Review

Ngày review: 2026-07-08  
Phạm vi: toàn bộ `Lab/HW2/23127173_HW02_AI_095`.

## 1. Kết luận nhanh

Nhìn chung bộ HW2 đã khớp với yêu cầu cốt lõi của đề: chọn 4 feature từ 4 pool, có Domain Testing, Boundary Value Analysis, Bug Report và AI Gap Analysis cho từng feature. Tổng cộng có 101 test case đã thiết kế và đã chạy, không còn test case ở trạng thái chưa chạy.

Điểm cần xử lý trước khi nộp không nằm ở số lượng test case mà nằm ở artifact phụ trợ: link GitHub Issue thật, PDF, video demo Agent Skill, commit log thật và prompt log chi tiết.

## 2. Đối chiếu với HW2-requirement.md

| Yêu cầu trong đề | Trạng thái | Nhận xét |
| --- | --- | --- |
| Mỗi sinh viên chọn 4 feature, mỗi pool một feature | Đạt | A/FR-04, B/FR-11, C/FR-18, D/FR-10 |
| Domain Testing cho mỗi feature | Đạt | Cả 4 feature đều có miền đầu vào, class/condition và test case |
| Boundary Value Analysis cho mỗi feature | Đạt | Cả 4 feature đều có boundary/class và test case |
| Giải thích cách áp dụng kỹ thuật | Đạt phần lớn | Các file Domain/BVA có phân tích miền, điều kiện, expected/actual/verdict |
| AI Gap Analysis | Đạt | Có file riêng cho A/B/C/D |
| Bug report Markdown | Đạt | Có bug report cho A/B/C/D |
| Bug report trên GitHub Issues | Chưa đủ bằng chứng | Markdown có bug, nhưng cần link/screenshot issue page thật |
| AI Audit Report | Đạt | Có nhiều entry audit theo artifact |
| AI Critique 200-300 từ | Đạt sau review | Đã cập nhật file AI Critique |
| Agent Skills | Đạt source, thiếu demo | Có skill source; link video demo còn TBD |
| Git commit log | Chưa đủ | File commit log còn placeholder |
| Main report Markdown/PDF | Markdown đạt, PDF cần export | `main-report.md` đã cập nhật; cần tạo PDF |
| README test summary | Đạt sau review | Đã cập nhật số liệu tổng |

## 3. Consistency review

| Hạng mục | Kết quả |
| --- | --- |
| Số liệu report và test case | Nhất quán ở mức tổng: A 30, B 22, C 24, D 25; tổng 101 test |
| Bug/warning giữa feature | Nhất quán: lỗi `shipping` cancel được ghi là WARNING-B-01 trong FR-11 và BUG-D-01 trong FR-10 |
| Lỗi `canceled -> delivered` | Nhất quán: BUG-C-02 ở admin order management và BUG-D-02 ở state machine |
| Feature D evidence reuse từ Feature C | Chấp nhận được vì cùng endpoint/rule FR-10, đã ghi rõ trong report |
| Ngôn ngữ tài liệu | Phần feature chính đã chuyển sang tiếng Việt có dấu; một số cụm kỹ thuật như API, status, Domain Testing, BVA được giữ lại có chủ ý |
| Main report/README/checklist | Trước review bị stale/TBD; đã cập nhật lại |
| Prompt log | Chưa nhất quán với AI Audit vì còn thiếu nhiều lượt prompt sau hai prompt đầu |

## 4. Coverage review theo feature

### Feature A - FR-04

Độ phủ tốt ở các miền token, trường hồ sơ, số điện thoại, email bị khóa và trường ngoài dự kiến như `role`. Bộ test phát hiện được hai lỗi có giá trị: regex phone trái README và API cho phép tự đổi role.

Điểm yếu: một số BVA cho `name`/`shipping_address` bị nhiễu vì phone phụ dùng theo README nhưng lại fail ở frontend. Gap này đã được ghi trong AI Gap Analysis, nên không nên xóa test, nhưng cần giải thích khi bảo vệ.

### Feature B - FR-11

Độ phủ tốt cho lịch sử rỗng, một đơn, nhiều đơn, token thiếu/sai, quyền sở hữu, chi tiết đơn, trạng thái đơn và fallback trạng thái lạ. Bộ test phát hiện đúng lỗi nghiêm trọng ở `GET /api/orders/:id`.

Điểm yếu: chưa có test tải lớn thật cho rất nhiều đơn; B-DT-14 có thể cần evidence riêng nếu muốn chặt hơn.

### Feature C - FR-18

Độ phủ mạnh ở role admin, API danh sách, transition hợp lệ/không hợp lệ, order không tồn tại, status lạ và XSS từ `shipping_address`. Bộ test tìm được 3 lỗi lớn, đều có ý nghĩa thực tế.

Điểm yếu: chưa kiểm pagination/filter vì repo không thể hiện rõ yêu cầu đó; đây không phải thiếu sót nghiêm trọng so với feature đang chọn.

### Feature D Mobile - FR-10

Độ phủ đủ cho state machine chính: luồng hợp lệ, user cancel ở `pending`/`confirmed`, user không được cancel `shipping`/`delivered`/`canceled`, ownership, trạng thái lạ và trạng thái kết thúc. Kết quả khớp với bug đã thấy ở Feature C/B.

Điểm yếu: Feature D thuộc Mobile App nhưng bằng chứng hiện chủ yếu là API/web flow đại diện. Nên ghi rõ đây là kiểm thử rule FR-10 phục vụ mobile/user flow; nếu cần điểm tối đa cho mobile UI thì nên bổ sung ảnh responsive/mobile emulator.

## 5. Việc nên làm trước khi nộp

1. Tạo GitHub Issues thật cho các bug chính và thêm link vào bug report.
2. Export main report và AI Audit sang PDF.
3. Quay video demo Agent Skill và cập nhật link.
4. Paste commit log thật.
5. Bổ sung prompt log hoặc ghi rõ AI Audit là nguồn log chi tiết chính.
