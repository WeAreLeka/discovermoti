
/*
 * GET home page.
 */

var _ = require('underscore');
var siteData = require('site.json');

exports.index = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Welcome!",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Welcome!",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('index-' + req.params.lang, helper);
};
