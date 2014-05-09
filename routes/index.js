
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

exports.moti = function(req, res){
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

exports.faq = function(req, res){
	if (req.params.lang == "en" || req.params.lang == null) {
		var pageData = {
			"layout": "landing.hbs",
			"title": "FAQ",
			"lang": "en",
			"description": "",
			"keywords": ""
		};
		req.params.lang = "en";
	}
	else {
		var pageData = {
			"layout": "landing.hbs",
			"title": "FAQ",
			"lang": "fr",
			"description": "",
			"keywords": ""
		};
	}

	var helper = _.extend(siteData, pageData);
	res.render('FAQ-' + req.params.lang, helper);
};

exports.contact = function(req, res){
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

exports.preorder = function(req, res){
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

