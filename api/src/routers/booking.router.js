const express = require('express')
const BookingController = require('../controllers/booking.controller')
const router = express.Router()

const endPoint = '/bookings'

router.post(`${endPoint}`, BookingController.create)


module.exports = router