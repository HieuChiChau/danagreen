const mongoose = require('mongoose');
const Event = require('../models/eventModel');
const EventParticipant = require('../models/eventParticipantModel');
const cloudinary = require('../config/cloundinary'); // Import cấu hình Cloudinary
const multer = require('multer');
const path = require('path');

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
// Hàm tải hình ảnh lên Cloudinary
const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

class EventController {
    // Lấy tất cả sự kiện
    static async getEventCount(req, res) {
        try {
            const userId = req.user._id; // Đảm bảo đây là ObjectId hợp lệ
            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).json({ message: 'Invalid user ID' });
            }
            
            const today = new Date();
            const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

            // Số sự kiện hôm nay
            const todayEventsCount = await EventParticipant.countDocuments({
                userId: userId,
                joinedAt: { $gte: startOfDay },
            });

            // Số sự kiện trong tháng
            const monthEventsCount = await EventParticipant.countDocuments({
                userId: userId,
                joinedAt: { $gte: startOfMonth },
            });

            res.json({
                todayEventsCount,
                monthEventsCount,
            });
        } catch (error) {
            console.error('Error fetching event counts:', error);
            res.status(500).json({ message: "Error fetching event counts", error: error.message });
        }
    }
    
    static async getAllEvents(req, res) {
        try {
            const events = await Event.find();
            res.status(200).json(events);
        } catch (error) {
            console.error('Error fetching events:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Thêm sự kiện mới
    static async createEvent(req, res) {
        try {
            const { title, introduce, location, description, rules, startTime, endTime, code, requirements, howToScore, awards, note } = req.body;
            const file = req.file;

            let imageUrl = '';
            if (file) {
                imageUrl = await uploadImage(file.path);
            }

            const newEvent = new Event({
                title,
                introduce,
                location,
                image: imageUrl,
                description,
                rules,
                startTime,
                endTime,
                code,
                requirements,
                howToScore,
                awards,
                note
            });

            await newEvent.save();
            res.status(201).json(newEvent);
        } catch (error) {
            console.error('Error creating event:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Lấy sự kiện theo ID
    static async getEventById(req, res) {
        try {
            const event = await Event.findById(req.params.id);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.status(200).json(event);
        } catch (error) {
            console.error('Error fetching event:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Cập nhật sự kiện theo ID
    static async updateEvent(req, res) {
        try {
            const { title, introduce, location, description, rules, startTime, endTime, code, requirements, howToScore, awards, note } = req.body;
            const file = req.file;

            let updateData = {
                title,
                introduce,
                location,
                description,
                rules,
                startTime,
                endTime,
                code,
                requirements,
                howToScore,
                awards,
                note
            };

            if (file) {
                const imageUrl = await uploadImage(file.path);
                updateData.image = imageUrl;
            }

            const event = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.status(200).json(event);
        } catch (error) {
            console.error('Error updating event:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // Xóa sự kiện theo ID
    static async deleteEvent(req, res) {
        try {
            const event = await Event.findByIdAndDelete(req.params.id);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error('Error deleting event:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = EventController;
