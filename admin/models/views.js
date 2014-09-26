var adminViews = {};

adminViews.modelList = function(req, res){
	var context = {
		"headerVar": "This is a model list header",
		"footerVar": "This is a footer!",
		"bodyVar": "This is where the body lives"
	}
	res.render('index', context);
	// res.send("gets models here");
}

module.exports = adminViews;