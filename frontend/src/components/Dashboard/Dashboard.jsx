import React from 'react'
import './Dashboard.css'
import SideBar from './SideBar Section/SideBar'
import Body from './Body Section/Body'
const Dashboard = () => {
  return (
    <div className='containers'>
      <SideBar/>
      <Body/>
    </div>
  )
}

export default Dashboard