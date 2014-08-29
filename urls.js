var express = require('express');
var router = express.Router();
var app = express();
var content = require('./applications/content/urls');

module.exports = app.use("/", content);

