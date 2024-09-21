import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    const maxTranslateX = -((slider.current.children.length - 1) * 100); // Maximum translation
    if (tx > maxTranslateX) {
      setTx(tx - (100 / slider.current.children.length)); // Move one step
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + (100 / slider.current.children.length)); // Move one step
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider} style={{ transform: `translateX(${tx}%)`, transition: 'transform 0.5s ease' }}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='User 1' />
                <div>
                  <h3>Phan Thanh Bình</h3>
                  <span>Đà Nẵng</span>
                </div>
              </div>
              <p>Thùng rác thông minh thực sự rất tiện lợi! Nó giúp tôi phân loại rác dễ dàng mà không phải mất công suy nghĩ nhiều. Tôi còn được tích điểm thưởng mỗi khi bỏ rác đúng cách, điều này thực sự khuyến khích tôi tái chế nhiều hơn.</p>
            </div>
          </li>
          {/* <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='User 2' />
                <div>
                  <h3>Nguyễn Văn Hai</h3>
                  <span>Quảng Nam</span>
                </div>
              </div>
              <p>Cuộc đời tôi chưa thấy cái thùng rác nào xịn như này, tôi rất thích thùng rác này đặc biệt là tính năng thích điểm để đổi thưởng</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='User 3' />
                <div>
                  <h3>Trần Thị Ba</h3>
                  <span>Huế</span>
                </div>
              </div>
              <p>Từ khi có thùng rác này, học sinh của tôi tích cực vứt rác hơn hẳn, nhưng tôi thấy kích thước mỗi thùng hơi nhỏ, vì vậy nên rác bên phía lon nhanh đầy</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='User 4' />
                <div>
                  <h3>Mông Thị Bốn</h3>
                  <span>Quảng Trị</span>
                </div>
              </div>
              <p>Với giá thành cao nhưng thứ tôi nhận lại là một thùng rác tuyệt vời, tôi thích nó và nhân viên của tôi cũng thích nó, tôi kết hợp điểm từ thùng rác trong việc bầu chọn nhân viên xuất sắc nhất tháng</p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
