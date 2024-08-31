import React, { useState, useEffect } from 'react';
import './Ranking.css';
import { useNavigate } from 'react-router-dom';
import RankingAPI from '../../../../api/ranking';
import UserAPI from '../../../../api/user';

const Ranking = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recordsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data = await RankingAPI.getRanking();
        setUsers(data);
      } catch (error) {
        setError('Error fetching ranking data');
      }
    };

    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const data = await UserAPI.getProfile(token);
        setCurrentUser(data);
      } catch (error) {
        setError('Error fetching user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (currentUser && users.length) {
      // Sắp xếp người dùng theo điểm số giảm dần
      const sortedUsers = [...users].sort((a, b) => b.score - a.score);
      // Tính toán vị trí của người dùng hiện tại trong danh sách đã sắp xếp
      const rank = sortedUsers.findIndex(user => user.username === currentUser.username);
      setCurrentUserRank(rank !== -1 ? rank + 1 : 'Not ranked'); // Cộng 1 để làm cho thứ hạng bắt đầu từ 1
    }
  }, [currentUser, users]);

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const currentRecords = users.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="leaderboard">
      <h2>Bảng Xếp Hạng</h2>
      <table>
        <thead>
          <tr>
            <th>Hạng</th>
            <th>Tên</th>
            <th>Khu vực</th>
            <th>Điểm</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user, index) => (
            <tr key={user._id}>
              <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
              <td>{user.username}</td>
              <td>{user.profile.address}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentUser && (
        <div className="user-ranking">
          <h3>Thứ Hạng Của Bạn</h3>
          <table>
            <tbody>
              <tr>
                <td>{currentUserRank}</td>
                <td>{currentUser.username}</td>
                <td>{currentUser.profile.address}</td>
                <td>{currentUser.score}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
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
