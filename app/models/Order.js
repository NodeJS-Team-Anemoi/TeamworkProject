var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    date: Date,
    shippingAddress: String,
    paymentMethod: String
});

module.exports = mongoose.model('Order', OrderSchema);