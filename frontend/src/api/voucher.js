import axios from 'axios';

class VoucherAPI {
    static async getVoucher() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/voucher/list`);
            return response.data;
        } catch (error) {
            console.error('Error fetching vouchers:', error);
            throw error;
        }
    }

    static async redeemVoucher(voucherId, token) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/voucher/redeem`, 
                { voucherId }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error redeeming voucher:', error);
            throw error;
        }
    }

    static async getMyVouchers(token) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/voucher/my-vouchers`, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error fetching my vouchers:', error);
            throw error;
        }
    }
}

export default VoucherAPI;
