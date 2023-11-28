// main/task1.js

class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(productName, price) {

      this.items.push({ productName, price });
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    getItemCount() {
      return this.items.length;
    }
  }
  
  module.exports = ShoppingCart;
  