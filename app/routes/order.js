var express = require('express');
var router = express.Router();

var Order = require('../model/Order');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('order');
});



router.post('/', function(req, res){
  var navn = req.body.navn;
  var email = req.body.email;
  var tlfNr = req.body.tlfNr;
  var beskrivelse = req.body.beskrivelse;


  req.checkBody('navn', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('tlfNr', 'tlfNr is required').notEmpty();

  res.render('bestilling');

});

module.exports = router;
