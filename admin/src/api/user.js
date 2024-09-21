import axios from 'axios';

class UserAPI {
    static async getUsers() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/list`); // Thay đổi URL nếu cần
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
}

export default UserAPI;
