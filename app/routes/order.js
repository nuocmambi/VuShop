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

  res.render('confirm', { navn : navn, email : email, tlfNr : tlfNr, beskrivelse: beskrivelse});
  //res.redirect('/order/confirm');

});

module.exports = router;
