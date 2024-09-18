import axios from 'axios';

class SupportAPI {
    static async reportIssue(token, issue, details) {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/support`,
                { issue, details },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
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
}

export default SupportAPI;
