const router = require('express').Router();


const deleteController = require('../controllers/delete_controller');


//fetch product and delete
router.delete('/:id',deleteController.delete);


module.exports = router;