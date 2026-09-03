<div class="cover">

**Khoa Công nghệ Thông tin (FIT) — Trường ĐH Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Báo cáo kiểm toán AI — HW06-AI

<p class="subtitle">Phụ lục bắt buộc · MSSV 23127173 · Trần Hải Đức · Cập nhật 03/09/2026</p>

</div>

*Mỗi artifact AI sinh được gắn verdict `VALID` / `INVALID` / `INCOMPLETE`. Bằng chứng thực thi chỉ được ghi khi đã chạy thật.*

## 1. Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên (in hoa) | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Lớp / Khoá | Chưa điền |
| Mã bài tập | HW06-AI |
| Tên bài tập | Kiểm thử API trên EShop |
| Ngày cập nhật | 03/09/2026 |
| Công cụ AI đã dùng | Codex (GPT-5); Cursor (Composer 2.5) |
| Có dùng AI | Có |

**Tuyên bố theo đề bài:** *I use AI tools for the following tasks.*

## 2. Hướng dẫn đã áp dụng

- Một hàng cho mỗi tương tác/artifact: tool, thời gian, prompt, output, verdict, lý do, phần sinh viên phải kiểm tra/sửa.
- Không paraphrase thành bằng chứng thực thi. Ảnh Postman/CI do sinh viên cung cấp; raw/HTML Newman lấy từ lần chạy thật.
- Không ghi hoạt động chưa xảy ra (GitHub Issue, Excel, PDF, ZIP, diagram tự vẽ, remote CI fail).
- `Lab/HW6/requirement/requirement.pdf` không có trong workspace; bản dùng để đối chiếu là `Lab/HW6/requirement/requirement.md`.

## 3. Nhật ký Audit — từng artifact

Mỗi mục ghi đủ prompt, output, verdict, lý do và phần sinh viên phải kiểm tra.

<div class="audit-entry">

#### **AI-001** · 01/09/2026 · Codex (GPT-5). Prompt: đọc `Lab/HW6/requirement/requirement.pdf`, dịch sang Markdown; tạo khung nộp, roadmap, checklist, cập nhật audit và commit.

| Trường | Nội dung |
| --- | --- |
| Output AI | Bản dịch `requirement.md`; cây thư mục template (báo cáo, audit, Postman/Newman, CI/CD, evidence, generator). |
| Verdict | **INCOMPLETE** |
| Lý do | Bloom G9.2 Apply: khung chưa phải test case đã audit/execute. Đề §6 yêu cầu pipeline generate → audit → extend → execute cho từng API. |
| SV phải làm | Đối chiếu PDF gốc trên Moodle với `requirement.md`; không dùng khung như kết quả kiểm thử. |

</div>

<div class="audit-entry">

#### **AI-002** · 01/09/2026 · Codex (GPT-5). Prompt: chọn 3 API ưu tiên từ HW2, không trùng `/register`, `/api/products/:id`, `POST /api/checkout` của Vân.

| Trường | Nội dung |
| --- | --- |
| Output AI | Chọn `PUT /api/users/me` (A/FR-04), `PUT /api/orders/:id/cancel` (B/FR-10), `PUT /api/admin/orders/:id/status` (C/FR-18). |
| Verdict | **VALID** |
| Lý do | Đề §5: đúng 1 API/pool A–C, không trùng nhóm. |
| SV phải làm | Xác nhận lại với nhóm nếu danh sách phân công đổi; không dùng bug HW2 làm evidence HW6. |

</div>

<div class="audit-entry">

#### **AI-003** · 01/09/2026 · Codex (GPT-5). Prompt: thêm cột ý nghĩa API cho ba API đã chọn.

| Trường | Nội dung |
| --- | --- |
| Output AI | Mô tả nghiệp vụ ngắn trong README và `api-selection.md`. |
| Verdict | **VALID** |
| Lý do | Tài liệu hóa phạm vi; chưa phải oracle đã chạy. |
| SV phải làm | Đối chiếu `Eshop/api_specification.md` và SUT trước khi khóa expected status. |

</div>

<div class="audit-entry">

#### **AI-004** · 01/09/2026 · Codex (GPT-5). Prompt: lưu workflow do SV cung cấp và tạo skill tương ứng.

| Trường | Nội dung |
| --- | --- |
| Output AI | Skill `postman-newman-api-testing-workflow`; SVG tham chiếu workflow. |
| Verdict | **VALID** |
| Lý do | Đề §7 khuyến khích Agent Skill; sơ đồ nộp bài phải tự vẽ (§11). |
| SV phải làm | SVG chỉ là tham chiếu. SV tự vẽ `generator-design.png` bằng công cụ diagram. |

