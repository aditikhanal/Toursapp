var mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    name: String,
    address: String,
    filename: String,
    description: String,
    stars:Number,
    facilities:Object,
    Roomtype:Object,
    


});

module.exports = mongoose.model('Hotel', HotelSchema)
