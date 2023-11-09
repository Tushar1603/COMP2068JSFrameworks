var express = require('express');
var router = express.Router();

// Import the EJS renderer
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for Karan Aujla
router.get('/', function(req, res, next) {
  res.render('aujla', { title: 'aujla' });
});

// Route for Sidhu Moosewala
router.get('/smw', function(req, res, next) {
  res.render('smw', { title: 'smw' });
});

// Route for Arjan Dhillon
router.get('/arjan', function(req, res, next) {
  res.render('arjan', { title: 'arjan' });
});

module.exports = router;
