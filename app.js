var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
//var lusca = require('lusca');

var app = express();

// Database setup
var dbConfig = require('./config/database.js');

mongoose.connect(dbConfig.cloudDb);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Db connection opened...');
});

//Application setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport initialization
require('./config/passport')(passport);

app.use(session({
    secret: 'ninja',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(lusca({
//    csrf: true,
//    csp: { /* ... */},
//    xframe: 'SAMEORIGIN',
//    p3p: 'ABCDEF',
//    hsts: {maxAge: 31536000, includeSubDomains: true},
//    xssProtection: true
//}));

// Routes
var index = require('./routes/index');
var auth = require('./routes/auth')(passport);
var users = require('./routes/api/users')(passport);
var administration = require('./routes/api/administration');
var chat = require('./routes/api/chat');
var order = require('./routes/api/orders');
var shoppingCart = require('./routes/api/shoppingCart');
var products = require('./routes/api/products');

app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);
app.use('/admin', administration);
app.use('/orders', order);
app.use('/shoppingCart', shoppingCart);
app.use('/products', products);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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

module.exports = app;
