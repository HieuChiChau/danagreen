import axios from 'axios';

class EventAPI {
    
    static async getEvents() {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/event/events`);
            return response.data;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }

    static async getEventById(id) {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/event/events/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching event:', error);
            throw error;
        }
    }

    static async joinEvent(token, eventId, code) {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/participant/add-participant`,
                {
                    eventId,
                    code
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error joining event:', error);
            throw error;
        }
    }
    static async getEventCount(token) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/event/counts`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error fetching event counts:', error);
            throw error;
        }
    }
}

export default EventAPI;
