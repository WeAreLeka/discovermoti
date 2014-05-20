// Require Modules
var express = require('express');
var path = require('path');
var http = require('http');
var siteData = require('./site.json');

// Middleware
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Template Engine
var exphbs  = require('express3-handlebars');
var hbs = exphbs.create({
	defaultLayout: 'main',
	partialsDir: 'views/partials/'
});

// Debug
var debug = require('debug')('discovermoti');

// Require routes
var routes = require('./routes');

// Initiate Express App
var app = express();

// Setup the Express App
app.set('port', process.env.PORT || 3000);
app.set('env', 'developement');

app.set('views', path.join(__dirname, 'views/pages'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// Set routes
app.get('/', routes.landing);
app.get('/:lang', routes.landing);
app.get('/:lang/moti', routes.moti);
app.get('/:lang/faq', routes.faq);
app.get('/:lang/preorder', routes.preorder);
app.get('/:lang/contact', routes.contact);

// app.use('/', routes);
// app.use('/users', users);

/// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers

// Dev error handler
// wilDev l print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// module.exports = app;

var server = app.listen(app.get('port'), function() {
	debug('Express server listening on port ' + server.address().port);
});
