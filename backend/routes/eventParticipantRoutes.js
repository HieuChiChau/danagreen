const express = require('express');
const router = express.Router();
const EventParticipantController = require('../controllers/EventParticipantController'); // Cập nhật đường dẫn nếu cần
const auth = require('../middleware/auth');
// Route thêm người tham gia sự kiện
router.post('/add-participant', auth, EventParticipantController.joinEvent);

module.exports = router;
