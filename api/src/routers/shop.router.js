const express = require('express')
const ShopController = require('../controllers/shop.controller')
const router = express.Router()

const endPoint = '/shops'

router.get(`${endPoint}`, ShopController.getAll)
router.get(`${endPoint}/connect`, ShopController.getAllToConnect)
router.get(`${endPoint}/:id`, ShopController.getById)
router.post(`${endPoint}`, ShopController.create)
router.put(`${endPoint}/:id`, ShopController.update)
router.delete(`${endPoint}/:id`, ShopController.delete)

module.exports = router