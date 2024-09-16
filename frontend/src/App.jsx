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
import Helper from './components/Dashboard/DashboardSon/Helper/Helper'
import Password from './components/Dashboard/DashboardSon/Password/Password'
import History from './components/Dashboard/DashboardSon/History/History'
import Voucher from './components/Dashboard/DashboardSon/Voucher/Voucher'
import MyVoucher from './components/Dashboard/DashboardSon/Voucher/MyVoucher'
import Instruction from './components/Dashboard/DashboardSon/Instruction/Instruction'
import EventDetail from './components/Dashboard/DashboardSon/EventDetail/EventDetail'
const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar />
            <Hero />
            <div className='container'>
              <Title subTitle='Đại diện thương hiệu của chúng tôi' title='Các influencer' />
              <Programs />
              <Title subTitle='Về sản phẩm của chúng tôi' title='Nâng cao ý thức vứt rác' />
              <About setPlayState={setPlayState} />
              <Title subTitle='Thùng rác thông minh DANAGreen' title='Hình ảnh sản phẩm' />
              <Product />
              <Title subTitle='Trải nghiệm' title='Nhận xét về DANAGreen?' />
              <Testimonials />
              <Title subTitle='Đăng nhập/ Đăng ký' title='Tham gia cùng chúng tôi' />
              <LoginSignup />
              <Title subTitle='Góp ý' title='Liên hệ với chúng tôi' />
              <Contact />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </div>
        } />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/events' element={<Events />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/qrcode' element={<ShowQR />} />
        <Route path='/helper' element={<Helper />} />
        <Route path='/password' element={<Password />} />
        <Route path='/history' element={<History />} />
        <Route path='/voucher' element={<Voucher />} />
        <Route path='/myvoucher' element={<MyVoucher />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/events/:id' element={<EventDetail />} />
      </Routes>
    </Router>
  )
}

export default App

