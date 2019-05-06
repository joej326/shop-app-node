const express = require('express');
const path = require('path'); // core module of node.js

// const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

const router = express.Router();


// keep in mind these routes all start with '/admin'
router.get('/add-product', adminController.getAddProduct); // fyi these are functions

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct); 

router.get('/edit-product/:productId', adminController.getEditProduct)

exports.routes = router;