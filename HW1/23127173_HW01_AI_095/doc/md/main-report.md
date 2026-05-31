# HW01-AI Main Report

## 1. Thong tin chung

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Trần Hải Đức |
| Student ID | 23127173 |
| Ma bai tap | HW01-AI |
| Mon hoc | Software Testing |
| Giang vien / Tro giang | Dr. Lam Quang Vu; Dr. Tran Duy Hoang; MSc. Tran Thi Bich Hanh; MSc. Truong Phuoc Loc; MSc. Ho Tuan Thanh |
| Ngay cap nhat report | 2026-05-31 |
| AI policy | Open, bat buoc khai bao va dinh kem AI Audit Report |

## 2. Tom tat artifact nop bai

| Nhom artifact | Duong dan |
| --- | --- |
| Requirement 1 report | `HW1/23127173_HW01_AI_095/requirement/requirement1/requirement1.md` |
| Requirement 1 job data | `HW1/23127173_HW01_AI_095/requirement/requirement1/jobs-data/` |
| Requirement 1 AI Mindmap Review | `HW1/23127173_HW01_AI_095/requirement/requirement1/AI-Mindmap-Review/ai-mindmap-review.md` |
| Requirement 2 report | `HW1/23127173_HW01_AI_095/requirement/requirement2/requirement2.md` |
| Requirement 3 report | `HW1/23127173_HW01_AI_095/requirement/requirement3/requirement3.md` |
| Requirement 3 device evidence | `HW1/23127173_HW01_AI_095/requirement/requirement3/devices/devices.jpg` |
| Requirement 3 video links | `HW1/23127173_HW01_AI_095/requirement/requirement3/video-youtube-test/link-video.md` |
| Requirement 3 AI screenshot | `HW1/23127173_HW01_AI_095/requirement/requirement3/screenshot-AI/screenshot-chat-ai.png` |
| Requirement 3 GitHub Issue drafts | `HW1/23127173_HW01_AI_095/requirement/requirement3/github-issues/` |
| Requirement 3 GitHub Issues screenshots | `HW1/23127173_HW01_AI_095/requirement/requirement3/github-issues/screenshot-defect/` |
| AI Audit Report | `HW1/23127173_HW01_AI_095/doc/md/AI Audit/01_AI-Audit-Report.md` |
| AI Critique | `HW1/23127173_HW01_AI_095/doc/md/AI Audit/02_AI-Critique.md` |
| Mandatory Disclosure | `HW1/23127173_HW01_AI_095/doc/md/AI Audit/03_Mandatory-Disclosure.md` |
| AI Privacy Checklist | `HW1/23127173_HW01_AI_095/doc/md/AI Audit/04_AI-Privacy-Checklist.md` |
| Prompt log | `HW1/23127173_HW01_AI_095/doc/md/appendixA-prompt-log.md` |
| Submission checklist | `HW1/23127173_HW01_AI_095/checklist.md` |

## 3. Requirement 1 - Nội dung đầy đủ

Phần này chép đầy đủ nội dung từ equirement/requirement1/requirement1.md để main report tự chứa nội dung Requirement 1, không chỉ trỏ link artifact.

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

## 4. Requirement 2 - Nội dung đầy đủ

Phần này chép đầy đủ nội dung từ equirement/requirement2/requirement2.md để main report tự chứa nội dung Requirement 2, không chỉ trỏ link artifact.

# Requirement 2 - 20 lỗi phần mềm công khai giai đoạn 2022-2026

## 1. Phạm vi

Yêu cầu: tìm 20 lỗi phần mềm công khai trong giai đoạn 2022-2026. Mỗi lỗi cần có source link, mô tả, severity, hậu quả, giải pháp và một trường hợp AI có thể bị bias hoặc hallucinate khi giải thích lỗi đó. Danh sách ưu tiên các lỗi có nguồn công khai, bao gồm security vulnerability, outage, cloud misconfiguration, AI hallucination, prompt injection, AI bias và data exposure.

## 2. Bảng tổng hợp 20 lỗi

