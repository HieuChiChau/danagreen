const path = require('path')
const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const app = express()
const port = process.env.PORT

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db')

connectDB.connect()

//MiddleWare
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