</div>

<div class="audit-entry">

#### **AI-005** · 01/09/2026 · Codex (GPT-5). Prompt: nâng cấp SKILL đầy đủ theo requirement.

| Trường | Nội dung |
| --- | --- |
| Output AI | Mở rộng skill: endpoint model, staged generation, audit, coverage gate, Postman/Newman/CI, evidence integrity. |
| Verdict | **VALID** |
| Lý do | G9.5 Create: thiết kế quy trình, không phải kết quả test. |
| SV phải làm | Review skill trước khi demo; pseudocode trong `eshop-api-test-generator/README.md` vẫn là bản nháp. |

</div>

<div class="audit-entry">

#### **AI-006** · 01/09/2026 · Codex (GPT-5). Prompt: hoàn thành HW6: chạy EShop, Postman-Newman, CI, docs, evidence.

| Trường | Nội dung |
| --- | --- |
| Output AI | Newman local; collection có `X-Student-Id: 23127173`; baseline 20 req / 21 assertion pass; compliance tái lập 3 defect; workflow CI. |
| Verdict | **INCOMPLETE** |
| Lý do | Đề §6: >=35 TC AI/API + audit + >=5 SV. Core suite chứng minh header/setup, chưa đạt ngưỡng coverage. |
| SV phải làm | Giữ raw/HTML thật. Không tuyên bố đủ 35+5 mỗi API từ baseline. |

</div>

<div class="audit-entry">

#### **AI-007** · 01/09/2026 · Codex (GPT-5). Prompt: cập nhật flow skill theo sơ đồ mới.

| Trường | Nội dung |
| --- | --- |
| Output AI | Gate: bug local → SV verify → GitHub Issue; CI fail phải được chẩn đoán trước khi ghi healthy. |
| Verdict | **VALID** |
| Lý do | Đề §11 cấm bịa Issue/evidence. |
| SV phải làm | Không tạo Issue hay push fail run khi SV chưa ủy quyền. |

</div>

<div class="audit-entry">

#### **AI-008** · 01/09/2026 · Codex (GPT-5). Prompt: ignore các file cần thiết cho HW6.

| Trường | Nội dung |
| --- | --- |
| Output AI | `.gitignore`: secret, `node_modules`, cache, ZIP; giữ collection, Newman, evidence, workflow. |
| Verdict | **VALID** |
| Lý do | Vệ sinh repo, không xóa artefact nộp. |
| SV phải làm | Kiểm tra file nộp không bị ignore nhầm. |

</div>

<div class="audit-entry">

#### **AI-009** · 01/09/2026 · Codex (GPT-5). Prompt: chụp ảnh Postman/Newman.

| Trường | Nội dung |
| --- | --- |
| Output AI | Terminal Newman baseline thật: `X-Student-Id`, `127.0.0.1:3000`, 20 req, 21 assertion, 0 fail. Postman Desktop khi đó không khởi động. |
| Verdict | **INCOMPLETE** |
| Lý do | Đề §11: ảnh console pre-request/`X-Student-Id` phải thật. Newman đạt; Postman Console lúc đó chưa có. |
| SV phải làm | Bổ sung sau bởi ảnh SV (AI-013). Không dùng ảnh VS Code thay Postman. |

</div>

<div class="audit-entry">

#### **AI-010** · 01/09/2026 · Codex (GPT-5). Prompt: SV cung cấp ảnh Postman để review.

| Trường | Nội dung |
| --- | --- |
| Output AI | Review Runner 21 passed; `POST /api/checkout` 200 + `X-Student-Id: 23127173`. Xóa ảnh import; yêu cầu redaction JWT. |
| Verdict | **VALID** |
| Lý do | Evidence do SV chụp, AI chỉ rà soát/đổi tên. |
| SV phải làm | Che Bearer token; ảnh chưa Send không tính execution. |

</div>

<div class="audit-entry">

#### **AI-011** · 01/09/2026 · Codex (GPT-5). Prompt: capture Runner mới sau khi tạo environment.

| Trường | Nội dung |
| --- | --- |
| Output AI | 21 passed, 0 failed, 1.604 s; `SETUP-04` trả 200 `orderId: 34`. |
| Verdict | **VALID** |
| Lý do | Biến token/orderId chỉ resolve sau setup chain. |
| SV phải làm | `403` của request lẻ với placeholder không phải pass evidence. |

