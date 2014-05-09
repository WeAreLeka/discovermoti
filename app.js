
// Require Modules
var express = require('express');
var exphbs  = require('express3-handlebars');
var http = require('http');
var path = require('path');
var _ = require('underscore');
var siteData = require('site.json');

// Require routes
var routes = require('routes');

// Use Handlebars as templage engine
var hbs = exphbs.create({
	defaultLayout: 'main.hbs',
	partialsDir: 'views/partials/'
});

// Setup the Express App
var app = express();
app.configure(function(){
	app.set('port', process.env.PORT || 3000);

	app.set('views', __dirname + '/views');

	app.engine('hbs', hbs.engine);
	app.set('view engine', 'hbs');

	app.use(express.favicon());

	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// Use app for dev purpose
app.configure('development', function(){
	app.use(express.errorHandler());
});

// Set Routes
app.get('/', routes.index);
app.get('/:lang', routes.index);
app.get('/:lang/moti', routes.moti);
app.get('/:lang/faq', routes.faq);
app.get('/:lang/preorder', routes.preorder);
app.get('/:lang/contact', routes.contact);
//
// Create server and listen on port 3000
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
