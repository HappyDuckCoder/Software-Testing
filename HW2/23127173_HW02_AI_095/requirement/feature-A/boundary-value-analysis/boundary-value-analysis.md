# Boundary Value Analysis - FR-04 Personal Profile Management

## 1. Boundary Inventory

| Boundary ID | Variable | Lower bound | Upper bound | Rule source | Confidence |
| --- | --- | --- | --- | --- | --- |
| A-BVA-B01 | `phone` length | 10 digits | 11 digits | `Eshop/README.md` FR-04: phone starts `0`, 10-11 digits | High |
| A-BVA-B02 | `phone` first character | Must be `0` | N/A | `Eshop/README.md` FR-04 | High |
| A-BVA-B03 | `name` length in UI | 1 character | No upper bound in source | `Profile.jsx` uses `required`; no `maxLength` | Medium |
| A-BVA-B04 | `shipping_address` length | 0 characters | No upper bound in source | `Profile.jsx` textarea has no `required`/`maxLength`; DB column is `TEXT` | Medium |

## 2. Boundary Values

| Boundary ID | Below lower | Lower | Above lower | Nominal | Below upper | Upper | Above upper |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A-BVA-B01 | 9 digits: `091234567` | 10 digits: `0912345678` | 11 digits: `09123456789` | 10 digits: `0987654321` | 10 digits | 11 digits | 12 digits: `091234567890` |
| A-BVA-B02 | N/A | Starts with `0`: `0912345678` | Starts with `1`: `1912345678` | Starts with `0`: `0987654321` | N/A | N/A | N/A |
| A-BVA-B03 | 0 chars | 1 char: `A` | 2 chars: `An` | `Nguyen Van A` | N/A | N/A | No source upper boundary |
| A-BVA-B04 | N/A | 0 chars | 1 char: `A` | `227 Nguyen Van Cu` | N/A | N/A | No source upper boundary |

## 3. BVA Test Cases

| ID | Objective | Boundary | Input | Preconditions | Steps | Expected | Actual | Verdict | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-BVA-01 | Reject phone below lower length | A-BVA-B01 below lower | Phone `091234567` | Logged in/API token | Submit profile update | Should reject because phone has 9 digits, below README minimum | Not run | Not run | Pending evidence |
| A-BVA-02 | Accept phone at lower length | A-BVA-B01 lower | Phone `0912345678` | Logged in/API token | Submit profile update; refetch profile | Should accept because phone starts `0` and has 10 digits | Not run | Not run | Pending evidence; likely frontend bug |
| A-BVA-03 | Accept phone at upper length | A-BVA-B01 upper | Phone `09123456789` | Logged in/API token | Submit profile update; refetch profile | Should accept because phone starts `0` and has 11 digits | Not run | Not run | Pending evidence; likely frontend bug |
| A-BVA-04 | Reject phone above upper length | A-BVA-B01 above upper | Phone `091234567890` | Logged in/API token | Submit profile update | Should reject because phone has 12 digits | Not run | Not run | Pending evidence |
| A-BVA-05 | Accept phone with required leading zero | A-BVA-B02 lower | Phone `0987654321` | Logged in/API token | Submit profile update; refetch profile | Should accept because first char is `0` and length is valid | Not run | Not run | Pending evidence; likely frontend bug |
| A-BVA-06 | Reject phone that starts with non-zero digit | A-BVA-B02 above leading-zero rule | Phone `1987654321` | Logged in/API token | Submit profile update | Should reject because README requires leading `0` | Not run | Not run | Pending evidence; likely frontend bug |
| A-BVA-07 | Reject empty name in UI | A-BVA-B03 below lower | Name empty | Logged in frontend | Clear name; submit form | Browser blocks submit due to required input | Not run | Not run | Pending screenshot |
| A-BVA-08 | Accept one-character name in UI/API | A-BVA-B03 lower | Name `A`; valid phone/address | Logged in | Submit update; refetch profile | Should accept because source has no minimum above required non-empty | Not run | Not run | Pending evidence |
| A-BVA-09 | Accept two-character name in UI/API | A-BVA-B03 above lower | Name `An`; valid phone/address | Logged in | Submit update; refetch profile | Should accept and persist | Not run | Not run | Pending evidence |
| A-BVA-10 | Accept empty shipping address | A-BVA-B04 lower | Empty `shipping_address` | Logged in/API token | Clear address; update; refetch profile | Should accept because no required rule in source | Not run | Not run | Pending evidence |
| A-BVA-11 | Accept one-character shipping address | A-BVA-B04 above lower | Address `A` | Logged in/API token | Submit update; refetch profile | Should accept and persist | Not run | Not run | Pending evidence |
| A-BVA-12 | Discover address practical upper behavior | A-BVA-B04 no source upper bound | Long address, e.g. 500 characters | Logged in/API token | Submit update; refetch profile | Should either persist or reveal implementation/storage limit; no documented upper bound | Not run | Not run | Pending evidence |

## 4. Review Notes

* Agent skill used: `boundary-value-analysis-designer`.
* BVA is now limited to boundaries visible in the EShop repo. DOB/avatar/gender boundaries were removed because FR-04 code does not contain those fields.
* Phone BVA is especially important because source review shows the UI regex contradicts the README rule.
