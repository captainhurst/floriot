var express = require('express');
var app = express();
var router = express.Router();
var views = require('./views');

router.get('/user', views.adminSection);

module.exports = router;
