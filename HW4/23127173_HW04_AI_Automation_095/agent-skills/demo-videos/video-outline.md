# Outline quay video HW04 — MSSV 23127173

Mục tiêu: **1 video YouTube unlisted ≥ 5 phút** (khuyến nghị **6–7 phút**), tiếng Việt, gộp **Task 2** + **Agent Skill** trên **Feature A — FR-04 Profile**.

## Chuẩn bị trước khi quay

| Mục | Chi tiết |
| --- | --- |
| SUT | Backend `:3000`, web `:5180`, admin `:5174` — EShop chạy ổn định |
| Terminal | PowerShell/CMD, cwd = `automation/` |
| Trình duyệt | Chromium + Firefox (hoặc WebKit) — đã `npx playwright install` |
| File mở sẵn | `feature-a-profile.spec.ts`, `helpers/profileLocators.ts`, `data/feature-a-profile.json`, `agent-skills/playwright-automation-builder/SKILL.md` |
| Report | `evidence/html-reports/feature-a-chromium/index.html` (mở sau khi chạy) |
| Upload | YouTube **Unlisted** — title gợi ý: `HW04-AI 23127173 — EShop FR-04 Automation Demo` |

### Lệnh dùng trong video

```powershell
cd automation
whoami
hostname
npm run test:feature-a:headed          # Chromium headed — demo chính
npx playwright test tests/feature-a-profile.spec.ts --project=firefox --headed
npm run report                         # hoặc mở evidence/html-reports/feature-a-chromium/index.html
```

---

## Kịch bản theo thời lượng (~6:30)

### 0:00 – 0:45 | Mở đầu + xác thực tác giả (bắt buộc §11)

**Làm:** Face-cam **hoặc** terminal full màn hình.

**Nói (gợi ý):**
> «Xin chào, em Trần Hải Đức, MSSV 23127173, bài HW04-AI Automation trên EShop. Em demo Feature A — FR-04 Quản lý hồ sơ, 30 test case data-driven, chạy Playwright trên nhiều trình duyệt.»

**Terminal:**
```powershell
whoami
hostname
```

**Nói:** «Video unlisted, automation và issue tracker public trên GitHub — link trong README bài nộp.»

---

### 0:45 – 1:30 | Giới thiệu phạm vi bài (Task 1 tóm tắt)

**Làm:** Mở `README.md` hoặc `doc/md/main-report.md` — zoom bảng feature A/B/C.

**Nói:**
> «Em chọn 3 feature khớp HW2: FR-04, FR-11, FR-18 — tổng 76 TC, 9 browser runs, kết quả 158 pass, 53 fail theo spec oracle, không pass theo code buggy. Phần demo hôm nay tập trung Feature A.»

**Điểm cần nhắc:** data-driven JSON, 3 assertion patterns (URL / text / attribute-state).

---

### 1:30 – 2:30 | Agent Skill — quy trình AI-first (§7)

**Làm:** Mở `agent-skills/playwright-automation-builder/SKILL.md` — scroll workflow Step 1→6.

**Nói:**
> «Em dùng Agent Skill `playwright-automation-builder`: bước 1 chọn TC từ HW2, bước 2 sinh JSON `feature-a-profile.json`, bước 3 sinh spec Playwright, bước 4 chạy 3 browser, bước 5 gap analysis, bước 6 sửa script sau human review. Skill giúp tái sử dụng cho feature B/C cùng cấu trúc.»

**Làm:** Mở nhanh `automation/data/feature-a-profile.json` — chỉ 1–2 dòng TC (A-DT-01, A-BVA-01).

**Làm:** Mở `feature-a-profile.spec.ts` — chỉ vòng `for (const row of cases)`.

---

### 2:30 – 4:00 | Chạy E2E headed — Chromium (Task 2 core)

**Làm:** Terminal `npm run test:feature-a:headed` — để browser hiện login → profile → vài TC chạy.

**Nói trong lúc chạy:**
> «Script login user test, mở `/profile`, assert heading "Hồ sơ của bạn", email disabled, submit form theo oracle JSON. Fail có chủ đích khớp bug HW2 BUG-A-01 và BUG-A-02.»

