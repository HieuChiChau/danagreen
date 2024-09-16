import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyVoucher.css';
import img from '../../../../assets/voucher.jpg';
import VoucherAPI from '../../../../api/voucher';
import { toast } from 'react-toastify';

const MyVoucher = () => {
    const navigate = useNavigate();
    const [vouchers, setVouchers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVouchers = async () => {
            const token = localStorage.getItem('authToken');
            try {
                setLoading(true);
                const data = await VoucherAPI.getMyVouchers(token);
                setVouchers(data.map(voucherItem => voucherItem.voucherId)); // Extract voucherId
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch my vouchers');
                setLoading(false);
                console.error('Error fetching my vouchers:', error);
                toast.error('Failed to fetch my vouchers');
            }
        };
        fetchVouchers();
    }, []);

    return (
        <div className="voucher-list-container">
            <h2 className="voucher-list-title">Voucher của tôi</h2>
            {loading ? (
                <div className="loading">
                    <p>Đang tải voucher, vui lòng đợi...</p>
                </div>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="voucher-list">
                    {vouchers.length === 0 ? (
                        <p>Không có voucher nào.</p>
                    ) : (
                        vouchers.map((voucher) => (
                            <div key={voucher._id} className="voucher-card">
                                <img src={voucher.imageUrl || img} alt={voucher.description} className="voucher-image" />
                                <div className="voucher-divider"></div>
                                <div className="voucher-info">
                                    <h3 className="voucher-title">{voucher.code}</h3>
                                    <p className="voucher-description">{voucher.description}</p>
                                    <p className="voucher-expiry-date">HSD: {new Date(voucher.expirationDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
            <div className="bakk">
                <button className='bakkk' onClick={() => navigate('/voucher')}>Trở Lại</button>
            </div>
        </div>
    );
}

export default MyVoucher;
