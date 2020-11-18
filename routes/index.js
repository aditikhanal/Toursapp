var express = require('express');
var router = express.Router();
var hotels = require('../models/Hotels');

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




module.exports = router;
