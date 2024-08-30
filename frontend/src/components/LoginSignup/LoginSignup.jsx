import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom'
import gg from '../../assets/gg.png'
import fb from '../../assets/fb.png'
import AuthAPI from '../../api/auth' //Import API Class

const LoginSignup = () => {

    const [action, setAction] = useState('Login');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await AuthAPI.login(email, password);
            console.log('Login Successful: ', data);
            navigate('/dashboard'); // Navigate to dashboard on successful login
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    const handleRegister = async () => {
        try {
            const data = await AuthAPI.register(username, email, password);
            console.log('Register Successful: ', data);
            setAction('Login'); // Switch to login view after successful registration
        } catch (error) {
            console.error('Register error:', error);
        }
    }

    return (
        <div className='loginsignup'>

            <div className='header'>
                <div className='text'>
                    {action === 'Sign up' ? 'Đăng ký' : action === 'Login' ? 'Đăng nhập' : ''}
                </div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action === 'Login' ? <div className='option-login'>
                    <button className='login-button'>
                        <img src={gg} alt='Google' className='login-icon' />
                    </button>
                    <button className='login-button'>
                        <img src={fb} alt='Facebook' className='login-icon' />
                    </button>
                </div>
                    : <div className='input'>
                        <img src={user_icon} alt='' className='login-icon' />
                        <input
                            type='text'
                            placeholder='Tên người dùng'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>}
                <div className='input'>
                    <img src={email_icon} alt='' className='siuuuu' />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' className='siuuuu' />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            {action === 'Sign up' ? <div></div> : <div className='forgot-password'>Quên mật khẩu? <span>Nhấn tại đây!</span></div>}

            <div className='submit-container'>
                <div
                    className={action === 'Login' ? 'submit gray' : 'submit'}
                    onClick={action === 'Sign up' ? handleRegister : () => { setAction('Sign up') }}
                >
                    Đăng ký
                </div>
                <div
                    className={action === 'Sign up' ? 'submit gray' : 'submit'}
                    onClick={action === 'Login' ? handleLogin : () => { setAction('Login') }}
                >
                    Đăng nhập
                </div>
            </div>
        </div>
    )
}

export default LoginSignup