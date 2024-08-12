import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom'

import AuthAPI from '../../api/auth'

const LoginSignup = () => {

    const [action, setAction] = useState('Login')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin=async()=>{
        try {
            const data = await AuthAPI.login(email, password)
            console.log('Login Successful: ', data)
            navigate('/dashboard')
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    const handleRegister=async()=>{
        try {
            const data = await AuthAPI.register(username, email, password)
            console.log('Register Successful: ', data)
            setAction('Login')
        } catch (error) {
            console.error('Register error:', error);
        }
    }

    return (
        <div className='loginsignup'>

            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action==='Login'?<div></div>:<div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Tên người dùng' required/>
                </div>}
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email' required/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Mật khẩu' required/>
                </div>
            </div>
            {action==='Sign up'?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
            
            <div className='submit-container'>
                <div className={action ==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign up</div>
                <div className={action === 'Sign up'?'submit gray':'submit'} onClick={action==='Login'?handleLogin:()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
  )
}

export default LoginSignup