var Order = require('./../models/Order');

module.exports = {
    getAll: function (req, res) {
        Order.find({}, function (error, orders) {
            if (error) {
                res.send(error);
            }

            res.json(orders);
        });
    },
    getById: function (req, res) {
        Order.findById(req.params.id, function (error, orders) {
            if (error) {
                res.send(error);
            }

            res.json(orders);
        });
    },
    create: function (req, res) {
        console.log(req.body);
        var order = new Order({
            userId: req.body.title,
            userName: req.body.userName,
            products: [],
            date: req.body.date,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            deleted: false
        });

        console.log(order);
        order.save(function (error) {
            if (error) {
                res.send(error);
            }
        });

        res.end();
    },
    update: function (req, res) {
        Order.findById(req.params.id, function (error, order) {
            if (error) {
                res.send(error);
            }

            if (req.body.shippingAddress && req.body.shippingAddress != order.shippingAddress) {
                order.shippingAddress = req.body.shippingAddress;
            }

            if (req.body.paymentMethod && req.body.paymentMethod != order.paymentMethod) {
                order.paymentMethod = req.body.paymentMethod;
            }

            order.save(function (error) {
                if (error) {
                    res.send(error);
                }
            });

            res.end();
        });
    },
    delete: function (req, res) {
        Order.findById(req.params.id, function (error, order) {
            if (error) {
                res.send(error);
            }

            order.deleted = true;

            order.save(function (error) {
                if (error) {
                    res.send(error);
                }
            });

            res.end();
        });
    },
    getSortedAndPaged: function (req, res) {

        var perPage = 10,
            page = Math.max(0, parseInt(req.params.page)),
            sortBy = req.params.sortBy;

        Order.find({
            'deleted': false
        }).sort(sortBy).skip(perPage * page).limit(perPage).exec(function (error, orders) {
            if (error) {
                res.send(error);
            }

            res.json(orders);
        })
    },
    getByUserId: function (req, res) {
        Order.find({
            'userId': req.params.id
        }, function (error, orders) {
            if (error) {
                res.send(error);
            }

            res.json(orders);
        });
    },
    getReadyToBeShipped: function (req, res) {
        Order.find({
            'userId': req.params.id,
            'readyToBeShipped': true
        }, function (error, orders) {
            if (error) {
                res.send(error);
            }

            res.json(orders);
        });
    }
}