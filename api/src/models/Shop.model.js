const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 character long']
    },
    logoUrl: {
        type: String,
        default: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop