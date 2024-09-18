import axios from 'axios';

class AuthAPI {
    static async login(email, password) {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                { email, password }
            );

            const { token } = response.data;
            localStorage.setItem('authToken', token);

            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    static async register(username, email, password) {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/register`,
                { username, email, password }
            );

            return response.data;
        } catch (error) {
            console.error('Register error:', error);
            throw error;
        }
    }
}

export default AuthAPI;
