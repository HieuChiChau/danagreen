import { useState } from 'react';
import React from 'react'
import './History.css'
import { useNavigate } from 'react-router-dom';

const History = () => {
  const history = [
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
    { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
    { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
    // Add more records here
  ];

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(history.length / recordsPerPage);

  const currentRecords = history.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="trash-history-container">
      <h2>Lịch Sử Vứt Rác</h2>
      <table className="trash-history-table">
        <thead>
          <tr>
            <th>Vứt những cái gì</th>
            <th>Ngày</th>
            <th>Giờ</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item, index) => (
            <tr key={item.id || index}>
              <td>{item.item}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
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

      <button className="button-backkk" onClick={() => navigate('/dashboard')}>
        Back
      </button>
    </div>
  );
};

export default History;