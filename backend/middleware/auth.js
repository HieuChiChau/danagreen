const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const auth = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('>>>check decode: ', decoded)
        req.user = await User.findById(decoded.user.id);

        if (!req.user) {
            return res.status(404).json({ message: 'Sai token hoặc không tim thấy người dùng' });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid', error: error.message });
    }
};

module.exports = auth;
