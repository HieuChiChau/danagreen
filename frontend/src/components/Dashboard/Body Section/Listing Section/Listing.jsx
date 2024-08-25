import React from 'react'
import './Listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

//Import Images=====>
import img1 from '../../../../assets/beer.png'
import img3 from '../../../../assets/paper.png'
import img4 from '../../../../assets/recycle.png'
import user from '../../../../assets/user.jpg'
const Listing = () => {

  return (

    <div className='listingSection'>
      <div className='heading flex'>
        <h1>Lịch sử của tôi</h1>
        <button className='btn flex'>
          Xem tất cả <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img1} alt='Image Name'/>
          <h3>Kim loại</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={img3} alt='Image Name'/>
          <h3>Giấy</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img4} alt='Image Name'/>
          <h3>Nhựa</h3>
        </div>
      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Người dùng</h3>
            <button className='btn flex'>
              Chi tiết <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
            </div>
            <div className='cardText'>
              <span>
                2.103 người <br/>
                <small>
                  17 ng mới<span className='date'>7 ngày</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Tích điểm</h3>
            <button className='btn flex'>
              Chi tiết <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
              <img src={user} alt='User Image'/>
            </div>
            <div className='cardText'>
              <span>
                398.746 điểm <br/>
                <small>
                  43.577 đ <span className='date'>7 ngày</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing