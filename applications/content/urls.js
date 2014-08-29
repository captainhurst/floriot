var express = require('express');
var router = express.Router();
var views = require('./views.js');

router.get('/', views.helloWorld);

module.exports = router;
