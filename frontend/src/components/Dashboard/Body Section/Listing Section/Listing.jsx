import React, { useState, useEffect } from 'react'
import './Listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import User from '../../../../api/user'
import History from '../../../../api/history'
//Import Images=====>
import img1 from '../../../../assets/metal.png'
import img2 from '../../../../assets/paper.png'
import img3 from '../../../../assets/plastic.png'
import userimg from '../../../../assets/plantAvatar.png'
const Listing = () => {

  const [users, setUsers] = useState([]);
  const [recentUsersCount, setRecentUsersCount] = useState(0);
  const [totalUsersCount, setTotalUsersCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [trashData, setTrashData] = useState([]);
  const [loadingTrashData, setLoadingTrashData] = useState(true);
  const [errorTrashData, setErrorTrashData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      console.log('>>>> Check token: ' + token);

      try {
        const data = await User.getUsers(token);
        console.log('>>>check users: ', data);

        if (Array.isArray(data)) {
          setUsers(data);
          setTotalUsersCount(data.length);

          // Tính số người dùng mới trong vòng 7 ngày qua
          const now = new Date();
          const sevenDaysAgo = new Date(now);
          sevenDaysAgo.setDate(now.getDate() - 7);

          const recentUsers = data.filter(user => new Date(user.createdAt) >= sevenDaysAgo);
          setRecentUsersCount(recentUsers.length);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
      }
    };

    const fetchTrashData = async () => {
      try {
        setLoadingTrashData(true);
        const data = await History.getAllTrashData();
        setTrashData(data);

        // Tính tổng số điểm trong vòng 7 ngày
        const now = new Date();
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(now.getDate() - 7);

        const recentTrashData = data.filter(item => new Date(item.trash.date) >= sevenDaysAgo);

        const totalPoints = recentTrashData.reduce((total, item) => {
          const { metal, plastic, paper } = item.trash;
          return total + (metal * 7) + (plastic * 4) + (paper * 1);
        }, 0);

        setTotalPoints(totalPoints);
      } catch (error) {
        setErrorTrashData('Không thể tải dữ liệu rác');
        console.error('Error fetching trash data:', error.message);
      } finally {
        setLoadingTrashData(false);
      }
    };

    fetchProfile();
    fetchTrashData();
  }, []);

  if (loadingTrashData) return <div>Đang tải dữ liệu rác...</div>;
  if (errorTrashData) return <div>{errorTrashData}</div>;

  return (

    <div className='listingSection'>
      <div className='heading flex'>
        <h1>Lịch sử</h1>
        <button className='btn flex' onClick={() => navigate('/history')}>
          Xem <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className='secContainer flex'>

        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img1} alt='Image Name' />
          <h3>Kim loại</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img2} alt='Image Name' />
          <h3>Giấy</h3>
        </div>
        <div className='singleItem'>
          <AiFillHeart className='icon' />
          <img src={img3} alt='Image Name' />
          <h3>Nhựa</h3>
        </div>
      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Cộng đồng</h3>
            <button className='btn flex'>
              Chi tiết <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
            </div>
            <div className='cardText'>
              <span>
                250 người <br />
                <small>
                  {recentUsersCount} người<span className='date'>7 ngày</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Điểm Dana</h3>
            <button className='btn flex'>
              Chi tiết <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
              <img src={userimg} alt='User Image' />
            </div>
            <div className='cardText'>
              <span>
                2622 điểm <br />
                <small>
                  {totalPoints} điểm <span className='date'>7 ngày</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing