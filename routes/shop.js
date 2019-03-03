const express = require('express');
const path = require('path'); // core module of node.js

const shopController = require('../controllers/shop');

const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// IMPORTANT: order your routes in order of most specific, to least specific.
router.get('/products/:id', shopController.getProduct); 
// EX: the below route would never be reached beacuse express would see 'delete' as a variable because of the ":id"
router.get('/products/delete'); 

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);


router.get('/checkout', shopController.getCheckout);




module.exports = router;