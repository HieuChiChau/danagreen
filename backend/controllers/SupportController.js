const Support = require('../models/supportModel')

class SupportController {
    async reportIssue(req, res) {
        const { issue, details } = req.body;

        if (!issue || !details) {
            return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
        }

        try {
            const newSupport = new Support({
                issue,
                details,
                userId: req.user._id
            });

            await newSupport.save();
            res.status(201).json({ message: 'Báo cáo lỗi đã được gửi!' });
        } catch (error) {
            console.error('Error reporting issue:', error);
            res.status(500).json({ message: 'Có lỗi xảy ra khi gửi báo cáo.' });
        }
    }
}

module.exports = new SupportController();
