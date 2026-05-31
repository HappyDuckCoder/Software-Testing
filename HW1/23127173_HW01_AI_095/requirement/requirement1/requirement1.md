# Requirement 1 - Thị trường việc làm QA/QC 2026+

## 1. Phạm vi thu thập

Yêu cầu: thu thập 10 tin tuyển dụng QA/QC trong vòng 60 ngày, mỗi tin có link, screenshot có account name, mô tả công việc, kỹ năng yêu cầu, mức lương và phân tích tác động của AI. Bộ dữ liệu này được tổng hợp từ 10 file `job-*.md` trong `jobs-data/job-description/` và 10 screenshot trong `jobs-data/images/`.

Ngày thu thập: 2026-05-28. Account hiển thị trong screenshot: `Duc Hai - Student at VNUHCM - University of Science`.

## 2. Bảng tổng hợp 10 tin tuyển dụng

| ID | Vị trí | Công ty | Nhóm việc | Địa điểm / Hình thức | Lương | AI / Automation | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | QA - Software / Device Manager | OptiSigns | QA/QC Manager - Software and Device | Ho Chi Minh City | Competitive pay, không công khai số cụ thể | Automation testing là điểm cộng | `jobs-data/images/job-01.png` |
| 02 | Software QA Development Engineer / SDET | NVIDIA | SDET / Software QA Development | Cu Chi, Ho Chi Minh City | Không công khai | AI tools, model testing, LLM benchmarking | `jobs-data/images/job-02.png` |
| 03 | QA Engineer | Dwarves Foundation | Automation, ML/Data, Security QA | Hybrid - Ho Chi Minh City | USD 1,800 - 2,000 | ML testing, data-output validation, automation | `jobs-data/images/job-03.png` |
| 04 | Automation QA Engineer (AI-First) | OPSWAT | Automation QA / AI-first testing | Ho Chi Minh City | Không công khai | AI-first testing, self-healing automation | `jobs-data/images/job-04.png` |
| 05 | Design Verification Engineer | Hyphen Deux | Design Verification / QA | SHTP, Ho Chi Minh City | Up to USD 5,000 | Regression automation, verification tooling | `jobs-data/images/job-05.png` |
| 06 | Full-stack Test Engineer (Manual, Automation) | KMS Technology | Manual and Automation QA | Hybrid/remote/flexible in Vietnam | Attractive salary, không công khai số cụ thể | AI chat tools, coding assistants, prompt writing | `jobs-data/images/job-06.png` |
| 07 | Senior QA Tester (Manual / Casual Games) | SUN.STUDIO | Senior Manual Game QA | Ho Chi Minh City | Không công khai | AI chỉ được nêu trong hiring support | `jobs-data/images/job-07.png` |
| 08 | QC Engineer | Merkle | Salesforce CRM and AI Solutions QC | Ho Chi Minh City | Không công khai | Prompt regression, AI output evaluation, AI-agent safety | `jobs-data/images/job-08.png` |
| 09 | Data Test Engineer | HCLTech Vietnam | Data testing / ETL testing | Hybrid - Ho Chi Minh City | Không công khai | Automated data validation, data quality tools | `jobs-data/images/job-09.png` |
| 10 | Quality Assurance Engineer | Quantum Movement | Mobile/Web QA | Onsite - District 3, HCMC | Không công khai | Automation, computer vision/motion-tracking exposure | `jobs-data/images/job-10.png` |

## 3. Mô tả công việc và kỹ năng chính

