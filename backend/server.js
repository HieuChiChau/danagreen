const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db')

connectDB.connect()
// Cấu hình CORS
app.use(cors({
    origin: 'http://localhost:5173', // Địa chỉ của ứng dụng React
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

//MiddleWare
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
