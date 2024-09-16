import axios from 'axios';

class HistoryAPI {

    static async saveQRCodeResult(token, trash) {
        try {
            console.log('trash ;', trash)
            const response = await axios.post('https://192.168.5.2:3000/api/history/saveqrcoderesult', { trash }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data
        } catch (error) {
            console.error('Error saving QR code result:', error);
            throw error;
        }
    }

    static async getHistory() {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/history/me', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Nếu cần
                }
            })
            return response.data
        } catch (error) {
            console.error('Lỗi khi lấy lịch sử:', error);
            throw error;
        }
    }

    static async getHistoryById(id) {
        try {
            const response = await axios.get(`https://192.168.5.2:3000/api/history/detail/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            return response.data;
        } catch (error) {
            console.error('Lỗi khi lấy chi tiết lịch sử:', error);
            throw error;
        }
    }

    static async getAllRecentActivities() {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/history/all-recent-activities');
            return response.data
        } catch (error) {
            console.error('Lỗi khi lấy hoạt động gần đây:', error);
            throw error;
        }
    }

    static async getAllTrashData() {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/history/allhistories')
            return response.data
        } catch (error) {
            console.error('Lỗi khi gọi API để lấy dữ liệu trash:', error);
            throw error;
        }
    }
}

export default HistoryAPI;
