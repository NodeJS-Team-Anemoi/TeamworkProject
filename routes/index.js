var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

// Render front-end jade views
router.get('/partials/:partialArea/:partialName', function (req, res) {
    res.render('../public/app/' + req.params.partialArea + '/partials/' + req.params.partialName)
});

module.exports = router;