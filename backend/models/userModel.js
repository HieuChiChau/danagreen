const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        phone: { type: String, default: '' },
        birthDate: { type: Date, default: null },
        hobby: { type: String, default: '' },
        address: { type: String, default: '' },
        image: { type: String, default: '' }
    },
    score: {
        type: Number,
        default: 0,
    }
})

//Mã hoá
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});


UserSchema.methods.matchPassword = async function (password) {
    // return await bcrypt.compare(password, this.password)

    const isMatch = await bcrypt.compare(password, this.password);
    console.log('Mật khẩu so sánh:', isMatch);
    return isMatch;
}

module.exports = mongoose.model('User', UserSchema)

