const express = require('express')
const router = express.Router()

const HistoryController = require('../controllers/HistoryController')
const auth = require('../middleware/auth')

router.post('/saveqrcoderesult', auth, HistoryController.saveQRCodeResult)
router.get('/me', auth, HistoryController.getHistory)
router.get('/detail/:id', auth, HistoryController.getHistoryById)
router.get('/all-recent-activities', HistoryController.getAllRecentActivities);
router.get('/allhistories', HistoryController.getAllTrashData)

module.exports = router;