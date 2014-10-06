var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    productTitle: String,
    date: Date,
    content: String
});

module.exports = mongoose.model('Comment', CommentSchema);