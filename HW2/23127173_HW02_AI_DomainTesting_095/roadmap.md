# Roadmap hoàn thành HW02-AI Domain Testing - mục tiêu 95/100

## 1. Mục tiêu nộp bài

| Mục | Mục tiêu |
| --- | --- |
| Sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW02-AI - Domain Testing on EShop |
| Mục tiêu điểm | 095/100 |
| SUT | EShop - <https://github.com/ttbhanh/eshop-sut> |
| File nộp dự kiến | `23127173_HW02_AI_DomainTesting_095.zip` |

Mục tiêu của roadmap này là giúp hoàn thành bài HW02 ở mức gần tối đa, không chỉ đủ file mà còn đủ bằng chứng: test case có phương pháp, bug có screenshot/GitHub Issue, AI audit đầy đủ, commit log rõ, và có thể bảo vệ miệng trong 5-7 phút.

---

# 2. Chiến lược ăn điểm theo rubric

| Hạng mục | Điểm | Chiến lược đạt điểm cao |
| --- | ---: | --- |
| Feature A - Domain + Boundary | 25 | Chọn 1 feature Pool A, phân tích input domain rõ, có Domain Testing + BVA + test execution + bug issue. |
| Feature B - Domain + Boundary | 25 | Chọn 1 feature Pool B, ưu tiên nghiệp vụ cart/checkout/coupon vì có nhiều boundary và bug dễ quan sát. |
| Feature C - Domain + Boundary | 25 | Chọn 1 feature Pool C, ưu tiên CRUD/import/admin vì có nhiều validation rule và quyền truy cập. |
| Feature D - Mobile, Domain + Boundary | 15 | Chọn 1 feature mobile, tập trung vào input, state, permission, network, device/responsive boundary. |
| Agent Skills | 10 | Làm một skill hoặc rule có thể tái sử dụng để sinh checklist Domain Testing + BVA, kèm video demo end-to-end. |
| Tổng | 100 | Target 95: phải đủ 4 feature, đủ AI audit, đủ bug evidence, có README/test summary, có commit log. |

---

# 3. Cấu trúc thư mục đã chuẩn bị

```text
Lab/HW2/23127173_HW02_AI_095/
├── README.md
├── checklist.md
├── roadmap.md
├── doc/
│   ├── md/
│   │   ├── main-report.md
│   │   ├── appendixA-prompt-log.md
│   │   ├── AI Audit/
│   │   │   ├── 01_AI-Audit-Report.md
│   │   │   ├── 02_AI-Critique.md
│   │   │   ├── 03_Mandatory-Disclosure.md
│   │   │   └── 04_AI-Privacy-Checklist.md
│   │   └── Git Commit Log/
│   │       └── git-commit-log.txt
│   └── pdf/
├── requirement/
│   ├── feature-A/
│   ├── feature-B/
│   ├── feature-C/
│   └── feature-D-mobile/
├── agent-skills/
│   ├── domain-bva-skill/
│   └── demo-videos/
└── evidence/
    ├── github-issues/
    ├── screenshots/
    └── videos/
```

---

# 4. Chọn feature đề xuất

Sinh viên cần chốt feature với nhóm để không trùng. Nếu chưa chốt, nên ưu tiên bộ sau vì dễ áp dụng Domain Testing + BVA và dễ tìm bug:

| Nhóm | Feature đề xuất | Lý do chọn | Rủi ro |
| --- | --- | --- | --- |
| Pool A | FR-01 Account registration | Có nhiều input: email, password, phone, name, duplicate account, captcha/verification nếu có. Boundary rõ. | Cần biết rule chính xác của password/email. |
| Pool B | FR-09 Discount coupons | Có boundary về ngày hết hạn, min order, percent/fixed discount, usage limit, invalid code. | Cần seed data coupon hoặc quyền admin tạo coupon. |
| Pool C | FR-16 Product import from CSV | Có nhiều domain: file type, header, row count, price, stock, category id, duplicate SKU. Dễ có bug validation. | Cần quyền admin và sample CSV. |
| Pool D | Mobile product listing/search hoặc mobile cart | Có boundary về keyword length, quantity, offline/network, responsive/device state. | Cần chạy app mobile hoặc emulator. |

