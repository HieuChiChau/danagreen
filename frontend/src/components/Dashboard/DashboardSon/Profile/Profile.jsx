import React from 'react'
import './Profile.css'
import user from '../../../../assets/user-profile.png'
import { useNavigate } from 'react-router-dom';
const Profile = () => {

  const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    };

  return (
    <div className='profile-container'> 
      <h2 className='form-title'>user</h2>
      <div className='social-login'>
        <button className='social-button'>
          <img src={user} alt='User' className='social-icon'/>
        </button>
      </div>

      <p className='separator'><span>Information</span></p>

      <form action='#' className='profilee-form'>
        <div className='input-wrapper'>
          <input type='username' value='Chau Chi Hieu'/>
          <i className="material-symbols-rounded">person</i>
        </div>
        <div className='input-wrapper'>
          <input type='username' value='0989505100'/>
          <i className="material-symbols-rounded">call</i>
        </div>
        <div className='input-wrapper'>
          <input type='username' value='08-07-2003'/>
          <i className="material-symbols-rounded">calendar_month</i>
        </div>
        <div className='input-wrapper'>
          <input type='points' value='1280'/>
          <i className="material-symbols-rounded">emoji_events</i>
        </div>
        <div className='input-wrapper'>
          <input type='username' value='Da Nang'/>
          <i className="material-symbols-rounded">apartment</i>        
        </div>
        <button className='button'>Save</button>
        <button className='button' onClick={handleBackClick}>Back</button>
      </form>
    </div>
  )
}

export default Profile