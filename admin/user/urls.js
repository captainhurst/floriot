var express = require('express');
var app = express();
var router = express.Router();
var views = require('./views');

router.get('/model/:modelName/', views.adminModel);
router.post('/model/:modelName/add/', views.addModel);
router.get('/model/:modelName/list/', views.modelItems);
router.get('/user/login', views.login);
router.get('/user/test', views.mongoTest);
router.post('/user/test', views.mongoTestSave)
module.exports = router;
