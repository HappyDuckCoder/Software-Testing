# Thiết kế AI test generator — EShop

## Hợp đồng đầu vào / đầu ra

**Đầu vào:** endpoint đã chọn, `api_specification.md`, FR/SEC trong README, state machine đơn hàng.

**Đầu ra:** ma trận test nháp (ID, partition, precondition, request, expected status/schema), cờ `CAN_SINH_VIEN_REVIEW`.

## Sơ đồ nộp bài

Tự vẽ `generator-design.png` (không để AI vẽ trực tiếp). Luồng gợi ý:

```text
Đọc đặc tả → mô hình endpoint/tham số
  → planner (domain / state / security / schema)
  → sinh test case + oracle theo FR/SEC
  → loại trùng + đánh dấu gap
  → sinh viên duyệt / bổ sung ≥5 case
  → export Postman + Excel
```

## Pseudocode

```text
spec = parse("Eshop/api_specification.md", "Eshop/README.md")
for endpoint in selected_apis:
  params = extract_parameters(endpoint)
  for p in params:
    add_valid_and_invalid_partitions(p, spec_rules[p])
  if endpoint.stateful:
    add_transitions(FR-10_state_machine)
  add_security_cases(SEC-02..SEC-07, IDOR, injection)
  for case in generated:
    case.expected = oracle_from_spec_only(case)  // không đọc server.js
    case.flag = NEEDS_HUMAN_REVIEW
deduplicate(cases)
human_adds_at_least_five_gap_cases_per_api()
export_approved_cases_to_postman_and_excel()
```

Pseudocode là bản nháp; mọi rule phải đối chiếu đặc tả trước khi demo.
