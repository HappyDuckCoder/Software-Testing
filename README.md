# Software Testing Lab

Repository bài tập môn **Software Testing (CS423)** — quy trình kiểm thử có hệ thống, tích hợp AI có trách nhiệm.

| | |
| --- | --- |
| **Sinh viên** | Trần Hải Đức — MSSV **23127173** |
| **GitHub** | [HappyDuckCoder/Software-Testing](https://github.com/HappyDuckCoder/Software-Testing) |
| **Issue tracker** | [GitHub Issues](https://github.com/HappyDuckCoder/Software-Testing/issues) |
| **Mục tiêu điểm** | 095/100 mỗi bài tập lớn |
| **Cập nhật** | 03/09/2026 |

---

## Tổng quan các bài tập

| Bài | Chủ đề | SUT | Thư mục nộp | Trạng thái |
| --- | --- | --- | --- | --- |
| **HW01** | Tổng quan QA/QC & Requirement | — | [`HW1/23127173_HW01_AI_095/`](HW1/23127173_HW01_AI_095/) | Hoàn tất |
| **HW02** | Domain Testing + BVA | [EShop](https://github.com/ttbhanh/eshop-sut) | [`HW2/23127173_HW02_AI_DomainTesting_095/`](HW2/23127173_HW02_AI_DomainTesting_095/) | Hoàn tất |
| **HW03** | GUI & Usability | [EMS FIT-HCMUS](https://prod-dev.ems-fitus.cloud) | [`HW3/23127173_HW03_AI_GUIUsability_EMS_095/`](HW3/23127173_HW03_AI_GUIUsability_EMS_095/) | Hoàn tất |
| **HW04** | AI Automation (Playwright) | [EShop](https://github.com/ttbhanh/eshop-sut) | [`HW4/23127173_HW04_AI_Automation_095/`](HW4/23127173_HW04_AI_Automation_095/) | Hoàn tất |
| **HW05** | Performance Testing (JMeter) | [EShop](https://github.com/ttbhanh/eshop-sut) | [`HW5/23127173_HW05_AI_Performance_088/`](HW5/23127173_HW05_AI_Performance_088/) | Hoàn tất |
| **HW06** | API Testing (Postman/Newman) | [EShop](https://github.com/ttbhanh/eshop-sut) | [`HW6/23127173_HW06_AI_API_095/`](HW6/23127173_HW06_AI_API_095/) | Hoàn tất |

Mỗi bài có **README riêng**, báo cáo Markdown/PDF, **AI Audit** và **Agent Skill** kèm video demo.

---

## Dòng chảy feature EShop (HW02 → HW04 → HW05 → HW06)

Ba feature web được giữ **nhất quán** từ thiết kế test đến automation, performance và API:

| Pool | Feature ID | Mô tả | HW02 TC | HW04 TC | HW06 TC |
| --- | --- | --- | ---: | ---: | ---: |
| A | FR-04 | Quản lý hồ sơ cá nhân | 30 | 30 | 40 |
| B | FR-11 | Lịch sử đơn hàng (user) | 22 | 22 | 40 |
| C | FR-18 | Quản lý đơn hàng (admin) | 24 | 24 | 40 |

HW04 dùng **spec oracle** từ HW02 — fail automation = defect SUT, không pass theo code buggy.

---

## HW04 — Automation (nổi bật)

| Chỉ số | Giá trị |
| --- | --- |
| Test case | **76** (data-driven JSON) |
| Browser runs | **9** (Chromium / Firefox / WebKit × 3 feature) |
| Kết quả | **158 Pass · 53 Fail · 12 Skip · 5 Timeout** |
| Playwright | [`automation/`](HW4/23127173_HW04_AI_Automation_095/automation/) — public trên GitHub |
| Commit `.spec.ts` | **9/8** — [lịch sử commit](https://github.com/HappyDuckCoder/Software-Testing/commits/main/HW4/23127173_HW04_AI_Automation_095/automation/tests) |
| Bug Issues | [#8–#14](https://github.com/HappyDuckCoder/Software-Testing/issues) |

### Video demo

| Video | Link |
| --- | --- |
| Task 2 — E2E + multi-browser + HTML report | [youtu.be/sAWzvEyJ_d0](https://youtu.be/sAWzvEyJ_d0) |
| Agent Skill — `playwright-automation-builder` | [youtu.be/W2U25h0cyJM](https://youtu.be/W2U25h0cyJM) |

Chi tiết: [`HW4/.../agent-skills/demo-videos/link-video.md`](HW4/23127173_HW04_AI_Automation_095/agent-skills/demo-videos/link-video.md)

### Chạy nhanh

```bash
# SUT: API :3000 · web :5180 · admin :5174
cd HW4/23127173_HW04_AI_Automation_095/automation
cp .env.example .env   # điền credential local
npm install
npx playwright install
npm run test:full-matrix      # 9 browser runs → evidence/
npm run test:feature-a:headed # demo headed Feature A
```

Báo cáo chính: [`doc/md/main-report.md`](HW4/23127173_HW04_AI_Automation_095/doc/md/main-report.md) · PDF: [`doc/pdf/main-report.pdf`](HW4/23127173_HW04_AI_Automation_095/doc/pdf/main-report.pdf)

---

## HW05 — Performance Testing (JMeter)

| Chỉ số | Giá trị |
| --- | --- |
| Loại test | Load · Stress · Spike · Endurance |
| Tool | Apache JMeter (CLI + GUI) |
| Test plan | [`performance/test-plans/`](HW5/23127173_HW05_AI_Performance_088/performance/test-plans/) |
| HTML reports | [`performance/html-reports/`](HW5/23127173_HW05_AI_Performance_088/performance/html-reports/) |
| CI/CD | Pipeline + baseline compare ([`continuous-performance-testing/`](HW5/23127173_HW05_AI_Performance_088/continuous-performance-testing/)) |
| Agent Skills | 3 skill — `jmeter-e2e-plan-builder`, `performance-testing-and-log-analysis`, `transactional-test-data-manager` |
| Tự đánh giá | **88/100** |

### Video demo

| Video | Link |
| --- | --- |
| HW5 chính (≥ 6 phút) | [youtu.be/TF93U3aXK9M](https://youtu.be/TF93U3aXK9M) |

Chi tiết: [`HW5/.../evidence/demo-video/link-video.md`](HW5/23127173_HW05_AI_Performance_088/evidence/demo-video/link-video.md)

---

## HW06 — API Testing (Postman / Newman)

| Chỉ số | Giá trị |
| --- | --- |
| API kiểm thử | 3 API (Profile · Hủy đơn · Admin status) |
| Test case | **120** (105 AI + 15 SV) |
| Newman requests | **182** |
| Bug phát hiện | 6 nhóm bug (12 assertion fail) |
| CI/CD | [pass #8](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307) · [fail #7](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556) |
| Agent Skills | `eshop-api-test-generator`, `postman-newman-api-testing-workflow` |
| Tự đánh giá | **95/100** |

Báo cáo chính: [`doc/md/main-report.md`](HW6/23127173_HW06_AI_API_095/doc/md/main-report.md)

---

## Cấu trúc repository

```text
Software-Testing/
├── README.md                 ← file này
├── HW-Policies.md            ← chính sách môn học
├── HW1/
│   └── 23127173_HW01_AI_095/
├── HW2/
│   └── 23127173_HW02_AI_DomainTesting_095/
├── HW3/
│   └── 23127173_HW03_AI_GUIUsability_EMS_095/
├── HW4/
│   ├── requirement/requirement.md
│   └── 23127173_HW04_AI_Automation_095/
│       ├── README.md         ← chi tiết bài HW04
│       ├── automation/       ← Playwright project
│       ├── evidence/         ← HTML reports + execution-summary.json
│       ├── requirement/      ← feature A/B/C reports, gap analysis, bugs
│       ├── doc/              ← main report + AI Audit + PDF
│       └── agent-skills/     ← playwright-automation-builder
├── HW5/
│   ├── requirement/requirement.md
│   └── 23127173_HW05_AI_Performance_088/
│       ├── README.md         ← chi tiết bài HW05
│       ├── performance/      ← JMeter test plans, JTL, HTML reports
│       ├── evidence/         ← screenshots, resource monitor, demo video
│       ├── continuous-performance-testing/ ← CI pipeline + baseline
│       ├── doc/              ← main report + AI Audit + PDF
│       └── agent-skills/     ← 3 agent skills
└── HW6/
    ├── requirement/requirement.md
    └── 23127173_HW06_AI_API_095/
        ├── README.md         ← chi tiết bài HW06
        ├── api-testing/      ← Postman collections + Newman scripts
        ├── test-cases/       ← test case matrix, oracle, CSV
        ├── evidence/         ← CI/CD, Postman UI, Newman UI screenshots
        ├── issues/           ← bug reports
        ├── ci-cd/            ← CI report + guide
        ├── doc/              ← main report + AI Audit/Critique + PDF
        └── agent-skills/     ← 2 agent skills
```

---

## Tự đánh giá tổng hợp

| Bài | Điểm tự đánh giá | Ghi chú |
| --- | ---: | --- |
| HW01 — Tổng quan QA/QC | 95/100 | 10 JD, 3 requirement, video demo |
| HW02 — Domain Testing | 95/100 | 4 pool (A/B/C + mobile D), 101 TC |
| HW03 — GUI & Usability | 95/100 | Scenario B EMS, checklist 41 mục |
| HW04 — Automation | 95/100 | 76 TC, 9 runs, 2 video YouTube |
| HW05 — Performance | 88/100 | Load/Stress/Spike/Endurance, CI pipeline |
| HW06 — API Testing | 95/100 | 120 TC, 3 API, 6 nhóm bug, Newman CI |

Điểm trên là **tự đánh giá bảo thủ** theo rubric; không thay thế điểm giảng viên.

---

## Tài liệu & liên kết

| Loại | Đường dẫn |
| --- | --- |
| Chính sách bài tập | [`HW-Policies.md`](HW-Policies.md) |
| HW01 README | [`HW1/23127173_HW01_AI_095/checklist.md`](HW1/23127173_HW01_AI_095/checklist.md) |
| HW02 README | [`HW2/23127173_HW02_AI_DomainTesting_095/README.md`](HW2/23127173_HW02_AI_DomainTesting_095/README.md) |
| HW03 README | [`HW3/23127173_HW03_AI_GUIUsability_EMS_095/README.md`](HW3/23127173_HW03_AI_GUIUsability_EMS_095/README.md) |
| HW04 README | [`HW4/23127173_HW04_AI_Automation_095/README.md`](HW4/23127173_HW04_AI_Automation_095/README.md) |
| HW05 README | [`HW5/23127173_HW05_AI_Performance_088/README.md`](HW5/23127173_HW05_AI_Performance_088/README.md) |
| HW06 README | [`HW6/23127173_HW06_AI_API_095/README.md`](HW6/23127173_HW06_AI_API_095/README.md) |
| HW04 checklist nộp | [`HW4/.../checklist.md`](HW4/23127173_HW04_AI_Automation_095/checklist.md) |
| HW05 checklist nộp | [`HW5/.../checklist.md`](HW5/23127173_HW05_AI_Performance_088/checklist.md) |
| HW06 checklist nộp | [`HW6/.../checklist.md`](HW6/23127173_HW06_AI_API_095/checklist.md) |
| HW04 đóng gói zip | [`HW4/.../scripts/pack-submission.md`](HW4/23127173_HW04_AI_Automation_095/scripts/pack-submission.md) |
| HW05 đóng gói zip | [`HW5/.../scripts/pack-submission.md`](HW5/23127173_HW05_AI_Performance_088/scripts/pack-submission.md) |
| HW06 đóng gói zip | [`HW6/.../scripts/pack-submission.md`](HW6/23127173_HW06_AI_API_095/scripts/pack-submission.md) |

---

## Ghi chú

- Credential test chỉ đặt trong `automation/.env` hoặc `api-testing/.env` (local); **không** commit lên GitHub.
- Video demo upload **Unlisted** trên YouTube; link ghi trong từng bài `evidence/demo-video/`.
- Mọi output AI đều có **AI Audit Report**, **Mandatory Disclosure** và human review trước khi nộp.
