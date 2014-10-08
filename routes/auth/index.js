var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    router.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (error, user, info) {
            if (error) {
                return next(error);
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                res.json({
                    error: err,
                    user: user,
                    info: info
                });
            });

        })(req, res, next);
    });

    router.post('/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (error, user, info) {
            if (error) {
                return next(error);
            }
            
            res.json({
                signUp: req.signUp,
                signup: req.signup,
                user: user,
                info: info,
                success: true
            });
        })(req, res, next);
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
};