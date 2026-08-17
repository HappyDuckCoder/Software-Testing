# HW04 Consistency & Coverage Review

Review date: 2026-08-17  
Reviewer: Khung tự rà soát (sinh viên cập nhật sau khi chạy test)

## 1. Đối chiếu requirement

| Yêu cầu HW04 | Trạng thái khung | Ghi chú |
| --- | --- | --- |
| 3 feature web khớp HW02 | OK | FR-04, FR-11, FR-18 |
| ≥ 12 TC / feature | Khung OK | 12 rows × 3 trong `automation/data/` |
| Data-driven (.json/.csv) | OK | 3 file JSON |
| ≥ 3 assertion patterns | Khung OK | Cần xác nhận khi chạy |
| 3 browser × 3 feature | Chưa | 0/9 runs |
| HTML `Run by: 23127173` | Config OK | `playwright.config.ts` metadata |
| AI gap / human review | Khung | Cần điền sau sửa script |
| Video ≥ 5 phút | Chưa | |
| Git ≥ 8 commit .spec.ts | Chưa | |
| AI Audit + Critique | Khung | AI-001 có; Critique chưa viết |

## 2. Nhất quán HW2 ↔ HW4

| Feature | HW2 test count | HW4 automated (plan) | Ghi chú |
| --- | ---: | ---: | --- |
| FR-04 | 30 | 12 | Ưu tiên UI profile + phone boundary |
| FR-11 | 22 | 12 | Empty list, status, cancel |
| FR-18 | 24 | 12 | Admin auth + status machine |

## 3. Mục còn thiếu trước nộp (P0)

1. Chạy EShop local và pass smoke test.
2. Hoàn thiện selector trong 3 spec files.
3. 9 HTML reports + copy vào `evidence/html-reports/`.
4. Quay video + push GitHub + 8 commit script.
5. Viết AI Critique 200–300 từ; export PDF.

## 4. Tự đánh giá bảo thủ hiện tại

| Hạng mục | Điểm nếu nộp ngay khung | Điểm mục tiêu sau hoàn thiện |
| --- | ---: | ---: |
| Task 1 A/B/C | ~0–15 mỗi feature | 24×3 |
| Task 2 | 0 | 14 |
| Agent Skill | 5 | 9 |
| **Tổng** | **~20** | **95** |
