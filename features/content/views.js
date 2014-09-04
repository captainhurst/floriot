var utils = require('./utilities.js');

module.exports.helloWorld = function(req, res){
	res.send("Hello World!");
}

module.exports.profile = function(req, res){
	res.send("The Profile");
}