
/*
 * GET faq page.
 */

var _ = require('underscore');
var siteData = require('../site.json');

exports.faqRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "main",
			"title": "FAQ",
			"link": "faq",
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
			"title": "FAQ",
			"link": "faq",
			"lang": "fr",
			"en": 0,
			"fr": 1,
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('FAQ-' + req.params.lang, helper);
};

