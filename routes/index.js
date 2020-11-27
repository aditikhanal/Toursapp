var express = require('express');
var router = express.Router();
var hotels = require('../models/Hotels');
var Booked=require("../models/booked")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nepal Tours' });
});

router.get('/viewonehotel', function (req, res, next) {
  res.render('viewonehotel', { title: 'Nepal Tours' });
});



router.get("/hotels", function (req, res, next) {

  hotels.find().exec((err, Hotels) => {


    res.render("Hotels", { Hotels })


  })
});

router.get('/viewonehotel/:_id', function (req, res, next) {
  hotels.findById({ _id: req.params._id }).then((Hotel) => {


    res.render('viewonehotel', { Hotel });
  })
    .catch((err) => {
      res.render('error');
    })

});


router.post("/book", function (req, res) {

  var booking = new Booked
    ({
      name:req.body.name,
      address:req.body.address,
      arrivalDate:req.body.arrivalDate,
      departureDate:req.body.departureDate
    
    })
  var promise = booking.save()
  promise.then((booking) => {
    res.redirect('/hotels')
  })
});




module.exports = router;
