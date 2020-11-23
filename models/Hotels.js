var mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    name: String,
    address: String,
    filename: String,
    description: String,
    facilities:Object,
   


});

module.exports = mongoose.model('Hotel', HotelSchema)
