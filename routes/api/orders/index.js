var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var OrdersController = require('./../../../app/controllers/Orders');

router.route('/orders')
    .get(OrdersController.getAll)
    .post(OrdersController.create);

router.route('/orders/:id')
    .get(OrdersController.getById)
    .post(OrdersController.update);

module.exports = router;