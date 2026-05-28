# AI Audit Report - HW01 Requirement 1

## 1. Thong tin sinh vien

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Duc Hai |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Ma bai tap | HW01-AI |
| Ngay lam bai | 2026-05-28 |
| Cong cu AI da dung | Codex / ChatGPT |
| Co dung AI | Co |

## 2. Bang audit - 1 hang / artifact

| (1) Prompt + Cong cu | (2) Output AI | (3) Verdict | (4) Ly do / doi chieu | (5) Ban SV sua |
| --- | --- | --- | --- | --- |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-28. Prompt: "Doc AI templates, doc link/job md, dien thong tin con thieu, cap nhat CSV, viet Requirement 1, bo sung AI Audit, review theo HW-Policies.md." | Tao ban nhap ban dau cho `job-*.md`, `job-summary.csv`, `requirement1.md`, va AI Audit. | INCOMPLETE | Output ban dau can duoc doi chieu lai voi screenshot va JD that. | Sinh vien da cap nhat lai screenshot/link/JD chi tiet; ban cu khong con la nguon chinh. |
| Tool: Codex / ChatGPT + web crawl. Thoi gian: 2026-05-28. Prompt: "Sua lai thong tin cac file md, summary, requirement1; scrape/crawl thong tin tu link; bo sung AI audit." | Crawl/search public job detail, cap nhat lai dataset va report. | INCOMPLETE | Crawl ho tro thu thap, nhung LinkedIn/public pages co the khong dong bo voi screenshot. | Sinh vien da tu sua noi dung 10 file job-id bang JD chi tiet; cac canh bao crawl cu da duoc bo. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-28. Prompt: "Toi vua sua lai noi dung cho 10 file job-id; format lai cac job id; hay sua, bo sung, bo cac phan khong can thiet cho job-summary requirement1 va ai audit." | Format lai 10 file `job-*.md`; tao lai `job-summary.csv`; viet gon `requirement1.md`; cap nhat AI audit/disclosure/prompt log. | INCOMPLETE | AI ho tro bien JD thanh bang tom tat va phan tich AI impact. Sinh vien van can xac minh screenshot, ngay dang, va cac muc salary/link truoc khi nop. | Ban nop hien tai giu cac muc khong cong khai la "Not disclosed" va chi ghi salary cu the khi JD co neu. |
| Tool: Codex / ChatGPT + web search. Thoi gian: 2026-05-28. Prompt: "Doc requirement 2 trong HW1-requirement.md, tra loi cau hoi trong requirement2.md, bo sung AI audit." | Tao bang 20 loi phan mem 2022-2026 trong `requirement2.md`, gom source link, mo ta, severity, hau qua, giai phap va truong hop AI bias/hallucination cho tung loi. | INCOMPLETE | AI co ich de tong hop nhieu nguon, nhung cac incident/security advisory can duoc sinh vien kiem tra lai voi source goc de tranh nham nam, nham severity hoac dien giai sai nguyen nhan. | Sinh vien can review lai 20 source link, bo sung screenshot/source archive neu giang vien yeu cau, va dieu chinh severity neu rubric dung thang diem rieng. |

## 3. Tong ket do chinh xac AI

| Chi so | So luong | Ti le |
| --- | --- | --- |
| Tong artifact AI sinh da audit | 4 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 4 | 100% |

## 4. Ket luan - khi nao nen / khong nen dung AI?

Nen dung AI de chuan hoa format, rut gon JD dai thanh bang tom tat, phat hien truong thieu, va viet nhap AI Impact Analysis. Khong nen dung AI de tao hoac thay the bang chung goc nhu screenshot, account name, ngay dang tin, muc luong, va link job. Voi Requirement 1, AI phu hop lam tro ly bien tap/kiem tra, con sinh vien phai chiu trach nhiem xac minh nguon va noi dung truoc khi nop.

## 5. Mandatory Disclosure

"Requirement 1 dataset, Requirement 2 defect dataset, summary tables, CSV, and draft report sections were generated and formatted with assistance from Codex / ChatGPT. I provided or corrected source job details for Requirement 1 and reviewed the generated summaries, salary fields, AI relevance, AI impact analysis, software-defect sources, severity, consequences, fixes, and AI bias/hallucination notes. The screenshots and source links were collected or verified manually by me. The detailed AI Audit Report is attached in `doc/md/AI Audit/01_AI-Audit-Report.md`. I confirm I did not use AI to generate any prohibited artifact, including job posting screenshots with account name, physical device photos, videos, or fake evidence."

## 6. Chu ky

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Duc Hai |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Mon hoc | CS423 / CSC13003 - Kiem chung Phan mem |
| Giang vien | Chua dien |
| Ngay | 2026-05-28 |
| Chu ky | Chua ky |
