const Booking = require('../models/Booking.model')
const Post = require('../models/Post.model')

const BookingController = {
    create: async (req, res) => {
        const data = req.body
        const newBooking = new Booking(data)

        const post = await Post.findById(data.post)
        if(!post) return res.status(404).send('Post not found')
        try {
            post.bookings.push(newBooking._id)
            post.isAvailable = false
            await post.save()
            await newBooking.save()
            res.status(201).send(newBooking)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = BookingController