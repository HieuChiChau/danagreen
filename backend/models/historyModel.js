const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    trash: {
        metal: { type: Number, default: 0 },
        plastic: { type: Number, default: 0 },
        paper: { type: Number, default: 0 },
        date: { type: Date, default: Date.now },
        randomNumber: { type: Number, default: 0 }
    }

});

module.exports = mongoose.model('History', HistorySchema);
