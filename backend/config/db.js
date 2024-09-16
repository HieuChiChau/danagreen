const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connect Successfully")
    } catch (error) {
        console.log("Connect Failure")
    }
}

module.exports = { connect }