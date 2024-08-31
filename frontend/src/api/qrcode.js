import axios from 'axios';

class QRCodeAPI {
    static async decodeQRCode(code) {
        try {
            const response = await axios.post('https://api.example.com/decode', { code });
            return response.data;
        } catch (error) {
            console.error('Error sending QR code to API:', error);
            throw error;
        }
    }
    static async saveQRCodeResult(token, data) {
        try {
            const response = await axios.post('https://192.168.5.3:3000/api/history/saveqrcoderesult', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response
        } catch (error) {
            console.error('Error saving QR code result:', error);
            throw error;
        }
    }
}

export default QRCodeAPI;
