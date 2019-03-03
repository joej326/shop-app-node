const fs = require('fs');
const path = require('path');

const productsPath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(productsPath, (err, fileContent) => {
            console.log(JSON.parse(fileContent));
            let cart = {products: [], totalPrice: 0};

            if (!err) {
                cart.products = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex((item) => item.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id, qty: 1};
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(productsPath, JSON.stringify(cart), (err) => {
                console.log('writing to cart err:', err);
            });
        });
    }
    
}