import React, { useState, useEffect } from 'react'
import './Top.css'
import { useNavigate } from 'react-router-dom';
import User from '../../../../api/user'
import Event from '../../../../api/event'
//Import Icons ===>
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

//Import Images=====>
import img from '../../../../assets/plantAvatar.png'
import imggif from '../../../../assets/main_db.webp'
import img_trs from '../../../../assets/bin-transparent.png'

const Top = () => {
  const [username, setUsername] = useState('');
  const [eventCounts, setEventCounts] = useState({ today: 0, month: 0 });
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfileAndEvents = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        // Fetch user profile
        const data = await User.getProfile(token);
        setUsername(data.username);

        // Fetch event counts
        const counts = await Event.getEventCount(token);
        setEventCounts({
          today: counts.todayEventsCount,
          month: counts.monthEventsCount
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally handle error (e.g., display an alert or redirect)
      }
    };

    fetchProfileAndEvents();
  }, []);

  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Chào mừng đến với DANAGreen!</h1>
          <p>Xin chào <span>{username}</span>, rất vui được gặp lại!</p>
        </div>

        {/* <div className='searchbar flex'>
          <input type='text' placeholder='Tìm kiếm ...' />
          <BiSearchAlt className='icon' />
        </div> */}
        <div className='adminDiv flex'>
          <a href='https://www.instagram.com/danagreen.ins/'><FaInstagram className='icon' /></a>
          <a href='https://www.facebook.com/profile.php?id=61565393033018'><FaFacebook className='icon' /></a>
          <div className='adminImage'>
            <img src={img} alt='' onClick={() => navigate('/profile')} />
          </div>
        </div>
      </div>

      <div className='cardSection flex'>

        <div className='rightCard flex'>
          <h1>DANaGreen: Giải pháp cho một Hành tinh Xanh</h1>
          <p>DANaGreen sẽ thay đổi cách quản lý rác thải thông qua công nghệ!</p>

          <div className='buttons flex'>
            <button className='btn' onClick={() => navigate('/qrcode')}>Quét Mã</button>
            <button className='btn transparent' onClick={() => navigate('/ranking')}>Xếp Hạng</button>
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
                  Hôm nay <br /> <small>{eventCounts.today} sự kiện</small>
                </span>
                <span>
                  Tháng này <br /> <small>{eventCounts.month} sự kiện</small>
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
                <button className='btn' onClick={() => navigate('/instruction')}>Đọc hướng dẫn</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top