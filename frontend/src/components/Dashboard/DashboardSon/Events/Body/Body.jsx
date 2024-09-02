import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Body.css'
import imggif from '../../../../../assets/event.webp'
import img1 from '../../../../../assets/event1.jpg'
import img2 from '../../../../../assets/event2.jpg'
import img3 from '../../../../../assets/event3.jpg'
import img4 from '../../../../../assets/event4.jpg'
import img5 from '../../../../../assets/event5.jpg'
import img6 from '../../../../../assets/event6.jpg'
import real1 from '../../../../../assets/instruction2_1.png'
import real2 from '../../../../../assets/instruction2_2.png'
import real3 from '../../../../../assets/instruction2_3.png'

import { CiLocationOn } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";

const Data = [
    {
        id: 1,
        imgSrc: real1,
        destTitle: 'VUG Running - Hưởng ứng Chương trình Sinh viên với biển, đảo Tổ quốc năm 2024',
        location: 'Đà Nẵng',
        grade: 'Chạy',
        fees: '',
        description: "Nhằm hưởng ứng Chương trình “Sinh viên với biển, đảo Tổ Quốc” năm 2024, Trung ương Hội Sinh viên Việt Nam cùng Trung tâm Hỗ trợ và Phát triển Sinh viên Việt Nam tổ chức khởi động Bộ môn VUG Running."
    },
    {
        id: 2,
        imgSrc: real2,
        destTitle: 'CUỘC THI "YOUR SƠN TRÀ - YOUR STORY"',
        location: 'Yên Bái',
        grade: 'Môi rường',
        fees: 'Video',
        description: "Cuộc thi 'Your Sơn Trà - Your Story' nằm trong khuôn khổ dự án “Bảo tồn hệ sinh thái rừng, biển và các loài nguy cấp của bán đảo Sơn Trà, thành phố Đà Nẵng”được tài trợ bởi Quỹ Bảo tồn động thực vật hoang dã Việt Nam với mục đích giúp cộng đồng hiểu, chung tay bảo tồn hệ sinh thái Sơn Trà cho sự phát triển bền vững!"
    },
    {
        id: 3,
        imgSrc: real3,
        destTitle: 'Thử thách Niên Khóa Xanh: Một thay đổi, đơn giản thôi!',
        location: 'Đà Nẵng',
        grade: 'Môi Trường',
        fees: 'Vật Tư',
        description: "Thử thách Niên Khóa Xanh: Một thay đổi, đơn giản thôi! Các bạn trẻ ơi, các bạn đã sẵn sàng để bắt đầu Niên Khóa Xanh chưa? Hãy cùng chúng mình khám phá Thử thách Niên Khóa Xanh nhé!"
    },
    {
        id: 4,
        imgSrc: img1,
        destTitle: 'Áo Ấm Cho Em',
        location: 'Đà Nẵng',
        grade: 'Quyên Góp',
        fees: 'Áo Quần',
        description: "Dự án 'Áo ấm cho em' được thực hiện bởi những bạn trẻ. Các thành viên quyên góp quần áo ấm, vật phẩm thiết yếu, chung tay sưởi ấm, giúp đỡ những em nhỏ kém may mắn, lan tỏa thông điệp 'yêu thương trao đi là yêu thương còn mãi'."
    },
    {
        id: 5,
        imgSrc: img2,
        destTitle: 'Góp Gạch Xây Trường',
        location: 'Quảng Nam',
        grade: 'Quyên Góp',
        fees: 'Kinh Phí',
        description: "Thực hiện Chương trình, hằng năm Ban Thường vụ Hội Nông dân huyện đã xây dựng kế hoạch và triển khai cuộc vận động “Góp gạch xây trường cho em” tới 33 cơ sở hội, mỗi hội viên tiết kiệm với số tiền từ 3.000đ/năm tương đương 2 viên gạch không nung."
    },
    {
        id: 6,
        imgSrc: img3,
        destTitle: 'Trung Thu Cho Em',
        location: 'Đà Nẵng',
        grade: 'Quyên Góp',
        fees: 'Kinh Phí',
        description: "Hòa chung không khí vui Tết Trung thu của cả nước, tối 27/9, Câu lạc bộ khởi nghiệp trường đại học Kinh Tế tổ chức chương trình “Trung thu cho em” chăm lo các cháu thiếu nhi có hoàn cảnh khó khăn tại khu nhà trọ miễn phí thuộc quận Ngũ Hành Sơn, thành phố Đà Nẵng."
    },
    {
        id: 7,
        imgSrc: img4,
        destTitle: 'Trồng Cây Bảo vệ Môi Trường',
        location: 'Đà Nẵng',
        grade: 'Trồng Cây',
        fees: 'Cây Trồng',
        description: "Nhận thấy tầm quan trọng của cây xanh, Trường Đại học Kinh Tế đã có những hoạt động tích cực khuyến khích sinh viên tham gia bảo vệ môi trường. Điển hình là chiến dịch Xuân tình nguyện của Trường Đại học Kinh Tế đã được khởi động với nhiều hoạt động ý nghĩa, thiết thực."
    },
    {
        id: 8,
        imgSrc: img5,
        destTitle: 'Quyên Góp Sách Giáo Khoa Cho Trẻ Em Vùng Cao',
        location: 'Lai Châu',
        grade: 'Quyên Góp',
        fees: 'Sách Vở',
        description: "Sách vở được huy động và quyên góp từ nhiều nguồn sau đó được chuyển tới các em học sinh tiểu học và trung học xã Huổi Luông, huyện Phong Thổ. Ở vùng cao xa xôi, cuộc sống của đồng bào dân tộc nơi đây còn gặp nhiều khó khăn nên các em học sinh còn nhiều thiếu thốn, trong đó có sách vở."
    },
    {
        id: 9,
        imgSrc: img6,
        destTitle: 'Tết Ấm Vùng Cao',
        location: 'Yên Bái',
        grade: 'Quyên Góp',
        fees: 'Vật Tư',
        description: "Thấu hiểu nỗi lo này, với tinh thần “lá lành đùm lá rách”, mỗi dịp Tết đến, Xuân về, CODEDECO cùng với khách hàng phát động chiến dịch để đóng góp một chút tấm lòng nhỏ bé để phần nào giúp những người có hoàn cảnh khó khăn có một cái Tết vui vẻ, ấm áp hơn."
    },
]
const Body = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    // Tính tổng số trang dựa trên số lượng phần tử trong Data
    const totalPages = Math.ceil(Data.length / recordsPerPage);

    // Lấy các phần tử của trang hiện tại
    const currentRecords = Data.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <section className='home'>
                <div className='overlay'></div>
                <img src={imggif} alt=''></img>

                <div className='homeContent Containerr'>
                    <div className='textDiv'>
                        <span className='smallText'>
                            DANAGreen
                        </span>
                        <h1 className='homeTitle'>
                            SỰ KIỆN
                        </h1>
                    </div>

                    <div className='cardDiv gridd'>
                        <div className='destinationInput'>
                            <label htmlFor='city'>Hãy Tham Gia Cùng Chúng Tôi</label>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main containerr section'>
                <div className='secTitle'>
                    <h3 className='title'>Sự Kiện Gần Đây</h3>
                </div>
                <div className='secContent gridd'>
                    {currentRecords.length > 0 ? (
                        currentRecords.map((item) => {
                            const { id, imgSrc, destTitle, location, grade, fees, description } = item;
                            return (
                                <div key={id} className='singleDestination'>
                                    <div className='imageDiv'>
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>
                                    <div className='cardInfo'>
                                        <h4 className='desTitile'>{destTitle}</h4>
                                        <span className='continent flexx'>
                                            <CiLocationOn className='icon' />
                                            <span className='name'>{location}</span>
                                        </span>
                                        <div className='fees flexx'>
                                            <div className='grade'>
                                                <span>{grade}<small> +1</small></span>
                                            </div>
                                            <div className='price'>
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>
                                        <div className='desc'>
                                            <p>{description}</p>
                                        </div>
                                        <button className='btnn flexx'>THAM GIA <BiCommentDetail className='icon' /></button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Không có sự kiện nào để hiển thị.</p>
                    )}
                </div>
            </section>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button className='btnn back' onClick={() => navigate('/dashboard')}><p><TiArrowBackOutline className='icon-back' />Trở Lại</p></button>
        </>
    );
};

export default Body;