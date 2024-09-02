import React, { useState, useEffect } from 'react';
import './History.css';
import { useNavigate } from 'react-router-dom';
import HistoryAPI from '../../../../api/history';
import { format, parseISO } from 'date-fns';

const History = () => {
  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(history.length / recordsPerPage);

  const currentRecords = history.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const data = await HistoryAPI.getHistory(token);

        const updatedData = data.map(item => {
          const score = (item.trash.metal * 7) + (item.trash.plastic * 4) + (item.trash.paper * 1);
          return { ...item, trash: { ...item.trash, score } };
        });

        setHistory(updatedData);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const datePart = date.toLocaleDateString();
    const timePart = date.toLocaleTimeString();
    return { datePart, timePart };
  };

  return (
    <div className="trash-history-container">
      <h2>Lịch Sử Vứt Rác</h2>
      <table className="trash-history-table">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Thời Gian</th>
            <th>Điểm</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item, index) => {
            const { datePart, timePart } = formatDate(item.trash.date);
            return (
              <tr key={index} onClick={() => handleItemClick(item)}>
                <td>{datePart}</td>
                <td>{timePart}</td>
                <td>{item.trash.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selectedItem && (
        <div className="trash-history-details">
          <h3>Chi Tiết</h3>
          <p><strong>Ngày:</strong> {format(parseISO(selectedItem.trash.date), 'dd/MM/yyyy')}</p>
          <p><strong>Thời gian:</strong> {format(parseISO(selectedItem.trash.date), 'HH:mm:ss')}</p>
          <p><strong>Giấy:</strong> {selectedItem.trash.paper}</p>
          <p><strong>Kim loại:</strong> {selectedItem.trash.metal}</p>
          <p><strong>Nhựa:</strong> {selectedItem.trash.plastic}</p>
          <p><strong>Điểm:</strong> {selectedItem.trash.score}</p>
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

      <button className="button-backkk" onClick={() => navigate('/dashboard')}>
        Back
      </button>
    </div>
  );
};

export default History;
