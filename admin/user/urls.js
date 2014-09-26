var express = require('express');
var app = express();
var router = express.Router();
var views = require('./views');

router.get('/user', views.adminSection);
router.get('/user/login', views.login);

module.exports = router;
