var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: String,
    price: Number,
    rating: Number,
    timesPurchased: Number,
    publisher: String,
    year: Number,
    isbn: String,
    pages: Number,
    language: String,
    countInStock: Number,
    annotation: String,
    authors: [{type: String}],
    categories: [{type: String}],
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Product', ProductSchema);