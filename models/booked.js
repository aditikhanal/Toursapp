var mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    name: String,
    address: String,
    roomtype:String,
    numberofrooms:Number,
    arrivalDate:{type:Date,
    required:[true,"Please provide arrival date"],},
    departureDate:Date,
    priceperroom:Number,
    total:Number,
    username:String,
    useremail:String,
    usercontact:Number,
    bookedDate: {
        type: Date,
         default: Date.now
       } 
});

module.exports = mongoose.model('booking', BookingSchema)
