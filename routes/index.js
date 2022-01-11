var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Umar Faruque' , name : "my name"});
});

module.exports = router;