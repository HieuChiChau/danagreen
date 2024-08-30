import React, { useState } from 'react';
import './Ranking.css';
import { useNavigate } from 'react-router-dom';

const Ranking = () => {
  const users = [
    { rank: 1, name: 'User 1', score: 1000 },
    { rank: 2, name: 'User 2', score: 1000 },
    { rank: 3, name: 'User 3', score: 800 },
    { rank: 4, name: 'User 4', score: 700 },
    { rank: 5, name: 'User 5', score: 600 },
    { rank: 6, name: 'User 6', score: 500 },
    { rank: 7, name: 'User 7', score: 400 },
    { rank: 8, name: 'User 2', score: 900 },
    { rank: 9, name: 'User 3', score: 800 },
    { rank: 10, name: 'User 4', score: 700 },
    { rank: 11, name: 'User 5', score: 600 },
    { rank: 12, name: 'User 3', score: 800 },
    { rank: 13, name: 'User 4', score: 700 },
    { rank: 14, name: 'User 5', score: 600 },
    { rank: 15, name: 'User 6', score: 500 },
    { rank: 16, name: 'User 7', score: 400 },
    { rank: 17, name: 'User 8', score: 300 },
    { rank: 18, name: 'User 9', score: 200 },
    { rank: 19, name: 'User 10', score: 100 },
    { rank: 20, name: 'User 1', score: 1000 },
    { rank: 21, name: 'User 2', score: 900 },
    { rank: 22, name: 'User 8', score: 300 },
    { rank: 23, name: 'User 9', score: 200 },
    { rank: 24, name: 'User 10', score: 100 },
    { rank: 25, name: 'User 1', score: 1000 },
    { rank: 26, name: 'User 2', score: 900 },
    { rank: 27, name: 'User 3', score: 800 },
    { rank: 28, name: 'User 4', score: 700 },
    { rank: 29, name: 'User 5', score: 600 },
    { rank: 30, name: 'User 6', score: 500 },
    { rank: 31, name: 'User 7', score: 400 },
    { rank: 32, name: 'User 6', score: 500 },
    { rank: 33, name: 'User 7', score: 400 },
    { rank: 34, name: 'User 8', score: 300 },
    { rank: 35, name: 'User 9', score: 200 },
    { rank: 36, name: 'User 10', score: 100 },
    { rank: 37, name: 'User 1', score: 1000 },
    { rank: 38, name: 'User 2', score: 900 },
    { rank: 39, name: 'User 8', score: 300 },
    { rank: 40, name: 'User 9', score: 200 },
    { rank: 41, name: 'User 10', score: 100 },
  ];

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const currentRecords = users.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



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
        <tbody>
          {currentRecords.map(user => (
            <tr key={user.rank}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="bakk-container">
        <button className='bakkkkk' onClick={() => navigate('/dashboard')}>Trở Lại</button>
      </div>
    </div>
  );
}

export default Ranking;