**Sau khi xong:** chỉ pass/fail summary trên terminal (~22 pass / 8 fail nếu DB giữ nguyên).

---

### 4:00 – 4:45 | Multi-browser — Firefox (bắt buộc §6 Task 2)

**Làm:**
```powershell
npx playwright test tests/feature-a-profile.spec.ts --project=firefox --headed
```
(hoặc chạy headless nếu máy chậm — vẫn nói rõ đang dùng Firefox project)

**Nói:**
> «Em chạy cùng spec trên Firefox project trong `playwright.config.ts` — cùng data JSON, cùng oracle. Bài có 9 runs tổng (3 browser × 3 feature); clip này minh họa multi-browser trên Feature A.»

---

### 4:45 – 5:30 | HTML report + metadata (bắt buộc §11)

**Làm:** Mở `evidence/html-reports/feature-a-chromium/index.html` (hoặc report vừa generate).

**Zoom rõ:**
- `Run by: 23127173`
- Timestamp ISO
- Vài test pass + 1 test fail (BUG-A-01 nếu có)

**Nói:**
> «Report HTML do Playwright reporter tạo — không AI fabricate. Metadata MSSV và timestamp khớp rubric chống gian lận.»

---

### 5:30 – 6:15 | Human review — 1 fix sau AI (bắt buộc Task 2)

**Làm:** Split screen hoặc tab: `Profile.jsx` (SUT) + `helpers/profileLocators.ts` + đoạn spec cũ (nếu có comment) hoặc mô tả bằng l lời.

**Nói (gợi ý script — chọn 1 fix thật của bạn):**
> «Ban đầu AI dùng `getByLabel` cho form profile nhưng `Profile.jsx` không có `htmlFor` trên label — 9 TC timeout. Em inspect DOM thật, tạo `profileLocators.ts` map label text sang input sibling, cập nhật spec — Feature A Chromium từ 3/12 pass lên 12/12 trước khi mở rộng 30 TC spec-oracle. Đây là human review bắt buộc sau AI draft.»

*Alternative fix nếu muốn đổi:* oracle spec HW2 vs code (22 pass / 8 fail); hoặc XSS dialog handler Feature C — nhưng Feature A fix locator là câu chuyện mạnh nhất.

---

### 6:15 – 6:45 | Bug + GitHub (bonus điểm chất lượng)

**Làm:** Mở GitHub Issue [#8](https://github.com/HappyDuckCoder/Software-Testing/issues/8) hoặc screenshot fail trong `requirement/feature-A/bug-report/`.

**Nói ngắn:**
> «Fail automation map bug HW2 — Issue #8, #9 public kèm screenshot. Oracle là spec, không che bug SUT.»

---

### 6:45 – 7:00 | Kết

**Nói:**
> «Tóm lại: 76 TC, skill data-driven, 9 browser runs, AI audit đầy đủ, repo public trên GitHub. Cảm ơn thầy cô đã xem.»

**Làm:** Hiện lại `whoami`/`hostname` hoặc face-cam 3 giây.

---

## Checklist trước upload YouTube

- [ ] ≥ 5 phút thực tế (YouTube Studio kiểm tra duration)
- [ ] Tiếng Việt — giọng sinh viên
- [ ] `whoami` + `hostname` **hoặc** face-cam
- [ ] ≥ 1 script E2E chạy thật (headed khuyến nghị)
- [ ] ≥ 2 browser (Chromium + Firefox/WebKit)
- [ ] HTML report + zoom `Run by: 23127173`
- [ ] Nói ≥ 1 fix sau AI review
- [ ] Agent Skill workflow được trình bày (Step 1–6)
- [ ] Unlisted — copy link vào `link-video.md`

## Sau khi quay

1. Upload YouTube unlisted.
2. Dán link vào `agent-skills/demo-videos/link-video.md`.
3. Cập nhật `README.md`, `doc/md/main-report.md` §4–5.
4. Tick Privacy Checklist mục video.
5. Đóng zip nộp.
