var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var UsersController = require('./../../../app/controllers/Users');

module.exports = function(passport){
    router.route('/')
        .get(auth.isAuthorized, UsersController.getAll)
        .post(function (req, res, next) {
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

    router.route('/:id')
        .get(auth.isAuthorized, UsersController.getById)
        .put(auth.isAuthorized, UsersController.update)
        .delete(auth.isAuthorized, UsersController.delete);

    router.route('/:page/:sortBy')
        .get(auth.isAuthorized, UsersController.getSortedAndPaged);

    return router;
};