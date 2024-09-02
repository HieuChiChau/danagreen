import React, { useState } from 'react'
import './Helper.css'
import { useNavigate } from 'react-router-dom';
import SupportAPI from '../../../../api/support';
import { toast } from 'react-toastify';

const Helper = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  const issues = [
    'Lỗi hiển thị trên trang',
    'Không thể đăng nhập',
    'Không thể chỉnh sửa thông tin',
    'Không thể chỉnh sửa mật khẩu',
    'Tốc độ trang web chậm',
    'Không thể quét QR',
    'Lỗi trong quá trình tích điểm',
    'Lỗi bảo mật',
    'Khác'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedIssue) {
      toast.error('Vui lòng chọn một lỗi.');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('authToken');
      await SupportAPI.reportIssue(token, selectedIssue, details);
      toast.success('Báo cáo lỗi đã được gửi thành công!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Có lỗi xảy ra khi gửi báo cáo.');
    }
  };

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

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Đang gửi...' : 'Gửi báo cáo'}
        </button>

        <button onClick={() => navigate('/dashboard')} className="button-backkkk">Trở lại</button>
      </form>
    </div>
  );
}

export default Helper;
