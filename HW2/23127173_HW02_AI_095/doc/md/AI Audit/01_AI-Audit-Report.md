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

## 3. Tong ket do chinh xac AI

| Chi so | So luong | Ti le |
| --- | ---: | ---: |
| Tong artifact AI sinh da audit | 6 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 6 | 100% |

## 4. Ket luan - khi nao nen / khong nen dung AI?

Nen dung AI de lap roadmap, tao khung bao cao, chuan hoa bang test case, goi y phan vung domain, tim boundary ung vien va nhac cac deliverable de thieu. Khong nen dung AI de thay the viec hieu feature, chay SUT, xac nhan actual result, tao bug evidence, tao GitHub Issues that, hoac quyet dinh feature da dat yeu cau. Voi HW02, AI phu hop vai tro tro ly co kiem soat; sinh vien phai review, thuc thi, sua va chiu trach nhiem cuoi cung.

## 5. Mandatory Disclosure draft

"The roadmap, report structure, checklist, prompt log, Agent Skills, Feature A test design, and AI Audit entries were generated with assistance from Codex / ChatGPT. I reviewed and will modify the feature selection, testing method, executed results, bug reports, AI gap analysis, Agent Skill demo, and final report. Actual test execution, screenshots, GitHub Issues, videos, and final judgments are verified by me. The detailed AI Audit Report is attached as Appendix A."

## 6. Chu ky

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Tran Hai Duc |
| MSSV | 23127173 |
| Mon hoc | CS423 / CSC13003 - Kiem chung Phan mem |
| Giang vien / Tro giang | Dr. Lam Quang Vu; Dr. Tran Duy Hoang; MSc. Tran Thi Bich Hanh; MSc. Truong Phuoc Loc; MSc. Ho Tuan Thanh |
| Ngay | 2026-07-08 |
| Chu ky | Tran Hai Duc |
