var config = require('./config/config.js');



var settings = {

	//Path To Features
	"features"   : 
				[
					'./admin/*.js',
					'./features/*.js',
				],
	// Build Configuration
	"config"       : config			
};

module.exports = settings;