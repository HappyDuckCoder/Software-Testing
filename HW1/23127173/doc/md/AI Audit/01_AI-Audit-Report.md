# AI Audit Report - HW01

## 1. Thong tin sinh vien

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Duc Hai |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Ma bai tap | HW01-AI |
| Ngay cap nhat | 2026-05-31 |
| Cong cu AI da dung | Codex / ChatGPT |
| Co dung AI | Co |

## 2. Bang audit - 1 hang / artifact

| (1) Prompt + Cong cu | (2) Output AI | (3) Verdict | (4) Ly do / doi chieu | (5) Ban SV sua |
| --- | --- | --- | --- | --- |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-28. Prompt: "Doc AI templates, doc link/job md, dien thong tin con thieu, cap nhat CSV, viet Requirement 1, bo sung AI Audit, review theo HW-Policies.md." | Tao ban nhap ban dau cho `job-*.md`, `job-summary.csv`, `requirement1.md`, va AI Audit. | INCOMPLETE | Output ban dau can duoc doi chieu lai voi screenshot va JD that. | Sinh vien da cap nhat lai screenshot/link/JD chi tiet; ban cu khong con la nguon chinh. |
| Tool: Codex / ChatGPT + web crawl. Thoi gian: 2026-05-28. Prompt: "Sua lai thong tin cac file md, summary, requirement1; scrape/crawl thong tin tu link; bo sung AI audit." | Crawl/search public job detail, cap nhat lai dataset va report. | INCOMPLETE | Crawl ho tro thu thap, nhung LinkedIn/public pages co the khong dong bo voi screenshot. | Sinh vien da tu sua noi dung 10 file job-id bang JD chi tiet; cac canh bao crawl cu da duoc bo. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-28. Prompt: "Toi vua sua lai noi dung cho 10 file job-id; format lai cac job id; hay sua, bo sung, bo cac phan khong can thiet cho job-summary requirement1 va ai audit." | Format lai 10 file `job-*.md`; tao lai `job-summary.csv`; viet gon `requirement1.md`; cap nhat AI audit/disclosure/prompt log. | INCOMPLETE | AI ho tro bien JD thanh bang tom tat va phan tich AI impact. Sinh vien van can xac minh screenshot, ngay dang, va cac muc salary/link truoc khi nop. | Ban nop hien tai giu cac muc khong cong khai la "Not disclosed" va chi ghi salary cu the khi JD co neu. |
| Tool: Codex / ChatGPT + web search. Thoi gian: 2026-05-28. Prompt: "Doc requirement 2 trong HW1-requirement.md, tra loi cau hoi trong requirement2.md, bo sung AI audit." | Tao bang 20 loi phan mem 2022-2026 trong `requirement2.md`, gom source link, mo ta, severity, hau qua, giai phap va truong hop AI bias/hallucination cho tung loi. | INCOMPLETE | AI co ich de tong hop nhieu nguon, nhung cac incident/security advisory can duoc sinh vien kiem tra lai voi source goc de tranh nham nam, nham severity hoac dien giai sai nguyen nhan. | Sinh vien can review lai 20 source link, bo sung screenshot/source archive neu giang vien yeu cau, va dieu chinh severity neu rubric dung thang diem rieng. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-31. Prompt: "Doc requirement 3 trong HW1-requirement.md, doc cac audit cu va appendix, lam requirement3 cho remote dieu hoa trong anh, bo sung appendix/AI audit, check lai policy." | Tao ban thiet ke `requirement3.md` cho remote dieu hoa: khai bao thiet bi, 15 test case, de xuat 5 video, defect candidates, va 3 edge cases AI de bo sot. | INCOMPLETE | Theo ISTQB, test case can co tien dieu kien, input, steps, expected result, actual result va verdict; AI co the thiet ke test nhap, nhung khong the thay the viec chay tren san pham vat ly. Requirement cung cam AI tao anh thiet bi, video va screenshot minh chung, nen artifact nay chi la ban thiet ke. | Sinh vien da bo sung hang/model va anh remote + the sinh vien; van can quay >= 5 video, cap nhat Actual/Verdict sau khi chay, va chi log defect khi tai hien tren thiet bi that. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-31. Prompt: "Bo sung thong tin thiet bi: hang Casper, model Remote U25 Series, anh minh chung devices.jpg, bo sung AI audit." | Cap nhat `requirement3.md` va `devices-infomation.txt` voi hang/model/anh minh chung; ghi ro nam san xuat va serial chua hien tren evidence. | INCOMPLETE | AI chi ho tro dien thong tin do sinh vien cung cap va doi chieu anh co ton tai; AI khong duoc tu tao serial, nam san xuat, actual result, video, hay defect evidence. | Sinh vien can kiem tra mat sau/nap pin neu muon bo sung serial da che 4 ky tu giua; neu khong thay thi giu "Not visible on provided device evidence". |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-31. Prompt: "TC11-TC15 khong phai edge case nhung toi van giu lai; bo sung 3 edge case do toi tim ra: TC16, TC17, TC18; bo sung bai lam va AI audit." | Cap nhat `requirement3.md` de giu TC11-TC15 nhu test case thuong, them TC16-TC18 la edge case chinh thuc, ghi actual/verdict, them D-07 va cap nhat doi chieu requirement. | INCOMPLETE | AI chi ho tro bien ket qua sinh vien cung cap thanh bang test case/audit. Actual result cua TC16-TC18 la quan sat tu sinh vien, khong phai AI tao; can giu video/screenshot chat minh chung de thoa yeu cau edge case AI khong tim duoc. | Sinh vien da thay edge case AI bo sot bang TC16-TC18 va giu TC11-TC15 trong bo test; can bo sung video minh chung va link GitHub Issue/defect neu nop chinh thuc. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-31. Prompt: "Link YouTube toi de o video-youtube-test/link-video.md; hay cap nhat requirement3 va audit." | Doc file `video-youtube-test/link-video.md`, cap nhat bang video minh chung trong `requirement3.md`, va doi trang thai video thanh Dat. | INCOMPLETE | AI chi doc va chen link do sinh vien cung cap; AI khong tao video, khong xac minh duoc thoi luong/voice/noi dung thuc te cua YouTube Shorts neu khong mo tung video. Requirement yeu cau video that co giong noi sinh vien, nen sinh vien phai tu dam bao cac link la YouTube Unlisted/Shorts hop le va moi video <= 60 giay. | Sinh vien da cung cap 5 link cho TC-01, TC-02, TC-03, TC-05 va TC-18 trong `link-video.md`; truoc khi nop can kiem tra quyen truy cap link va screenshot/ghi ro link trong report. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-05-31. Prompt: "Dua tren cac case Fail, hay viet lai defect, sua bai lam va bo sung AI audit." | Viet lai defect log trong `requirement3.md` thanh 4 defect confirmed dua tren TC-08, TC-13, TC-14 va TC-16; cap nhat muc doi chieu requirement ve so defect. | INCOMPLETE | AI chi ho tro chuyen cac failed test case thanh defect report co Summary, Steps, Expected, Actual, Severity va Status. Do chi co 4 test case Fail trong bang hien tai, AI khong duoc tu tao defect thu 5 de lam dep rubric. | Sinh vien can tao GitHub Issues tu 4 defect confirmed nay; neu muon dat muc tieu >= 5 defect thi can chay them test va chi bo sung defect moi khi co bang chung thuc te. |

## 3. Tong ket do chinh xac AI

| Chi so | So luong | Ti le |
| --- | --- | --- |
| Tong artifact AI sinh da audit | 9 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 9 | 100% |

## 4. Ket luan - khi nao nen / khong nen dung AI?

Nen dung AI de chuan hoa format, rut gon JD dai thanh bang tom tat, phat hien truong thieu, de xuat test idea, va bien test idea thanh bang co cau truc. Khong nen dung AI de tao hoac thay the bang chung goc nhu screenshot, account name, ngay dang tin, muc luong, link job, anh thiet bi, video test, actual result, hoac defect evidence. Voi HW01, AI phu hop lam tro ly bien tap/kiem tra, con sinh vien phai chiu trach nhiem xac minh nguon, chay test tren thiet bi that, va cap nhat ket qua truoc khi nop.

## 5. Mandatory Disclosure

"Requirement 1 dataset, Requirement 2 defect dataset, Requirement 3 test-design draft, summary tables, CSV, and draft report sections were generated and formatted with assistance from Codex / ChatGPT. I provided or corrected source job details for Requirement 1 and reviewed the generated summaries, salary fields, AI relevance, AI impact analysis, software-defect sources, severity, consequences, fixes, AI bias/hallucination notes, and Requirement 3 test ideas. The screenshots, source links, physical device photo, videos, actual test results, and defect evidence are collected or verified manually by me. The detailed AI Audit Report is attached in `doc/md/AI Audit/01_AI-Audit-Report.md`. I confirm I did not use AI to generate any prohibited artifact, including job posting screenshots with account name, physical device photos, videos, or fake evidence."

## 6. Chu ky

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Duc Hai |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Mon hoc | CS423 / CSC13003 - Kiem chung Phan mem |
| Giang vien | Chua dien |
| Ngay | 2026-05-31 |
| Chu ky | Chua ky |
