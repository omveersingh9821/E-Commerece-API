const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },
    quantity:{
        type:Number,
        quantity:10
    }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;