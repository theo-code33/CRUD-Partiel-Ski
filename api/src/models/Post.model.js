const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: 'https://media.istockphoto.com/id/149396055/fr/photo/paire-de-skis-de-fond.jpg?s=612x612&w=0&k=20&c=KskahcAlZZZ2BvCW0ugyWRYzHu4XAQGCvVBdq1Y80wI='
    },
    weight: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
        min: [140, 'Size must be at least 140cm'],
        max: [190, 'Size must be a maximum of 190cm']
    },
    style: {
        type: String,
        required: true,
        enum: ['Freeride', 'Freestyle', 'Piste', 'Polyvalant']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
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
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    bookings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post