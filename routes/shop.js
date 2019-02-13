const express = require('express');
const path = require('path'); // core module of node.js

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); // __dirname is a node thing.
});                         // instead of slashes, separate directiories by commas to ensure that it workss on all OS's


module.exports = router;