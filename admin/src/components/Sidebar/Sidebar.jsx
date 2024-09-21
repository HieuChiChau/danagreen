import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/addevent' className='sidebar-option'>
                    <img src={assets.add_icon} alt='' />
                    <p>Add Event</p>
                </NavLink>
                <NavLink to='/addvoucher' className='sidebar-option'>
                    <img src={assets.order_icon} alt='' />
                    <p>Add Voucher</p>
                </NavLink>
                <NavLink to='/listusers' className='sidebar-option'>
                    <img src={assets.order_icon} alt='' />
                    <p>List Users</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar