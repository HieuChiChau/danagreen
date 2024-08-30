import React from 'react'
import './Activity.css'

//Imported Images ======>
import img from '../../../../assets/user.jpg'
//Imported Icons ===>
import { BsArrowRightShort } from 'react-icons/bs'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Gần đây</h1>
        <button className='btn'>
          Chi tiết
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className='secContainer grid'>

        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>HieuChau</span>
            <small>Tích được 19 điểm</small>
          </div>
          <div className='duration'>
            2 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>TuanPhan123</span>
            <small>Tích được 7 điểm</small>
          </div>
          <div className='duration'>
            3 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>NhatTran2408</span>
            <small>Tích được 5 điểm</small>
          </div>
          <div className='duration'>
            3 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>HieuAdam</span>
            <small>Tích được 11 điểm</small>
          </div>
          <div className='duration'>
            4 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>TrinhTran</span>
            <small>Tích được 4 điểm</small>
          </div>
          <div className='duration'>
            5 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>MaiAnh</span>
            <small>Tích được 7 điểm</small>
          </div>
          <div className='duration'>
            5 phút trước
          </div>
        </div>


      </div>
    </div>
  )
}

export default Activity