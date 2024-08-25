import React from 'react'
import './Password.css'
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    }
  return (
    <div className='profile-container'> 
      <h2 className='form-title'>Đổi mật khẩu</h2>
      <form action='#' className='profilee-form'>
        <div className='input-pass'>
          <input type='phone' value='0989505100'/>
          <i className="material-symbols-rounded">call</i>
        </div>
        <div className='input-pass'>
          <input type='password' value='12345678'/>
          <i className="material-symbols-rounded">Passkey</i>
        </div>
        <div className='input-pass'>
          <input type='password' value='123123123'/>
          <i className="material-symbols-rounded">Lock</i>
        </div>
        <div className='input-pass'>
          <input type='password' value='123123123'/>
          <i className="material-symbols-rounded">Lock_Clock</i>        
        </div>
        <button className='button'>Save</button>
        <button className='button' onClick={handleBackClick}>Back</button>
      </form>
    </div>
  )
}

export default Password