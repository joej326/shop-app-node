const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = t;
    }

    save() {
        products.push(this);
    }

    // static makes it so it will always be called from this class and not other instances.
    static fetchAll() {
        return products;
    }

};