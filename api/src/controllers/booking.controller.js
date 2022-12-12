const Booking = require('../models/Booking.model')
const Post = require('../models/Post.model')

const BookingController = {
    getAll: async (req, res) => {
        try {
            const bookings = await Booking.find()
                                    .populate('post')
            if(bookings.length <= 0) return res.status(404).send('Bookings not found')
            res.send(bookings)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    getById: async (req, res) => {
        const { id } = req.params
        try {
            const booking = await Booking.findById(id)
                                            .populate('post')
            if(!booking) return res.status(404).send(`Booking with id ${id} not found`)
            res.send(booking)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    create: async (req, res) => {
        const data = req.body
        const newBooking = new Booking(data)

        const post = await Post.findById(data.post)
        if(!post) return res.status(404).send('Post not found')
        try {
            post.bookings.push(newBooking._id)
            await post.save()
            await newBooking.save()
            res.status(201).send(newBooking)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = BookingController