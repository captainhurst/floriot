var mongoose = require('mongoose');

var models = {};


models.User = mongoose.model('User', {
	firstName: String,
	lastName: String,
	email: String
});


module.exports = models;

