var express = require('express');
var router = express.Router();

var auth = require('../app/libs/auth');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/loggedUser', function (req, res) {
    res.json(req.user);
});

// Render front-end jade views
router.get('/partials/:partialArea/:partialName', function (req, res) {
    res.render('../public/app/' + req.params.partialArea + '/partials/' + req.params.partialName)
});

module.exports = router;