| ID | Năm | Lỗi / sự cố | Source | Mô tả | Severity | Hậu quả | Giải pháp | AI bias / hallucination khi giải thích |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 2024 | CrowdStrike Falcon Channel File 291 outage | [CrowdStrike RCA](https://www.crowdstrike.com/en-us/blog/channel-file-291-rca-available/) | Bản cập nhật Rapid Response Content cho Falcon Sensor trên Windows gây crash hàng loạt. | Critical | Nhiều máy Windows bị BSOD, ảnh hưởng hàng không, y tế, ngân hàng, logistics. | Bổ sung staged rollout, canary, validation nội dung, rollback tự động, test negative case cho content update. | AI dễ hallucinate rằng đây là cyberattack của Microsoft; sự thật là defect trong content update của CrowdStrike. |
| 02 | 2023 | FAA NOTAM outage | [ABC News](https://abcnews.go.com/US/faa-unintentionally-deleted-files-led-notam-computer-system/story?id=96557442) | File bị xóa ngoài ý muốn khi đồng bộ giữa live database và backup database của NOTAM. | Critical | Tạm dừng/chậm trễ hàng nghìn chuyến bay tại Mỹ. | Kiểm soát quyền thay đổi, backup/restore rehearsal, change approval, database synchronization test. | AI có thể bias do "aging system" và bỏ qua lỗi thao tác/change management cụ thể. |
| 03 | 2022 | Atlassian Confluence CVE-2022-26134 | [Atlassian FAQ](https://support.atlassian.com/atlassian-knowledge-base/kb/faq-for-cve-2022-26134/) | OGNL injection cho phép unauthenticated RCE trên Confluence Server/Data Center. | Critical | Máy chủ bị chiếm quyền, cài webshell, đào tiền ảo, lấy dữ liệu nội bộ. | Nâng cấp phiên bản và áp dụng mitigation, WAF rule, IOC scanning, rotate secrets. | AI có thể hallucinate đây là lỗi XSS vì cùng liên quan input injection; cần nói rõ là OGNL injection/RCE. |
| 04 | 2022 | OpenSSL CVE-2022-3602 / CVE-2022-3786 | [Cisco advisory](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-openssl-W9sdCc2a) | Buffer overflow trong xử lý X.509 email address của OpenSSL 3.0. | High | Có thể gây DoS hoặc rủi ro RCE tùy môi trường. | Cập nhật OpenSSL, inventory sản phẩm phụ thuộc, rebuild container/base image. | AI có thể hallucinate đây là "Heartbleed 2"; thực tế khác CVE, khác cơ chế và phạm vi. |
| 05 | 2023 | MOVEit Transfer CVE-2023-34362 | [CERT-EU](https://cert.europa.eu/publications/security-advisories/2023-033/) | SQL injection trong MOVEit Transfer web app bị khai thác để truy cập/lấy dữ liệu. | Critical | Data exfiltration trên nhiều tổ chức, tống tiền/ransomware extortion. | Patch khẩn cấp, disable public access, forensic scan, rotate credentials, DLP và monitoring. | AI có thể hallucinate rằng lỗi nằm ở SFTP encryption; nguyên nhân chính là SQL injection web app. |
| 06 | 2024 | XZ Utils backdoor CVE-2024-3094 | [CISA alert](https://www.cisa.gov/news-events/alerts/2024/03/29/reported-supply-chain-compromise-affecting-xz-utils-data-compression-library-cve-2024-3094) | Mã độc/backdoor được chèn vào XZ Utils/liblzma 5.6.0/5.6.1, có thể ảnh hưởng sshd trong một số distro. | Critical | Rủi ro remote unauthorized access trên Linux bị ảnh hưởng. | Roll back về phiên bản an toàn, pin dependency, verify tarball/source, harden maintainer review. | AI có thể bias quy lỗi cho "open-source kém an toàn"; bài học đúng hơn là cần supply-chain governance và maintainer support. |
| 07 | 2023 | Toyota cloud misconfiguration data exposure | [TechCrunch](https://techcrunch.com/2023/05/31/toyota-customer-data-leak-years/) | Cấu hình cloud sai làm dữ liệu khách hàng/connected-car có thể truy cập từ bên ngoài trong thời gian dài. | High | Dữ liệu xe/khách hàng bị lộ, ảnh hưởng quyền riêng tư và uy tín. | Cloud posture management, least privilege, public bucket detection, secrets scanning, periodic audit. | AI có thể hallucinate đây là hack có chủ đích; nguồn công khai nói rõ là misconfiguration. |
| 08 | 2023 | ChatGPT Redis bug exposed chat/payment data | [OpenAI-related analysis](https://safeguard.sh/resources/blog/openai-chatgpt-data-breach-march-2023) | Bug trong redis-py/client pooling làm một số user thấy tiêu đề chat và một phần thông tin thanh toán của user khác. | High | Lộ tiêu đề chat và payment metadata của một tập user ChatGPT Plus. | Tắt service để fix, patch library, test race condition, cache isolation, postmortem và user notification. | AI có thể hallucinate rằng model "tự tiết lộ" dữ liệu huấn luyện; lỗi thật là bug hệ thống/cache. |
| 09 | 2024 | Google Gemini image generation bias | [Google blog](https://blog.google/products/gemini/gemini-image-generation-issue/) | Gemini tạo ảnh người sai do áp dụng cân bằng diversity quá mức trong prompt lịch sử/cụ thể. | Medium | Mất lòng tin, phải tạm dừng tính năng tạo ảnh người. | Context-aware safety rules, test bias theo prompt lịch sử, human review, evaluation dataset đa chiều. | AI có thể bias giải thích rằng "diversity là lỗi"; vấn đề thật là áp dụng rule không đúng ngữ cảnh. |
| 10 | 2024 | Air Canada chatbot hallucinated refund policy | [AI hallucination overview](https://en.wikipedia.org/wiki/Hallucination_%28artificial_intelligence%29) | Chatbot đưa thông tin sai về chính sách bereavement fare/refund, dẫn đến tranh chấp pháp lý. | High | Air Canada bị yêu cầu chịu trách nhiệm với thông tin chatbot đưa ra. | RAG với nguồn policy chính xác, response citation, guardrail, escalation to human, policy regression tests. | Đây là hallucination trực tiếp: AI tạo/chọn sai policy và trình bày như thông tin chính thức. |
| 11 | 2024 | DPD chatbot jailbreak / prompt injection | [TIME](https://time.com/6564726/ai-chatbot-dpd-curses-criticizes-company/) | Chatbot hỗ trợ khách hàng bị người dùng prompt để nói tục, chê công ty và viết thơ xấu về DPD. | Medium | Ảnh hưởng thương hiệu, DPD phải disable một phần chatbot. | Prompt-injection hardening, output moderation, role constraints, safe fallback, human handoff. | AI có thể hallucinate rằng chatbot "tự nói tục"; thực tế bị prompt/jailbreak sau update lỗi. |
| 12 | 2023 | Chevrolet dealer chatbot agreed to $1 Tahoe | [Slashdot](https://entertainment.slashdot.org/story/23/12/21/0518215/car-buyer-hilariously-tricks-chevy-ai-bot-into-selling-a-tahoe-for-1) | Chatbot đại lý xe bị prompt để đồng ý bán Tahoe với giá $1 và nói đó là offer ràng buộc. | Medium | Viral, ảnh hưởng thương hiệu, chatbot bị gỡ bỏ. | Không cho LLM tự báo giá/tạo hợp đồng, rule-based boundary, tool permission, legal disclaimer. | AI có thể hallucinate rằng đây là hợp đồng hợp pháp; bot không có thẩm quyền pháp lý để bán xe. |
| 13 | 2023 | Samsung employees leaked confidential data to ChatGPT | [OECD.AI incident](https://oecd.ai/en/incidents/2023-04-06-93c9) | Nhân viên đưa source code, data nội bộ, meeting notes vào ChatGPT để hỗ trợ công việc. | High | Lộ thông tin sở hữu trí tuệ/bảo mật nội bộ, Samsung phải siết chặt chính sách AI. | Enterprise AI policy, DLP, prompt logging, private model/on-prem, employee training. | AI có thể bias đổ lỗi hoàn toàn cho ChatGPT; sự cố là shadow-AI/process control và user data handling. |
| 14 | 2023 | Microsoft AI researchers exposed 38TB via SAS token | [Windows Central](https://www.windowscentral.com/microsoft/microsofts-ai-research-team-mistakenly-leaked-38tb-of-the-companys-private-data) | Link GitHub chia sẻ training data chứa SAS token quá rộng, làm lộ storage chứa dữ liệu riêng tư. | High | 38TB dữ liệu riêng tư nội bộ có thể bị truy cập/sửa/xóa. | Least-privilege SAS, short-lived token, secret scanning, CI policy, private datasets, access review. | AI có thể hallucinate đây là model leak; thực tế là cloud access-token misconfiguration của nhóm AI. |
| 15 | 2024 | Microsoft Recall privacy/security design issue | [Axios](https://www.axios.com/2024/06/14/microsoft-recall-delay-privacy) | Recall chụp snapshot màn hình liên tục để tìm kiếm bằng AI, gây lo ngại về việc lưu mật khẩu/thông tin nhạy cảm. | High | Microsoft trì hoãn rollout, bị chỉ trích về privacy/security. | Opt-in, encryption, local auth, sensitive-data filtering, red-team, privacy threat modeling. | AI có thể bias khen "on-device nên an toàn"; thực tế on-device vẫn có rủi ro nếu malware/user khác truy cập dữ liệu. |
| 16 | 2024 | Polyfill.io supply-chain attack | [Qualys](https://blog.qualys.com/vulnerabilities-threat-research/2024/06/28/polyfill-io-supply-chain-attack) | Dịch vụ CDN Polyfill.io bị thay đổi/chèn JavaScript độc sau thay đổi quyền sở hữu domain. | Critical | Hàng trăm nghìn website có nguy cơ redirect/malware supply-chain. | Remove polyfill.io, self-host, SRI/CSP, dependency inventory, third-party script monitoring. | AI có thể hallucinate rằng do npm package lỗi; thực tế là third-party CDN/domain supply-chain. |
| 17 | 2025 | DeepSeek exposed database with chat history/API data | [Axios](https://www.axios.com/newsletters/axios-codebook-a5e18a20-de7b-11ef-9904-8da47faf9dae) | Database DeepSeek bị để lộ public, chứa chat history, secret keys, backend details. | High | Lộ prompt, token/API, thông tin nội bộ và rủi ro privacy người dùng. | Auth cho database, network isolation, secret rotation, logging hygiene, cloud security review. | AI có thể bias theo chính trị về "AI Trung Quốc"; phân tích đúng nên tập trung vào misconfigured database. |
| 18 | 2023 | 23andMe credential stuffing/data exposure | [23andMe blog](https://blog.23andme.com/articles/addressing-data-security-concerns) | Attacker dùng credential stuffing để vào tài khoản user, sau đó lấy thông tin DNA Relatives/profile. | High | Dữ liệu cá nhân/genetic của hàng triệu người bị ảnh hưởng. | MFA bắt buộc, password reset, rate limiting, bot detection, anomaly detection, data minimization. | AI có thể hallucinate rằng 23andMe bị SQL injection; công ty nói không có bằng chứng incident trong hệ thống của họ. |
| 19 | 2023 | CitrixBleed CVE-2023-4966 | [CISA guidance](https://www.cisa.gov/guidance-addressing-citrix-netscaler-adc-and-gateway-vulnerability-cve-2023-4966-citrix-bleed) | NetScaler ADC/Gateway vulnerability làm rò rỉ session token, bị khai thác trong thực tế. | Critical | Session hijacking, ransomware/LockBit activity, truy cập trái phép vào mạng. | Patch, terminate active sessions, rotate credentials/tokens, IOC hunting, segmentation. | AI có thể hallucinate rằng patch là đủ; với CitrixBleed cần kill sessions/rotate token vì token đã bị lấy. |
| 20 | 2024 | OpenSSH regreSSHion CVE-2024-6387 | [Qualys](https://www.qualys.com/regresshion-cve-2024-6387) | Regression trong OpenSSH sshd signal handler race condition có thể dẫn đến unauthenticated RCE/root trên Linux glibc. | Critical | Remote attacker có thể có root access trên hệ thống bị ảnh hưởng. | Upgrade OpenSSH, giảm LoginGraceTime/limit exposure, network restrictions, asset scan. | AI có thể hallucinate rằng đây là lỗi SSH mới hoàn toàn; nó là regression của một lỗi đã từng được patch năm 2006. |

## 3. Thống kê Requirement 2

- Tổng số lỗi: 20.
- Giai đoạn: 2022-2026.
- Số lỗi liên quan AI/LLM rõ ràng: 9/20, gồm ID 08, 09, 10, 11, 12, 13, 14, 15, 17.
- Nhóm AI/LLM bao gồm hallucination, prompt injection/jailbreak, bias, data exposure và AI privacy/security design.
- Mỗi lỗi đều có trường `AI bias / hallucination khi giải thích` theo yêu cầu mới.

## 4. Nhận xét tổng kết

Các lỗi trong giai đoạn 2022-2026 cho thấy QA/QC hiện đại không chỉ kiểm thử chức năng, mà còn phải kiểm thử bảo mật, dữ liệu, quy trình triển khai, supply chain và hành vi AI. Với các hệ thống AI/LLM, lỗi thường không chỉ nằm ở code mà còn nằm ở prompt, dữ liệu truy xuất, guardrail, quyền truy cập công cụ, chính sách riêng tư và khả năng giải thích sai của model. Vì vậy, QA cần kết hợp test case truyền thống với threat modeling, data validation, red-team prompt testing và monitoring sau triển khai.

## 5. Requirement 3 - Nội dung đầy đủ

Phần này chép đầy đủ nội dung từ equirement/requirement3/requirement3.md để main report tự chứa nội dung Requirement 3, không chỉ trỏ link artifact.

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
## 6. AI CLO / Bloom-AI

| CLO | Yeu cau | Bang chung | Trang thai |
| --- | --- | --- | --- |
| G9.1 - Understand | Yeu cau AI tao mindmap QA/QC role va sinh vien tim loi | `requirement/requirement1/AI-Mindmap-Review/ai-mindmap-review.md` | Dat |
| G9.3 - Analyse | Phan tich output AI va tim >= 3 edge case AI bo sot | TC-16, TC-17, TC-18 va `screenshot-AI/screenshot-chat-ai.png` | Dat |

Trong mindmap review, AI output ban dau bo sot Data Test Engineer, Design Verification, Device/Mobile QA va phan biet AI-assisted QA voi AI/LLM system testing. Sinh vien da confirm cac loi/sot thieu nay sau khi doi chieu 10 job Requirement 1 va viet ban mindmap da sua.

## 7. AI Audit Summary

| Chi so | Ket qua |
| --- | --- |
| Tong artifact AI sinh da audit | 19 |
| VALID | 0 |
| INVALID | 0 |
| INCOMPLETE | 19 |

Tat ca artifact AI duoc danh dau `INCOMPLETE` vi AI chi duoc dung de tao draft, chuan hoa format, tong hop va goi y. Sinh vien phai xac minh bang chung goc: screenshot job, source link, video, anh thiet bi, actual result va defect evidence.

## 8. AI Critique

Trong HW01, AI huu ich nhat o vai tro bien tap va cau truc hoa: no giup chuan hoa 10 JD Requirement 1 thanh Markdown/CSV, tong hop 20 software defects cho Requirement 2, de xuat test case cho remote dieu hoa trong Requirement 3, tao khung mindmap G9.1, chuyen defect log thanh draft GitHub Issues, cap nhat report sau khi sinh vien bo sung screenshot GitHub Issues that, nhung day du noi dung Requirement 1/2/3 vao main report, va dong bo ban TeX/PDF tu Markdown. Tuy nhien, audit cho thay 19/19 artifact deu chi nen xem la **INCOMPLETE** cho den khi sinh vien xac minh bang chung goc. AI co the viet mach lac, nhung khong nhin thay day du screenshot, khong dam bao link con dung, khong tu chay test tren thiet bi that, va khong the tao thay evidence bi cam nhu anh thiet bi, video, actual result, GitHub Issues that hay defect proof.

AI sai chu yeu o ba diem. Thu nhat, AI de suy luan qua muc khi JD khong noi ro, vi du gan nhan AI skill cho automation hoac dien giai salary khong cong khai. Thu hai, AI co bias ve cac mau QA pho bien tren web/software, nen mindmap ban dau bo sot data testing, design verification, device/mobile QA va AI-agent safety; sinh vien da confirm cac sot thieu nay la loi hop le sau khi doi chieu 10 job. Thu ba, voi remote dieu hoa, AI tao test case dep theo nut bam nhung bo qua trang thai vat ly/tien dieu kien nhu may dang tat, chuyen Cool sang Dry, va Baby Care khoa cau hinh.

Bai hoc la khong dung AI nhu nguon su that cuoi cung. Cach cong tac dung la: de AI tao draft, tach output AI khoi evidence goc, doi chieu voi screenshot/link/thiet bi that, ghi verdict audit, va chi ket luan Pass/Fail/defect khi co quan sat thuc te. AI tang toc do, nhung trach nhiem chat luong va liem chinh van thuoc ve sinh vien.

## 9. Mandatory Disclosure

"Requirement 1 dataset, Requirement 2 software-defect dataset, Requirement 3 test-design draft, summary tables, CSV, mindmap review, checklist, main report, LaTeX translation draft, GitHub Issue draft text, and draft report sections were generated and formatted with assistance from Codex / ChatGPT and Claude. I provided or corrected source job details for Requirement 1, reviewed the generated Requirement 2 defect list, sources, severity, consequences, fixes, and AI bias/hallucination notes, and reviewed/modified the Requirement 3 remote-air-conditioner test cases. I added student-found edge cases TC16, TC17, and TC18 about off-state feature buttons, Cool-to-Dry fan adjustment, and Baby Care fixed configuration. The LinkedIn screenshots, source links, physical device photo, videos, actual results, real GitHub Issues, GitHub Issues screenshot, and defect evidence are collected or verified manually by me. The detailed AI Audit Report is attached in `doc/md/AI Audit/01_AI-Audit-Report.md`. I confirm I did not use AI to generate any prohibited artifact, including job posting screenshots with account name, physical device photos, videos, GitHub Issues screenshots, or fake evidence."

## 10. Privacy & Responsible Use

- [x] Bai tap cho phep dung AI theo policy Open, nhung bat buoc khai bao.
- [x] Moi prompt chinh da duoc ghi trong `appendixA-prompt-log.md`.
- [x] Moi artifact AI ho tro da co dong trong AI Audit Report.
- [x] Khong dung AI tao screenshot job, anh thiet bi + the sinh vien, video test, actual result hoac defect evidence.
- [x] GitHub Issue drafts do AI ho tro chi la ban nhap; issue that va screenshot username phai do sinh vien tao/kiem tra thu cong.
- [x] Cac truong chua xac minh duoc duoc ghi ro nhu `Not disclosed` hoac `Not visible`.
- [x] Can kiem tra lan cuoi quyen truy cap video YouTube, source link, screenshot account name va GitHub Issues truoc khi nop.

## 11. Self-assessment theo rubric

| Muc | Noi dung | Diem toi da | Tu danh gia | Ghi chu |
| --- | --- | --- | --- | --- |
| 1 | Job Market 2026+ | 40 | 38 | Da co 10 job, screenshot, source, CSV, AI impact; mot so muc salary/not disclosed va screenshot can tu kiem tra lan cuoi. |
| 2 | Software Defects 2022-2026 | 20 | 20 | Da co 20 defect cong khai, source, severity, hau qua, giai phap va AI bias/hallucination note. |
| 3 | Physical-product test design | 25 | 22 | Da co thiet bi, anh, 18 test case, 5 video, GitHub Issues va screenshot username; rui ro chinh la moi co 4 confirmed defects thay vi muc tieu >= 5. |
| AI-1 | AI Audit Report | 8 | 8 | Da co AI Audit Report va log artifact AI ho tro, tong cong 19 artifact. |
| AI-2 | AI Critique + Disclosure | 4 | 4 | Da co critique, mandatory disclosure va khai bao AI. |
| AI-3 | AI Checklist + anti-cheat artifacts | 3 | 3 | Da co checklist, privacy checklist, prompt log, anh/video/screenshot evidence that. |
| Tong |  | 100 | 95 | Tu danh gia de xuat: 95/100. |

## 12. Cam doan va chu ky

Toi cam doan cac bang chung bi cam AI tao, bao gom screenshot job co account name, anh thiet bi + the sinh vien, video test, actual result va defect evidence, khong duoc tao bang AI. Cac phan AI ho tro da duoc khai bao trong AI Audit Report va Appendix A Prompt Log.

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Trần Hải Đức |
| Student ID | 23127173 |
| Ngay ky | 2026-05-31 |
| Chu ky | Trần Hải Đức |

