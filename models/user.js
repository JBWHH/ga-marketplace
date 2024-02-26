const mongoose = require('mongoose');
const productSchema = require('./product');
const orderSchema = require('./order');
const reviewSchema = require('./review');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true,
    },
    email: String,
    itemsForSale: [productSchema],
    orders: [orderSchema],
    reviews: [reviewSchema],
});

module.exports = mongoose.model('User', userSchema);