</div>

<div class="audit-entry">

#### **AI-012** · 01/09/2026 · Codex (GPT-5). Prompt: bắt buộc dùng bộ năm ảnh Postman.

| Trường | Nội dung |
| --- | --- |
| Output AI | Lưu 2 capture local; 3 ảnh chat-rendered chưa có file gốc. |
| Verdict | **INCOMPLETE** |
| Lý do | Thiếu file gốc thì không được dựng lại ảnh. |
| SV phải làm | Hoàn tất ở AI-013 khi SV lưu `1.png`–`5.png`. |

</div>

<div class="audit-entry">

#### **AI-013** · 01/09/2026 · Codex (GPT-5). Prompt: SV đã lưu năm ảnh gốc; tự kiểm điểm.

| Trường | Nội dung |
| --- | --- |
| Output AI | Đổi tên `postman-runner-config`, `postman-run-results`, `postman-run-details-negative-cases`, `postman-c001-request-body/headers`. |
| Verdict | **VALID** |
| Lý do | ISTQB: evidence phải truy vết được. Ảnh 4–5 là cấu hình, không phải sent-result. |
| SV phải làm | Giữ nguyên bộ năm ảnh SV; không thay bằng ảnh AI. |

</div>

<div class="audit-entry">

#### **AI-014** · 01/09/2026 · Codex (GPT-5). Prompt: dùng năm ảnh GitHub Actions làm CI evidence.

| Trường | Nội dung |
| --- | --- |
| Output AI | Run/job `33500850638/99833592169`, baseline succeeded 21 s, Newman có `X-Student-Id`. |
| Verdict | **VALID** |
| Lý do | Đề §6: CI + screenshot/link. Chỉ có run pass. |
| SV phải làm | Chưa có remote fail có chủ đích; không tuyên bố đã có. |

</div>

<div class="audit-entry">

#### **AI-015** · 01/09/2026 · Codex (GPT-5). Prompt: review tài liệu HW06 và đồng bộ evidence.

| Trường | Nội dung |
| --- | --- |
| Output AI | Sửa README/checklist/roadmap/main report; hoàn thiện critique/disclosure/privacy bản ngắn. |
| Verdict | **VALID** |
| Lý do | Đồng bộ trạng thái, không bịa deliverable. |
| SV phải làm | Các mục pending vẫn phải làm từ SUT/GitHub/Excel/PDF. |

</div>

<div class="audit-entry">

#### **AI-016** · 01/09/2026 · Codex (GPT-5). Artifact tái lập từ workspace (chưa ghi audit lúc xảy ra): sinh ma trận 40 TC/API và collection observation 120, chạy Newman observation.

| Trường | Nội dung |
| --- | --- |
| Output AI | `test-case-matrix.md` / CSV: 120 dòng (35 AI + 5 SV mỗi API); collection thêm folder observation; Newman `observation-120-20260901.txt`: 140 req, 141 assertion, 0 fail. |
| Verdict | **INCOMPLETE** |
| Lý do | Đề §6 yêu cầu audit thủ công từng TC (`VALID`/`INVALID`/`INCOMPLETE` + lý do + sửa) rồi execute với oracle status/schema. Ma trận dùng rationale khuôn mẫu; cột `Student Verify` trống. Observation chỉ assert non-5xx — không phải 35 oracle/API. |
| SV phải làm | SV phải audit từng dòng, sửa oracle, map assertion thật, xuất Excel. Không dùng 141 assertion pass để khẳng định coverage đề. |

</div>

<div class="audit-entry">

#### **AI-017** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «xem Lab\HW6… bổ sung ai audit, ai mantory»

| Trường | Nội dung |
| --- | --- |
| Output AI | Đối chiếu tiến độ; viết lại Audit/Mandatory theo mẫu FIT; cập nhật prompt log. |
| Verdict | **VALID** |
| Lý do | Tài liệu hóa §9–§10. |
| SV phải làm | SV ký disclosure. |

</div>

<div class="audit-entry">

#### **AI-018** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «đọc lại quá trình… oracle theo spec… 15 TC SV… tiếng Việt… cập nhật audit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Ma trận 120 TC tiếng Việt; bỏ verdict AI; 15 TC SV; oracle theo spec; cập nhật báo cáo/checklist. |
| Verdict | **VALID** |
| Lý do | Thiết kế theo đặc tả, không theo code. |
| SV phải làm | Chưa chạy assertion 120 ID. |

