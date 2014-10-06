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