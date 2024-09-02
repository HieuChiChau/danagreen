import axios from 'axios'

class RankingAPI {
    static async getRanking() {
        try {
            const response = await axios.get('https://192.168.1.241:3000/api/user/ranking')
            return response.data
        } catch (error) {
            console.error('Error fetching ranking:', error);
            throw error; // Ném lỗi lên trên để xử lý
        }
    }
}

export default RankingAPI;