</div>

<div class="audit-entry">

#### **AI-019** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «chạy script sinh lại TC; chạy repo Eshop; cập nhật audit; commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Chạy `generate-matrix.mjs` (120 TC) + `generate-collection.mjs`; khởi động EShop backend `127.0.0.1:3000` (PID nền); smoke `POST /api/login` 200 + `GET /api/products` 200. |
| Verdict | **VALID — preparation only** |
| Lý do | Đề chuẩn bị retest Newman/Postman; chưa ghi kết quả run mới. SV chạy `npm run test:smoke` / `test:compliance` trong `api-testing/`. |
| SV phải làm | Giữ server chạy khi test; tắt sau khi xong. |

</div>

<div class="audit-entry">

#### **AI-020** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «không chạy smoke, chạy real 120 case Newman, chụp minh chứng mới»

| Trường | Nội dung |
| --- | --- |
| Output AI | Restart EShop; Newman `--folder "00 Setup"` + 3 folder observation (120 TC): `full-120-20260903.txt`, HTML `full-120/report.html`, ảnh `newman-full-120-terminal/report-20260903.png`; script `npm run test:full120`. Kết quả: **128 req, 128 assertion, 0 fail**, 11.9s, host `127.0.0.1:3000`, `X-Student-Id: 23127173`. |
| Verdict | **INCOMPLETE** |
| Lý do | Run thật trên SUT local; thay minh chứng observation cũ (01/09). Observation vẫn chỉ assert non-5xx — chưa map oracle từng ID trong ma trận. |
| SV phải làm | SV tiếp tục map assertion theo `execution-mapping.md`; không dùng 128 pass để khẳng định đủ oracle. |

</div>

<div class="audit-entry">

#### **AI-021** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «commit Newman; làm tương tự Postman cap minh chứng mới; cập nhật audit; commit lại»

| Trường | Nội dung |
| --- | --- |
| Output AI | Commit `08e9730` (Newman full 120). Restart EShop; script `generate-postman-evidence.mjs` + `npm run evidence:postman`: Newman JSON `full-120-20260903.json`, 5 PNG `postman-*-20260903.png` (128 passed, 12.1s). Xóa ảnh 01/09. |
| Verdict | **INCOMPLETE** |
| Lý do | Kết quả run thật trên cùng collection Postman. Ảnh runner được render từ JSON/HTML helper (không phải cửa sổ Postman Desktop). Ảnh 4–5 vẫn là config traceability. |
| SV phải làm | Nếu đề bắt buộc screenshot Postman Desktop gốc, SV chụp lại Runner trên app; giữ script + JSON để đối chiếu. |

</div>

<div class="audit-entry">

#### **AI-022** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «vi phạm đặc tả thì fail; cập nhật TC, minh chứng, audit, commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Bỏ dual-mode baseline/compliance; core assert spec (400/403); observation A-031/A-032/B-004 map SEC-06/FR-10; `npm run test:core` **3 fail**, `test:full120` **5 fail**; cập nhật bug-report, ma trận, raw/HTML, ảnh Newman/Postman 03/09. |
| Verdict | **VALID** |
| Lý do | Fail phản ánh đúng vi phạm đặc tả trên SUT; bug report khớp Newman. |
| SV phải làm | Tiếp tục map oracle từng ID observation; tạo GitHub Issue. |

</div>

<div class="audit-entry">

#### **AI-023** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «review lại theo spec, thiết kế lại TC, cập nhật minh chứng/audit/commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Viết lại `oracle-utils.mjs` (map đủ A/B/C-001…040); `generate-collection.mjs` (62 setup fixture riêng, user2 IDOR, folder C trước B); ma trận + `oracle-execution.json`; Newman **182 req / 182 assertion / 12 fail** (6 bug spec); raw `full-120-spec-20260903.txt`, HTML, PNG Newman/Postman 03/09. |
| Verdict | **VALID** |
| Lý do | Oracle bám `api_specification.md` + README FR-04/10/18/SEC; ID Postman trùng ma trận; fail do SUT không phải fixture xung đột. |
| SV phải làm | Excel từng ID; GitHub Issue; Postman Desktop gốc nếu đề bắt buộc. |

</div>

<div class="audit-entry">

#### **AI-024** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «review lại TC và document; cập nhật bug report có Postman»

| Trường | Nội dung |
| --- | --- |
| Output AI | Review lần 2: sửa map C-017/C-018/C-019, A-011; thêm `test-case-review.md`; bug report cột Postman + 5 ảnh; cập nhật checklist/main-report. |
| Verdict | **VALID** |
| Lý do | TC khớp tiêu đề ma trận; tài liệu đồng bộ 182 req / 12 fail. |
| SV phải làm | Excel; GitHub Issue; Postman Desktop gốc nếu bắt buộc. |

</div>

<div class="audit-entry">

#### **AI-025** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «bạn đã chạy seed lại chưa»

| Trường | Nội dung |
| --- | --- |
| Output AI | Xác nhận: setup collection đăng ký/login lại user fixture mỗi lần chạy Newman; không có lệnh seed DB riêng — SUT dùng SQLite runtime, fixture trong folder `00 Setup`. |
| Verdict | **VALID** |
| Lý do | Giải thích trạng thái SUT trước retest; không bịa seed script. |
| SV phải làm | Restart EShop nếu DB cũ gây xung đột fixture. |

</div>

<div class="audit-entry">

#### **AI-026** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «ủa tôi thấy test xanh hết mà sao lại có bug report»

| Trường | Nội dung |
| --- | --- |
| Output AI | Giải thích: run observation cũ chỉ assert non-5xx (128 pass); bug report từ oracle đặc tả sau AI-022/023 (12 fail có chủ đích). |
| Verdict | **VALID** |
| Lý do | Phân biệt pass kỹ thuật vs vi phạm spec — đúng ISTQB oracle. |
| SV phải làm | Không dùng run observation cũ làm evidence cuối. |

</div>

<div class="audit-entry">

#### **AI-027** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «postman có export cả html để chụp như vậy hả»

| Trường | Nội dung |
| --- | --- |
| Output AI | Trả lời: Postman Desktop không export Runner HTML; 5 PNG sinh bằng Newman JSON → HTML helper → Playwright (`generate-postman-evidence.mjs`). |
| Verdict | **VALID** |
| Lý do | Minh bạch nguồn evidence; audit đánh INCOMPLETE nếu đề bắt buộc screenshot Desktop gốc. |
| SV phải làm | Chụp Postman Desktop thật nếu giảng viên yêu cầu. |

</div>

<div class="audit-entry">

#### **AI-028** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «cập nhật lại data mới ở api-testing chưa»

| Trường | Nội dung |
| --- | --- |
| Output AI | Xác nhận đồng bộ: collection 62 setup + 120 TC, `oracle-execution.json`, raw/HTML final 03/09, script `npm run test` / `evidence:postman`. |
| Verdict | **VALID** |
| Lý do | Artifact `api-testing/` khớp redesign AI-023. |
| SV phải làm | Chạy lại Newman sau mỗi sửa oracle. |

</div>

<div class="audit-entry">

#### **AI-029** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «xóa các file không cần thiết; giữ bản final»

| Trường | Nội dung |
| --- | --- |
| Output AI | Xóa baseline/compliance/core/full-120-spec cũ, HTML thư mục cũ, `capture-html/`; giữ `full-120-20260903.txt/json`, `report.html`, PNG final; cập nhật README, `.gitignore`, bug-report, checklist. |
| Verdict | **VALID** |
| Lý do | Giảm artifact trùng; path nộp bài rõ ràng. |
| SV phải làm | Commit cleanup; kiểm tra CI workflow còn trỏ path cũ. |

</div>

<div class="audit-entry">

#### **AI-030** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «lỗi gì đây» (ảnh terminal Newman)

| Trường | Nội dung |
| --- | --- |
| Output AI | Phân tích: (1) chữ `â"œ` = lỗi encoding Windows khi redirect CLI UTF-8; (2) **12 failed** = bug spec mong đợi, không phải crash Newman. |
| Verdict | **VALID** |
| Lý do | Phân biệt lỗi hiển thị vs kết quả test. |
| SV phải làm | Fix encoding raw output (AI-031). |

</div>

<div class="audit-entry">

#### **AI-031** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «fix lại chỗ đó; tất cả prompt phải cập nhật audit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Thêm `scripts/run-newman.mjs` (UTF-8 + `--disable-unicode` + ghi `full-120-20260903.txt/json`); cập nhật `npm run test`; tái chạy Newman **182/182/12 fail**; bổ sung audit AI-025…AI-031 + prompt log. |
| Verdict | **VALID** |
| Lý do | Raw CLI đọc được tiếng Việt và bảng ASCII trên Windows; audit đủ mọi prompt phiên 03/09 chiều. |
| SV phải làm | Commit; cập nhật PNG Newman nếu cần khớp raw mới. |

