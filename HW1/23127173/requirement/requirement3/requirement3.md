# Requirement 3 - Test case cho san pham vat ly: remote dieu hoa

## 1. Pham vi va doi tuong kiem thu

San pham duoc chon la remote dieu hoa Casper, model Remote U25 Series, trong anh minh chung `devices/devices.jpg`. Remote co man hinh LCD va cac nut chinh: Power, Mode, Speed, Turbo, iSAVE, Baby Care, tang/giam nhiet do, L/R Swing, U/D Swing, Menu va OK.

Anh minh chung hien co da dat remote va the sinh vien trong cung khung hinh. Khong duoc dung AI de tao, sua gia, hoac thay the anh minh chung nay.

## 2. Khai bao thiet bi

| Muc | Gia tri |
| --- | --- |
| San pham | Remote dieu khien dieu hoa |
| Hang | Casper |
| Model | Remote U25 Series |
| Nam san xuat | Not visible on provided device evidence |
| Serial number | Not visible on provided device evidence; neu tim thay tren mat sau/nap pin thi che 4 ky tu giua, vi du `AB12****78` |
| Anh minh chung | `devices/devices.jpg` - remote + the sinh vien trong cung khung hinh |
| Video minh chung | `video-youtube-test/link-video.md` - co 5 link YouTube Shorts cho TC-01, TC-02, TC-03, TC-05 va TC-18 |

## 3. Gia dinh kiem thu

- Remote co pin va man hinh LCD hien thi duoc.
- Dieu hoa tuong ung dang hoat dong binh thuong va nhan tin hieu hong ngoai tu remote.
- Nguoi test dung remote o khoang cach gan, huong ve mat nhan cua dieu hoa, tru khi test case co noi dung can che tin hieu hoac thay doi khoang cach.
- Actual result va defect chi duoc ket luan sau khi sinh vien chay tren thiet bi that. Bang duoi gom 15 test case ban dau va 3 edge case bo sung do sinh vien tu tim ra sau khi test thiet bi.

## 4. Bo test case