Nếu nhóm đã phân công feature khác, giữ nguyên cấu trúc thư mục và đổi tên trong từng file report.

---

# 5. Quy trình làm từng feature

Mỗi feature phải làm đủ 8 bước sau. Sau mỗi bước quan trọng, tạo một Git commit riêng.

## Bước 1 - Hiểu feature

Deliverable:

* `requirement/feature-X/feature-X-report.md`
* screenshot màn hình feature trong `evidence/screenshots/`

Nội dung cần có:

* Mục tiêu nghiệp vụ của feature.
* Actor/role liên quan.
* Precondition.
* Input/output.
* Validation rule.
* State transition nếu có.
* Dữ liệu test cần chuẩn bị.

Tiêu chí tốt:

* Không viết chung chung.
* Có trích dẫn từ UI/source/spec nếu tìm được.
* Nêu rõ assumption nếu chưa có spec chính thức.

## Bước 2 - Dùng AI có kiểm soát

Deliverable:

* `doc/md/appendixA-prompt-log.md`
* `doc/md/AI Audit/01_AI-Audit-Report.md`

Prompt nên tách theo kỹ thuật:

1. Prompt yêu cầu AI phân tích input domain.
2. Prompt yêu cầu AI tạo Domain Testing partition.
3. Prompt yêu cầu AI tạo BVA values.
4. Prompt yêu cầu AI tự critique thiếu sót.
5. Prompt yêu cầu AI cross-check với ISTQB.

Không dùng một prompt duy nhất kiểu "generate all test cases".

## Bước 3 - Domain Testing

Deliverable:

* `requirement/feature-X/domain-testing/domain-testing.md`

Nội dung bắt buộc:

* Input variables.
* Equivalence classes / partitions.
* Valid classes.
* Invalid classes.
* Representative values.
* Constraint giữa các biến.
* Bảng test case Domain Testing.

Test case nên có cột:

| ID | Objective | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Bước 4 - Boundary Value Analysis

Deliverable:

* `requirement/feature-X/boundary-value-analysis/boundary-value-analysis.md`

Nội dung bắt buộc:

* Danh sách boundary.
* Giá trị min, min-1, min+1, nominal, max-1, max, max+1 nếu phù hợp.
* BVA test cases.
* Lý do chọn boundary.

Ví dụ boundary hay gặp:

* độ dài email/password/name/keyword,
* số lượng sản phẩm,
* giá,
* tồn kho,
* phần trăm giảm giá,
* ngày bắt đầu/kết thúc coupon,
* kích thước file CSV,
* số dòng CSV,
* số lần nhập sai mật khẩu.

## Bước 5 - Thực thi test

Deliverable:

* Actual/Verdict trong từng bảng test case.
* Screenshot/video evidence cho test quan trọng.
* Test summary trong `README.md`.

Quy tắc:

* Không để tất cả test ở `Not run`.
* Mỗi feature nên chạy tối thiểu 8-12 test case quan trọng.
* Với bug, phải có evidence.
* Với test pass, có thể gom evidence theo màn hình chính hoặc log.

## Bước 6 - Bug Reporting

Deliverable:

* `requirement/feature-X/bug-report/bug-report.md`
* GitHub Issues thật trên repo nhóm/cá nhân.
* Screenshot issue trong `evidence/github-issues/` hoặc `requirement/feature-X/bug-report/screenshots/`.

Mỗi bug cần:

* Summary.
* Environment.
* Preconditions.
* Steps to reproduce.
* Expected result.
* Actual result.
* Severity/Priority.
* Screenshot/video.
* GitHub Issue URL.

## Bước 7 - AI Gap Analysis

Deliverable:

* `requirement/feature-X/ai-gap-analysis/ai-gap-analysis.md`

Nội dung cần có:

* AI đề xuất gì.
* AI bỏ sót test case/bug nào.
* Sinh viên phát hiện bằng cách nào.
* Vì sao AI bỏ sót.
* Bản sửa của sinh viên.

