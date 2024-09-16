const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'djpgywowp',
    api_key: '215985556738337',
    api_secret: process.env.API_SECRET
});

module.exports = cloudinary;
