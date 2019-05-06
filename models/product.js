const fs = require('fs');
const path = require('path');

const productsPath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(productsPath, (err, fileContent) => {
        if (err) {
            callback([]) // had to add a callback to deal with asychronous code. We were getting length of undefined before.
        } else {
            callback(JSON.parse(fileContent)); 
        }
    })
};


module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    

    save() {
        this.id = Math.random().toString();
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

    static findById(id, callback) {
        getProductsFromFile((products) => {
            const product = products.find((p) => p.id === id);
            callback(product);
        });
    }

};