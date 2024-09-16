const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: { type: String, required: true, },
    introduce: { type: String, default: '' },
    location: { type: String, default: '' },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    rules: { type: String, default: '' },
    startTime: { type: Date, required: true, },
    endTime: { type: Date, required: true, },
    code: { type: String, default: '' },
    requirements: { type: String, default: '' },
    howToScore: { type: String, default: '' },
    awards: { type: String, default: '' },
    note: { type: String, default: '' }
});

module.exports = mongoose.model('Event', EventSchema);
