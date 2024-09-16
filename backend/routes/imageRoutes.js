const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadImage } = require('../controllers/ImageUploadController');

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

// Route để tải hình ảnh lên
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).send('No file uploaded.');

        const result = await uploadImage(file.path);
        const imageUrl = result.secure_url;

        res.json({ imageUrl });
    } catch (error) {
        res.status(500).send('Error uploading image.');
    }
});

module.exports = router;
