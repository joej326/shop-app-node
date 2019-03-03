// you can determine when your app needs a controller based on what things in your app require logic.
// in this case our products require logic so we make a products controller.

const Product = require('../models/product'); // note that this is a class
const Cart = require('../models/cart');



exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); // __dirname is a node thing.
                        // instead of slashes, separate directiories by commas to ensure that it workss on all OS's
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, docTitle: 'All Products', path: '/products'}); // we use render instead because above is just sending a static HTML file and we want dynamic templates w/ pug.
                        // above is really "shop.pug" but we can say "shop" b/c we established pug as the engine with app.set in app.js.
                        // the second argument is an object containing data that will become available to the template.
    });
    
};              // NOTE: the "pug" comments are no longer relevant in this app b/c we switched to ejs.


exports.getProduct = (req, res) => {
    const prodId = req.params.id;
    const productCallback = (product) => {
        res.render(
            'shop/product-detail', 
            {
                product, 
                docTitle: product.title,
                path: '/products'
            }
        );
    };

    Product.findById(prodId, productCallback);
};


exports.getIndex = (req, res) => {
    
    Product.fetchAll((products) => {
        res.render('shop/index', {prods: products, docTitle: 'Shop', path: '/'});
                        
    });
};


exports.getCart = (req, res) => {
    res.render('shop/product-list', {prods: products, docTitle: 'Your Cart', path: '/'});
};

exports.postCart = (req, res) => {
    const productId = req.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
    });
    res.redirect('/cart');
};


exports.getOrders = (req, res) => {
    res.render('shop/orders', {docTitle: 'Your Orders', path: '/orders'});
};


exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};