var express = require('express');
var router = express.Router();
var views = require('./views');

router.get('/', views.helloWorld);
router.get('/profile', views.profile)
module.exports = router;
