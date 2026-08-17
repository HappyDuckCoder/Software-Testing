# Checklist hoàn thiện HW04 — mục tiêu 95/100

Review date: 2026-08-17  
Scope: toàn bộ HW04 sau khi hoàn thành automation trên EShop.

## 1. Phạm vi & feature selection

- [x] Chọn đúng 3 feature web khớp HW02: FR-04, FR-11, FR-18.
- [x] Mỗi pool A/B/C một feature; không dùng Pool D mobile.
- [ ] Xác nhận không trùng feature với thành viên nhóm (nếu có phân công nhóm).
- [x] Ghi feature selection vào `README.md` và `doc/md/main-report.md`.

## 2. Task 1 — AI-generated automation scripts

### 2.1 Chung (mỗi feature)

- [x] ≥ 12 test case / feature (map HW2) — thực tế **76 TC** (30/22/24) spec oracle.
- [x] Dữ liệu trong file `.json` riêng — không hardcode array trong spec.
- [x] Script Playwright: `automation/tests/feature-*.spec.ts`.
- [x] ≥ 3 assertion patterns: URL, visibility/text, count/attribute/state.
- [x] Human review + ghi `ai-gap-analysis.md` (3 feature).
- [x] TC không automate: B-BVA-08 (`returned`) — skip có lý do.

### 2.2 Feature A — FR-04 Profile

- [x] 30 TC automated & executed (Chromium/Firefox/WebKit).
- [x] 3 HTML reports: `evidence/html-reports/feature-a-*`.
- [x] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue (nếu yêu cầu nộp issue).

### 2.3 Feature B — FR-11 Order history

- [x] 22 TC automated & executed.
- [x] 3 HTML reports: `evidence/html-reports/feature-b-*`.
- [x] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue.

### 2.4 Feature C — FR-18 Admin orders

- [x] 24 TC automated & executed.
- [x] 3 HTML reports: `evidence/html-reports/feature-c-*`.
- [x] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue.

### 2.5 HTML report bắt buộc

- [x] Metadata `Run by: 23127173` trong `playwright.config.ts`.
- [x] Mỗi report có timestamp ISO (9 runs, 17/08/2026).
- [x] Tổng **9 browser runs** — xem `checklist/execution-matrix.md`.

## 3. Task 2 — Demo video

- [ ] YouTube unlisted, ≥ 5 phút, thuyết minh tiếng Việt.
- [ ] Trình diễn 1 script E2E + multi-browser + HTML report.
- [ ] Nói ≥ 1 chỉnh sửa sau AI review.
- [ ] Face-cam hoặc terminal `whoami` + `hostname`.
- [ ] Link ghi trong `agent-skills/demo-videos/link-video.md` và README.

## 4. Agent Skill

- [x] Skill source: `agent-skills/playwright-automation-builder/SKILL.md`.
- [ ] Video demo skill end-to-end trên 1 feature hoàn chỉnh.
- [x] Catalog: `agent-skills/skill-catalog.md`.

## 5. AI compliance

- [x] AI Audit Report AI-001…AI-017.
- [x] Prompt log cập nhật phiên 17/08/2026.
- [ ] AI Critique 200–300 từ hoàn chỉnh.
- [x] Mandatory Disclosure cập nhật execution thật.
- [ ] Privacy Checklist tick theo thực tế.

## 6. Git & repository

- [ ] Repository GitHub công khai (link trong README + main report).
- [ ] ≥ 8 commit chỉ thay đổi file `.spec.ts` / test script.
- [ ] `doc/md/Git Commit Log/git-commit-log.txt` cập nhật commit thật.

## 7. Nộp bài

- [x] `doc/md/main-report.md` có số liệu execution thật.
- [ ] Export `doc/pdf/main-report.pdf`.
- [x] README có bảng tự đánh giá + test summary đúng số liệu.
- [ ] Zip: `23127173_HW04_AI_Automation_095.zip`.
- [ ] Không thiếu tài liệu bắt buộc.

## 8. High-risk trước khi nộp

| Rủi ro | Trạng thái |
| --- | --- |
| Script chưa chạy E2E | ✅ 9 browser runs — `npm run test:full-matrix` |
| HTML report thiếu StudentID | ✅ Kiểm tra metadata trong 9 reports |
| Video không chứng minh tác giả | ⏳ Chưa quay |
| Commit log toàn README | ⏳ Chưa push GitHub |
| Fail ghi “all pass” | ✅ Fail = bug HW2 theo spec oracle |
