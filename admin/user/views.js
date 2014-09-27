var models = require('./models');


module.exports = {

	adminSection : function (req, res){
			var context = {
				"headerVar": "This is a user header",
				"footerVar": "This is a footer!",
				"bodyVar": "This is where the body lives"
			}
			res.render('index', context);
			// res.send("gets user here");
		},

	login: function (req, res){
			res.send("login");
		},

	mongoTest : function (req, res){
			var context = {
				"headerVar": "This is a user header",
				"footerVar": "This is a footer!",
				"bodyVar": "This is where the body lives"
			}
			res.render('admin/admin-index', context);
			// res.send("gets user here");
		},

	mongoTestSave : function (req, res){

			var context = {
				"firstName" : req.body.first_name,
				"lastName" : req.body.last_name,
				"email" : req.body.email
			}
			var user = new models.User(context);
			user.save(function (err) {
			  if (err){
			  	console.log(err);
			  }else{
			  	res.send({success: true});

			  }
			});
		}

}

