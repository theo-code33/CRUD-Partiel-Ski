const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    telephoneNumber: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking