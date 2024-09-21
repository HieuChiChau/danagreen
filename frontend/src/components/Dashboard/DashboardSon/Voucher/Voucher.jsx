import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Voucher.css'
import VoucherAPI from '../../../../api/voucher';

import { toast } from 'react-toastify';

const Voucher = () => {
    const navigate = useNavigate()
    const [vouchers, setVouchers] = useState([]);
    const [error, setError] = useState(null);
    const [filteredVouchers, setFilteredVouchers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brand, setBrand] = useState('');

    useEffect(() => {
        const fetchVouchers = async () => {
            try {
                setLoading(true);
                const data = await VoucherAPI.getVoucher()
                setVouchers(data)
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch vouchers');
                setLoading(false)
                console.error('Error fetching vouchers:', error);
            }
        }
        fetchVouchers();
    }, [])

    useEffect(() => {
        if (brand) {
            const filtered = vouchers.filter(voucher => voucher.brand === brand);
            setFilteredVouchers(filtered);
        } else {
            setFilteredVouchers(vouchers);
        }
    }, [brand, vouchers]);

    const handleRedeem = async (voucherId) => {
        const token = localStorage.getItem('authToken')
        try {
            const response = await VoucherAPI.redeemVoucher(voucherId, token)
            toast.success(response.message);
            const data = await VoucherAPI.getVoucher()
            setVouchers(data)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An unexpected error occurred');
            }
        }
    }

    return (
        <div className="voucher-list-container">
            <div className="voucher-header">
                <button className="my-voucher-button" onClick={() => navigate('/myvoucher')}>
                    Voucher của tôi
                </button>
                <h2 className="voucher-list-title">Danh Sách Voucher</h2>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="filter-brand">
                <label htmlFor="brand">Nhà tài trợ:</label>
                <select
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Tất cả</option>
                    <option value="Jollibee">Jollibee</option>
                    <option value="Grab">Grab</option>
                    <option value="KFC">KFC</option>
                    <option value="Starbucks">Starbucks</option>
                    <option value="H&M">H&M</option>
                    <option value="Domino's Pizza">Domino's Pizza</option>
                    <option value="McDonald's">McDonald's</option>
                    <option value="NET English">NET English</option>
                </select>
            </div>
            {loading && (
                <div className="loading">
                    <p>Đang tải voucher, vui lòng đợi...</p>
                </div>
            )}
            <div className="voucher-list">
                {filteredVouchers.length === 0 ? (
                    <p>Không có voucher nào thuộc brand này.</p>
                ) : (
                    filteredVouchers.map((voucher) => (
                        <div key={voucher._id} className="voucher-card">
                            <img src={voucher.imageUrl} alt={voucher.description} className="voucher-image" />
                            <div className="voucher-divider"></div>
                            <div className="voucher-info">
                                <h3 className="voucher-title">{voucher.brand}</h3>
                                <p className="voucher-description">{voucher.description}</p>
                                <p className="voucher-point">Đổi: {voucher.pointsRequired} điểm</p>
                                <p className="voucher-expiry-date">HSD: {new Date(voucher.expirationDate).toLocaleDateString()}</p>

                                <div className="voucher-actions">
                                    <button className="use-voucher-button" onClick={() => handleRedeem(voucher._id)}>Đổi</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="bakk">
                <button className='bakkk' onClick={() => navigate('/dashboard')}>Trở Lại</button>
            </div>
        </div>
    )
}

export default Voucher;