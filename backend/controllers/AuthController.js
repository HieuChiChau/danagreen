const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

class AuthController {

    async registerUser(req, res) {
        const { username, email, password } = req.body

        // Kiểm tra email có phải định dạng Gmail
        if (!email.endsWith('@gmail.com')) {
            return res.status(400).json({ message: 'Email phải là Gmail (vd: example@gmail.com)' });
        }

        // Kiểm tra độ dài password
        if (password.length <= 6) {
            return res.status(400).json({ message: 'Mật khẩu phải dài hơn 6 ký tự' });
        }

        try {
            let user = await User.findOne({ email })
            if (user) {
                return res.status(400).json({ message: 'Email đã được sử dụng' })
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
            res.status(500).json({ message: 'Lỗi máy chủ' })
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body

        // Kiểm tra email có phải gmail không
        if (!email.endsWith('@gmail.com')) {
            return res.status(400).json({ message: 'Email phải là Gmail (vd: example@gmail.com)' });
        }

        // Kiểm tra độ dài password
        if (password.length <= 6) {
            return res.status(400).json({ message: 'Mật khẩu phải dài hơn 6 ký tự' });
        }

        try {
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'Sai Email! Người dùng không tồn tại' });
            }

            const isMatch = await user.matchPassword(password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Sai mật khẩu' });
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
            res.status(500).json({ message: 'Lỗi máy chủ' });
        }
    }

}

module.exports = new AuthController()
