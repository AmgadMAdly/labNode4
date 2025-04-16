const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    ProductId: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        maxLength: [20, "max length 20"],
        minlength: [5, "min length 5"]
    },
    price: {
        type: Number,
        required: true
    },
    Quantity:{
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"]
        
    }
})


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
