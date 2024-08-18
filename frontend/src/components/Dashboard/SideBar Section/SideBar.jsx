import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SideBar.css'

//Import Images====>
import logo from '../../../assets/logo1.png'

//Import icons
import { IoIosQrScanner, IoMdSpeedometer } from 'react-icons/io'
import { MdEventAvailable } from 'react-icons/md'
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from 'react-icons/bs'
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
const SideBar = () => {
  const navigate = useNavigate()
  const handleQR=()=>{
    navigate('/qrcode')
  }  
  const handleEvents=()=>{
    navigate('/events')
  }
  const handleRanking=()=>{
    navigate('/ranking')
  }   
  const handleInfo = () => {
    navigate('/profile'); // Chuyển hướng đến /dashboard/profile
  };
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Image Name'/>
        <h2>DANAGreen.</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          TÍNH NĂNG
        </h3>
        <ul className='menuLists grid'>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Trang Chủ
              </span>
            </a>
          </li>

          <li className='listItem' onClick={handleQR}>
            <a href='#' className='menuLink flex'>
              <IoIosQrScanner className='icon'/>
              <span className='smallText'>
                Quét QR
              </span>
            </a>
          </li>

          <li className='listItem' onClick={handleEvents}>
            <a href='#' className='menuLink flex'>
              <MdEventAvailable className='icon'/>
              <span className='smallText'>
                Sự Kiện
              </span>
            </a>
          </li>

          <li className='listItem' onClick={handleRanking}>
            <a href='#' className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className='smallText'>
                Xếp Hạng
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

          <li className='listItem' onClick={handleInfo}>
            <a href='#' className='menuLink flex'>
              <FaUserEdit className='icon'/>
              <span className='smallText'>
                Thông Tin
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <RiLockPasswordLine className='icon' />
              <span className='smallText'>
                Mật Khẩu
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <LuHelpingHand className='icon'/>
              <span className='smallText'>
                Hỗ Trợ
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className='smallText'>
                Lịch Sử
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className='sideBarCard'>
        <BsQuestionCircle className='icon'/>
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help Center</h3>
          <p>Having trouble in DANAGreen, please contact us from for more questions.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
    
  )
}

export default SideBar