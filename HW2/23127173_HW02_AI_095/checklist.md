# HW02 Submission Checklist

Review date: 2026-07-08  
Scope: toàn bộ HW02 sau khi đã hoàn thành test case Feature A/B/C/D.

## 1. Global Requirements

| Requirement | Status | Evidence | Note |
| --- | --- | --- | --- |
| 4 selected features, one per pool | Done | `README.md`, `doc/md/main-report.md` | A/FR-04, B/FR-11, C/FR-18, D/FR-10 |
| Domain Testing for each feature | Done | `requirement/feature-*/domain-testing/` | Có miền đầu vào, class/condition, test case và kết quả |
| Boundary Value Analysis for each feature | Done | `requirement/feature-*/boundary-value-analysis/` | Có boundary/class, test case và kết quả |
| AI Gap Analysis | Done | `requirement/feature-*/ai-gap-analysis/` | Đã viết cho A/B/C/D |
| Bug reports in Markdown | Done | `requirement/feature-*/bug-report/` | Đã có bug/warning chính |
| GitHub Issues with screenshots | Done/Need URL if required | `requirement/feature-*/bug-report/screenshots/` | Đã có screenshot bug/GitHub trong từng feature; nếu rubric yêu cầu URL issue thật thì gắn thêm link |
| AI Audit Report | Done | `doc/md/AI Audit/01_AI-Audit-Report.md` | Đã cập nhật đến lượt review cuối |
| Prompt log | Partial | `doc/md/appendixA-prompt-log.md` | File này còn thiếu nhiều prompt sau hai prompt đầu; audit report đang đầy đủ hơn |
| AI Critique 200-300 words | Done | `doc/md/AI Audit/02_AI-Critique.md` | Đã viết bản cuối |
| Mandatory Disclosure | Done | `doc/md/AI Audit/03_Mandatory-Disclosure.md` | Đã cập nhật |
| Privacy Checklist | Done | `doc/md/AI Audit/04_AI-Privacy-Checklist.md` | Đã tick theo trạng thái hiện tại |
| Git commit log | Done/Refresh after final commit | `doc/md/Git Commit Log/git-commit-log.txt` | Đã paste log thật của nhánh `homework2`; nên chạy lại sau commit cuối |
| Agent Skill source | Done | `agent-skills/` | Có các skill phục vụ inspection, Domain Testing, BVA, bug report, gap analysis |
| Agent Skill demo video | Done | `agent-skills/demo-videos/link-video.md` | Đã có link demo skill cho Feature A - FR-04 |
| Main report Markdown | Done | `doc/md/main-report.md` | Đã cập nhật số liệu và feature |
| Main report PDF | Done | `doc/pdf/main-report.pdf`, `doc/pdf/AI-Audit-Appendix.pdf` | Đã export PDF bằng Pandoc/XeLaTeX |
| README self-assessment + test summary | Done | `README.md` | Đã cập nhật theo số liệu cuối |

## 2. Feature-Level Checklist

| Item | Feature A | Feature B | Feature C | Feature D |
| --- | --- | --- | --- | --- |
| Feature selected | [x] | [x] | [x] | [x] |
| Feature rule/source inspected | [x] | [x] | [x] | [x] |
| Domain variables listed | [x] | [x] | [x] | [x] |
| Valid/invalid partitions listed | [x] | [x] | [x] | [x] |
| Domain test cases written | [x] | [x] | [x] | [x] |
| Boundary values listed | [x] | [x] | [x] | [x] |
| BVA test cases written | [x] | [x] | [x] | [x] |
| Tests executed | [x] | [x] | [x] | [x] |
| Actual/Verdict updated | [x] | [x] | [x] | [x] |
| Bugs reported in Markdown | [x] | [x] | [x] | [x] |
| Bug/GitHub screenshots attached | [x] | [x] | [x] | [x] |
| AI gap analysis written | [x] | [x] | [x] | [x] |
| AI audit updated | [x] | [x] | [x] | [x] |
| Commit log updated | [x] | [x] | [x] | [x] |

## 3. High-Risk Items Before Submission

| Risk | Mitigation |
| --- | --- |
| Có screenshot GitHub/bug nhưng chưa gắn URL issue thật | Nếu giảng viên yêu cầu URL, thêm link issue vào từng bug report; hiện ảnh nằm trong `bug-report/screenshots` |
| PDF render cần kiểm tra lần cuối | Đã export PDF; mở lại trước khi zip để kiểm tra layout bảng theo yêu cầu cá nhân |
| Link video demo Agent Skill | Đã bổ sung link trong `agent-skills/demo-videos/link-video.md`; kiểm tra link mở được trước khi nộp |
| Git commit log cần cập nhật sau commit cuối | Sau khi chốt bài, chạy lại `git log --oneline --decorate --stat -- HW2/23127173_HW02_AI_095` và thay phần log nếu cần |
| Feature D gọi là Mobile nhưng evidence chủ yếu là API/web flow | Trong báo cáo cần nói rõ đây là kiểm thử rule FR-10 phục vụ mobile/user flow, chưa phải native mobile UI test đầy đủ |
| Prompt log chưa đầy đủ bằng AI Audit | Có thể bổ sung prompt log hoặc dùng AI Audit làm nguồn chính, nhưng tốt nhất nên đồng bộ trước khi nộp |
