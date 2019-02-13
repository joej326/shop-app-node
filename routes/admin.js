const express = require('express');
const path = require('path'); // core module of node.js

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => { 
    console.log('in the middlware');

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 

}); 

router.post('/product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('<h1>Product page</h1>');

}); 

module.exports = router;