const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const supportRoutes = require('./routes/supportRoutes');
const historyRoutes = require('./routes/historyRoutes');
const voucherRoutes = require('./routes/voucherRoutes');
const eventRoutes = require('./routes/eventRoutes');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');
const eventParticipantRoutes = require('./routes/eventParticipantRoutes');

connectDB.connect();
app.use(cors())

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api', supportRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/voucher', voucherRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/participant', eventParticipantRoutes);

app.get('/', (req, res) => {
    res.send('API Working')
})

// Listen on HTTP (Render handles HTTPS)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
