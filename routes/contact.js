
/*
 * GET contact page.
 */

var _ = require('underscore');
var siteData = require('site.json');

exports.contactRoute = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Contact us",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing.hbs",
			"title": "Contactez-nous",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('contact-' + req.params.lang, helper);
};

