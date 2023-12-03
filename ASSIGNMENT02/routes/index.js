const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chefs Book' });
});

router.get('/recipe1', function(req, res, next) {
  res.render('recipe1', { title: 'Paneer Lababdaar' });
});

router.get('/recipe2', function(req, res, next) {
  res.render('recipe2', { title: 'a' });
});

router.get('/recipe3', function(req, res, next) {
  res.render('recipe3', { title: 'b' });
});

router.get('/recipe4', function(req, res, next) {
  res.render('recipe4', { title: 'c' });
});

router.get('/recipe5', function(req, res, next) {
  res.render('recipe5', { title: 'd' });
});

router.get('/recipe6', function(req, res, next) {
  res.render('recipe6', { title: 'e' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'f' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'g' });
});

module.exports = router;
