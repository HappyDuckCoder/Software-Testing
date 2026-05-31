# AI Mindmap Review - G9.1 / Requirement 1

## 1. Muc tieu

Artifact nay bo sung bang chung cho AI CLO `G9.1 - Understand`: sinh vien yeu cau AI tao mindmap ve vai tro QA/QC trong thi truong 2026+, sau do review output cua AI, tim loi/sot thieu va viet ban sua. Noi dung nay lien quan Requirement 1 vi Requirement 1 phan tich thi truong viec lam QA/QC va tac dong cua AI len cac vai tro QA/QC.

## 2. Prompt + tool

| Muc | Noi dung |
| --- | --- |
| Tool | Codex / ChatGPT |
| Timestamp | 2026-05-31 ICT |
| Prompt | "Hay tao mot mindmap Markdown ve cac vai tro QA/QC 2026+ dua tren Requirement 1 cua HW01. Mindmap can gom manual QA, automation QA, SDET, data testing, AI/LLM testing, security QA, device/mobile QA, QA manager, cac ky nang chinh va tac dong cua AI. Sau do toi se review va tim it nhat 3 loi/sot thieu cua AI." |

## 3. AI output ban dau

```text
QA/QC Roles 2026+
├── Manual QA
│   ├── Test cases
│   ├── Exploratory testing
│   └── UI/UX feedback
├── Automation QA
│   ├── Selenium / Cypress / Playwright
│   ├── Regression automation
│   └── CI/CD
├── SDET
│   ├── Test framework development
│   ├── API testing
│   └── Performance testing
├── AI Testing
│   ├── Prompt testing
│   ├── LLM evaluation
│   └── Bias checking
├── Security QA
│   ├── Vulnerability scanning
│   └── Penetration testing
└── QA Manager
    ├── QA strategy
    ├── Team management
    └── Release decision
```

## 4. Verdict

Verdict: **INCOMPLETE**.

AI output dung o muc khung tong quan, nhung con qua chung chung so voi Requirement 1. Mindmap ban dau chua phan anh day du 10 job da thu thap, chua tach ro data testing/banking data validation, hardware/design verification, device/mobile QA, Salesforce/AI solution QC va game QA. Output cung co mot so diem de gay hieu nham ve vai tro AI trong QA/QC.

## 5. Ba loi / sot thieu AI tao ra va sinh vien da confirm

Cac muc M-01 den M-04 ben duoi la loi/sot thieu sinh ra tu **AI output ban dau** o muc 3. Sau khi doi chieu voi 10 job Requirement 1 va cac truong trong `job-summary.csv`, sinh vien confirm day la cac loi/sot thieu hop le va can sua trong ban mindmap cuoi.

| ID | Loi / sot thieu | Vi sao sai hoac chua du | Cach sua cua sinh vien |
| --- | --- | --- | --- |
| M-01 | AI gom `AI Testing` thanh mot nhanh nho va chi ghi prompt/LLM/bias. | Requirement 1 co nhieu dang AI/automation-AI: model testing, LLM benchmarking, prompt regression, AI-agent safety, AI coding assistant, AI-first automation. Neu chi ghi "AI Testing" se lam mat su khac nhau giua AI ho tro QA va QA kiem thu he thong AI. | Tach thanh `AI-assisted QA work` va `AI/LLM system testing`. |
| M-02 | AI bo sot `Data Test Engineer` va data-quality testing. | Job 09 la Data Test Engineer, co ETL/data warehouse/AWS/dbt/Great Expectations/Soda. Day la nhom viec QA/QC quan trong trong thi truong 2026+. | Them nhanh `Data / ETL Testing` voi SQL, data quality, traceability, deterministic checks. |
| M-03 | AI bo sot nhom physical/device/mobile/hardware verification. | Requirement 1 co Job 01 software/device manager, Job 05 design verification, Job 10 mobile/web + hardware/sensor integration. Neu bo sot se lam mindmap nghieng ve web/software QA truyen thong. | Them nhanh `Device / Mobile / Hardware QA` va `Design Verification`. |
| M-04 | AI ghi `Security QA -> penetration testing` qua manh so voi evidence. | Mot so job co security/API/auth testing, nhung khong phai tat ca yeu cau pentest. Ghi pentest nhu mac dinh co the lam sai JD. | Doi thanh `security-aware testing`, `auth/API integration`, `vulnerability awareness`, chi ghi pentest neu JD noi ro. |

## 6. Mindmap da sua

```text
QA/QC Job Market 2026+
├── Manual / Exploratory QA
│   ├── Test case design
│   ├── UI/UX and usability feedback
│   ├── Game QA / playtesting
│   └── Defect reporting and release confidence
├── Automation QA
│   ├── Web/API/mobile automation
│   ├── Selenium / Playwright / Cypress / Appium
│   ├── Regression testing and CI/CD
│   └── Maintainable test framework design
├── SDET / Software QA Development
│   ├── Test framework development
│   ├── Linux / shell / Python / API testing
│   ├── Failure analysis
│   └── Customer issue reproduction and verification
├── AI-assisted QA work
│   ├── AI coding assistants for test snippets
│   ├── AI support for debugging and documentation
│   ├── AI-generated tests must be reviewed
│   └── Data privacy and prompt hygiene
├── AI / LLM System Testing
│   ├── Model testing and LLM benchmarking
│   ├── Prompt regression
│   ├── AI output quality evaluation
│   ├── Bias / hallucination checks
│   └── AI-agent safety
├── Data / ETL Testing
│   ├── SQL validation
│   ├── ETL and data warehouse checks
│   ├── Data quality tools
│   └── Traceable and reproducible evidence
├── Device / Mobile / Hardware QA
│   ├── Device integration
│   ├── Sensor responsiveness
│   ├── Mobile automation and profiler logs
│   └── Long-session stability
├── Design Verification
│   ├── UVM / SystemVerilog
│   ├── Simulation / emulation / FPGA
│   ├── Waveform debugging
│   └── Coverage and formal verification
├── Security-aware QA
│   ├── Auth and API security scenarios
│   ├── Security-sensitive integrations
│   ├── Vulnerability awareness
│   └── Escalate to security specialists when needed
└── QA Manager / Lead
    ├── QA strategy and process
    ├── Metrics and reporting
    ├── Risk-based release decisions
    ├── Mentoring QA team
    └── Balance AI support with human judgment
```

## 7. Mapping voi CLO / Bloom-AI

| CLO | Bang chung | Trang thai |
| --- | --- | --- |
| G9.1 - Understand | AI tao mindmap QA/QC role; sinh vien review va sua loi M-01 den M-04 | Dat |

## 8. Ket luan

AI co ich de tao khung mindmap nhanh, nhung output ban dau de thieu cac vai tro co tinh chuyen nganh nhu Data Test Engineer, Design Verification, Device/Mobile QA va AI-agent safety. Sau khi doi chieu 10 job trong Requirement 1, ban sua cua sinh vien phan anh thi truong QA/QC 2026+ sat hon: QA khong chi la manual/automation, ma con gom data, AI/LLM, hardware/device, security-aware testing va vai tro quan ly chat luong.
