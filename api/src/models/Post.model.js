const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    weight: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    booking: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post