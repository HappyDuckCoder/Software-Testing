# Báo cáo CI — kiểm thử hiệu năng HW5

## Cấu hình

Workflow: [`.github/workflows/github-actions-performance.yml`](../../../.github/workflows/github-actions-performance.yml)

| Mục | Giá trị |
| --- | --- |
| Tên workflow | **HW5 Performance tests** |
| Job | **Load + Stress + Spike** (plan JMeter thật, không smoke) |
| SUT | Clone `ttbhanh/eshop-sut` → `eshop-sut/` |
| JMeter | Apache JMeter **5.6.3** |
| Endurance | **Không chạy trên CI** (~601 s — chỉ local) |
| Gate | So baseline **Load** — fail nếu p95 tăng >20% hoặc lỗi >1% |

## Minh chứng remote (03/09/2026)

| Run | GitHub Actions | Trạng thái | Thời lượng | Kết quả |
| --- | --- | --- | ---: | --- |
| **Pass #2** | [run 33755210272](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33755210272) | ✅ Success | 6m 40s | Load + Stress + Spike; artefact `hw5-performance-jtl-html` (3,07 MB) |

**Trigger:** `workflow_dispatch` trên nhánh `main`, commit `e044a93`, user `HappyDuckCoder`.

**Các bước đã chạy:** checkout repo + eshop-sut → Node 20 + Java 17 → cài SUT + JMeter → start SUT → **Run Load** → **Compare baseline** → **Run Stress** → **Run Spike** → upload artefact.

**Cảnh báo (không fail job):** Node 20 deprecated trên runner; `setup-java@v4` deprecated — nên nâng lên v5 sau.

## Ảnh minh chứng

Thư mục: `evidence/ci-cd/`

| File | Nội dung |
| --- | --- |
| `hw5-ci-pass-01-summary-queued.png` | Overview run #2 — job queued |
| `hw5-ci-pass-02-job-running.png` | Job đang chạy (setup Java / các bước đầu) |
| `hw5-ci-pass-03-job-success.png` | Job **Load + Stress + Spike** — Success 6m 35s |

## Local vs CI

| Môi trường | Kịch bản | Ghi chú |
| --- | --- | --- |
| **Local** (31/08) | Load, Stress, Spike, **Endurance** | JTL/HTML trong `performance/`; ảnh Task Manager |
| **CI** (03/09) | Load, Stress, Spike | JTL/HTML trong artefact run; seed lại trước mỗi kịch bản |

Baseline gate (`baseline.json`) lấy từ Load local; CI runner có thể khác máy local → cần rebaseline nếu gate fail trên môi trường mới.
