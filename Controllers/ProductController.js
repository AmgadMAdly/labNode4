const Product = require('../Models/Product');

//create product
async function createProduct(req, res) {
    try{
        const product = req.body;
        const created = await Product.create(product);
        res.status(201).json({
            status: "success",
            data: created
        });

    }catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}
//get all products
async function getAllProducts(req, res) {
    try{
        const products = await Product.find();
        res.status(200).json({
            status: "success",
            data: products
        });
    }
    catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}
//get product by id
async function getProductById(req, res) {
    try{
        const id = req.params.id;
        const product = await Product.find({ProductId:id});
        if(!product){
            return res.status(404).json({
                status: "fail",
                message: "Product not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: product
        });
    }catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}

//update product by id
async function updateProductById(req, res) {

    const id = req.params.id;
    const productData = req.body;
    let updated =await Product.findOneAndUpdate({ProductId:id}, productData, { new: true });
    if(!updated){
        return res.status(404).json({
            status: "fail",
            message: "Product not found"
        });
    }
    res.status(200).json({
        status: "success",
        data: updated
    });
}

//delete product by id
async function deleteProductById(req, res) {
    try{
        const id = req.params.id;
        const product = await Product.findOneAndDelete({ProductId:id});
        if(!product){
            return res.status(404).json({
                status: "fail",
                message: "Product not found"
            });
        }
        res.status(204).json({
            status: "success",
            data: null
        });
    }catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
}

module.exports = { deleteProductById, updateProductById, getProductById, getAllProducts, createProduct };
