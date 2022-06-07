const Product = require('../models/Products');


//update product
module.exports.update=async (req,res)=>{
    try {
        const user = await Product.findById(req.params.id);
        let increaseBy= +req.query.quantity;
        user.quantity = +user.quantity + increaseBy;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);   
    }
}