</div>

<div class="audit-entry">

#### **AI-032** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «dùng 5 ảnh Postman Desktop thay HTML capture; còn thiếu ảnh nào»

| Trường | Nội dung |
| --- | --- |
| Output AI | SV cung cấp 5 PNG gốc (Runner config/results, chi tiết FAIL, SETUP-07 headers, A-038 response); thay file render HTML; cập nhật README/bug-report/checklist/header. |
| Verdict | **VALID** |
| Lý do | Evidence Postman Desktop thật; 170 pass / 12 fail khớp Newman. |
| SV phải làm | Bổ sung Postman Console `X-Student-Id` (AI-033). |

</div>

<div class="audit-entry">

#### **AI-033** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «ảnh Postman Console X-Student-Id — ok chưa»

| Trường | Nội dung |
| --- | --- |
| Output AI | SV chụp Console: `X-Student-Id applied: 23127173` + SETUP-01 login 200; lưu `postman-console-student-id-20260903.png`; cập nhật header/checklist/disclosure. |
| Verdict | **VALID** |
| Lý do | Đáp ứng đề §11 — Console pre-request thật, không bịa. |
| SV phải làm | Postman evidence đủ 6 ảnh Desktop. |

</div>

<div class="audit-entry">

#### **AI-034** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «cập nhật audit, cập nhật doc, review doc, commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Rà soát đồng bộ main-report, README, roadmap, checklist, bug-report, mandatory disclosure; thay PNG HTML bằng 6 PNG Desktop gốc; commit nhánh `homework6`. |
| Verdict | **VALID** |
| Lý do | Tài liệu khớp 182 req / 12 fail / 6 ảnh Postman; audit AI-001…034. |
| SV phải làm | GitHub Issue; Excel/PDF (AI-035). |

</div>

<div class="audit-entry">

#### **AI-035** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «thêm Excel test summary, dùng flowchart có sẵn, tạo PDF»

| Trường | Nội dung |
| --- | --- |
| Output AI | Script `generate-excel-summary.mjs` + `npm run generate:excel` → `23127173_HW06_test-summary-20260903.xlsx` (**108 PASS / 12 FAIL**); copy flowchart → `doc/pdf/hw6-api-testing-workflow.png`; xuất PDF `main-report.pdf`, `AI-Audit-Report.pdf`, `AI-Critique.pdf`; cấu hình `.vscode/settings.json` (Markdown PDF → `doc/pdf/`). |
| Verdict | **VALID** |
| Lý do | Excel khớp Newman oracle; PDF từ markdown thật; flowchart do SV tự vẽ (skill asset), không AI-generated. |
| SV phải làm | SV kiểm tra số liệu Excel; GitHub Issue; ZIP nộp. |

</div>

<div class="audit-entry">

#### **AI-036** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «review lại toàn bộ các doc, cập nhật ai audit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Rà soát đồng bộ: `01_AI-Audit-Report`, `02_AI-Critique`, `03_Mandatory-Disclosure`, `04_AI-Privacy-Checklist`, `roadmap.md`, `checklist.md`, `test-case-review.md`, `git-commit-log.txt`, `appendixA-prompt-log.md`; sửa disclosure §6 (6 bug / 12 fail, không còn «ba lỗi compliance»); đánh dấu Excel/PDF/flowchart ✅. |
| Verdict | **VALID** |
| Lý do | Loại bỏ mâu thuẫn giữa doc (observation cũ vs oracle spec; Excel/PDF pending vs done). |
| SV phải làm | GitHub Issue + CI fail remote. |

</div>

<div class="audit-entry">

#### **AI-037** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «chỉ export main report đẹp hơn; cập nhật git commit log; cập nhật audit; commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Thiết kế lại `main-report.md` (cover FIT, bảng tóm tắt, bug + TC); CSS `doc/pdf/main-report.css`; xuất **chỉ** `doc/pdf/main-report.pdf`; cập nhật `git-commit-log.txt`. |
| Verdict | **VALID** |
| Lý do | PDF báo cáo chính đọc được, bám nội dung thật 182/12. |
| SV phải làm | GitHub Issue; ZIP nộp. |

</div>

<div class="audit-entry">

#### **AI-038** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «bổ sung các thứ liên quan đến báo cáo; cập nhật audit; commit»

