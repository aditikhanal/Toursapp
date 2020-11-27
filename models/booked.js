var mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    name: String,
    address: String,
    Roomtype:String,
    numberofrooms:String,
    arrivalDate:Date,
    departureDate:Date,
    Total:String,
    bookedDate: {
        type: Date,
         default: Date.now
       } 
      
    


});

module.exports = mongoose.model('booking', BookingSchema)
