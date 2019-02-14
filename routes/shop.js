const express = require('express');
const path = require('path'); // core module of node.js

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); // __dirname is a node thing.
                        // instead of slashes, separate directiories by commas to ensure that it workss on all OS's
    res.render('shop', {prods: products, docTitle: 'Shop'}); // we use render instead because above is just sending a static HTML file and we want dynamic templates w/ pug.
                        // above is really "shop.pug" but we can say "shop" b/c we established pug as the engine with app.set in app.js.
                        // the second argument is an object containing data that will become available to the template.
}); 


module.exports = router;