const express = require('express');
const router = express.Router();
const productController=require('../../../controllers/api/v1/products_api_controller');
router.post('/create',productController.create);
router.patch('/updatePrice',productController.updatePrice);
module.exports=router;