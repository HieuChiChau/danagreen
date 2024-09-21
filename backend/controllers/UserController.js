const User = require('../models/userModel');
const History = require('../models/historyModel')

class UserController {

    async getProfile(req, res) {
        if (!req.user) {
            return res.status(404).json({ message: 'User not found' });
        }
        try {
            const user = req.user

            res.json({
                username: user.username,
                email: user.email,
                profile: user.profile,
                score: user.score,
            })
        } catch (error) {
            console.error('Get profile error: ', error);
            res.status(500).json({ message: 'Lỗi máy chủ' });
        }
    }

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

    async updatePassword(req, res) {
        const { oldPassword, newPassword } = req.body;

        try {
            const user = await User.findById(req.user._id);
            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng!' });
            }

            // Kiểm tra mật khẩu cũ
            const isMatch = await user.matchPassword(oldPassword);
            if (!isMatch) {
                return res.status(400).json({ message: 'Sai mật khẩu cũ!' });
            }

            // Kiểm tra mật khẩu mới có khác mật khẩu cũ không
            if (await user.matchPassword(newPassword)) {
                return res.status(400).json({ message: 'Mật khẩu mới không được giống mật khẩu cũ!' });
            }

            console.log('Mật khẩu cũ (trước khi mã hóa):', oldPassword);
            console.log('Mật khẩu mới (trước khi mã hóa):', newPassword);

            user.password = newPassword;
            await user.save();

            // Xác minh mật khẩu mới có được lưu đúng cách không
            const updatedUser = await User.findById(req.user._id);
            const isPasswordUpdated = await updatedUser.matchPassword(newPassword);

            if (!isPasswordUpdated) {
                return res.status(500).json({ message: 'Lỗi khi lưu mật khẩu mới!' });
            }

            res.status(200).json({ message: 'Đổi mật khẩu thành công' });
        } catch (error) {
            console.error('Error updating password:', error);
            res.status(500).json({ message: 'Đổi mật khẩu thất bại!', error: error.message });
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

    async getUsers(req, res) {
        try {
            const users = await User.find({})

            const userInfos = users.map(user => ({
                username: user.username,
                createdAt: user._id.getTimestamp()
            }));

            res.json(userInfos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async listUsers(req, res) {
        try {
            const users = await User.find({})

            const userInfos = users.map(user => ({
                username: user.username,
                email: user.email,
                score: user.score,
                createdAt: user._id.getTimestamp(),
            }));

            res.json(userInfos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new UserController();
