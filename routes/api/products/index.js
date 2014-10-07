var express = require('express');
var router = express.Router();

var auth = require('./../../../app/libs/auth');
var ProductsController = require('./../../../app/controllers/Products');

//TODO: Add authorizations!
router.route('/')
    .get(ProductsController.getAll)
    .post(ProductsController.create);

router.route('/:id')
    .get(ProductsController.getById)
    .post(ProductsController.update);

module.exports = router;
