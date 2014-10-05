var express = require('express');
var router = express.Router();

module.exports = function (passport) {    
    router.post('/login', passport.authenticate('local-login', {
		successRedirect : '/',
		failureRedirect : '/auth/login'
	}));
    
    router.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/',
		failureRedirect : '/auth/signup'
	}));
    
    router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    
    return router;
};


// Middleware that checks if the request is authenticated

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}