var uxjs = require('../develop/global-js.js');
var uxcss = require('../develop/global-css.js');



var config = {
	"buildUx": {
		"js" : {
			"globals": uxjs.globals,
			"ie": uxjs.ieFix,
		},
		"css" : {
			"globals": uxcss.globals,
			"ie": uxcss.ieFix
		},
		"mobile" : {

		}
	}
};

module.exports = config;