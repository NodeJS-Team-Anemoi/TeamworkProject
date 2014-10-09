var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var UsersController = require('./../../../app/controllers/Users');

router.route('/')
    .get(auth.isAuthorized, UsersController.getAll);

router.route('/:id')
    .get(auth.isAuthorized, UsersController.getById)
    .put(auth.isAuthorized, UsersController.update)
    .delete(auth.isAuthorized, UsersController.delete);

router.route('/:page/:sortBy')
    .get(auth.isAuthorized, UsersController.getSortedAndPaged);

module.exports = router;