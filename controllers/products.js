// you can determine when your app needs a controller based on what things in your app require logic.
// in this case our products require logic so we make a products controller.

const products = [];

// this function is exported to admin.js as the second arguemtns of the /add-product route
exports.getAddProduct = (req, res, next) => {
    console.log('in the middlware');

    // __dirname way:
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 

    // rootDir way
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('add-product', {pageTitle: 'Add Product'});

};


exports.postAddProduct =  (req, res, next) => { 
    products.push({title: req.body.title});
    res.redirect('/');

};