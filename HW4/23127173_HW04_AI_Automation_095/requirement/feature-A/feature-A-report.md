# Báo cáo Feature A — FR-04 Quản lý hồ sơ cá nhân (Automation)

## 1. Lựa chọn feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool A |
| Feature ID | FR-04 |
| Mô tả | Quản lý hồ sơ cá nhân |
| Nguồn HW02 | `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-A/` |
| Trạng thái automation | Khung script — chưa chạy đủ 3 browser |

## 2. Phạm vi automation

| Thành phần | Đường dẫn SUT |
| --- | --- |
| UI Profile | `Eshop/frontend-web/src/pages/Profile.jsx` |
| API | `PUT /api/users/me`, `GET /api/users/me` |
| Luồng | Login → `/profile` → sửa name/phone/address → lưu |

## 3. Map ≥ 12 test case HW02 → automation

| Auto ID | HW2 ref | Loại | Mô tả ngắn | Assertion pattern |
| --- | --- | --- | --- | --- |
| A-AUTO-01 | A-DT-01 | positive | User hợp lệ mở profile | URL + visibility |
| A-AUTO-02 | A-DT-02 | positive | Cập nhật name hợp lệ | text |
| A-AUTO-03 | A-BVA-01 | boundary | Phone 10 chữ số hợp lệ | text |
| A-AUTO-04 | A-BVA-02 | boundary | Phone 11 chữ số hợp lệ | text |
| A-AUTO-05 | A-BVA-03 | negative | Phone không bắt đầu 0 | text / validation |
| A-AUTO-06 | A-BVA-04 | negative | Phone quá ngắn | attribute / message |
| A-AUTO-07 | A-DT-08 | negative | Name rỗng (UI required) | attribute |
| A-AUTO-08 | A-DT-03 | positive | Email readonly trên UI | attribute |
| A-AUTO-09 | A-DT-12 | negative | Không login → redirect login | URL |
| A-AUTO-10 | A-DT-15 | edge | Address rỗng | text |
| A-AUTO-11 | A-DT-18 | positive | Message thành công sau save | visibility |
| A-AUTO-12 | A-DT-20 | negative | API role injection (nếu automate được qua UI+API helper) | count/state |

## 4. Data & script

| Artifact | Path |
| --- | --- |
| Test data | `automation/data/feature-a-profile.json` |
| Spec | `automation/tests/feature-a-profile.spec.ts` |
| HTML reports | `evidence/html-reports/feature-a-{chromium,firefox,webkit}/` |

## 5. Kết quả thực thi

| Browser | Pass | Fail | Report path |
| --- | ---: | ---: | --- |
| Chromium | `[CHƯA CHẠY]` | | |
| Firefox | `[CHƯA CHẠY]` | | |
| WebKit | `[CHƯA CHẠY]` | | |

## 6. AI review notes

Xem `ai-gap-analysis/ai-gap-analysis.md` và `bug-report/bug-report.md`.
