import React, { useEffect, useState } from 'react';
import './Profile.css';
import user from '../../../../assets/plantAvatar.jpg';
import { useNavigate } from 'react-router-dom';
import User from '../../../../api/user';
import { toast } from 'react-toastify';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [hobby, setHobby] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      console.log('>>>> Check token: ' + token);
      try {
        const data = await User.getProfile(token);
        setProfile(data);
        setUsername(data.username);
        setPhone(data.profile.phone || '');
        setBirthDate(data.profile.birthDate ? new Date(data.profile.birthDate).toISOString().split('T')[0] : '');
        setHobby(data.profile.hobby || '');
        setAddress(data.profile.address || '');
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Lỗi khi tải thông tin hồ sơ.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await User.updateProfile(token, { username, phone, birthDate, hobby, address });
      toast.success('Cập nhật hồ sơ thành công!');
      navigate('/dashboard')
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Lỗi khi cập nhật hồ sơ.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile data found.</div>;
  }

  return (
    <div className='profile-container'>
      <h2 className='form-title'>{profile.username}</h2>
      <div className='social-login'>
        <button className='social-button'>
          <img src={user} alt='User' className='social-icon' />
        </button>
      </div>

      <p className='separator'><span>Thông tin cá nhân</span></p>

      <form onSubmit={handleUpdate} className='profilee-form'>
        <div className='input-wrapper'>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
          <i className="material-symbols-rounded">person</i>
        </div>
        <div className='input-wrapper'>
          <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <i className="material-symbols-rounded">call</i>
        </div>
        <div className='input-wrapper'>
          <input type='date' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          <i className="material-symbols-rounded">calendar_month</i>
        </div>
        <div className='input-wrapper'>
          <input type='text' value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder='Sở thích' />
          <i className="material-symbols-rounded">emoji_events</i>
        </div>
        <div className='input-wrapper'>
          <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
          <i className="material-symbols-rounded">apartment</i>
        </div>
        <button className='button' type='submit'>Cập nhật</button>
        <button className='button' onClick={() => navigate('/dashboard')}>Quay lại</button>
      </form>
    </div>
  );
}

export default Profile;
