import axios from 'axios';

class EventAPI {
    static async addEvent(eventData) {
        try {
            // Sử dụng import.meta.env để truy cập biến môi trường
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/event/events`,
                eventData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Nếu bạn gửi file
                    },
                }
            );
            return response.data; // Trả về dữ liệu
        } catch (error) {
            console.error('Error adding event:', error);
            throw error;
        }
    }
}

export default EventAPI;
