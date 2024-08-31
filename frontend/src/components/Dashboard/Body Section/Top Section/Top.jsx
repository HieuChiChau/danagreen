import React from 'react'
import './Top.css'
import { useNavigate } from 'react-router-dom';

//Import Icons ===>
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'

//Import Images=====>
import img from '../../../../assets/user.jpg'
import imggif from '../../../../assets/main_db.webp'
import img_trs from '../../../../assets/bin-transparent.png'

const Top = () => {
  const navigate = useNavigate()
  const handleImageClick = () => {
    navigate('/profile'); // Chuyển hướng đến /dashboard/profile
  };
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Chào mừng đến với DANAGreen!</h1>
          <p>Xin chào HieuChau, rất vui được gặp lại!</p>
        </div>

        <div className='searchbar flex'>
          <input type='text' placeholder='Tìm kiếm ...' />
          <BiSearchAlt className='icon' />
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircle className='icon' />
          <IoNotificationsOutline className='icon' />
          <div className='adminImage'>
            <img src={img} alt='' onClick={handleImageClick} />
          </div>
        </div>
      </div>

      <div className='cardSection flex'>

        <div className='rightCard flex'>
          <h1>DANaGreen: Giải pháp cho một Hành tinh Xanh</h1>
          <p>DANaGreen sẽ thay đổi cách quản lý rác thải thông qua công nghệ!</p>

          <div className='buttons flex'>
            <button className='btn'>Quét Mã</button>
            <button className='btn transparent'>Xếp Hạng</button>
          </div>

          <div className='videoDiv'>
            <img src={imggif} alt='' />
          </div>
        </div>

        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>Sự kiện của tôi</h1>

              <div className='flex'>
                <span>
                  Hôm nay <br /> <small>2 sự kiện</small>
                </span>
                <span>
                  Tháng này <br /> <small>20 sự kiện</small>
                </span>
              </div>
              <span className='flex link'>
                Xem tất cả <BsArrowRightShort className='icon' />
              </span>

            </div>

            <div className='imgDiv'>
              <img src={img_trs} alt='Image Name' />
            </div>

            <div className='sideBarCard'>
              <BsQuestionCircle className='icon' />
              <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle2'></div>

                <h3>Hướng dẫn sử dụng</h3>
                <p>Nếu bạn chưa biết cách sử dụng DANAGreen. Hãy đọc ngay hướng dẫn sử dụng.</p>
                <button className='btn'>Đọc hướng dẫn</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top