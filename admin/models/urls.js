var express = require('express');
var app = express();
var router = express.Router();
var views = require('./views');

router.get('/models', views.modelList);

module.exports = router;