| TC ID | Objective | Input | Steps | Expected | Actual | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| TC-01 | Kiem tra bat/tat co ban bang nut Power. | Nut Power mau do. | 1. Dat remote huong ve dieu hoa. 2. Nhan Power de bat. 3. Doi dieu hoa phan hoi. 4. Nhan Power lan nua de tat. | Dieu hoa bat/tat tuong ung; remote hien trang thai power ro rang; co tieng beep hoac phan hoi tu dieu hoa. | Dung nhu Expected. | Pass |
| TC-02 | Kiem tra chuyen che do lam mat. | Nut Mode den che do Cool. | 1. Bat dieu hoa. 2. Nhan Mode den khi LCD hien `COOL`. 3. Doi 10-20 giay. | LCD hien Cool; dieu hoa chuyen sang che do lam mat; canh gio/quat phan hoi on dinh. | Dung nhu Expected. | Pass |
| TC-03 | Kiem tra tang/giam nhiet do trong nguong hop le. | Nut `+` va `-`. | 1. Bat Cool. 2. Nhan `+` nhieu lan den gioi han tren. 3. Nhan `-` nhieu lan den gioi han duoi. | Nhiet do thay doi tung buoc, khong vuot nguong ho tro cua may; LCD khong bi treo hoac hien ky tu la. | Dung nhu Expected. | Pass |
| TC-04 | Kiem tra nut Speed thay doi toc do quat. | Nut Speed. | 1. Bat Cool. 2. Nhan Speed tung lan. 3. Quan sat icon/toc do quat. | Moi lan nhan chuyen sang toc do khac theo vong lap; dieu hoa phan hoi dung. | O quat silent thi nghe tieng nho, o turbo thi nghe tieng manh | Pass |
| TC-05 | Kiem tra nut Turbo. | Nut Turbo. | 1. Bat Cool. 2. Nhan Turbo. 3. Doi 10-20 giay. 4. Nhan Turbo lan nua neu co che do tat. | Che do Turbo duoc bat/tat ro rang; may tang cong suat/quat theo thiet ke; LCD hien icon/chu tuong ung. | Dung nhu Expected. | Pass |
| TC-06 | Kiem tra L/R Swing. | Nut L/R Swing. | 1. Bat dieu hoa. 2. Nhan L/R Swing. 3. Quan sat canh dao gio trai/phai. 4. Nhan lai de dung/chuyen vi tri. | Canh gio trai/phai di chuyen hoac doi trang thai theo lenh; khong bi ket. | Dung nhu Expected. | Pass |
| TC-07 | Kiem tra U/D Swing. | Nut U/D Swing. | 1. Bat dieu hoa. 2. Nhan U/D Swing. 3. Quan sat canh dao gio len/xuong. 4. Nhan lai de dung/chuyen vi tri. | Canh gio len/xuong di chuyen hoac doi trang thai theo lenh; khong bi ket. | Dung nhu Expected. | Pass |
| TC-08 | Kiem tra iSAVE co luu/hoi phuc cau hinh. | Nhiet do, Mode, Speed, nut iSAVE. | 1. Dat Cool, nhiet do X, speed Y. 2. Nhan iSAVE. 3. Doi cau hinh sang gia tri khac. 4. Nhan iSAVE lai. | Remote/dieu hoa hoi phuc cau hinh da luu hoac kich hoat che do tiet kiem dung theo manual. | iSave chi luu trang thai dau tien, bam iSave thi khong luu trang thai gan nhat | Fail |
| TC-09 | Kiem tra Baby Care khong xung dot voi Turbo. | Nut Baby Care va Turbo. | 1. Bat Cool. 2. Nhan Baby Care. 3. Nhan Turbo. 4. Quan sat LCD va phan hoi may. | He thong xu ly uu tien ro rang: hoac khong cho bat dong thoi, hoac tu tat che do xung dot; khong de LCD hien trang thai mau thuan. | Dung nhu Expected. | Pass |
| TC-10 | Kiem tra Menu/OK dieu huong tinh nang phu. | Nut Menu va OK. | 1. Nhan Menu. 2. Dung phim dieu huong neu co. 3. Nhan OK. 4. Doi timeout. | Menu hien/doi muc ro rang; OK xac nhan dung; neu khong thao tac thi menu thoat an toan. | Dung nhu Expected. | Pass |
| TC-11 | Kiem tra bam nhanh Power lien tiep. | Power x 5 trong 3 giay. | 1. Huong remote ve dieu hoa. 2. Nhan Power lien tiep 5 lan nhanh. 3. Quan sat LCD va dieu hoa. | Trang thai cuoi cung phai nhat quan voi so lan nhan; remote khong treo; dieu hoa khong vao trang thai nua bat/nua tat. | Dung nhu Expected. | Pass |
| TC-12 | Kiem tra bam giu `+`/`-` qua gioi han. | Giu `+` 5 giay, giu `-` 5 giay. | 1. Bat Cool. 2. Giu `+` den gioi han tren. 3. Giu tiep 5 giay. 4. Lap lai voi `-`. | Remote clamp gia tri tai gioi han, khong tran so, khong nhay ve gia tri bat thuong. | Dung nhu Expected. | Pass |
| TC-13 | Kiem tra gui lenh khi bi che tin hieu hong ngoai. | Tay/giay che dau remote. | 1. Bat dieu hoa. 2. Che dau phat IR cua remote. 3. Nhan Mode hoac Speed. 4. Bo che va nhan lai. | Khi bi che, dieu hoa khong doi trang thai nhung remote co the van doi LCD; khi bo che, lenh moi duoc nhan binh thuong. | Du che dau hong ngoai, nhung van co the thao tac binh thuong. | Fail |
| TC-14 | Kiem tra khoang cach/goc nghieng lon. | Khoang cach 5-7m, goc lech. | 1. Dung cach dieu hoa 5-7m. 2. Huong remote lech trai/phai. 3. Nhan Power/Mode. 4. Lap lai khi huong thang. | Lenh chi on dinh khi nam trong goc/khoang cach ho tro; neu that bai phai that bai ro rang, khong gay doi trang thai bat ngo. | Du goc nghieng nao thi van bam binh thuong. | Fail |
| TC-15 | Kiem tra LCD mo/low battery. | Pin yeu hoac pin gan het. | 1. Quan sat LCD voi pin hien tai. 2. Neu co pin yeu, thu gui Power/Mode. 3. Thay pin moi va lap lai. | Remote can co dau hieu pin yeu ro; lenh khong chap chon theo cach gay nham lan; thay pin moi khoi phuc on dinh. | Vi pin van day nen khong the test. | Pending |
| TC-16 | Edge case: dieu hoa chi duoc bat khi bam nut nguon. | Dieu hoa dang tat; nhan Turbo, Mode, Speed. | 1. Dam bao dieu hoa dang tat. 2. Khong bam Power. 3. Nhan lan luot Turbo, Mode, Speed. 4. Quan sat dieu hoa va LCD remote. | Dieu hoa khong duoc bat khi nguoi dung chi bam cac nut tinh nang; chi nut Power moi bat dieu hoa. | Bam cac nut tinh nang nhu Turbo, Mode, Speed thi dieu hoa van bat. | Fail |
| TC-17 | Edge case: chuyen tu Cool sang Dry co tu dieu chinh quat khong. | Dang o Cool; bam Mode sang Dry. | 1. Bat dieu hoa o che do Cool. 2. Dat toc do quat khac muc yeu nhat. 3. Bam Mode de chuyen sang Dry. 4. Quan sat toc do quat sau khi doi mode. | Khi chuyen sang Dry, dieu hoa tu dieu chinh toc do quat ve muc phu hop cho hut am. | Quat tu dong ve muc yeu nhat. | Pass |
| TC-18 | Edge case: Baby Care phai khoa cau hinh co dinh. | Dang bat Baby Care; nhan `+`, `-`, L/R Swing, U/D Swing. | 1. Bat dieu hoa. 2. Nhan Baby Care. 3. Thu tang/giam nhiet do. 4. Thu doi chieu gio. 5. Quan sat LCD va dieu hoa. | Khi Baby Care bat, cac cau hinh bao ve/thoai mai cho tre em phai duoc co dinh; khong cho thay doi nhiet do hoac huong gio neu che do quy dinh nhu vay. | Khong the tang/giam nhiet do hay doi chieu gio khi Baby Care dang bat. | Pass |

