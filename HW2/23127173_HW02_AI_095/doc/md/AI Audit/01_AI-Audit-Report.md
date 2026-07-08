# AI Audit Report - HW02

## 1. Thong tin sinh vien

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Tran Hai Duc |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Ma bai tap | HW02-AI |
| Ten bai tap | Domain Testing on EShop |
| Ngay cap nhat | 2026-07-08 |
| Cong cu AI da dung | Codex / ChatGPT |
| Co dung AI | Co |

## 2. Bang Audit - 1 hang / artifact

| (1) Prompt + Cong cu | (2) Output AI | (3) Verdict | (4) Ly do / doi chieu | (5) Ban sinh vien sua |
| --- | --- | --- | --- | --- |
| Tool: Codex / ChatGPT. Thoi gian: 2026-06-27 19:29:25 +07:00. Prompt: "toi muon ban lam 1 roadmap de hoan thanh HW nay 1 cach 10 diem vao Lab\\HW2\\23127173_HW02_AI_095\\roadmap.md ... AI template ban xem trong Lab\\AI Templates\\md" | Tao roadmap hoan thanh HW02, tao cau truc thu muc/file tuong ung voi HW1, tao README/checklist/main-report skeleton, prompt log va AI Audit entry dau tien. | INCOMPLETE | AI chi ho tro lap ke hoach, tao khung tai lieu va anh xa yeu cau. Theo yeu cau HW02, diem chinh den tu viec sinh vien tu chon feature, ap dung Domain Testing/BVA, chay SUT, cap nhat Actual/Verdict, tao GitHub Issues that, quay demo Agent Skill va export PDF. | Sinh vien can chot 4 feature voi nhom, chay EShop, viet va thuc thi test case that, bo sung bug evidence, cap nhat audit cho moi prompt sau, hoan thien report/PDF va zip nop bai. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-06-27 19:43:38 +07:00. Prompt: "Lab\\HW2\\23127173_HW02_AI_095\\agent-skills ... ban tim cho toi cac skills de them vo agents-skills theo chuan yeu cau ... them vao AI-audit" | Tao bo 5 Agent Skills cho HW02: `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, `ai-gap-analysis-reviewer`, `github-bug-report-writer`; moi skill co `SKILL.md` va `agents/openai.yaml`, kem `skill-catalog.md` va goi y demo flow. | INCOMPLETE | Cac skill dap ung phan chuan artifact va co the dung de demo quy trinh AI-first. Tuy nhien, diem Agent Skills chi chac khi sinh vien that su dung skill tren mot feature, quay video demo end-to-end, va chung minh output duoc review/chinh sua bang execution evidence. | Sinh vien can tu chay demo, ghi link video vao `agent-skills/demo-videos/link-video.md`, cap nhat report chinh va dung it nhat mot skill de tao artifact that cho feature da chon. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "hay su dung cac agent skill o thu muc Lab\\HW2\\23127173_HW02_AI_095\\agent-skills de sinh test case cho feature A o Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-A ... cap nhat AI audit ... feature A cua toi la Pool A: FR-04: Personal profile management" | Su dung cac skill `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, va `ai-gap-analysis-reviewer` de tao Feature A brief, Domain Testing test cases, Boundary Value Analysis test cases, AI Gap Analysis, va Bug Report placeholder cho FR-04 Personal profile management. | INCOMPLETE | Output thoa yeu cau thiet ke test case theo Domain Testing/BVA va danh dau cac rule chua co evidence la assumption. Tuy nhien, chua duoc xem la hoan tat vi chua chay EShop SUT, chua co Actual/Verdict, screenshot, bug evidence, hoac GitHub Issue. | Sinh vien can chay tung test case tren EShop, xac nhan field/rule that, cap nhat boundary that, dien Actual/Verdict/Evidence, tao bug report/GitHub Issue neu co loi, va cap nhat lai AI Gap Analysis dua tren ket qua that. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "ban can sinh test case dua tren repo Eshop, sua lai" | Doc repo `Eshop`, gom `README.md`, `api_specification.md`, `backend/server.js`, `backend/database.js`, `frontend-web/src/pages/Profile.jsx`, va viet lai Feature A test cases theo source that. Removed generic DOB/avatar/gender tests; added source-backed tests for `name`, `phone`, `shipping_address`, token, disabled email, and role tampering. | INCOMPLETE | Output nay source-grounded hon ban truoc va phat hien duoc 2 bug source-level: phone regex frontend trai README, va backend cho phep cap nhat `role`. Van INCOMPLETE vi bug/test cases can duoc chay tren SUT, chup screenshot/log API, cap nhat Actual/Verdict, va tao GitHub Issue that. | Sinh vien can execute cac test case tren frontend/API, xac nhan BUG-A-01 va BUG-A-02 bang evidence that, cap nhat GitHub Issue link va ket qua final. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "lam tuong tu cho feature B, C, D ... Pool B FR-11 Order history view (user), Pool C FR-18 Order management (admin), Pool D FR-10 Order state machine; nho su dung agent skills va bo sung ai audit" | Su dung cac skill `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, va `ai-gap-analysis-reviewer`; doc repo `Eshop` va tao source-based artifacts cho Feature B/C/D, bao gom feature report, Domain Testing, BVA, AI Gap Analysis, va bug report. | INCOMPLETE | Output dua tren source EShop va phat hien cac bug source-level: public order detail route, user cancel shipping order, admin API thieu role check, unsafe shipping address render, va canceled -> delivered transition. Van INCOMPLETE vi chua chay SUT/mobile, chua co Actual/Verdict, screenshot/log API, hoac GitHub Issue that. | Sinh vien can chay test cases tren backend/frontend/mobile flow, xac nhan bug bang evidence, cap nhat Actual/Verdict/Evidence va dien GitHub Issue link. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "sua lai cac ket qua trong Lab\\HW2\\23127173_HW02_AI_095\\requirement thanh tieng viet co dau; doi chung lai voi Lab\\HW2\\requirement\\HW2-requirement.md xem chuan chua; bo sung ai audit" | Doi chieu HW2 requirement: moi feature can Domain Testing, BVA, AI Gap Analysis, Bug Report; 4 feature gom Pool A/B/C/D. Viet hoa cac heading, cot bang, trang thai thuc thi, mo ta feature/rui ro/test evidence trong thu muc `requirement`, giu nguyen ma API/status/test ID de de trace khi chay SUT. | INCOMPLETE | Dinh dang deliverable phu hop cac requirement chinh, nhung van INCOMPLETE vi test case chua duoc thuc thi tren SUT, chua co screenshot/log API/GitHub Issue that, va mot so ten ky thuat nhu Domain Testing/BVA/API/status code duoc giu nguyen co chu dich. | Sinh vien can doc lai ban tieng Viet, chay SUT, cap nhat Actual/Verdict/Evidence, lap GitHub Issue that va export report/PDF truoc khi nop. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "phan test case bo sung them 1 cot thoa man cac dieu kien nao dua tren cac dieu kien cac mien ... bo sung hoac sua trong skill, sinh test case sao cho toi uu ... dau vao cua test case phai co du cac gia tri o Mien dau vao" | Cap nhat `domain-testing-designer` va `boundary-value-analysis-designer` de yeu cau test case toi uu: valid case gom nhieu valid class, negative case co mot invalid class khi co the, moi test case co cot trace class/condition va dau vao day du bien mien dau vao. Cap nhat cac bang Domain/BVA trong Feature A/B/C/D them cot `Dieu kien/class thoa man` hoac `Dieu kien/bien thoa man`, dong thoi mo rong o `Dau vao`. | INCOMPLETE | Output da tang traceability giua test case va equivalence class/boundary/constraint, phu hop yeu cau toi uu hoa test design. Van INCOMPLETE vi day la thiet ke test; Actual/Verdict/Evidence can duoc cap nhat sau khi chay SUT. | Sinh vien can chay lai cac test case da toi uu, xac nhan coverage thuc te, cap nhat bang ket qua va evidence. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "toi vua sua feature-A boundary-value-analysis va domain-testing; hay hoan thanh feature-A-report; domain-testing va boundary-value-analysis tieng anh va tieng viet lan lon qua, chuyen het ve tieng Viet de hieu; sua ngon ngu tuong tu cho feature B, C, D; cap nhat ai audit" | Hoan thien `feature-A-report.md` theo ket qua thuc thi Feature A: 30 test da chay, 10 Pass, 14 Fail, 6 Warning, 0 chua chay, 2 nhom bug chinh. Chuan hoa ngon ngu tieng Viet trong cac file Domain Testing/BVA va report cua Feature A/B/C/D, giu nguyen endpoint, status enum va test ID de truy vet khi chay SUT. | INCOMPLETE | Output giup tai lieu de doc hon va dong bo voi ket qua test thuc te cua Feature A. Van INCOMPLETE vi cac feature B/C/D chua co Actual/Verdict/Evidence thuc thi that, va sinh vien can review lai cac bang sau khi chay SUT. | Sinh vien can doc lai ban tieng Viet, bo sung evidence that cho B/C/D, tao/cap nhat bug report va GitHub Issue neu loi duoc xac nhan. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-A\\bug-report\\bug-report.md van bi lan lon tieng anh tieng viet, toi can ban report bug day du va chinh xac hon; lam tuong tu cho B, C, D; cap nhat AI audit" | Viet lai day du bug report cho Feature A/B/C/D bang tieng Viet ro rang, gom tong quan loi, moi truong, buoc tai hien, ket qua mong doi/thuc te, tac dong, nguyen nhan ma nguon, test lien quan va huong sua. Feature A ghi nhan loi da tai hien tu ket qua test; Feature B/C/D danh dau loi xac dinh tu ma nguon va cho thuc thi xac nhan. | INCOMPLETE | Bug report da day du va source-grounded hon, nhung cac issue link GitHub va bang chung thuc thi cho B/C/D van chua duoc bo sung. | Sinh vien can tao GitHub Issue that, dan link vao bang bug report, chay lai test case lien quan va cap nhat bang chung screenshot/log API. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "dua vao luong test case da viet hay sua lai feature-A/ai-gap-analysis bang tieng Viet; ban tu danh gia xem ban da sinh test case tot chua; bo sung ai audit" | Viet lai `feature-A/ai-gap-analysis/ai-gap-analysis.md` bang tieng Viet, dua tren 30 test da chay: 18 Domain Testing, 12 BVA, 10 Pass, 14 Fail, 6 Warning, 2 bug chinh. Bo sung tu danh gia chat luong test case, diem tot, diem chua tot, gap AI ban dau va huong cai thien. | INCOMPLETE | Phan phan tich da phan anh thuc te hon va khong to hong output AI. Van INCOMPLETE vi mot so cai thien de xuat nhu giam trung lap, co lap bien BVA va tao GitHub Issue that chua duoc thuc hien. | Sinh vien can review lai danh gia, quyet dinh co toi uu them test case hay khong, tao issue that va cap nhat report cuoi. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi vừa hoàn thành test các test ở featureB ... hãy sửa lại bug-report và feature-B-report ... sau đó tự review lại và viết ai-gap-analysis ... cập nhật AI audit" | Viết lại `feature-B-report.md`, `feature-B/bug-report/bug-report.md` và `feature-B/ai-gap-analysis/ai-gap-analysis.md` bằng tiếng Việt có dấu dựa trên kết quả đã chạy: 22 test, 18 Pass, 2 Fail, 2 Warning. Cập nhật bug Feature B từ trạng thái dự đoán sang trạng thái đã tái hiện/đối chiếu: lộ chi tiết đơn hàng qua `GET /api/orders/:id` và hiển thị nút hủy cho đơn `shipping`. | INCOMPLETE | Output đã dựa trên kết quả test và bằng chứng ảnh trong Feature B, nhưng vẫn chưa có link GitHub Issue thật cho các bug. Một vài bằng chứng như B-DT-14 còn dùng ảnh trước/sau gián tiếp thay vì log riêng cho thao tác. | Sinh viên cần tạo GitHub Issue thật nếu rubric yêu cầu, gắn link vào bug report, kiểm tra lại bằng chứng B-DT-14 nếu muốn chặt hơn, và đối chiếu final report trước khi nộp. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "thay vì để là BUG-B-02, thì đổi thành WARNING-B-01 vì lỗi không phải do FR-11 mà do FR-10, bổ sung ai audit" | Cập nhật phân loại trong Feature B: đổi `BUG-B-02` thành `WARNING-B-01`, ghi rõ đây là warning liên feature FR-10 được phát hiện khi test màn hình FR-11. Cập nhật `bug-report.md`, `feature-B-report.md`, `ai-gap-analysis.md` và AI Audit. | INCOMPLETE | Phân loại đã chính xác hơn về trách nhiệm requirement: lỗi bảo mật `BUG-B-01` thuộc FR-11, còn thao tác hủy `shipping` là vấn đề state machine của FR-10. Vẫn INCOMPLETE vì cần sinh viên xác nhận lần cuối và gắn issue/evidence theo quy trình nộp bài. | Sinh viên cần kiểm tra lại wording cuối cùng, đảm bảo Feature D/FR-10 có bug tương ứng hoặc ghi nhận cùng warning này để trace giữa hai feature. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi vừa test xong các test case ở feature-C boundary-value-analysis và domain-testing ... hãy sửa lại feature-C-report và bug-report ... tự review và viết lại ai-gap-analysis ... viết bằng tiếng việt có dấu, cố gắng viết gần gũi" | Viết lại `feature-C-report.md`, `feature-C/bug-report/bug-report.md` và `feature-C/ai-gap-analysis/ai-gap-analysis.md` theo kết quả đã chạy: 24 test, 18 Pass, 6 Fail. Gom lỗi thành 3 bug chính: thiếu phân quyền role admin, cho phép `canceled -> delivered`, và XSS qua `shipping_address` trên admin UI. | INCOMPLETE | Output đã dựa trên kết quả thực thi và bằng chứng ảnh của Feature C, nhưng vẫn cần sinh viên rà lần cuối tên ảnh minh chứng, gắn GitHub Issue thật nếu rubric yêu cầu, và liên kết BUG-C-02 với Feature D/FR-10. | Sinh viên cần kiểm tra lại các ảnh evidence, tạo issue thật nếu cần, và đảm bảo báo cáo chính/PDF dùng đúng số liệu 24 test, 18 Pass, 6 Fail. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "bạn viết các case feature-D-mobile boundary-value-analysis và domain-testing hơi khó hiểu; review lại xem đủ các case với viết dễ hiểu hơn, bổ sung audit, một số test tôi đã test rồi" | Viết lại `feature-D-mobile/domain-testing/domain-testing.md` và `feature-D-mobile/boundary-value-analysis/boundary-value-analysis.md` bằng tiếng Việt dễ đọc hơn. Giữ các kết quả đã chạy trong Domain Testing, làm rõ rule FR-10 theo state machine, và bổ sung D-BVA-11 cho trạng thái ngoài tập hợp `returned`. | INCOMPLETE | Output đã giúp bảng dễ hiểu và trace tốt hơn, nhưng vẫn INCOMPLETE vì nhiều test D-DT/D-BVA còn chưa chạy, đặc biệt D-DT-07, D-DT-13, D-BVA-07, D-BVA-08 là các case source cho thấy dễ fail. | Sinh viên cần chạy tiếp các test chưa chạy, cập nhật Actual/Verdict/Evidence, sau đó sửa lại feature-D report, bug report và AI gap analysis theo kết quả thật. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi nghĩ là có nhiều ảnh minh chứng có thể sử dụng lại từ feature C, bạn hãy copy các ảnh đó cho feature D và đặt tên là D-DT- hoặc D-BVA-, feature nào test rồi thì không test lại nữa; cập nhật audit" | Copy các ảnh minh chứng trùng rule FR-10 từ Feature C sang Feature D với tên D-DT/D-BVA tương ứng; cập nhật Domain Testing, BVA và `feature-D-mobile-report.md`. Sau cập nhật, Feature D có 25 test thiết kế, 16 test đã có evidence, 14 Pass, 2 Fail, 9 chưa chạy. | INCOMPLETE | Việc dùng lại evidence là hợp lý vì các case admin transition của Feature C và Feature D kiểm tra cùng endpoint/rule FR-10. Tuy nhiên D-DT-07/D-BVA-07 về user hủy đơn `shipping` vẫn chưa có bằng chứng trực tiếp nên chưa được đánh dấu đã chạy. | Sinh viên cần test tiếp các case chưa có evidence trực tiếp, đặc biệt D-DT-07/D-BVA-07, rồi cập nhật bug report và gap analysis của Feature D. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "bổ sung feature-D-mobile boundary-value-analysis do một số case đã bị trùng ở domain-testing; copy hình ảnh và đặt tên là D-BVA-, cập nhật audit" | Copy thêm evidence trùng từ Domain Testing sang BVA cho Feature D: `D-DT-07.png -> D-BVA-07.png` và `D-DT-10.png -> D-BVA-10.png`. Cập nhật `D-BVA-07` thành Fail, `D-BVA-10` thành Pass, và cập nhật `feature-D-mobile-report.md` thành 25 test thiết kế, 22 đã có evidence, 18 Pass, 4 Fail, 3 chưa chạy. | INCOMPLETE | Bổ sung evidence hợp lý vì các BVA này kiểm tra cùng thao tác với Domain Testing. Vẫn INCOMPLETE vì D-BVA còn một số case chưa có evidence riêng hoặc cần đối chiếu cuối với report/bug/gap sau khi test hết. | Sinh viên cần rà lại ảnh minh chứng và tiếp tục cập nhật Feature D bug report/AI gap analysis sau khi chốt toàn bộ kết quả. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt tổng hợp các lượt hỏi lệnh API test trong conversation cho Feature A/B/C/D | Cung cấp các bộ lệnh CMD/PowerShell/cURL để test API cho Feature A, B, C và D: đăng nhập lấy token, gọi profile/order/admin endpoints, tạo đơn checkout, đổi trạng thái admin, hủy đơn user, kiểm tra token thiếu/sai, order không thuộc user, trạng thái lạ, HTML/XSS address, và các transition FR-10. | INCOMPLETE | Các lệnh API giúp sinh viên chạy SUT thật nhanh hơn, nhưng AI không tự chạy trên máy sinh viên và không tự tạo bằng chứng. Một số lệnh cần sinh viên thay đúng `order_id`, trạng thái hiện tại và môi trường backend/frontend đang chạy. | Sinh viên phải tự chạy lệnh, chụp screenshot/log response, cập nhật Actual/Verdict/Evidence trong từng bảng A/B/C/D; không được coi command output do AI mô tả là bằng chứng thật nếu chưa chạy. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "dựa vào feature-D-mobile domain-testing và boundary-value-analysis viết lại bug-report, feature-D-mobile-report; tự review và viết ai-gap-analysis; tiếng Việt có dấu, dễ hiểu; cập nhật audit" | Viết lại `feature-D-mobile-report.md`, `bug-report.md` và `ai-gap-analysis.md` theo kết quả cuối: 25 test đã chạy, 21 Pass, 4 Fail. Ghi nhận 2 bug chính của FR-10: user hủy được đơn `shipping` và admin chuyển được `canceled -> delivered`. | INCOMPLETE | Output đã bám vào kết quả test thật và evidence hiện có, nhưng vẫn cần sinh viên rà cuối tên ảnh, tạo GitHub Issue nếu rubric yêu cầu, và đồng bộ số liệu này vào báo cáo/PDF chính. | Sinh viên cần kiểm tra lại report cuối, gắn issue thật cho BUG-D-01/BUG-D-02 nếu cần, và đảm bảo Feature C/B cross-reference không mâu thuẫn với Feature D. |

## 3. Tong ket do chinh xac AI

| Chi so | So luong | Ti le |
| --- | ---: | ---: |
| Tong artifact AI sinh da audit | 23 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 23 | 100% |

## 4. Ket luan - khi nao nen / khong nen dung AI?

Nen dung AI de lap roadmap, tao khung bao cao, chuan hoa bang test case, goi y phan vung domain, tim boundary ung vien va nhac cac deliverable de thieu. Khong nen dung AI de thay the viec hieu feature, chay SUT, xac nhan actual result, tao bug evidence, tao GitHub Issues that, hoac quyet dinh feature da dat yeu cau. Voi HW02, AI phu hop vai tro tro ly co kiem soat; sinh vien phai review, thuc thi, sua va chiu trach nhiem cuoi cung.

## 5. Mandatory Disclosure draft

"The roadmap, report structure, checklist, prompt log, Agent Skills, Feature A/B/C/D test designs, Vietnamese artifact revisions, Feature A/B/C/D report/bug/gap revisions, Feature B warning reclassification, Feature D-mobile test-case readability revision, Feature D evidence reuse updates, Feature D-mobile encoding/format cleanup, API command guidance for A/B/C/D testing, final consistency/coverage review, README/checklist/main-report updates, AI Critique, AI Privacy Checklist, and AI Audit entries were generated with assistance from Codex / ChatGPT. I reviewed and will modify the feature selection, testing method, executed results, bug reports, AI gap analysis, Agent Skill demo, and final report. Actual test execution, screenshots, GitHub Issues, videos, and final judgments are verified by me. The detailed AI Audit Report is attached as Appendix A."

## 6. Phu luc audit lenh API da duoc AI ho tro

| Feature | Nhom lenh API / command AI da cung cap | Test case lien quan | Ghi chu kiem soat |
| --- | --- | --- | --- |
| Feature A - FR-04 | Lenh `set BASE`, login lay `TOKEN`, va cac lenh `curl`/PowerShell goi API profile de test cap nhat ten, phone, dia chi, token/role/profile validation. | A-DT-01, A-DT-02, A-DT-03, A-DT-04, A-DT-05, A-DT-13, A-DT-16, A-DT-17, A-DT-18 | Sinh vien phai tu chay tren SUT va cap nhat response/screenshot that vao Feature A. |
| Feature B - FR-11 | Lenh login user/admin, `GET /api/orders/my-orders`, `GET /api/orders/:id`, setup order, test token thieu/sai, order khong thuoc user, zero total, refresh sau cancel, va PUT/setup status la. | B-DT-04, B-DT-05, B-DT-06, B-DT-13, B-DT-14, B-BVA-04, B-BVA-05, B-BVA-08 | Mot so lenh dung de tao du lieu tien dieu kien; verdict van dua tren ket qua sinh vien chay that. |
| Feature C - FR-18 | Lenh login admin/user, `GET /api/admin/orders`, `PUT /api/admin/orders/:id/status`, checkout tao order, setup transition, test token user thuong, id khong ton tai, status `returned`, HTML/XSS address. | C-DT-01, C-DT-03, C-DT-04, C-DT-10, C-DT-11, C-DT-12, C-DT-13, C-DT-14, C-DT-15, C-DT-16, C-BVA-05, C-BVA-06, C-BVA-08 | Cac lenh da ho tro phat hien role bug, `canceled -> delivered`, va XSS; screenshot/log do sinh vien tao moi la evidence. |
| Feature D - FR-10 | Lenh login user/admin, checkout tao order, chuoi PUT admin de dua order qua `confirmed`, `shipping`, `delivered`, lenh user cancel, test own/other order va cac state bien. | D-DT-01, D-DT-07, D-DT-08, D-DT-09, D-DT-10, D-BVA-01, D-BVA-07, D-BVA-09, D-BVA-10 | Mot so evidence duoc tai su dung hop le tu Feature C/Domain Testing khi cung endpoint/rule FR-10; case con lai can evidence rieng. |

## 7. Chu ky

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Tran Hai Duc |
| MSSV | 23127173 |
| Mon hoc | CS423 / CSC13003 - Kiem chung Phan mem |
| Giang vien / Tro giang | Dr. Lam Quang Vu; Dr. Tran Duy Hoang; MSc. Tran Thi Bich Hanh; MSc. Truong Phuoc Loc; MSc. Ho Tuan Thanh |
| Ngay | 2026-07-08 |
| Chu ky | Tran Hai Duc |

## 8. Audit addendum - Final consistency and coverage review

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "review lai tinh consistency cua toan bo HW2; review tinh day du test case cua toan bo HW2; review xem da khop voi Lab\\HW2\\requirement\\HW2-requirement.md chua; cap nhat ai audit" |
| Output AI | Ra soat toan bo HW2, cap nhat `README.md`, `checklist.md`, `doc/md/main-report.md`, tao `doc/md/hw2-consistency-coverage-review.md`, viet lai AI Critique, cap nhat AI Privacy Checklist va Mandatory Disclosure. |
| Verdict | INCOMPLETE |
| Ly do | Review xac nhan 4 feature da co Domain Testing, BVA, bug report, AI gap analysis va 101/101 test da chay. Tuy nhien cac bang chung ngoai Markdown nhu GitHub Issue that, PDF, video demo Agent Skill va commit log that van can sinh vien bo sung truoc khi nop. |
| Ban sinh vien can sua | Tao/link GitHub Issues, export PDF, quay demo Agent Skill, paste commit log that, va dong bo prompt log neu muon no day du nhu AI Audit. |

## 9. Audit addendum - Consistency formatting for Domain Testing, BVA and Feature D report

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "cac file domain-testing.md va boundary-value-analysis.md cua ca 4 feature A B C D chua consistency ve cach trinh bay; tuong tu cho feature-i-mobile-report.md; toi muon chung consistency hon; bo sung audit" |
| Output AI | Chuan hoa cach trinh bay cho 8 file `domain-testing.md` va `boundary-value-analysis.md`: them muc thong tin chung/quy uoc trinh bay, them bang tom tat ket qua cho A/B/C, viet lai sach hon hai file Domain/BVA cua Feature D-mobile, va viet lai `feature-D-mobile-report.md` theo cung format voi B/C report. |
| Verdict | INCOMPLETE |
| Ly do | Format da nhat quan hon va khong doi test ID/verdict/evidence chinh. Tuy nhien sinh vien van can doc lai ban cuoi trong Markdown/PDF de dam bao rendering bang dai, duong dan anh va encoding tieng Viet hien dung. |
| Ban sinh vien can sua | Review file sau khi export PDF, dam bao cac bang khong tran trang, va bo sung GitHub Issue/PDF/video/commit log that neu chua co. |

## 10. Audit addendum - Evidence path normalization

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "chua consistency ve path file minh chung" |
| Output AI | Chuan hoa duong dan minh chung trong cac file Markdown thuoc `requirement` ve dang tuong doi ngan: `domain-testing/...png`, `boundary-value-analysis/...png`, va `bug-report/screenshots/...png`; loai bo cac prefix dai nhu `23127173_HW02_AI_095\\requirement\\feature-*\\...`. |
| Verdict | INCOMPLETE |
| Ly do | Path da nhat quan hon trong Markdown, nhung sinh vien van can mo/preview report sau khi export PDF de dam bao link anh render dung trong moi moi truong nop bai. |
| Ban sinh vien can sua | Khi dong goi zip/PDF, kiem tra lai anh co nam dung thu muc tuong doi va cac link trong bug report/GitHub Issue co mo duoc. |

## 11. Audit addendum - Feature D-mobile encoding and formatting cleanup

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "ban review lai Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\domain-testing\\domain-testing.md, Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\boundary-value-analysis\\boundary-value-analysis.md loi dinh dang hay gi do" |
| Output AI | Kiem tra va phat hien hai file Feature D-mobile Domain Testing/BVA bi loi mojibake tieng Viet. Viet lai sach hai file bang UTF-8, giu nguyen ID test, verdict, so lieu tong ket va duong dan minh chung tuong doi. |
| Verdict | INCOMPLETE |
| Ly do | Da sua loi hien thi/encoding trong Markdown, nhung sinh vien van can preview lai khi export PDF de dam bao bang dai va tieng Viet co dau render dung. |
| Ban sinh vien can sua | Mo lai hai file trong editor/PDF preview, doi chieu anh minh chung va so lieu voi report cuoi truoc khi nop. |

## 12. Audit addendum - Final submission readiness review and evidence-folder update

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-09 +07:00 |
| Prompt | "cac anh github nam trong cac thu muc kieu Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\bug-report\\screenshots; review lai lan nua xem toi san sang nop chua; ngoai ra cham lai diem toan bai, toi muon duoc it nhat 95/100, cap nhat audit" va "toi se bo cot video demo... thay video demo thanh folder chua cac anh..." |
| Output AI | Ra soat lai deliverable HW02, xac nhan PNG evidence hop le, sua bug report Feature B bi loi encoding, ghi ro anh minh chung GitHub/bug nam trong `bug-report/screenshots`, cap nhat README/checklist/main-report theo huong bo cot demo video trong test summary va thay bang thu muc anh minh chung. Tu danh gia muc tieu 95/100 khi cac artifact Markdown/evidence da day du; PDF va video skill se do sinh vien tu bo sung khi dong goi. |
| Verdict | INCOMPLETE |
| Ly do | Markdown va evidence folders da san sang hon cho muc tieu 95, nhung diem cuoi cung van phu thuoc vao viec sinh vien export PDF, bo sung video demo skill neu rubric yeu cau, va gan URL GitHub Issue that neu giang vien bat buoc. |
| Ban sinh vien can sua | Export PDF, kiem tra render bang/anh, cap nhat link video demo skill neu can, va gan URL issue that neu rubric yeu cau ngoai screenshot. |
