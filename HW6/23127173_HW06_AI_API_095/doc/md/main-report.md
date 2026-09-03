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
| **Repository** | [Software-Testing / homework6](https://github.com/HappyDuckCoder/Software-Testing/tree/homework6/HW6/23127173_HW06_AI_API_095) |

</div>

---

## Tóm tắt kết quả

| Chỉ số | Giá trị |
| --- | --- |
| Số API kiểm thử | **3** (pool A / B / C) |
| Test case thực thi | **120** (A/B/C × 40) |
| Setup request | 62 |
| Tổng request Newman | **182** |
| Assertion | **182** — **12 FAIL** (6 nhóm bug spec) |
| Excel summary | **108 PASS / 12 FAIL** |
| Postman Desktop | 6 ảnh gốc + Console `X-Student-Id` |
| Tự đánh giá | **097 / 100** (trừ Issue GitHub) |

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

Ma trận CSV: `test-cases/test-case-source.csv` · Kết quả chạy: `test-cases/23127173_HW06_test-summary-20260903.xlsx`.

---

## 5. Tính năng Postman đã sử dụng

| Tính năng | Cách dùng trong HW06 |
| --- | --- |
| **Collection** | Một collection chính, folder `00 Setup` + 3 folder API (A/B/C), 182 request |
| **Environment** | `baseUrl`, token/orderId biến động; template `eshop.local.template.postman_environment.json` |
| **Collection variables** | `studentId`, `baseUrl`, token sau login, orderId sau checkout |
| **Pre-request Script** | Collection-level: gắn `X-Student-Id: 23127173` mọi request (đề §6, §11) |
| **Test scripts** | Assert HTTP status theo oracle đặc tả từng TC ID |
| **Runner** | Full run 120 TC + setup; evidence Desktop 170 pass / 12 fail |
| **Console** | Xác minh log `X-Student-Id applied: 23127173` (ảnh evidence §11) |
| **Newman CLI** | `npm run test` — raw TXT/JSON + HTML report (`newman-reporter-htmlextra`) |
| **Export/import** | Collection JSON nộp trong `api-testing/postman/collections/` |

Không dùng Monitor/Mock Server trong phạm vi bài này.

---

## 6. Thực thi Postman / Newman

| Hạng mục | Đường dẫn / giá trị |
| --- | --- |
| Collection | `api-testing/postman/collections/23127173_HW06_EShop_API.postman_collection.json` |
| Lệnh chạy | `npm run test` trong `api-testing/` |
| Newman raw | `api-testing/newman/raw-output/full-120-20260903.txt` |
| HTML report | `api-testing/newman/html-reports/report.html` |
| Evidence Newman | `evidence/newman-ui/` |
| Evidence Postman | `evidence/postman-ui/` — 6 ảnh Desktop |
| Flowchart workflow | `doc/pdf/hw6-api-testing-workflow.png` |

---

## 7. AI-driven test generator (Agent Skill)

| Hạng mục | Vị trí |
| --- | --- |
| Skill | `agent-skills/eshop-api-test-generator/` |
| Workflow skill | `agent-skills/postman-newman-api-testing-workflow/` |
| Sơ đồ tự vẽ | `doc/pdf/hw6-api-testing-workflow.png` |
| Pseudocode | `agent-skills/eshop-api-test-generator/README.md` |

Luồng: đọc đặc tả → planner (domain/state/security/schema) → sinh TC + oracle → sinh viên duyệt/bổ sung ≥5 TC → export Postman + Excel.

---

## 8. CI/CD

Workflow: [`.github/workflows/hw6-api-tests.yml`](https://github.com/HappyDuckCoder/Software-Testing/blob/homework6/.github/workflows/hw6-api-tests.yml).

| Run | Kết quả job | Newman | Evidence |
| --- | --- | --- | --- |
| Remote **pass** (01/09) | ✅ Succeeded | 20 req, 0 fail | [run 33500850638](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638) · `ci-01`…`ci-05` |
| Remote **fail** (03/09) | ❌ Failed | 102 req, **17 assert fail** | commit `f21965e` · `ci-06`…`ci-10` |
| Local full oracle (03/09) | — | 182 req, **12 fail** | `ci-cd/ci-cd-report.md`, Newman raw |

Đủ hai run remote pass + fail theo đề §6. Ảnh CI 03/09: `evidence/ci-cd/ci-06-workflow-run-20260903.png` … `ci-10-newman-summary-20260903.png`.

---

## 9. Bug report — sáu nhóm lỗi đặc tả

| ID | Mô tả | TC liên quan (ví dụ) |
| --- | --- | --- |
| HW6-BUG-01 | SEC-06 — client gán `role`/`isAdmin` vẫn 200 | A-031, A-032 |
| HW6-BUG-02 | FR-10 — hủy đơn `shipping` vẫn 200 | B-004, B-028 |
| HW6-BUG-03 | SEC-03 — token user gọi admin API vẫn 200 | C-023, C-024 |
| HW6-BUG-04 | FR-04 — không validate SĐT | A-021, A-022, A-023 |
| HW6-BUG-05 | Thiếu `Content-Type` vẫn 200 | A-025 |
| HW6-BUG-06 | GET thay PUT trả 404 thay vì 405 | A-034, C-032 |

Chi tiết: `issues/bug-report.md`. GitHub Issues: **chưa tạo** (SV tự mở trên repo public).

---

## 10. Kết luận

Đã hoàn thành pipeline generate → audit → extend → execute cho 3 API, assert oracle trên Newman (**182 req / 12 fail**). CI remote có pass (01/09) và fail (03/09). Còn lại: GitHub Issues + screenshot, ZIP Moodle.

---

*Báo cáo kèm AI Audit Report (`doc/md/AI Audit/`), Mandatory Disclosure và AI Critique theo đề §9–§10.*
