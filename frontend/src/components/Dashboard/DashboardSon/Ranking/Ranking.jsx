import React from 'react'
import './Ranking.css'
import { useNavigate } from 'react-router-dom'
const Ranking = () => {
  const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    };
  const users = [
    { rank: 1, name: 'User 1', score: 1000 },
    { rank: 2, name: 'User 2', score: 900 },
    { rank: 3, name: 'User 3', score: 800 },
    { rank: 4, name: 'User 4', score: 700 },
    { rank: 5, name: 'User 5', score: 600 },
    { rank: 6, name: 'User 6', score: 500 },
    { rank: 7, name: 'User 7', score: 400 },
    { rank: 8, name: 'User 8', score: 300 },
    { rank: 9, name: 'User 9', score: 200 },
    { rank: 10, name: 'User 10', score: 100 },
  ];
  return (
    <div className="leaderboard">
      <h2>Bảng Xếp Hạng</h2>
      <table>
        <thead>
          <tr>
            <th>Hạng</th>
            <th>Tên</th>
            <th>Điểm</th>
          </tr>
        </thead>
        <tbody className='rank-real'>
          {users.slice(0, 10).map(user => (
            <tr key={user.rank}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
        <button className='button' onClick={handleBackClick}>Trở Lại</button>
      </table>
    </div>
  );
}

export default Ranking