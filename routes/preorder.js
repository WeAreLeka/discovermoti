
/*
 * GET Preorder page.
 */

var _ = require('underscore');
var siteData = require('site.json');

exports.preorderRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Pre-order",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Précommander Moti",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('preorder-' + req.params.lang, helper);
};

