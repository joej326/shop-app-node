const fs = require('fs');
const path = require('path');

const productsPath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    

    save() {

        fs.readFile(productsPath, (err, fileContent) => {
            let products = [];
            // err will occur is no products (on first run)
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this); // "this" refers to the class ^^^^
            fs.writeFile(productsPath, JSON.stringify(products), err => {
                console.log('ERROR:', err);
            });
        });
    }

    // static makes it so it will always be called from this class and not other instances.
    static fetchAll(callback) {
        fs.readFile(productsPath, (err, fileContent) => {
            if (err) {
                callback([]) // had to add a callback to deal with asychronous code. We were getting length of undefined before.
            } else {
                callback(JSON.parse(fileContent));
            }
        })
        // return products;
    }

};