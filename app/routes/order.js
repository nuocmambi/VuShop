var express = require('express');
var router = express.Router();

var Order = require('../model/Order');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('order');
});


router.post('/', function(req, res){
  console.log(req.body.navn);

  res.render('Confirm');


});

module.exports = router;
