const express = require('express');
const router = express.Router();
const customerController=require('../../../controllers/api/v1/customers_api_controller');
router.post('/create',customerController.create);
router.get('/customersList',customerController.customersList);
router.post('/createOrder',customerController.createOrder);
router.get('/ordersOfCustomer',customerController.ordersOfCustomer);
module.exports=router;