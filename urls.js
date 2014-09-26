var express = require('express');
var router = express.Router();
var app = express();

//Admin Users
	var models = require('./admin/models/urls');
	var user = require('./admin/user/urls');

// Include Applications Here
	var content = require('./features/content/urls');
	var boilerplate = require('./features/boilerplate/urls');

	//Admin Routes
	router.use('/admin', models);
	router.use('/admin', user);

	// Add Applications To The App Path At Correct Url
	router.use("/", content);
	router.use("/boilerplate", boilerplate);

module.exports = router;