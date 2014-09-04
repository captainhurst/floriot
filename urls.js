var express = require('express');
var router = express.Router();
var app = express();

//Admin Users
var admin = require('./admin/urls');
module.exports = app.use("/admin", admin);


// Include Applications Here
var content = require('./features/content/urls');
var boilerplate = require('./features/boilerplate/urls');

// Add Applications To The App Path At Correct Url
module.exports = app.use("/", content);
module.exports = app.use("/boilerplate", boilerplate);
