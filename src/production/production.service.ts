import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import * as mongoose from 'mongoose';
import { FilterQuery, Model } from 'mongoose';
import ClientQuery from '../common/client-query/client-query';
import { QueryParse } from '../common/client-query/client-query.type';
import { User } from '../users/schema/user.schema';
import { GET_POSTS_CACHE_KEY } from './cache/postsCacheKey.constant';
import { PostDto } from './dto/post.dto';
import UpdatePostDto from './dto/updatePost.dto';
import PostNotFoundException from './exception/postNotFund.exception';
import { Production, ProductionDocument } from './production.schema';

@Injectable()
class ProductionService {
  private readonly logger = new Logger(ProductionService.name);
  public postClientQuery: ClientQuery<ProductionDocument>;
  constructor(
    @InjectModel(Production.name)
    private productionModel: Model<ProductionDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.postClientQuery = new ClientQuery(this.productionModel);

    this.productionModel.insertMany([
      {
        images: [
          'bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
          '6c4f6bde-6242-40fd-be52-d06033636e04.jpg',
          '1385ed69-6843-4edb-a1fb-e5fc795a99e5.jpg',
          '7f4f7a5b-b003-462a-a6b9-c0e69175def3.jpg',
          '1c323bdd-c0ef-4538-b09d-34c1a4478baa.jpg',
          '5054f46f-d317-40f6-a804-6b22dc92e946.jpg',
          'eed30991-df2d-41b5-afb2-697a06ba3299.jpg',
          '2922fee1-448c-4302-bcc2-804e0fe44f84.jpg',
          '84f7bf91-685c-4be9-bd8c-1f0a4e2e21c3.jpg',
        ],
        price: 3190000,
        rating: 4.6,
        price_before_discount: 3990000,
        quantity: 138,
        sold: 1200,
        view: 78713,
        name: 'Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng',
        category: '65684db2787ee9ec575a3160',
        image: 'bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
        description:
          '<p>Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />Bộ sản phẩm bao gồm: Th&acirc;n m&aacute;y, sạc, c&aacute;p USB, tai nghe, ốp lưng, dụng cụ lấy sim, s&aacute;ch hướng dẫn sử dụng.</p><p>Chất sang chảnh, chuẩn m&agrave;n h&igrave;nh<br />M&agrave;n h&igrave;nh sống động 6.39 AMOLED tr&agrave;n viền<br />Camera Selfie trượt 16MP ấn tượng, đầy m&ecirc; hoặc<br />Bộ 3 Camera AI 48MP si&ecirc;u chụp b&oacute;ng đ&ecirc;m<br />Thiết kế mặt lưng tr&agrave;n &aacute;nh s&aacute;ng<br />Nổi bật trong đ&ecirc;m sắc m&agrave;u. Lấy cảm hứng từ sắc đ&ecirc;m huyền ảo, được chế t&aacute;c tinh xảo tạo n&ecirc;n mặt lưng 3D chuyển m&agrave;u khi tương t&aacute;c với &aacute;nh s&aacute;ng. Với 4 m&agrave;u sắc Xanh Sapphire, Xanh Lục Bảo, T&iacute;m Ngọc v&agrave; Đen Thạch Anh, sẽ khiến bạn trở bạn trở th&agrave;nh t&acirc;m điểm của sự ch&uacute; &yacute;<br />Thật ấn tượng với camera selfie sẽ tự động bật l&ecirc;n v&agrave; thu lại theo thao t&aacute;c chụp ảnh selfie c&ugrave;ng thuật to&aacute;n l&agrave;m đẹp AI Beauty, ảnh selfie cực k&igrave; th&uacute; vị<br />K&iacute;ch thước 66.25 x 75.62 x 8.83 (mm)<br />Trọng lượng 183 g<br />Camera trước 16MP f/2.2 Popup <br />Camera sau 48MP f/1.7 - Camera chụp đ&ecirc;m<br /> 8MP f/2.2 - Camera g&oacute;c rộng<br /> 2MP f/2.4 - Camera x&oacute;a ph&ocirc;ng <br />Độ ph&acirc;n giải FHD+ ( 1080 x 2340 )<br />Cổng USB USB Type-C<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng</p><p>Cảm ơn qu&yacute; kh&aacute;ch đ&atilde; quan t&acirc;m đến sản phẩm b&ecirc;n shop, qu&yacute; kh&aacute;ch vui l&ograve;ng d&agrave;nh &iacute;t thời gian đọc kĩ ch&iacute;nh s&aacute;ch bảo h&agrave;nh đổi trả:<br />- Sản phẩm được bao test 7 ng&agrave;y kể từ ng&agrave;y nhận được sản phẩm v&agrave; sẽ được đổi m&aacute;y mới c&ugrave;ng model hoặc gi&aacute; trị tương đương sau khi được thẩm định lỗi kĩ thuật.<br />- Sản phẩm lỗi kĩ thuật được x&aacute;c nhận bởi trung t&acirc;m bảo h&agrave;nh ủy quyền ch&iacute;nh h&atilde;ng (bằng văn bản); kh&aacute;ch h&agrave;ng c&oacute; thể gửi lại shop để x&aacute;c nhận lỗi hoặc tới trạm bảo h&agrave;nh gần nhất để thẩm định lỗi.<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hiện trạng m&aacute;y kh&ocirc;ng trầy xước, kh&ocirc;ng bể vỡ, v&ocirc; nước, g&atilde;y ch&acirc;n sim, khung thẻ nhớ&hellip; (tất cả c&aacute;c t&aacute;c động ngoại lực từ ph&iacute;a kh&aacute;ch h&agrave;ng đều TỪ CHỐI BẢO H&Agrave;NH)<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hộp tr&ugrave;ng imei, phụ kiện k&egrave;m theo m&aacute;y kh&ocirc;ng trầy xước, ch&aacute;y nổ, đứt d&acirc;y (nếu trầy xước shop kh&ocirc;ng đổi phụ kiện mới)<br />- Sau 7 ng&agrave;y bao test, sản phẩm vẫn nhận ch&iacute;nh s&aacute;ch bảo h&agrave;nh 18 th&aacute;ng kể từ ng&agrave;y k&iacute;ch hoạt bảo h&agrave;nh (kh&aacute;ch chịu ph&iacute; vận chuyển tới shop bảo h&agrave;nh hộ hoặc tự đến trung t&acirc;m bảo h&agrave;nh gần nhất để được hỗ trợ)<br />- Trong một số trường hợp sản phẩm đ&atilde; được k&iacute;ch hoạt bảo h&agrave;nh điện tử để tham gia chương tr&igrave;nh khuyến m&atilde;i c&oacute; gi&aacute; tốt cho kh&aacute;ch h&agrave;ng. Vui l&ograve;ng chat với nh&acirc;n vi&ecirc;n tư vấn để được hỗ trợ th&ecirc;m th&ocirc;ng tin.<br />- Sản phẩm bị TỪ CHỐI BẢO H&Agrave;NH khi ch&aacute;y nổ, bể vỡ, t&aacute;c động ngoại lực v&agrave;o th&acirc;n v&agrave; b&ecirc;n trong m&aacute;y, c&oacute; thay đổi sửa chữa b&ecirc;n ngo&agrave;i.<br />- C&aacute;c sản phẩm bị kh&oacute;a t&agrave;i khoản như Gmail, Samsung account&hellip; Kh&aacute;ch tự chịu ph&iacute; mở kh&oacute;a nếu kh&ocirc;ng nhớ mật khẩu.<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />#điện_thoại #dienthoai #di_động #didong #điện_thoại_di_động #dien_thoai_di_dong #điện_thoại_ch&iacute;nh_h&atilde;ng #h&agrave;ng_ch&iacute;nh_h&atilde;ng #điện_thoại_gi&aacute;_rẻ #dien_thoai_gia_re #gi&aacute; rẻ #khuyen_mai #freeship #mobile #smartphone #điện_thoại_vsmart #vsmart #vsmart_ active_3</p>',
      },
      {
        images: [
          'aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
          'b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
          'ac328d77-6014-4a2d-8626-924ac35876df.jpg',
          '5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
          '02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
          '12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
          'd448057c-3d3d-45d2-a9bc-e984bc80555f.jpg',
        ],
        price: 2590000,
        rating: 4.2,
        price_before_discount: 3490000,
        quantity: 73,
        sold: 6800,
        view: 33018,
        name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
        category: '65684db2787ee9ec575a3160',
        image: 'aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
        description:
          '<p>Thể hiện c&aacute; t&iacute;nh của bạn bằng thiết kế kim cương 3D độc đ&aacute;o của OPPO A12, c&ugrave;ng với m&agrave;n h&igrave;nh lớn &ldquo;giọt nước&rdquo; tuyệt mỹ v&agrave; camera k&eacute;p s&agrave;nh điệu, bạn sẽ lu&ocirc;n vui vẻ năng động suốt cả ng&agrave;y.</p><p>Thiết kế si&ecirc;u mỏng nhẹ, họa tiết kim cương 3D ấn tượng<br />OPPO A12 sở hữu thiết kế kh&ocirc;ng chỉ đẹp ph&aacute; c&aacute;ch m&agrave; c&ograve;n rất dễ d&agrave;ng để sử dụng tr&ecirc;n tay. Trọng lượng cực nhẹ 165gram, độ mỏng chỉ 8,3mm kết hợp với những đường bo cong kh&eacute;o l&eacute;o gi&uacute;p điện thoại v&ocirc; c&ugrave;ng gọn nhẹ, mượt m&agrave; trong l&ograve;ng b&agrave;n tay. Kiểu d&aacute;ng của OPPO A12 đặc biệt ấn tượng nhờ điểm nhấn l&agrave; mặt lưng họa tiết 3D kim cương độc đ&aacute;o. Ở mỗi g&oacute;c nh&igrave;n kh&aacute;c nhau, bạn sẽ thấy một vẻ đẹp kh&aacute;c nhau, gi&uacute;p chiếc điện thoại trở n&ecirc;n thực sự nổi bật.</p><p>M&agrave;n h&igrave;nh lớn 6,22 inch &ldquo;giọt nước&rdquo; bảo vệ mắt<br />Bạn sẽ được tận hưởng những h&igrave;nh ảnh hấp dẫn tr&ecirc;n OPPO A12 nhờ m&agrave;n h&igrave;nh lớn k&iacute;ch thước 6,22 inch, hiệu ứng tr&agrave;n viền dạng &ldquo;giọt nước&rdquo; đẹp mắt, tăng cường trải nghiệm xem phim, chơi game.</p><p>Mở kh&oacute;a theo c&aacute;ch của bạn<br />Kh&ocirc;ng cần phải nhập mật khẩu mỗi lần mở m&aacute;y nữa, OPPO A12 cho ph&eacute;p bạn đăng nhập bằng cảm biến v&acirc;n tay hoặc nhận diện khu&ocirc;n mặt AI rất tiện lợi. Chỉ cần chạm nhẹ v&agrave;o khu vực cảm biến mặt lưng hoặc đơn giản l&agrave; đưa m&aacute;y l&ecirc;n, điện thoại sẽ ngay lập tức nhận ra chủ nh&acirc;n của m&aacute;y v&agrave; mở kh&oacute;a một c&aacute;ch sẵn s&agrave;ng.</p><p>Bộ vi xử l&yacute; 8 nh&acirc;n mạnh mẽ<br />OPPO A12 sở hữu cấu h&igrave;nh đ&aacute;ng nể trong tầm gi&aacute; rẻ nhờ bộ vi xử l&yacute; Helio P35. Con chip mới từ nh&agrave; MediaTek sản xuất tr&ecirc;n tiến tr&igrave;nh 12nm với 8 nh&acirc;n cực mạnh, trong đ&oacute; 4 nh&acirc;n 2,35GHz v&agrave; 4 nh&acirc;n 1,8GHz đi c&ugrave;ng GPU đồ họa PowerVR GE8320.</p><p>Thời lượng pin suốt cả ng&agrave;y<br />Mang tr&ecirc;n m&igrave;nh vi&ecirc;n pin dung lượng cực &ldquo;khủng&rdquo; 4230 mAh, bạn c&oacute; thể thoải m&aacute;i sử dụng trong 2 ng&agrave;y ở nhu cầu sử dụng b&igrave;nh thường.</p><p>&Acirc;m thanh sống động<br />OPPO A12 được trang bị t&iacute;nh năng Dirac, một t&iacute;nh năng cho ph&eacute;p chuyển đổi c&aacute;c chế độ &acirc;m thanh th&ocirc;ng minh để tối ưu h&oacute;a &acirc;m thanh dựa tr&ecirc;n t&aacute;c vụ bạn đang hoạt động.</p><p>Camera k&eacute;p AI, tỏa s&aacute;ng trong từng bức ảnh<br />OPPO A12 sở hữu camera k&eacute;p ở mặt sau, bao gồm camera ch&iacute;nh 13MP v&agrave; camera 2MP hỗ trợ đo độ s&acirc;u trường ảnh. Camera ch&iacute;nh chất lượng mang đến những h&igrave;nh ảnh sắc n&eacute;t, r&otilde; r&agrave;ng v&agrave; độ s&aacute;ng, m&agrave;u sắc trung thực.</p><p>Th&ocirc;ng số kỹ thuật chi tiết<br />M&agrave;n h&igrave;nh<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh : IPS LCD<br />M&agrave;u m&agrave;n h&igrave;nh : 16 triệu m&agrave;u<br />Chuẩn m&agrave;n h&igrave;nh : HD +<br />Độ ph&acirc;n giải m&agrave;n h&igrave;nh : 720 x 1560 Pixels<br />M&agrave;n h&igrave;nh : 6.22 inches<br />Mặt k&iacute;nh m&agrave;n h&igrave;nh : Corning Gorilla Glass 3<br />Camera Trước<br />Độ ph&acirc;n giải : 5 MP<br />Th&ocirc;ng tin kh&aacute;c : Xo&aacute; ph&ocirc;ng, L&agrave;m đẹp (Selfie A.I Beauty), Nh&atilde;n d&aacute;n (AR Stickers), Flash m&agrave;n h&igrave;nh, To&agrave;n cảnh (Panorama), Quay video HD, Chụp bằng cử chỉ, Nhận diện khu&ocirc;n mặt, L&agrave;m đẹp (Beautify), Quay video Full HD, Tự động lấy n&eacute;t (AF), HDR<br />Camera Sau<br />Độ ph&acirc;n giải : Ch&iacute;nh 13 MP &amp; Phụ 2 MP<br />Quay phim : Quay phim HD 720p@30fps<br />Đ&egrave;n Flash : C&oacute;<br />Chụp ảnh n&acirc;ng cao : Google Lens, G&oacute;c si&ecirc;u rộng (Ultrawide), Nh&atilde;n d&aacute;n (AR Stickers), Chụp bằng cử chỉ, Xo&aacute; ph&ocirc;ng, Quay chậm (Slow Motion), Tr&ocirc;i nhanh thời gian (Time Lapse), A.I Camera, L&agrave;m đẹp, Tự động lấy n&eacute;t (AF)<br />Cấu h&igrave;nh phần cứng<br />Tốc độ CPU : 2.3GHz<br />Số nh&acirc;n : 4 nh&acirc;n 2.35 GHz &amp; 4 nh&acirc;n 1.9 GHz<br />Chipset : MediaTek Helio P35 8 nh&acirc;n<br />RAM : 3 GB<br />Chip đồ họa (GPU) : PowerVR GE8320<br />Cảm biến : Cảm biến tiệm cận, Cảm biến &aacute;nh s&aacute;ng, Cảm biến gia tốc kế<br />Bộ nhớ &amp; Lưu trữ<br />Danh bạ lưu trữ : Kh&ocirc;ng giới hạn<br />ROM : 32 GB<br />Bộ nhớ c&ograve;n lại : Đang cập nhật<br />Thẻ nhớ ngo&agrave;i : MicroSD<br />Hỗ trợ thẻ nhớ tối đa : 256 GB<br />Thiết kế &amp; Trọng lượng<br />Kiểu d&aacute;ng : Nguy&ecirc;n Khối<br />Chất liệu : Khung &amp; Mặt lưng nhựa<br />K&iacute;ch thước : D&agrave;i 155.9 mm - Ngang 75.5 mm - D&agrave;y 8.3 mm<br />Trọng lượng : 165 g<br />Khả năng chống nước : Đang cập nhật<br />Th&ocirc;ng tin pin<br />Loại pin : Pin chuẩn Li-Po<br />Dung lượng pin : 4230 mAh<br />Pin c&oacute; thể th&aacute;o rời : Kh&ocirc;ng<br />Chế độ sạc nhanh : Đang cập nhật<br />Kết nối &amp; Cổng giao tiếp<br />Loại SIM : 2 Nano SIM<br />Khe cắm sim : Dual nano-SIM + 1 khe thẻ nhớ<br />Wifi : Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot<br />GPS : BDS, A-GPS, GLONASS<br />Bluetooth : Bluetooth 5.0<br />GPRS/EDGE : C&oacute;<br />NFC : Đang cập nhật<br />Cổng sạc : Micro USB<br />Jack (Input &amp; Output) : 3.5mm<br />Giải tr&iacute; &amp; Ứng dụng<br />Xem phim : C&oacute;<br />Nghe nhạc : C&oacute;<br />Ghi &acirc;m : C&oacute;<br />FM radio : C&oacute;<br />Đ&egrave;n pin : C&oacute;<br />Chức năng kh&aacute;c : Đang cập nhật<br />Bảo h&agrave;nh<br />Thời gian bảo h&agrave;nh : 12 Th&aacute;ng<br />Th&ocirc;ng tin h&agrave;ng h&oacute;a<br />Xuất xứ : Trung Quốc<br />Năm sản xuất : 2020<br />Th&ocirc;ng tin d&ograve;ng sản phẩm<br />Model Series : OPPO A12<br />Hệ điều h&agrave;nh<br />Hệ điều h&agrave;nh : ColorOS 6.1.2, nền tảng Android 9<br />Bộ sản phẩm bao gồm: Hộp, Sạc, S&aacute;ch hướng dẫn, C&aacute;p, C&acirc;y lấy sim, Ốp lưng</p><p>Th&ocirc;ng tin bảo h&agrave;nh: <br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh OPPO<br />- 1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi phần cứng sản xuất)<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc<br />- Hotline: 1800 577 776 (miễn ph&iacute;).</p><p>#OPPO #OPPOA12</p>',
      },
      {
        images: [
          'a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
          'b09ff60d-c6bd-4d3a-b778-0fc2708a65fb.jpg',
          'fc5ecd4c-47eb-4f12-ae82-ef26fd492887.jpg',
          'a87f854d-37a9-4252-a2f7-243fc21f8b55.jpg',
          '3ecf878d-6742-43d4-abe7-044c15c84120.jpg',
        ],
        price: 20990000,
        rating: 5,
        price_before_discount: 26990000,
        quantity: 17,
        sold: 482,
        view: 18934,
        name: 'Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA',
        category: '65684db2787ee9ec575a3160',
        image: 'a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
        description:
          '<p>H&agrave;ng Ch&iacute;nh h&atilde;ng m&atilde; VN/A, mới 100%, chưa k&iacute;ch hoạt</p><p>iPhone 12 64GB- Sự n&acirc;ng cấp chỉnh chu cho thế hệ tiền nhiệm<br />M&agrave;n h&igrave;nh iPhone 12 64GB - N&acirc;ng cấp đ&aacute;ng gi&aacute; từ tấm nền OLED<br />Hai năm qua, Apple vẫn trung th&agrave;nh với tấm nền IPS LCD d&agrave;nh cho c&aacute;c phi&ecirc;n bản điện thoại gi&aacute; rẻ. Trong đ&oacute;, iPhone XR, iPhone 11 v&agrave; thậm ch&iacute; l&agrave; SE 2020 l&agrave; những đại diện ti&ecirc;u biểu. Thế nhưng, điều n&agrave;y sẽ thay đổi khi m&agrave; giờ đ&acirc;y, thế hệ kế nhiệm đ&atilde; được n&acirc;ng cấp l&ecirc;n tấm nền OLED sắc n&eacute;t.</p><p>iPhone 12 64GB sở hữu m&agrave;n h&igrave;nh 6,1 inch (tương tự XR v&agrave; 11) với tấm nền OLED XDR tương tự c&aacute;c bản cao cấp. Ngo&agrave;i ra, một điểm nổi bật kh&ocirc;ng thể kh&ocirc;ng nhắc đến ch&iacute;nh l&agrave; việc n&acirc;ng cấp độ ph&acirc;n giải chuẩn HD+ vốn bị c&aacute;c fan đ&aacute;nh gi&aacute; k&eacute;m qua hai thế hệ l&ecirc;n chuẩn Full HD+. Do đ&oacute;, Cupertino đ&atilde; ch&iacute;nh thức thay đổi điểm yếu cố hữu tr&ecirc;n c&aacute;c phi&ecirc;n bản gi&aacute; rẻ của h&atilde;ng. Ngay cả bản 5,4 inch cũng được trang bị tấm nền OLED Super Retina.</p><p>Ngo&agrave;i ra, theo c&ocirc;ng bố của h&atilde;ng, m&agrave;n h&igrave;nh của thế hệ mới sẽ c&oacute; độ s&aacute;ng l&ecirc;n tới 1200 knits v&agrave; hỗ trợ c&aacute;c c&ocirc;ng nghệ HDR v&agrave; Dolby Vision. Đặc biệt, lớp k&iacute;nh sẽ được phủ một lớp &ldquo;Ceramic Shield&rdquo; gi&uacute;p m&aacute;y cứng c&aacute;p v&agrave; sống s&oacute;t cao hơn trong những t&igrave;nh huống &ldquo;tiếp đất&rdquo;.</p><p>Thiết kế iPhone 12 64GB mang n&eacute;t ho&agrave;i cổ<br />Năm nay c&aacute;c sản phẩm &ldquo;t&aacute;o khuyết&rdquo; đều sở hữu chung ng&ocirc;n ngữ thiết kế. Đ&oacute; l&agrave; sự kết hợp giữa iPhone 11 v&agrave; iPhone 5 với c&aacute;c cạnh viền được l&agrave;m vu&ocirc;ng vức hơn. Mặt trước vẫn l&agrave; m&agrave;n h&igrave;nh với notch &ldquo;tai thỏ&rdquo; chứa camera selfie v&agrave; Face ID. Thiết kế n&agrave;y khiến series smartphone năm nay của nh&agrave; T&aacute;o tr&ocirc;ng sang trọng v&agrave; mang d&aacute;ng dấp ho&agrave;i cổ từ ng&ocirc;n ngữ thiết kế của thế hệ thứ 5 trước đ&acirc;y.<br />C&ograve;n mặt sau của m&aacute;y vẫn sẽ l&agrave; một cụm m&aacute;y ảnh k&eacute;p đặt trong khung vu&ocirc;ng tương tự như thế hệ năm 2019. Do l&agrave; bản ti&ecirc;u chuẩn, thiết bị sẽ c&oacute; khung l&agrave;m từ nh&ocirc;m thay v&igrave; bằng th&eacute;p kh&ocirc;ng gỉ như bản cao cấp.</p><p>Hiệu năng iPhone 12 64GB mạnh mẽ<br />Cung cấp sức mạnh cho m&aacute;y ch&iacute;nh l&agrave; chip A14 Bionic. Theo c&ocirc;ng bố của Cupertino, A14 l&agrave; vi xử l&yacute; c&oacute; tới 6 nh&acirc;n CPU, chứa hơn 11,8 tỷ b&oacute;ng b&aacute;n dẫn, hứa hẹn sẽ cho hiệu năng hơn khoảng 40% so với A13. Điểm số benchmark của một mẫu m&aacute;y cũng sở hữu chipset n&agrave;y l&agrave; iPad Air 4 đ&atilde; cho thấy A14 thật sự vượt trội. Điểm số đơn nh&acirc;n 1583 va đa nh&acirc;n l&agrave; 4918, chỉ thua k&eacute;m một ch&uacute;t so với A12Z tr&ecirc;n iPad Pro 2020.<br />Ngo&agrave;i ra, nh&agrave; T&aacute;o c&ograve;n trang bị th&ecirc;m chip U1 với băng tần rộng (ultra-wideband) cho ph&eacute;p định vị vị tr&iacute; th&ocirc;ng qua AirDrop v&agrave; kết nối c&aacute;c thiết bị c&ugrave;ng hệ sinh th&aacute;i trong gia đ&igrave;nh</p><p>Camera iPhone 12 64GB - Thay đổi đến từ b&ecirc;n trong <br />Du l&agrave; thế hệ kế nhiệm iPhone 11, thế nhưng thiết bị n&agrave;y kh&ocirc;ng c&oacute; cải tiến nhiều về m&aacute;y ảnh. M&aacute;y vẫn sở hữu cụm camera k&eacute;p với 2 cảm biến 12MP (1 g&oacute;c rộng v&agrave; 1 g&oacute;c si&ecirc;u rộng). Apple đ&atilde; sắp xếp lại v&agrave; bổ sung th&ecirc;m thấu k&iacute;nh để cho chất lượng ảnh chụp trong v&agrave; sắc n&eacute;t hơn.</p>',
      },
      {
        images: [
          '51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
          '32d2b004-6a6c-4605-af12-8f8f2e4f6aff.jpg',
          '00f74b87-0750-4cc9-9b91-24907a2b1721.jpg',
          'f08f305b-e237-444d-9f1e-430ce15acd96.jpg',
          '2442b133-7801-47a5-ae7d-5fc5196a1a51.jpg',
          '19a98c2f-3ab4-4d72-bbc9-3525fd89859c.jpg',
          '9123a99f-e71c-49e7-a87b-974541fcb607.jpg',
        ],
        price: 2130000,
        rating: 5,
        price_before_discount: 2690000,
        quantity: 269,
        sold: 5600,
        view: 7538,
        name: 'Điện Thoại Realme C11 (2GB/32GB) - Hàng Chính Hãng',
        category: '65684db2787ee9ec575a3160',
        image: '51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
        description:
          '<p>Th&ocirc;ng số kĩ thuật<br />X&aacute;m Hạt Ti&ecirc;u - Xanh Bạc H&agrave;<br />M&agrave;n h&igrave;nh rộng<br />K&iacute;ch thước m&agrave;n h&igrave;nh 6.5<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh: Tấm nền m&agrave;n h&igrave;nh LCD<br />Độ ph&acirc;n giải: Độ ph&acirc;n giải m&agrave;n h&igrave;nh 1600*720, HD+, tỷ lệ hiển thị m&agrave;n h&igrave;nh l&ecirc;n đến 88%<br />M&agrave;u sắc của m&agrave;n h&igrave;nh 16.7 triệu m&agrave;u<br />Mặt k&iacute;nh cảm ứng: Loại k&iacute;nh cảm ứng Corning Gorilla Glass 3<br />Chụp ảnh<br />Camera sau: Camera ch&iacute;nh: 13MP f/2.2 Camera ch&acirc;n dung: 2MP f/2.4<br />Quay phim<br />Độ ph&acirc;n giải video quay phim Quay video 1080@30fps 720@30fps<br />Chụp ảnh n&acirc;ng cao<br />C&aacute;c t&iacute;nh năng chụp: Panorama, beauty AI 2.0, ch&acirc;n dung, chụp đ&ecirc;m, chuy&ecirc;n gia<br />Camera trước 5 MP, f/2.4<br />Đ&egrave;n Flash<br />T&iacute;nh năng chụp ảnh camera trước: <br />C&aacute;c t&iacute;nh năng chụp: L&agrave;m đẹp, Bộ lọc m&agrave;u, HDR, Selfie to&agrave;n cảnh, Ch&acirc;n dung, Timelapse, chụp h&igrave;nh bằng cử chỉ<br />Hệ điều h&agrave;nh: Realme UI 1.0<br />Loại CPU (Chipset) Helio G35 Cortex A53 8 nh&acirc;n 64 bit, xung nhịp l&ecirc;n đến 2.3 GHz<br />Tốc độ CPU: 8 nh&acirc;n, 2.3 GHz<br />Chip đồ hoạ: (GPU) GE8320<br />RAM: 2GB<br />Bộ nhớ trong: 32GB<br />Thẻ nhớ ngo&agrave;i Micro SD<br />Hỗ trợ thẻ tối đa 256GB</p><p>Loại SIM Dual-SIM (Nano SIM)<br />Hỗ trợ 4G <br />Chuẩn Wifi: 2.4GHz, 802.1.1b/g/n<br />Jack tai nghe 3.5mm<br />C&ocirc;̉ng k&ecirc;́t n&ocirc;́i/sạc: Kết nối với m&aacute;y t&iacute;nh qua cổng USB hoặc sạc cho m&aacute;y: Micro USB<br />Hỗ trợ kết nối kh&aacute;c: OTG<br />Thực thiện cuộc gọi: Quay số thủ c&ocirc;ng, Trợ l&yacute; Google<br />Thiết kế &amp; Trọng lượng <br />Thiết kế<br />Thiết kế m&aacute;y: Nguy&ecirc;n khối, Pin rời, Pin liền,... Nguy&ecirc;n khối<br />Chất liệu<br />Chất liệu được sử dụng để sản xuất vỏ m&aacute;y (nhựa, nh&ocirc;m....) Nhựa 3D cao cấp<br />K&iacute;ch thước<br />Đ&Uacute;NG CHUẨN (Đơn vị, dấu chấm, dấu c&aacute;ch): D&agrave;i 151.5 mm - Ngang 74.9 mm - D&agrave;y 8.1 mm164.4 x 75.9 x 9.1mm<br />Trọng lượng Khoảng 196g bao gồm Pin<br />Pin &amp; Dung lượng <br />Loại pin<br />T&ecirc;n h&atilde;ng v&agrave; t&ecirc;n pin: Li-po<br />Dung lượng pin 5000mAh<br />C&ocirc;ng nghệ pin<br />C&ocirc;ng nghệ pin đi k&egrave;m: Sạc nhanh, QuickCharge, VOOC, Tiết kiệm pin, Si&ecirc;u tiết kiệm pin,...5V2A, 10W, hỗ trợ sạc ngược với c&aacute;p OTG<br />Tiện &iacute;ch <br />Bảo mật n&acirc;ng cao<br />Bảo mật mở kho&aacute; m&aacute;y: Khu&ocirc;n mặt, Face ID, Mống mắt<br />Mở kho&aacute; nhận diện gương mặt trong 0,91s<br />T&iacute;nh năng đặc biệt<br />C&aacute;c chức năng kh&aacute;c của điện thoại: AOD, Sạc pin nhanh, Nh&acirc;n bản ứng dụng, Chặn cuộc gọi, Đ&egrave;n pin, kh&aacute;ng nước kh&aacute;ng bụi, chạm 2 lần mở kh&oacute;a...4G - LTE <br />Bluetooth 5.0 <br />C&ocirc;ng nghệ sạc ngược<br />Ghi &acirc;m m&ocirc;i trường: C&oacute; ứng dụng ghi &acirc;m mặc định tr&ecirc;n m&aacute;y v&agrave; c&oacute; mic chống ồn kh&ocirc;ng? C&oacute;<br />Ghi &acirc;m cuộc gọi C&oacute;<br />Xem phim: Định dạng phim hỗ trợ xem được: mp4, .3gp, .3g2, .3gpp, .3gpp2, .m4v , .mkv<br />Xem phim: L&ecirc;n đến 9 giờ li&ecirc;n tục<br />Nghe nhạc: Định dạng &acirc;m thanh hỗ trợ nghe được: MP3, Lossless, WAV,... AAC,HE-AAC v1, HE-AAC v2,AMR,AWB,MIDI,MP3,OGG VORBIS<br />Nghe nhạc: L&ecirc;n đến 40 giờ li&ecirc;n tục<br />Danh bạ: Bộ nhớ m&aacute;y chứa được tối đa bao nhi&ecirc;u số danh bạKh&ocirc;ng c&oacute; dữ liệu<br />Radio: C&oacute; ứng dụng radio FM mặc định tr&ecirc;n m&aacute;y kh&ocirc;ng? C&oacute; cần tai nghe để sử dụng Radio kh&ocirc;ng?: Kh&ocirc;ng<br />Bộ sản phẩm gồm: Sạc ,S&aacute;ch hướng dẫn ,Hộp, C&aacute;p sạc.</p><p>Th&ocirc;ng tin bảo h&agrave;nh<br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh Realme<br />1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi sản xuất).<br />Giao h&agrave;ng miễn ph&iacute; tr&ecirc;n to&agrave;n quốc.<br />Hotline: 1800 6067 (miễn ph&iacute;)</p>',
      },
      {
        images: [
          '4e9c8364-7604-4b61-8658-9f18655bae40.jpg',
          '794c2b24-922a-4cc2-8c24-87551af917df.jpg',
          'e5ae5753-c153-4a29-9254-48cde48f814f.jpg',
          '24ceb22a-d9a2-4936-a53d-1d8c508b5eeb.jpg',
          'db1900e0-245c-437f-9e7e-9a5f15045d0f.jpg',
          'd4be2e97-e131-4cc6-93ed-432593ba9245.jpg',
          '1866d116-06a0-4657-936e-256c8ed09bd0.jpg',
          '77c6c7ec-25dc-4d5e-b572-22e7916c1cb2.jpg',
          '6492ca72-6451-414c-8653-f31693ebe1e6.jpg',
        ],
        price: 1949000,
        rating: 5,
        price_before_discount: 1990000,
        quantity: 409,
        sold: 1000,
        view: 5974,
        name: 'Điện Thoại Xiaomi Redmi 9A 2GB/32GB - Hàng Chính Hãng',
        category: '65684db2787ee9ec575a3160',
        image: '4e9c8364-7604-4b61-8658-9f18655bae40.jpg',
        description:
          '<p>Điện Thoại Xiaomi Redmi 9A 2GB/32GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />Bộ sản phẩm bao gồm: Th&acirc;n m&aacute;y, sạc, c&aacute;p USB, s&aacute;ch hướng dẫn.</p><p>Camera</p><p>- 13MP camera ch&iacute;nh</p><p>- Khẩu độ &fnof;/2.2, AF</p><p>- Đ&egrave;n flash đơn</p><p>- Chế độ k&iacute;nh vạn hoa</p><p>- 5MP camera trước</p><p>- Khẩu độ &fnof;/2.2</p><p>- Chế độ ch&acirc;n dung</p><p>&nbsp;</p><p>Thiết kế</p><p>- M&agrave;n h&igrave;nh giọt nước 6.53HD</p><p>- Độ ph&acirc;n giả 720x1600</p><p>- Tỉ lệ 20:9</p><p>- M&agrave;n h&igrave;nh độ s&aacute;ng 400nit</p><p>- Độ tương phản 1500:1</p><p>- M&agrave;n h&igrave;nh lọc &aacute;nh s&aacute;ng xanh chứng nhận TUV Rheinland</p><p>- Chế độ đọc s&aacute;ch</p><p>- Chế độ thao t&aacute;c to&agrave;n m&agrave;n h&igrave;nh</p><p>- K&iacute;ch thước: 164.9x77.07x9.0mm</p><p>- Trọng lượng: 194g</p><p>- M&agrave;u sắc: X&aacute;m Hoa Cương, Xanh Da Trời, Xanh Khổng Tước</p><p>&nbsp;</p><p>Hiệu năng</p><p>- MediaTek Helio G25</p><p>- Tiến tr&igrave;nh 12nm</p><p>- 8 nh&acirc;n tốc độ l&ecirc;n tới 2.0GHz</p><p>- Ram LPDDR4x - Bộ nhớ c&ocirc;ng nghệ eMMMC5.1</p><p>- 2GB ram + 32GB bộ nhớ</p><p>&nbsp;</p><p>Pin v&agrave; cổng sạc</p><p>Pin 5000mAh</p><p>- Hỗ trợ sạc nhanh 10W</p><p>- Sạc k&egrave;m trong hộp 10W</p><p>&nbsp;</p><p>Kết nối</p><p>- Cổng tai nghe 3.5mm</p><p>- Cổng mirco USB</p><p>- 4G k&eacute;p</p><p>- Băng tần :</p><p>- GSM: B2/3/5/8</p><p>- WCDMA: B1/2/4/5/8</p><p>- FDD-LTE: B1/2/3/4/5/7/8/20/28</p><p>- TDD-LTE: B38/40/41(2535-2655MHz)</p><p>- Hai sim hai s&oacute;ng + thẻ nhớ</p><p>- mở rộng l&ecirc;n đến 512GB</p><p>&nbsp;</p><p>Bảo mật</p><p>- Mở kh&oacute;a bằng khu&ocirc;n mặt</p><p>Điện Thoại Xiaomi Redmi 9A 2GB/32GB - H&agrave;ng Ch&iacute;nh H&atilde;ng</p><p>Cảm ơn qu&yacute; kh&aacute;ch đ&atilde; quan t&acirc;m đến sản phẩm b&ecirc;n shop, qu&yacute; kh&aacute;ch vui l&ograve;ng d&agrave;nh &iacute;t thời gian đọc kĩ ch&iacute;nh s&aacute;ch bảo h&agrave;nh đổi trả:<br />- Sản phẩm được bao test 7 ng&agrave;y kể từ ng&agrave;y nhận được sản phẩm v&agrave; sẽ được đổi m&aacute;y mới c&ugrave;ng model hoặc gi&aacute; trị tương đương sau khi được thẩm định lỗi kĩ thuật.<br />- Sản phẩm lỗi kĩ thuật được x&aacute;c nhận bởi trung t&acirc;m bảo h&agrave;nh ủy quyền ch&iacute;nh h&atilde;ng (bằng văn bản); kh&aacute;ch h&agrave;ng c&oacute; thể gửi lại shop để x&aacute;c nhận lỗi hoặc tới trạm bảo h&agrave;nh gần nhất để thẩm định lỗi.<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hiện trạng m&aacute;y kh&ocirc;ng trầy xước, kh&ocirc;ng bể vỡ, v&ocirc; nước, g&atilde;y ch&acirc;n sim, khung thẻ nhớ&hellip; (tất cả c&aacute;c t&aacute;c động ngoại lực từ ph&iacute;a kh&aacute;ch h&agrave;ng đều TỪ CHỐI BẢO H&Agrave;NH)<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hộp tr&ugrave;ng imei, phụ kiện k&egrave;m theo m&aacute;y kh&ocirc;ng trầy xước, ch&aacute;y nổ, đứt d&acirc;y (nếu trầy xước shop kh&ocirc;ng đổi phụ kiện mới)<br />- Sau 7 ng&agrave;y bao test, sản phẩm vẫn nhận ch&iacute;nh s&aacute;ch bảo h&agrave;nh 18 th&aacute;ng kể từ ng&agrave;y k&iacute;ch hoạt bảo h&agrave;nh (kh&aacute;ch chịu ph&iacute; vận chuyển tới shop bảo h&agrave;nh hộ hoặc tự đến trung t&acirc;m bảo h&agrave;nh gần nhất để được hỗ trợ)<br />- Trong một số trường hợp sản phẩm đ&atilde; được k&iacute;ch hoạt bảo h&agrave;nh điện tử để tham gia chương tr&igrave;nh khuyến m&atilde;i c&oacute; gi&aacute; tốt cho kh&aacute;ch h&agrave;ng. Vui l&ograve;ng chat với nh&acirc;n vi&ecirc;n tư vấn để được hỗ trợ th&ecirc;m th&ocirc;ng tin.<br />- Sản phẩm bị TỪ CHỐI BẢO H&Agrave;NH khi ch&aacute;y nổ, bể vỡ, t&aacute;c động ngoại lực v&agrave;o th&acirc;n v&agrave; b&ecirc;n trong m&aacute;y, c&oacute; thay đổi sửa chữa b&ecirc;n ngo&agrave;i.<br />- C&aacute;c sản phẩm bị kh&oacute;a t&agrave;i khoản như Gmail, Samsung account&hellip; Kh&aacute;ch tự chịu ph&iacute; mở kh&oacute;a nếu kh&ocirc;ng nhớ mật khẩu.<br />Điện Thoại Xiaomi Redmi 9A 2GB/32GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />#điện_thoại #dienthoai #di_động #didong #điện_thoại_di_động #dien_thoai_di_dong #điện_thoại_ch&iacute;nh_h&atilde;ng #h&agrave;ng_ch&iacute;nh_h&atilde;ng #điện_thoại_gi&aacute;_rẻ #dien_thoai_gia_re #gi&aacute; rẻ #khuyen_mai #freeship #mobile #smartphone #điện_thoại_xiaomi #xiaomi #xiaomi_redmi_9a</p>',
      },
      {
        images: [
          '1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
          '806160a8-f96b-4bfd-bfa5-a821016e5b30.jpg',
          '07d99599-bf3e-4b23-baa3-72b81669f5a7.jpg',
          '06125fad-e4a5-4a1c-9179-cab3eec4d237.jpg',
          'f9a7461e-7d3c-4f21-8a0e-4bb630d543bc.jpg',
          'bb01fb3b-a5a6-4a0c-a2cd-97655f074203.jpg',
          '21f5ece2-7e35-4d77-832f-e3546848979f.jpg',
          'efc35076-3bb6-4527-bdb2-b273db3012bd.jpg',
        ],
        price: 244550,
        rating: 3.8,
        price_before_discount: 489000,
        quantity: 9920,
        sold: 728,
        view: 10452,
        name: 'Đồng Hồ Nam WWOOR 8826 Máy Nhật Dây Thép Mành Cao Cấp - Nhiều Màu',
        category: '65684dab787ee9ec575a315d',
        image: '1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
        description:
          '<p>➫ Kh&aacute;ch h&agrave;ng vui l&ograve;ng đọc r&otilde; th&ocirc;ng tin về sản phẩm để tr&aacute;nh trường hợp mua về kh&ocirc;ng h&agrave;i l&ograve;ng nh&eacute; ^^</p><p>☑ Chất liệu mặt : K&iacute;nh kho&aacute;ng chất (chống xước tốt, đ&aacute;nh b&oacute;ng được) được &eacute;p trong khung th&eacute;p kh&ocirc;ng gỉ<br />☑ Chất liệu d&acirc;y đeo : Th&eacute;p kh&ocirc;ng gỉ<br />☑ Chống nước : 30M - 3ATM<br />☑ Độ d&agrave;y : 0.9 CM<br />☑ Đường k&iacute;nh mặt : 4.1 CM<br />☑ Độ rộng d&acirc;y đeo : 2.2 CM<br />☑ Trọng lượng : 99 gram<br />☑ Lịch ng&agrave;y : C&oacute;<br />☑ Xuất xứ m&aacute;y : M&aacute;y miyota nhật<br />☑ Sản xuất tại : HongKong<br />🕦 Bảo h&agrave;nh : 12 th&aacute;ng (t&iacute;nh từ ng&agrave;y mua h&agrave;ng)<br /> ❃ N&ecirc;n tr&aacute;nh tiếp x&uacute;c với h&oacute;a chất như x&agrave; ph&ograve;ng, nước tẩy rửa, kh&ocirc;ng mang khi bơi lội. Tr&aacute;nh va đập mạnh</p><p>❃ Ch&iacute;nh s&aacute;ch bảo h&agrave;nh:<br />🎁 Được đổi trả sản phẩm trong v&ograve;ng 2 ng&agrave;y kể từ khi nhận được h&agrave;ng nếu sản phẩm bị lỗi do nh&agrave; sản xuất.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh cho c&aacute;c trường hợp: c&aacute;c loại d&acirc;y đeo, kho&aacute;, vỏ, m&agrave;u xi, mặt số, mặt kiếng bị hỏng h&oacute;c, vỡ do sử dụng kh&ocirc;ng đ&uacute;ng, tai nạn, l&atilde;o h&oacute;a tự nhi&ecirc;n, va đập, &hellip; trong qu&aacute; tr&igrave;nh sử dụng.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh hỏng h&oacute;c do hậu quả gi&aacute;n tiếp của việc sử dụng sai hướng dẫn.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh trầy xước về d&acirc;y hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong qu&aacute; tr&igrave;nh sử dụng. <br />🎁 Kh&ocirc;ng bảo h&agrave;ng khi tự &yacute; thay đổi m&aacute;y m&oacute;c b&ecirc;n trong, mở ra can thiệp sửa chữa trong thời gian c&ograve;n bảo h&agrave;nh &ndash; Tại những nơi kh&ocirc;ng phải l&agrave; trung t&acirc;m của h&atilde;ng.</p><p>❖ C&Aacute;C TRƯỜNG HỢP CỤ THỂ CỦA ĐỒNG HỒ CHỐNG NƯỚC :<br />➫ 30M, 3ATM, 3BAR (hoặc chỉ ghi l&agrave; Water Resistance) &ndash; Chỉ chịu nước ở mức rửa tay, đi mưa nhẹ.<br />➫ 50M, 5ATM, 5 BAR &ndash; Được sử dụng trong bơi lội, lặn s&ocirc;ng nước (kh&ocirc;ng sử dụng được trong lặn biển, chơi thể thao mạnh dưới nước&hellip;)<br />➫ 100M, 10 ATM, 10BAR &ndash; Được sử dụng trong bơi lội, lặn v&ugrave;ng s&ocirc;ng nước, lặn biển, kh&ocirc;ng được sử dụng khi chơi thể thao mạnh dưới nước.</p><p>❖ THỜI GIAN GIAO H&Agrave;NG<br />➫ Hcm, B&igrave;nh Dương, Đồng Nai : 1-2 ng&agrave;y<br />➫ H&agrave; Nội, Huế, Đ&agrave; Nẵng : dự kiến 2-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)<br />➫ C&aacute;c tỉnh th&agrave;nh kh&aacute;c : dự kiến 3-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)</p><p>❖ ƯU Đ&Atilde;I<br />➫ Giảm gi&aacute; khi mua h&agrave;ng lần 2<br />➫ Qu&agrave; tặng khi mua h&agrave;ng lần 2<br />➫ Mua 10 tặng 1</p><p><br />❖ CH&Uacute; &Yacute; : Hiện c&oacute; 1 số c&aacute; nh&acirc;n lấy h&igrave;nh ảnh v&agrave; phần chi tiết của shop H&agrave;ng Ch&iacute;nh Hiệu đăng b&aacute;n c&aacute;c sản phẩm tương tự nhưng với chất lượng v&agrave; gi&aacute; th&agrave;nh thấp hơn rất nhiều. Rất mong qu&yacute; kh&aacute;ch h&agrave;ng c&oacute; lựa chọn s&aacute;ng suốt khi mua h&agrave;ng.</p><p>&clubs; HƯỚNG DẪN LẤY M&Atilde; GIẢM GI&Aacute; VẬN CHUYỂN TRƯỚC KHI ĐẶT H&Agrave;NG:<br />BƯỚC 1: V&agrave;o trang chủ shopee =&gt; mục giảm gi&aacute; =&gt; lấy m&atilde; <br />BƯỚC 2: Nhấn v&agrave;o m&atilde; giảm gi&aacute; trong giỏ h&agrave;ng khi tiến h&agrave;nh thanh to&aacute;n<br />BƯỚC 3: M&atilde; miễn ph&iacute; vận chuyển được tự động chọn, bạn c&oacute; thể chọn th&ecirc;m m&atilde; giảm gi&aacute; kh&aacute;c (nếu c&oacute;) v&agrave; bấm OK để được ưu đ&atilde;i cho đơn h&agrave;ng<br />BƯỚC 4: Tiến h&agrave;nh thanh to&aacute;n cho đơn h&agrave;ng sau khi chọn m&atilde; giảm gi&aacute; <br />LƯU &Yacute;: 1 đơn h&agrave;ng được d&ugrave;ng tối đa 1 m&atilde; miễn ph&iacute; vận chuyển v&agrave; 1 m&atilde; giảm gi&aacute; loại kh&aacute;c</p>',
      },
      {
        images: [
          'ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
          'c8a8c12e-aef6-436b-b114-4db528ca3542.jpg',
          '0d3a7e41-f0b8-47aa-843b-db994f661682.jpg',
          '517e6837-beb7-4c8a-8df0-259f267828dd.jpg',
          'ea3c7cdf-71c5-4e0b-9a0e-1305737b5aee.jpg',
          '264418f7-f239-4405-82bf-b2e0ec05891d.jpg',
          'fd5c8918-ef84-4bf8-b20f-bb514e415686.jpg',
          'f6cb802c-9a43-4804-9a30-e56be8e41a19.jpg',
          '133ec1a8-fe1f-4ffe-a7a9-28880de79838.jpg',
        ],
        price: 300000,
        rating: 5,
        price_before_discount: 450000,
        quantity: 4034,
        sold: 2400,
        view: 5693,
        name: 'Đồng Hồ Nam CRRJU CR8940 Dây Thép Cao Cấp',
        category: '65684dab787ee9ec575a315d',
        image: 'ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
        description:
          '<p>TH&Ocirc;NG TIN SẢN PHẨM <br />- Thương hiệu đồng hồ: CRRJU<br />- K&iacute;nh thước mặt: 40mm<br />- Độ d&agrave;y: 7mm<br />- Chiều d&agrave;i d&acirc;y: 24cm<br />- Chiều rộng d&acirc;y: 20mm<br />- Bộ m&aacute;y: Time Module quartz movement (Japan Made)<br />- Mặt k&iacute;nh: Hardlex<br />- Chống nước: 3ATM (rửa tay, đi mưa)<br />- Bảo h&agrave;nh: 12 th&aacute;ng<br />Lưu &yacute;: KH&Ocirc;NG nhấn n&uacute;t trong nước hoặc sử dụng c&aacute;c hoạt động dưới nước trong thời gian d&agrave;i như bơi lặn, ng&acirc;m...<br />#A100</p>',
      },
      {
        images: [
          '37256021-1e7c-40f4-8e0f-d665f7cb95bd.jpg',
          'cae19f00-7a2a-4d79-9446-2868a613b4b7.jpg',
          '314ab003-20e1-455f-a585-7514a388a9ae.jpg',
          'eba3ed37-74f2-460e-84be-c651907b2536.jpg',
          'f0255207-359f-44a9-8b06-aea6d80408cd.jpg',
          '1939becb-3b6f-4798-b67d-66e9997efee8.jpg',
          '5990d6b5-894b-4c9c-81a2-3f039dd7b867.jpg',
          '3b5f3f84-6ff0-454f-bafb-883fce1cc3f9.jpg',
          'e97515b5-d474-40c9-b984-28d6b3ffbd08.jpg',
        ],
        price: 199000,
        rating: 5,
        price_before_discount: 250000,
        quantity: 3091,
        sold: 2500,
        view: 5442,
        name: 'Đồng Hồ Nam FNGEEN Dây Thép Cao Cấp Không Gỉ, Có Lịch Ngày, Phong Cách Doanh Nhân Sang Trọng',
        category: '65684dab787ee9ec575a315d',
        image: '37256021-1e7c-40f4-8e0f-d665f7cb95bd.jpg',
        description:
          '<p>TH&Ocirc;NG TIN VỀ SẢN PHẨM<br />Lời khẳng định của FNGEEN khi sản xuất d&ograve;ng đồng hồ n&agrave;y l&agrave; &ldquo;Gi&aacute; rẻ - Chất lượng kh&ocirc;ng hề rẻ&rdquo;. Đồng hồ được thiết kế sang trọn, qu&yacute; ph&aacute;i với những đường n&eacute;t mạng mẽ, mang lại phong c&aacute;ch quyến rũ cho c&aacute;c qu&yacute; &ocirc;ng.</p><p>Sản phẩm đồng hồ nam thời trang FNGEEN với mặt đồng hồ được thiết kế đơn giản, tinh tế, to&aacute;t l&ecirc;n sự thanh lịch, sang trọng nhưng kh&ocirc;ng k&eacute;m phần thời trang, khỏe khoắn, c&aacute; t&iacute;nh<br />- Mặt đồng hồ tr&ograve;n, thiết kế đẹp mắt, s&aacute;ng b&oacute;ng với t&iacute;nh năng hiện đại cho ph&aacute;i mạnh tự tin, mạng mẽ v&agrave; thời trang<br />- Ngo&agrave;i ra mặt đồng hồ c&ograve;n được sử dụng chất liệu k&iacute;nh kho&aacute;ng cao cấp gi&uacute;p chịu lực tốt, bền đẹp v&agrave; dễ d&agrave;ng theo d&otilde;i từng chuyển động.<br />- D&acirc;y th&eacute;p kh&ocirc;ng gỉ thiết kế &ocirc;m tay, sang b&oacute;ng.<br />- Khả năng chống thấm cho ph&eacute;p bạn y&ecirc;n t&acirc;m khi rửa tay hay đi mưa</p><p>- Thương hiệu: FNGEEN<br />- Sản xuất tại: Hồng K&ocirc;ng<br />- Kiểu m&aacute;y: Quartz, M&aacute;y Nhật<br />- D&agrave;nh cho: Nam<br />- K&iacute;ch thước mặt: 41 mm x 10 mm<br />- K&iacute;ch thước d&acirc;y: D&agrave;i x rộng: 24 x 2.0 cm<br />- Độ ch&iacute;nh x&aacute;c: +- 20 gi&acirc;y 1 th&aacute;ng<br />- Số kim: 3 kim chạy, (c&aacute;c kim nhỏ trang tr&iacute;)<br />_ Chịu nước: 3ATM đi mưa rửa tay<br />_ Bảo h&agrave;nh 12 th&aacute;ng</p><p>❤ D&agrave;nh tặng Voucher giảm 10% khi mua sản phẩm của shop cho những kh&aacute;ch h&agrave;ng th&acirc;n thiết. (Kh&aacute;ch h&agrave;ng mua tr&ecirc;n 3 đơn h&agrave;ng hoặc đơn h&agrave;ng trị gi&aacute; 500k trở l&ecirc;n)<br />❤ Quy định Bảo h&agrave;nh: đổi trả trong 7 ng&agrave;y nếu h&agrave;ng bị lỗi do nh&agrave; sản xuất như l&agrave; hết pin, rớt kim, hư kh&oacute;a, đồng hồ kh&ocirc;ng chạy. <br />Bảo h&agrave;nh pin v&agrave; m&aacute;y trong 6 th&aacute;ng. Bị bất cứ vấn đề g&igrave; bạn cứ inbox shop sẽ lu&ocirc;n tư vấn v&agrave; hỗ trợ bạn<br />❤ Thời gian giao h&agrave;ng : từ 1-5 ng&agrave;y t&ugrave;y tỉnh , huyện hay nội th&agrave;nh Giao nội tỉnh HCM &ndash; HN thường nhanh hơn, tỉnh v&agrave; huyện thường l&acirc;u hơn 1 ch&uacute;t <br />❤ Về size , d&acirc;y đồng hồ ph&ugrave; hợp cho kh&aacute;ch : Tất cả đồng hồ tại shop kh&aacute;ch đều c&oacute; thể cắt ( gỡ mắt) cho vừa với tay kh&aacute;ch nh&eacute; . Nếu kh&ocirc;ng tự l&agrave;m ở nh&agrave; được th&igrave; kh&aacute;ch c&oacute; thể mang ra quầy đồng hồ gần nhất, thợ sẽ cắt cho kh&aacute;ch. Ph&iacute; tầm 10k VND<br />#A97</p>',
      },
      {
        images: [
          'a7dfed1e-6beb-4390-af5e-24413bf619a6.jpg',
          '29fe140f-3280-4724-a246-ede984d75559.jpg',
          'c500e2d3-85ab-4cbb-b3b0-bd4b622a2cb2.jpg',
          '70ac3d12-9f6a-4447-8283-58fd9d63e319.jpg',
          'e00804e6-6884-47ca-acb0-0bd9a246266a.jpg',
          '534cff9b-d05f-40b2-a777-f043d382fd38.jpg',
          '4cce1f66-8393-4f82-b3f0-5e81face5346.jpg',
          '07c573b3-67f3-4c59-9ad8-441cb803a9ec.jpg',
          '33d2727b-68ed-4454-a1fb-4c66d454dbf7.jpg',
        ],
        price: 260000,
        rating: 5,
        price_before_discount: 500000,
        quantity: 4050,
        sold: 2300,
        view: 2932,
        name: 'Đồng Hồ Điện Tử Thể Thao Nam Chính Hãng SMAEL JAPAN 2020 - Phong Cách Quân Đội',
        category: '65684dab787ee9ec575a315d',
        image: 'a7dfed1e-6beb-4390-af5e-24413bf619a6.jpg',
        description:
          '<p>TH&Ocirc;NG TIN VỀ SẢN PHẨM <br />* TH&Ocirc;NG SỐ KỸ THUẬT:<br />&rarr; Chất liệu mặt: K&iacute;nh kho&aacute;ng chất(*)<br />&rarr; Chất liệu d&acirc;y: d&acirc;y cao su(**)<br />&rarr; K&iacute;ch thước mặt: 5.7x1.8cm<br />&rarr; K&iacute;ch thước d&acirc;y :22x2.1cm<br />&rarr; Khả năng chịu nước:30m<br />&rarr;bảo h&agrave;nh 360 ng&agrave;y<br />&rarr; Do gặp trục trặc n&ecirc;n sản phẩm kh&ocirc;ng tặng k&egrave;m hộp nh&ocirc;m thay v&agrave;o đ&oacute; shop sẽ tặng k&egrave;m pin v&agrave; m&atilde; giảm gi&aacute; cho lần mua sau<br />&rarr; Một số chức năng kh&aacute;c :<br />-- Lịch ng&agrave;y th&aacute;ng <br />- Dạ quang khi c&oacute; &aacute;nh s&aacute;ng yếu<br />&clubs; Một số lưu &yacute; kh&aacute;ch n&ecirc;n tham khảo :<br />(*) D&acirc;y cao su sử dụng hai loại vật liệu ch&iacute;nh để l&agrave;m l&agrave; cao su thi&ecirc;n nhi&ecirc;n v&agrave; silicone, một số loại polyme kh&aacute;c cũng được sử dụng, nhưng rất &iacute;t. Theo xu hướng hiện đại, d&acirc;y cao su được sử dụng ng&agrave;y c&agrave;ng nhiều theo phong c&aacute;ch thời trang, thể thao, được giới trẻ kh&aacute; ưa chuộng do đặc t&iacute;nh l&agrave; bền, chống sock hơn nữa ch&uacute;ng được giới trẻ ưa d&ugrave;ng v&igrave; c&oacute; nhiều m&agrave;u sắc rất nổi bật.<br />(**) K&iacute;nh tho&aacute;ng chống trầy :Được cấu tạo từ c&aacute;c kho&aacute;ng chất v&ocirc; cơ, l&agrave; một trong số c&aacute;c loại k&iacute;nh được sử dụng nhiều nhất hiện nay.<br />(***) C&aacute;ch đo size đồng hồ : Lấy chu vi cổ tay chia cho 4 hoặc 5, ta sẽ được khoảng mặt ph&ugrave; hợp nhất với tay m&igrave;nh. Chu vi cổ tay / 4.5 = cỡ đồng hồ tối ưu. Chu vi cổ tay / 4 = cỡ đồng hồ tối đa. Chu vi cổ tay / 5 = cỡ đồng hồ tối thiểu .<br />#A59</p>',
      },
      {
        images: [
          'a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
          '7d131757-51eb-43af-bc2a-4eb479186fc9.jpg',
          '89ca357b-cd4a-4389-b290-166bb78a987b.jpg',
          '869051b5-ce64-4107-82d1-891daa969700.jpg',
          '7586bd50-7d86-4fd9-b728-812753fdbe8d.jpg',
          'aaf5a147-d8f9-44dd-914c-ba52298fd354.jpg',
          'df1c6c76-3658-4657-a678-ca53197cef7e.jpg',
          'b117fb99-cc14-4090-9e12-1f269485b80d.jpg',
          'cb4f7da2-267f-4dc7-bd6e-aab30e04067a.jpg',
        ],
        price: 229000,
        rating: 5,
        price_before_discount: 399000,
        quantity: 100123,
        sold: 31500,
        view: 8846,
        name: 'Đồng Hồ Nam WWOOR 8018 Dây Thép Nhật Cao Cấp Nhiều Màu',
        category: '65684dab787ee9ec575a315d',
        image: 'a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
        description:
          '<p>➫ Kh&aacute;ch h&agrave;ng vui l&ograve;ng đọc r&otilde; th&ocirc;ng tin về sản phẩm để tr&aacute;nh trường hợp mua về kh&ocirc;ng h&agrave;i l&ograve;ng nh&eacute; ^^</p><p>☑ Chất liệu mặt k&iacute;nh đồng hồ nam : K&iacute;nh kho&aacute;ng chất (chống xước tốt, đ&aacute;nh b&oacute;ng được) được &eacute;p trong khung th&eacute;p kh&ocirc;ng gỉ<br />☑ Chất liệu d&acirc;y đeo đồng hồ nam: Th&eacute;p kh&ocirc;ng gỉ<br />☑ Chống nước : 30M<br />☑ Độ d&agrave;y đồng hồ nam : 0.7CM<br />☑ Đường k&iacute;nh mặt đồng hồ nam : 3.8 CM<br />☑ Độ rộng d&acirc;y đeo đồng hồ nam : 2 CM<br />☑ Trọng lượng : 72gram<br />🕦 Bảo h&agrave;nh : 12 th&aacute;ng (t&iacute;nh từ ng&agrave;y mua h&agrave;ng)</p><p>❃ N&ecirc;n tr&aacute;nh tiếp x&uacute;c đồng hồ nam 8018 với h&oacute;a chất như x&agrave; ph&ograve;ng, nước tẩy rửa, kh&ocirc;ng mang khi bơi lội. Tr&aacute;nh va đập mạnh</p><p>❃ Ch&iacute;nh s&aacute;ch bảo h&agrave;nh:<br />🎁 Được đổi trả sản phẩm trong v&ograve;ng 2 ng&agrave;y kể từ khi nhận được h&agrave;ng nếu sản phẩm bị lỗi do nh&agrave; sản xuất.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ cho c&aacute;c trường hợp: c&aacute;c loại d&acirc;y đeo, kho&aacute;, vỏ, m&agrave;u xi, mặt số, mặt kiếng bị hỏng h&oacute;c, vỡ do sử dụng kh&ocirc;ng đ&uacute;ng, tai nạn, l&atilde;o h&oacute;a tự nhi&ecirc;n, va đập, &hellip; trong qu&aacute; tr&igrave;nh sử dụng.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ hỏng h&oacute;c do hậu quả gi&aacute;n tiếp của việc sử dụng sai hướng dẫn.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ trầy xước về d&acirc;y hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong qu&aacute; tr&igrave;nh sử dụng. <br />🎁 Kh&ocirc;ng bảo h&agrave;ng đồng hồ khi tự &yacute; thay đổi m&aacute;y m&oacute;c b&ecirc;n trong, mở ra can thiệp sửa chữa trong thời gian c&ograve;n bảo h&agrave;nh &ndash; Tại những nơi kh&ocirc;ng phải l&agrave; trung t&acirc;m của h&atilde;ng.</p><p>❖ C&Aacute;C TRƯỜNG HỢP CỤ THỂ CỦA ĐỒNG HỒ CHỐNG NƯỚC :<br />➫ 30M, 3ATM, 3BAR (hoặc chỉ ghi l&agrave; Water Resistance) &ndash; Chỉ chịu nước ở mức rửa tay, đi mưa nhẹ.<br />➫ 50M, 5ATM, 5 BAR &ndash; Được sử dụng trong bơi lội, lặn s&ocirc;ng nước (kh&ocirc;ng sử dụng được trong lặn biển, chơi thể thao mạnh dưới nước&hellip;)<br />➫ 100M, 10 ATM, 10BAR &ndash; Được sử dụng trong bơi lội, lặn v&ugrave;ng s&ocirc;ng nước, lặn biển, kh&ocirc;ng được sử dụng khi chơi thể thao mạnh dưới nước.</p><p>❖ THỜI GIAN GIAO H&Agrave;NG<br />➫ Hcm, B&igrave;nh Dương, Đồng Nai : 1-2 ng&agrave;y<br />➫ H&agrave; Nội, Huế, Đ&agrave; Nẵng : dự kiến 2-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)<br />➫ C&aacute;c tỉnh th&agrave;nh kh&aacute;c : dự kiến 3-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)</p><p>❖ ƯU Đ&Atilde;I<br />➫ Giảm gi&aacute; khi mua h&agrave;ng lần 2<br />➫ Qu&agrave; tặng khi mua h&agrave;ng lần 2<br />➫ Mua 10 tặng 1</p><p>&clubs; HƯỚNG DẪN LẤY M&Atilde; GIẢM GI&Aacute; VẬN CHUYỂN TRƯỚC KHI ĐẶT H&Agrave;NG:<br />BƯỚC 1: V&agrave;o trang chủ shopee =&gt; mục giảm gi&aacute; =&gt; lấy m&atilde; <br />BƯỚC 2: Nhấn v&agrave;o m&atilde; giảm gi&aacute; trong giỏ h&agrave;ng khi tiến h&agrave;nh thanh to&aacute;n<br />BƯỚC 3: M&atilde; miễn ph&iacute; vận chuyển được tự động chọn, bạn c&oacute; thể chọn th&ecirc;m m&atilde; giảm gi&aacute; kh&aacute;c (nếu c&oacute;) v&agrave; bấm OK để được ưu đ&atilde;i cho đơn h&agrave;ng<br />BƯỚC 4: Tiến h&agrave;nh thanh to&aacute;n cho đơn h&agrave;ng sau khi chọn m&atilde; giảm gi&aacute; <br />LƯU &Yacute;: 1 đơn h&agrave;ng được d&ugrave;ng tối đa 1 m&atilde; miễn ph&iacute; vận chuyển v&agrave; 1 m&atilde; giảm gi&aacute; loại kh&aacute;c<br />#đồnghồ #đồnghồnam #đồnghồđẹp #đồnghồthờitrang #thờitrangnam #WWOOR #đồnghồwwoor #đồnghồch&iacute;nhh&atilde;ng</p>',
      },
      {
        images: [
          '8fdcc6d3-70ea-4853-954e-b8776fbab6fa.jpg',
          '531834bf-0bc0-4cdc-941e-9b5204d97b0d.jpg',
          '4cec69e1-0cc8-4c2c-8f2e-19340cc89469.jpg',
          'fb0cb1b5-8987-4d0b-bf40-428e91cb417c.jpg',
          '21643c6a-8e9f-46c7-a587-f7c5aa5034c9.jpg',
          '735f43ba-992c-4ace-a3fe-e097da0c8877.jpg',
          'e3371592-f52a-43f4-82dc-bc8da71a023b.jpg',
          '344baaa7-6507-4a1c-a619-9e199638cbff.jpg',
          '37b8be77-cb17-4126-8dae-97ff7bb19014.jpg',
        ],
        price: 194555,
        rating: 4.1,
        price_before_discount: 299999,
        quantity: 75,
        sold: 55,
        view: 5266,
        name: '[KHUYẾN MÃI 35%] Áo Thun POLO Nam, Tay Ngắn Áo Cổ Sọc, Chất Liệu Cá Sấu Cao Cấp - Nhiều màu- Đủ Size',
        category: '65684d88787ee9ec575a315a',
        image: '8fdcc6d3-70ea-4853-954e-b8776fbab6fa.jpg',
        description:
          '<p>&Aacute;o Polo nam tay ngắn ph&ugrave; hợp với nhiều ho&agrave;n cảnh: c&ocirc;ng sở, mặc nh&agrave;, đi học, đi chơi, du lịch, thể thao, Gym, l&agrave;m qu&agrave; tặng&hellip;&hellip; Tạo cảm gi&aacute;c trẻ trung cho người mặc, phối hợp được với nhiều loại quần như quần kaki, quần t&acirc;y, quần jeans, quần short&hellip;..</p><p><br />Th&ocirc;ng tin sản phẩm</p><p>T&ecirc;n sản phẩm: &Aacute;o Thun POLO Nam, Tay Ngắn &Aacute;o Cổ Sọc, &aacute;o thun nam, &aacute;o c&aacute; sấu<br />Xuất xứ: Việt Nam<br />M&agrave;u sắc: 10 M&agrave;u: Trắng, Đen, Xanh l&aacute;, Xanh R&ecirc;u, Cam Đất, Đỏ Đ&ocirc;, Xanh Biển, X&aacute;m Kh&oacute;i, Coffee, Xanh Đen<br />Size: S, M, L, XL<br />--------------------------------------</p><p>Hướng dẫn chọn size theo chiều cao c&acirc;n nặng</p><p>Th&ocirc;ng số: <br />Size S: C&acirc;n nặng từ 53 - 60kg <br />Size M: C&acirc;n nặng từ 60 - 68kg <br />Size L: C&acirc;n nặng từ 68 - 78kg <br />Size XL: C&acirc;n nặng từ 78 - 85kg<br />--------------------------------------</p><p>V&igrave; sao n&ecirc;n mua h&agrave;ng tại Lozano</p><p>Chất lượng vải: Chất liệu thun C&aacute; Sấu 100% cotton, bề mặt mềm mịn, th&ocirc;ng tho&aacute;ng, co d&atilde;n gi&uacute;p giảm nhiệt cực nhanh. (c&oacute; thể th&ecirc;m đặc điểm m&agrave;u sắc v&agrave;o nếu &aacute;o c&oacute; những đặc điểm ri&ecirc;ng biệt)Độ d&agrave;y vừa phải đảm bảo giữ form d&aacute;ng, bền m&agrave;u sau nhiều lần giặt. Những đường may tỉ mỉ cũng l&agrave; một đặc điểm đ&aacute;ng ch&uacute; &yacute; của &aacute;o Polo b&ecirc;n Lozano, chất liệu tho&aacute;ng m&aacute;t thấm h&uacute;t mồ h&ocirc;i tốt gi&uacute;p hoạt động thoải m&aacute;i trong c&ocirc;ng việc h&agrave;ng ng&agrave;y<br />Gi&aacute; cả &aacute;o Polo b&ecirc;n shop Lozano &ldquo;hời&rdquo; nhưng chất lượng &aacute;o tốt, với ti&ecirc;u ch&iacute; đưa đến kh&aacute;ch h&agrave;ng sản phẩm chất lượng đảm bảo, gi&aacute; cả phải chăng. <br />Sự uy t&iacute;n của shop được đưa l&ecirc;n h&agrave;ng đầu. <br />D&ugrave; vậy, nhưng với lượng sản phẩm b&aacute;n đi h&agrave;ng ng&agrave;y của Lozano tại cửa h&agrave;ng v&agrave; c&aacute;c s&agrave;n thương mại điện tử rất nhiều, n&ecirc;n sẽ kh&ocirc;ng tr&aacute;nh khỏi sai s&oacute;t khi sản phẩm đến tay kh&aacute;ch h&agrave;ng. Lozano mong sự th&ocirc;ng cảm đến từ qu&yacute; kh&aacute;ch v&agrave; c&oacute; cam kết về việc đổi h&agrave;ng nếu h&agrave;ng h&oacute;a bị lỗi</p><p>CH&Uacute;NG T&Ocirc;I CAM KẾT:</p><p>Cam kết chất lượng v&agrave; mẫu quần &aacute;o giống 100% trong h&igrave;nh ảnh v&agrave; th&ocirc;ng tin m&ocirc; tả<br />Cam kết được đổi sản phẩm trong v&ograve;ng 14 ng&agrave;y <br />Li&ecirc;n hệ đổi h&agrave;ng ngay với bộ phận b&aacute;n h&agrave;ng qua hotline 0775.922.123</p><p><br />Nhận ship COD to&agrave;n quốc, với dịch vụ giao h&agrave;ng rẻ, tiết kiệm<br />Ch&uacute;ng t&ocirc;i mong qu&yacute; kh&aacute;ch khi nhận được sản phẩm sẽ đ&aacute;nh gi&aacute; ch&uacute;ng t&ocirc;i một c&aacute;ch kh&aacute;ch quan nhất dựa v&agrave;o những dấu * v&agrave; những h&igrave;nh ảnh, video cụ thể. Đ&oacute; l&agrave; những đ&oacute;ng g&oacute;p v&ocirc; c&ugrave;ng qu&yacute; gi&aacute; để Lozano VietNam c&oacute; thể thay đổi v&agrave; ho&agrave;n thiện hơn<br />Địa chỉ cửa h&agrave;ng: 1148 C&aacute;ch Mạng Th&aacute;ng 8, Phường 4, Quận T&acirc;n B&igrave;nh, TP. HCM<br />Hotline: 0775.922.123</p><p>#aothunnam #aopolo #thunpolo #aophongnam #aocobe #aonam #aothunnamcobe #thunnam #ao #polonam #aothuntay #aococtaynam #aothuntayngan #aothuncobe #aothun #aophong #aopolocosoc #aothunsoc #aopolosoc #polosoc #polotayngan #aothunpolo</p>',
      },
      {
        images: [
          '93ac7b62-52e9-4846-9d51-9bc227a96923.jpg',
          '555c5f7a-493e-4419-b586-d0a1cb0b6b75.jpg',
          '14fca8bf-2c24-4ebb-9ade-e11fd43f0ea3.jpg',
          'c43fc98d-ee1e-4b1a-af06-6b9b2771bb7e.jpg',
          '6b484bfb-c64f-4bfa-aa77-617a1f7fafa1.jpg',
          '0e34d957-2f67-40ef-b504-8bbfdece70b2.jpg',
          'dcc1a2d2-1c9a-49ad-86b6-c0f43c033060.jpg',
          'd7b6c670-b54f-4cfc-af9e-f2d7f18b821c.jpg',
          '7105a40d-4773-44cd-9a2a-f07fba0c6889.jpg',
        ],
        price: 169000,
        rating: 4.5,
        price_before_discount: 279000,
        quantity: 2988,
        sold: 456,
        view: 3172,
        name: 'Áo Thun Polo Kẻ Ngang Trẻ Trung Sành Điệu Áo Phông Nam Có Cổ Tay Cộc Vải 100% Cotton Mềm Mịn Thoáng Mát HK016',
        category: '65684d88787ee9ec575a315a',
        image: '93ac7b62-52e9-4846-9d51-9bc227a96923.jpg',
        description:
          '<p>1. M&ocirc; tả sản phẩm: &Aacute;o Polo Nam kẻ Ngang Vải c&aacute; Sấu<br />- &Aacute;o thun nam Polo phối th&acirc;n kẻ ngang trẻ trung với chất liệu vải 100% Cotton mềm mịn, co gi&atilde;n, tho&aacute;ng m&aacute;t, thấm h&uacute;t mồ h&ocirc;i tốt.<br />- Sắc trắng đơn giả phối kẻ đen tạo điểm nhấn thu h&uacute;t cho ph&aacute;i mạnh, sản phẩm trẻ trung năng động ph&ugrave; hợp hầu hết mọi t&igrave;nh huống từ đi l&agrave;m, đi chơi, thể thao, du lịch, tiệc t&ugrave;ng hay sự ki&ecirc;n,...<br />- Kiểu d&aacute;ng &ocirc;m form vừa vặn cơ thể.<br />- C&oacute; thể giặt m&aacute;y, giặt ri&ecirc;ng c&aacute;c sản phẩm tối mầu.<br />Xuất xứ: H&agrave;ng Việt Nam xuất khẩu</p><p>2. TH&Ocirc;NG TIN SẢN PHẨM <br />- M&agrave;u: Trắng <br />- Size: S - M - L- XL<br /> + Size S tương đương: 50-57 kg cao 1m55-1m65<br /> + Size M tương đương: 57-65 kg cao 1m6 - 1m75<br /> + Size L tương đương: : 65-74 kg cao 1m65 - 1m8<br /> + Size XL tương đương: : 74-85 kg cao 1m75 - 1m85</p><p>- Form: d&aacute;ng Slim</p><p>🔥CAM KẾT SHOP :<br />✔️Sản phẩm 100% ch&iacute;nh h&atilde;ng.<br />✔️Sản phẩm chất lượng tốt, đảm bảo. Nếu ph&aacute;t hiện h&agrave;ng giả được đền b&ugrave; gấp đ&ocirc;i gi&aacute; trị sản phẩm<br />✔️Đảm bảo h&agrave;ng h&oacute;a y h&igrave;nh, c&oacute; video v&agrave; ảnh thật do shop tự quay, giao h&agrave;ng nhanh, dịch vụ chăm s&oacute;c <br />✔️Ch&iacute;nh s&aacute;ch bao đổi trả h&agrave;ng miễn ph&iacute; khi h&agrave;ng kh&ocirc;ng giống h&igrave;nh, sai mẫu sai m&agrave;u, nhầm số lượng.</p><p>🔥QU&Yacute; KH&Aacute;CH H&Agrave;NG LƯU &Yacute; :<br />👉Q&uacute;y kh&aacute;ch nhận v&agrave; kiểm h&agrave;ng kỹ với nh&acirc;n vi&ecirc;n giao h&agrave;ng, khi đ&atilde; nhận h&agrave;ng m&agrave; kh&ocirc;ng h&agrave;i l&ograve;ng với sản phẩm qu&yacute; kh&aacute;ch đừng vội đ&aacute;nh gi&aacute; cho shop 1 sao, 2 sao. H&atilde;y li&ecirc;n hệ shop để được hỗ trợ nhanh nhất.<br />👉H&agrave;ng đổi trả phải c&ograve;n nguy&ecirc;n hộp, kh&ocirc;ng hư hỏng m&oacute;p m&eacute;o.<br />👉Nếu h&agrave;i l&ograve;ng xin vui l&ograve;ng quay lại đơn h&agrave;ng đ&aacute;nh gi&aacute; 5 sao để được hưởng ưu đ&atilde;i giảm gi&aacute; cho lần mua sau.<br />👉Shop lu&ocirc;n sẵn s&agrave;ng trả lời inbox để tư vấn.</p><p>#aothunnamkengngang #aothunnamtaycoc #aopolonamcoctay #aothunnamcocotaycoc #aopolonamdep #aothuncoco #aopolonamhanquoc #aothunnamngantay #aothunnambody #aothunnamcongso #aothunnamnu #aophong #aonamdep #aopolo #aocongsodep #thoitrangconso #aokengang #aodilam</p>',
      },
      {
        images: [
          'edbdcca1-7a53-47fe-b3b5-4f356992eb36.jpg',
          '6d0eac12-c3c2-40e9-b72c-27b3c4b40482.jpg',
          '3ffc6422-e0df-46c4-96f2-0c35928be981.jpg',
          '14258b71-44a4-4ee9-a2ff-cc260123660c.jpg',
          'e82ef1bc-ba16-44f9-938d-edb415e09eee.jpg',
          '9e15917b-8b10-483b-9c83-88fc8de6e554.jpg',
          'ffc043dd-60ba-48b8-ba4b-d1e8c3f5371c.jpg',
          '13cff076-860d-4e98-ad03-049eaf636930.jpg',
          '8767ce97-f0de-4f49-9c05-7571dca74edd.jpg',
        ],
        price: 399000,
        rating: 4.2,
        price_before_discount: 500000,
        quantity: 552,
        sold: 11,
        view: 3092,
        name: 'Áo Polo nam HEBOZ vải cotton pha co giãn 4 chiều đẹp in logo cao bên ngực trái cao cấp, form slimfit basic - 00000673',
        category: '65684d88787ee9ec575a315a',
        image: 'edbdcca1-7a53-47fe-b3b5-4f356992eb36.jpg',
        description:
          '<p>&Aacute;o Thun ngắn tay unisex Tie Dye, form oversize, vải cotton loang mầu 2SClothing.</p><p>Th&ocirc;ng tin sản phẩm<br />- Kiểu d&aacute;ng: &Aacute;o thun nam nữ oversize<br />- M&agrave;u sắc: Tie Dye Hồng<br />- Chất liệu: vải thun cotton cao cấp, độ co gi&atilde;n tốt, mềm mịn, tho&aacute;ng m&aacute;t, kh&ocirc;ng nhăn, kh&ocirc;ng x&ugrave;<br />- Đường may tỉ mỉ, chắc chắn, kh&ocirc;ng chỉ thừa<br />- Mặc ở nh&agrave;, đi học hay đi chơi hoặc khi vận động thể thao đều si&ecirc;u hợp nha. Mix cũng quần jeans, ch&acirc;n v&aacute;y,&hellip; được ngay set đồ c&aacute; t&iacute;nh<br />- Thiết kế hiện đại, trẻ trung, năng động</p><p>Th&ocirc;ng số chọn size:<br />Size S: 1m45-1m50 (41-45kg)<br />Size M: 1m50-1m60 (46-53kg)<br />Size L: 1m60-1m65 (53-62kg)<br />Size XL: 1m65- 1m75 (63-74kg)<br />Size XXL: 1m75- 1m84 (74-84kg)<br />(Bảng size mang t&iacute;nh chất tham khảo v&agrave; ph&ugrave; hợp 80-90% sở th&iacute;ch mặc của bạn. C&aacute;c bạn muốn chọn size ph&ugrave; hợp c&oacute; thể inbox cho shop nh&eacute;)</p><p>Hướng dẫn sử dụng sản phẩm:<br />- Lần đầu đem về chỉ xả nước lạnh rồi phơi kh&ocirc; để đảm bảo chất in tr&ecirc;n &aacute;o kh&ocirc;ng bong tr&oacute;c nh&eacute;<br />- Nhớ lộn tr&aacute;i &aacute;o khi giặt v&agrave; kh&ocirc;ng giặt ng&acirc;m<br />- Kh&ocirc;ng giặt m&aacute;y trong 10 ng&agrave;y đầu<br />- Kh&ocirc;ng sử dụng thuốc tẩy<br />- Khi phơi lộn tr&aacute;i v&agrave; kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời</p><p>2S Clothing XIN CAM KẾT:<br />+ Sản phẩm chất lượng, giống h&igrave;nh, giống m&ocirc; tả 100%<br />+ &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh trước khi g&oacute;i h&agrave;ng giao cho qu&yacute; kh&aacute;ch<br />+ Ho&agrave;n tiền 100% nếu sản phẩm lỗi, kh&ocirc;ng giống với m&ocirc; tả.<br />+ Chấp nhận đổi h&agrave;ng khi size kh&ocirc;ng vừa<br />+ H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn đặt h&agrave;ng<br />+ Giao h&agrave;ng to&agrave;n quốc, thanh to&aacute;n khi nhận h&agrave;ng (ship COD)</p><p>Hỗ trợ đổi trả theo quy định của Shopee<br />1. Điều kiện &aacute;p dụng đổi sản phẩm (trong v&ograve;ng 07 ng&agrave;y kể từ khi nhận sản phẩm)<br />- H&agrave;ng ho&aacute; vẫn c&ograve;n mới nguy&ecirc;n tem m&aacute;c, chưa qua sử dụng<br />- H&agrave;ng ho&aacute; bị lỗi hoặc hư hỏng do vận chuyển hoặc do nh&agrave; sản xuất<br />2. Trường hợp kh&ocirc;ng đủ điều kiện &aacute;p dụng ch&iacute;nh s&aacute;ch:<br />- Qu&aacute; 07 ng&agrave;y kể từ khi Qu&yacute; kh&aacute;ch nhận h&agrave;ng từ shopee<br />- Gửi lại h&agrave;ng kh&ocirc;ng đ&uacute;ng mẫu m&atilde;, kh&ocirc;ng phải sản phẩm của 2S Clothing<br />- Kh&ocirc;ng th&iacute;ch, kh&ocirc;ng hợp, đặt nhầm m&atilde;, nhầm m&agrave;u, y&ecirc;u cầu kiểm tra h&agrave;ng trước khi thanh to&aacute;n.</p><p>Lưu &Yacute;:<br />H&igrave;nh ảnh sản phẩm ho&agrave;n to&agrave;n do shop tự chụp, với m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch<br />Trong trường hợp nhận được c&aacute;c sản phẩm c&oacute; vấn đề kh&ocirc;ng đ&aacute;ng kể v&iacute; dụ như bề mặt hơi bẩn c&oacute; thể hết sau khi giặt, c&oacute; chỉ thừa... ch&uacute;ng t&ocirc;i hy vọng bạn c&oacute; thể tự m&igrave;nh giải quyết c&aacute;c vấn đề đ&oacute;. Nếu bạn l&agrave; người cầu to&agrave;n v&agrave; sẽ bận t&acirc;m về c&aacute;c vấn đề đ&oacute;, mong bạn c&acirc;n nhắc cẩn thận trước khi đặt sản phẩm<br />Nếu bạn c&oacute; bất kỳ y&ecirc;u cầu g&igrave;, xin vui l&ograve;ng li&ecirc;n hệ với ch&uacute;ng t&ocirc;i</p><p>Cảm ơn &hearts; Tr&acirc;n trọng<br />Th&ocirc;ng tin li&ecirc;n hệ của shop c&oacute; trong phần m&ocirc; tả shop <br />___________ ++++++++++ _____________</p><p>#&aacute;othunngắntay<br />#&aacute;o_thun_ngắn_tay<br />#ao_thun_ngan_tay<br />#&aacute;othuntaylỡ<br />#&aacute;o_thun_tay_lỡ<br />#aothuntaylo<br />#ao_thun_tay_lo<br />#&aacute;o_form_rộng<br />#aoformrong<br />#ao_form_rong<br />#thuntayngắn<br />#thun_tay_ngắn<br />#thuntayngan<br />#thun_tay_ngan<br />#2sclothing<br />#&aacute;o_thun_nữ<br />#&Aacute;othunnữ</p>',
      },
      {
        images: [
          'b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
          '0e91ba6d-8e35-4fee-8812-6f81bbe0e3de.jpg',
          '519d5750-23b3-4ba1-8fb6-e74bf594c558.jpg',
          '3640d703-9add-45b7-b726-767c13cf3238.jpg',
          '46b7bebc-6a8d-4fb3-aa63-e9cf550f6490.jpg',
          '30273cc8-98fb-4cc6-85e6-02c447e45f4a.jpg',
        ],
        price: 75000,
        rating: 5,
        price_before_discount: 150000,
        quantity: 52,
        sold: 5,
        view: 2569,
        name: 'Áo thun Polo nam cổ bẻ BASIC vải cá sấu Cotton xuất xịn, chuẩn đẹp, màu HỒNG',
        category: '65684d88787ee9ec575a315a',
        image: 'b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
        description:
          '<p>&Aacute;o Thun ngắn tay unisex Tie Dye, form oversize, vải cotton loang mầu 2SClothing.</p><p>Th&ocirc;ng tin sản phẩm<br />- Kiểu d&aacute;ng: &Aacute;o thun nam nữ oversize<br />- M&agrave;u sắc: Tie Dye Hồng<br />- Chất liệu: vải thun cotton cao cấp, độ co gi&atilde;n tốt, mềm mịn, tho&aacute;ng m&aacute;t, kh&ocirc;ng nhăn, kh&ocirc;ng x&ugrave;<br />- Đường may tỉ mỉ, chắc chắn, kh&ocirc;ng chỉ thừa<br />- Mặc ở nh&agrave;, đi học hay đi chơi hoặc khi vận động thể thao đều si&ecirc;u hợp nha. Mix cũng quần jeans, ch&acirc;n v&aacute;y,&hellip; được ngay set đồ c&aacute; t&iacute;nh<br />- Thiết kế hiện đại, trẻ trung, năng động</p><p>Th&ocirc;ng số chọn size:<br />Size S: 1m45-1m50 (41-45kg)<br />Size M: 1m50-1m60 (46-53kg)<br />Size L: 1m60-1m65 (53-62kg)<br />Size XL: 1m65- 1m75 (63-74kg)<br />Size XXL: 1m75- 1m84 (74-84kg)<br />(Bảng size mang t&iacute;nh chất tham khảo v&agrave; ph&ugrave; hợp 80-90% sở th&iacute;ch mặc của bạn. C&aacute;c bạn muốn chọn size ph&ugrave; hợp c&oacute; thể inbox cho shop nh&eacute;)</p><p>Hướng dẫn sử dụng sản phẩm:<br />- Lần đầu đem về chỉ xả nước lạnh rồi phơi kh&ocirc; để đảm bảo chất in tr&ecirc;n &aacute;o kh&ocirc;ng bong tr&oacute;c nh&eacute;<br />- Nhớ lộn tr&aacute;i &aacute;o khi giặt v&agrave; kh&ocirc;ng giặt ng&acirc;m<br />- Kh&ocirc;ng giặt m&aacute;y trong 10 ng&agrave;y đầu<br />- Kh&ocirc;ng sử dụng thuốc tẩy<br />- Khi phơi lộn tr&aacute;i v&agrave; kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời</p><p>2S Clothing XIN CAM KẾT:<br />+ Sản phẩm chất lượng, giống h&igrave;nh, giống m&ocirc; tả 100%<br />+ &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh trước khi g&oacute;i h&agrave;ng giao cho qu&yacute; kh&aacute;ch<br />+ Ho&agrave;n tiền 100% nếu sản phẩm lỗi, kh&ocirc;ng giống với m&ocirc; tả.<br />+ Chấp nhận đổi h&agrave;ng khi size kh&ocirc;ng vừa<br />+ H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn đặt h&agrave;ng<br />+ Giao h&agrave;ng to&agrave;n quốc, thanh to&aacute;n khi nhận h&agrave;ng (ship COD)</p><p>Hỗ trợ đổi trả theo quy định của Shopee<br />1. Điều kiện &aacute;p dụng đổi sản phẩm (trong v&ograve;ng 07 ng&agrave;y kể từ khi nhận sản phẩm)<br />- H&agrave;ng ho&aacute; vẫn c&ograve;n mới nguy&ecirc;n tem m&aacute;c, chưa qua sử dụng<br />- H&agrave;ng ho&aacute; bị lỗi hoặc hư hỏng do vận chuyển hoặc do nh&agrave; sản xuất<br />2. Trường hợp kh&ocirc;ng đủ điều kiện &aacute;p dụng ch&iacute;nh s&aacute;ch:<br />- Qu&aacute; 07 ng&agrave;y kể từ khi Qu&yacute; kh&aacute;ch nhận h&agrave;ng từ shopee<br />- Gửi lại h&agrave;ng kh&ocirc;ng đ&uacute;ng mẫu m&atilde;, kh&ocirc;ng phải sản phẩm của 2S Clothing<br />- Kh&ocirc;ng th&iacute;ch, kh&ocirc;ng hợp, đặt nhầm m&atilde;, nhầm m&agrave;u, y&ecirc;u cầu kiểm tra h&agrave;ng trước khi thanh to&aacute;n.</p><p>Lưu &Yacute;:<br />H&igrave;nh ảnh sản phẩm ho&agrave;n to&agrave;n do shop tự chụp, với m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch<br />Trong trường hợp nhận được c&aacute;c sản phẩm c&oacute; vấn đề kh&ocirc;ng đ&aacute;ng kể v&iacute; dụ như bề mặt hơi bẩn c&oacute; thể hết sau khi giặt, c&oacute; chỉ thừa... ch&uacute;ng t&ocirc;i hy vọng bạn c&oacute; thể tự m&igrave;nh giải quyết c&aacute;c vấn đề đ&oacute;. Nếu bạn l&agrave; người cầu to&agrave;n v&agrave; sẽ bận t&acirc;m về c&aacute;c vấn đề đ&oacute;, mong bạn c&acirc;n nhắc cẩn thận trước khi đặt sản phẩm<br />Nếu bạn c&oacute; bất kỳ y&ecirc;u cầu g&igrave;, xin vui l&ograve;ng li&ecirc;n hệ với ch&uacute;ng t&ocirc;i</p><p>Cảm ơn &hearts; Tr&acirc;n trọng<br />Th&ocirc;ng tin li&ecirc;n hệ của shop c&oacute; trong phần m&ocirc; tả shop <br />___________ ++++++++++ _____________</p><p>#&aacute;othunngắntay<br />#&aacute;o_thun_ngắn_tay<br />#ao_thun_ngan_tay<br />#&aacute;othuntaylỡ<br />#&aacute;o_thun_tay_lỡ<br />#aothuntaylo<br />#ao_thun_tay_lo<br />#&aacute;o_form_rộng<br />#aoformrong<br />#ao_form_rong<br />#thuntayngắn<br />#thun_tay_ngắn<br />#thuntayngan<br />#thun_tay_ngan<br />#2sclothing<br />#&aacute;o_thun_nữ<br />#&Aacute;othunnữ</p>',
      },
      {
        images: [
          'fc830d4a-c616-4928-9b30-ff7cca7fa4d4.jpg',
          'c1ede578-0057-4ddc-9d35-9204787f4c8b.jpg',
          '118f336b-e59f-459e-ac95-c8db472c5d2b.jpg',
          '3aa27e77-8a1e-403a-98bb-7d859f6983cc.jpg',
          'a645aea7-e620-4bac-8ee1-09c983222644.jpg',
          '971fe2bf-79c5-4fe5-8b8a-abaaa835cfc0.jpg',
          'e528251b-9235-4009-b5e3-d870f3072364.jpg',
          '231e1ab4-2f14-428a-970c-7da321f01519.jpg',
          '24cabe00-da6d-4070-a1ae-5280b00b45e7.jpg',
        ],
        price: 69000,
        rating: 4.958,
        price_before_discount: 139000,
        quantity: 17659,
        sold: 497,
        view: 1851,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo Thun ngắn tay unisex Tie Dye, form oversize, vải cotton loang mầu 2SClothing.',
        category: '65684d88787ee9ec575a315a',
        image: 'fc830d4a-c616-4928-9b30-ff7cca7fa4d4.jpg',
        description:
          '<p>&Aacute;o Thun ngắn tay unisex Tie Dye, form oversize, vải cotton loang mầu 2SClothing.</p><p>Th&ocirc;ng tin sản phẩm<br />- Kiểu d&aacute;ng: &Aacute;o thun nam nữ oversize<br />- M&agrave;u sắc: Tie Dye Hồng<br />- Chất liệu: vải thun cotton cao cấp, độ co gi&atilde;n tốt, mềm mịn, tho&aacute;ng m&aacute;t, kh&ocirc;ng nhăn, kh&ocirc;ng x&ugrave;<br />- Đường may tỉ mỉ, chắc chắn, kh&ocirc;ng chỉ thừa<br />- Mặc ở nh&agrave;, đi học hay đi chơi hoặc khi vận động thể thao đều si&ecirc;u hợp nha. Mix cũng quần jeans, ch&acirc;n v&aacute;y,&hellip; được ngay set đồ c&aacute; t&iacute;nh<br />- Thiết kế hiện đại, trẻ trung, năng động</p><p>Th&ocirc;ng số chọn size:<br />Size S: 1m45-1m50 (41-45kg)<br />Size M: 1m50-1m60 (46-53kg)<br />Size L: 1m60-1m65 (53-62kg)<br />Size XL: 1m65- 1m75 (63-74kg)<br />Size XXL: 1m75- 1m84 (74-84kg)<br />(Bảng size mang t&iacute;nh chất tham khảo v&agrave; ph&ugrave; hợp 80-90% sở th&iacute;ch mặc của bạn. C&aacute;c bạn muốn chọn size ph&ugrave; hợp c&oacute; thể inbox cho shop nh&eacute;)</p><p>Hướng dẫn sử dụng sản phẩm:<br />- Lần đầu đem về chỉ xả nước lạnh rồi phơi kh&ocirc; để đảm bảo chất in tr&ecirc;n &aacute;o kh&ocirc;ng bong tr&oacute;c nh&eacute;<br />- Nhớ lộn tr&aacute;i &aacute;o khi giặt v&agrave; kh&ocirc;ng giặt ng&acirc;m<br />- Kh&ocirc;ng giặt m&aacute;y trong 10 ng&agrave;y đầu<br />- Kh&ocirc;ng sử dụng thuốc tẩy<br />- Khi phơi lộn tr&aacute;i v&agrave; kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời</p><p>2S Clothing XIN CAM KẾT:<br />+ Sản phẩm chất lượng, giống h&igrave;nh, giống m&ocirc; tả 100%<br />+ &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh trước khi g&oacute;i h&agrave;ng giao cho qu&yacute; kh&aacute;ch<br />+ Ho&agrave;n tiền 100% nếu sản phẩm lỗi, kh&ocirc;ng giống với m&ocirc; tả.<br />+ Chấp nhận đổi h&agrave;ng khi size kh&ocirc;ng vừa<br />+ H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn đặt h&agrave;ng<br />+ Giao h&agrave;ng to&agrave;n quốc, thanh to&aacute;n khi nhận h&agrave;ng (ship COD)</p><p>Hỗ trợ đổi trả theo quy định của Shopee<br />1. Điều kiện &aacute;p dụng đổi sản phẩm (trong v&ograve;ng 07 ng&agrave;y kể từ khi nhận sản phẩm)<br />- H&agrave;ng ho&aacute; vẫn c&ograve;n mới nguy&ecirc;n tem m&aacute;c, chưa qua sử dụng<br />- H&agrave;ng ho&aacute; bị lỗi hoặc hư hỏng do vận chuyển hoặc do nh&agrave; sản xuất<br />2. Trường hợp kh&ocirc;ng đủ điều kiện &aacute;p dụng ch&iacute;nh s&aacute;ch:<br />- Qu&aacute; 07 ng&agrave;y kể từ khi Qu&yacute; kh&aacute;ch nhận h&agrave;ng từ shopee<br />- Gửi lại h&agrave;ng kh&ocirc;ng đ&uacute;ng mẫu m&atilde;, kh&ocirc;ng phải sản phẩm của 2S Clothing<br />- Kh&ocirc;ng th&iacute;ch, kh&ocirc;ng hợp, đặt nhầm m&atilde;, nhầm m&agrave;u, y&ecirc;u cầu kiểm tra h&agrave;ng trước khi thanh to&aacute;n.</p><p>Lưu &Yacute;:<br />H&igrave;nh ảnh sản phẩm ho&agrave;n to&agrave;n do shop tự chụp, với m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch<br />Trong trường hợp nhận được c&aacute;c sản phẩm c&oacute; vấn đề kh&ocirc;ng đ&aacute;ng kể v&iacute; dụ như bề mặt hơi bẩn c&oacute; thể hết sau khi giặt, c&oacute; chỉ thừa... ch&uacute;ng t&ocirc;i hy vọng bạn c&oacute; thể tự m&igrave;nh giải quyết c&aacute;c vấn đề đ&oacute;. Nếu bạn l&agrave; người cầu to&agrave;n v&agrave; sẽ bận t&acirc;m về c&aacute;c vấn đề đ&oacute;, mong bạn c&acirc;n nhắc cẩn thận trước khi đặt sản phẩm<br />Nếu bạn c&oacute; bất kỳ y&ecirc;u cầu g&igrave;, xin vui l&ograve;ng li&ecirc;n hệ với ch&uacute;ng t&ocirc;i</p><p>Cảm ơn &hearts; Tr&acirc;n trọng<br />Th&ocirc;ng tin li&ecirc;n hệ của shop c&oacute; trong phần m&ocirc; tả shop <br />___________ ++++++++++ _____________</p><p>#&aacute;othunngắntay<br />#&aacute;o_thun_ngắn_tay<br />#ao_thun_ngan_tay<br />#&aacute;othuntaylỡ<br />#&aacute;o_thun_tay_lỡ<br />#aothuntaylo<br />#ao_thun_tay_lo<br />#&aacute;o_form_rộng<br />#aoformrong<br />#ao_form_rong<br />#thuntayngắn<br />#thun_tay_ngắn<br />#thuntayngan<br />#thun_tay_ngan<br />#2sclothing<br />#&aacute;o_thun_nữ<br />#&Aacute;othunnữ</p>',
      },
      {
        images: [
          'ee1f61e3-2029-43fd-a66d-d746c8fd637c.jpg',
          '8437f3b8-46b7-49b6-a362-0f58691d9ba9.jpg',
          '5cb7c7b1-26c2-4c27-8296-b7d945d823dc.jpg',
          '03765370-897a-4f89-9f52-3e595fd1401a.jpg',
          '6b75401d-ab0d-4b78-a8ea-e2478e54628f.jpg',
          '5b78806c-32ca-4ed2-9736-271c28452892.jpg',
          '5a38e7b5-9fc8-4bf2-a534-dc65f54083d9.jpg',
          'ac2b1da2-4067-4a7f-9509-3cfc399811fc.jpg',
          '3a5a1850-4f0f-4c1b-b920-30b6017e2c94.jpg',
        ],
        price: 69000,
        rating: 4.9,
        price_before_discount: 138000,
        quantity: 107962,
        sold: 5655,
        view: 13864,
        name: '[Mã FADI5K245 giảm 5K đơn 0đ] Áo thun tay lỡ Gấu194 unisex form rộng trơn chữ vải coton mềm mịn co dãn 4 chiều - GAU1994',
        category: '65684d88787ee9ec575a315a',
        image: 'ee1f61e3-2029-43fd-a66d-d746c8fd637c.jpg',
        description:
          '<p>&Aacute;o thun tay lỡ Men 194 unisex form rộng in chữ vải coton mềm mịn co d&atilde;n 4 chiều - NO!!<br />CAM KẾT H&Igrave;NH THIẾT KẾ KH&Ocirc;NG GIỐNG H&Igrave;NH HO&Agrave;N TIỀN 100%</p><p>SHop c&oacute; 2 loại vải:</p><p>CHẤT VẢI &amp; HƯỚNG DẪN CHỌN SIZE:<br />1. Chất thun 65/35: freesize dưới 58kg<br />co gi&atilde;n tốt, kh&ocirc;ng x&ugrave; vải<br />2. Chất coton 95%: <br /> Size M: dưới 55kg<br /> Size L: dưới 65kg<br /> Size XL: dưới 80kg</p><p>Kiểu cổ &aacute;o: Cổ tr&ograve;n. tay lỡ</p><p>✈ 🏠 SỐ ĐO &Aacute;O: Số đo c&oacute; thể x&ecirc; x&iacute;ch 1 ch&uacute;t tầm 1cm - 1.5cm ạ</p><p>1.vải 65/35<br /> -D&agrave;i: 65cm<br /> -Ngang : 47cm</p><p>2. vải coton:<br />Ngang: Chiều Ngang Cầu Vai<br />-Size M: Rộng 50cm -- D&agrave;i 69cm<br />-Size L: Rộng 53cm -- D&agrave;i 72cm<br />-Size XL: Rộng 55cm -- D&agrave;i 74cm</p><p>🍓 Bảng SIZE:</p><p>(Bảng size mang t&iacute;nh chất tham khảo v&agrave; ph&ugrave; hợp 80-90% sở th&iacute;ch c&aacute;c cậu ạ. C&aacute;c bạn muốn chọn size ph&ugrave; hợp c&oacute; thể xem h&igrave;nh feedback c&aacute;c kh&aacute;ch đ&atilde; mua hoặc inbox cho GấuStore nh&eacute; ^^)</p><p><br />🐰&Aacute;o ph&ocirc;ng được cập nhật mẫu mới mỗi ng&agrave;y.</p><p>Chất lượng sản phẩm:<br />&Aacute;o thun cotton thấm h&uacute;t mồ h&ocirc;i.<br />N&Oacute;I KH&Ocirc;NG VỚI H&Agrave;NG K&Eacute;M CHẤT LƯỢNG</p><p>Hagtag<br />#gau<br /> #aothun <br />#aothuntaylo <br />#aotaylo <br />#GấuStore <br />#Gấu194 <br />#CửaH&agrave;ngĐồngPhục <br />#aothununisex <br />#aothunnam <br />#aothunu <br />#aothungiare <br />#aothunovesize <br />#aothunoversize <br />#aophong<br /> #aongantay <br />#aothuntron</p>',
      },
      {
        images: [
          'e647d83e-4d1b-4297-b1cb-2b87bdad7963.jpg',
          'f83deef7-4be7-4d7d-91f0-d4dbc2178a88.jpg',
          'b7e42549-d22c-4817-907b-405414b2908f.jpg',
          'dd0f9992-be2c-40cf-9019-016b4c04d631.jpg',
          'cd9a52b3-d01b-4913-a95c-0dadc36e0bee.jpg',
          '7559c5c8-9b55-496d-a0b7-6daa9c46cebc.jpg',
          '6337ee32-b050-4a04-a5b3-2f378b4b260a.jpg',
          '0ce61658-dd39-4dca-9376-c4e3f1f19cb6.jpg',
          '5b85ee62-17ec-4726-bc32-dc860415254c.jpg',
        ],
        price: 130000,
        rating: 0,
        price_before_discount: 150000,
        quantity: 6982,
        sold: 0,
        view: 1127,
        name: 'Áo Thun Tay Lỡ Form Rộng Mon Mon Siêu Hot🍁 Unisex nam nữ đều mặc được)',
        category: '65684d88787ee9ec575a315a',
        image: 'e647d83e-4d1b-4297-b1cb-2b87bdad7963.jpg',
        description:
          '<p>&Aacute;o Thun Tay Lỡ In H&igrave;nh si&ecirc;u hot 🍁/Nam nữ unisex<br />Một mẫu &aacute;o cực chất lu&ocirc;n n&egrave; ạ<br />Form unisex n&ecirc;n nam nữ đều mặc được nhaaa<br />▪️Size: Freesize dưới 65kg mặc đẹp<br />▪️M&agrave;u: Trắng, Đen<br />▪️Vải thun co gi&atilde;n 4 chiều, mặc thoải m&aacute;i, form rộng</p><p>CAM KẾT:<br />- Sản phẩm &Aacute;o thun tay lỡ Unisex form rộng 100% giống m&ocirc; tả.<br />- Đảm bảo vải chất lượng 100%.<br />- &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh trước khi g&oacute;i h&agrave;ng giao cho Qu&yacute; kh&aacute;ch.<br />- H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn.<br />- Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc, nhận h&agrave;ng trả tiền.</p><p>HỖ TRỢ ĐỔI TRẢ THEO QUY ĐỊNH SHOPEE<br />Do m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch khoảng 1-5% nh&eacute;.<br />Nếu c&ograve;n thắc mắc về sản phẩm, đừng ngần ngại, h&atilde;y nhắn tin cho để được tư vấn ngay nh&eacute;!</p><p>--------------------------------------------------------------------------<br /> #oversize #aothun #tee #teeunisex #unisex #unisexclothing #unisexclothing #unisexstyle<br />#aothun #aothuntaylo #unisex #aothununisex #&aacute;o_thun #aoformrong #aothunformrong #&aacute;o_thun_nam_nữ #&aacute;o_thun_form_rộng #&aacute;o_form_rộng #&aacute;o_thun_tay_lỡ #&aacute;o_tay_lỡ #&aacute;o_thun_unisex #xưởng_&aacute;o_thun #&aacute;o</p>',
      },
      {
        images: [
          'a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
          'a55c3d25-d976-4a13-9cb8-853d86ab5973.jpg',
          'f45a3ea7-96f8-46f4-852d-2b649e0e9683.jpg',
          '1ade3e4a-521d-479a-839b-9f376367a2e9.jpg',
          '40ac6bc7-c9dd-46f2-9abe-67ea984f1bf6.jpg',
          'f6bdd55e-954e-411e-b084-5addcb3bda16.jpg',
          '242b0379-269e-4f4f-a2da-3b1a3b6d52b8.jpg',
          'f56a0dfa-81de-49e5-b997-92c35627358d.jpg',
        ],
        price: 37000,
        rating: 4.95,
        price_before_discount: 70000,
        quantity: 724,
        sold: 75,
        view: 958,
        name: 'Áo Cotton Nam Đông Xuân Cộc Tay Và Ba Lỗ ( Video+ Ảnh Thật )',
        category: '65684d88787ee9ec575a315a',
        image: 'a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
        description:
          "<p>Thương hiệu &aacute;o l&oacute;t nam nano cực k&igrave; nổi tiếng l&agrave;m h&agrave;i l&ograve;ng cả kh&aacute;ch kh&oacute; t&iacute;nh Nhất<br />&Aacute;o l&oacute;t đ&ocirc;ng xu&acirc;n chất liệu mỏng mềm, nhẹ, thấm h&uacute;t mồ h&ocirc;i. Đặc biệt sx theo c&ocirc;ng nghệ ti&ecirc;u chuẩn Nhật Bản n&ecirc;n ko bị chảy v&agrave; bai.như c&aacute;c loại &aacute;o đ&ocirc;ng xu&acirc;n kh&aacute;c <br />C&aacute;c bạn h&atilde;y sắm ngay cho anh x&atilde;', cho người y&ecirc;u hay cho bố th&acirc;n y&ecirc;u đi ạ. Một m&oacute;n qu&agrave; &yacute; nghĩa cho ng&agrave;y h&egrave; đỡ oi bức<br />Nh&agrave; e cam kết b&aacute;n h&agrave;ng chuẩn ạ<br />Sỉ ib gi&aacute; tốt <br />+ Size M: 45-55kg<br />+ Size L: 55-65kg<br />+ Size XL : 65-75kg<br />+ Size XXL : 75-85 kg<br />#&aacute;onam #&aacute;olot #nam #đ&ocirc;ngxu&acirc;n #gunze #balỗ #cổtr&ograve;n</p>",
      },
      {
        images: [
          'ef8fcfa8-c006-486e-9660-462efa93ad43.jpg',
          '5d172cad-1bcf-4d9d-99d1-0181e3aafdae.jpg',
          'f6ad0955-51bd-444b-bd74-b5bb4166ccfb.jpg',
          '9064e6d7-1315-4109-bbfa-6003f3a7227b.jpg',
          '789df15f-0298-4083-a559-7f567abb9adc.jpg',
          '1204c73a-151c-4b31-9e4e-bcee60db0b68.jpg',
        ],
        price: 79000,
        rating: 4.8,
        price_before_discount: 150000,
        quantity: 23210,
        sold: 898,
        view: 2053,
        name: '[XẢ KHO GIÁ SỐC] Áo thun nam cổ tim ngắn tay đẹp nhiều màu đủ size ( có size lớn cho người 100 kg )',
        category: '65684d88787ee9ec575a315a',
        image: 'ef8fcfa8-c006-486e-9660-462efa93ad43.jpg',
        description:
          '<p>&Aacute;o Thun nam cổ tim Ngắn tay nhiều m&agrave;u<br />✔ &Aacute;o thun l&agrave; item kh&ocirc;ng thể thiếu trong tủ đồ ng&agrave;y h&egrave; v&igrave; sự thoải m&aacute;i, dễ chịu, lại rất dễ phối đồ.<br />✔ &Aacute;o thun trơn basic được l&agrave;m bằng chất liệu thun lạnh co gi&atilde;n 4 chiều, cực k&igrave; đẹp, vải rất m&aacute;t, sờ mịn tay<br />✔ Kh&ocirc;ng ra m&agrave;u, kh&ocirc;ng bai nh&atilde;o, kh&ocirc;ng chảy xệ.<br />✔ Bo cổ kiểu cắt (qu&yacute; kh&aacute;ch vui l&ograve;ng xem kĩ h&igrave;nh ảnh chi tiết cổ &aacute;o)<br />✔ M&agrave;u sắc trẻ trung, như h&igrave;nh hoặc c&oacute; hơi nhạt hơn 1 t&yacute; v&igrave; mỗi lần vải về c&oacute; ch&ecirc;nh lệch 1 t&iacute; m&agrave;u ạ (hỗ trợ đổi trả nếu kh&ocirc;ng h&agrave;i l&ograve;ng)<br />✔ C&oacute; 6 m&agrave;u: trắng, đen, x&aacute;m, xanh r&ecirc;u , đỏ đ&ocirc;, xanh đen<br />&Aacute;o thun nam s&agrave;nh điệu c&oacute; thiết kế cổ tr&ograve;n, tay ngắn mang lại cho ph&aacute;i mạnh phong c&aacute;ch nam t&iacute;nh v&agrave; lịch l&atilde;m khi mặc h&agrave;ng ng&agrave;y<br />&bull; Form &aacute;o &ocirc;m vừa vặn thoải m&aacute;i khi mặc hằng ng&agrave;y hay c&aacute;c hoạt động mang lại sự tự tin v&agrave; năng động cho ph&aacute;i mạnh<br />&bull; &Aacute;o trơn m&agrave;u đơn giản tạo n&ecirc;n n&eacute;t nam t&iacute;nh mạnh mẽ cho nam giới khi mặc, gi&uacute;p ph&aacute;i mạnh lu&ocirc;n c&aacute; t&iacute;nh, thời thượng<br />&bull; Đường chỉ may đẹp, tinh tế mang đến sự an t&acirc;m tuyệt đối cho nam giới khi sử dụng sản phẩm<br />&bull; M&agrave;u sắc đa dạng, c&aacute; t&iacute;nh, nổi bật, dễ phối đồ, rất cuốn h&uacute;t khi mặc vận động thể thao hay đi chơi<br />&bull; Chất liệu thun mềm mại, tho&aacute;ng m&aacute;t, thấm h&uacute;t tốt, kh&ocirc;ng lo hầm b&iacute; khi mặc<br />&bull; Kết hợp h&agrave;i h&ograve;a được với c&aacute;c trang phục từ bụi bặm c&aacute; t&iacute;nh như quần short, quần jean đến những phong c&aacute;ch đơn giản cổ điển như quần t&acirc;y quần kaki,..<br />&bull; K&iacute;ch thước: <br />Size S : ( 45kg - 52kg )<br />Size M : ( 53kg - 59kg )<br />size L : ( 60kg - 69kg )<br />Size XL : (70kg - 78kg)<br />size 2XL : (79kg - 89kg)<br />Size 3XL : (90kg-105kg)<br />Xuất xứ: Việt Nam</p><p>#aothun #aothunnam #aocotim #aothuncotim #aothuntron #aothundep #aothuncotim #aophongnamcotron #aophongnam #aothunnamgiare #aothunnamre #aothunnamrẻnhất #aothun #&aacute;othunnam<br />#&aacute;othun #aothunnam #aothunnamcotron #&aacute;othunnamrẻđẹp #&aacute;othunnamcổtr&ograve;n #aothunnamdep #aophongnam #aophongnamdep #aophongnamgiare #aophongnamdep #&aacute;othunnamđẹp</p>',
      },
      {
        images: [
          'd2fe4691-1d73-4bb2-8aec-afff5f13e83d.jpg',
          '09e9a588-c37f-4f8c-8e71-526740463197.jpg',
          'd0008f1d-6b5b-41c2-9f10-fbafe8d77654.jpg',
          '9fc757bd-72d0-4eb4-bb9f-1b4c24cdd0f5.jpg',
          '9ff8b241-df66-4d1d-af33-f13bebcaf533.jpg',
          'c7f0f858-537e-49f6-9d91-2f29bb97ac2b.jpg',
          '59f5a601-5dde-41dc-93ac-aee91e33c4ae.jpg',
          '886dd1a2-30db-4734-99d8-9d7c678426b7.jpg',
          '96190778-61d9-4d53-a449-6a7ec4a33b8d.jpg',
        ],
        price: 982350,
        rating: 4.9,
        price_before_discount: 189000,
        quantity: 3224,
        sold: 523,
        view: 1400,
        name: 'Áo thun nam nữ cotton co giãn unisex Giisel phông trơn basic tee tay lỡ oversize form rộng 10 màu',
        category: '65684d88787ee9ec575a315a',
        image: 'd2fe4691-1d73-4bb2-8aec-afff5f13e83d.jpg',
        description:
          '<p>- GIISEL OFFICIAL CAM KẾT VỚI KH&Aacute;CH H&Agrave;NG : <br />* Sản phẩm tốt nhất trong ph&acirc;n kh&uacute;c gi&aacute;. <br />* Cam kết sản phẩm giống h&igrave;nh ảnh đến 99.999% - Kh&aacute;c biệt duy nhất l&agrave; m&agrave;u sắc do &aacute;nh s&aacute;ng v&agrave; độ ph&acirc;n giải c&aacute;c m&agrave;n h&igrave;nh hiển thị nhưng KH&Ocirc;NG Đ&Aacute;NG KỂ. <br />* Hỗ trợ đổi h&agrave;ng nhanh ch&oacute;ng - thuận tiện. <br />* Miễn ph&iacute; vận chuyển đơn h&agrave;ng từ 50k - hỗ trợ ph&iacute; ship tối đa l&ecirc;n tới 70k với đơn h&agrave;ng từ 300k.</p><p>Th&ocirc;ng tin sản phẩm &Aacute;o thun cotton co gi&atilde;n unisex Giisel ph&ocirc;ng trơn basic tee nam nữ tay lỡ oversize form rộng 10 m&agrave;u :<br />- H&agrave;ng chuẩn GIISEL sản xuất, tem m&aacute;c chuẩn ch&iacute;nh h&atilde;ng.<br />- Chất liệu: thun cotton 100%, co gi&atilde;n 4 chiều, vải mềm, vải mịn, tho&aacute;ng m&aacute;t, kh&ocirc;ng x&ugrave; l&ocirc;ng.<br />- Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn.<br />- Mặc ở nh&agrave;, mặc đi chơi hoặc khi vận động thể thao. Ph&ugrave; hợp khi mix đồ với nhiều loại.<br />- Thiết kế hiện đại, trẻ trung, năng động. Dễ phối đồ.</p><p>Th&ocirc;ng số chọn size:<br />Size M: 1m50-1m60 (50-65kg) <br />Size L: 1m55-1m70 (55-65kg) <br />Size XL: 1m68- 1m80 (60-70kg) <br />Size 2XL: 1m75- 1m85 (70-80kg)<br />(Bảng tr&ecirc;n chỉ mang t&iacute;nh chất tham khảo, chọn mặc fom vừa vặn thoải m&aacute;i, l&ecirc;n xuống size tuỳ theo sở th&iacute;ch ăn mặc của bạn)</p><p>Hướng dẫn sử dụng sản phẩm &Aacute;o thun cotton co gi&atilde;n unisex Giisel ph&ocirc;ng trơn basic tee nam nữ tay lỡ oversize form rộng 10 m&agrave;u:<br />- Nhớ lộn tr&aacute;i &aacute;o khi giặt v&agrave; kh&ocirc;ng giặt ng&acirc;m<br />- Kh&ocirc;ng giặt m&aacute;y trong 10 ng&agrave;y đầu<br />- Kh&ocirc;ng sử dụng thuốc tẩy<br />- Khi phơi lộn tr&aacute;i v&agrave; kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời<br />---------------------------------------<br />CH&Uacute;NG T&Ocirc;I XIN CAM KẾT:<br />&Aacute;o thun Unisex GIISEL cotton Basic Tee ph&ocirc;ng trơn nam nữ tay lỡ oversize form rộng 10 m&agrave;u:<br />- Đảm bảo vải chuẩn cotton 4 chiều 100% chất lượng .<br />- H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn đặt h&agrave;ng .<br />- Ho&agrave;n tiền 100% nếu sản phẩm lỗi, nhầm hoặc kh&ocirc;ng giống với m&ocirc; tả.<br />- Chấp nhận đổi h&agrave;ng khi size kh&ocirc;ng vừa (vui l&ograve;ng nhắn tin ri&ecirc;ng cho shop).<br />- Giao h&agrave;ng to&agrave;n quốc, thanh to&aacute;n khi nhận h&agrave;ng.<br />- Hỗ trợ đổi trả theo quy định của Shopee .</p><p>1. Điều kiện &aacute;p dụng đổi sản phẩm (trong v&ograve;ng 07 ng&agrave;y kể từ khi nhận sản phẩm) <br />- H&agrave;ng ho&aacute; vẫn c&ograve;n mới nguy&ecirc;n tem m&aacute;c, chưa qua sử dụng.<br />- H&agrave;ng ho&aacute; bị lỗi hoặc hư hỏng do vận chuyển hoặc do nh&agrave; sản xuất</p><p>2. Trường hợp kh&ocirc;ng đủ điều kiện &aacute;p dụng ch&iacute;nh s&aacute;ch: <br />- Qu&aacute; 07 ng&agrave;y kể từ khi Qu&yacute; kh&aacute;ch nhận h&agrave;ng từ shopee.<br />- Gửi lại h&agrave;ng kh&ocirc;ng đ&uacute;ng mẫu m&atilde;, kh&ocirc;ng phải sản phẩm của GIISEL.<br />- Kh&ocirc;ng th&iacute;ch, kh&ocirc;ng hợp, đặt nhầm m&atilde;, nhầm m&agrave;u, y&ecirc;u cầu kiểm tra h&agrave;ng trước khi thanh to&aacute;n.<br />---------------<br />GIISEL kh&ocirc;ng chịu tr&aacute;ch nhiệm trong trường hợp qu&yacute; kh&aacute;ch chọn nhầm m&agrave;u, hoa văn, k&iacute;ch thước...</p><p>* H&agrave;ng gi&aacute; rẻ sẽ c&oacute; chất lượng k&eacute;m, xin đừng so s&aacute;nh với sản phẩm chất lượng cao của ch&uacute;ng t&ocirc;i. <br />* Trong trường hợp nhận được c&aacute;c sản phẩm c&oacute; vấn đề kh&ocirc;ng đ&aacute;ng kể v&iacute; dụ như bề mặt hơi bẩn c&oacute; thể hết sau khi giặt, c&oacute; chỉ thừa.... shop hy vọng bạn c&oacute; thể tự m&igrave;nh giải quyết c&aacute;c vấn đề đ&oacute;. Nếu bạn l&agrave; người cầu to&agrave;n v&agrave; sẽ bận t&acirc;m về c&aacute;c vấn đề đ&oacute;, mong bạn c&acirc;n nhắc cẩn thận trước khi đặt sản phẩm.<br />#&aacute;o_thun #ao_thun_nam #&aacute;o_thun_unisex #basic #hanquoc #oversize #giisel #aothun #aophong #freesize #inhinh #taylo #&aacute;o</p>',
      },
      {
        images: [
          'e81c7a6a-b3a4-470d-bc3a-e5a5bda78f97.jpg',
          'fea67f75-a44d-463f-9b6f-d6d72d841f89.jpg',
          'd263bd06-2c86-446b-b521-303f647ce7b9.jpg',
          '4e376852-472e-4de4-bc37-fa682620bd5b.jpg',
          '63fa304a-bd24-4def-8fd5-270362e1c145.jpg',
          '5dbd6ce2-139e-40b0-b270-631c17273349.jpg',
        ],
        price: 106000,
        rating: 0,
        price_before_discount: 189000,
        quantity: 3000,
        sold: 0,
        view: 415,
        name: '[MS 027] Áo thun nam cổ tròn siêu đẹp- Áo phông nam với chất liệu thun lạnh cực kì mát mẻ',
        category: '65684d88787ee9ec575a315a',
        image: 'e81c7a6a-b3a4-470d-bc3a-e5a5bda78f97.jpg',
        description:
          '<p>&Aacute;o thun nam trơn vải thun lạnh cao cấp mềm mịn, &aacute;o ph&ocirc;ng nam đẹp ngắn tay c&oacute; đủ bảng m&agrave;u cực hot <br />MENSHOP2916 h&acirc;n hạnh được phục vụ qu&yacute; kh&aacute;ch. Những sản phẩm mới nhất vẫn li&ecirc;n tục được cập nhật mỗi ng&agrave;y ph&ugrave; hợp với nhiều lứa tuổi.</p><p>1. GIỚI THIỆU SẢN PHẨM<br />- &Aacute;o ph&ocirc;ng nam l&agrave; sự lựa chọn ho&agrave;n hảo cho c&aacute;c ch&agrave;ng trai. &Aacute;o m&agrave;u trung t&iacute;nh rất dễ mặc, form &aacute;o vừa vặn cơ thể, thoải m&aacute;i theo từng cử động.<br />- M&agrave;u sắc trung t&iacute;nh v&agrave; phối m&agrave;u tuyệt vời m&agrave; rất &iacute;t &aacute;o c&oacute; tạo n&ecirc;n sự dễ d&agrave;ng trong việc phối đồ v&agrave; tạo ra cho m&igrave;nh nhiều phong c&aacute;ch kh&aacute;c nhau.<br />- &Aacute;o được l&agrave;m từ chất liệu THUN LẠNH co gi&atilde;n với bề mặt vải mềm mại, thấm h&uacute;t mồ h&ocirc;i tốt tạo cảm gi&aacute;c thoải m&aacute;i, tho&aacute;ng m&aacute;t cho người mặc. Đ&acirc;y cũng l&agrave; chất liệu dễ giặt sạch, gi&uacute;p bạn tiết kiệm một khoảng thời gian đ&aacute;ng kể.<br />- &Aacute;o chống nhăn tốt, dễ giặt sạch, nhanh kh&ocirc;.<br />-Giặt tay hay giặt m&aacute;y thoải m&aacute;i kh&ocirc;ng sợ ra m&agrave;u, nhăn , mất form</p><p>2. TH&Ocirc;NG TIN SẢN PHẨM</p><p>- Chất liệu:Vải thun lạnh, thấm h&uacute;t mồ h&ocirc;i , giặt kh&ocirc;ng ra m&agrave;u , kh&ocirc;ng mất form <br />- C&aacute;c Size L- XL- XXL</p><p>+<br /> + Size L : 45 - 56 kg <br /> + Size XL : 57 - 64kg <br /> + Size XXL : 64- 75kg <br /> <br />- M&agrave;u sắc : Đen , trắng , Ghi , xanh Ngọc, Xanh T&iacute;m, Trắng<br />- Form &aacute;o slim dễ phối đồ</p><p>3. CH&Iacute;NH S&Aacute;CH B&Aacute;N H&Agrave;NG:<br />- Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh.<br />- Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.<br />- Cam kết được đổi trả h&agrave;ng trong v&ograve;ng 5 ng&agrave;y.</p><p>4. HƯỚNG DẪN C&Aacute;CH ĐẶT H&Agrave;NG<br />- Bước 1: C&aacute;ch chọn size, shop c&oacute; bảng size mẫu. Bạn N&Ecirc;N INBOX, cung cấp chiều cao, c&acirc;n nặng để SHOP TƯ VẤN SIZE<br />- Bước 2: C&aacute;ch đặt h&agrave;ng: Nếu bạn muốn mua 2 sản phẩm kh&aacute;c nhau hoặc 2 size kh&aacute;c nhau, để được freeship<br />+ Bạn chọn từng sản phẩm rồi th&ecirc;m v&agrave;o giỏ h&agrave;ng<br />+ Khi giỏ h&agrave;ng đ&atilde; c&oacute; đầy đủ c&aacute;c sản phẩm cần mua, bạn mới tiến h&agrave;nh ấn n&uacute;t &ldquo; Thanh to&aacute;n&rdquo;<br />- Shop lu&ocirc;n sẵn s&agrave;ng trả lời inbox để tư vấn.</p><p>🔔🔔🔔 Tham khảo th&ecirc;m c&aacute;c sản phẩm kh&aacute;c tại: <br />#&aacute;othunnamc&oacute;cổ #aothunnamcoco<br />#&aacute;othunnamc&oacute;cổtayngắn<br />#aopolonam <br />#&aacute;opolonam <br />#aopolonamhangmysaleoff <br />#aopolonamdep <br />#aopolonamnu <br />#AOTHUNHANQUOC<br />#&aacute;othunnam <br />#aothunnambody <br />#aothunnam <br />#aothunnamnu <br />#&aacute;othunnamtayngắn <br />#aothunnamdep <br />#aothunnama</p>',
      },
      {
        images: [
          '08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
          '182d6e25-65fa-4abe-b822-70d87550bf4e.jpg',
          '827e675d-e553-497e-9b15-d2df5fc7192d.jpg',
          'b6425e3f-3cc3-4696-94f7-5053afca2c71.jpg',
          '4d80b312-e605-4508-ab80-14dd75f6d23d.jpg',
          '9e628716-0b94-44d8-850c-e96adc4b1c8f.jpg',
          '20a1a8e5-1b49-4854-a221-0f96130b5fd8.jpg',
        ],
        price: 279000,
        rating: 5,
        price_before_discount: 315000,
        quantity: 1959,
        sold: 36,
        view: 456,
        name: '[Mã FAMALLT5 giảm 15% đơn 150K] Áo thun tay lỡ GENZ phông Unisex nam nữ Cotton oversize form rộng Racing Genz GZT021',
        category: '65684d88787ee9ec575a315a',
        image: '08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
        description:
          '<p>Bạn qu&aacute; ch&aacute;n nản với những chiếc &aacute;o thun gi&aacute; rẻ ghi 100% cotton b&aacute;n tr&agrave;n lan tr&ecirc;n Shopee nhưng mặc v&agrave;o th&igrave; n&oacute;ng, b&iacute; v&agrave; kh&oacute; chịu.<br />Suốt một thời gian d&agrave;i c&aacute;c nh&atilde;n h&agrave;ng &aacute;o ph&ocirc;ng lạm dụng từ 100% cotton một c&aacute;ch v&ocirc; tội vạ v&agrave; kh&ocirc;ng chỉ ra được cho người ti&ecirc;u d&ugrave;ng một định nghĩa đ&uacute;ng về 100% cotton.<br />V&agrave; GENZ ch&uacute;ng t&ocirc;i c&oacute; mặt tại đ&acirc;y để c&ugrave;ng kh&aacute;ch h&agrave;ng của m&igrave;nh định nghĩa lại một c&aacute;ch r&otilde; r&agrave;ng nhất về chất liệu cotton, về c&acirc;u chuyện của những chiếc &aacute;o thun tay lỡ unisex 100% cotton.</p><p>Khoan n&oacute;i về những l&yacute; thuyết kh&ocirc; khan m&agrave; h&atilde;y b&agrave;n về sự thoải m&aacute;i của kh&aacute;ch h&agrave;ng khi mặc. Kho&aacute;c một chiếc &aacute;o thuần cotton l&ecirc;n người, bạn sẽ cảm nhận r&otilde; sự tho&aacute;ng m&aacute;t v&agrave; độ thấm h&uacute;t mồ h&ocirc;i. . V&igrave; vậy để gi&uacute;p bạn cảm nhận r&otilde; thế n&agrave;o l&agrave; một chiếc &aacute;o Cotton xịn, GenZ đ&atilde; d&agrave;y c&ocirc;ng nghi&ecirc;n cứu, thử nghiệm v&agrave; cho ra đời một loại chất liệu cotton đặc biệt. Vẫn đem lại cảm gi&aacute;c thoải m&aacute;i, mặc như kh&ocirc;ng mặc, độ thấm h&uacute;t mồ h&ocirc;i cực cao m&agrave; c&ograve;n c&oacute; khả năng co d&atilde;n 4 chiều, bền hơn v&agrave; giữ form l&acirc;u hơn.<br />Điều tiếp theo bạn sẽ thấy khi cầm v&agrave;o chiếc &aacute;o thun GenZ đ&oacute; ch&iacute;nh l&agrave; lớp vải mềm, mướt tay nhưng d&agrave;y dặn, độ bắt m&agrave;u tốt v&agrave; &iacute;t nhăn. Chất liệu ngang h&agrave;ng với những thương hiệu c&oacute; tiếng nhưng gi&aacute; th&agrave;nh kh&ocirc;ng qu&aacute; đau v&iacute;.</p><p>Chẳng cần n&oacute;i qu&aacute; nhiều v&igrave; ch&uacute;ng m&igrave;nh tự tin v&agrave;o chất liệu cotton n&agrave;y c&oacute; thể l&agrave;m chiều l&ograve;ng ngay cả những kh&aacute;ch h&agrave;ng kh&oacute; t&iacute;nh nhất. V&agrave; nếu chất liệu &aacute;o kh&ocirc;ng giống như m&ocirc; tả, ch&uacute;ng m&igrave;nh sẵn s&agrave;ng ho&agrave;n trả to&agrave;n bộ số tiền m&agrave; bạn bỏ ra để trải nghiệm chiếc &aacute;o với chất liệu s&aacute;nh ngang h&agrave;ng hiệu n&agrave;y.</p><p>Mẹo nhỏ giúp bạn bảo quản áo thun Premium GenZ để lu&ocirc;n ngon như người y&ecirc;u cũ:<br />- Lần đầu đem về bạn chỉ cần xả nước lạnh rồi phơi kh&ocirc; <br />- Sau 3 ng&agrave;y nhận &aacute;o th&igrave; hẵng đem em n&oacute; đi giặt n&egrave;.<br />- Mỗi khi giặt nhớ lộn tr&aacute;i &aacute;o v&agrave; kh&ocirc;ng giặt ng&acirc;m.<br />- Kh&ocirc;ng sử dụng thuốc tẩy.<br />- Khi phơi nhớ lộn tr&aacute;i v&agrave; kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời.</p><p>GENZ CAM KẾT<br />H&igrave;nh ảnh sản phẩm l&agrave; ảnh thật do shop tự chụp v&agrave; giữ bản quyền h&igrave;nh ảnh<br />Chất liệu Premium Cotton 100%<br />&Aacute;o được kiểm tra kỹ, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh <br />H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn <br />Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả<br />Chấp nhận đổi h&agrave;ng khi size kh&ocirc;ng vừa<br />Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc, nhận h&agrave;ng trả tiền</p><p>QUY ĐỊNH BẢO H&Agrave;NH, ĐỔI TRẢ</p><p>1. Điều kiện &aacute;p dụng (trong v&ograve;ng 07 ng&agrave;y kể từ khi nhận sản phẩm) <br />- H&agrave;ng ho&aacute; vẫn c&ograve;n mới, chưa qua sử dụng <br />- H&agrave;ng ho&aacute; bị lỗi hoặc hư hỏng do vận chuyển hoặc do nh&agrave; sản xuất <br />2. Trường hợp được chấp nhận: <br />- H&agrave;ng kh&ocirc;ng đ&uacute;ng size, kiểu d&aacute;ng như qu&yacute; kh&aacute;ch đặt h&agrave;ng <br />- Kh&ocirc;ng đủ số lượng, kh&ocirc;ng đủ bộ như trong đơn h&agrave;ng <br />3. Trường hợp kh&ocirc;ng đủ điều kiện &aacute;p dụng ch&iacute;nh s&aacute;ch: <br />- Qu&aacute; 07 ng&agrave;y kể từ khi Qu&yacute; kh&aacute;ch nhận h&agrave;ng <br />- Gửi lại h&agrave;ng kh&ocirc;ng đ&uacute;ng mẫu m&atilde;, kh&ocirc;ng phải sản phẩm của GENZ.<br />- Kh&ocirc;ng th&iacute;ch, kh&ocirc;ng hợp, đặt nhầm m&atilde;, nhầm m&agrave;u,... <br />Do m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch khoảng 3-5%</p><p>#ao #thun #unisex #freesize #tay #lo #pull #genz #form #rong #fullbox #phong #local #brand</p>',
      },
      {
        images: [
          'ccb7fdb4-af25-4a4e-a13c-c4e1ca44682e.jpg',
          'b67d1471-d3ac-4677-b5ac-7519088b8e52.jpg',
          'ad676517-13f9-43a0-b1e6-0e7aaffbe26e.jpg',
          'e6b9533d-c0ac-49ca-bf88-07455099e742.jpg',
          'e42299f9-b7c6-4467-834d-305a64feda63.jpg',
          '52837508-ca01-4683-a56d-9070ea9b38c5.jpg',
          'da1c55e9-253c-4281-b095-e5fa970a2b59.jpg',
          '176c68c2-0bb3-4c4b-985e-d3faf2ad9ce7.jpg',
          'b014824b-4d8b-46f6-b94d-4ea8cae8c6d8.jpg',
        ],
        price: 100000,
        rating: 0,
        price_before_discount: 10000,
        quantity: 22396,
        sold: 0,
        view: 456,
        name: 'Áo Thun Tay Lỡ Basic Nhiều Màu Siêu Hot🍁 Unisex nam nữ đều mặc được',
        category: '65684d88787ee9ec575a315a',
        image: 'ccb7fdb4-af25-4a4e-a13c-c4e1ca44682e.jpg',
        description:
          '<p>&Aacute;o Thun Tay Lỡ Basic Nhiều M&agrave;u Si&ecirc;u Hot 🍁/Nam nữ unisex<br />Một mẫu &aacute;o cực chất lu&ocirc;n n&egrave; ạ<br />Form unisex n&ecirc;n nam nữ đều mặc được nhaaa<br />🌼 &Aacute;o Thun Tay Lỡ Basic Nhiều M&agrave;u Si&ecirc;u Hot<br />▪️Size: Freesize dưới 65kg mặc đẹp<br />▪️M&agrave;u: Trắng, Đen, Xanh, V&agrave;ng, Hồng<br />▪️Vải thun co gi&atilde;n 4 chiều, mặc thoải m&aacute;i, form rộng</p><p>CAM KẾT:<br />- Sản phẩm &Aacute;o thun tay lỡ Unisex form rộng 100% giống m&ocirc; tả.<br />- Đảm bảo vải chất lượng 100%.<br />- &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận v&agrave; tư vấn nhiệt t&igrave;nh trước khi g&oacute;i h&agrave;ng giao cho Qu&yacute; kh&aacute;ch.<br />- H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn.<br />- Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc, nhận h&agrave;ng trả tiền.</p><p>HỖ TRỢ ĐỔI TRẢ THEO QUY ĐỊNH SHOPEE<br />Do m&agrave;n h&igrave;nh v&agrave; điều kiện &aacute;nh s&aacute;ng kh&aacute;c nhau, m&agrave;u sắc thực tế của sản phẩm c&oacute; thể ch&ecirc;nh lệch khoảng 1-5% nh&eacute;.<br />Nếu c&ograve;n thắc mắc về sản phẩm, đừng ngần ngại, h&atilde;y nhắn tin cho để được tư vấn ngay nh&eacute;!</p><p>--------------------------------------------------------------------------<br /> #oversize #aothun #tee #teeunisex #unisex #unisexclothing #unisexclothing #unisexstyle<br />#aothun #aothuntaylo #unisex #aothununisex #&aacute;o_thun #aoformrong #aothunformrong #&aacute;o_thun_nam_nữ #&aacute;o_thun_form_rộng #&aacute;o_form_rộng #&aacute;o_thun_tay_lỡ #&aacute;o_tay_lỡ #&aacute;o_thun_unisex #xưởng_&aacute;o_thun #&aacute;o</p>',
      },
      {
        images: [
          '05f090b8-736e-4100-b4f4-7a09f48e718a.jpg',
          '594a2d08-04f4-4902-873f-e9ba865bc497.jpg',
          '0f906616-bc7f-4661-9bbe-5570b5d902b7.jpg',
          'e129d0b1-8a45-463a-a668-d619461ae984.jpg',
          '780a9d1a-74e9-4d8c-bbae-ed3d5eca8b97.jpg',
          '986f2f5b-23cc-498f-9adb-9d07e6923eb3.jpg',
          'e383805f-e875-4398-800d-ae07f2d2e8ce.jpg',
          'c3df0eba-05f8-4ba8-9ef4-f67a28fa4b81.jpg',
          '7cefd5f0-6ded-443d-821b-4909592e6490.jpg',
        ],
        price: 53000,
        rating: 5,
        price_before_discount: 106000,
        quantity: 16746,
        sold: 2255,
        view: 973,
        name: 'Áo thun nam nữ tay lỡ YINXX, áo phông nam nữ form rộng A304',
        category: '65684d88787ee9ec575a315a',
        image: 'b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        description:
          '<p>&nbsp;</p><p>&Aacute;o thun nam nữ tay lỡ YINXX, &aacute;o ph&ocirc;ng nam nữ form rộng A304<br />TH&Ocirc;NG TIN SẢN PHẨM: <br />- T&ecirc;n sản phẩm: &Aacute;o thun tay lỡ form rộng UNISEX<br />- Xuất sứ: Việt Nam <br />- Chất liệu: cotton D&Agrave;Y MỀM MỊN M&Aacute;T kh&ocirc;ng x&ugrave; l&ocirc;ng. Form &aacute;o rộng chuẩn TAY LỠ UNISEX cực đẹp.<br />- Size &aacute;o: FREESIZE form rộng<br />- Chiều d&agrave;i &aacute;o: 72cm<br />- Chiều rộng &aacute;o: 55cm<br />- Chiều d&agrave;i tay &aacute;o: 20cm<br />- Từ 50-65KG (mặc rộng thoải m&aacute;i) <br />- Từ 66-75KG (mặc rộng vừa).</p><p>Ng&agrave;y n&agrave;y, &aacute;o thun tay lỡ Unisex form rộng đang ng&agrave;y c&agrave;ng trở n&ecirc;n phổ biến v&agrave; đa dạng với c&aacute;c mẫu thiết kế độc đ&aacute;o bắt mắt, thậm ch&iacute; c&ograve;n bắt kịp nhiều tr&agrave;o lưu xu hướng đặc biệt l&agrave; phong c&aacute;ch H&agrave;n Quốc. <br />Do đ&oacute;, việc t&igrave;m hiểu tất tần tật về &aacute;o thun tay lỡ nam/nữ l&agrave; cần thiết gi&uacute;p bạn lu&ocirc;n cập nhật những mẫu thiết kế mới nhất. Điều n&agrave;y sẽ gi&uacute;p bạn c&oacute; nhiều sự lựa chọn mới mẻ v&agrave; đa dạng phong c&aacute;ch thời trang của bạn.</p><p>Vậy &aacute;o thun tay lỡ l&agrave; g&igrave;?<br />- L&agrave; loại &aacute;o ph&ocirc;ng c&oacute; chiều d&agrave;i tay &aacute;o d&agrave;i hơn so với &aacute;o thun nam ngắn tay, thường l&agrave; d&agrave;i đến khuỷu tay hoặc qua khuỷu tay. <br />- Kiểu &aacute;o ph&ocirc;ng tay lỡ n&agrave;y thường xuất hiện ở những thiết kế &aacute;o thun unisex oversize rộng r&atilde;i, tho&aacute;ng m&aacute;t. <br />- Loại &aacute;o n&agrave;y &ldquo;kh&oacute; t&iacute;nh&rdquo; hơn &aacute;o thun nam nữ ngắn tay, nếu biết c&aacute;ch mix đồ, bạn sẽ trở n&ecirc;n thật c&aacute; t&iacute;nh với phong c&aacute;ch thời trang đậm chất H&agrave;n Quốc, nhưng nếu phối đồ kh&ocirc;ng tốt tr&ocirc;ng bạn như đang &ldquo;lọt thỏm&rdquo; trong chiếc &aacute;o thun tay lỡ.</p><p>Đặc điểm nổi bật của &aacute;o thun tay lỡ Unisex form rộng:<br />- L&agrave; item kh&ocirc;ng thể thiếu trong tủ đồ v&igrave; sự thoải m&aacute;i, dễ chịu, lại rất dễ phối đồ.<br />- &Aacute;o thun unisex th&iacute;ch hợp với cả nam v&agrave; nữ. Mặc l&agrave;m &aacute;o thun cặp, &aacute;o nh&oacute;m rất ph&ugrave; hợp.<br />- &Aacute;o thun form rộng dễ d&agrave;ng phối đồ, thời trang phong c&aacute;ch H&agrave;n Quốc.</p><p>+ Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT LIỆU cũng như H&Igrave;NH ẢNH (đ&uacute;ng với những g&igrave; được n&ecirc;u bật trong phần m&ocirc; tả sản phẩm).<br />+ Gi&aacute; th&agrave;nh thấp nhất thị trường v&agrave; được bảo h&agrave;nh theo quy định với từng sản phẩm, được đổi trả h&agrave;ng lỗi trong v&ograve;ng 14 ng&agrave;y kể từ khi mua h&agrave;ng.</p><p>#&aacute;o_thun_nam #&aacute;o_thun #&aacute;o_ph&ocirc;ng #&aacute;o_ph&ocirc;ng_nữ #&aacute;o_thun_nữ #&aacute;o_ph&ocirc;ng_nam #&aacute;o_thun_tay_lỡ #&aacute;o_thun_unisex #&aacute;o_ph&ocirc;ng_rộng #&aacute;o_form_rộng #&aacute;o_thun_form_rộng #&aacute;o_ph&ocirc;ng_tay_lỡ #ao_thun #&aacute;o_thun_nữ_form_rộng #set_đồ_nữ #&aacute;o_ph&ocirc;ng_đẹp #&aacute;o_ph&ocirc;ng_nam_đẹp #ao_phong</p><p>&nbsp;</p>',
      },
      {
        images: [
          'b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
          '2df345c5-4381-4863-9510-17f44572ad45.jpg',
          '00b21c79-e1a0-45f0-9152-6881e644b15b.jpg',
          'dc35e2ed-0407-4f27-9b97-bad9bc785deb.jpg',
          'f1de05b8-60c5-4940-be9f-b6cc98d34061.jpg',
          '4788c7fd-d728-4f47-8000-e858d6466384.jpg',
          'b4614934-0164-4845-bf14-d19de6c36835.jpg',
          '1ec5e192-c2fc-4411-b170-4aa2b1635ddb.jpg',
          'a751a941-7d74-4f2a-a238-c806b055ed11.jpg',
        ],
        price: 49000,
        rating: 5,
        price_before_discount: 70000,
        quantity: 6797,
        sold: 21,
        view: 775,
        name: 'Mẫu Mới Khuyến Mãi Sốc 3 Ngày ⚡ Áo Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE',
        category: '65684d88787ee9ec575a315a',
        image: 'b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        description:
          '<p><br />&Aacute;o Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE</p><p>🍄 Form &aacute;o free size 75kg đổ lại t&ugrave;y chiều cao, ph&ugrave; hợp 80-90% sở th&iacute;ch c&aacute;c cậu, mặc l&ecirc;n l&agrave; vừa đẹp như h&igrave;nh shop chụp;</p><p>👉 Xuất sứ: Việt Nam, m&igrave;nh l&agrave; người Việt Nam n&ecirc;n d&ugrave;ng h&agrave;ng Việt nh&eacute; c&aacute;c cậu !</p><p>🍓 Chất Liệu : Cotton</p><p>🌺 Phom d&aacute;ng: Thể Thao - Năng Động - Trẻ Trung</p><p>🎯🎯 Ưu điểm</p><p>🥭 Thấm h&uacute;t mồ h&ocirc;i tốt, Co gi&atilde;n, đ&agrave;n hồi tốt</p><p>🍏 Bền m&agrave;u, ko bạc,ko phai m&agrave;u, chất cotton co gi&atilde;n 4 chiều mền mịn</p><p>🥝 🍓 Shop Cập Nhật Mẩu Mới Li&ecirc;n Tục 🍓 🥝</p><p>🌽🌽 Hướng dẫn bảo quản</p><p>🍉 Giặt m&aacute;y với chu kỳ trung b&igrave;nh v&agrave; v&ograve;ng quay ngắn, Giặt với nhiệt độ tối đa 30 độ C</p><p>🍌 Sấy ở nhiệt độ thường, L&agrave; ủi ở nhiệt độ thấp th&ocirc;i c&aacute;c cậu nh&eacute; <br />.......................................................................</p><p>✈ Form rộng Unisex cho cả nam v&agrave; nữ</p><p>🌽🌽 CAM KẾT CHO C&Aacute;C CẬU</p><p>🌸 Đảm bảo vải chất lượng Vải</p><p>🌸 &Aacute;o được kiểm tra kĩ c&agrave;ng, cẩn thận trước khi g&oacute;i h&agrave;ng</p><p>🌸 H&agrave;ng c&oacute; sẵn, giao h&agrave;ng ngay khi nhận được đơn</p><p>🌸 Ho&agrave;n tiền ngay nếu sản phẩm kh&ocirc;ng giống M&ocirc; Tả</p><p>🍄 🍄 Thu Hộ (COD) To&agrave;n Quốc</p><p>🍓 Unisex Store AZ Đẹp Từ A đến Z</p><p>🏠 Địa chỉ: 507/69/9 Hương lộ 3, Phường B&igrave;nh Hưng H&ograve;a, Quận B&igrave;nh T&acirc;n, Th&agrave;nh phố Hồ Ch&iacute; Minh<br /> 📞Hotline: 09788528897<br />🍓 Shopee: Unisex Store AZ<br /> Fanpage: https://www.facebook.com/Unsexi-Store-AZ-107278881411788</p><p>#aothungiare #aothununisex #aothunteen #aothunnu #aothundep #aothunchat #aothunnam #aothunsayhappy #aothundanang #aothuntron # aothun4chieu #aothunthai #aothuntaylo #aothuntaydai #aothunsoc #aothunnam #aothunsayhappy#aothuntron # aothun4chieu #aothunthai #aothuntaylo #aothuntaydai #aothunsoc # aothungiare55k #aothunchoker # aothun55k # aothun2nd</p>',
      },
      {
        images: [
          '305f556f-31b3-45cc-b977-0448b1f82344.jpg',
          'e2ef5d37-514d-43f0-aca0-b61c4dcd42de.jpg',
          'b92d9525-5eab-4923-9e58-96da4557d765.jpg',
          '09c5e470-27eb-40bf-a768-f358a004b94e.jpg',
        ],
        price: 64000,
        rating: 5,
        price_before_discount: 90000,
        quantity: 27995,
        sold: 5,
        view: 275,
        name: 'Thun cotton , cực kỳ thoáng mát - Size: XS - S - M - L - XL - XXL - XXXL',
        category: '65684d88787ee9ec575a315a',
        image: '305f556f-31b3-45cc-b977-0448b1f82344.jpg',
        description:
          '<p>🌻Th&ocirc;ng số &aacute;o : <br />- Chất liệu: thun cotton , cực kỳ tho&aacute;ng m&aacute;t<br />- Size: S - M - L - XL - XXL - XXXL - XXXXL<br />Size S: C&acirc;n nặng ph&ugrave; hợp 34 đến 44kg - Chiều cao ph&ugrave; hợp 1m42 đến 1m52<br />Size M: C&acirc;n nặng ph&ugrave; hợp 44 đến 52kg - Chiều cao ph&ugrave; hợp 1m52 đến 1m62<br />Size L: C&acirc;n nặng ph&ugrave; hợp 52 đến 60kg - Chiều cao ph&ugrave; hợp 1m62 đến 1m72<br />Size XL: C&acirc;n nặng ph&ugrave; hợp 60 đến 68kg - Chiều cao ph&ugrave; hợp 1m65 đến 1m75<br />Size XXL: C&acirc;n nặng ph&ugrave; hợp 68 đến 75kg - Chiều cao ph&ugrave; hợp 1m68 đến 1m82<br />Size XXXL: C&acirc;n nặng ph&ugrave; hợp 71 đến 80kg - Chiều cao ph&ugrave; hợp 1m73 đến 1m84<br />Size XXXXL: C&acirc;n nặng ph&ugrave; hợp 80 đến 88kg - Chiều cao ph&ugrave; hợp 1m80 đến 1m90<br />- Mức thấm h&uacute;t mồ h&ocirc;i: 0.3 kg / sản phẩm<br />- C&acirc;n nặng sản phẩm: 250 gr</p><p>🌻 Cam kết<br />- Sản phẩm như h&igrave;nh<br />- M&agrave;u sắc như h&igrave;nh<br />- Chất liệu, k&iacute;ch thước, c&acirc;n nặng như m&ocirc; tả</p><p>🌻 Lưu &yacute;:<br />- Giao h&agrave;ng COD to&agrave;n quốc nhanh ch&oacute;ng, tận nh&agrave;, tối đa 4 ng&agrave;y<br />- Ri&ecirc;ng khu vực HCM Ship tận giường chỉ trong 24h<br />- Đổi trả h&agrave;ng + ho&agrave;n tiền 100% trong 3 ng&agrave;y sau khi mua nếu:<br /> &diams;️ Sản phẩm kh&ocirc;ng giống trong ảnh<br /> &diams;️ M&agrave;u sắc kh&ocirc;ng giống trong ảnh<br /> &diams;️ Chất lượng kh&ocirc;ng hợp &yacute; kh&aacute;ch h&agrave;ng</p><p>➡️Mọi thắc mắc xin Qu&yacute; kh&aacute;ch vui l&ograve;ng inbox trực tiếp với shop để được giải quyết ạ !! Xin cảm ơn !!</p><p>#AothunUnisex #Aothunnam #AothunNamdep #AothunHanQuoc #Aothunhan #aothunchat #aothuncap #aothunindep #aothundethuong #aothunfreesize #aothuntaylo #aothundep #aothungiasi #aothunhot #aothunsigiare #aothunsi #aothuntaylo #aothunre</p>',
      },
      {
        images: [
          'd178114b-aaa8-4dae-adb6-8a92ba92bb13.jpg',
          'a57ca1fd-010a-48e1-b505-a5ebff6e3bd8.jpg',
          'b5a229c7-a93b-4344-85f4-81e0ba474137.jpg',
          '57c3e5f5-df0d-47e5-9a12-f95f1d3a8798.jpg',
          '7f4be47f-4aa5-4441-9f34-515f33f7bcca.jpg',
          'd3b06865-3616-4ab0-af50-c62b26a145c5.jpg',
          'a445084b-7294-4440-9eb5-c63281350899.jpg',
          '424fd522-361d-40d1-8bd1-250c4e707382.jpg',
          'f135b741-b82a-4cab-820b-43da88a72c45.jpg',
        ],
        price: 54000,
        rating: 4.999,
        price_before_discount: 60000,
        quantity: 799914,
        sold: 86,
        view: 261,
        name: 'Áo Thun Trơn Đen-Trắng Form Chuẩn Tay Ngắn, Chất COTTON Cao Cấp, AT09.1',
        category: '65684d88787ee9ec575a315a',
        image: 'd178114b-aaa8-4dae-adb6-8a92ba92bb13.jpg',
        description:
          '<p>&Aacute;o Thun Trơn Nam Nữ Cổ Tr&ograve;n Nhiều M&agrave;u, Nhiều Size, &Aacute;o Thun Cotton Chất Liệu Tốt, Kh&aacute;ch n&ecirc;n mua h&agrave;ng tr&ecirc;n,<br />&Aacute;o Thun Trơn Nhiều M&agrave;u Nhiều Size Loại Tốt Gi&aacute; Rẻ, ph&ugrave; hợp cho cả nam v&agrave; nữ.<br />Lưu &Yacute; : Số k&yacute; Shop đưa ra để tham khảo, c&ograve;n t&ugrave;y thuộc v&agrave;o c&aacute;ch mặc v&agrave; chiều cao của từng người.<br />+ Size M: d&agrave;i 63cm, rộng 45cm ~45kg. <br />+ Size L: d&agrave;i 67cm, rộng 47cm ~55kg. <br />+ Size XL: d&agrave;i 69cm, rộng 51cm ~65kg. <br />+ Size 2XL: d&agrave;i 71cm, rộng 53cm ~75kg. <br />+ Size 3XL: d&agrave;i 73cm, rộng 55cm ~85kg.<br />C&aacute;c bạn muốn mặc vừa th&igrave; lấy size như shop đưa ra, c&ograve;n muốn mặc rộng th&igrave; nhảy l&ecirc;n 1 size.<br />&Aacute;o Thun Trơn c&oacute; c&aacute;c điểm nổi bật<br />-Thun Cotton 65/35.<br />-Kh&ocirc;ng ra m&agrave;u, kh&ocirc;ng bai nh&atilde;o, kh&ocirc;ng chảy xệ.<br />-Kh&ocirc;ng x&ugrave; l&ocirc;ng. <br />-Vải M&aacute;t, mịn. <br />-Bo cổ l&agrave; vải bo dệt.<br />-Cổ Chạy d&acirc;y xương c&aacute; VNXK (h&agrave;ng gi&aacute; rẻ sẽ k0 c&oacute;)<br />Kh&aacute;ch muốn mua nhiều m&agrave;u nhiều size v&agrave; nhiều m&agrave;u v&agrave;o 1 đơn th&igrave; khi chọn sản phẩm th&igrave; bấm th&ecirc;m v&agrave;o giỏ h&agrave;ng, khi đ&atilde; chọn xong h&atilde;y bấm thanh to&aacute;n<br />-C&aacute;c bạn c&oacute; thể tham khảo th&ecirc;m &aacute;o trơn cotton 75% của shop, d&agrave;y hơn, nhiều chất cotton hơn, mặc m&aacute;t hơn nh&eacute;.<br />- &Aacute;o thun trơn đơn giản chỉ l&agrave; chiếc &aacute;o may bằng vải thun m&agrave;u đơn sắc, kh&ocirc;ng in hay th&ecirc;u bất cứ thứ g&igrave;.<br />- &Aacute;o thun trơn cổ tr&ograve;n form su&ocirc;ng sử dụng chung cho cả nam v&agrave; nữ.<br />- Chất liệu vải may &aacute;o thun trơn sử dụng phổ biến hiện nay l&agrave; vải 65/35.<br />- &Aacute;o thun trơn gi&aacute; th&agrave;nh rất rẻ, ph&ugrave; hợp sử dụng l&agrave;m &aacute;o thời trang hay mua cho hội nh&oacute;m.<br />- &Aacute;o thun trơn c&oacute; thể dễ d&agrave;ng kết hợp với những quần &aacute;o thời trang kh&aacute;c như: quần thun, kaki, jeans, ch&acirc;n v&aacute;y...<br />- C&oacute; thể n&oacute;i &aacute;o thun trơn l&agrave; phong c&aacute;ch thời trang kh&ocirc;ng ph&acirc;n biệt tuổi t&aacute;c, ai cũng c&oacute; thể mặc được, ch&iacute;nh v&igrave; vậy m&agrave; &aacute;o thun trơn được đ&ocirc;ng đảo giới trẻ y&ecirc;u th&iacute;ch, sử dụng để đi chơi c&ugrave;ng bạn b&egrave;.<br />- Những hội nh&oacute;m chơi th&acirc;n với nhau muốn c&oacute; một chiếc &aacute;o nh&oacute;m thiết kế đơn giản, kh&ocirc;ng cần ph&ocirc; trương th&igrave; &aacute;o thun trơn l&agrave; sự lựa chọn tuyệt với, với gi&aacute; th&agrave;nh chỉ bằng một nữa so với &aacute;o nh&oacute;m th&ocirc;ng thường.<br />- &Aacute;o thun trơn c&ograve;n được c&aacute;c bạn chọn l&agrave;m &aacute;o đồng phục lớp, &aacute;o nh&oacute;m, đồng phục biểu diễn văn nghệ, team building...Tạo n&ecirc;n phong c&aacute;ch thời trang c&aacute; t&iacute;nh kh&ocirc;ng sợ đụng h&agrave;ng.<br />* cung cấp sỉ c&aacute;c mặt h&agrave;ng &aacute;o thun , &aacute;o kho&aacute;c,....<br />#aothuntron #aothungiasi #aotron #aonhom #aolop #aodoI</p>',
      },
      {
        images: [
          'c49a6a50-b8a2-421b-86a6-fc73f438d9a2.jpg',
          'e444abbd-db41-42a6-84b0-009355f6f2de.jpg',
          'bc7e2744-6a2b-4191-9fb4-6db3a89646ba.jpg',
          '923d34ca-b36f-46f5-8658-82b5036f3c0e.jpg',
          '80473bdb-8457-4e17-a6eb-2906d5980f0b.jpg',
          'c205a063-3f6a-4330-a15a-65fd1af4a8e2.jpg',
          'f8506b5b-5d61-4967-a9ce-7fc740a37265.jpg',
          'c533dcea-cd2d-42cd-81eb-045135465a68.jpg',
          '21fe3f89-1e64-4605-ba00-08d026a47b43.jpg',
        ],
        price: 98000,
        rating: 4.95,
        price_before_discount: 196000,
        quantity: 8201,
        sold: 4250,
        view: 542,
        name: 'Áo thun nam mã TT5 💖FREESHIP💖 Áo tay lỡ nam form rộng thể thao cộc tay đẹp mùa hè ngắn tay tập gym vải cotton',
        category: '65684d88787ee9ec575a315a',
        image: 'c49a6a50-b8a2-421b-86a6-fc73f438d9a2.jpg',
        description:
          '<p>💖🌺&Aacute;o thun nam m&atilde; TT5 💖FREESHIP💖 &Aacute;o tay lỡ nam form rộng thể thao cộc tay đẹp h&egrave; thu ngắn tay tập gym co gi&atilde;n vải cotton</p><p>ĐẶC ĐIỂM SẢN PHẨM: <br />✔️ Trẻ trung năng động , c&aacute; t&iacute;nh<br />✔️&Aacute;o thun nam tay lỡ Họa Tiết Cotton trơn co gi&atilde;n thoải m&aacute;i, năng động<br />✔️ Phong c&aacute;ch: &Aacute;o thun nam cotton tay lỡ Form rộng thiết kế thời trang, hiện đại<br />✔️ Thiết kế trang nh&atilde;, c&oacute; thể sử dụng đi trong nhiều bối cảnh kh&aacute;c nhau<br />✔️ Đường May kỹ, tỉ mỉ từng chi tiết giúp chiếc &aacute;o thêm sang trọng.<br />✔️ Kiểu dáng thể thao, năng động, hiện đại phù hợp mặc: đi chơi, tập gym, chơi b&oacute;ng rổ,....<br />✔️ Chất liệu: Vải mềm mại, d&agrave;y dặn &amp; co gi&atilde;n, ph&ugrave; hợp thời tiết m&ugrave;a h&egrave; n&oacute;ng nực<br />✔️ Xuất Xứ :Việt Nam, nguồn gốc r&otilde; r&agrave;ng</p><p>M&Ocirc; TẢ SẢN PHẨM:<br />✔️ GIẢM NGAY 50-&gt;70 % gi&aacute; trị sản phẩm duy nhất trong th&aacute;ng <br />✔️ CAM KẾT sản phẩm giống H&Igrave;NH <br />✔️ M&agrave;u sắc sản phẩm v&ocirc; c&ugrave;ng đa dạng, nổi bật. <br />✔️ Gồm những gam m&agrave;u tươi mới gi&uacute;p bạn dễ d&agrave;ng phối nhiều loại trang phục kh&aacute;c nhau. <br />✔️ Tuy nhi&ecirc;n cũng t&ugrave;y v&agrave;o m&agrave;u sắc của &Aacute;o v&agrave; trang phục m&agrave; bạn phối sao cho h&agrave;i h&ograve;a nh&eacute;!<br />✔️ Từng đường may tinh tế, chỉn chu, m&agrave;u sắc đa dạng, tươi m&aacute;t chắc chắn sẽ l&agrave;m vừa l&ograve;ng những ch&agrave;ng trai kh&oacute; t&iacute;nh nhất.<br />✔️ Bạn c&oacute; diện Quần Thể Thao đi gym, chạy bộ, tập thể dục, b&oacute;ng rổ, dạo phố, dạo biển , mặc tại nh&agrave;,...cực kỳ thời trang v&agrave; tiện dụng v&agrave; v&ocirc; c&ugrave;ng thoải m&aacute;i !<br /> <br />* CAM KẾT<br />SHOP đảm bảo b&aacute;n h&agrave;ng giống h&igrave;nh 100%<br />- Tất cả c&aacute;c sản phẩm được kiểm tra kỹ<br />- Giao h&agrave;ng v&agrave; thanh to&aacute;n tại nh&agrave;<br />- Lu&ocirc;n cam kết chất lượng<br />* Cảm ơn đ&atilde; ủng hộ SHOP!<br />Ch&uacute;c c&aacute;c bạn mua sắm vui vẻ ^.^</p><p>#&Aacute;ocottonnam #&Aacute;othunnamcotton #&Aacute;o #Cotton #&Aacute;o_thun_nam_cotton #&Aacute;o_cotton_nam #&Aacute;o_cotton #&Aacute;o_cotton_co_gi&atilde;n #&Aacute;o_cotton_đẹp #&Aacute;o_thun_cotton_đẹp #&Aacute;ocổtr&ograve;n #&Aacute;o_cổ_tr&ograve;n #&Aacute;o_form_rộng#&Aacute;o_tay_lỡ_nam #&Aacute;o_cộc_tay_nam #&Aacute;o_tay_lỡ #&Aacute;o_cộc_tay #&Aacute;otaylỡnam #&Aacute;ocộctaynam #&Aacute;otaylỡ #&Aacute;ocộctay #&Aacute;o_tập_gym #&Aacute;o-tập-gym #&Aacute;otậpgym#&Aacute;o-ba_lỗ #&Aacute;o_ba_lỗ #&Aacute;o_thun_ba_lỗ #&Aacute;o-thun-ba-lỗ#&Aacute;o_3_lỗ #&Aacute;o-3-lỗ #&Aacute;o_Tank_Top #&Aacute;o-Tank-Top#&Aacute;o-rộng-n&aacute;ch#&Aacute;o_rộng_n&aacute;ch #&Aacute;o_kho&eacute;t_n&aacute;ch #&Aacute;o_co_gi&atilde;n #&Aacute;o_balo_nam #&Aacute;o_3_lỗ_nam #&Aacute;o-3-lỗ-nam #&Aacute;o-ba-lỗ-nam-&Aacute;o-Tank-Top-nam #&Aacute;obalỗnam #&Aacute;o3lỗnam #&Aacute;orộngn&aacute;chnam #&Aacute;om&ugrave;ah&egrave;nam#&Aacute;oh&egrave;nam#&Aacute;othunm&ugrave;ah&egrave;#aothunnambalo #aobalonam#Ao3lonam #Aorongnach #aorongnachnam#&Aacute;o-thun-nam- đẹp #&Aacute;o-thun-nam-họa-tiết #&Aacute;o-nam-đẹp #&Aacute;o-nam #&Aacute;o_thun_nam_đẹp #&Aacute;o_thun_nam #&Aacute;o_nam #đi_chơi #H&agrave;n_quốc #Phong_c&aacute;ch #trẻ_chung #Năng_động #&Aacute;o_nam_đẹp #&Aacute;o_thun_tay_d&agrave;i_nam #tay_d&agrave;i #aonamdep #aothuntaydainam #aothunnam #aothun #aothuntaydaiformrong #aothuncatinh #dichoi #&Aacute;othunnamđẹp #&Aacute;othuntayd&agrave;inam #&aacute;onam #&Aacute;othunnamhọatiết #&Aacute;othum&ugrave;ađ&ocirc;ngnam #&Aacute;othum&ugrave;athuđ&ocirc;ngnam #&Aacute;othunnamthờitrang <br />#&aacute;othuntayngắn#&aacute;othuncottonnam#aothuntayngan#aothunngantay#&aacute;oph&ocirc;ng#&aacute;oph&ocirc;ngnam#&aacute;oph&ocirc;ngtrơnnam#aophong#&aacute;oph&ocirc;ngngắntay#a</p>',
      },
      {
        images: [
          'cd0a26e1-3792-458f-914c-8692dbb26b7a.jpg',
          '4a52af18-bd03-461b-8526-84219686541c.jpg',
          '95bbbef7-90f4-4425-acc9-7c728eb64338.jpg',
          'e7701a25-56a4-4db4-805f-30b07fe7b3b7.jpg',
          'ebde73c1-209f-44af-bde2-5c1d7e2b4c45.jpg',
          '87d44cc1-3dbe-4e55-bfa1-35b45360193a.jpg',
          '10d30b86-6634-4583-9d57-a5d30026ac69.jpg',
        ],
        price: 139000,
        rating: 4.785,
        price_before_discount: 240000,
        quantity: 1598,
        sold: 36,
        view: 182,
        name: 'Áo thun nam Havis cổ bẻ thun cá sấu 76 logo dập nổi cao cấp AXK038',
        category: '65684d88787ee9ec575a315a',
        image: 'cd0a26e1-3792-458f-914c-8692dbb26b7a.jpg',
        description:
          '<p>★ C&aacute;ch Freeship mới 40k từ Shopee<br />https://shopee.vn/m/ma-giam-gia?smtt=201.21466</p><p>◤H&atilde;y truy cập ngay v&agrave;o gian h&agrave;ng Thời Trang Havis của ch&uacute;ng t&ocirc;i để xem ngay hơn 100 mẫu thời trang nam c&aacute;c loại.</p><p>📌 &Aacute;o thun nam c&aacute; sấu Havis 76 với thiết kế logo dập nổi, thun c&aacute; sấu d&agrave;y dặn 2 da cực k&igrave; cao cấp<br />📌 Chất liệu thun c&aacute; sấu đ&atilde; qu&aacute; phổ biến với người ti&ecirc;u d&ugrave;ng Việt Nam với ti&ecirc;u ch&iacute; bao bền, bao đẹp<br />📌 H&agrave;ng xưởng may bỏ shop n&ecirc;n chất lượng đảm bảo qua c&aacute;c kh&acirc;u kiểm tra khắt khe<br />📌 Chất liệu thun co gi&atilde;n, xớ vải mịn, lại thấm h&uacute;t tốt cho bạn hoạt động cả ng&agrave;y d&agrave;i m&agrave; kh&ocirc;ng thấy kh&oacute; chịu<br />📌 &Aacute;o c&oacute; nhiều m&agrave;u tha hồ cho c&aacute;c bạn lựa chọn. M&agrave;u sắc đ&atilde; được nh&agrave; thiết kế v&agrave; sản xuất nghi&ecirc;n cứu gi&uacute;p người mặc dễ d&agrave;ng phối đồ với quần short, quần t&acirc;y jeans,...<br />📌 Lấy ngay 2 &Aacute;o thun nam cổ bẻ Havis 76 cho v&agrave;o tủ đồ của c&aacute;c ch&agrave;ng trai vừa đẹp lại vừa đượchỗ trợ ph&iacute; ship nh&aacute;</p><p>◤TH&Ocirc;NG TIN CHI TIẾT<br />- Chất liệu: Thun c&aacute; sấu<br />- M&agrave;u sắc: C&oacute; 4 m&agrave;u X&aacute;m Trắng, Đen, Xanh Đen, Đỏ<br />- Size: M (50-57Kg), L (58-65Kg) , XL (66-72kg), XXL (73-80Kg)<br />- Xuất xứ: Việt Nam</p><p>◤Cam kết của Shop<br />- 100% H&igrave;nh ảnh l&agrave; chụp thật<br />- Giao h&agrave;ng đ&uacute;ng mẫu m&atilde;, size m&agrave;u kh&aacute;ch đặt.</p><p>★ C&Aacute;CH BẢO QUẢN &Aacute;O</p><p>Bạn muốn chiếc &aacute;o được sử dụng l&acirc;u d&agrave;i v&agrave; lu&ocirc;n tr&ocirc;ng như mới chứ? H&atilde;y l&agrave;m theo những mẹo dưới đ&acirc;y:</p><p>- Treo &aacute;o tr&ecirc;n mắc: Để giữ &aacute;o được giữ d&aacute;ng v&agrave; kh&ocirc;ng tạo n&ecirc;n c&aacute;c nếp gấp, bạn n&ecirc;n treo &aacute;o bằng những chiếc m&oacute;c rộng.</p><p>- Tr&aacute;nh tiếp x&uacute;c với nguồn nhiệt trực tiếp: Nhiệt độ qu&aacute; cao sẽ dễ l&agrave;m &aacute;o bị kh&ocirc;, nổ m&agrave;u. Khi tiếp x&uacute;c qu&aacute; l&acirc;u dưới nguồn nhiệt cao &aacute;o sẽ dễ bị hỏng</p><p>- Trước hết, bạn n&ecirc;n giặt bằng nước lạnh bởi như vậy sẽ gi&uacute;p giữ độ bền cho chất liệu cũng như kiểu d&aacute;ng trang phục. Hơn nữa, hầu hết c&aacute;c chất tẩy rửa đều c&oacute; t&aacute;c dụng khi được sử dụng với nước lạnh. C&oacute; nhiều lầm tưởng về chuyện sử dụng nước n&oacute;ng để giặt sẽ gi&uacute;p quần &aacute;o mau sạch hơn, nhưng thực chất nước n&oacute;ng sẽ l&agrave;m giảm độ bền của chất liệu vải cũng như khiến ch&uacute;ng nhanh phai m&agrave;u hơn....</p><p>Ngo&agrave;i ra, cũng phải ch&uacute; &yacute; đến số lượng bột giặt, dầu xả cần d&ugrave;ng v&agrave; nếu giặt m&aacute;y th&igrave; tr&aacute;nh ch&egrave;n qu&aacute; nhiều đồ một l&uacute;c..<br />🔖 Hastag <br />#aothun #aothunnam #aothunnamtron #aothuntayngan #aothundep</p>',
      },
      {
        images: [
          '960a6e64-c6eb-491f-a9cc-1a06acffdeef.jpg',
          '2966ecc3-b0b9-44b2-8fb8-684ea44f7816.jpg',
          '4c55841e-3e28-4252-a0c2-85aabb00ac69.jpg',
          'b9776bb5-b9b5-4005-9a98-e97ffccba82f.jpg',
          'ca89b1ee-d12a-4e0a-9175-5b1e45a4ebba.jpg',
        ],
        price: 69000,
        rating: 4.985,
        price_before_discount: 91000,
        quantity: 29150,
        sold: 16501,
        view: 1449,
        name: 'Áo thun nam thể thao cotton lạnh cao cấp tay ngắn Xanh AD03 Phong Cảnh Mẫu Trend Trẻ Trung Cá Tính (44-70KG)',
        category: '65684d88787ee9ec575a315a',
        image: '960a6e64-c6eb-491f-a9cc-1a06acffdeef.jpg',
        description:
          '<p>🔰 CH&Iacute;NH S&Aacute;CH: <br />🍎🍎L&agrave; kh&aacute;ch h&agrave;ng bạn sẽ được: <br />👉 FREESHIP tối đa 30K cho tất cả c&aacute;c đơn h&agrave;ng. 150k tphcm v&agrave; 250 to&agrave;n quốc <br />👉 Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh. <br />👉 Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả. <br />👉 Hỗ trợ kh&aacute;ch đổi trả khi lỡ đặt nhầm size nhầm mẫu<br />👉 Cam kết bảo h&agrave;nh 7 ng&agrave;y về size mẫu<br />🍎🍎 Với hơn 5 năm trong ng&agrave;nh thời trang v&agrave; đ&atilde; phục vụ tr&ecirc;n 20000 kh&aacute;ch h&agrave;ng to&agrave;n quốc Teen Group lu&ocirc;n Cố <br />gắng mang lại trải nghiệm tốt nhất cho kh&aacute;ch h&agrave;ng <br />💧💧C&aacute;ch lấy SIZE: &Aacute;O ONE SIZE 44-70KG<br />💧💧Bạn kh&ocirc;ng nh&igrave;n lầm đ&acirc;u!<br />💧💧&Aacute;o thun nam tay lỡ MẪU MỚI TOANH vừa ra mắt đ&oacute;!!<br />💧💧Bắt kịp trend #aothunnamtaylo DẠ HẠC m&agrave;u ĐEN bắt mắt v&agrave; độc lạ <br />💧💧#aothunnam chất thun lạnh vừa tho&aacute;ng m&aacute;t lại co gi&atilde;n tốt ph&ugrave; hợp với rất nhiều trang phục<br />******************Th&ocirc;ng tin sản phẩm*****************************<br />💧💧&Aacute;o thun nam thể thao cotton lạnh cao cấp tay ngắn Xanh AD03 Phong Cảnh (44-70KG)<br />💧💧Chất liệu: Thun lạnh<br />👉Chiều d&agrave;i &aacute;o: 65cm (Length: 65cm)<br />👉Chiều ngang vai &aacute;o: 46cm (Width: 46cm)<br />👉Chiều d&agrave;i tay &aacute;o: 23cm-25cm (Length, sleeve of T-shirt: 23cm - 25cm)<br />👉Size: t&ugrave;y sản phẩm freesize hoặc c&oacute; size, cao &lt;1m70 sẽ vừa (Height &lt;1m70)<br />------------------chat with me if you wanna have a lot of product&rsquo;s information-----------------<br />💧💧Cam kết: vải mềm mịn, kh&ocirc;ng x&ugrave; v&agrave; c&oacute; thể giặc m&aacute;y.<br />💧💧Xử l&iacute; đổi trả: trong 24h kể từ khi nhắn tin khiếu nại.<br />***************Ưu đ&atilde;i***************************<br />🍎🍎Bấm theo d&otilde;i shop để nhận được th&ocirc;ng b&aacute;o chương tr&igrave;nh sale sinh nhật shop, sale black Friday v&agrave; rất nhiều chương tr&igrave;nh ưu đ&atilde;i kh&aacute;c.<br />🍎🍎Tham gia đ&aacute;nh gi&aacute; sản phẩm 5 sao v&agrave; nhắn tin cho shop để nhận được voucher giảm gi&aacute; cho đơn h&agrave;ng tiếp theo của bạn.<br />***************Lời cảm ơn**********************<br />💧💧Đại diện to&agrave;n thể nh&acirc;n vi&ecirc;n của shop Shop Teen Group ch&uacute;ng t&ocirc;i cảm ơn bạn đ&atilde; tin d&ugrave;ng sản phẩm của ch&uacute;ng t&ocirc;i.<br />💧💧Những sai s&oacute;t trong qu&aacute; tr&igrave;nh g&oacute;i h&agrave;ng, vận chuyển h&agrave;ng tới kh&aacute;ch h&agrave;ng, gửi sai sản phẩm, sản phẩm bị lỗi mong qu&iacute; kh&aacute;ch h&agrave;ng th&ocirc;ng cảm v&agrave; nhắn tin với ch&uacute;ng t&ocirc;i để được giải quyết nhanh nhất (nhắn tin qua shopee). Do số lượng cuộc gọi 1 ng&agrave;y nhiều n&ecirc;n ch&uacute;ng t&ocirc;i sẽ kh&ocirc;ng bắt m&aacute;y m&agrave; chỉ giải quyết qua tin nhắn nhằm tranh tr&igrave;nh trạng bỏ s&oacute;t khiếu nại cũng như kh&ocirc;ng kiểm so&aacute;t được c&aacute;ch n&oacute;i chuyện trao đổi của nh&acirc;n vi&ecirc;n nếu gọi điện thoại. Mong qu&iacute; kh&aacute;ch h&agrave;ng th&ocirc;ng cảm v&agrave; hợp t&aacute;c.<br />🍎🍎**************Ch&acirc;n th&agrave;nh cảm ơn************************<br />#aothun #aothunnam #aothuntaylo #aothuntaylofromrong #aothununisex #thunnam #thunnamtaylo #aophong #aophongnam #aothuntrang #aophongtrang #aophongtaylo #aonamtaylo #aothunnam #aophongdep #chudede.0375384835 #&Aacute;o_Kho&aacute;c_Nam<br />#&aacute;othun #&aacute;othunnam #&aacute;othuntaylỡ #&aacute;othuntaylỡfromrộng #&aacute;othununisex #thunnamtaylỡ #&aacute;oph&ocirc;ng<br />#&aacute;o-thun #&aacute;o-thun-nam <br />#teen_group_store</p>',
      },
      {
        images: [
          'c29f5baf-c506-45a8-84db-571c83e0ed2a.jpg',
          '70ed2e25-103a-4c5d-92f5-7100c4e7fa1a.jpg',
          '116ee152-c402-4ab7-b4c0-fd6dba3f3d60.jpg',
          '16d916e2-7cc1-428f-9c5c-55f323ed49d8.jpg',
          'bc9fac7e-5d95-4f99-9826-7142e52c40b0.jpg',
          'c6340a8d-2a87-454a-81b8-5aaafdc2a49f.jpg',
          'c8f368cd-eeea-425c-b3c1-9520c1241d94.jpg',
        ],
        price: 89000,
        rating: 4.6,
        price_before_discount: 150000,
        quantity: 359987,
        sold: 183,
        view: 882,
        name: 'Áo polo nam cao cấp cổ viền, áo thun nam ngắn tay bo viền năng động, Kiểu dáng ôm slimfit',
        category: '65684d88787ee9ec575a315a',
        image: 'c29f5baf-c506-45a8-84db-571c83e0ed2a.jpg',
        description:
          '<p>[HOTTREND 2020] &Aacute;o polo nam cao cấp, &aacute;o thun nam ngắn tay, cổ viền, tay bo viền năng động, may &ocirc;m slimfit<br />Th&ocirc;ng tin sản phẩm:<br />Chất vải: Vải c&aacute; sấu (95% cotton, 5% spandex) - chống nhăn, kh&ocirc;ng x&ugrave;, co gi&atilde;n nhẹ<br />Kiểu d&aacute;ng: D&aacute;ng &ocirc;m<br />Sản xuất tại Việt Nam<br />Hướng dẫn chọn size:<br />Size M: 45 - 52 kg<br />Size L: 53 - 58 kg<br />Size XL: 59 - 65 kg<br />Size 2XL: 65 -75 kg<br />Size 3XL: 75-85 kg <br />(c&aacute;c bạn căn cứ v&agrave;o chiều cao nữa nh&eacute;, nếu b&eacute;o qu&aacute; hay gầy qu&aacute; so với chiều cao th&igrave; c&aacute;c bạn tăng giảm theo size cho ph&ugrave; hợp với form d&aacute;ng cơ thể)<br />Nếu trường hợp c&aacute;c bạn kh&ocirc;ng vừa hoặc &aacute;o c&oacute; bị lỗi do sản xuất, shop sẽ hỗ trợ đổi &aacute;o hoặc ho&agrave;n tiền cho c&aacute;c bạn!</p><p>Hastag:<br />#aopolo #polo #hottrend2020 #thoitrangnam #aothunnam #aophongnam #aocobe #&aacute;o</p>',
      },
      {
        images: [
          'ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
          '04001c71-9d8f-4e68-b9ac-cbb47406f30f.jpg',
          '3142a89e-8301-42c3-9621-1c901e4a097b.jpg',
          '849be86c-8880-44dd-a037-ffc447d336f3.jpg',
          '0856c2f1-fcc7-470d-9e99-d7b9f6f32dcc.jpg',
        ],
        price: 39000,
        rating: 5,
        price_before_discount: 60000,
        quantity: 17453,
        sold: 97,
        view: 333,
        name: '[Có video] Áo phông form rộng tay lỡ unisex - Áo thun orange soda - Sỉ áo thun số lượng lớn',
        category: '65684d88787ee9ec575a315a',
        image: 'ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
        description:
          '<p>******Th&ocirc;ng tin sản phẩm******<br />&Aacute;o thun c&oacute; c&aacute;c th&ocirc;ng số sau, qu&iacute; kh&aacute;ch h&agrave;ng vui l&ograve;ng tham khảo:<br />Chất liệu: cotton (material: cotton)<br />Chiều d&agrave;i &aacute;o: 63cm (Length: 63cm)<br />Chiều ngang vai &aacute;o: 46cm (Width: 46cm)<br />Chiều d&agrave;i tay &aacute;o: 25cm (Length, sleeve of T-shirt: 25cm)<br />Size: onesize, cao &lt;1m69 &amp; &lt;68kg sẽ vừa (Height &lt;1m69 &amp; &lt;68kg)<br />******CAM KẾT******<br />Cam kết: vải mềm mịn, kh&ocirc;ng x&ugrave;.<br />C&aacute;ch lấy size: nhắn tin chiều cao v&agrave; can nặng cho shop để được tư vấn.<br />Bảo h&agrave;nh: 7 ng&agrave;y kể từ khi nhận h&agrave;ng.<br />Xử l&iacute; đổi trả: trong 24h kể từ khi nhắn tin khiếu nại.<br />******BẢO H&Agrave;NH******<br />Li&ecirc;n hệ bảo h&agrave;nh qua tin nhắn shopee hoặc tin nhắn zalo: 0903189541 (zalo online 8h:00 - 23h:59)<br />******Ưu đ&atilde;i******<br />Bấm theo d&otilde;i shop để nhận được th&ocirc;ng b&aacute;o chương tr&igrave;nh sale sinh nhật shop, sale black Friday v&agrave; rất nhiều chương tr&igrave;nh ưu đ&atilde;i kh&aacute;c.<br />Tham gia đ&aacute;nh gi&aacute; sản phẩm 5 sao v&agrave; nhắn tin cho shop để nhận được voucher giảm gi&aacute; cho đơn h&agrave;ng tiếp theo của bạn.<br />******Th&ocirc;ng Tin Li&ecirc;n Hệ******<br />Tiktok: @thoitrangphuongling<br />Fanpage: fb.com/thoitrangphuongling<br />Youtube: https://youtu.be/AFhAxNKW2x0<br />Zalo: 0903189541<br />Facebook: fb.com/an200498/<br />******Gi&aacute; sỉ******<br />Zalo sỉ: 0939376594<br />Số lượng c&agrave;ng nhiều gi&aacute; c&agrave;ng giảm<br />**2 - 5 &aacute;o 39K/&aacute;o<br />**6 - 10 &aacute;o 37K/&aacute;o<br />**11 - 30 &aacute;o 35K/&aacute;o<br />**31 - 50 &aacute;o 33K/&aacute;o<br />**51 - 100 &aacute;o 32K/&aacute;o<br />**101 - 300 &aacute;o 31K/&aacute;o<br />**301 - 500 &aacute;o 30K/&aacute;o<br />**1000 &aacute;o 29K/&aacute;o<br />Kh&aacute;ch h&agrave;ng quen: 5 &aacute;o gi&aacute; 35K - 30K/&aacute;o<br />*******Ch&acirc;n th&agrave;nh cảm ơn*******<br />#aothun #aothunformrongtaylo #aothunformrong #aothuntaylo #siaothun #xuongsiaothun #aothunpolo #aothuntron</p>',
      },
      {
        images: [
          'dd734e18-ac0e-4a67-97b3-195fb8a4be5f.jpg',
          '59c6824c-ac7a-42cf-9a64-ed75b25a9a4e.jpg',
          '6c504911-9558-413d-b64c-411bf0a9e877.jpg',
        ],
        price: 99000,
        rating: 4.77,
        price_before_discount: 179000,
        quantity: 19,
        sold: 28,
        view: 219,
        name: 'Áo thun Đầu Lâu Tím MECHAY unisex nam nữ tay lỡ form rộng',
        category: '65684d88787ee9ec575a315a',
        image: 'dd734e18-ac0e-4a67-97b3-195fb8a4be5f.jpg',
        description:
          '<p>◤TH&Ocirc;NG TIN CHI TIẾT VỀ &Aacute;o thun Đầu L&acirc;u T&iacute;m MECHAY unisex nam nữ tay lỡ form rộng<br />- Chất liệu: Thun Cotton<br />- M&agrave;u sắc: Đen<br />- Xuất xứ: Việt Nam<br />- Size: M L XL (Form rộng - Ph&ugrave; hợp với v&oacute;c d&aacute;ng của cả Nam v&agrave; Nữ)<br />K&Iacute;CH CỠ: <br />&bull; Size M : &lt; 1m65, &lt; 60kg<br />&bull; Size L : 1m65 - 1m75, 60 - 70kg<br />&bull; Size XL: &gt;1m75, 70 - 85kg</p><p>LƯU &Yacute;!!:<br />+ Bảng size chỉ mang t&iacute;nh tương đối khoảng 80 - 90%, t&ugrave;y v&agrave;o sở th&iacute;ch c&aacute;c bạn muốn mặc vừa hay rộng nữa.<br />+ H&igrave;nh ảnh c&oacute; thể giống nhau nhưng chất vải v&agrave; đường may l&agrave;m n&ecirc;n chất lượng bạn nh&eacute;!<br />+ Inbox shop ngay bay giờ để được tư vấn chi tiết về sản phẩm <br />+ BẢO H&Agrave;NH 1 TH&Aacute;NG cho sản phẩm bằng h&oacute;a đơn mua h&agrave;ng.</p><p>&Aacute;o thun nam &ndash; &Aacute;o thun nữ &ndash; &Aacute;o thun unisex &ndash; &Aacute;o thun tay lỡ form rộng<br />C&aacute;c anh ch&agrave;ng đẹp trai v&agrave; c&aacute;c c&ocirc; n&agrave;ng xinh g&aacute;i ơi.<br />RING VỀ NGAY chiếc &Aacute;o thun Đầu L&acirc;u T&iacute;m MECHAY unisex nam nữ tay lỡ form rộng<br />Unisex &ndash; Phong c&aacute;ch thời trang đường phố c&aacute; t&iacute;nh khuấy đảo năm 2019, được nhiều ng&ocirc;i sao US-UK, K-Pop v&agrave; Sơn T&ugrave;ng lựa chọn.</p><p>Gợi &yacute; một số c&aacute;ch mix đồ Unisex cực chất:<br />&bull; &Aacute;o thun tay lỡ + Quần jogger t&uacute;i hộp<br />&bull; &Aacute;o thun tay lỡ + Quần short 2v vline<br />&bull; &Aacute;o thun tay lỡ + Quần short kaki paint</p><p>✔ Valu Store cam kết: &Aacute;o thun Đầu L&acirc;u T&iacute;m MECHAY unisex nam nữ tay lỡ form rộng<br />&bull; Lu&ocirc;n cung cấp sản phẩm chất lượng, đ&uacute;ng như h&igrave;nh ảnh v&agrave; th&ocirc;ng tin đăng tải với mức gi&aacute; tiết kiệm.<br />&bull; Nhanh ch&oacute;ng giải đ&aacute;p c&aacute;c thắc mắc, cung cấp th&ocirc;ng tin ch&iacute;nh x&aacute;c về c&aacute;c vấn đề li&ecirc;n quan đến sản phẩm, đơn h&agrave;ng v&agrave; cửa h&agrave;ng.<br />&bull; Ho&agrave;n tiền 100% cho những đơn h&agrave;ng bị lỗi do nh&agrave; sản xuất.</p><p>HƯỚNG DẪN ĐẶT H&Agrave;NG<br />Lần lượt chọn ph&acirc;n loại h&agrave;ng (M&agrave;u, Size) rồi th&ecirc;m v&agrave;o giỏ h&agrave;ng những sản phẩm muốn đặt, sau đ&oacute; nhấn MUA NGAY v&agrave; điền th&ocirc;ng tin thanh to&aacute;n.</p><p>SHIP COD TO&Agrave;N QUỐC<br />+ Mời c&aacute;c bạn gh&eacute; thăm gian h&agrave;ng của shop tại https://shopee.vn/valustore để xem th&ecirc;m c&aacute;c mẫu &aacute;o thun, &aacute;o sơ mi v&agrave; quần short mới nhất ạ.<br />+ Cảm ơn bạn đ&atilde; mua sắm tại Valu Store. Ch&uacute;c bạn ng&agrave;y c&agrave;ng đẹp v&agrave; chọn được chiếc &aacute;o thật ưng &yacute; nh&eacute;!<br />Quần jogger nữ<br />▪ ▪ ▪ ▪ ▪ ▪ <br />HASHTAG:<br />#valustore #aothun #aothunnam #aothunnu #aothundep #aothunin #aothuntaylo #formrong #unisex #oversize #ao #revodich #hanquoc #quanjoggernu #aophongnam #aophong #streetwear</p>',
      },
      {
        images: [
          '4413eb8a-ef68-4a43-913a-b9df40ea7add.jpg',
          '5aa797f5-1a69-4fc8-b178-3be77e6bb4fc.jpg',
          '5997a546-41cf-4cd9-a20a-173804e74f39.jpg',
          '2563ad98-9d43-4dd1-ad0a-402c567d66aa.jpg',
          'f0cef432-f5cc-46cf-ba28-13492decb867.jpg',
        ],
        price: 19000,
        rating: 4.8,
        price_before_discount: 30000,
        quantity: 54986,
        sold: 49,
        view: 921,
        name: 'Áo thun nam tay ngắn chất cổ tròn, Áo phông nam cộc tay in hình siêu đẹp',
        category: '65684d88787ee9ec575a315a',
        image: '4413eb8a-ef68-4a43-913a-b9df40ea7add.jpg',
        description:
          '<p>&bull; CH&Agrave;O MỪNG QU&Yacute; KH&Aacute;CH ĐẾN VỚI CH&Uacute;NG T&Ocirc;I - CAM KẾT CHẤT LƯỢNG TUYỆT VỜI HO&Agrave;N TIỀN NẾU KH&Aacute;CH H&Agrave;NG KH&Ocirc;NG THẤY H&Agrave;I L&Ograve;NG<br />&bull; Áo được thi&ecirc;́t k&ecirc;́ đẹp, chu&acirc;̉n form, đường may sắc xảo, vải cotton dày, mịn, th&acirc;́m hút m&ocirc;̀ h&ocirc;i tạo sự thoải mái khi mặc<br />&bull; Dễ d&agrave;ng phối trang phục , th&iacute;ch hợp đi chơi đi l&agrave;m đi dạo phố<br />&bull; Thích hợp cho sự k&ecirc;́t hợp vứi qu&acirc;̀n jean, sọt,kaki!<br />&bull; Size XS cho người từ 10KG &ndash; 20KG<br />&bull; SIZE S Từ 20 &ndash; 35kg<br />&bull; Size M từ 36 &ndash; 45kg<br />&bull; Size L từ 46 &ndash; 55kg<br />&bull; Size XL từ 56 &ndash; 65kg<br />&bull; Size XXL từ 66 &ndash; 75kg<br />&bull; Qu&yacute; Anh chị nhớ đọc kỹ để chọn SIZE cho ph&ugrave; hợp với m&igrave;nh nh&eacute; <br />&bull; CH&Uacute;C QU&Yacute; KH&Aacute;CH SHOPPING VUI VẺ<br />#aothunnam #aothunnamdep #aothunnamcoco #aothun #aothunnamfromrong #aothunnamtaydai #aothunnamaongantaykhongco #aothunnamunisex #aothunanmnu #aothunanmbigsize #aothunanmaongantaycoco #aothunnamhanquoc #aothunnamcasau #aothunnamchat</p>',
      },
      {
        images: [
          'e6dbd5d6-87ce-4b9d-893d-2faca0310c4f.jpg',
          '72eb9bbd-01d2-4011-9161-28a86a384c3d.jpg',
          'aa541807-2d53-4fbf-838a-fe8b57897589.jpg',
          '192b3e36-b844-4c2d-b3a3-908c55cbe01e.jpg',
          'c2e14984-39bb-4226-9a63-6b5400b6e307.jpg',
          '5f59c1d0-5e70-4e27-b4db-20f397f20dee.jpg',
        ],
        price: 149000,
        rating: 4.7,
        price_before_discount: 215000,
        quantity: 11980,
        sold: 19,
        view: 277,
        name: 'Áo thun nam nữ unisex form rộng tay ngắn chất cotton mềm ADS 1225',
        category: '65684d88787ee9ec575a315a',
        image: 'e6dbd5d6-87ce-4b9d-893d-2faca0310c4f.jpg',
        description:
          '<p>📣 SHOP CH&Uacute;NG T&Ocirc;I CAM KẾT <br />👉 Được kiểm tra h&agrave;ng trước khi nhận <br />👉 Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh. <br />👉 Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với h&igrave;nh ảnh v&agrave; m&ocirc; tả. <br />👉 Cam kết được đổi trả h&agrave;ng trong v&ograve;ng 2 ng&agrave;y.<br />👉 Thời gian chuẩn bị h&agrave;ng: H&agrave;ng c&oacute; sẵn, thời gian chuẩn bị TỐI ƯU NHẤT.<br />------------------------------------ <br />👉 C&aacute;c bạn muốn đặt th&ecirc;m size hoặc mua nhiều sản phẩm kh&aacute;c nhau th&igrave; nhấn th&ecirc;m v&agrave;o Giỏ h&agrave;ng -&gt; chọn sản phẩm tiếp theo, sau khi chọn xong th&igrave; nhấn Mua h&agrave;ng. <br />------------------------------------ <br />❤️ LIMO Shop xin giới thiệu mẫu &Aacute;o ph&ocirc;ng nam tay ngắn chất cotton<br />✔ &Aacute;o thun chất cotton 85% d&agrave;y dặn, rất mềm mịn v&agrave; mặc thoải m&aacute;i nhất trong những ng&agrave;y h&egrave; n&oacute;ng nực.<br />✔ H&igrave;nh in 3D c&ocirc;ng nghệ mới mực thấm tr&ecirc;n vải bền đẹp kh&ocirc;ng thể bong d&iacute;nh h&igrave;nh khi giặt m&aacute;y như c&ocirc;ng nghệ in cũ.<br />✔ Cổ &aacute;o bo g&acirc;n mặc thoải m&aacute;i nhất v&agrave; đảm bảo độ bền đẹp, chống gi&atilde;n tốt nhất.<br />👉 H&igrave;nh ảnh c&oacute; thể giống nhau nhưng chất vải v&agrave; đường may l&agrave;m n&ecirc;n chất lượng bạn nh&eacute;! H&atilde;y l&agrave; người mua h&agrave;ng th&ocirc;ng th&aacute;i.</p><p>🔰 TH&Ocirc;NG TIN CHI TIẾT <br />🎗 Chất liệu: cotton 4c co gi&atilde;n, thấm h&uacute;t mồ h&ocirc;i tốt , h&igrave;nh in n&eacute;t căng,kh&ocirc;ng bai nh&atilde;o, kh&ocirc;ng bong tr&oacute;c,<br />🎗 M&agrave;u sắc: Đen , Trắng<br />🎗Size: XS - S &ndash; M &ndash; L &ndash; XL &ndash; XXL<br />🎗 Xuất xứ: Việt Nam<br />------------------------------------ <br />☘ Bảng k&iacute;ch thước <br />🔜 Size XS : 40kg &ndash; 50kg , chi&ecirc;̀u cao phù hợp dưới 1m6<br />🔜 Size S : 51kg &ndash; 60kg , chi&ecirc;̀u cao phù hợp từ 1m6 đ&ecirc;́n 1m66 <br />🔜 Size M : 61kg &ndash; 70kg , chi&ecirc;̀u cao phù hợp từ 1m67 đ&ecirc;́n 1m72<br />🔜 Size L : 71kg &ndash; 83kg , chi&ecirc;̀u cao phù hợp từ 1m73 đ&ecirc;́n 1m78<br />🔜 Size XL : 84kg &ndash; 95kg , chi&ecirc;̀u cao phù hợp từ 1m79 đ&ecirc;́n 1m84<br />🔜 Size XXL: 96kg &ndash; 110kg , chi&ecirc;̀u cao phù hợp tr &ecirc;n 1m84<br />👉 Nếu bạn c&oacute; bất kỳ thắc mắc n&agrave;o cần tư vấn về sản phẩm n&agrave;y, đừng ngần ngại h&atilde;y nhắn tin trực tiếp cho ch&uacute;ng t&ocirc;i bất kỳ l&uacute;c n&agrave;o nh&eacute;. <br />📞📞📞 Hotline : 0848.843.686📱📱📱 <br />🎉🎉🎉 Zalo : 0848.843.686<br />------------------------------------<br />#&aacute;othunnam #&aacute;othunđẹp #&aacute;othuncổtr&ograve;n #aothunnam #aothunnamthethao #aothunnamdep #aonam #aonamdep #aonambody #&aacute;othunnamcổtrom #aothunnamcotron #aothunthethao #aothunlanhthethao #aothunlanhnam #aothunlanh #&aacute;onamthethao #&aacute;onamcộctay#aothunnam #thuncoctay #&aacute;othun #&aacute;oph&ocirc;ngnam #&aacute;onam #&aacute;othunc&oacute;cổ#unisex #aothuntaylo #aothunnu #aothunnam #aogiare #aophongunisex #aoformrong #aoteen #aothuncotton #aothun #thoitrangnu #thoitrangnam#aothun #aofreesize #aothundep #aoteen #aorong #aochat #freesize #dethuong #aoinanh #aotaylo, #unisex #aofreesize #aothundep #thuntaylo#aothunnam #aothunnamdep #aothunnamcoco #aothunnamtaydai #aothunnamcaocap #aothundaitaynam #aothunnambody #aothunnamdaitay #aothunnamhanquoc #aothunnamcasau #aothunnamgiare #aothunnam2020 #polo #aothunnamcotru #aothunpolonam #aongantaycoco</p>',
      },
      {
        images: [
          '235a703e-304f-484a-b0e6-357688801d77.jpg',
          'b4b0d556-60b5-4b9e-ab1b-fa0a27562925.jpg',
          'b90baadc-bd85-4de1-9a99-26b914f6bc4c.jpg',
          '88dd5ea5-d04d-4f0f-aace-53bb425a27a6.jpg',
        ],
        price: 25000,
        rating: 4.7,
        price_before_discount: 45000,
        quantity: 48,
        sold: 74,
        view: 283,
        name: 'Áo Thun Cộc Tay COTTON Thoáng Mát - Trắng | HN052',
        category: '65684d88787ee9ec575a315a',
        image: '235a703e-304f-484a-b0e6-357688801d77.jpg',
        description:
          '<p>&Aacute;O THUN CỘC TAY được l&agrave;m từ chất vải cotton n&ecirc;n rất tho&aacute;ng m&aacute;t.</p><p>- Thiết kế đơn giản kiểu cổ tr&ograve;n, form &aacute;o &ocirc;m vừa phải t&ocirc;n vẻ đẹp h&igrave;nh thể đầy nam t&iacute;nh, quyến rũ của ph&aacute;i mạnh.<br />- Chất liệu vải cotton mềm mịn.<br />- Dễ mặc b&ecirc;n trong &aacute;o sơ mi hoặc mặc ở nh&agrave;.<br />- Qu&agrave; tặng thiết thực cho những người đ&agrave;n &ocirc;ng trong gia đ&igrave;nh bạn.</p><p>C&aacute;c bạn tham khảo để chọn size nh&eacute;:<br />- Size M (55-60kg)<br />- Size L (60-67kg)<br />- Size 2L (69-75kg)</p><p>💡 C&aacute;c loại quần &aacute;o kh&aacute;c ➡ #quan_ao_hathy</p><p>➡ Click mua ngay để sở hữu sản phẩm tuyệt vời n&agrave;y!<br />🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸<br />H&Agrave; THY MART<br />Xem tất cả sản phẩm của H&agrave; Thy Mart ➡ #hathymart</p><p>🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸<br />H&Agrave; THY CAM KẾT <br />☑ Lu&ocirc;n b&aacute;n Đ&Uacute;NG GI&Aacute;, TOP Shopee, kh&ocirc;ng B&Aacute;N ĐẮT, kh&ocirc;ng N&Oacute;I TH&Aacute;CH, kh&ocirc;ng CHẶT CH&Eacute;M <br />☑ Tất cả sản phẩm đều được kiểm tra CHU Đ&Aacute;O v&agrave; đ&oacute;ng g&oacute;i CẨN THẬN trước khi chuyển đi, sản phẩm c&oacute; nhiều đ&aacute;nh gi&aacute; THẤP sẽ kh&ocirc;ng được b&aacute;n tr&ecirc;n shop <br />☑ V&igrave; vậy bạn c&oacute; quyền ĐƯỢC Y&Ecirc;N T&Acirc;M khi mua h&agrave;ng của ch&uacute;ng t&ocirc;i <br />➡ H&atilde;y click MUA NGAY để sở hữu sản phẩm tuyệt vời n&agrave;y NGAY H&Ocirc;M NAY!</p><p>#&aacute;o_thun_trơn_nam #&aacute;othuntrơnnam #&aacute;o_cộc_tay_nam #&aacute;ocộctaynam #aothuntron #aococtaynam</p>',
      },
      {
        images: [
          'a0418771-e082-4daf-a4fd-fcf93407e7bf.jpg',
          'b1361843-e699-49eb-a292-d7a1ecca949f.jpg',
          '4ded73ad-1193-4130-967e-096e2b9b894f.jpg',
          '9a5b6275-cd73-4ad9-9a89-127747d3ff1d.jpg',
        ],
        price: 110000,
        rating: 4.2,
        price_before_discount: 180000,
        quantity: 195,
        sold: 185,
        view: 453,
        name: 'áo thun form rộng in chữ NIRVANA',
        category: '65684d88787ee9ec575a315a',
        image: 'a0418771-e082-4daf-a4fd-fcf93407e7bf.jpg',
        description:
          '<p>🍓 Bảng SIZE: &Aacute;O THUN<br />(Bảng size mang t&iacute;nh chất tham khảo v&agrave; ph&ugrave; hợp 80-90% sở th&iacute;ch c&aacute;c cậu ạ. C&aacute;c bạn muốn chọn size ph&ugrave; hợp c&oacute; thể xem h&igrave;nh feedback c&aacute;c kh&aacute;ch đ&atilde; mua hoặc inbox cho THANH KS nh&eacute; ^^)<br />-Size M: từ 45 đến 55kg<br />-Size L: từ 56kg đến 62kg , <br />-Size XL: từ 63kg đến 80kg,<br /> 🥝 🍓 Ngập tr&agrave;n mẫu mới 🍓 🥝<br />✈ Form rộng Unisex cho cả nam v&agrave; nữ <br />🍄 🍄 Nhận THU HỘ ( ship COD ) to&agrave;n quốc <br />🌸 H&igrave;nh Shop chụp, đảm bảo mặc l&ecirc;n form đẹp như ảnh<br />🌸 Vải đẹp , kh&ocirc;ng x&ugrave; , kh&ocirc;ng co r&uacute;t , mềm mịn d&agrave;y dặn , h&uacute;t mồ h&ocirc;i cực nhanh, mặc si&ecirc;u m&aacute;t . <br /> 🏠 Địa chỉ: 24A đo&agrave;n hồng phước p.ho&agrave; thạnh quận t&acirc;n ph&uacute; hcm<br /> Hotline: 0974215453<br />--------------------------------------<br />shop chuyển bỏ sỉ h&agrave;ng unisex cho c&aacute;c shop thời trang v&agrave; c&aacute;c bạn chạy ads online . đặc biệt c&oacute; nhnaj sản xuất theo m&atilde;u b&ecirc;n kh&aacute;ch h&agrave;ng y&ecirc;u cầu li&ecirc;n hệ 0974215453</p>',
      },
      {
        images: [
          '25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
          '85e6928d-9e7f-4ff9-8105-8389448f6a48.jpg',
          '1705c99d-e61b-4eb3-a786-7d90e927b242.jpg',
          '6f9f953c-6048-419f-87c3-24c24620dfab.jpg',
          '49eaf710-c340-43fc-b321-43bf896d7a39.jpg',
          '400b5529-01d4-42d7-be63-e179f8c0a4df.jpg',
          'f0b9ff49-824f-4a7a-8bce-a4d6599e26a6.jpg',
          '03c61a2a-f703-486b-961d-73b38be7240f.jpg',
          '59bcd4bd-fd27-416c-b7df-dd831a3da621.jpg',
        ],
        price: 119000,
        rating: 5,
        price_before_discount: 198000,
        quantity: 234,
        sold: 24,
        view: 723,
        name: 'Áo thun nam ngắn tay thể thao chất liệu thun lạnh 4 chiều AT39',
        category: '65684d88787ee9ec575a315a',
        image: '25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
        description:
          '<p>SQD Sport198<br />&Aacute;o thun nam AT39<br />🔰 TH&Ocirc;NG TIN SẢN PHẨM:<br />- &Aacute;o thun nam với chất liệu thun lạnh 4 chiều co d&atilde;n cực tốt, thấm h&uacute;t mồ h&ocirc;i tốt, mặc m&aacute;t mẻ, thoải m&aacute;i khi vận động nhiều.<br />- Vải trơn mềm min sờ m&aacute;t tay, form chuẩn body dễ phối đồ.<br />- Shop đảm bảo chất vải kh&ocirc;ng nhăn, kh&ocirc;ng x&ugrave; l&ocirc;ng, kh&ocirc;ng phai m&agrave;u, h&igrave;nh in cực tốt( được may th&ecirc;u thủ c&ocirc;ng).<br />- Xuất xứ: Việt Nam<br />- 🔰 C&Oacute; ĐỦ 4 SIZE: M-L-XL-XXL từ 50-85kg<br />&bull; Size M 50-59kg <br />&bull; Size L 60-69kg<br />&bull; Size XL 70-76kg <br />&bull; Size XXL 77-85 kg <br />🔰 HƯỚNG DẪN BẢO QUẢN:<br /> - Giặt m&aacute;y giặt hay giặt tay đều được, n&ecirc;n hạn chế d&ugrave;ng thuốc tẩy( Ch&uacute; &yacute; giặt v&agrave; phơi ở nhiệt độ dưới 40 độ C ). <br />- Tr&aacute;nh phơi kh&ocirc; ở ngo&agrave;i nắng qu&aacute; l&acirc;u, lộn mặt trong lại để sản phẩm bền m&agrave;u hơn.<br />- L&agrave; sấy ở nhiệt độ vừa phải.<br />🔰 CH&Iacute;NH S&Aacute;CH SQD Sport198:<br />- Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm thật giống với h&igrave;nh ảnh.<br />- Giao h&agrave;ng kh&aacute;ch được kiểm tra h&agrave;ng, bao đổi trả nếu lỗi do shop . <br />- Được đổi size nếu kh&aacute;ch kh&ocirc;ng vừa<br />📌 Shop b&aacute;n h&agrave;ng với phương ch&acirc;m: UY T&Iacute;N-CHẤT LƯỢNG-CHUY&Ecirc;N NGHIỆP, lu&ocirc;n mang đến cho qu&yacute; kh&aacute;ch sự h&agrave;i l&ograve;ng tuyệt đối nhất, cảm ơn qu&yacute; kh&aacute;ch đ&atilde; tin tưởng SQD Sport198. <br />#aothunnam #aophongnam #aothunnamdep #aothunnambody #aothunnambody #aophongnamdep #aophongnamhe #aophongnam #aophongnamden #aotapgym #aothuntapgym #&Aacute;o #aothun #aothunlanh #thethao #aothunthethao #aothunthethaonam</p>',
      },
      {
        images: [
          'ff8f5319-92c1-4675-80a4-793a17fd3eb0.jpg',
          '7d880933-9603-48c3-a66e-cb7488f46292.jpg',
        ],
        price: 68000,
        rating: 4.2,
        price_before_discount: 120000,
        quantity: 7571,
        sold: 58,
        view: 570,
        name: 'Áo thun 3d thái lan giá sỉ - Áo phông nam big size Việt Nam - Áo dành cho người mập lùn',
        category: '65684d88787ee9ec575a315a',
        image: 'ff8f5319-92c1-4675-80a4-793a17fd3eb0.jpg',
        description:
          '<p>Ti&ecirc;u Đề: &Aacute;o thun 3d th&aacute;i lan gi&aacute; sỉ - &Aacute;o ph&ocirc;ng nam big size Việt Nam - &Aacute;o d&agrave;nh cho người mập l&ugrave;n</p><p>Shop xin kể c&acirc;u chuyện nha :</p><p>Kh&aacute;ch h&agrave;ng : Sao Shop b&aacute;n &aacute;o rẻ thế ạ??<br />Shop : Ồ bạn ơi! Shop l&agrave; xưởng in trực tiếp với số lượng lớn, một ng&agrave;y xưởng sản xuất h&agrave;ng ngh&igrave;n chiếc &aacute;o m&agrave; n&ecirc;n mới rẻ vậy đ&oacute;.<br />Kh&aacute;ch h&agrave;ng : Rẻ vậy chất liệu c&oacute; tốt kh&ocirc;ng??<br />Shop : Chất liệu vải l&agrave; Cotton pha Lạnh, n&ecirc;n bạn y&ecirc;n t&acirc;m về chất lượng nh&eacute;.<br />Kh&aacute;ch h&agrave;ng: Th&acirc;n h&igrave;nh t&ocirc;i hơi lớn, t&ocirc;i mặt thời gian &aacute;o c&oacute; bung chỉ kh&ocirc;ng?<br />Shop: Bạn y&ecirc;n t&acirc;m nh&eacute;, Kiểu may của &aacute;o l&agrave; kiểu d&acirc;y c&ocirc;, m&oacute;c x&iacute;ch 2 vai rất chắc chắn n&ecirc;n khỏi lo bung chỉ sau khi mặc nh&eacute;.<br />Kh&aacute;ch h&agrave;ng: C&ograve;n mực in th&igrave; sao ạ?<br />Shop: Về Mực in th&igrave; thấm s&acirc;u v&agrave;o sợi vải, định dạng 3D, Bảo h&agrave;nh h&igrave;nh in l&ecirc;n đến 3 năm kh&ocirc;ng phai m&agrave;u, bạn khỏi lo nha.<br />Kh&aacute;ch h&agrave;ng: &Aacute;o n&agrave;y nữ mặc c&oacute; được kh&ocirc;ng?<br />Shop: &Aacute;o n&agrave;y Nam Nữ điều mặc được bạn nh&eacute;.</p><p>💎 SHOP CH&Uacute;NG T&Ocirc;I XIN CAM KẾT: <br />👉 Cam kết h&igrave;nh ảnh sắt n&eacute;t chất lượng giống h&igrave;nh 100% .<br />👉 Cam kết h&agrave;ng mặc Kh&ocirc;ng PHAI M&Agrave;U, KO X&Ugrave; L&Ocirc;NG. Giặt m&aacute;y thoải m&aacute;i.<br />👉 Về chất liệu : &Aacute;o được may bằng vải thun cotton Tho&aacute;ng m&aacute;t, mềm mịn, co gi&atilde;n tốt kh&ocirc;ng nh&atilde;o. <br />👉 Về chất liệu mực in: Mực in thấm s&acirc;u v&agrave;o sợi vải, định dạng 3D, Bảo h&agrave;nh h&igrave;nh in l&ecirc;n đến 3 năm kh&ocirc;ng phai m&agrave;u.<br />👉 Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.<br />👉 C&oacute; đủ size ngoại cở cho qu&yacute; kh&aacute;ch dễ d&agrave;ng lựa chọn.</p><p>BẢNG FULL SIZE CHO NAM V&Agrave; NỮ.<br />Size S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL, 7XL, 8XL<br />+ Size S d&agrave;nh cho người từ 40 - 45KG <br />+ Size M d&agrave;nh cho người từ 45 - 52KG <br />+ Size L d&agrave;nh cho người từ 52 - 65KG <br />+ Size XL d&agrave;nh cho người từ 65 - 70KG <br />+ Size 2XL d&agrave;nh cho người từ 70 - 73KG <br />+ Size 3XL d&agrave;nh cho người từ 73 - 78KG <br />+ Size 4XL d&agrave;nh cho người từ 78 - 85KG <br />+ Size 5XL d&agrave;nh cho người từ 85 - 92KG <br />+ Size 6XL d&agrave;nh cho người từ 92 - 99KG <br />+ Size 7XL d&agrave;nh cho người từ 99 - 110KG <br />+ Size 8XL d&agrave;nh cho người từ 110 - 120KG <br />QU&Yacute; KH&Aacute;CH LƯU &Yacute;: Đ&acirc;y l&agrave; bảng size ti&ecirc;u chuẩn mặt &ocirc;m body, nếu qu&yacute; kh&aacute;ch muốn mặt thoải m&aacute;i h&atilde;y nh&iacute;ch l&ecirc;n th&ecirc;m 1 size so với size ti&ecirc;u chuẩn tr&ecirc;n</p><p>#aothunnamsizelon #aothunnamngoaico #aothunnambigsize #aothunnamcolon #aothunnamcotton #aothunnamsizeto #aothunnamchonguoibeo #aothunnamchonguoimap #aophongnamsizelon #aophongnungoaico #aophongnambigsize #aophongnamcolon #aophongnamcoto #aophongnamsizeto #aophongnuchonguoibeo</p>',
      },
      {
        images: [
          'a3d10f20-3533-4619-9259-ffa8be9a9ac2.jpg',
          'ee4069e9-dc26-4069-8136-839f594a3ed5.jpg',
          '8c3a8786-56f7-4880-b2a5-ad527e31c37f.jpg',
          'ebf593c8-8129-4d7d-b1dc-2d769c89fc9f.jpg',
          '8be1f6d0-9fe4-4ab4-b375-8c23426d3565.jpg',
          '7cd76404-5bb3-4710-af77-a45c740fac71.jpg',
          '5ea7839c-917d-4934-bb01-aeda4f7e8f7f.jpg',
        ],
        price: 140000,
        rating: 4.66,
        price_before_discount: 150000,
        quantity: 2119,
        sold: 2200,
        view: 794,
        name: 'Áo thun nam cổ tròn POLOMAN vải Cotton co giãn,dày dặn, form regular fit thoải mái',
        category: '65684d88787ee9ec575a315a',
        image: 'a3d10f20-3533-4619-9259-ffa8be9a9ac2.jpg',
        description:
          '<p>* Nổi bật - Tinh tế tr&ecirc;n từng chi tiết m&agrave; POLOMAN mang đến cho c&aacute;c bạn sự trải nghiệm đơn giản m&agrave; sang trọng. <br /> * POLOMAN sẽ gi&uacute;p bạn giải quyết vấn đề gi&aacute; th&agrave;nh,chất lượng v&agrave; mẫu m&atilde; sản phẩm tốt nhất.<br /> * Chi tiết sản phẩm &Aacute;o thun nam cổ tr&ograve;n POLOMAN<br /> + Ch&acirc;t vải 100% Cotton cho độ d&agrave;y dặn,co gi&atilde;n tốt v&agrave; quan trọng độ bền m&agrave;u cao<br /> + Giặt ko đổ l&ocirc;ng hay bay m&agrave;u, thấm h&uacute;t mồ h&ocirc;i v&agrave; thoải m&aacute;i ko g&ograve; b&oacute; khi vận động<br /> + Thiệt kế cấu tr&uacute;c lỗ tho&aacute;ng, mắt vải mịn gi&uacute;p t&ocirc;n d&aacute;ng cho người mặc <br /> * M&agrave;u sắc &amp; k&iacute;ch cỡ &Aacute;o thun nam cổ tr&ograve;n POLOMAN: form &aacute;o Regular Fit thoải m&aacute;i ko g&ograve; b&oacute; khi vận động tạo n&ecirc;n sự nặng động,trẻ trung,...<br /> + &Aacute;o c&oacute; 5 m&agrave;u Trắng, Đen, V&agrave;ng, Đỏ, Xanh r&ecirc;u<br /> + &Aacute;o c&oacute; 4 size : M L XL XXL<br /> M dưới 1m72 dưới 64kg<br /> L 1m6 - 1m8 65 - 72kg<br /> XL 1m65 - 1m85 73 - 80kg<br /> XXL 1m68 - 1m88 80 - 88kg<br />* Hướng dẫn sử dụng v&agrave; bảo quản &Aacute;o thun nam cổ tr&ograve;n POLOMAN :<br /> + Giặt ở nhiệt độ b&igrave;nh thường, với đồ c&oacute; m&agrave;u tương tự.<br /> + Kh&ocirc;ng được d&ugrave;ng h&oacute;a chất tẩy.<br /> + Hạn chế sử dụng m&aacute;y sấy v&agrave; ủi ở nhiệt độ th&iacute;ch hợp. <br /> + Lộn mặt tr&aacute;i khi phơi tr&aacute;nh bị phai m&agrave;u<br />* Ch&iacute;nh s&aacute;ch v&agrave; điều kiện đổi trả của POLOMAN:<br /> + Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh.<br /> + Cam kết được đổi trả h&agrave;ng trong v&ograve;ng 3 ng&agrave;y.<br /> + H&agrave;ng phải c&ograve;n mới v&agrave; chưa qua sử dụng<br /> + Sản phẩm bị lỗi do vận chuyển v&agrave; do nh&agrave; sản xuất <br /> 📌 LƯU &Yacute;: Khi bạn gặp bất k&igrave; vấn đề g&igrave; về sản phẩm đừng vội đ&aacute;nh gi&aacute; m&agrave; h&atilde;y li&ecirc;n hệ Shop để đc hỗ trợ 1 c&aacute;ch tốt nhất nh&eacute;.<br /> #aothunnam #aopolonam #poloman #aothuncoco #aothuncotton #aothun #aopolo #polo #cotton #nam #formrong #hanquoc #aodep</p>',
      },
      {
        images: [
          'bc59c0ee-980d-4c3e-a53c-12bca82340c6.jpg',
          '6d75544b-51b8-46cd-80d3-1d3d2399eea0.jpg',
          'eba87e31-9af2-479e-8cf3-be13c134e41a.jpg',
          '340fe0c2-e6b1-4f58-9f4a-6a004eabf85b.jpg',
          'ea632eaa-e579-4e34-80ea-6b9f3a03235a.jpg',
          'd256a594-d9c3-419f-b8d5-920409268f31.jpg',
          '74772f1a-d19f-43e5-aeb1-33b2cf2a7408.jpg',
          'e42066fb-2c9a-4a5d-8340-a4b4139de368.jpg',
          'c94ac682-ff18-44ce-9f7d-cd17b362e20d.jpg',
        ],
        price: 57000,
        rating: 4.88,
        price_before_discount: 59000,
        quantity: 1610,
        sold: 12500,
        view: 1636,
        name: '[Mã FAXANH245 giảm 10K đơn từ 50K] Áo Thun Nam Thể Thao Dập Vân CT AN298',
        category: '65684d88787ee9ec575a315a',
        image: 'bc59c0ee-980d-4c3e-a53c-12bca82340c6.jpg',
        description:
          '<p>✔️ TH&Ocirc;NG TIN CHI TIẾT SẢN PHẨM<br />- &Aacute;o Thun Nam Thể Thao DẬP V&Acirc;N CT GUGOSTAR G298, Co Gi&atilde;n 4 Chiều<br />- Kiểu d&aacute;ng đơn giản, hết sức năng động. Sản phẩm dễ d&agrave;ng phối với quần short, quần d&agrave;i, th&iacute;ch hợp trong mọi hoạt động. <br />- Chất liệu: thun lạnh co d&atilde;n 4 chiều, kh&ocirc;ng phai, kh&ocirc;ng x&ugrave;, kh&ocirc;ng b&aacute;m d&iacute;nh, thoải m&aacute;i khi mặc.<br />- M&agrave;u sắc: 6 m&agrave;u<br />- Phong c&aacute;ch: Đơn giản, trẻ trung, nam t&iacute;nh.<br />- Đường may tinh tế, tỉ mỉ trong từng chi tiết.<br />- Chất lượng sản phẩm tốt, gi&aacute; cả hợp l&yacute;<br />- Xuất xứ: Việt Nam<br />------------------------------------<br />✔️TH&Ocirc;NG TIN SIZE<br />- M: 55-65kg, Cao 1m65-1m7<br />- L: 66-75kg, Cao 1m7-1m75<br />- XL: 76-85kg, Cao 1m75-1m8<br />- XXL: 86-92kg, Cao 1m8-1m85<br />- 3XL: 93-100kg, Cao 1m8-1m90<br />=&gt;&gt; Kh&aacute;ch bụng to đ&ocirc;n l&ecirc;n 1 size nh&eacute;! <br />------------------------------------<br />✔️ HƯỚNG DẪN C&Aacute;CH ĐẶT H&Agrave;NG<br /> Nếu bạn muốn mua 2 sản phẩm kh&aacute;c nhau, nhiều size hoặc nhiều m&agrave;u kh&aacute;c nhau: <br />- Bạn chọn m&agrave;u + chọn size =&gt;&gt; rồi bấm &ldquo;th&ecirc;m v&agrave;o giỏ h&agrave;ng&rdquo;<br />- Khi giỏ h&agrave;ng đ&atilde; c&oacute; đầy đủ c&aacute;c sản phẩm cần mua, bạn mới tiến h&agrave;nh ấn n&uacute;t &ldquo; Thanh to&aacute;n&rdquo;<br />------------------------------------<br />✔️ HƯỚNG DẪN BẢO QUẢN SẢN PHẨM<br />- Lần đầu giặt với nước, kh&ocirc;ng giặt với nước tẩy hoặc bột giặt c&oacute; nhiều chất tẩy<br />- Được giặt m&aacute;y giặt với chu kỳ trung b&igrave;nh v&agrave; v&ograve;ng quay ngắn<br />- Lộn mặt tr&aacute;i khi giặt sẽ giữ được sản phẩm l&acirc;u bền<br />- Giặt với nhiệt độ tối đa 30 độ C<br />- L&agrave; ủi kh&ocirc;ng qu&aacute; 110 độ C<br />- Khi phơi lộn mặt tr&aacute;i v&agrave; tr&aacute;nh kh&ocirc;ng phơi trực tiếp dưới &aacute;nh nắng mặt trời<br />------------------------------------<br />✔️CH&Iacute;NH S&Aacute;CH GUGOSTAR<br />- Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh v&agrave; video. H&Igrave;NH SAO H&Agrave;NG VẬY!!!<br />- Hỗ trợ đổi h&agrave;ng trong v&ograve;ng 7 ng&agrave;y khi kh&ocirc;ng vừa size hoặc sản phẩm bị lỗi.<br />- Lu&ocirc;n tư vấn nhiệt t&igrave;nh, giải đ&aacute;p mọi thắc mắc của kh&aacute;ch h&agrave;ng.<br />- Gugostar đặc biệt quan t&acirc;m đến sự h&agrave;i l&ograve;ng của kh&aacute;ch h&agrave;ng. Ch&uacute;ng t&ocirc;i lu&ocirc;n tận t&acirc;m phục vụ với tinh thần trung thực v&agrave; tr&aacute;ch nhiệm. Cảm ơn Kh&aacute;ch H&agrave;ng đ&atilde; tin d&ugrave;ng những sản phẩm của Gugostar.<br />------------------------------------<br /> #Gugostar<br />#ao #aothun #aothunnam #aophongnam #aothunthethao #thethao #aophong #nam #aothethao #aodep #aothundep #aonam #aonamdep</p>',
      },
      {
        images: [
          '06b90bb6-8dc5-4f04-aae7-4b8dd15cb80c.jpg',
          '1ced481c-f5bb-4fc2-b14d-c47c616b9ec3.jpg',
          '530d3ea5-5679-4238-b939-11065ddb439d.jpg',
          '494e2f91-8abb-4805-aab0-43f71fa79258.jpg',
          '6e4de3f3-15f7-48a3-98e8-2424783ef795.jpg',
          'fb2b4113-e7c9-494e-81f1-28f44324f344.jpg',
          'b9b2fc0f-ea0c-45e4-82ed-54f9a979adc7.jpg',
          '831ce522-b239-40e8-9d1a-40efce975f37.jpg',
          'c546f7df-067d-4fbb-ab94-3f1cff03d539.jpg',
        ],
        price: 96000,
        rating: 4.8,
        price_before_discount: 198000,
        quantity: 46486,
        sold: 5652,
        view: 381,
        name: '[Mã FAGREEN245 giảm 10% tối đa 30K đơn từ 99K] Áo thun nam POLO trơn vải cá sấu cotton cao cấp ngắn tay màu pastel',
        category: '65684d88787ee9ec575a315a',
        image: '06b90bb6-8dc5-4f04-aae7-4b8dd15cb80c.jpg',
        description:
          '<p>&Aacute;o thun nam polo trơn vải c&aacute; sấu cotton cao cấp mềm mịn, &aacute;o ph&ocirc;ng polo nam đẹp cổ bẻ ngắn tay c&oacute; đủ bảng m&agrave;u cực hot <br />Shop &Aacute;o Polo VNXK h&acirc;n hạnh được phục vụ qu&yacute; kh&aacute;ch. Những sản phẩm mới nhất vẫn li&ecirc;n tục được cập nhật mỗi ng&agrave;y ph&ugrave; hợp với nhiều lứa tuổi.</p><p>1. GIỚI THIỆU SẢN PHẨM<br />- &Aacute;o ph&ocirc;ng Polo nam trắng l&agrave; sự lựa chọn ho&agrave;n hảo cho c&aacute;c ch&agrave;ng trai. &Aacute;o 3 m&agrave;u trung t&iacute;nh rất dễ mặc, form &aacute;o vừa vặn cơ thể, thoải m&aacute;i theo từng cử động.<br />- M&agrave;u sắc trung t&iacute;nh v&agrave; phối m&agrave;u tuyệt vời m&agrave; rất &iacute;t &aacute;o polo c&oacute; tạo n&ecirc;n sự dễ d&agrave;ng trong việc phối đồ v&agrave; tạo ra cho m&igrave;nh nhiều phong c&aacute;ch kh&aacute;c nhau.<br />- &Aacute;o được l&agrave;m từ chất liệu c&aacute; sấu cotton co gi&atilde;n với bề mặt vải mềm mại, thấm h&uacute;t mồ h&ocirc;i tốt tạo cảm gi&aacute;c thoải m&aacute;i, tho&aacute;ng m&aacute;t cho người mặc. Đ&acirc;y cũng l&agrave; chất liệu dễ giặt sạch, gi&uacute;p bạn tiết kiệm một khoảng thời gian đ&aacute;ng kể.<br />- &Aacute;o chống nhăn tốt, dễ giặt sạch, nhanh kh&ocirc;.<br />-Giặt tay hay giặt m&aacute;y thoải m&aacute;i kh&ocirc;ng sợ ra m&agrave;u, nhăn , mất form</p><p>2. TH&Ocirc;NG TIN SẢN PHẨM</p><p>- Chất liệu: 100% chất cotton c&aacute; sấu, thấm h&uacute;t mồ h&ocirc;i , giặt kh&ocirc;ng ra m&agrave;u , kh&ocirc;ng mất form <br />- C&aacute;c Size S - M - L- XL- XXL - XXXL</p><p>+ Size S : 35-47 kg cao 1m5-1m55<br /> + Size M : 48 - 59 kg cao 1m55 - 1m65 <br /> + Size L : 60 - 67kg cao 1m65 - 1m80<br /> + Size XL : 68- 75kg cao 1m65 - 1m80<br /> + Size XXL : 76 - 85kg cao 1m65 - 1m85<br /> + Size XXXL : 86 - 95kg cao 1m65 - 1m85</p><p>- M&agrave;u sắc : Đen , trắng , Xanh B&iacute;ch , Xanh Thi&ecirc;n Thanh , Xanh đen , Đỏ Tươi , Đỏ Đ&ocirc; , V&agrave;ng , Biển , Cam , Xanh Ya , Xanh K&eacute;t , Xanh L&aacute; , Xanh cốm , X&aacute;m Đậm , X&aacute;m Lợt , M&agrave;u n&acirc;u , Xanh Vịt<br />- Form &aacute;o slim dễ phối đồ</p><p>3. CH&Iacute;NH S&Aacute;CH B&Aacute;N H&Agrave;NG:<br />- FREESHIP hoặc hỗ trợ 40K cho đơn h&agrave;ng từ 99K to&agrave;n quốc<br />- Ngo&agrave;i ra, Ch&uacute;ng t&ocirc;i tặng m&atilde; voucher hoặc ho&agrave;n xu cho to&agrave;n bộ đơn h&agrave;ng<br />- Cam kết chất lượng v&agrave; mẫu m&atilde; sản phẩm giống với h&igrave;nh ảnh.<br />- Ho&agrave;n tiền nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.<br />- Cam kết được đổi trả h&agrave;ng trong v&ograve;ng 2 ng&agrave;y.</p><p>4. HƯỚNG DẪN C&Aacute;CH ĐẶT H&Agrave;NG<br />- Bước 1: C&aacute;ch chọn size, shop c&oacute; bảng size mẫu. Bạn N&Ecirc;N INBOX, cung cấp chiều cao, c&acirc;n nặng để SHOP TƯ VẤN SIZE<br />- Bước 2: C&aacute;ch đặt h&agrave;ng: Nếu bạn muốn mua 2 sản phẩm kh&aacute;c nhau hoặc 2 size kh&aacute;c nhau, để được freeship<br />+ Bạn chọn từng sản phẩm rồi th&ecirc;m v&agrave;o giỏ h&agrave;ng<br />+ Khi giỏ h&agrave;ng đ&atilde; c&oacute; đầy đủ c&aacute;c sản phẩm cần mua, bạn mới tiến h&agrave;nh ấn n&uacute;t &ldquo; Thanh to&aacute;n&rdquo;<br />- Shop lu&ocirc;n sẵn s&agrave;ng trả lời inbox để tư vấn.</p><p>🔔🔔🔔 Tham khảo th&ecirc;m c&aacute;c sản phẩm kh&aacute;c tại: <br />#&aacute;othunnamc&oacute;cổ #aothunnamcoco<br />#&aacute;othunnamc&oacute;cổtayngắn<br />#aopolonam <br />#&aacute;opolonam <br />#aopolonamhangmysaleoff <br />#aopolonamdep <br />#aopolonamnu <br />#AOTHUNHANQUOC<br />#&aacute;othunnam <br />#aothunnambody <br />#aothunnam <br />#aothunnamnu <br />#&aacute;othunnamtayngắn <br />#aothunnamdep <br />#aothunnama</p>',
      },
      {
        images: [
          'c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
          'd938561d-9ad1-4f61-822a-9d29b3cb663e.jpg',
          '7c2e9bd9-0773-4f17-9568-62ab8ce3a689.jpg',
          'a70f8655-53c8-4359-96c2-ac733f11279e.jpg',
          'dd139f2c-14cf-43f8-ab58-2b4cadcd2140.jpg',
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 80000,
        quantity: 8129,
        sold: 4100,
        view: 418,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun nam nữ form rộng Yinxx, áo phông tay lỡ ATL43',
        category: '65684d88787ee9ec575a315a',
        image: 'c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
        description:
          '<p>TH&Ocirc;NG TIN SẢN PHẨM: <br />- T&ecirc;n sản phẩm: &Aacute;o thun form rộng tay lỡ Unisex<br />- Xuất sứ: Việt Nam <br />- Chất liệu: 35% Cotton, 60% Polyester, 5% Spandex<br />- D&agrave;y dặn, mềm mịn, co gi&atilde;n 4 chiều, kh&ocirc;ng x&ugrave;, kh&ocirc;ng nhăn, kh&ocirc;ng h&uacute;t bụi bẩn.<br />- Size &aacute;o: FREESIZE form rộng chuẩn TAY LỠ UNISEX cực đẹp.<br />- Chiều d&agrave;i &aacute;o: 72cm<br />- Chiều rộng &aacute;o: 55cm<br />- Chiều d&agrave;i tay &aacute;o: 20cm<br />- Từ 50-65KG (mặc rộng thoải m&aacute;i) <br />- Từ 66-75KG (mặc rộng vừa).</p><p>Ng&agrave;y n&agrave;y, &aacute;o thun tay lỡ Unisex form rộng đang ng&agrave;y c&agrave;ng trở n&ecirc;n phổ biến v&agrave; đa dạng với c&aacute;c mẫu thiết kế độc đ&aacute;o bắt mắt, thậm ch&iacute; c&ograve;n bắt kịp nhiều tr&agrave;o lưu xu hướng đặc biệt l&agrave; phong c&aacute;ch H&agrave;n Quốc. <br />Do đ&oacute;, việc t&igrave;m hiểu tất tần tật về &aacute;o thun tay lỡ nam/nữ l&agrave; cần thiết gi&uacute;p bạn lu&ocirc;n cập nhật những mẫu thiết kế mới nhất. Điều n&agrave;y sẽ gi&uacute;p bạn c&oacute; nhiều sự lựa chọn mới mẻ v&agrave; đa dạng phong c&aacute;ch thời trang của bạn.</p><p>Vậy &aacute;o thun tay lỡ l&agrave; g&igrave;?<br />- L&agrave; loại &aacute;o ph&ocirc;ng c&oacute; chiều d&agrave;i tay &aacute;o d&agrave;i hơn so với &aacute;o thun nam ngắn tay, thường l&agrave; d&agrave;i đến khuỷu tay hoặc qua khuỷu tay. <br />- Kiểu &aacute;o ph&ocirc;ng tay lỡ n&agrave;y thường xuất hiện ở những thiết kế &aacute;o thun unisex oversize rộng r&atilde;i, tho&aacute;ng m&aacute;t. <br />- Loại &aacute;o n&agrave;y &ldquo;kh&oacute; t&iacute;nh&rdquo; hơn &aacute;o thun nam nữ ngắn tay, nếu biết c&aacute;ch mix đồ, bạn sẽ trở n&ecirc;n thật c&aacute; t&iacute;nh với phong c&aacute;ch thời trang đậm chất H&agrave;n Quốc, nhưng nếu phối đồ kh&ocirc;ng tốt tr&ocirc;ng bạn như đang &ldquo;lọt thỏm&rdquo; trong chiếc &aacute;o thun tay lỡ.</p><p>Đặc điểm nổi bật của &aacute;o thun tay lỡ Unisex form rộng:<br />- L&agrave; item kh&ocirc;ng thể thiếu trong tủ đồ v&igrave; sự thoải m&aacute;i, dễ chịu, lại rất dễ phối đồ.<br />- &Aacute;o thun unisex th&iacute;ch hợp với cả nam v&agrave; nữ. Mặc l&agrave;m &aacute;o thun cặp, &aacute;o nh&oacute;m rất ph&ugrave; hợp.<br />- &Aacute;o thun form rộng dễ d&agrave;ng phối đồ, thời trang phong c&aacute;ch H&agrave;n Quốc.</p><p>Kh&aacute;ch h&agrave;ng c&oacute; thể an t&acirc;m khi mua h&agrave;ng tại Yinxx - Thời trang Unisex:<br />+ Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT LIỆU cũng như H&Igrave;NH ẢNH (đ&uacute;ng với những g&igrave; được n&ecirc;u bật trong phần m&ocirc; tả sản phẩm).<br />+ Gi&aacute; th&agrave;nh thấp nhất thị trường v&agrave; được bảo h&agrave;nh theo quy định với từng sản phẩm, được đổi trả h&agrave;ng lỗi trong v&ograve;ng 14 ng&agrave;y kể từ khi mua h&agrave;ng.</p><p>#ao #thun #phong #tay #lo #form #rong #unisex #nam #nu #freesize #oversize #aothun #aophong #taylo #formrong #hanquoc #yinxx</p>',
      },
      {
        images: [
          '2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
          '71ff840e-80bd-4d01-b997-f409392c3901.jpg',
          '9fb54b27-bb8d-415c-bb41-72a113f33fb5.jpg',
          '2741ba1d-844f-4b6d-baa8-8ebe41a4d5af.jpg',
          '63a231e8-aa62-4b0a-a7c7-9d327181ae0a.jpg',
          '050e6792-e9bb-4093-b198-3864eddffa3f.jpg',
          '92a099c0-b9b7-4d37-b234-ee319868bfe4.jpg',
          '23d8c0fb-8d30-4438-a973-3908a89db968.jpg',
          '4553c8a6-dfb8-4323-97b9-bf17cac384a4.jpg',
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 100000,
        quantity: 23565,
        sold: 3800,
        view: 964,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun tay lỡ unisex Yinxx, áo phông form rộng ATL187',
        category: '65684d88787ee9ec575a315a',
        image: '2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
        description:
          '<p>TH&Ocirc;NG TIN SẢN PHẨM: <br />- T&ecirc;n sản phẩm: &Aacute;o thun form rộng tay lỡ Unisex<br />- Xuất sứ: Việt Nam <br />- Chất liệu: 35% Cotton, 60% Polyester, 5% Spandex<br />- D&agrave;y dặn, mềm mịn, co gi&atilde;n 4 chiều, kh&ocirc;ng x&ugrave;, kh&ocirc;ng nhăn, kh&ocirc;ng h&uacute;t bụi bẩn.<br />- Size &aacute;o: FREESIZE form rộng chuẩn TAY LỠ UNISEX cực đẹp.<br />- Chiều d&agrave;i &aacute;o: 72cm<br />- Chiều rộng &aacute;o: 55cm<br />- Chiều d&agrave;i tay &aacute;o: 20cm<br />- Từ 50-65KG (mặc rộng thoải m&aacute;i) <br />- Từ 66-75KG (mặc rộng vừa).</p><p>Ng&agrave;y n&agrave;y, &aacute;o thun tay lỡ Unisex form rộng đang ng&agrave;y c&agrave;ng trở n&ecirc;n phổ biến v&agrave; đa dạng với c&aacute;c mẫu thiết kế độc đ&aacute;o bắt mắt, thậm ch&iacute; c&ograve;n bắt kịp nhiều tr&agrave;o lưu xu hướng đặc biệt l&agrave; phong c&aacute;ch H&agrave;n Quốc. <br />Do đ&oacute;, việc t&igrave;m hiểu tất tần tật về &aacute;o thun tay lỡ nam/nữ l&agrave; cần thiết gi&uacute;p bạn lu&ocirc;n cập nhật những mẫu thiết kế mới nhất. Điều n&agrave;y sẽ gi&uacute;p bạn c&oacute; nhiều sự lựa chọn mới mẻ v&agrave; đa dạng phong c&aacute;ch thời trang của bạn.</p><p>Vậy &aacute;o thun tay lỡ l&agrave; g&igrave;?<br />- L&agrave; loại &aacute;o ph&ocirc;ng c&oacute; chiều d&agrave;i tay &aacute;o d&agrave;i hơn so với &aacute;o thun nam ngắn tay, thường l&agrave; d&agrave;i đến khuỷu tay hoặc qua khuỷu tay. <br />- Kiểu &aacute;o ph&ocirc;ng tay lỡ n&agrave;y thường xuất hiện ở những thiết kế &aacute;o thun unisex oversize rộng r&atilde;i, tho&aacute;ng m&aacute;t. <br />- Loại &aacute;o n&agrave;y &ldquo;kh&oacute; t&iacute;nh&rdquo; hơn &aacute;o thun nam nữ ngắn tay, nếu biết c&aacute;ch mix đồ, bạn sẽ trở n&ecirc;n thật c&aacute; t&iacute;nh với phong c&aacute;ch thời trang đậm chất H&agrave;n Quốc, nhưng nếu phối đồ kh&ocirc;ng tốt tr&ocirc;ng bạn như đang &ldquo;lọt thỏm&rdquo; trong chiếc &aacute;o thun tay lỡ.</p><p>Đặc điểm nổi bật của &aacute;o thun tay lỡ Unisex form rộng:<br />- L&agrave; item kh&ocirc;ng thể thiếu trong tủ đồ v&igrave; sự thoải m&aacute;i, dễ chịu, lại rất dễ phối đồ.<br />- &Aacute;o thun unisex th&iacute;ch hợp với cả nam v&agrave; nữ. Mặc l&agrave;m &aacute;o thun cặp, &aacute;o nh&oacute;m rất ph&ugrave; hợp.<br />- &Aacute;o thun form rộng dễ d&agrave;ng phối đồ, thời trang phong c&aacute;ch H&agrave;n Quốc.</p><p>Kh&aacute;ch h&agrave;ng c&oacute; thể an t&acirc;m khi mua h&agrave;ng tại Yinxx - Thời trang Unisex:<br />+ Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT LIỆU cũng như H&Igrave;NH ẢNH (đ&uacute;ng với những g&igrave; được n&ecirc;u bật trong phần m&ocirc; tả sản phẩm).<br />+ Gi&aacute; th&agrave;nh thấp nhất thị trường v&agrave; được bảo h&agrave;nh theo quy định với từng sản phẩm, được đổi trả h&agrave;ng lỗi trong v&ograve;ng 14 ng&agrave;y kể từ khi mua h&agrave;ng.</p><p>#ao #thun #phong #tay #lo #form #rong #unisex #nam #nu #freesize #oversize #aothun #aophong #taylo #formrong #hanquoc #yinxx</p>',
      },
      {
        images: [
          'c6258617-02d0-427d-951c-52132ba4b48b.jpg',
          '275d1158-c2c0-431b-b583-4b607da53939.jpg',
          'ff62f6e4-5849-492e-bfc3-e5f9cd557158.jpg',
          '86c7c3da-ce7f-4c82-b6ad-f452dab3f730.jpg',
          'a6752b48-e4c1-458b-9ff7-ce1a5c05f436.jpg',
          'd9268de5-3297-421c-9b65-a59487af644f.jpg',
          '9b109e68-34a3-4cd4-ba44-9d6260dd8189.jpg',
          '1736d4ac-1a45-4ba5-8a3a-c8a9d0805f56.jpg',
          '266ebd5d-b809-4e81-8cb0-7cc8ba6f50e9.jpg',
        ],
        price: 78000,
        rating: 4.8,
        price_before_discount: 150000,
        quantity: 8623,
        sold: 4900,
        view: 454,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun bò sữa tay lỡ, form rộng Unisex ATLBO',
        category: '65684d88787ee9ec575a315a',
        image: 'c6258617-02d0-427d-951c-52132ba4b48b.jpg',
        description:
          '<p>TH&Ocirc;NG TIN SẢN PHẨM: <br />- T&ecirc;n sản phẩm: &Aacute;o thun b&ograve; sữa form rộng tay lỡ Unisex<br />- Xuất sứ: Việt Nam <br />- Chất liệu: cotton D&Agrave;Y MỀM MỊN M&Aacute;T kh&ocirc;ng x&ugrave; l&ocirc;ng. Form &aacute;o rộng chuẩn TAY LỠ UNISEX cực đẹp.<br />- Size &aacute;o: FREESIZE form rộng<br />- Chiều d&agrave;i &aacute;o: 72cm<br />- Chiều rộng &aacute;o: 55cm<br />- Chiều d&agrave;i tay &aacute;o: 20cm<br />- Từ 50-65KG (mặc rộng thoải m&aacute;i) <br />- Từ 66-75KG (mặc rộng vừa).</p><p>Ng&agrave;y n&agrave;y, &aacute;o thun tay lỡ Unisex form rộng đang ng&agrave;y c&agrave;ng trở n&ecirc;n phổ biến v&agrave; đa dạng với c&aacute;c mẫu thiết kế độc đ&aacute;o bắt mắt, thậm ch&iacute; c&ograve;n bắt kịp nhiều tr&agrave;o lưu xu hướng đặc biệt l&agrave; phong c&aacute;ch H&agrave;n Quốc. <br />Do đ&oacute;, việc t&igrave;m hiểu tất tần tật về &aacute;o thun tay lỡ nam/nữ l&agrave; cần thiết gi&uacute;p bạn lu&ocirc;n cập nhật những mẫu thiết kế mới nhất. Điều n&agrave;y sẽ gi&uacute;p bạn c&oacute; nhiều sự lựa chọn mới mẻ v&agrave; đa dạng phong c&aacute;ch thời trang của bạn.</p><p><br />Kh&aacute;ch h&agrave;ng c&oacute; thể an t&acirc;m khi mua h&agrave;ng tại Yinxx - Thời trang Unisex:<br />+ Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT LIỆU cũng như H&Igrave;NH ẢNH (đ&uacute;ng với những g&igrave; được n&ecirc;u bật trong phần m&ocirc; tả sản phẩm).<br />+ Gi&aacute; th&agrave;nh thấp nhất thị trường v&agrave; được bảo h&agrave;nh theo quy định với từng sản phẩm, được đổi trả h&agrave;ng lỗi trong v&ograve;ng 14 ng&agrave;y kể từ khi mua h&agrave;ng.</p><p>#bosua #aothunbosua #ao #thun #phong #tay #lo #form #rong #unisex #nam #nu #freesize #oversize #aothun #aophong #taylo #formrong #yinxx</p>',
      },
    ]);
  }

  async clearCache() {
    const keys: string[] = await this.cacheManager.store.keys();
    keys.forEach((key) => {
      if (key.startsWith(GET_POSTS_CACHE_KEY)) {
        this.cacheManager.del(key);
      }
    });
  }

  /**
   * Lấy ra danh sách các bài viết có trong cache
   * @param skip
   * @param limit
   * @param startId
   */
  async findAll(query?: QueryParse) {
    const filters: FilterQuery<ProductionDocument> = {};
    const { hits, pagination } = await this.postClientQuery.findForQuery(
      query,
      {
        populate: [
          // { path: 'author', select: 'email lastName firstName -_id' }, // exclude password
          { path: 'category' }, //"populate" returning the data of the author along with the post.
          // { path: 'series' },
        ],
        queryMongoose: filters,
        omit: ['title', '__v', 'createdAt', 'comments'],
      },
    );
    // const results = await response;
    // const count = await this.productionModel.find(filters).countDocuments();
    return { result: hits, pagination };
  }

  async findOne(id: string) {
    const post = await this.productionModel.findById(id);
    // .populate([
    //   { path: 'author', select: 'email lastName firstName -_id' }, // exclude password
    // ]);
    if (!post) {
      this.logger.warn('Tried to access a post that does not exist');
      throw new PostNotFoundException(id);
    }
    // post.id = post._id.toString();
    return post;
  }

  async create(postData: PostDto, author: User) {
    const createdPost = new this.productionModel({
      ...postData,
      author,
    });
    await createdPost.populate(['categories']); // query include execPopulate method show data categories and series
    const newPost = await createdPost.save();
    // hide elastic search
    // this.postsSearchService.indexPost(newPost);
    // await this.clearCache();
    return newPost;
  }

  async update(id: string, postData: UpdatePostDto, author: User) {
    // put do this
    // .findByIdAndUpdate(id, postData)
    // .setOptions({ overwrite: true, new: true })
    const post = await this.productionModel
      //update partial
      .findOneAndUpdate({ _id: id, author }, postData, {
        new: true,
      })
      .populate('author')
      .populate('categories')
      .populate('series');
    if (!post) {
      throw new NotFoundException();
    }
    // if (post) {
    //   await this.postsSearchService.update(post);
    //   return post;
    // }
    // await this.clearCache();
    return post;
  }
  // async delete(postId: string, author: User) {
  //   const result = await this.productionModel.findOneAndDelete({
  //     _id: postId,
  //     author,
  //   });
  //   if (!result) {
  //     throw new NotFoundException();
  //   }
  //   // await this.clearCache();
  //   return result.id;
  // }
  async deleteMany(
    ids: string[],
    session: mongoose.ClientSession | null = null,
  ) {
    // await this.clearCache();
    return this.productionModel.deleteMany({ _id: ids }).session(session);
  }
}

export default ProductionService;
