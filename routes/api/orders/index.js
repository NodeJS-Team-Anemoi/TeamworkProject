var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var OrdersController = require('./../../../app/controllers/Orders');

router.route('/')
    .get(OrdersController.getAll)
    .post(OrdersController.create);

router.route('/:id')
    .get(OrdersController.getById)
    .put(OrdersController.update);

router.route('/:page/:sortBy')
    .get(OrdersController.getSortedAndPaged);

module.exports = router;