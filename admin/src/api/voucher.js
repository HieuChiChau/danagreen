import axios from 'axios';

class VoucherAPI {
    static async addVoucher(voucherData) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/voucher/add-voucher`,// Đường dẫn sửa lại
                voucherData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Để gửi file
                    },
                }
            );
            return response.data; // Trả về dữ liệu
        } catch (error) {
            console.error('Error adding voucher:', error);
            throw error;
        }
    }
}

export default VoucherAPI;
