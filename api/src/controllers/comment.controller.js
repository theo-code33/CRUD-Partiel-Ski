const Comment = require('../models/Comment.model')
const Post = require('../models/Post.model')

const CommentController = {
    getAll: async (req, res) => {
        try {
            const comments = await Comment.find()
                                            .populate('post')
            if(comments.length <= 0) return res.status(404).send('Comments not found')
            res.send(comments)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    create: async (req, res) => {
        const data = req.body
        const newComment = new Comment(data)

        const post = await Post.findById(data.post)
        if(!post) return res.status(404).send('Post not found')
        try {
            post.comments.push(newComment._id)
            await post.save()
            await newComment.save()
            res.status(201).send(newComment)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = CommentController