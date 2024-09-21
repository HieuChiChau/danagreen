import axios from 'axios';

class UserAPI {
    static async getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/api/user/list'); // Thay đổi URL nếu cần
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
}

export default UserAPI;
