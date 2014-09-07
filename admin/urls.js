var express = require('express');
var app = express();
var user = require('./user/urls');
var models = require('./models/urls');

module.exports = app.use("/admin", user);
module.exports = app.use("/models", models);
