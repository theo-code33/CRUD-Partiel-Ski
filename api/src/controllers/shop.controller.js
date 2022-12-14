const Shop = require('../models/Shop.model')

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
    getAllToConnect: async (req, res) => {
        try {
            const shops = await Shop.find()
                                .select('email password')
            if(shops.length <= 0) return res.status(404).send('Shops not found')
            res.send(shops)
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
            if(!shopDeleted) return res.status(404).send(`Shop with id ${id} not found`)
            res.send(shopDeleted)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = ShopController