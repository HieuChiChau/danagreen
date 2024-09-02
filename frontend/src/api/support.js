import axios from 'axios';

class SupportAPI {
    static async reportIssue(token, issue, details) {
        try {
            const response = await axios.post('https://192.168.1.241:3000/api/support',
                { issue, details },
                {
                    headers: {
                        'authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
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
}

export default SupportAPI;
