const User = require('../models/userModel');
const History = require('../models/historyModel')
const bcrypt = require('bcryptjs');

class UserController {
    async update(req, res) {
        const { phone, birthDate, hobby, address } = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.user._id,
                {
                    'profile.phone': phone,
                    'profile.birthDate': birthDate,
                    'profile.hobby': hobby,
                    'profile.address': address
                },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng!' });
            }

            res.status(200).json(updatedUser);

        } catch (error) {
            res.status(500).json({ message: 'Cập nhật thông tin thất bại!', error: error.message });
        }
    }

    async changePassword(req, res) {
        const { oldPassword, newPassword } = req.body;

        try {
            const user = await User.findById(req.user._id);
            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng!' });
            }

            const isMatch = await user.matchPassword(oldPassword);
            if (!isMatch) {
                return res.status(400).json({ message: 'Sai mật khẩu cũ!' });
            }

            // Mã hoá
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);

            await user.save();

            res.status(200).json({ message: 'Đổi mật khẩu thành công' });
        } catch (error) {
            res.status(500).json({ message: 'Đổi mật khẩu thất bại!', error: error.message });
        }
    }

    async updateScore(req, res) {
        try {
            const histories = await History.find({ userId: req.user._id })

            let totalScore = 0
            histories.forEach(history => {
                totalScore += (history.metal * 10) + (history.plastic * 8) + (history.paper * 7);
            })

            const updatedUser = await User.findByIdAndUpdate(
                req.user._id,
                { score: totalScore },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng!' });
            }

            res.status(200).json(updatedUser);

        } catch (error) {
            res.status(500).json({ message: 'Cập nhật điểm thất bại', error: error.message });
        }
    }

    async getRanking(req, res) {
        try {
            const users = await User.find().sort({ score: -1 })

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Lấy bảng xếp hạng thất bại', error: error.message });
        }
    }
}

module.exports = new UserController();
