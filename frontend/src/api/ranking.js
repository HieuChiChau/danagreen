import axios from 'axios';

class RankingAPI {
    static async getRanking() {
        try {
            console.log(`${import.meta.env.VITE_API_URL}/api/user/ranking`);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/ranking`);
            return response.data;
        } catch (error) {
            console.error('Error fetching ranking:', error);
            throw error; // Ném lỗi lên trên để xử lý
        }
    }
}

export default RankingAPI;
