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
        <h1>Recent Activity</h1>
        <button className='btn'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer grid'>

        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Hieu</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 mins ago
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Hieu</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 mins ago
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Hieu</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 mins ago
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Hieu</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 mins ago
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer Image'/>
          <div className='customerDetails'>
            <span className='name'>Hieu</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>
            2 mins ago
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity