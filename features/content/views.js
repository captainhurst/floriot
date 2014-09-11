var utils = require('./utilities.js');

module.exports.helloWorld = function(req, res){
	res.send("Hello World!");
	res.render('index', context);
}

module.exports.profile = function(req, res){
	res.send("The Profile");
}