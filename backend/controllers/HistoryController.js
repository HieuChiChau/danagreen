const History = require('../models/historyModel')
const User = require('../models/userModel')
class HistoryController {
    saveQRCodeResult = async (req, res) => {
        try {
            const { trash } = req.body;
            console.log('Received data:', trash);
            if (!trash || !req.user) {
                return res.status(400).json({ message: 'Thiếu dữ liệu cần thiết' });
            }

            const latestHistory = await History.findOne({ userId: req.user._id })
                .sort({ 'trash.date': -1 })
                .exec();

            if (latestHistory && latestHistory.trash.metal === trash.metal &&
                latestHistory.trash.plastic === trash.plastic &&
                latestHistory.trash.paper === trash.paper &&
                latestHistory.trash.randomNumber === trash.randomNumber) {
                return res.status(400).json({ message: 'Dữ liệu QR code đã tồn tại' });
            }

            const newHistory = new History({
                userId: req.user._id,
                trash: {
                    metal: trash.metal,
                    plastic: trash.plastic,
                    paper: trash.paper,
                    date: new Date(),
                    randomNumber: trash.randomNumber
                }
            });

            // Lưu lịch sử rác
            await newHistory.save();
            console.log('Lịch sử đã được lưu thành công');

            // Gọi phương thức cập nhật điểm số
            await this.updateScore(req, res);

            res.status(201).json({ message: 'Dữ liệu vứt rác đã được lưu và điểm số được cập nhật thành công!' });
        } catch (error) {
            console.error('Lỗi xảy ra:', error.message);
            res.status(500).json({ message: 'Lưu dữ liệu hoặc cập nhật điểm thất bại', error: error.message });
        }
    }

    updateScore = async (req, res) => {
        try {
            const histories = await History.find({ userId: req.user._id });
            console.log('Lịch sử rác của người dùng:', histories);

            let totalScore = 0;
            histories.forEach(history => {
                totalScore += (history.trash.metal * 7) + (history.trash.plastic * 4) + (history.trash.paper * 1);
            });
            console.log('Tổng điểm:', totalScore);

            const updatedUser = await User.findByIdAndUpdate(req.user._id, { score: totalScore });
            console.log('Điểm số người dùng đã được cập nhật:', updatedUser);

            // Có thể trả về phản hồi nếu cần thiết
        } catch (error) {
            console.error('Lỗi cập nhật điểm số:', error.message);
        }
    }

    getHistory = async (req, res) => {
        try {
            const userId = req.user._id

            if (!userId) {
                return res.status(400).json({ message: 'Thiếu userId' });
            }

            const histories = await History.find({ userId }).sort({ 'trash.date': -1 });
            if (!histories.length) {
                return res.status(404).json({ message: 'Không có lịch sử nào' });
            }
            res.status(200).json(histories);
        } catch (error) {
            console.error('Lỗi lấy danh sách lịch sử:', error.message);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu lịch sử', error: error.message });
        }
    }

    getHistoryById = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Thiếu ID bản ghi' });
            }

            const history = await History.findById(id);
            if (!history) {
                return res.status(404).json({ message: 'Bản ghi không tìm thấy' });
            }

            res.status(200).json(history);
        } catch (error) {
            console.error('Lỗi lấy chi tiết lịch sử:', error.message);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu chi tiết', error: error.message });
        }
    };

    getAllRecentActivities = async (req, res) => {
        try {
            // Lấy tất cả hoạt động gần đây và populate thông tin người dùng
            const recentActivities = await History.find({})
                .sort({ 'trash.date': -1 }) // Sắp xếp theo ngày giảm dần
                .populate({
                    path: 'userId',
                    select: 'username' // Chỉ lấy thông tin username
                })
                .exec();

            if (!recentActivities.length) {
                return res.status(404).json({ message: 'Không có hoạt động gần đây' });
            }

            // Tạo danh sách các kết quả để trả về
            const activitiesWithUserDetails = recentActivities.map(activity => {
                // Giả định rằng activity.trash là một đối tượng chứa thông tin về số lượng rác
                const { metal = 0, plastic = 0, paper = 0, date } = activity.trash;

                return {
                    username: activity.userId ? activity.userId.username : 'Không có tên người dùng',
                    metal,
                    plastic,
                    paper,
                    date
                };
            });

            res.status(200).json(activitiesWithUserDetails);
        } catch (error) {
            console.error('Lỗi lấy hoạt động gần đây của tất cả người dùng:', error.message);
            res.status(500).json({ message: 'Lỗi lấy hoạt động gần đây', error: error.message });
        }
    };

    getAllTrashData = async (req, res) => {
        try {
            // Lấy tất cả các bản ghi lịch sử và chỉ chọn trường trash
            const allTrashData = await History.find({})
                .select('trash') // Chọn chỉ trường trash
                .exec();

            if (!allTrashData.length) {
                return res.status(404).json({ message: 'Không có dữ liệu nào' });
            }

            res.status(200).json(allTrashData);
        } catch (error) {
            console.error('Lỗi lấy dữ liệu trash:', error.message);
            res.status(500).json({ message: 'Lỗi lấy dữ liệu trash', error: error.message });
        }
    };
}

module.exports = new HistoryController();