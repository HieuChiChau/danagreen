import axios from 'axios';

class UserAPI {
    static async getProfile(token) {
        try {
            const response = await axios.get('https://192.168.5.3:3000/api/user/profile', {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data
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
            const response = await axios.put('https://192.168.5.3:3000/api/user/updateprofile', profileData, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data
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
            const response = await axios.put('https://192.168.5.3:3000/api/user/updatepassword', passwordData, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            console.error('Error updating password:', error);
            throw error;
        }
    }
}

export default UserAPI;