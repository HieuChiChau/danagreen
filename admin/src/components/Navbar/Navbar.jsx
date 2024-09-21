import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoDANA.jpg'
import profile from '../../assets/plantAvatar.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt='' />
            <img className='profile' src={profile} alt='' />
        </div>
    )
}

export default Navbar