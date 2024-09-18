import axios from 'axios';

class UserAPI {
    static async getProfile(token) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/user/profile`, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    }

    static async updateProfile(token, profileData) {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/user/updateprofile`, 
                profileData, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    }

    static async updatePassword(token, passwordData) {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/user/updatepassword`, 
                passwordData, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error updating password:', error);
            throw error;
        }
    }

    static async getUsers(token) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/user/users`, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    static logout() {
        localStorage.removeItem('authToken');
    }
}

export default UserAPI;
