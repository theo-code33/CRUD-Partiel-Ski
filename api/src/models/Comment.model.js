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
    starts: {
        type: Number
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