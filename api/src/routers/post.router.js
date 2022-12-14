const express = require('express')
const PostController = require('../controllers/post.controller')
const router = express.Router()

const endPoint = '/posts'

router.get(`${endPoint}`, PostController.getAll)
router.get(`${endPoint}/:id`, PostController.getById)
router.get(`/:id${endPoint}`, PostController.getByShop)
router.post(`${endPoint}`, PostController.create)
router.put(`${endPoint}/:id`, PostController.update)
router.delete(`${endPoint}/:id`, PostController.delete)

module.exports = router