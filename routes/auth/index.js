var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    router.get('/login', function(req, res) {
        res.render(/* login view */);
    });
    
    router.post('/login', passport.authenticate('local-login', {
		successRedirect : '/',
		failureRedirect : '/login'
	}));
    
    router.get('/signup', function(req, res) {
		res.render(/* sign up view */);
	});
    
    router.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/',
		failureRedirect : '/signup'
	}));
    
    router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    
    return router;
};

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}