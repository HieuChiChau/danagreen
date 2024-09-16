import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventDetail.css';
import { format, parseISO, addHours } from 'date-fns';
import { useParams } from 'react-router-dom';
import { FcRules } from "react-icons/fc";
import { TbCalendarClock } from "react-icons/tb";
import { SiBasicattentiontoken } from "react-icons/si";
import { MdWork, MdOutlineCalculate } from "react-icons/md";
import { BsAward } from "react-icons/bs";

import EventAPI from '../../../../api/event';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            setMessage('Chưa có token. Vui lòng đăng nhập lại.');
            return;
        }

        // Kiểm tra mã sự kiện và mã tham gia
        if (!id || !code.trim()) {
            setMessage('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        try {
            const response = await EventAPI.joinEvent(token, id, code);
            if (response.success) {
                setMessage('Nhập đúng mã!');
            } else {
                setMessage('Mã không đúng!');
            }
        } catch (error) {
            console.error('Error joining event:', error);
            setMessage('Đã xảy ra lỗi khi tham gia sự kiện.');
        }
    };


    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const fetchedEvent = await EventAPI.getEventById(id);
                setEvent(fetchedEvent);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, [id]);

    if (!event) {
        return <p>Loading...</p>;
    }

    // Format thời gian
    const adjustedStartTime = addHours(parseISO(event.startTime), 7); // Thay đổi múi giờ nếu cần
    const adjustedEndTime = addHours(parseISO(event.endTime), 7);
    const formattedStartTime = format(adjustedStartTime, 'dd/MM/yyyy HH:mm');
    const formattedEndTime = format(adjustedEndTime, 'dd/MM/yyyy HH:mm');

    return (
        <div className='event-detail'>
            <h2>{event.title}</h2>
            <p>{event.introduce}</p>
            <h4>THÔNG TIN VỀ CUỘC THI:</h4>

            <h5><FcRules />{' '}THỂ LỆ:</h5>
            <p>{event.rules}</p>

            <h5><TbCalendarClock />{' '}THỜI GIAN:</h5>
            <p>Thời gian dự thi: <strong>{formattedStartTime}</strong></p>
            <p>Thời gian kết thúc: <strong>{formattedEndTime}</strong></p>

            <h5><MdWork />{' '}YÊU CẦU</h5>
            <p>{event.requirements}</p>

            <h5><MdOutlineCalculate />{' '}CÁCH THỨC TÍNH GIẢI: </h5>
            <p>{event.howToScore}</p>

            <h5><BsAward />{' '}GIẢI THƯỞNG: </h5>
            <p>{event.awards}</p>

            <h5><SiBasicattentiontoken />{' '}CHÚ Ý: </h5>

            <div className="code-section">
                <label htmlFor="code">Nhập mã:</label>
                <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={handleCodeChange}
                    placeholder="Nhập mã tham gia sự kiện"
                />
                <button className="submit-btn" onClick={handleSubmit}>Xác nhận mã</button>
            </div>
            <button className="back-btnnn" onClick={() => navigate('/events')}>Trở về</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EventDetail;
