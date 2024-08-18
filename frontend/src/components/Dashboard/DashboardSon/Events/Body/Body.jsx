import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Body.css'
import video from '../../../../../assets/eventvid.mp4'
import img1 from '../../../../../assets/event1.jpg'
import img2 from '../../../../../assets/event2.jpg'
import img3 from '../../../../../assets/event3.jpg'
import img4 from '../../../../../assets/event4.jpg'
import img5 from '../../../../../assets/event5.jpg'
import img6 from '../../../../../assets/event6.jpg'

import { CiLocationOn } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";

const Data=[
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Áo Ấm Cho Em',
        location: 'Đà Nẵng',
        grade: 'Quyên Góp',
        fees: 'Áo Quần',
        description: "Dự án 'Áo ấm cho em' được thực hiện bởi những bạn trẻ. Các thành viên quyên góp quần áo ấm, vật phẩm thiết yếu, chung tay sưởi ấm, giúp đỡ những em nhỏ kém may mắn, lan tỏa thông điệp 'yêu thương trao đi là yêu thương còn mãi'."
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Góp Gạch Xây Trường',
        location: 'Quảng Nam',
        grade: 'Quyên Góp',
        fees: 'Kinh Phí',
        description: "Thực hiện Chương trình, hằng năm Ban Thường vụ Hội Nông dân huyện đã xây dựng kế hoạch và triển khai cuộc vận động “Góp gạch xây trường cho em” tới 33 cơ sở hội, mỗi hội viên tiết kiệm với số tiền từ 3.000đ/năm tương đương 2 viên gạch không nung."
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Trung Thu Cho Em',
        location: 'Đà Nẵng',
        grade: 'Quyên Góp',
        fees: 'Kinh Phí',
        description: "Hòa chung không khí vui Tết Trung thu của cả nước, tối 27/9, Câu lạc bộ khởi nghiệp trường đại học Kinh Tế tổ chức chương trình “Trung thu cho em” chăm lo các cháu thiếu nhi có hoàn cảnh khó khăn tại khu nhà trọ miễn phí thuộc quận Ngũ Hành Sơn, thành phố Đà Nẵng."
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Trồng Cây Bảo vệ Môi Trường',
        location: 'Đà Nẵng',
        grade: 'Trồng Cây',
        fees: 'Cây Trồng',
        description: "Nhận thấy tầm quan trọng của cây xanh, Trường Đại học Kinh Tế đã có những hoạt động tích cực khuyến khích sinh viên tham gia bảo vệ môi trường. Điển hình là chiến dịch Xuân tình nguyện của Trường Đại học Kinh Tế đã được khởi động với nhiều hoạt động ý nghĩa, thiết thực."
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Quyên Góp Sách Giáo Khoa Cho Trẻ Em Vùng Cao',
        location: 'Lai Châu',
        grade: 'Quyên Góp',
        fees: 'Sách Vở',
        description: "Sách vở được huy động và quyên góp từ nhiều nguồn sau đó được chuyển tới các em học sinh tiểu học và trung học xã Huổi Luông, huyện Phong Thổ. Ở vùng cao xa xôi, cuộc sống của đồng bào dân tộc nơi đây còn gặp nhiều khó khăn nên các em học sinh còn nhiều thiếu thốn, trong đó có sách vở."
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Tết Ấm Vùng Cao',
        location: 'Yên Bái',
        grade: 'Quyên Góp',
        fees: 'Vật Tư',
        description: "Thấu hiểu nỗi lo này, với tinh thần “lá lành đùm lá rách”, mỗi dịp Tết đến, Xuân về, CODEDECO cùng với khách hàng phát động chiến dịch để đóng góp một chút tấm lòng nhỏ bé để phần nào giúp những người có hoàn cảnh khó khăn có một cái Tết vui vẻ, ấm áp hơn."
    },
]
const Body = () => {
    const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    };
  return (

    <>
     {/* Thêm logo và header ở đây */}
        <section className='home'>
            <div className='overplay'></div>
            <video src={video} muted autoPlay loop type='video/mp4'></video>

            <div className='homeContent Containerr'>
                <div className='textDiv'>
                    <span className='smallText'>
                        DANAGreen
                    </span>
                    <h1 className='homeTitle'>
                        DANH SÁCH SỰ KIỆN
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
                {
                    Data.map((item)=>{
                        const { id, imgSrc, destTitle, location, grade, fees, description } = item;
                        return(
                            <div key={id} className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className='cardInfo'>
                                    <h4 className='desTitile'>{destTitle}</h4>
                                    <span className='continent flexx'>
                                        <CiLocationOn className='icon'/>
                                        <span className='name'>{location}</span>
                                    </span>
                                    <div className='fees flexx'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btnn flexx'>THAM GIA <BiCommentDetail className='icon'/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <button className='btnn back' onClick={handleBackClick}><p><TiArrowBackOutline  className='icon-back'/>Trở Lại</p></button>
    </>
  )
}

export default Body