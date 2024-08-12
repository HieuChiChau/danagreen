import axios from 'axios';

class AuthAPI {
    static async login(email, password) {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });

            return response.data;
        } catch (error) {
            console.error('Login error: ', error);
            throw error;
        }
    }

    static async register(username, email, password) {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                username,
                email,
                password,
            });

            return response.data;
        } catch (error) {
            console.error('Register error: ', error);
            throw error;
        }
    }
}

export default AuthAPI;