Mục tiêu điểm cao:

* Mỗi feature có ít nhất 2-3 gap rõ.
* Có screenshot/prompt log chứng minh AI output ban đầu.
* Có liên hệ với G9.3 Analyse.

## Bước 8 - Commit log

Deliverable:

* `doc/md/Git Commit Log/git-commit-log.txt`

Mẫu commit nên dùng:

```text
HW02 feature-A inspect registration rules
HW02 feature-A add domain testing partitions
HW02 feature-A add boundary value cases
HW02 feature-A execute tests and update verdicts
HW02 feature-A add bug reports and issue links
HW02 feature-A add AI gap analysis
```

---

# 6. Roadmap theo ngày làm

## Ngày 1 - Chuẩn bị và chốt feature

Checklist:

* [ ] Pull/clone EShop SUT.
* [ ] Chạy được web app/admin/mobile hoặc ghi rõ phần chưa chạy được.
* [ ] Chốt 4 feature với nhóm, không trùng.
* [ ] Ghi feature selection vào `README.md` và `main-report.md`.
* [ ] Tạo commit đầu tiên cho cấu trúc bài làm.
* [ ] Log prompt roadmap đầu tiên vào AI Audit và prompt log.

Output:

* `roadmap.md`
* `README.md`
* `doc/md/appendixA-prompt-log.md`
* `doc/md/AI Audit/01_AI-Audit-Report.md`

## Ngày 2 - Feature A

Checklist:

* [ ] Phân tích UI/source/spec cho Feature A.
* [ ] Tạo Domain Testing partitions.
* [ ] Tạo BVA values.
* [ ] Chạy test, cập nhật Actual/Verdict.
* [ ] Log bug lên GitHub Issues.
* [ ] Viết AI gap analysis.
* [ ] Commit theo từng bước.

Target:

* >= 12 test case.
* >= 1 bug hoặc ghi rõ không tìm thấy bug sau khi test.
* >= 2 AI gaps.

## Ngày 3 - Feature B

Tương tự Feature A, ưu tiên test nghiệp vụ có nhiều constraint như coupon/cart/checkout.

Target:

* >= 12 test case.
* >= 1 bug nếu có bằng chứng.
* Có boundary về số lượng, tiền, discount, date/time hoặc state.

## Ngày 4 - Feature C

Tương tự Feature A, ưu tiên admin CRUD/import vì dễ có validation và permission issue.

Target:

* >= 12 test case.
* Có test quyền truy cập admin/user.
* Có test invalid data.
* Có screenshot GitHub Issue nếu phát hiện bug.

## Ngày 5 - Feature D Mobile

Checklist:

* [ ] Xác định môi trường mobile/emulator/browser responsive.
* [ ] Chạy mobile flow chính.
* [ ] Domain Testing + BVA.
* [ ] Test network/offline/responsive nếu phù hợp.
* [ ] Ghi rõ limitation nếu không có device thật.

Target:

* >= 8-10 test case.
* Có evidence mobile/responsive.
* Có gap analysis riêng.

## Ngày 6 - Agent Skill

Checklist:

* [ ] Viết skill/rule trong `agent-skills/domain-bva-skill/`.
* [ ] Skill nhận feature spec và xuất checklist Domain Testing + BVA.
* [ ] Dùng skill thử trên 1 feature hoàn chỉnh.
* [ ] Quay video demo end-to-end.
* [ ] Ghi link video vào `agent-skills/demo-videos/link-video.md`.

Target:

* Lấy tối đa 10 điểm Agent Skills.
* Skill không cần phức tạp, nhưng phải tái sử dụng được và demo rõ.

## Ngày 7 - Tổng hợp report

Checklist:

* [ ] Gộp nội dung 4 feature vào `doc/md/main-report.md`.
* [ ] Cập nhật `README.md` test summary.
* [ ] Cập nhật AI Audit Report.
* [ ] Viết AI Critique 200-300 từ.
* [ ] Điền Mandatory Disclosure.
* [ ] Điền AI Privacy Checklist.
* [ ] Export PDF.
* [ ] Kiểm tra zip theo checklist.

