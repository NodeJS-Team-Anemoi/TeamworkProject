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

            if (req.body.title && req.body.title != product.title) {
                product.title = req.body.title;
            }

            if (req.body.price && req.body.price != product.price) {
                product.price = req.body.price;
            }

            if (req.body.publisher && req.body.publisher != product.publisher) {
                product.publisher = req.body.publisher;
            }

            //TODO:Do it the base64 way
            if (req.body.image && req.body.image != product.image) {
                product.image = req.body.image;
            }

            if (req.body.year && req.body.year != product.year) {
                product.year = req.body.year;
            }

            if (req.body.isbn && req.body.isbn != product.isbn) {
                product.isbn = req.body.isbn;
            }

            if (req.body.pages && req.body.pages != product.pages) {
                product.pages = req.body.pages;
            }

            if (req.body.language && req.body.language != product.language) {
                product.language = req.body.language;
            }

            if (req.body.countInStock && req.body.countInStock != product.countInStock) {
                product.countInStock = req.body.countInStock;
            }

            if (req.body.annotation && req.body.annotation != product.annotation) {
                product.annotation = req.body.annotation;
            }

            if (req.body.authors) {
                product.authors = req.body.authors.split(', ');
            }

            if (req.body.categories) {
                product.categories = req.body.categories.split(', ');
            }

//            product.title = req.body.title;
//            product.price = req.body.price;
//            product.rating = req.body.rating;
//            product.timesPurchased = req.body.timesPurchased;
//            product.publisher = req.body.publisher;
//            product.image = req.body.image;
//            product.year = req.body.year;
//            product.isbn = req.body.isbn;
//            product.pages = req.body.pages;
//            product.language = req.body.language;
//            product.countInStock = req.body.countInStock;
//            product.annotation = req.body.annotation;
//            product.authors =  req.body.authors.split(', ');
//            product.categories = req.body.categories.split(', ');

            product.save(function (error) {
                if(error){
                    res.send(error);
                }
            });

            res.end();
        });
    }
};