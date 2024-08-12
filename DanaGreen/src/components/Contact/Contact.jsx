import React from 'react'
import './Contact.css'
import message from '../../assets/message.png'
import gmail from '../../assets/gmail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1b046f07-d1e7-4768-9678-7651980c30cf");
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Gửi tin nhắn cho chúng tôi<img src={message} alt=''/></h3>
                <p>Vui lòng liên hệ thông qua biểu mẫu liên hệ hoặc tìm thông tin liên hệ của chúng tôi bên dưới. Phản hồi, câu hỏi và đề xuất của bạn rất quan trọng đối với chúng tôi khi chúng tôi cố gắng cung cấp dịch vụ đặc biệt cho cộng đồng.</p>
                <ul>
                    <li><img src={gmail} alt=''/>danagreen.contact@gmail.com</li>
                    <li><img src={phone} alt=''/>0989505100</li>
                    <li><img src={location} alt=''/>90 Nguyễn Văn Thoại<br/> P. Mỹ An, Ngũ Hành Sơn, Đà Nẵng</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Tên</label>
                    <input type='text' name='name' placeholder='Nhập tên của bạn' required/>
                    <label>Số điện thoại</label>
                    <input type='tel' name='tel' placeholder='Nhập số điện thoại của bạn' required/>
                    <label>Viết tin nhắn của bạn ở đây</label>
                    <textarea name='message' rows='6' placeholder='Nhập tin nhắn của bạn' required></textarea>
                    <button type='submit' className='btn dark-btn'>Gửi<img src={white_arrow} alt=''/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact