import SupportRequest from "../models/supportModel"

class SupportController {
    async createSupportRequest(req, res) {

        const { subject, message } = req.body

        if (!subject || !message) {
            return res.status(400).json({ message: 'Lỗi trống!' });
        }

        try {
            const newRequest = new SupportRequest({
                userId: req.user._id,
                subject,
                message,
            });
            await newRequest.save();
            res.status(201).json({ message: 'Gửi báo cáo thành công!', supportRequest });
        } catch (error) {
            res.status(500).json({ message: 'Tạo yêu cầu hỗ trợ thất bại', error: error.message })
        }
    }
}

module.exports = new SupportController()