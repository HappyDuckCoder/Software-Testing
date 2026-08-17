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

- [x] Khung ≥ 12 test case / feature (map HW2) trong `automation/data/*.json`.
- [x] Dữ liệu trong file `.json` riêng — không hardcode array trong spec.
- [x] Script Playwright: `automation/tests/feature-*.spec.ts`.
- [ ] ≥ 3 assertion patterns thực sự dùng khi chạy (URL, text/visibility, count/attribute).
- [ ] Human review: sửa script AI và ghi trong `ai-gap-analysis.md`.
- [ ] Ghi test case **không** tự động hóa được + lý do (nếu có).

### 2.2 Feature A — FR-04 Profile

- [ ] ≥ 12 TC automated & executed.
- [ ] Chạy Chromium, Firefox, WebKit.
- [ ] 3 HTML reports lưu tại `evidence/html-reports/feature-a-*`.
- [ ] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue (nếu có defect).

### 2.3 Feature B — FR-11 Order history

- [ ] ≥ 12 TC automated & executed.
- [ ] Chạy Chromium, Firefox, WebKit.
- [ ] 3 HTML reports.
- [ ] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue (nếu có).

### 2.4 Feature C — FR-18 Admin orders

- [ ] ≥ 12 TC automated & executed.
- [ ] Chạy Chromium, Firefox, WebKit.
- [ ] 3 HTML reports.
- [ ] AI gap analysis hoàn chỉnh.
- [ ] Bug report + GitHub Issue (nếu có).

### 2.5 HTML report bắt buộc

- [x] Cấu hình metadata `Run by: 23127173` trong `playwright.config.ts`.
- [ ] Mỗi report có timestamp ISO khi chạy thật.
- [ ] Tổng ≥ 9 browser runs (3 feature × 3 browser).

## 3. Task 2 — Demo video

- [ ] YouTube unlisted, ≥ 5 phút, thuyết minh tiếng Việt.
- [ ] Trình diễn 1 script E2E + multi-browser + HTML report.
- [ ] Nói ≥ 1 chỉnh sửa sau AI review.
- [ ] Face-cam hoặc terminal `whoami` + `hostname`.
- [ ] Link ghi trong `agent-skills/demo-videos/link-video.md` và README.

## 4. Agent Skill

- [x] Skill source: `agent-skills/playwright-automation-builder/SKILL.md`.
- [ ] Video demo skill end-to-end trên 1 feature hoàn chỉnh.
- [ ] Catalog: `agent-skills/skill-catalog.md`.

## 5. AI compliance

- [x] AI Audit Report có entry khởi tạo prompt roadmap.
- [ ] Prompt log đầy đủ các phiên sinh/sửa script.
- [ ] AI Critique 200–300 từ.
- [ ] Mandatory Disclosure điền đủ.
- [ ] Privacy Checklist tick theo thực tế.

## 6. Git & repository

- [ ] Repository GitHub công khai (link trong README + main report).
- [ ] ≥ 8 commit chỉ thay đổi file `.spec.ts` / test script.
- [ ] `doc/md/Git Commit Log/git-commit-log.txt` cập nhật commit thật.

## 7. Nộp bài

- [ ] `doc/md/main-report.md` hoàn chỉnh (Markdown + PDF).
- [ ] AI Audit + Critique export PDF (hoặc gộp appendix).
- [ ] README có bảng tự đánh giá + test summary đúng số liệu chạy thật.
- [ ] Zip đúng tên: `23127173_HW04_AI_Automation_095.zip`.
- [ ] Không thiếu tài liệu bắt buộc (thiếu = 0 điểm).

## 8. High-risk trước khi nộp

| Rủi ro | Mitigation |
| --- | --- |
| Script chưa chạy E2E | Chạy EShop local, `npm run test:all-browsers` |
| HTML report thiếu StudentID | Mở report kiểm tra header/metadata |
| Video không chứng minh tác giả | Quay `whoami`/`hostname` đầu video |
| Commit log toàn README | Commit từng bước sửa `.spec.ts` |
| AI output chưa review | Điền AI gap + sửa selector/wait thật |
