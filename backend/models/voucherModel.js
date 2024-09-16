const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    pointsRequired: {
        type: Number,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    brand: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Voucher', VoucherSchema);