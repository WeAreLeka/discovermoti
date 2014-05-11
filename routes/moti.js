
/*
 * GET Moti page.
 */

var _ = require('underscore');
var siteData = require('site.json');

exports.motiRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Moti",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Moti",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('moti-' + req.params.lang, helper);
};

