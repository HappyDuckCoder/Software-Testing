<div class="cover">

**Khoa Công nghệ Thông tin (FIT) — Trường ĐH Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Báo cáo kiểm thử API — HW06-AI

| | |
| --- | --- |
| **Họ tên** | Trần Hải Đức |
| **MSSV** | 23127173 |
| **Hệ thống** | EShop API — `http://127.0.0.1:3000` |
| **Ngày chạy chính** | 03/09/2026 |
| **Oracle** | `Eshop/api_specification.md` + README FR/SEC |

</div>

---

## Tóm tắt kết quả

| Chỉ số | Giá trị |
| --- | --- |
| Test case thực thi | **120** (A/B/C × 40) |
| Setup request | 62 |
| Tổng request Newman | **182** |
| Assertion | **182** — **12 FAIL** (6 nhóm bug spec) |
| Excel summary | **108 PASS / 12 FAIL** |
| Postman Desktop | 6 ảnh gốc + Console `X-Student-Id` |

Oracle thiết kế theo **đặc tả**, không suy từ code backend. Vi phạm spec → assertion **FAIL** trên Newman/Postman.

---

## 1. Phạm vi và môi trường

- **Stack:** Node.js / Express / SQLite.
- **Công cụ:** Postman + Newman 6.2.1, `newman-reporter-htmlextra`.
- **Header bắt buộc:** `X-Student-Id: 23127173` (pre-request script collection).
- **Fixture:** backend reset mỗi lần khởi động; 62 bước setup tạo dữ liệu riêng cho từng TC (tránh order bị mutate chung).

---

## 2. Ba API đã chọn

| Pool | API | Ý nghĩa nghiệp vụ | Tham chiếu đặc tả |
| :---: | --- | --- | --- |
| **A** | `PUT /api/users/me` | Cập nhật hồ sơ user (họ tên, SĐT, địa chỉ) | FR-04, SEC-02, SEC-06 |
| **B** | `PUT /api/orders/:id/cancel` | User hủy đơn theo state machine | FR-10, SEC-02; api_spec §4.6 |
| **C** | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái đơn hàng | FR-10, FR-12, FR-18, SEC-03 |

Không trùng bộ API của Vân: `/register`, `/api/products/:id`, `POST /api/checkout`.

---

## 3. Phương pháp kiểm thử

1. AI sinh ≥35 TC/API theo đặc tả; sinh viên duyệt và bổ sung 5 TC/API.
2. Map oracle từng ID: `oracle-utils.mjs`, `oracle-execution.json`.
3. Collection Postman: 1 folder/API, 40 request, ID `A-001…C-040` trùng ma trận.
4. Newman assert HTTP status/schema theo spec; vi phạm → **FAIL**.

Chi tiết ma trận: `test-cases/test-case-matrix.md`, `test-cases/execution-mapping.md`.

---

## 4. Phân bổ test case

| API | TC AI | TC SV | Tổng | Oracle chính |
| --- | ---: | ---: | ---: | --- |
| A — Profile | 35 | 5 | 40 | FR-04 / SEC-06 |
| B — Hủy đơn | 35 | 5 | 40 | FR-10 |
| C — Admin status | 35 | 5 | 40 | FR-18 / SEC-03 |
| **Tổng** | **105** | **15** | **120** | |

---

## 5. Thực thi Postman / Newman

| Hạng mục | Đường dẫn / giá trị |
| --- | --- |
| Collection | `api-testing/postman/collections/23127173_HW06_EShop_API.postman_collection.json` |
| Lệnh chạy | `npm run test` trong `api-testing/` |
| Newman raw | `api-testing/newman/raw-output/full-120-20260903.txt` |
| HTML report | `api-testing/newman/html-reports/report.html` |
| Evidence Newman | `evidence/newman-ui/` |
| Evidence Postman | `evidence/postman-ui/` — 6 ảnh Desktop (170 pass / 12 fail + Console) |
| Excel summary | `test-cases/23127173_HW06_test-summary-20260903.xlsx` |
| Flowchart | `doc/pdf/hw6-api-testing-workflow.png` |

---

## 6. CI/CD

Workflow GitHub Actions: baseline **pass** trên remote. Chưa có run **fail** có chủ đích trên CI remote. Chi tiết: `ci-cd/ci-cd-report.md`.

---

## 7. Bug report — sáu nhóm lỗi đặc tả

| ID | Mô tả | TC liên quan (ví dụ) |
| --- | --- | --- |
| HW6-BUG-01 | SEC-06 — client gán `role`/`isAdmin` vẫn 200 | A-031, A-032 |
| HW6-BUG-02 | FR-10 — hủy đơn `shipping` vẫn 200 | B-004, B-028 |
| HW6-BUG-03 | SEC-03 — token user gọi admin API vẫn 200 | C-023, C-024 |
| HW6-BUG-04 | FR-04 — không validate SĐT | A-021, A-022, A-023 |
| HW6-BUG-05 | Thiếu `Content-Type` vẫn 200 | A-025 |
| HW6-BUG-06 | GET thay PUT trả 404 thay vì 405 | A-034, C-032 |

Chi tiết đầy đủ: `issues/bug-report.md`. GitHub Issues: **chưa tạo**.

---

## 8. Kết luận

Đã hoàn thành redesign 120 TC bám đặc tả, fixture tách biệt, assert oracle trên Newman (**182 req / 12 fail**). Excel test summary và báo cáo PDF đã có. Còn lại: tạo GitHub Issues cho 6 nhóm bug, remote CI fail có chủ đích. ZIP nộp Moodle do sinh viên tự đóng gói.

---

*Báo cáo này kèm AI Audit Report (`doc/md/AI Audit/`) theo yêu cầu đề bài.*
