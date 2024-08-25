const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const host = '172.26.137.248'

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db')

connectDB.connect()

app.use(cors({
    origin: 'http://172.26.137.248:5173', // Địa chỉ của ứng dụng React

}));



//MiddleWare
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)

app.listen(port, host, () => {
    console.log(`App listening at http://${host}:${port}`);
});
