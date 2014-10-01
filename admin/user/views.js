var models = require('./models');
var admin = require('./admin');

module.exports = {

	adminModel : function (req, res){
			var modelUrl = req.params.modelName;
			res.render('admin/admin-model', admin[modelUrl]);			
			// res.send(admin[modelUrl]);

		},

	addModel : function (req, res){
			// var modelUrl = req.params.modelName;
			// res.render('admin/admin-model', admin[modelUrl]);			
			// res.send(admin[modelUrl]);
			console.log(req.body);
			var user = new models.User(req.body);
			user.save(function(err){
				if(err){
					res.send({success: false});
				}else{
					res.send(req.body);
				}
			})
		},

	modelItems : function (req, res){
			// var modelUrl = req.params.modelName;
			// res.render('admin/admin-model', admin[modelUrl]);			
			// res.send(admin[modelUrl]);
			var users = new models.User;
			// var users = user.;
			res.send(users);
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

