const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventParticipantSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EventParticipant', EventParticipantSchema);
