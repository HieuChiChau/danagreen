import React, { useEffect, useState } from 'react'
import './Activity.css'
import HistoryAPI from '../../../../api/history';
//Imported Images ======>
import img from '../../../../assets/plantAvatar.png'
//Imported Icons ===>
import { BsArrowRightShort } from 'react-icons/bs'

const Activity = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await HistoryAPI.getAllRecentActivities();
        setActivities(data);
        console.log('Dữ liệu từ API:', data);
      } catch (error) {
        setError('Không thể tải dữ liệu hoạt động gần đây');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  const calculateScore = (activity) => {
    if (!activity) return 0;
    return (activity.metal * 7) + (activity.plastic * 4) + (activity.paper * 1);
  };

  const timeAgo = (date) => {
    const now = new Date();
    const then = new Date(date);
    const diffInSeconds = Math.floor((now - then) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;

    if (diffInSeconds < secondsInMinute) {
      return `${diffInSeconds} giây trước`;
    } else if (diffInSeconds < secondsInHour) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return `${minutes} phút trước`;
    } else if (diffInSeconds < secondsInDay) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return `${hours} giờ trước`;
    } else {
      const days = Math.floor(diffInSeconds / secondsInDay);
      const hours = Math.floor((diffInSeconds % secondsInDay) / secondsInHour);
      const minutes = Math.floor((diffInSeconds % secondsInHour) / secondsInMinute);
      let timeString = `${days} ngày`;

      if (hours > 0) {
        timeString += ` ${hours} giờ`;
      }
      if (minutes > 0) {
        timeString += ` ${minutes} phút`;
      }

      timeString += ' trước';
      return timeString;
    }
  };

  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Gần đây</h1>
        <button className='btn'>
          Chi tiết
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className='secContainer grid'>
        {activities.slice(0, 6).map((activity, index) => {
          console.log(`Hoạt động ${index + 1}:`, activity); // Log từng hoạt động
          return (
            <div className='singleCustomer flex' key={index}>
              <img src={img} alt='Customer Image' />
              <div className='customerDetails'>
                <span className='name'>{activity.username || 'Người dùng không xác định'}</span>
                <small>Tích được {calculateScore(activity)} điểm</small>
              </div>
              <div className='duration'>
                {timeAgo(activity.date) || 'Chưa có dữ liệu'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activity