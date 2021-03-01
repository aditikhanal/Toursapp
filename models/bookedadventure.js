var mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    name: String,
    address: String,
    arrivalDate:{type:Date,
    required:[true,"Please provide arrival date"],},
    price:Number,
    numberofpeople:Number,
    username:String,
    useremail:String,
    usercontact:Number,
    bookedDate: {
        type: Date,
         default: Date.now
       } 
});

module.exports = mongoose.model('bookedadventure', BookingSchema)