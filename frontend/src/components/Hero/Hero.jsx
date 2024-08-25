import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Thùng rác thông minh</h1>
            <p>DanaGreen được trang bị hệ thống AI tân tiến, vứt rác có thưởng !!!</p>
            <button className='btn'>Xem thêm <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero