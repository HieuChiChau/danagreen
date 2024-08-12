import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>Về sản phẩm của chúng tôi</h3>
            <h2>Nâng cao ý thức vứt rác và phân loại rác của người dùng</h2>
            <p>Sản phẩm được các chuyên gia DUT nghiên cứu kỹ lưỡng </p>
            <p>Thùng rác được tích hợp hệ thống AI tự nhân diện rác thải và phân loại chúng vào các thùng chứa đã được định sẵn</p>
            <p>Sau khi vứt rác, sẽ có mã QR cho người dùng tích điểm để đổi các giải thưởng hoặc voucher</p>
        </div>
    </div>
  )
}

export default About