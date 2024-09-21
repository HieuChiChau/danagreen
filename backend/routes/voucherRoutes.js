const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const VoucherController = require('../controllers/VoucherController.js')
const auth = require('../middleware/auth')

// Cấu hình multer để lưu trữ tệp tạm thời
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Thư mục lưu trữ tạm thời
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên tệp
    }
});

const upload = multer({ storage: storage });

router.get('/list', VoucherController.getVouchers)
router.post('/redeem', auth, VoucherController.redeemVoucher)
router.get('/my-vouchers', auth, VoucherController.getMyVouchers)
router.post('/add-voucher', upload.single('image'), VoucherController.addVoucher)

module.exports = router
