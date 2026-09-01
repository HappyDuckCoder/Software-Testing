# Executable mapping for HW06 test cases

Rows marked “requirement oracle” are deliberately expected to fail in compliance mode until the SUT defect is fixed. Rows with ambiguous validations remain `INCOMPLETE` in the audit and require student verification before assertion finalization.

| ID | Fixture/precondition | Request mapping | Expected status/oracle | Student Verify |
| --- | --- | --- | --- | --- |
| A-001 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-002 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-003 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-004 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-005 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-006 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-007 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-008 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-009 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-010 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-011 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-012 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-013 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-014 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-015 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-016 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-017 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-018 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-019 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-020 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-021 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-022 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-023 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-024 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-025 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-026 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-027 | Login user unless auth-negative case. | PUT /api/users/me; No Authorization header; mutate field named by case. | 401 |  |
| A-028 | Login user unless auth-negative case. | PUT /api/users/me; Bearer invalid/expired JWT; mutate field named by case. | 403 |  |
| A-029 | Login user unless auth-negative case. | PUT /api/users/me; Bearer invalid/expired JWT; mutate field named by case. | 403 |  |
| A-030 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-031 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 400 requirement oracle (SUT observed 200) |  |
| A-032 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 400 requirement oracle (SUT observed 200) |  |
| A-033 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-034 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-035 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-036 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-037 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-038 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-039 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| A-040 | Login user unless auth-negative case. | PUT /api/users/me; Bearer {{userToken}}; mutate field named by case. | 200 observed baseline |  |
| B-001 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-002 | Fresh order already canceled. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 |  |
| B-003 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-004 | Fresh order transitioned pending→confirmed→shipping. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 requirement oracle (SUT observed 200) |  |
| B-005 | Fresh delivered order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 |  |
| B-006 | Fresh order already canceled. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 |  |
| B-007 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-008 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-009 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-010 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-011 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-012 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-013 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-014 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-015 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-016 | Use invalid/nonexistent order id. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 404 |  |
| B-017 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-018 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-019 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-020 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; No Authorization header. | 401 |  |
| B-021 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer invalid/expired JWT. | 403 |  |
| B-022 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer invalid/expired JWT. | 403 |  |
| B-023 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-024 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-025 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-026 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-027 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-028 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-029 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-030 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-031 | Fresh order already canceled. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 |  |
| B-032 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-033 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-034 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-035 | Fresh order transitioned pending→confirmed→shipping. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 400 requirement oracle (SUT observed 200) |  |
| B-036 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-037 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-038 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-039 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| B-040 | Fresh user-owned pending/confirmed order. | PUT /api/orders/{id}/cancel; Bearer {{userToken}}. | 200 |  |
| C-001 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-002 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-003 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-004 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-005 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-006 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-007 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-008 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-009 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-010 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-011 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-012 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-013 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-014 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-015 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-016 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-017 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-018 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-019 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-020 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; No Authorization header; body {status: target}. | 401 |  |
| C-021 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer invalid/expired JWT; body {status: target}. | 403 |  |
| C-022 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer invalid/expired JWT; body {status: target}. | 403 |  |
| C-023 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{userToken}}; body {status: target}. | 403 requirement oracle (SUT observed 200) |  |
| C-024 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{userToken}}; body {status: target}. | 403 requirement oracle (SUT observed 200) |  |
| C-025 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-026 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-027 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-028 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-029 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-030 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-031 | Use invalid/nonexistent order id. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 404 |  |
| C-032 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-033 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-034 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-035 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-036 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-037 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 400 |  |
| C-038 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-039 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |
| C-040 | Create fresh order and move it to the source state named by case. | PUT /api/admin/orders/{id}/status; Bearer {{adminToken}}; body {status: target}. | 200 |  |