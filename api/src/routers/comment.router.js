const express = require('express')
const CommentController = require('../controllers/comment.controller')
const router = express.Router()

const endPoint = '/comments'

router.get(`${endPoint}`, CommentController.getAll)
router.post(`${endPoint}`, CommentController.create)

module.exports = router