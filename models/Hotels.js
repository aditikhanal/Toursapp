var mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    name: String,
    address: String,


});

module.exports = mongoose.model('Hotel', HotelSchema)
