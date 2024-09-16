const cloudinary = require('../config/cloundinary');

// Hàm tải hình ảnh lên Cloudinary
const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return result; // Trả về kết quả chứa URL hình ảnh
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

module.exports = { uploadImage };
