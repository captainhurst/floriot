var mongoose = require('mongoose');

var models = {};


models.User = mongoose.model('User', {
	firstName: String,
	lastName: String,
	email: String,
	isVerified: Boolean,
	age: Number,
	userType: String,
	bio: String,
	registrationDate: Date
});


module.exports = models;

