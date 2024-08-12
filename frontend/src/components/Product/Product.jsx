import React from 'react'
import './Product.css'
import bin_1 from '../../assets/bin-1.png'
import bin_2 from '../../assets/bin-2.png'
import bin_3 from '../../assets/bin-3.png'
import bin_4 from '../../assets/bin-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Product = () => {
  return (
    <div className='product'>
        <div className='bin'>
            <img src={bin_1} alt=''/>
            <img src={bin_2} alt=''/>
            <img src={bin_3} alt=''/>
            <img src={bin_4} alt=''/>
        </div>
        <button className='btn dark-btn'>Xem thêm<img src={white_arrow} alt=''/></button>
    </div>
  )
}

export default Product