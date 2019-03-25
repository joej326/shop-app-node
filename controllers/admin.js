const Product = require('../models/product'); // note that this is a class


// this function is exported to admin.js as the second arguemtns of the /add-product route
exports.getAddProduct = (req, res, next) => {

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('admin/edit-product', 
        {
            docTitle: 'Add Product',
            path: '/admin/add-product'
        }
    );

};


exports.postAddProduct =  (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');

};

exports.getEditProduct = (req, res, next) => {

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('admin/edit-product', 
        {
            docTitle: 'Add Product',
            path: '/admin/add-product'
        }
    );

};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products-list-admin', {prods: products, docTitle: 'Admin Products', path: '/admin/products'}); 
    });
};