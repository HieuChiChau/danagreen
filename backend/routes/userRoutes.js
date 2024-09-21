const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')

router.get('/profile', auth, UserController.getProfile)
router.put('/updateprofile', auth, UserController.update)
router.put('/updatepassword', auth, UserController.updatePassword)
router.get('/ranking', UserController.getRanking)
router.get('/users', auth, UserController.getUsers)
router.get('/list', UserController.listUsers)


module.exports = router