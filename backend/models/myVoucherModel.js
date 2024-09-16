const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyVoucherSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    voucherId: {
        type: Schema.Types.ObjectId,
        ref: 'Voucher',
        required: true
    },
    isUsed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('MyVoucher', MyVoucherSchema);
