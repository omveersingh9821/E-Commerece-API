
const Product = require('../models/Products');


//create product
module.exports.create= async (req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(500).json(error);
    }
}

//fetch all product
module.exports.fetch=async (req,res)=>{
    const product =await Product.find();
    try { 
       
        const product =await Product.find();
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }
}