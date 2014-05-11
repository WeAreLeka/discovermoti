
/*
 * GET home page.
 */

var _ = require('underscore');
var siteData = require('site.json');

// Set routes
var moti = require('routes/moti');
var faq = require('routes/faq');
var preorder = require('routes/preorder');
var contact = require('routes/contact');

exports.landing = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing",
			"title": "Welcome!",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing",
			"title": "Welcome!",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('index-' + req.params.lang, helper);
};

exports.moti = moti.motiRoute;
exports.faq = faq.faqRoute;
exports.contact = contact.contactRoute;
exports.preorder = preorder.preorderRoute;