| ID | Mô tả công việc | Kỹ năng chính |
| --- | --- | --- |
| 01 | Quản lý QA cho software và device, xây dựng QA strategy, test lifecycle, defect tracking, metric/reporting, compliance và mentoring. | 5+ năm software/hardware QA, lead QA team, test process, automation testing tools, communication. |
| 02 | Lập test matrix, test plan, test case, automation framework, bug lifecycle và verify customer issues/fixes. | 3+ năm QA, Linux/Unix, shell/Python, API/UI automation, failure analysis, AI tools, model testing, LLM benchmarking. |
| 03 | Automation test API/backend/UI, shift-left, CI/CD, defect tracking, ML output validation, security/auth/API integration testing. | 5+ năm automation, Playwright, Cypress, RestAssured, Postman, Golang/TypeScript/Ruby/Python/Java, Docker. |
| 04 | Xây dựng automation framework cho OESIS, API/system/compatibility testing, CI integration, AI-driven test coverage và defect detection. | QA automation, Robot Framework/Python, API testing, Git/CI, Agile, AI/ML testing concepts. |
| 05 | Lập verification test plan, chạy simulation/emulation/FPGA, debug waveform, coverage analysis, formal verification và regression. | Verilog/SystemVerilog, UVM, Perl/Python/TCL, PCIe/USB/DDR, CDNS EDA. |
| 06 | Thực hiện manual/automation testing, automate functional/regression/performance tests, tăng end-to-end coverage. | API/web/mobile testing, Selenium/Playwright, C#/Java/JS/Python, Postman, Git, AI tools nice-to-have. |
| 07 | Đảm bảo game release không có critical bugs, test ads/data analytics/localization/ANR/UI/UX/performance/device compatibility. | Senior game testing, test checklist/suite/template, bug lifecycle, communication, ISTQB/ASTQB/ISO preferred. |
| 08 | Thiết lập QC process cho Salesforce CRM và AI solutions, automation framework, AI testing procedure và quality reporting. | 2-3 năm QC/QA, Selenium/Playwright/Cypress, API testing, Salesforce, AI tools, prompt regression, AI-system testing. |
| 09 | Data testing cho banking project, ETL testing, AWS data services, data warehouse và data quality framework. | Python/Rust/Go/Java, SQL, AWS Lambda/Glue/Athena/S3, Redshift, dbt, Great Expectations, Soda. |
| 10 | Test mobile/web app, hardware integration, sensor responsiveness, video recording stability và backend API integration. | 7+ năm QA, Selenium/Appium/XCUITest, REST API, Flutter, ReactJS, Flipper, Android Studio Profiler, Xcode Instruments. |

## 4. AI Impact Analysis

| ID | Phân tích tác động của AI |
| --- | --- |
| 01 | AI có thể tổng hợp defect trend, QA metrics và rủi ro release, nhưng QA manager vẫn cần quyết định strategy và mentoring. |
| 02 | AI làm QA mở rộng sang model testing và LLM benchmarking, đòi hỏi tester hiểu cả automation lẫn hành vi model. |
| 03 | ML/data validation cần oracle rõ ràng; AI có thể sinh test, nhưng QA phải xác định output đúng, an toàn và ổn định. |
| 04 | AI-first testing giúp tăng coverage và giảm bảo trì automation, nhưng generated/self-healing tests phải được review. |
| 05 | AI có thể hỗ trợ đọc log và gợi ý coverage gap, nhưng design verification cần bằng chứng kỹ thuật và domain knowledge. |
| 06 | AI tools hỗ trợ research, debugging, test snippets và documentation; QA vẫn phải kiểm tra output và bảo vệ dữ liệu nhạy cảm. |
| 07 | AI có thể sinh checklist ý tưởng, nhưng game QA cần playtesting thật, cảm nhận UX và kiểm tra device/performance. |
| 08 | QC cho AI solution cần test prompt regression, output quality, model degradation và AI-agent safety trước go-live. |
| 09 | AI có thể sinh SQL/data checks, nhưng data testing ngân hàng cần traceability và kết quả lặp lại được. |
| 10 | AI có thể gợi ý mobile automation và phân tích log profiler, nhưng senior QA phải verify trên device/sensor/performance thực. |

## 5. Đối chiếu requirement

- 10/10 tin là QA/QC/Tester/Verification/Data Test.
- 10/10 tin có link và screenshot trong repo.
- 10/10 tin có mô tả công việc và kỹ năng yêu cầu trong file `job-*.md`.
- >= 3 tin có AI/LLM/automation-AI rõ ràng: Job 02, Job 03, Job 04, Job 06, Job 08.
- Salary đã ghi theo JD: Job 03 có USD 1,800 - 2,000; Job 05 có up to USD 5,000; các job khác không công khai số cụ thể hoặc chỉ ghi competitive/attractive salary.

## 6. Review theo HW-Policies.md

| Hạng mục | Kết quả |
| --- | --- |
| Text-based artifacts | Đạt: Markdown và CSV đã được cập nhật. |
| Bảng tổng hợp trong Markdown | Đạt: có bảng 10 tin, mô tả/skills, AI impact. |
| Screenshot có account name | Đạt theo screenshot hiện có; sinh viên nên mở lại từng ảnh để kiểm tra lần cuối. |
| AI disclosure/audit | Đạt một phần: đã cập nhật AI Audit; sinh viên cần bổ sung lớp/khoa nếu nộp chính thức. |
| PDF khi nộp | Chưa thực hiện trong repo; cần export Markdown sang PDF. |
| Git versioning | Cần commit các artifact trước khi nộp. |
