# Boundary Value Analysis - FR-11 Order History View (User)

## 1. Boundary Inventory

| Boundary ID | Variable | Lower bound | Upper bound | Rule source | Confidence |
| --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | Order count displayed | 0 orders | No documented upper bound | `Profile.jsx` empty/table branch | Medium |
| B-BVA-B02 | Order id for detail API | Existing id | N/A | `GET /api/orders/:id` route | Medium |
| B-BVA-B03 | `total_amount` display | 0 | No documented upper bound | DB integer + UI formatting | Medium |
| B-BVA-B04 | Status set size | 5 valid states | 5 valid states | README FR-10/FR-11 | High |

## 2. Boundary Values

| Boundary ID | Below lower | Lower | Above lower | Nominal | Below upper | Upper | Above upper |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | N/A | 0 orders | 1 order | 2 orders | N/A | No upper bound | Many orders, e.g. 50 |
| B-BVA-B02 | Non-existing id | Existing id | Other user's existing id | Own order id | N/A | N/A | N/A |
| B-BVA-B03 | Negative amount | 0 | 1 | 300000 | N/A | No upper bound | Very large amount |
| B-BVA-B04 | Invalid status | First valid: `pending` | Second valid: `confirmed` | `shipping` | `delivered` | Fifth valid: `canceled` | Unknown status |

## 3. BVA Test Cases

| ID | Objective | Boundary | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-01 | Verify empty history boundary | B-BVA-B01 lower | 0 orders | User has no orders | Open `/profile` | Empty message appears; no broken table | Not run | Not run | Pending screenshot |
| B-BVA-02 | Verify first order row boundary | B-BVA-B01 above lower | 1 order | User has one order | Open `/profile` | Exactly one row appears | Not run | Not run | Pending screenshot |
| B-BVA-03 | Verify many-order rendering | B-BVA-B01 no upper bound | 50 orders | Seed/create many orders | Open `/profile` | Rows render without missing current user's orders | Not run | Not run | Pending screenshot |
| B-BVA-04 | Verify non-existing order detail id | B-BVA-B02 below existing | `GET /api/orders/999999` | Backend running | Call detail endpoint | 404 `Order not found` | Not run | Not run | Pending API evidence |
| B-BVA-05 | Verify other user's existing detail id | B-BVA-B02 ownership boundary | Other user's order id | Valid token for different user | Call detail endpoint | Should reject; source likely leaks order | Not run | Not run | Pending API evidence |
| B-BVA-06 | Verify zero total display | B-BVA-B03 lower | `total_amount=0` | Order exists | Open history | `0` amount formats safely | Not run | Not run | Pending screenshot |
| B-BVA-07 | Verify all five valid statuses | B-BVA-B04 upper set | One order per status | Orders seeded | Open history | Each status has correct Vietnamese label/color | Not run | Not run | Pending screenshot |
| B-BVA-08 | Verify unknown status fallback | B-BVA-B04 above valid set | status `returned` | Direct DB/API setup | Open history | UI should not crash; fallback label visible | Not run | Not run | Pending screenshot |

## 4. Review Notes

* Agent skill used: `boundary-value-analysis-designer`.
* FR-11 has fewer numeric boundaries; most value comes from count, ownership, status-set, and detail-id boundaries.
