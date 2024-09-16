import axios from 'axios';

class VoucherAPI {
    static async getVoucher() {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/voucher/list')
            return response.data
        } catch (error) {
            console.error('Error fetching vouchers:', error);
            throw error;
        }
    }

    static async redeemVoucher(voucherId, token) {
        try {
            const response = await axios.post('https://192.168.5.2:3000/api/voucher/redeem', { voucherId }, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            console.error('Error redeeming voucher:', error);
            throw error;
        }
    }

    static async getMyVouchers(token) {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/voucher/my-vouchers', {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            console.error('Error fetching my vouchers:', error);
            throw error;
        }
    }
}

export default VoucherAPI;