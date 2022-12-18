const express = require('express')
const ShopController = require('../controllers/shop.controller')
const router = express.Router()

const endPoint = '/shops'

router.post(`${endPoint}/connect`, ShopController.connect)
router.get(`${endPoint}/:id`, ShopController.getById)
router.get(`${endPoint}/:id/bookings`, ShopController.getBookingsByShop)
router.post(`${endPoint}`, ShopController.create)
router.put(`${endPoint}/:id`, ShopController.update)
router.delete(`${endPoint}/:id`, ShopController.delete)

module.exports = router