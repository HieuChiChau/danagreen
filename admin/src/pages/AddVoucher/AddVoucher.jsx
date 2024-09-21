import React, { useState } from 'react'
import './AddVoucher.css'
import { assets } from '../../assets/assets'
import VoucherAPI from '../../api/voucher'
import { toast } from 'react-toastify';

const AddVoucher = () => {

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    description: '',
    pointsRequired: '',
    expirationDate: '',
    brand: '',
    code: '',
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
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
        const response = await VoucherAPI.addVoucher(formData);
        if (response) { // Kiểm tra phản hồi
            setData({
                description: '',
                pointsRequired: '',
                expirationDate: '',
                brand: '',
                code: '',
            });
            setImage(null);
            toast.success('Voucher added successfully!');
        } else {
            toast.error('Failed to add voucher');
        }
    } catch (error) {
        toast.error('Error adding voucher: ' + error.message);
    }
};

return (
  <div className='add-voucher'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
          <div className='add-img-upload flex-col'>
              <p>Hình ảnh</p>
              <label htmlFor='image'>
                  <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
              </label>
              <input
                  type='file'
                  id='image'
                  hidden
                  required
                  onChange={(event) => setImage(event.target.files[0])}
              />
          </div>
          <div className='add-product-name flex-col'>
              <p>Mô tả</p>
              <input
                  onChange={onChangeHandler}
                  value={data.description}
                  name='description'
                  placeholder='Mô tả voucher'
              />
          </div>
          <div className='add-product-name flex-col'>
              <p>Điểm</p>
              <input
                  onChange={onChangeHandler}
                  value={data.pointsRequired}
                  name='pointsRequired'
                  placeholder='Điểm thưởng để đổi'
                  type='number'
              />
          </div>
          <div className='add-product-name flex-col'>
              <p>Thời gian hết hạn</p>
              <input
                  onChange={onChangeHandler}
                  value={data.expirationDate}
                  name='expirationDate'
                  type='datetime-local'
              />
          </div>
          <div className='add-product-name flex-col'>
              <p>Nhà tài trợ</p>
              <input
                  onChange={onChangeHandler}
                  value={data.brand}
                  name='brand'
                  placeholder='Nhãn hàng'
              />
          </div>
          <div className='add-product-name flex-col'>
              <p>Mã Code</p>
              <input
                  onChange={onChangeHandler}
                  value={data.code}
                  name='code'
                  placeholder='Mã tham gia'
              />
          </div>
          <button type='submit' className='add-btn'>ADD</button>
      </form>
  </div>
);
}

export default AddVoucher