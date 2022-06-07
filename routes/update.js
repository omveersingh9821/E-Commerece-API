const router = require('express').Router();
const Product = require('../models/Products');

const updateController=require('../controllers/update_controller');
//fetch product and update
router.put('/:id/update_quantity',updateController.update);


module.exports = router;