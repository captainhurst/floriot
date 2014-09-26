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
	},
	"templates" : {
		"toWatch" : [
			"./develop/templates/scaffold/**.html",
			"./develop/templates/components/**.html",	
			"./develop/templates/layout/**.html"			
		],
		"toCompile" : [
			"./develop/templates/scaffold/**.html",
			"./develop/templates/components/**.html",
			"./develop/templates/layout/**.html",						
			"!./develop/templates/components/**.html"

		]
	},
	"database":{
		"name": "floriot"
	}
};

module.exports = config;