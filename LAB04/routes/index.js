const express = require('express');
const router = express.Router();

// Import the EJS renderer
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aujla', function(req, res, next) {
  res.render('aujla', { title: 'Karan Aujla' });
});

router.get('/smw', function(req, res, next) {
  res.render('smw', { title: 'Sidhu Moosewala' });
});

router.get('/arjan', function(req, res, next) {
  res.render('arjan', { title: 'Arjan Dhillon' });
});

module.exports = router;
