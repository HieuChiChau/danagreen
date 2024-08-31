const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')

router.get('/profile', auth, UserController.getProfile)
router.put('/updateprofile', auth, UserController.update)
router.put('/updatepassword', auth, UserController.updatePassword)
router.put('/updatescore', auth, UserController.updateScore)
router.get('/ranking', UserController.getRanking)

module.exports = router