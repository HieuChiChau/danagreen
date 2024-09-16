const Voucher = require('../models/voucherModel')
const User = require('../models/userModel')
const MyVoucher = require('../models/myVoucherModel')

const cloudinary = require('../config/cloundinary'); // Import cấu hình Cloudinary
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Thư mục lưu trữ tạm thời
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên tệp
    }
});

const upload = multer({ storage: storage });

const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

class VoucherController {

    static async addVoucher(req, res) {
        try {
            const { code, description, pointsRequired, expirationDate, brand } = req.body;
            const file = req.file;

            let imageUrl = '';
            if (file) {
                imageUrl = await uploadImage(file.path);
            }

            const newVoucher = new Voucher({
                code,
                description,
                pointsRequired,
                expirationDate,
                brand,
                imageUrl
            });

            await newVoucher.save();
            res.status(201).json(newVoucher);
        } catch (error) {
            console.error('Error adding voucher:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    static async getVouchers(req, res) {
        try {
            const vouchers = await Voucher.find()
            res.status(200).json(vouchers)
        } catch (error) {
            console.error('Error fetching vouchers:', error)
            res.status(500).json({ error: 'Failed to fetch vouchers' })
        }
    }

    static async redeemVoucher(req, res) {
        try {
            const userId = req.user._id
            const { voucherId } = req.body

            const voucher = await Voucher.findById(voucherId);

            if (!voucher) {
                return res.status(404).json({ message: 'Không tìm thấy voucher' });
            }

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }

            if (user.score < voucher.pointsRequired) {
                return res.status(400).json({ message: 'Không đủ điểm để đổi voucher' });
            }

            const existingVoucher = await MyVoucher.findOne({ userId, voucherId });

            if (existingVoucher && existingVoucher.isUsed) {
                return res.status(400).json({ message: 'Voucher đã được đổi trước đó' });
            }

            user.score -= voucher.pointsRequired;
            await user.save();

            const newMyVoucher = existingVoucher || new MyVoucher({
                userId,
                voucherId,
                isUsed: true
            });

            newMyVoucher.isUsed = true;
            await newMyVoucher.save();

            res.status(200).json({ message: 'Voucher được đổi thành công' });
        } catch (error) {
            console.error('Error redeeming voucher:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    static async getMyVouchers(req, res) {
        try {
            const userId = req.user._id;

            const myVouchers = await MyVoucher.find({ userId }).populate('voucherId');
            res.status(200).json(myVouchers);
        } catch (error) {
            console.error('Error fetching my vouchers:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = VoucherController