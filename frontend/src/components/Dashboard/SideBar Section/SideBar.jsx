import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SideBar.css'

//Import Images====>
import logo from '../../../assets/dana_cut.png'

//Import icons
import { IoIosQrScanner, IoMdSpeedometer } from 'react-icons/io'
import { MdEventAvailable } from 'react-icons/md'
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from 'react-icons/bs'
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine, RiLogoutBoxLine } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

import UserAPI from '../../../api/user';

const SideBar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    UserAPI.logout()
    navigate('/')
  }

  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Image Name' />
        <h2>DANAGreen.</h2>
        <a href='https://www.instagram.com/danagreen.ins/'><FaInstagram className='icon' /></a>
        <a href='https://www.facebook.com/profile.php?id=61565393033018'><FaFacebook className='icon' /></a>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          TÍNH NĂNG
        </h3>
        <ul className='menuLists grid'>

          <li className='listItem'>
            <a className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>
                Trang Chủ
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/qrcode')}>
            <a className='menuLink flex'>
              <IoIosQrScanner className='icon' />
              <span className='smallText'>
                Quét QR
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/events')}>
            <a className='menuLink flex'>
              <MdEventAvailable className='icon' />
              <span className='smallText'>
                Sự Kiện
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/ranking')}>
            <a className='menuLink flex'>
              <BsTrophy className='icon' />
              <span className='smallText'>
                Xếp Hạng
              </span>
            </a>
          </li>
          <li className='listItem' onClick={() => navigate('/voucher')}>
            <a className='menuLink flex'>
              <GoGift className='icon' />
              <span className='smallText'>
                Voucher
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className='settingsDiv'>
        <h3 className='divTitle'>
          CÀI ĐẶT
        </h3>
        <ul className='menuLists grid'>

          <li className='listItem' onClick={() => navigate('/profile')}>
            <a href='#' className='menuLink flex'>
              <FaUserEdit className='icon' />
              <span className='smallText'>
                Thông Tin
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/password')}>
            <a href='#' className='menuLink flex'>
              <RiLockPasswordLine className='icon' />
              <span className='smallText'>
                Mật Khẩu
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/helper')}>
            <a href='#' className='menuLink flex'>
              <LuHelpingHand className='icon' />
              <span className='smallText'>
                Hỗ Trợ
              </span>
            </a>
          </li>

          <li className='listItem' onClick={() => navigate('/history')}>
            <a href='#' className='menuLink flex'>
              <BsCreditCard2Front className='icon' />
              <span className='smallText'>
                Lịch Sử
              </span>
            </a>
          </li>

          <li className='listItem' onClick={handleLogout}>
            <a href='#' className='menuLink flex'>
              <RiLogoutBoxLine className='icon' />
              <span className='smallText'>
                Đăng xuất
              </span>
            </a>
          </li>
        </ul>
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

  )
}

export default SideBar