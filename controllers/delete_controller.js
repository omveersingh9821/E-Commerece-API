const Product = require('../models/Products');


//delete product 
module.exports.delete= async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product deleted successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}