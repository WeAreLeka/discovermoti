
/*
 * GET home page.
 */

var _ = require('underscore');
var siteData = require('../site.json');

// Set routes
var moti = require('../routes/moti');
var faq = require('../routes/faq');
var preorder = require('../routes/preorder');
var contact = require('../routes/contact');

exports.landing = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing",
			"title": "Welcome!",
			"link": "",
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
			"layout": "landing",
			"title": "Welcome!",
			"link": "",
			"lang": "fr",
			"en": 0,
			"fr": 1,
			"description": "",
			"keywords": ""
		};
		req.params.lang = "fr";
	}

	var helper = _.extend(siteData, pageData);
	res.render('index-' + req.params.lang, helper);
};

exports.moti = moti.motiRoute;
exports.faq = faq.faqRoute;
exports.contact = contact.contactRoute;
exports.preorder = preorder.preorderRoute;
