const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')

router.put('/updateprofile', auth, UserController.update)
router.put('/changepassword', auth, UserController.changePassword)
router.put('/updatescore', auth, UserController.updateScore)
router.get('/ranking', UserController.getRanking)
module.exports = router