const express = require('express')
const router = express.Router()

const SupportController = require('../controllers/SupportController')
const auth = require('../middleware/auth')

router.post('/support', auth, SupportController.reportIssue)

module.exports = router