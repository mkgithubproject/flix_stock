const mongoose = require('mongoose');
const ordertSchema = new mongoose.Schema({
    productList: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required:true
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    paymentInfo: {
        type:{
        type: String,
        enum: ['COD', 'CREDIT_CARD'],
        default: 'CREDIT_CARD',
        required: true
    }},
    customer:{
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required:true
    }

}, {
    timestamps: true
});
const Order = mongoose.model('Order', ordertSchema);
module.exports = Order;