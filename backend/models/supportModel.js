const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupportRequestSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    issue: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SupportRequest', SupportRequestSchema);
