import axios from 'axios'

class EventAPI {

    static async getEvents() {
        try {
            const response = await axios.get('https://192.168.5.2:3000/api/event/events')
            return response.data
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error; // Ném lỗi lên trên để xử lý
        }
    }

    static async getEventById(id) {
        try {
            const response = await axios.get(`https://192.168.5.2:3000/api/event/events/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching event:', error);
            throw error;
        }
    }
    static async joinEvent(token, eventId, code) {
        try {
            const response = await axios.post(
                'https://192.168.5.2:3000/api/participant/add-participant',
                {
                    eventId,
                    code
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            console.log('API Response:', response.data); // Kiểm tra phản hồi
            return response.data;
        } catch (error) {
            console.error('Error joining event:', error);
            throw error;
        }
    }
}

export default EventAPI;