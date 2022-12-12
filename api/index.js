const connect = require('./config/mongoose.config')
const express = require('express')
const app = express()
const morgan = require('morgan')
connect()

app.use(morgan('dev'))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello Api Partiel S1')
})

app.listen(PORT, () => {
    console.log(`Api listen on port ${PORT}. On URL => http://localhost:${PORT}`);
})