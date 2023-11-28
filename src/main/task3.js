// main/task2.js

class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(productName, price, quantity = 1) {
      if (
        typeof productName !== 'string' ||
        typeof price !== 'number' ||
        price < 0 ||
        typeof quantity !== 'number' ||
        quantity < 1
      ) {
        throw new Error('Invalid input');
      }
  
      for (let i = 0; i < quantity; i++) {
        this.items.push({ productName, price });
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    getItemCount() {
      return this.items.length;
    }
  }
  
  module.exports = ShoppingCart;
  