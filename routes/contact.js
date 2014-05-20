
/*
 * GET contact page.
 */

var _ = require('underscore');
var siteData = require('../site.json');

exports.contactRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "main",
			"title": "Contact us",
			"link": "contact",
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
			"title": "Contactez-nous",
			"link": "contact",
			"lang": "fr",
			"en": 0,
			"fr": 1,
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('contact-' + req.params.lang, helper);
};

