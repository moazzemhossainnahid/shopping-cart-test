class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, price) {
    if (!product || !price || typeof price !== 'number' || price <= 0) {
      throw new Error("Invalid input. Please provide a valid product name and a positive price.");
    }

    this.items.push({ product, price });
  }

  removeItem(product) {
    if (!product) {
      throw new Error("Invalid input. Please provide a valid product name.");
    }

    const index = this.items.findIndex(item => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error("Product not found in the shopping cart.");
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalPrice() {
    if (this.items.length === 0) {
      return "0.00";
    }

    return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
}

// Export the ShoppingCart class
module.exports = ShoppingCart;