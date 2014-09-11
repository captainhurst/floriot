var express = require('express');
var router = express.Router();
var app = express();

//Admin Users
var models = require('./admin/models/urls');
var user = require('./admin/user/urls');
// console.log(admin.stack);
// module.exports = app.use("/admin", admin);
module.exports = app.use('/admin', models);
module.exports = app.use('/admin', user);

// Include Applications Here
var content = require('./features/content/urls');
var boilerplate = require('./features/boilerplate/urls');

// Add Applications To The App Path At Correct Url
module.exports = app.use("/", content);
module.exports = app.use("/boilerplate", boilerplate);
