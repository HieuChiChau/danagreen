import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Instruction.css'
import img1 from '../../../../assets/instruction2_1.png'
import img2 from '../../../../assets/instruction2_2.png'
import img3 from '../../../../assets/instruction2_3.png'
import rank1 from '../../../../assets/rank1.png'
import rank2 from '../../../../assets/rank2.png'
import rank3 from '../../../../assets/rank3.png'
import rank4 from '../../../../assets/rank4.png'
import rank5 from '../../../../assets/rank5.png'
import { FcRules } from "react-icons/fc";
import { TbCalendarClock } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { MdOutlineCalculate } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { PiCloverLight } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import { CiBookmarkPlus } from "react-icons/ci";
import { RxResume } from "react-icons/rx";
import { FiGift } from "react-icons/fi";
import { IoHeart } from "react-icons/io5";

const Instruction = () => {

    const navigate = useNavigate()

    return (
        <div className='instruction-wrapper'>
            <div className='instruction-container'>
                <h1>DaNaGreen</h1>
                <div className='part_one'>
                    <h2>I. Hướng dẫn tái sử dụng rác</h2>
                    <p>Tái sử dụng rác không chỉ giúp giảm lượng rác thải đổ vào môi trường mà còn tiết kiệm tài nguyên và năng lượng. Một số cách tái sử dụng rác một cách hiệu quả:</p>
                    <ul>
                        <li><strong>Giấy:</strong> Giấy báo, tạp chí, hộp carton, bao bì giấy... có thể tái chế thành giấy mới, làm đồ thủ công hoặc dùng để lót chuồng trại.</li>
                        <li><strong>Nhựa:</strong> Chai nhựa, túi nilon, hộp nhựa... có thể tái chế thành nhiều sản phẩm khác như áo, ghế, đồ chơi.</li>
                        <li><strong>Thủy tinh:</strong> Chai lọ thủy tinh có thể tái chế thành chai lọ mới, vật liệu xây dựng hoặc đồ trang trí.</li>
                        <li><strong>Kim loại:</strong> Lon nhôm, vỏ hộp sắt... có thể tái chế thành các sản phẩm kim loại mới.</li>
                    </ul>
                    <p>Chính bạn cũng có thể trở thành một cư dân văn minh bằng cách hành động bảo vệ môi trường. Bạn có thể đồng hành cùng dự án DaNa Green - Thùng rác thông minh bằng cách tìm thấy các thùng rác trong thành phố trên website tích điểm thưởng cho việc vứt rác đúng nơi quy định.</p>
                    <p>Hướng dẫn cách tích điểm và đổi quà tại website DaNa Green: (cập nhật sau khi web chạy)</p>
                </div>
                <div className='part-two'>
                    <h2>II. Sự kiện bảo vệ môi trường</h2>
                    <h3>1.  CUỘC THI "YOUR SƠN TRÀ - YOUR STORY"</h3>
                    <p>Cuộc thi "Your Sơn Trà - Your Story" nằm trong khuôn khổ dự án “Bảo tồn hệ sinh thái rừng, biển và các loài nguy cấp của bán đảo Sơn Trà, thành phố Đà Nẵng”được tài trợ bởi Quỹ Bảo tồn động thực vật hoang dã Việt Nam với mục đích giúp cộng đồng hiểu, chung tay bảo tồn hệ sinh thái Sơn Trà cho sự phát triển bền vững!</p>
                    <p>Những thước phim ngắn của bạn về Bán đảo Sơn Trà sẽ góp phần lan tỏa vẻ đẹp, giá trị từ rừng xuống biển và thông điệp bảo vệ thiên nhiên Sơn Trà đến cộng đồng.</p>
                    <img src={img1} alt='' />
                    <p>Hãy tham gia ngay, "Your Sơn Trà - Your Story" sẽ chờ đợi tác phẩm của bạn đến hết tháng 9/2024!
                        <br />---
                    </p>
                    <h4>THÔNG TIN VỀ CUỘC THI:</h4>

                    <h5><FcRules />{' '}THỂ LỆ:</h5>
                    <p><FaCheck />{' '}Bước 1: Sáng tạo video về thiên nhiên và những trải nghiệm tại Bán đảo Sơn Trà</p>
                    <p><FaCheck />{' '}Bước 2: Đăng tải công khai trên tường facebook cá nhân, kèm theo hashtag <span>#YourSonTraYourStoty #SonTraniemtuhao #GreenViet</span></p>
                    <p><FaCheck />{' '}Bước 3: Gửi thông tin về tác giả và link facebook đã đăng tải video dự thi cho BTC theo mẫu đính kèm ở phần bình luận</p>

                    <h5><TbCalendarClock />{' '}THỜI GIAN:</h5>
                    <p>Thời gian dự thi: <strong> 8/8 - 30/9/2024</strong></p>
                    <p>Thời gian công bố giải: <strong> 15/10/2024</strong></p>

                    <h5><MdWork />{' '}YÊU CẦU</h5>
                    <p>Video có thời lượng từ 50s - 02 phút</p>
                    Các chủ đề video gồm:
                    <br />- Mô tả vẻ đẹp, giá trị thiên nhiên của rừng - biển Sơn Trà
                    <br />- Sự đa dạng động thực vật và sinh cảnh tại Bán đảo Sơn Trà
                    <br />- Đời sống của Voọc chà vá chân nâu
                    <br />- Trải nghiệm và cảm nhận khi đến Sơn Trà
                    Và bất cứ điều gì liên quan đến Bán đảo Sơn Trà - niềm tự hào của người Đà Nẵng...

                    <h5><MdOutlineCalculate />{' '}CÁCH THỨC TÍNH GIẢI: </h5>
                    <p>Căn cứ vào số điểm trung bình cộng của [ ĐIỂM TƯƠNG TÁC ] và [ ĐIỂM SỐ BTC ], cụ thể:
                        <br /><strong>Điểm tương tác:</strong>
                        <br />01 view = 01 điểm; 01 like = 01 điểm; 01 share = 02 điểm
                        <br /><strong>Điểm bình chọn của BTC (thang 100đ):</strong>
                        <br />- Chất lượng video: 40 điểm
                        <br />- Nội dung ấn tượng, mô tả đúng chủ đề: 40 điểm
                        <br />- Tính sáng tạo: 20 điểm
                        <br /><strong>* Các bài đăng sử dụng tương tác ảo hoặc xảy ra các tranh chấp về quyền tác giả sẽ bị loại, BTC là người có quyết định cuối cùng.</strong>
                    </p>

                    <h5><BsAward />{' '}GIẢI THƯỞNG: </h5>
                    <img src={rank1} alt='' className='xiuuu' />
                    <p><strong>01 Giải Nhất:</strong>
                        <br />-  01 ngày trải nghiệm thiên nhiên và quay phim tại VQG Bạch Mã cùng nhà làm phim của Viet Endangered Narratives
                        <br />- Bay Dù lượn ở Sơn Trà với Fly Danang
                        <br />- 01 Vourcher quà tặng khác trị giá 1.000.000đ
                        <br />- Ngoài ra video đạt giải nhất sẽ được đăng tải trên trang Danang FantastiCity
                    </p>
                    <img src={rank2} alt='' className='xiuuu' />
                    <p><strong>02 Giải Nhì:</strong>
                        -  01 ngày trải nghiệm thiên nhiên và quay phim tại VQG Bạch Mã cùng nhà làm phim của Viet Endangered Narratives
                        - 01 Vourcher quà tặng trị giá 700.000đ
                    </p>
                    <img src={rank3} alt='' className='xiuuu' />
                    <p><strong>02 Giải Ba:</strong>
                        - 01 Vourcher quà tặng trị giá 500.000đ
                        - 01 Vourcher chèo Sup dành cho 2 người ở bãi biển Sơn Trà
                    </p>
                    <img src={rank4} alt='' className='xiuuu' />
                    <p><strong>02 Giải khuyến khích</strong>
                        - 01 Vourcher quà tặng 300.000đ
                        - 01 Vourcher chèo Sup dành cho 2 người
                    </p>
                    <img src={rank5} alt='' className='xiuuu' />
                    <p><strong>01 Giải ấn tượng:</strong> Dành cho video có lượt tương tác cao nhất
                        - 01 Vourcher quà tặng 700.000đ
                        - 01 Vourcher chèo Sup dành cho 2 người
                    </p>
                    <p>Ngoài ra, người chơi tham gia đạt giải sẽ được BTC gửi tặng một cuốn sách "Sơn Trà - Kho Báu Thiên Nhiên", nơi lưu giữ những kiến thức lịch sử, khoa học và vẻ đẹp của thiên nhiên Sơn Trà.</p>
                    <p>Hãy tham gia ngay để chung tay lan tỏa vẻ đẹp, giá trị của Bán đảo Sơn Trà, vì một Sơn Trà mãi xanh bạn nhé!</p>
                    <br /><br />
                    <h3>2. VUG Running - Hưởng ứng Chương trình Sinh viên với biển, đảo Tổ quốc năm 2024</h3>
                    <p>Nhằm hưởng ứng Chương trình “Sinh viên với biển, đảo Tổ Quốc” năm 2024, Trung ương Hội Sinh viên Việt Nam cùng Trung tâm Hỗ trợ và Phát triển Sinh viên Việt Nam tổ chức khởi động Bộ môn VUG Running.</p>
                    <img src={img2} alt='' />
                    <br />
                    <h5>Cách thức tham gia</h5>
                    <p>Sinh viên đăng ký tham gia đăng ký tại ứng dụng vRace - Nền tảng thể thao trực tuyến do FPT Online phát triển trên điện thoại di động
                        <br />Link hướng dẫn đăng ký: <a href='https://bit.ly/vug_runing'>https://bit.ly/vug_runing</a>
                        <br />Các vận động viên sau khi đăng ký tài khoản thành công sẽ tham gia sự kiện bằng cách bấm nút “Đăng ký ngay” vào giải chạy trong mục “Giải đấu” tìm kiếm “Giải chạy bộ VUG Running - Giải Thể thao Sinh viên Việt Nam lần thứ X” để bắt đầu tham gia giải chạy.
                    </p>
                    <h5>Thời gian</h5>
                    <p><IoIosTimer />{' '}Đăng ký dự thi: Từ ngày 10/8/2024, vận động viên cài đặt ứng dụng và đăng ký tham gia dự thi.
                        <br /><IoIosTimer />{' '}Thời gian dự thi: Từ ngày 10/8/2024 đến ngày 10/9/2024, vận động viên khởi động ứng dụng và tham gia dự thi.
                    </p>
                    <br /><br />
                    <h3>3. Thử thách Niên Khóa Xanh: Một thay đổi, đơn giản thôi!</h3>
                    <img src={img3} alt='' />
                    <p><strong><PiCloverLight /></strong>{' '}Thử thách Niên Khóa Xanh: Một thay đổi, đơn giản thôi!{' '}<strong><PiCloverLight /></strong></p>
                    <p><FaRegFaceSmileBeam />{' '}Các bạn trẻ ơi, các bạn đã sẵn sàng để bắt đầu Niên Khóa Xanh chưa? Hãy cùng chúng mình khám phá Thử thách Niên Khóa Xanh nhé!</p>
                    <p><AiOutlineThunderbolt />{' '}Người tham dự có thể hoàn thành thử thách này chỉ với 3 bước đơn giản</p>
                    <br />
                    <strong><p><AiOutlineThunderbolt />{' '}Cách thức tham gia:</p></strong>
                    <p><TbCircleNumber1 />{' '}Thực hành tối thiểu 1 trong các thử thách của BTC và chụp ảnh minh chứng hành động xanh</p>
                    <p><TbCircleNumber2 />{' '}: Người tham dự đăng tải hình ảnh quá trình mình thực hiện thử thách lên mạng xã hội bằng 1 trong <strong>2 cách</strong> sau:
                        <br /><CiBookmarkPlus />{' '} Cách 1: Đăng trên trang Facebook cá nhân ở chế độ công khai kèm theo hashtag <span>#thehexanh #nienkhoaxanh</span> và suy nghĩ/chia sẻ của mình sau khi hoàn thành thử thách
                        <br /><CiBookmarkPlus />{' '} Cách 2: Sử dụng template Add yours (từ Story của Thế hệ Xanh) đăng lên story cá nhân ở chế độ công khai và tag tài khoản Facebook của Thế hệ Xanh
                    </p>
                    <p><TbCircleNumber3 />{' '}Xác nhận thông tin tham gia cuộc thi với BTC bằng cách nhấn vào đường link sau: <a href='bit.ly/NienKhoaXanh2024'>bit.ly/NienKhoaXanh2024</a></p>
                    <br />
                    <strong><p><AiOutlineThunderbolt />{' '}Bạn hãy lưu lại các mốc thời gian quan trọng để hoàn thành thử thách nè:</p></strong>
                    <p><TbCalendarClock />{' '} Thực hiện thử thách: Từ 20:00 ngày 17/08/2024 đến 23:59’ ngày 01/09/2024
                        <br />Trong đó:
                        <p>
                            - Tuần 1 (17 - 24/08/2024): Thử thách chủ đề Giảm rác
                            <br />- Tuần 2 (25/08 - 01/09/2024): Thử thách chủ đề Năng lượng xanh, di chuyển xanh
                        </p>
                    </p>
                    <p><RxResume />{' '} Tổng kết challenge: 03/09/2024</p>
                    <br />
                    <strong><p><AiOutlineThunderbolt />{' '}Giải thưởng bao gồm: </p></strong>
                    <p><FiGift />{' '}Giải Mầm Xanh Ấn Tượng (mỗi giải bao gồm 1 balo, 1 áo thun Thế Hệ Xanh, 1 cuốn sách Sống xanh rồi mới sống nhanh) dành cho những người có bài viết/story chia sẻ ấn tượng nhất do Thế hệ Xanh lựa chọn (Bài viết/Story cần đảm bảo một số yếu tố như tính chân thật, gần gũi; sự thay đổi để sống xanh hơn; tính truyền cảm hứng;…)</p>
                    <p><FiGift />{' '}3 Giải Mầm Xanh Lan Tỏa (mỗi giải bao gồm 1 balo, 1 bình nước, 1 túi vải) dành cho những người hoàn thành thử thách và có bài viết sở hữu lượt tương tác cao nhất tính theo lượt react</p>
                    <p><FiGift />{' '}3 Giải Mầm Xanh May Mắn (mỗi giải bao gồm 1 balo, 1 bình nước) dành cho những người tham gia thử thách và nằm trong danh sách những người may mắn ngẫu nhiên</p>
                    <p><FiGift />{' '}1 Giải Mầm Xanh Nhanh Tay (bao gồm 1 balo) dành cho người có nhiều hành động xanh nhất và điền form xác nhận với BTC trong thời gian sớm nhất.</p>
                    <br />
                    <strong><p><AiOutlineThunderbolt />{' '}Lưu ý:</p></strong>
                    <p>
                        - Người tham dự cần hoàn thành tối thiểu 1 thử thách để được xét trao giải thưởng.
                        <br />- Nếu người tham dự không thực hiện đầy đủ các bước tham gia thử thách thì sẽ được coi là câu trả lời không hợp lệ và không được xét trao giải.
                        <br />- Mỗi người tham dự chỉ được xét trao 1 giải thuộc phần Thử thách.
                        <br />- Lượt reaction từ các nick ảo, nick chơi minigame, nick clone được coi là không hợp lệ.
                        <br />- Các hình ảnh/nội dung sử dụng trí tuệ nhân tạo được coi là không hợp lệ.
                        <br />- Tài khoản Facebook hợp lệ là tài khoản thực và để ở chế độ Public (Công khai) để Ban tổ chức (BTC) có thể kiểm tra; tài khoản nhận được lượng tương tác thực tế từ bạn bè và người thân.
                        <br />- Người chơi phải đảm bảo hình ảnh và nội dung chia sẻ là của mình, không sao chép từ bất cứ nguồn nào, chưa từng được sử dụng ở bất kỳ đâu và dưới bất kỳ hình thức nào.
                        <br />- BTC sẽ được miễn trừ mọi trách nhiệm liên quan đến vi phạm bản quyền của hình ảnh dự thi.
                        <br />- Hình ảnh thắng giải có thể được BTC sử dụng vì mục đích phi lợi nhuận mà không phải trả thêm bất kỳ khoản phí nào.
                    </p>
                    <p><strong><IoHeart /></strong>Một thay đổi, đơn giản thôi!</p>
                </div>
                <button className='back-button' onClick={() => navigate('/dashboard')}>
                    Trở lại
                </button>
            </div>
        </div>
    )
}

export default Instruction