const express = require('express')
const router = express.Router()

const HistoryController = require('../controllers/HistoryController')
const auth = require('../middleware/auth')

router.post('/saveqrcoderesult', auth, HistoryController.saveQRCodeResult)

module.exports = router;