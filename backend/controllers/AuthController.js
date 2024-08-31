const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

class AuthController {

    async registerUser(req, res) {
        const { username, email, password } = req.body

        try {
            let user = await User.findOne({ email })

            if (user) {
                return res.status(400).json({ message: 'Email Đã Được Sử Dụng' })
            }

            user = new User({
                username,
                email,
                password,
            })
            await user.save()

            const payload = {
                user: {
                    id: user._id,
                },
            }
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
                if (error) throw error
                res.json({ token })
            })
        } catch (error) {
            res.status(500).json({ message: 'Lỗi Máy Chủ' })
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body

        try {
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ msg: 'Sai Email! Người Dùng Không Tồn Tại' });
            }

            const isMatch = await user.matchPassword(password)
            if (!isMatch) {
                return res.status(400).json({ msg: 'Sai Mật Khẩu' });
            }

            const payload = {
                user: {
                    id: user._id,
                },
            }
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
                if (error) throw error
                res.json({ token })
            })
        } catch (error) {
            console.error("Server error:", error);
            res.status(500).json({ msg: 'Lỗi máy chủ' });
        }
    }


}

module.exports = new AuthController()