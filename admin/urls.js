var express = require('express');
var app = express();
var user = require('./user/urls');

module.exports = app.use("/", user);
