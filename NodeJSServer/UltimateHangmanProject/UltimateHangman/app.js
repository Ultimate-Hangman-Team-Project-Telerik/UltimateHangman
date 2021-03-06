﻿/* Libraries request */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//var engine = require('ejs-locals');
var server = require("./core/server");


var routes = require('./routes/index');
var users = require('./routes/users');
var level = require('./routes/level');
var contacts = require('./routes/contact');
var settings = require('./settings');


/* App initialization */
var app = express();

//app.set('port', 8098);

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));

//app.engine('ejs', engine);
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    name: settings.cookieName,
    secret: settings.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


/* Url paths initialization */
app.use('/', routes);
app.use('/users', users);
app.use('/level', level);
app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/* file exportation */
module.exports = app;

//server.createServer(app);
