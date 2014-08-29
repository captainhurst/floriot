var express = require('express');
var router = express.Router();
var app = express();
// Include Applications Here
var content = require('./applications/content/urls');


// Add Applications To The App Path At Correct Url
module.exports = app.use("/", content);

