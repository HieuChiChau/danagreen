import React from 'react'
import './Dashboard.css'
import SideBar from './SideBar Section/SideBar'
import Body from './Body Section/Body'
const App = () => {
  return (
    <div className='containers'>
      <SideBar/>
      <Body/>
    </div>
  )
}

export default App