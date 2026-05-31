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
| Requirement 1 report | `HW1/23127173/requirement/requirement1/requirement1.md` |
| Requirement 1 job data | `HW1/23127173/requirement/requirement1/jobs-data/` |
| Requirement 1 AI Mindmap Review | `HW1/23127173/requirement/requirement1/AI-Mindmap-Review/ai-mindmap-review.md` |
| Requirement 2 report | `HW1/23127173/requirement/requirement2/requirement2.md` |
| Requirement 3 report | `HW1/23127173/requirement/requirement3/requirement3.md` |
| Requirement 3 device evidence | `HW1/23127173/requirement/requirement3/devices/devices.jpg` |
| Requirement 3 video links | `HW1/23127173/requirement/requirement3/video-youtube-test/link-video.md` |
| Requirement 3 AI screenshot | `HW1/23127173/requirement/requirement3/screenshot-AI/screenshot-chat-ai.png` |
| Requirement 3 GitHub Issue drafts | `HW1/23127173/requirement/requirement3/github-issues/` |
| Requirement 3 GitHub Issues screenshots | `HW1/23127173/requirement/requirement3/github-issues/screenshot-defect/` |
| AI Audit Report | `HW1/23127173/doc/md/AI Audit/01_AI-Audit-Report.md` |
| AI Critique | `HW1/23127173/doc/md/AI Audit/02_AI-Critique.md` |
| Mandatory Disclosure | `HW1/23127173/doc/md/AI Audit/03_Mandatory-Disclosure.md` |
| AI Privacy Checklist | `HW1/23127173/doc/md/AI Audit/04_AI-Privacy-Checklist.md` |
| Prompt log | `HW1/23127173/doc/md/appendixA-prompt-log.md` |
| Submission checklist | `HW1/23127173/checklist.md` |

## 3. Requirement 1 - Thi truong viec lam QA/QC 2026+

Requirement 1 thu thap 10 tin tuyen dung QA/QC trong vong 60 ngay tinh theo ngay thu thap `2026-05-28`. Bo du lieu gom 10 file job detail Markdown, 10 screenshot va mot file CSV tong hop.

| Ket qua | Trang thai |
| --- | --- |
| 10 tin tuyen dung QA/QC | Dat |
| Moi tin co source link | Dat |
| Moi tin co screenshot | Dat |
| Moi tin co mo ta cong viec va ky nang | Dat |
| Moi tin co muc luong hoac ghi ro khong cong khai | Dat mot phan |
| >= 3 tin co AI/LLM/automation-AI | Dat: Job 02, 03, 04, 06, 08 |
| Moi tin co AI Impact Analysis | Dat |

Nhan xet chinh: thi truong QA/QC 2026+ khong chi yeu cau manual/automation testing, ma mo rong sang SDET, AI/LLM testing, data testing, Salesforce/AI solution QC, device/mobile QA va design verification. AI ho tro tao test, phan tich log, viet tai lieu va tong hop metric, nhung QA van phai xac minh ket qua, bao ve du lieu va chiu trach nhiem release.

## 4. Requirement 2 - 20 loi phan mem 2022-2026

Requirement 2 tong hop 20 loi phan mem cong khai trong giai doan 2022-2026. Moi loi co source link, mo ta, severity, hau qua, giai phap va mot truong hop AI co the bias/hallucinate khi giai thich loi do.

| Ket qua | Trang thai |
| --- | --- |
| 20 loi phan mem cong khai | Dat |
| Nam nam trong giai doan 2022-2026 | Dat |
| Source link cho tung loi | Dat |
| Mo ta / severity / hau qua / giai phap | Dat |
| >= 5 loi lien quan AI/LLM | Dat: 9/20 |
| 20/20 co bias/hallucination note | Dat |

Nhan xet chinh: cac loi 2022-2026 cho thay QA/QC can quan tam den security, cloud misconfiguration, supply chain, outage, data privacy va AI behavior. Voi he thong AI/LLM, loi co the nam o prompt, guardrail, du lieu truy xuat, quyen truy cap cong cu va cach model giai thich sai.

## 5. Requirement 3 - Test case cho san pham vat ly

San pham duoc chon la remote dieu hoa Casper Remote U25 Series. Anh minh chung remote + the sinh vien nam trong `devices/devices.jpg`.

| Muc | Ket qua |
| --- | --- |
| Thiet bi | Remote dieu hoa Casper Remote U25 Series |
| Anh thiet bi + the sinh vien | Dat |
| Hang/model | Dat |
| Nam san xuat / serial | Not visible on provided device evidence |
| So test case | 18 test case |
| So video minh chung | 5 video/link |
| Edge case AI bo sot | TC-16, TC-17, TC-18 |
| Defect confirmed | 4 defect tu TC-08, TC-13, TC-14, TC-16 |
| GitHub Issues | Da co 4 issue that trong repo `HappyDuckCoder/Software-Testing`; co screenshot username trong `github-issues/screenshot-defect/` |

Ba edge case sinh vien tu tim ra:

| TC | Noi dung | Verdict |
| --- | --- | --- |
| TC-16 | Dieu hoa chi duoc bat khi bam nut Power, nhung Turbo/Mode/Speed van co the bat may | Fail |
| TC-17 | Chuyen Cool sang Dry lam quat tu dong ve muc yeu nhat | Pass |
| TC-18 | Baby Care khoa cac cau hinh nhu nhiet do/huong gio | Pass |

Defect confirmed:

| Defect | Lien quan | Tom tat |
| --- | --- | --- |
| D-01 | TC-08 | iSAVE khong luu/cap nhat cau hinh gan nhat |
| D-02 | TC-13 | Remote van dieu khien duoc khi dau phat hong ngoai bi che |
| D-03 | TC-14 | Dieu hoa van nhan lenh o moi goc nghieng da thu |
| D-04 | TC-16 | Nut Turbo/Mode/Speed co the bat may khi dieu hoa dang tat |

Luu y: muc tieu requirement la tim >= 5 defect, nhung hien tai chi co 4 confirmed defects. Khong tao defect gia; neu can dat muc tieu >= 5, sinh vien can chay them test va chi bo sung defect khi co bang chung thuc te.

Bug screenshots policy: HW01 khong dung FIT Mantis. Bon defect confirmed da duoc log bang GitHub Issues trong repo ca nhan `HappyDuckCoder/Software-Testing`, tu issue `#1` den `#4`. Link issue duoc ghi trong `requirement/requirement3/github-issues/github-issues-links.md`; screenshot danh sach issue va tung issue nam trong `requirement/requirement3/github-issues/screenshot-defect/` va hien GitHub username `HappyDuckCoder`.

## 6. AI CLO / Bloom-AI

| CLO | Yeu cau | Bang chung | Trang thai |
| --- | --- | --- | --- |
| G9.1 - Understand | Yeu cau AI tao mindmap QA/QC role va sinh vien tim loi | `requirement/requirement1/AI-Mindmap-Review/ai-mindmap-review.md` | Dat |
| G9.3 - Analyse | Phan tich output AI va tim >= 3 edge case AI bo sot | TC-16, TC-17, TC-18 va `screenshot-AI/screenshot-chat-ai.png` | Dat |

Trong mindmap review, AI output ban dau bo sot Data Test Engineer, Design Verification, Device/Mobile QA va phan biet AI-assisted QA voi AI/LLM system testing. Sinh vien da confirm cac loi/sot thieu nay sau khi doi chieu 10 job Requirement 1 va viet ban mindmap da sua.

## 7. AI Audit Summary

| Chi so | Ket qua |
| --- | --- |
| Tong artifact AI sinh da audit | 17 |
| VALID | 0 |
| INVALID | 0 |
| INCOMPLETE | 17 |

Tat ca artifact AI duoc danh dau `INCOMPLETE` vi AI chi duoc dung de tao draft, chuan hoa format, tong hop va goi y. Sinh vien phai xac minh bang chung goc: screenshot job, source link, video, anh thiet bi, actual result va defect evidence.

## 8. AI Critique

Trong HW01, AI huu ich nhat o vai tro bien tap va cau truc hoa: no giup chuan hoa 10 JD Requirement 1 thanh Markdown/CSV, tong hop 20 software defects cho Requirement 2, de xuat test case cho remote dieu hoa trong Requirement 3, tao khung mindmap G9.1, chuyen defect log thanh draft GitHub Issues, va cap nhat report sau khi sinh vien bo sung screenshot GitHub Issues that. Tuy nhien, audit cho thay 17/17 artifact deu chi nen xem la **INCOMPLETE** cho den khi sinh vien xac minh bang chung goc. AI co the viet mach lac, nhung khong nhin thay day du screenshot, khong dam bao link con dung, khong tu chay test tren thiet bi that, va khong the tao thay evidence bi cam nhu anh thiet bi, video, actual result, GitHub Issues that hay defect proof.

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

## 11. Self-assessment

| Hang muc | Tu danh gia |
| --- | --- |
| Requirement 1 | Dat ve noi dung va artifact; can tu kiem tra lai screenshot/account name/ngay dang tin truoc khi nop |
| Requirement 2 | Dat ve cau truc va noi dung 20 loi; can mo lai source link neu muon xac minh lan cuoi |
| Requirement 3 | Dat phan lon artifact; rui ro chinh la moi co 4 confirmed defects thay vi >= 5 |
| AI Audit / Prompt Log / Disclosure | Dat ve cau truc, da co 17 artifact audit |
| AI CLO | Dat G9.1 va G9.3 |
| Diem tu danh gia de xuat | 085/100 |

## 12. Cam doan va chu ky

Toi cam doan cac bang chung bi cam AI tao, bao gom screenshot job co account name, anh thiet bi + the sinh vien, video test, actual result va defect evidence, khong duoc tao bang AI. Cac phan AI ho tro da duoc khai bao trong AI Audit Report va Appendix A Prompt Log.

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Trần Hải Đức |
| Student ID | 23127173 |
| Ngay ky | 2026-05-31 |
| Chu ky | Trần Hải Đức |