| Trường | Nội dung |
| --- | --- |
| Output AI | Bổ sung `main-report.md`: link GitHub public, bảng Postman features (§6), Agent Skill/generator, CI links, tự đánh giá; cập nhật `README.md` bảng self-assessment §14 + số API/TC/bug; tái xuất `main-report.pdf`. |
| Verdict | **VALID** |
| Lý do | Đáp ứng đề §6 (Postman features), §14 (README self-assessment, link repo). Không bịa Issue/CI fail. |
| SV phải làm | SV: GitHub Issue, CI fail remote, điền Lớp/GV nếu cần. |

</div>

<div class="audit-entry">

#### **AI-039** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «dùng 5 ảnh minh chứng này» (GitHub Actions)

| Trường | Nội dung |
| --- | --- |
| Output AI | SV cung cấp 5 screenshot CI; lưu `ci-06`…`ci-10`. |
| Verdict | **VALID** |
| Lý do | Evidence CI thật; sau đó SV xác nhận lại là pass, fail chờ chụp `oracle-fail`. |
| SV phải làm | AI-040 sửa phân loại. |

</div>

<div class="audit-entry">

#### **AI-040** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «bỏ ci-01..05 sai; giữ ci-06..10 pass; fail chờ cap»

| Trường | Nội dung |
| --- | --- |
| Output AI | Xóa `ci-01`…`ci-05` (baseline cũ); giữ `ci-06`…`ci-10` làm pass; cập nhật README/ci-cd-report/main-report/checklist; fail ⏳ `oracle-fail`. |
| Verdict | **VALID** |
| Lý do | Không giữ evidence sai; trạng thái CI khớp ý SV. |
| SV phải làm | AI-041 thay bộ ảnh pass/fail mới. |

</div>

<div class="audit-entry">

#### **AI-041** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «6 ảnh minh chứng mới pass + fail; thay CI cũ; cập nhật doc + audit»