## 5. Test case can quay video

| Video | Test case | Ly do chon |
| --- | --- | --- |
| V1 | TC-01 | [YouTube Shorts](https://youtube.com/shorts/sGEjxL-i4Ts?feature=share) - chung minh remote gui lenh Power that. |
| V2 | TC-02 | [YouTube Shorts](https://youtube.com/shorts/9te5ZgJJPrM?feature=share) - chung minh che do Cool tren LCD va dieu hoa. |
| V3 | TC-03 | [YouTube Shorts](https://youtube.com/shorts/CZnAIcFSs0g?feature=share) - chung minh nhiet do tang/giam trong nguong. |
| V4 | TC-05 | [YouTube Shorts](https://youtube.com/shorts/6q_QbNK5G1E?feature=share) - chung minh nut Turbo. |
| V5 | TC-18 | [YouTube Shorts](https://youtube.com/shorts/wzYjL1a-N4A) - chung minh Baby Care khoa cau hinh. |

## 6. Defect log tu cac failed test case

Defect log duoi day duoc viet lai dua tren cac test case co verdict `Fail`: TC-08, TC-13, TC-14 va TC-16. Cac test case `Pass` hoac `Pending` khong duoc tinh la defect de tranh ghi loi khong co bang chung.

| Defect ID | Lien quan TC | Summary | Steps tai hien | Expected | Actual | Severity | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-01 | TC-08 | iSAVE khong luu/cap nhat cau hinh gan nhat. | 1. Dat mot cau hinh Cool gom nhiet do/toc do quat. 2. Bam iSAVE. 3. Doi sang cau hinh khac. 4. Bam iSAVE lai de kiem tra cau hinh duoc luu/hoi phuc. | iSAVE phai luu hoac hoi phuc cau hinh theo lan cau hinh nguoi dung mong muon. | iSAVE chi luu trang thai dau tien; bam iSAVE khong luu trang thai gan nhat. | Medium | Open |
| D-02 | TC-13 | Remote van dieu khien duoc khi dau phat hong ngoai bi che. | 1. Bat dieu hoa. 2. Che dau phat IR cua remote bang tay/giay. 3. Nhan Mode hoac Speed. 4. Quan sat dieu hoa. | Khi dau phat IR bi che, dieu hoa khong nen nhan lenh; sau khi bo che thi lenh moi duoc nhan binh thuong. | Du che dau hong ngoai, van co the thao tac binh thuong. | Low | Open |
| D-03 | TC-14 | Dieu hoa van nhan lenh o moi goc nghieng da thu, khong the hien gioi han goc/khoang cach. | 1. Dung cach dieu hoa 5-7m. 2. Huong remote lech trai/phai. 3. Nhan Power/Mode. 4. Lap lai voi nhieu goc nghieng. | Lenh chi on dinh trong goc/khoang cach ho tro; ngoai vung ho tro thi phai that bai ro rang. | Du goc nghieng nao trong lan test thi van bam binh thuong. | Low | Open |
| D-04 | TC-16 | Cac nut tinh nang co the bat dieu hoa khi may dang tat. | 1. Dam bao dieu hoa dang tat. 2. Khong bam Power. 3. Nhan Turbo, Mode, Speed. 4. Quan sat dieu hoa. | Dieu hoa chi duoc bat khi nguoi dung bam nut Power. | Bam cac nut tinh nang nhu Turbo, Mode, Speed thi dieu hoa van bat. | High | Open |

## 7. Edge cases AI khong tim duoc

| Edge case | Test case | Vi sao AI de bo sot |
| --- | --- | --- |
| Dieu hoa chi duoc bat khi bam nut nguon | TC-16 | AI thuong xem Turbo/Mode/Speed la nut tinh nang sau khi may da bat, nen bo sot trang thai tien dieu kien "may dang tat" va viec nut tinh nang co the kich hoat may ngoai y muon. |
| Chuyen tu Cool sang Dry co tu dieu chinh quat khong | TC-17 | AI hay chi kiem tra LCD co doi mode, nhung khong kiem tra tac dong phu cua mode Dry len fan speed. |
| Baby Care phai khoa cau hinh co dinh | TC-18 | AI thuong chi kiem tra nut Baby Care bat/tat, bo qua rang buoc an toan/comfort: khi Baby Care dang bat thi nguoi dung khong duoc thay doi nhiet do hoac huong gio. |

Sinh vien can bo sung screenshot doan chat voi AI cho thay AI khong sinh ra cac edge case tren, hoac prompt baseline chi sinh cac test case co ban. Screenshot nay phai la minh chung that tu phien chat AI, khong duoc tao bang AI.

## 8. Doi chieu requirement va policy

| Hang muc | Trang thai |
| --- | --- |
| Chon mot thiet bi gia dung cu the | Dat: remote dieu hoa Casper Remote U25 Series. |
| Anh thiet bi + the sinh vien | Dat: `devices/devices.jpg`. |
| Hang/model/nam/serial che 4 ky tu giua | Dat mot phan: da co hang/model; nam san xuat va serial khong hien tren anh minh chung. |
| 15 test case co Objective/Input/Steps/Expected/Actual/Verdict | Dat: co 18 test case, bao gom 15 test case ban dau va 3 edge case bo sung. |
| >= 5 test case co video <= 60 giay | Dat: da co 5 link trong `video-youtube-test/link-video.md` cho TC-01, TC-02, TC-03, TC-05 va TC-18. |
| >= 3 edge case AI khong tim duoc | Dat ve noi dung: TC-16, TC-17, TC-18 do sinh vien tu tim ra; can them screenshot chat minh chung. |
| >= 5 defect tu thiet bi | Chua dat neu tinh dung rubric >= 5: hien co 4 confirmed defects tu TC-08, TC-13, TC-14 va TC-16. |
| Khong dung AI tao minh chung cam | Dat: tai lieu nay khong tao anh/video/screenshot gia; cac minh chung vat ly can do sinh vien tu tao. |
