var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET About Us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About Us'});
});

/* GET Contact Us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact Us'});
});

module.exports = router;
