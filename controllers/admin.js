const Product = require('../models/product'); // note that this is a class


// this function is exported to admin.js as the second arguemtns of the /add-product route
exports.getAddProduct = (req, res, next) => {

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
    console.log('get edit product contoller called')

    const editMode = req.query.edit;
    console.log('get edit product contoller called')

    if (!editMode) {
        return res.redirect('/');
    }

    res.render('admin/edit-product', 
        {
            docTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode
        }
    );
};


exports.getProducts = (req, res) => {
    console.log('get all products ran');
    Product.fetchAll((products) => {
        res.render('admin/products-list-admin', {prods: products, docTitle: 'Admin Products', path: '/admin/products'}); 
    });
};