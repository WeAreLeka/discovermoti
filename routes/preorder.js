
/*
 * GET Preorder page.
 */

var _ = require('underscore');
var siteData = require('../site.json');

exports.preorderRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "main",
			"title": "Pre-order",
			"link": "preorder",
			"lang": "en",
			"en": 1,
			"fr": 0,
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "main",
			"title": "Précommander Moti",
			"link": "preorder",
			"lang": "fr",
			"en": 0,
			"fr": 1,
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('preorder', helper);
};

