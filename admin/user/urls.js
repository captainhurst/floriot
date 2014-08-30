var express = require('express');
var app = express();
var router = express.Router();
var views = require('./views');

router.get('/', views.adminSection);

module.exports = router;
