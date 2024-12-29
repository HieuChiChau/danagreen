import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Voucher.css'
import VoucherAPI from '../../../../api/voucher';
import { toast } from 'react-toastify';

const Voucher = () => {
    const navigate = useNavigate();
    const [vouchers, setVouchers] = useState([]);
    const [error, setError] = useState(null);
    const [filteredVouchers, setFilteredVouchers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brand, setBrand] = useState('');
    const [detailsShown, setDetailsShown] = useState({}); // Trạng thái cho chi tiết

    useEffect(() => {
        const fetchVouchers = async () => {
            try {
                setLoading(true);
                const data = await VoucherAPI.getVoucher();
                setVouchers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch vouchers');
                setLoading(false);
                console.error('Error fetching vouchers:', error);
            }
        };
        fetchVouchers();
    }, []);

    useEffect(() => {
        if (brand) {
            const filtered = vouchers.filter(voucher => voucher.brand === brand);
            setFilteredVouchers(filtered);
        } else {
            setFilteredVouchers(vouchers);
        }
    }, [brand, vouchers]);

    const handleRedeem = async (voucherId) => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await VoucherAPI.redeemVoucher(voucherId, token);
            toast.success(response.message);
            const data = await VoucherAPI.getVoucher();
            setVouchers(data);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An unexpected error occurred');
            }
        }
    };

    const toggleDetails = (voucherId) => {
        setDetailsShown((prev) => ({
            ...prev,
            [voucherId]: !prev[voucherId], // Bật/tắt hiển thị cho từng voucher
        }));
    };

    return (
        <div className="voucher-list-container">
            <div className="voucher-header">
                <button className="my-voucher-button" onClick={() => navigate('/myvoucher')}>
                    Quà tặng của tôi
                </button>
                <h2 className="voucher-list-title">Danh Sách quà tặng</h2>
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
                    <option value="Nestlé">Nestlé</option>
                    <option value="Highlands">Highlands</option>
                    <option value="TH True Milk">TH True Milk</option>
                </select>
            </div>
            {loading && (
                <div className="loading">
                    <p>Đang tải quà tặng, vui lòng đợi...</p>
                </div>
            )}
            <div className="voucher-list">
                {filteredVouchers.length === 0 ? (
                    <p>Không có quà tặng nào thuộc brand này.</p>
                ) : (
                    filteredVouchers.map((voucher) => (
                        <div key={voucher._id} className="voucher-card">
                            <img src={voucher.imageUrl} alt={voucher.brand} className="voucher-image" />
                            <div className="voucher-divider"></div>
                            <div className="voucher-info">
                                <h3 className="voucher-title">{voucher.brand}</h3>
                                <p className="voucher-point">Đổi: {voucher.pointsRequired} điểm</p>

                                {/* Button Chi tiết */}
                                <button
                                    style={{
                                        backgroundColor: 'hsl(94, 59%, 35%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '8px 12px',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#bdf094'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'hsl(94, 59%, 35%)'}
                                    onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                                    onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                                    onClick={() => toggleDetails(voucher._id)}
                                >
                                    {detailsShown[voucher._id] ? 'Ẩn Chi tiết' : 'Chi tiết'}
                                </button>


                                {/* Hiển thị Chi tiết nếu trạng thái bật */}
                                {detailsShown[voucher._id] && (
                                    <>
                                        <p className="voucher-description">
                                            {voucher.description.split('-').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    <strong>Cơ sở {index + 1}: </strong> {line}
                                                    {index < voucher.description.split('-').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <p className="voucher-expiry-date">
                                            Liên hệ: {voucher.expirationDate}
                                        </p>
                                    </>
                                )}

                                <div className="voucher-actions">
                                    <button className="use-voucher-button" onClick={() => handleRedeem(voucher._id)}>
                                        Đổi
                                    </button>
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
    );
};

export default Voucher;
