const Shop = require('../models/Shop.model')
const Post = require('../models/Post.model')
const Booking = require('../models/Booking.model')
const Comment = require('../models/Comment.model')

const ShopController = {
    getAll: async (req, res) => {
        try {
            const shops = await Shop.find()
                                .populate('posts')
            if(shops.length <= 0) return res.status(404).send('Shops not found')
            res.send(shops)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getOne: async (req, res) => {
        const {email, password} = req.body
        try {
            const shop = await Shop.find({email: email, password: password})
            if(!shop) return res.status(404).send('Shop not found')
            res.send(shop)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getById: async (req, res) => {
        const { id } = req.params
        try {
            const shop = await Shop.findById(id)
            .populate('posts')
            if(!shop) return res.status(404).send(`Shop with id ${id} not found`)
            res.send(shop)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    create: async (req, res) => {
        const newShop = new Shop(req.body)
        try {
            await newShop.save()
            res.status(201).send(newShop)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const updatedShop = req.body
        try {
            const shop = await Shop.findByIdAndUpdate(id, updatedShop)
            if(!shop) return res.status(404).send(`Shop with id ${id} not found`)
            res.status(201).send(shop)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const shopDeleted = await Shop.findByIdAndDelete(id) 
            const posts = await Post.find({shop: id})
            posts.forEach(async post => {
                await Post.findByIdAndDelete(post._id)
                await Booking.deleteMany({post: post._id})
                await Comment.deleteMany({post: post._id})
            })
            if(!shopDeleted) return res.status(404).send(`Shop with id ${id} not found`)
            res.send(shopDeleted)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getBookingsByShop: async (req, res) => {
        const { id } = req.params
        try {
            const posts = await Post.find({shop: id})
                                    .populate('bookings')
            if (posts.length <= 0) return res.status(404).send(`Shop doesn't have post`)
            let bookings = []
            posts.forEach(post => {
                    bookings.push(...post.bookings)
            })
            console.log('bookings => ', bookings);
            if(bookings.length <= 0) return res.status(404).send(`Shop doesn't have booking`)
            res.send(bookings)
        }catch (error){
            res.status(400).send({message: error.message})
        }
            
    }
}

module.exports = ShopController