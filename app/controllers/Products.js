var Product = require('./../models/Product');

module.exports = {
    getAll: function (req, res) {
        Product.find({ }, function (error, products) {
            if (error) {
                res.send(error);
            }

            res.json(products);
        });
    },
    getById: function (req, res) {
        Product.findById(req.params.id, function (error, product) {
            if (error) {
                res.send(error);
            }

            res.json(product);
        });
    },
    create: function (req, res) {
        var product = new Product({
        title: req.body.title,
        price: req.body.price,
        rating: 0,
        timesPurchased: 0,
        publisher: req.body.publisher,
        image: req.body.image,
        year: req.body.year,
        isbn: req.body.isbn,
        pages: req.body.pages,
        language: req.body.language,
        countInStock: req.body.countInStock,
        annotation: req.body.annotation,
        authors: req.body.authors.split(', '),
        categories: req.body.categories.split(', ')
        });

        product.save(function (error) {
            if(error){
                res.send(error);
            }
        });

        res.end();
    },
    update: function (req, res) {
        Product.findById(req.params.id, function (error, product) {
            if (error) {
                res.send(error);
            }

            product.title = req.body.title;
            product.price = req.body.price;
            product.rating = req.body.rating;
            product.timesPurchased = req.body.timesPurchased;
            product.publisher = req.body.publisher;
            product.image = req.body.image;
            product.year = req.body.year;
            product.isbn = req.body.isbn;
            product.pages = req.body.pages;
            product.language = req.body.language;
            product.countInStock = req.body.countInStock;
            product.annotation = req.body.annotation;
            product.authors =  req.body.authors.split(', ');
            product.categories = req.body.categories.split(', ');

            product.save(function (error) {
                if(error){
                    res.send(error);
                }
            });

            res.end();
        });
    }
};