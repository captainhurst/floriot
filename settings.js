var config = require('./config/config.js');

var settings = {};


// ARRAY OF APPLICATION FEATURES INCLUDED IN THE APPLICATION
settings.features = [
						'./admin/*.js',
						'./features/*.js',
					];

// CONFIG OPTIONS OBJECT IN THE CONFIG FOLDER
settings.config = config;



// CONFIGURATION MESSAGES SHOWN IN THE CLI
settings.cli = {
		"serverMessage": "[Floriot] Server Started on port: ",
		"restartMessage": "[Floriot] Server Restarted!"
	};


module.exports = settings;