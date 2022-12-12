const Post = require('../models/Post.model')

const PostController = {
    getAll: async (req, res) => {
        try {
            const posts = await Post.find()
                                    .populate('comments')
                                    .populate('bookings')
            if(posts.length <= 0) return res.status(404).send('Posts not found')
            res.send(posts)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getById: async (req, res) => {
        const { id } = req.params
        try {
            const post = await Post.findById(id)
                                    .populate('comments')
                                    .populate('bookings')
            if(!post) return res.status(404).send(`Post with id ${id} not found`)
            res.send(post)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    create: async (req, res) => {
        const newPost = new Post(req.body)
        try {
            await newPost.save()
            res.status(201).send(newPost)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const updatedPost = req.body
        try {
            const post = await Post.findByIdAndUpdate(id, updatedPost)
            if(!post) return res.status(404).send(`Post with id ${id} not found`)
            res.status(201).send(post)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const deletedPost = await Post.findByIdAndDelete(id)
            if(!deletedPost) return res.status(404).send(`Post with id ${id} not found`)
            res.send(deletedPost)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = PostController