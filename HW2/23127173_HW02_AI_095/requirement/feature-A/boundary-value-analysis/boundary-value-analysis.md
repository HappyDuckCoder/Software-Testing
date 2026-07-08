# Boundary Value Analysis - FR-04 Quản lý hồ sơ cá nhân

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| A-BVA-B01 | `phone` length | 10 digits | 11 digits | `Eshop/README.md` FR-04: phone starts `0`, 10-11 digits | Cao |
| A-BVA-B02 | `phone` first character | Must be `0` | N/A | `Eshop/README.md` FR-04 | Cao |
| A-BVA-B03 | `name` length in UI | 1 character | Không có biên trên in source | `Profile.jsx` uses `required`; no `maxLength` | Trung bình |
| A-BVA-B04 | `shipping_address` length | 0 characters | Không có biên trên in source | `Profile.jsx` textarea has no `required`/`maxLength`; DB column is `TEXT` | Trung bình |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A-BVA-B01 | 9 digits: `091234567` | 10 digits: `0912345678` | 11 digits: `09123456789` | 10 digits: `0987654321` | 10 digits | 11 digits | 12 digits: `091234567890` |
| A-BVA-B02 | N/A | Starts with `0`: `0912345678` | Starts with `1`: `1912345678` | Starts with `0`: `0987654321` | N/A | N/A | N/A |
| A-BVA-B03 | 0 chars | 1 char: `A` | 2 chars: `An` | `Nguyen Van A` | N/A | N/A | No source upper boundary |
| A-BVA-B04 | N/A | 0 chars | 1 char: `A` | `227 Nguyen Van Cu` | N/A | N/A | No source upper boundary |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-BVA-01 | Reject phone below lower length | A-BVA-B01 below lower | A-BVA-B01 below lower | Token=valid user token; name=Nguyen Van A; phone=Phone `091234567`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ | Nên reject because phone has 9 digits, below README minimum | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-02 | Accept phone at lower length | A-BVA-B01 lower | A-BVA-B01 lower | Token=valid user token; name=Nguyen Van A; phone=Phone `0912345678`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ; refetch hồ sơ | Nên accept because phone starts `0` and has 10 digits | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; likely frontend bug |
| A-BVA-03 | Accept phone at upper length | A-BVA-B01 upper | A-BVA-B01 upper | Token=valid user token; name=Nguyen Van A; phone=Phone `09123456789`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ; refetch hồ sơ | Nên accept because phone starts `0` and has 11 digits | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; likely frontend bug |
| A-BVA-04 | Reject phone above upper length | A-BVA-B01 above upper | A-BVA-B01 above upper | Token=valid user token; name=Nguyen Van A; phone=Phone `091234567890`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ | Nên reject because phone has 12 digits | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-05 | Accept phone with required leading zero | A-BVA-B02 lower | A-BVA-B02 lower | Token=valid user token; name=Nguyen Van A; phone=Phone `0987654321`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ; refetch hồ sơ | Nên accept because first char is `0` and length is valid | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; likely frontend bug |
| A-BVA-06 | Reject phone that starts with non-zero digit | A-BVA-B02 above leading-zero rule | A-BVA-B02 above leading-zero rule | Token=valid user token; name=Nguyen Van A; phone=Phone `1987654321`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit cập nhật hồ sơ | Nên reject because README requires leading `0` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; likely frontend bug |
| A-BVA-07 | Reject empty name in UI | A-BVA-B03 below lower | A-BVA-B03 below lower | Token=valid user token; name=Nguyen Van A; phone=Name empty; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập frontend | Clear name; submit form | Browser blocks submit due to required input | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| A-BVA-08 | Accept one-character name in UI/API | A-BVA-B03 lower | A-BVA-B03 lower | Token=valid user token; name=Nguyen Van A; phone=Name `A`; valid phone/address; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập | Submit update; refetch hồ sơ | Nên accept because source has no minimum above required non-empty | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-09 | Accept two-character name in UI/API | A-BVA-B03 above lower | A-BVA-B03 above lower | Token=valid user token; name=Nguyen Van A; phone=Name `An`; valid phone/address; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập | Submit update; refetch hồ sơ | Nên accept and persist | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-10 | Accept empty shipping address | A-BVA-B04 lower | A-BVA-B04 lower | Token=valid user token; name=Nguyen Van A; phone=Rỗng `shipping_address`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Xóa địa chỉ; cập nhật; refetch hồ sơ | Nên accept because no required rule in source | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-11 | Accept one-character shipping address | A-BVA-B04 above lower | A-BVA-B04 above lower | Token=valid user token; name=Nguyen Van A; phone=Address `A`; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit update; refetch hồ sơ | Nên accept and persist | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| A-BVA-12 | Discover address practical upper behavior | A-BVA-B04 no source upper bound | A-BVA-B04 no source upper bound | Token=valid user token; name=Nguyen Van A; phone=Địa chỉ dài, ví dụ 500 ký tự; shipping_address=227 Nguyen Van Cu; email=test@eshop.com disabled/not sent; role=not sent | Đã đăng nhập/API token | Submit update; refetch hồ sơ | Nên được lưu hoặc bộc lộ giới hạn implementation/lưu trữ; không có biên trên được mô tả | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |

## 4. Ghi chú review

* Agent skill used: `boundary-value-analysis-designer`.
* BVA is now limited to boundaries visible in the EShop repo. DOB/avatar/gender boundaries were removed because FR-04 code does not contain those fields.
* Phone BVA is especially important because source review shows the UI regex contradicts the README rule.





