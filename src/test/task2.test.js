// task2.js

// Import the ShoppingCart class (assuming it's defined in a separate file)
const ShoppingCart = require('../main/shoppingCart');

// Test case: Verify basic functionality of adding an item to the shopping cart
test('Adding an item to the shopping cart increases the item count', () => {
  // Arrange: Create an instance of the shopping cart
  const cart = new ShoppingCart();

  // Act: Attempt to add an item to the cart
  cart.addItem('Product1', 10.99);

  // Assert: Check if the cart is not empty and item count increases
  expect(cart.isEmpty()).toBe(false);
  expect(cart.getItemCount()).toBe(1);
});
