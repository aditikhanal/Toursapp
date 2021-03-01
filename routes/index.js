var express = require('express');
var router = express.Router();
var hotels = require('../models/Hotels');
var Booked = require("../models/booked")
var bookedadventure=require("../models/bookedadventure")
var adventures=require("../models/Adventures")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nepal Tours' });
});

router.get('/viewonehotel', function (req, res, next) {
  res.render('viewonehotel', { title: 'Nepal Tours' });
});



var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bookstop.wlit@gmail.com',
    pass: 'sjzNexwRkCaVS5X'
  }
});



router.get("/hotels", function (req, res, next) {

  hotels.find().exec((err, Hotels) => {


    res.render("Hotels", { Hotels })


  })
});


router.get("/adventures", function (req, res, next) {

  adventures.find().exec((err, Adventures) => {


    res.render("Adventures", { Adventures })


  })
});

router.get('/viewoneadventure/:_id', function (req, res, next) {
  adventures.findById({ _id: req.params._id }).then((Adventures) => {


    res.render('viewoneadventure', { Adventures });
  })
    .catch((err) => {
      res.render('error');
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


router.all("/book/:_id", function (req, res) {

  hotels.findById({ _id: req.params._id }).then((Hotel) => {

    var booking = new Booked
      ({
        name: Hotel.name,
        address: Hotel.address,
        arrivalDate: req.body.arrivalDate,
        departureDate: req.body.departureDate,
        numberofrooms: req.body.numberofrooms,
        roomtype: req.body.Roomtype,
        priceperroom: Hotel.Roomtype[req.body.Roomtype],
        username:req.body.username,
        usercontact:req.body.usercontact,
        useremail:req.body.useremail
  })

    var mailOptions = {
      from: 'bookstop.wlit@gmail.com',
      to: req.body.useremail,
      subject: "Reservation Details",
      html: "Dear "+req.body.username+", <br> <b> Greetings from Nepal Tours!!! </b> <br>" +"<p>Thank you for your booking at "+ Hotel.name+". <br> Your reservation details are:</p>"+"<b>Roomtype:</b>"+req.body.Roomtype+"<br> <b> Price per room: </b>"+Hotel.Roomtype[req.body.Roomtype]+"<br> <b> Number of rooms: </b>"+req.body.numberofrooms +"<br> <b> Arrival Date: </b>"+req.body.arrivalDate+"<br> <b> Departure Date: </b>"+req.body.departureDate+"<br> You can receive a call from the hotel to confirm your reservation! Thank you!!",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })

    var promise = booking.save()
    promise.then((booking) => {
      res.redirect('/adventures')
    })




  })
    .catch((err) => {
      res.render('error');
    })


});


router.all("/bookadventure/:_id", function (req, res) {

  adventures.findById({ _id: req.params._id }).then((Adventures) => {

    var booking = new bookedadventure
      ({
        name: Adventures.name,
        address: Adventures.address,
        arrivalDate: req.body.arrivalDate,
        noofpeople:req.body.numberofpeople,
        price:Adventures.price,
        username:req.body.username,
        usercontact:req.body.usercontact,
        useremail:req.body.useremail
  })

    var mailOptions = {
      from: 'bookstop.wlit@gmail.com',
      to: req.body.useremail,
      subject: "Reservation Details",
      html: "hello"
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })

    var promise = booking.save()
    promise.then((booking) => {
      res.redirect('/hotels')
    })




  })
    .catch((err) => {
      res.render('error');
    })


});




module.exports = router;
