const express = require('express');
const route = express.Router();
const ProductController = require('../Controllers/ProductController');

route.post('/createProduct', ProductController.createProduct);
route.delete('/deleteProductById/:id', ProductController.deleteProductById); 
route.patch('/updateProductById/:id', ProductController.updateProductById);
route.get('/getAllProducts', ProductController.getAllProducts);
route.get('/getProductById/:id', ProductController.getProductById);




module.exports = route;