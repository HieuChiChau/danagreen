import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { FaCheck } from "react-icons/fa6";

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className='about-right'>
        <p><FaCheck /> Sản phẩm được các chuyên gia DUT nghiên cứu kỹ lưỡng </p>
        <p><FaCheck /> Thùng rác được tích hợp hệ thống AI tự nhân diện rác thải và phân loại chúng vào các thùng chứa đã được định sẵn</p>
        <p><FaCheck /> Sau khi vứt rác, sẽ có mã QR cho người dùng tích điểm để đổi các giải thưởng hoặc voucher</p>
      </div>
    </div>
  )
}

export default About