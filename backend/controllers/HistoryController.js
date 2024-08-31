const History = require('../models/historyModel')

class HistoryController {
    async saveQRCodeResult(req, res) {
        const { metal, plastic, paper } = req.body;
        const userId = req.user._id; // Lấy userId từ middleware xác thực

        try {
            const history = new History({
                userId,
                metal,
                plastic,
                paper,
            });

            await history.save();
            res.status(201).json({ message: 'Dữ liệu đã được lưu thành công!' });
        } catch (error) {
            console.error('Error saving QR code result:', error);
            res.status(500).json({ message: 'Có lỗi xảy ra khi lưu dữ liệu.' });
        }
    }
}

module.exports = new HistoryController()