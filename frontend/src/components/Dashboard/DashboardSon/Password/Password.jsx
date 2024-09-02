import React, { useState } from 'react'
import './Password.css'
import User from '../../../../api/user'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Password = () => {

  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Xác nhận mật khẩu không hợp lệ');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      await User.updatePassword(token, { oldPassword: currentPassword, newPassword });
      toast.success('Đổi mật khẩu thành công');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Đổi mật khẩu thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className='profile-container'>
      <h2 className='form-title'>Đổi mật khẩu</h2>
      <form onSubmit={handleUpdatePassword} className='profilee-form'>
        <div className='input-pass'>
          <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Số điện thoại' />
          <i className="material-symbols-rounded">call</i>
        </div>
        <div className='input-pass'>
          <input type='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder='Mật khẩu hiện tại' />
          <i className="material-symbols-rounded">Passkey</i>
        </div>
        <div className='input-pass'>
          <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Mật khẩu mới' />
          <i className="material-symbols-rounded">Lock</i>
        </div>
        <div className='input-pass'>
          <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Nhập lại mật khẩu' />
          <i className="material-symbols-rounded">Lock_Clock</i>
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button className='button' type='submit'>Cập nhật</button>
        <button className='button' onClick={() => navigate('/dashboard')}>Quay lại</button>
      </form>
    </div>
  )
}

export default Password