// Middleware that checks if the request is authenticated
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
       res.redirect('/'); 
    }
}

// Middleware that checks if the user is admin
function isAdmin (req, res, next) {
    if (req.isAuthenticated() && req.user.local.role === 'Admin') {
        return next();
    }
    else {
        res.send(401, 'Unauthorized');
    }
}

module.exports = {
    isAuthenticated : isLoggedIn,
    isAuthorized : isAdmin
};