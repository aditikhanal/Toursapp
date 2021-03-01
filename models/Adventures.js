var mongoose = require('mongoose')

const AdventuresSchema = mongoose.Schema({
    name: String,
    address: String,
    filename: String,
    description: String,
    price:String
    
    


});

module.exports = mongoose.model('Adventure', AdventuresSchema)