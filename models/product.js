const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productCategory: {
        type: String,
        required: true,
    },
    productInfo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        require:true

    }

}, {
    timestamps: true
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;