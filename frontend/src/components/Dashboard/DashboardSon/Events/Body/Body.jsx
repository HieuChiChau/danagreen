import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { format, parseISO, addHours } from 'date-fns';
import './Body.css'
import imggif from '../../../../../assets/event.webp'

import { CiLocationOn } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";

import EventAPI from '../../../../../api/event';

const Body = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents = await EventAPI.getEvents();
                setEvents(fetchedEvents); // Cập nhật state với dữ liệu từ API
                console.log('Check events: ', events)
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <section className='home'>
                <div className='overlay'></div>
                <img src={imggif} alt=''></img>

                <div className='homeContent Containerr'>
                    <div className='textDiv'>
                        <span className='smallText'>
                            DANAGreen
                        </span>
                        <h1 className='homeTitle'>
                            SỰ KIỆN
                        </h1>
                    </div>

                    <div className='cardDiv gridd'>
                        <div className='destinationInput'>
                            <label htmlFor='city'>Hãy Tham Gia Cùng Chúng Tôi</label>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main containerr section'>
                <div className='secTitle'>
                    <h3 className='title'>Sự Kiện Gần Đây</h3>
                </div>
                <div className='secContent gridd'>
                    {console.log('checkkkk:', events)}
                    {events.length > 0 ? (
                        events.map((item) => {
                            const { _id, image, title, location, startTime, endTime, description } = item;
                            console.log("check image:", image)
                            // Cộng thêm 7 giờ cho múi giờ Việt Nam
                            const adjustedStartTime = addHours(parseISO(startTime), 17);
                            const adjustedEndTime = addHours(parseISO(endTime), 17);

                            // Định dạng lại thời gian
                            const formattedStartTime = format(adjustedStartTime, 'dd/MM/yyyy');
                            const formattedEndTime = format(adjustedEndTime, 'dd/MM/yyyy');
                            const formattedStartTimeWithHour = format(adjustedStartTime, 'HH:mm');
                            const formattedEndTimeWithHour = format(adjustedEndTime, 'HH:mm');

                            return (
                                <div key={_id} className='singleDestination'>
                                    <div className='imageDiv'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className='cardInfo'>
                                        <h4 className='desTitile'>{title}</h4>
                                        <span className='continent flexx'>
                                            <CiLocationOn className='icon' />
                                            <span className='location'>{location}</span>
                                        </span>
                                        <div className='fees flexx'>
                                            <div className='time'>
                                                <span>{formattedStartTime}<small>{formattedStartTimeWithHour}</small></span>
                                            </div>
                                            <div className='time'>
                                                <span>{formattedEndTime}<small>{formattedEndTimeWithHour}</small></span>
                                            </div>
                                        </div>
                                        <div className='desc'>
                                            <p>{description}</p>
                                        </div>
                                        <button className='btnn flexx' onClick={() => navigate(`/events/${_id}`)}>THAM GIA <BiCommentDetail className='icon' /></button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Không có sự kiện nào để hiển thị.</p>
                    )}
                </div>
            </section>
            <button className='btnn back' onClick={() => navigate('/dashboard')}><p><TiArrowBackOutline className='icon-back' />Trở Lại</p></button>
        </>
    );
};

export default Body;