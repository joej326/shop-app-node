const express = require('express');
const path = require('path'); // core module of node.js

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => { 
    console.log('in the middlware');

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 

}); 

router.post('/add-product', (req, res, next) => { 
    products.push({title: req.body.title});
    res.redirect('/');

}); 

exports.routes = router;
exports.products = products;