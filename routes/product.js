const router = require('express').Router();
const productController = require('../controllers/product_controller');

//create product
router.post('/create',productController.create);

//fetch all product
router.get('/get',productController.fetch);



module.exports = router;