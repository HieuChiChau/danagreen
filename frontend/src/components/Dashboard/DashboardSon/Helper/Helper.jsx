import React, {useState} from 'react'
import './Helper.css'
import { useNavigate } from 'react-router-dom';

const Helper = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [details, setDetails] = useState('');

  const issues = [
    'Lỗi hiển thị trên trang',
    'Không thể đăng nhập',
    'Tốc độ tải chậm',
    'Lỗi CSS trên thiết bị di động',
    'Liên kết không hoạt động',
    'Lỗi JavaScript',
    'Phản hồi không đầy đủ',
    'Vấn đề bảo mật',
    'Lỗi trong quy trình đặt hàng',
    'Khác'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedIssue) {
      alert('Vui lòng chọn một lỗi.');
      return;
    }
    console.log('Lỗi đã chọn:', selectedIssue);
    console.log('Chi tiết lỗi:', details);
  };
  const navigate = useNavigate()
    const handleBackClick = () => {
      navigate('/dashboard');
    }

  return (
    <div className="report-issue-containe">
      <h1>Gửi báo cáo lỗi</h1>
      <form onSubmit={handleSubmit}>
        <div className="radio-list">
          {issues.map((issue, index) => (
            <div key={index} className="radio-item">
              <input
                type="radio"
                id={`issue${index}`}
                name="issue"
                value={issue}
                onChange={(e) => setSelectedIssue(e.target.value)}
              />
              <label htmlFor={`issue${index}`}>{issue}</label>
            </div>
          ))}
        </div>

        <div className="details-wrapper">
          <label htmlFor="details">Chi tiết lỗi:</label>
          <textarea 
            id="details" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            rows="4" 
            placeholder="Mô tả chi tiết về lỗi bạn gặp phải."
          />
        </div>

        <button type="submit" className="submit-button">Gửi báo cáo</button>
        <button onClick={handleBackClick} className="button-backkkk">Trở lại</button>
      </form>
    </div>
  );
}

export default Helper;
