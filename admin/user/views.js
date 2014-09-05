
module.exports.adminSection = function(req, res){
	var context = {
		"headerVar": "This is a header",
		"footerVar": "This is a footer!",
		"bodyVar": "This is where the body lives"
	}
	res.render('index', context);
}