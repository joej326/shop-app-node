// you can determine when your app needs a controller based on what things in your app require logic.
// in this case our products require logic so we make a products controller.

const Product = require('../models/product'); // note that this is a class

// this function is exported to admin.js as the second arguemtns of the /add-product route
exports.getAddProduct = (req, res, next) => {
    console.log('in the middlware');

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('admin/add-product', {pageTitle: 'Add Product'});

};


exports.postAddProduct =  (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');

};

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); // __dirname is a node thing.
                        // instead of slashes, separate directiories by commas to ensure that it workss on all OS's
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, docTitle: 'Shop'}); // we use render instead because above is just sending a static HTML file and we want dynamic templates w/ pug.
                        // above is really "shop.pug" but we can say "shop" b/c we established pug as the engine with app.set in app.js.
                        // the second argument is an object containing data that will become available to the template.
    });
    
};