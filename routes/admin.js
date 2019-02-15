const express = require('express');
const path = require('path'); // core module of node.js

// const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();


router.get('/add-product', productsController.getAddProduct); // fyi getAddProduct is a function

router.post('/add-product', productsController.postAddProduct); // as well as postAddProduct

exports.routes = router;