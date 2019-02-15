const express = require('express');
const path = require('path'); // core module of node.js

const productsController = require('../controllers/products');

const router = express.Router();


router.get('/', productsController.getProducts); 


module.exports = router;