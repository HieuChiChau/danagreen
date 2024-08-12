import React from 'react'
import './Listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

//Import Images=====>
import img1 from '../../../../assets/beer.png'
import img2 from '../../../../assets/glass.png'
import img3 from '../../../../assets/paper.png'
import img4 from '../../../../assets/recycle.png'
import user from '../../../../assets/user.jpg'
const Listing = () => {

  return (

    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img1} alt='Image Name'/>
          <h3>Beer</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt='Image Name'/>
          <h3>Glass</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={img3} alt='Image Name'/>
          <h3>Paper</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img4} alt='Image Name'/>
          <h3>Recycle</h3>
        </div>
      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
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
                14.556 Plant Sold <br/>
                <small>
                  21 Sellers <span className='date'>7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
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
                28.556 Plant Sold <br/>
                <small>
                  26 Sellers <span className='date'>31 days</span>
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