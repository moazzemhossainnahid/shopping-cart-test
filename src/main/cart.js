class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotalItems() {
        return this.items.length;
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

module.exports = { ShoppingCart, Product };
