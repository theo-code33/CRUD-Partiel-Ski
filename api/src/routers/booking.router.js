const express = require('express')
const BookingController = require('../controllers/booking.controller')
const router = express.Router()

const endPoint = '/bookings'

router.get(`${endPoint}`, BookingController.getAll)
router.get(`${endPoint}/:id`, BookingController.getById)
router.post(`${endPoint}`, BookingController.create)


module.exports = router