| Trường | Nội dung |
| --- | --- |
| Output AI | SV cung cấp 6 screenshot GitHub Actions (run #7 `full-fail`, #8 `full-pass`); xóa `ci-06`…`ci-10`; lưu `ci-fail-01`…`03`, `ci-pass-01`…`03`; đồng bộ `evidence/ci-cd/README`, `ci-cd-report`, `main-report` §8/§10, `checklist`, `README`, `roadmap`, Mandatory/Disclosure/Privacy; tái xuất `main-report.pdf`. |
| Verdict | **VALID** |
| Lý do | Evidence CI thật từ workflow `full-pass`/`full-fail`; pass và fail đều có minh chứng. |
| SV phải làm | AI-042 gắn link run. |

</div>

<div class="audit-entry">

#### **AI-042** · 03/09/2026 · Cursor (Composer 2.5). Prompt: «link pass/fail CI; cập nhật doc/audit; push main»

| Trường | Nội dung |
| --- | --- |
| Output AI | SV cung cấp URL run [#7 fail](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556) và [#8 pass](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307); gắn link vào `ci-cd-report`, `main-report` §8, `checklist`, Mandatory/Privacy; merge/push `main`. |
| Verdict | **VALID** |
| Lý do | Link trỏ đúng run thật trên GitHub Actions (Failed 51s / Success 40s). |
| SV phải làm | GitHub Issues; ZIP nộp. |

</div>

<div class="audit-entry">

#### **AI-043** · 03/09/2026 · Codex (GPT-5). Prompt: đọc requirement/hiện trạng; tạo 6 issue mới từ `issues/bug-report.md`; capture evidence; cập nhật docs/audit và commit.

| Trường | Nội dung |
| --- | --- |
| Output AI | Đối chiếu đề §6/§14 với 120 TC và Newman 182/12; kiểm tra 11 issue cũ để tránh tái sử dụng; sau xác nhận cuối của SV, tạo issue public [#18](https://github.com/HappyDuckCoder/Software-Testing/issues/18)–[#23](https://github.com/HappyDuckCoder/Software-Testing/issues/23), lưu 6 ảnh trang issue, thêm URL/evidence vào report và checklist. |
| Verdict | **VALID** |
| Lý do | Nội dung issue dùng oracle spec và kết quả run đã có; trang GitHub và screenshot được tạo/capture thật, không bịa request, response hoặc bằng chứng runtime. Việc đăng public là external action nên chỉ thực hiện sau xác nhận cuối của SV. |
| SV phải làm | SV kiểm tra lại issue trước khi nộp và tự đóng ZIP Moodle. |

</div>

<div class="audit-entry">

#### **AI-044** · 03/09/2026 · Cursor (Composer). Prompt: «PDF Audit/Critique xấu — sửa lại cho đẹp».

| Trường | Nội dung |
| --- | --- |
| Output AI | Thêm `audit-report.css` (A4 ngang, bảng 7pt, cover FIT) và `ai-critique.css` (cover + văn bản căn đều); cập nhật `export-audit-pdfs.mjs`; cover HTML trong markdown; xuất lại `AI-Audit-Report.pdf` và `AI-Critique.pdf` (HW5 + HW6). |
| Verdict | **VALID** |
| Lý do | Chỉ định dạng PDF; không đổi verdict hay số liệu audit. |
| SV phải làm | SV mở PDF kiểm tra bảng audit không bị cắt chữ. |

</div>

<div class="audit-entry">

#### **AI-045** · 03/09/2026 · Cursor (Composer). Prompt: «lỗi PDF audit — bảng vỡ từ AI-024»

| Trường | Nội dung |
| --- | --- |
| Output AI | Nguyên nhân: dòng trống giữa các hàng bảng markdown làm vỡ table từ AI-024. Sửa: chuyển 44 mục sang layout thẻ `.audit-entry` (bảng 2 cột/trường); CSS portrait; xuất lại PDF. |
| Verdict | **VALID** |
| Lý do | Sửa lỗi hiển thị PDF, không đổi verdict/số liệu audit gốc. |
| SV phải làm | Mở PDF kiểm tra từng thẻ AI-024…AI-044 hiển thị đúng cột. |

</div>

## 4. Tổng kết độ chính xác AI

| Chỉ số | Số lượng | Tỉ lệ |
| --- | ---: | ---: |
| Tổng artifact AI sinh đã audit | 45 | 100% |
| VALID (đúng hướng, dùng được sau rà soát) | 38 | 84% |
| INVALID (sai, loại bỏ) | 0 | 0% |
| INCOMPLETE (thiếu, phải sửa/bổ sung) | 7 | 16% |

Phân loại INCOMPLETE: AI-001 (setup), AI-006/AI-016/AI-020 (observation cũ), AI-009/AI-012/AI-021 (Postman helper). AI-022…AI-043: oracle spec, CI evidence, GitHub Issues và doc sync.

## 5. Kết luận — khi nào nên / không nên dùng AI

Nên dùng AI để dịch đề, dựng khung nộp, chọn API theo pool, gợi ý phân vùng domain/state/security, viết skill/pseudocode, và gom collection setup có `X-Student-Id`. Không nên dùng AI để biến số assertion pass thành coverage, bịa screenshot/issue, hoặc khóa oracle khi đặc tả mơ hồ. AI chỉ được đăng issue sau khi sinh viên đã đọc nội dung và xác nhận action công khai; observation 120 request không thay 35 test đã audit mỗi API. Sinh viên phải sửa từng TC, chạy assertion thật, rồi mới đóng gói.

## 6. Mandatory Disclosure (dán nguyên văn)

"Khung nộp bài, ma trận 120 test case, collection Postman/Newman, báo cáo và tài liệu audit được sinh với Codex (GPT-5) và Cursor (Composer 2.5); tôi đã duyệt toàn bộ 105 test case AI, tự bổ sung 15 test case sinh viên, thiết kế oracle theo đặc tả EShop (không theo code), cung cấp ảnh Postman Desktop/Console/CI gốc, Excel test summary (108 PASS / 12 FAIL), PDF báo cáo và flowchart workflow tự vẽ; sáu nhóm bug spec đã tái lập trên Newman (182 req / 12 fail); CI remote pass (#8) và fail (#7) đã chụp. Sau xác nhận cuối của tôi, Codex đã gửi sáu GitHub Issue bám bug report thật (#18–#23) và capture trang issue; AI Audit Report ghi rõ hoạt động này. ZIP do tôi tự đóng gói. Tôi cam đoan không dùng AI tạo artifact bị cấm."

Bản đầy đủ: `03_Mandatory-Disclosure.md`.

## 7. Chữ ký

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên (in hoa) | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Lớp / Khoá | Chưa điền |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Giảng viên | Chưa điền |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |

## 8. Quy tắc cập nhật

Mỗi lần dùng AI, thêm một hàng: timestamp, tool, prompt, output, verdict, lý do, phần đã kiểm tra/sửa. Không ghi bằng chứng thực thi chưa xảy ra.
