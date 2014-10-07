var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/User');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            User.findOne({
                'local.username': username
            }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (user) {
                    return done(null, false);
                } 
                else {
                    var newUser = new User();

                    newUser.local.username = username;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.local.email = req.body.email;
                    newUser.local.role = req.body.role || 'User';
                    newUser.local.address = req.body.address;
                    newUser.local.deleted = false;

                    newUser.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        return done(null, newUser);
                    });
                }
            });
        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================

    passport.use('local-login', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            User.findOne({
                'local.username': username
            }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false);
                }

                if (!user.validPassword(password)) {
                    return done(null, false);
                }

                return done(null, user);
            });
        }));
};