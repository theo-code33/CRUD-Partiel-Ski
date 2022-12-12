const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
        min: [0, 'Stars must be at least 1 star'],
        max: [5, 'Stars must be a maximum of 5 stars']
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

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment