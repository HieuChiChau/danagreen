import axios from 'axios';

class HistoryAPI {

    static async saveQRCodeResult(token, trash) {
        try {
            console.log('trash:', trash);
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/history/saveqrcoderesult`, 
                { trash }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error saving QR code result:', error);
            throw error;
        }
    }

    static async getHistory() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/history/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Nếu cần
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching history:', error);
            throw error;
        }
    }

    static async getHistoryById(id) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/history/detail/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching history detail:', error);
            throw error;
        }
    }

    static async getAllRecentActivities() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/history/all-recent-activities`);
            return response.data;
        } catch (error) {
            console.error('Error fetching recent activities:', error);
            throw error;
        }
    }

    static async getAllTrashData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/history/allhistories`);
            return response.data;
        } catch (error) {
            console.error('Error fetching trash data:', error);
            throw error;
        }
    }
}

export default HistoryAPI;
