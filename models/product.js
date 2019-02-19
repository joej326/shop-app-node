const fs = require('fs');
const path = require('path');

const productsPath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(productsPath, (err, fileContent) => {
        if (err) {
            return callback([]) // had to add a callback to deal with asychronous code. We were getting length of undefined before.
        } else {
            callback(JSON.parse(fileContent));
        }
    })
    // return products;
};


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    

    save() {
        getProductsFromFile((products) => {
            products.push(this); // "this" refers to the class ^^^^
            fs.writeFile(productsPath, JSON.stringify(products), err => {
                console.log('ERROR:', err);
            });
        });

        fs.readFile(productsPath, (err, fileContent) => {
            let products = [];
            
            
        });
    }

    // static makes it so it will always be called from this class and not other instances.
    static fetchAll(callback) {
        getProductsFromFile(callback);
    }

};