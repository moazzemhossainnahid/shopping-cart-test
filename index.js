// Import the ShoppingCart class
const ShoppingCart = require('./src/main/shoppingCart');

// Create an instance of the ShoppingCart class
const cart = new ShoppingCart();

// Add items to the shopping cart
cart.addItem('Product A', 10.99);
cart.addItem('Product B', 5.49);
cart.addItem('Product C', 7.31);

// Display the current state of the shopping cart
console.log('Shopping Cart Items:', cart.items);
console.log('Is the cart empty?', cart.isEmpty());
console.log('Number of items in the cart:', cart.getItemCount());
console.log('Total price of items in the cart:', cart.getTotalPrice());



// Remove an item from the shopping cart
try {
    cart.removeItem('Product A');
    console.log('Item "Product A" removed successfully.');
  } catch (error) {
    console.error('Error removing item:', error.message);
  }
  

  // Display the updated state of the shopping cart
console.log('Updated Shopping Cart Items:', cart.items);
console.log('Is the cart empty?', cart.isEmpty());
console.log('Number of items in the cart:', cart.getItemCount());
console.log('Total price of items in the cart:', cart.getTotalPrice());