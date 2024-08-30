import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Voucher.css'
import img1 from '../../../../assets/event1.jpg'
import img2 from '../../../../assets/event2.jpg'

const Voucher = () => {
    const navigate = useNavigate()
    const vouchers = [
        {
            id: 1,
            title: "Voucher Giảm Giá 10%",
            description: "Giảm ngay 10% cho tất cả các đơn hàng từ 500.000đ.",
            expiryDate: "2024-09-30",
            image: img1,
            code: "DISCOUNT10"
        },
        {
            id: 2,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 3,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 4,
            title: "Voucher Giảm Giá 10%",
            description: "Giảm ngay 10% cho tất cả các đơn hàng từ 500.000đ.",
            expiryDate: "2024-09-30",
            image: img1,
            code: "DISCOUNT10"
        },
        {
            id: 5,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 6,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 7,
            title: "Voucher Giảm Giá 10%",
            description: "Giảm ngay 10% cho tất cả các đơn hàng từ 500.000đ.",
            expiryDate: "2024-09-30",
            image: img1,
            code: "DISCOUNT10"
        },
        {
            id: 8,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 9,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 10,
            title: "Voucher Giảm Giá 10%",
            description: "Giảm ngay 10% cho tất cả các đơn hàng từ 500.000đ.",
            expiryDate: "2024-09-30",
            image: img1,
            code: "DISCOUNT10"
        },
        {
            id: 11,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 12,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 13,
            title: "Voucher Giảm Giá 10%",
            description: "Giảm ngay 10% cho tất cả các đơn hàng từ 500.000đ.",
            expiryDate: "2024-09-30",
            image: img1,
            code: "DISCOUNT10"
        },
        {
            id: 14,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        {
            id: 15,
            title: "Voucher Miễn Phí Vận Chuyển",
            description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ.",
            expiryDate: "2024-10-15",
            image: img2,
            code: "FREESHIP"
        },
        // Thêm các voucher khác nếu cần
    ]

    return (
        <div className="voucher-list-container">
            <div className="voucher-header">
                <button className="my-voucher-button" onClick={() => navigate('/myvoucher')}>
                    Voucher của tôi
                </button>
                <h2 className="voucher-list-title">Danh Sách Voucher</h2>
            </div>
            <div className="voucher-list">
                {vouchers.map((voucher) => (
                    <div key={voucher.id} className="voucher-card">
                        <img src={voucher.image} alt={voucher.title} className="voucher-image" />
                        <div className="voucher-divider"></div>
                        <div className="voucher-info">
                            <h3 className="voucher-title">{voucher.title}</h3>
                            <p className="voucher-description">{voucher.description}</p>
                            <p className="voucher-expiry-date">HSD: {voucher.expiryDate}</p>
                            <div className="voucher-actions">
                                <button className="use-voucher-button">Đổi</button>
                                {/* <button className="copy-code-button"> Sao chép mã</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bakk">
                <button className='bakkk' onClick={() => navigate('/dashboard')}>Trở Lại</button>
            </div>
        </div>
    )
}

export default Voucher;