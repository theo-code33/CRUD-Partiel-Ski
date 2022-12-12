const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', true);

module.exports = connect = () => {
    try {
        mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}`)
        console.log('MongoDB connected !');
    } catch (error) {
        console.log(error);
    }
}