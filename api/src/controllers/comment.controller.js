const Comment = require('../models/Comment.model')

const CommentController = {
    getAll: async (req, res) => {
        try {
            const comments = await Comment.find()
                                            .populate('Post')
            if(comments.length <= 0) return res.status(404).send('Comments not found')
            res.send(comments)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getById: async (req, res) => {
        const { id } = req.params
        try {
            const comment = await Comment.findById(id)
                                            .populate('Post')
            if(!comment) return res.status(404).send(`Comment with id ${id} not found`)
            res.send(comment)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    create: async (req, res) => {
        const newComment = new Comment(req.body)
        try {
            await newComment.save()
            res.status(201).send(newComment)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = CommentController