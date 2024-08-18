import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Product from './components/Product/Product'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import LoginSignup from './components/LoginSignup/LoginSignup'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Dashboard/DashboardSon/Profile/Profile'
import Ranking from './components/Dashboard/DashboardSon/Ranking/Ranking'
import ShowQR from './components/Dashboard/DashboardSon/QR/ShowQR'
import Events from './components/Dashboard/DashboardSon/Events/Events'
const App = () => {
  
  const[playState, setPlayState] = useState(false)
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar/>
            <Hero/>
            <div className='container'>
              <Title subTitle='Đại lý thương hiệu của chúng tôi' title='Các Idol'/>
              <Programs/>
              <About setPlayState={setPlayState}/>
              <Title subTitle='Thùng rác thông minh DANAGreen' title='Hình ảnh sản phẩm'/>
              <Product/>
              <Title subTitle='Trải nghiệm' title='Người dùng nói gì về DANAGreen?'/>
              <Testimonials/>
              <Title subTitle='Đăng nhập/ Đăng ký' title='Tham gia cùng chúng tôi'/>
              <LoginSignup/>
              <Title subTitle='Góp ý' title='Liên hệ với chúng tôi'/>
              <Contact/>
              <Footer/>
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>
          </div>
        }/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/ranking' element={<Ranking/>}/>
        <Route path='/qrcode' element={<ShowQR/>}/>
      </Routes>
    </Router>
  )
}

export default App

