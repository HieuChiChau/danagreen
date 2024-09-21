import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddEvent from './pages/AddEvent/AddEvent'
import AddVoucher from './pages/AddVoucher/AddVoucher'
import ListUsers from './pages/ListUsers/ListUsers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {

  // const url = 'https://food-delivery-dd5u.onrender.com'

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/addevent' element={<AddEvent  />} />
          <Route path='/addvoucher' element={<AddVoucher  />} />
          <Route path='/listusers' element={<ListUsers  />} />
        </Routes>
      </div>
    </div>
  )
}

export default App