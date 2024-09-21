import React, { useState } from 'react'
import './AddEvent.css'
import { assets } from '../../assets/assets'
import EventAPI from '../../api/event'
import { toast } from 'react-toastify'

const AddEvent = () => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: '',
        introduce: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
        rules: '',
        requirements: '',
        howToScore: '',
        awards: '',
        note: '',
        code: '',
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        // Thêm dữ liệu vào FormData
        for (const key in data) {
            formData.append(key, data[key]);
        }
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await EventAPI.addEvent(formData);
            if (response.success) {
                setData({
                    title: '',
                    introduce: '',
                    startTime: '',
                    endTime: '',
                    location: '',
                    description: '',
                    rules: '',
                    requirements: '',
                    howToScore: '',
                    awards: '',
                    note: '',
                    code: '',
                });
                setImage(null);
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error('Lỗi khi thêm sự kiện: ' + error.message);
        }
    };

    return (
        <div className='add-event'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Hình ảnh</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
                    </label>
                    <input
                        onChange={(event) => setImage(event.target.files[0])}
                        type='file'
                        id='image'
                        hidden
                        
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Tiêu đề</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.title}
                        type='text'
                        name='title'
                        placeholder='Tiêu đề sự kiện'
                        
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Giới thiệu</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.introduce}
                        type='text'
                        name='introduce'
                        placeholder='Giới thiệu sự kiện'
                        
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Thời gian bắt đầu</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.startTime}
                        type='datetime-local'
                        name='startTime'
                        
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Thời gian kết thúc</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.endTime}
                        type='datetime-local'
                        name='endTime'
                        
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Địa điểm</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.location}
                        type='text'
                        name='location'
                        placeholder='Địa điểm diễn ra sự kiện'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Mô tả</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name='description'
                        rows='6'
                        placeholder='Mô tả sự kiện'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Thể lệ</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.rules}
                        name='rules'
                        rows='3'
                        placeholder='Thể lệ sự kiện'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Yêu cầu</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.requirements}
                        name='requirements'
                        rows='3'
                        placeholder='Yêu cầu sự kiện'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Cách thức tính giải</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.howToScore}
                        name='howToScore'
                        rows='5'
                        placeholder='Cách thức tính giải'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Giải thưởng</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.awards}
                        name='awards'
                        rows='4'
                        placeholder='Giải thưởng'
                        
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Lưu ý</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.note}
                        name='note'
                        rows='2'
                        placeholder='Lưu ý'
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Mã Code</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.code}
                        type='text'
                        name='code'
                        placeholder='Mã tham gia'
                    />
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    );
}

export default AddEvent