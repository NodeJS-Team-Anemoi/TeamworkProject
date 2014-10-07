var Order = require('./../models/Order');

module.exports = {
    getAll: function (req, res) {
        Order.find({ }, function (error, orders) {
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
        var order = new Order({
            userId: req.body.title,
            userName: req.body.userName,
            products: req.body.products.split(', '),
            date: req.body.date,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod
        });

        order.save(function (error) {
            if(error){
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

            order.userId = req.body.title;
            order.userName =  req.body.userName;
            order.products =  req.body.products.split(', ');
            order.date = req.body.date;
            order.shippingAddress =  req.body.shippingAddress;
            order.paymentMethod =  req.body.paymentMethod;

            order.save(function (error) {
                if(error){
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

            order.local.deleted = true;

            order.save(function (error) {
                if(error){
                    res.send(error);
                }
            });

            res.end();
        });
    }
}