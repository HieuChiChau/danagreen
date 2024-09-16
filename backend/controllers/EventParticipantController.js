const mongoose = require('mongoose');
const EventParticipant = require('../models/eventParticipantModel');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

const joinEvent = async (req, res) => {
    const { eventId, code } = req.body;
    const userId = req.user.id;

    if (!eventId || !code) {
        return res.status(400).json({ success: false, message: 'Event ID and code are required.' });
    }

    try {
        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({ success: false, message: 'Invalid Event ID.' });
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: 'Invalid User ID.' });
        }

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found.' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const existingParticipant = await EventParticipant.findOne({
            userId,
            eventId,
        });

        if (existingParticipant) {
            return res.status(400).json({ success: false, message: 'You have already joined this event.' });
        }

        const participant = new EventParticipant({
            userId,
            eventId,
        });

        await participant.save();
        user.score += 100;
        await user.save();

        res.status(200).json({ success: true, message: 'Joined event successfully!' });
    } catch (error) {
        console.error('Error joining event:', error);
        res.status(500).json({ success: false, message: 'Error joining event.' });
    }
};

module.exports = { joinEvent };