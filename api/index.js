const connect = require('./config/mongoose.config')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const postRouter = require('./src/routers/post.router')
const commentRouter = require('./src/routers/comment.router')
const bookingRouter = require('./src/routers/booking.router')

connect()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/api', postRouter)
app.use('/api', commentRouter)
app.use('/api', bookingRouter)

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello Api Partiel S1')
})

app.listen(PORT, () => {
    console.log(`Api listen on port ${PORT}. On URL => http://localhost:${PORT}`);
})