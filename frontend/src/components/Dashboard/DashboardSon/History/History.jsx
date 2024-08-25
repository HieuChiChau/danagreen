import React from 'react'
import './History.css'
import { useNavigate } from 'react-router-dom';

const History = () => {
    const history = [
        { item: 'Lon bia', date: '2024-08-20', time: '10:30 AM' },
        { item: 'Chai nước', date: '2024-08-22', time: '02:15 PM' },
        { item: 'Giấy', date: '2024-08-23', time: '11:45 AM' },
        // Add more records here
      ];
      const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    }
    
      return (
        <div className="trash-history-container">
          <h2>Trash Disposal History</h2>
          <table className="trash-history-table">
            <thead>
              <tr>
                <th>Rác</th>
                <th>Ngày</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {history.map((record, index) => (
                <tr key={index}>
                  <td>{record.item}</td>
                  <td>{record.date}</td>
                  <td>{record.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className='button-backkk' onClick={handleBackClick}>Back</button>
        </div>
      );
}

export default History