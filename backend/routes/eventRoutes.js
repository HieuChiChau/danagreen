const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const EventController = require('../controllers/EventController');
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

// Route để thêm sự kiện
router.post('/events', upload.single('image'), EventController.createEvent);

// Route để cập nhật sự kiện
router.put('/events/:id', upload.single('image'), EventController.updateEvent);

// Các route khác
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.delete('/events/:id', EventController.deleteEvent);
router.get('/counts', auth, EventController.getEventCount);
module.exports = router;