---

# 7. Definition of Done cho từng feature

Một feature chỉ được xem là xong khi đủ các mục sau:

| Mục | Điều kiện đạt |
| --- | --- |
| Feature report | Có mô tả feature, actor, precondition, input/output, rule/assumption. |
| Domain Testing | Có phân vùng valid/invalid, representative value, test cases. |
| BVA | Có boundary rõ, test cases tại/dưới/trên biên. |
| Execution | Actual/Verdict được điền, không để trống hàng loạt. |
| Bug report | Bug có GitHub Issue URL và screenshot nếu có bug. |
| AI gap | Có phân tích AI bỏ sót gì và sinh viên sửa gì. |
| Audit | Prompt/output liên quan được log. |
| Commit | Có commit tương ứng trong Git commit log. |

---

# 8. Rủi ro mất điểm và cách né

| Rủi ro | Hậu quả | Cách né |
| --- | --- | --- |
| Chỉ dùng AI sinh test case chung chung | Mất điểm phương pháp | Luôn viết từng bước Domain Testing/BVA trước khi đưa bảng test case. |
| Không chạy test, không có Actual/Verdict | Bị xem là thiết kế trên giấy | Chạy các test quan trọng và cập nhật kết quả thật. |
| Bug chỉ ghi trong report, không có GitHub Issue | Thiếu deliverable | Tạo issue thật và chụp screenshot issue. |
| Không có AI Audit/prompt log | Mất toàn bộ điểm compliance AI | Log prompt ngay sau mỗi phiên dùng AI. |
| Commit log không theo từng bước | Mất yêu cầu Git Commit Log | Commit nhỏ sau từng bước của từng feature. |
| Agent Skill không có demo | Khó lấy 10 điểm skill | Làm skill tối giản nhưng có video end-to-end. |
| Feature trùng với bạn trong nhóm | Vi phạm Feature Selection | Chốt feature bằng bảng phân công nhóm trước khi làm sâu. |
| Thiếu PDF | Có thể bị xem là thiếu tài liệu | Export Markdown sang PDF trước khi zip. |

---

# 9. Prompt đầu tiên đã được audit

Prompt đầu tiên của HW02 đã được ghi vào:

* `doc/md/appendixA-prompt-log.md`
* `doc/md/AI Audit/01_AI-Audit-Report.md`

Prompt gốc:

```text
tôi muốn bạn làm 1 roadmap để hoàn thành HW này 1 cách 10 điểm vào Lab\HW2\23127173_HW02_AI_095\roadmap.md

tham khảo cấu trúc Lab\HW1\23127173_HW01_AI_095 để tạo các thư mục và file tương ứng cho Lab\HW2\23127173_HW02_AI_095

tôi cần bạn thêm audit cho prompt đầu tiên này luôn

AI template bạn xem trong Lab\AI Templates\md
```

Verdict hiện tại: **INCOMPLETE** vì AI chỉ tạo roadmap/khung file; sinh viên vẫn phải tự chọn feature, chạy SUT, thực thi test, tạo bug evidence, quay video demo skill, export PDF và nộp zip.

---

# 10. Checklist trước khi nộp

* [ ] 4 feature đã chọn không trùng trong nhóm.
* [ ] Mỗi feature có Domain Testing report.
* [ ] Mỗi feature có Boundary Value Analysis report.
* [ ] Mỗi feature có test cases với Actual/Verdict.
* [ ] Bug đã được tạo trên GitHub Issues và có screenshot.
* [ ] AI Gap Analysis có cho từng feature.
* [ ] Agent Skill có source/rule và video demo.
* [ ] AI Audit Report có mọi prompt/output chính.
* [ ] AI Critique đủ 200-300 từ.
* [ ] Mandatory Disclosure đã điền.
* [ ] Privacy Checklist đã tick.
* [ ] README có self-assessment table và test summary.
* [ ] Git commit log đã xuất.
* [ ] Main report có Markdown + PDF.
* [ ] Zip đúng tên `23127173_HW02_AI_DomainTesting_095.zip`.
