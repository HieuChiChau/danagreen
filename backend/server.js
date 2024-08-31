const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs')
const https = require('https')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const host = process.env.IP

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')

connectDB.connect()

app.use(cors({
    origin: `https://${host}:5173`, // Địa chỉ của ứng dụng React

}));

//MiddleWare
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

// app.listen(port, host, () => {
//     console.log(`App listening at http://${host}:${port}`);
// });

const httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

httpsServer.listen(port, () => {
    console.log(`Server đang chạy ở https://${host}:${port}`);
});