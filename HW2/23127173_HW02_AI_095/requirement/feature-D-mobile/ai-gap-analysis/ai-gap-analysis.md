# AI Gap Analysis - FR-10 Trạng thái đơn hàng

| Gap ID | Output AI | Thiếu / sai | Vì sao AI bỏ sót | Sinh viên sửa | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| D-GAP-01 | Generic state-machine tests may cover only happy path | User/mobile cancel must be rejected at `shipping` | Rule is split between FR-10 và FR-20 mobile | Added user-cancel tests for pending, confirmed, shipping, delivered, canceled | D-DT-05 to D-DT-09; D-BVA-05 to D-BVA-07 |
| D-GAP-02 | AI may assume final states are implemented correctly | Backend allows `canceled -> delivered` | Hidden in backend transition condition | Added canceled final-state tests and bug report | `backend/server.js`; D-DT-13; BUG-D-02 |
| D-GAP-03 | AI may focus on admin only | FR-10 affects user/mobile cancel route too | State machine spans multiple endpoints and UIs | Added actor/ownership constraints | D-DT-C03, D-DT-C04 |

## Tóm tắt

The dựa trên source FR-10 tests model the order workflow as a state graph with actor constraints. Reading the repo showed two important gaps: user cancellation currently appears possible for `shipping` orders, and the backend explicitly allows `canceled -> delivered` even though `canceled` is final. The revised Domain Testing and BVA artifacts therefore focus on edge transitions, final-state boundaries, user/admin actor differences, and ownership.





