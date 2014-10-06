var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var UsersController = require('./../../../app/controllers/Users');

router.route('/')
    .get(auth.isAuthorized, UsersController.getAll);

router.route('/:id')
    .get(auth.isAuthorized, UsersController.getById)
    .post(auth.isAuthorized, UsersController.update)
    .delete(auth.isAuthorized, UsersController.delete);

module.exports = router;