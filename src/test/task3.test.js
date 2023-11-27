// task3.test.js

// Import the ShoppingCart class
const ShoppingCart = require('../main/shoppingCart');

// Test case 1: Verify basic functionality of adding an item to the shopping cart
test('Adding an item to the shopping cart increases the item count', () => {
  // Arrange: Create an instance of the shopping cart
  const cart = new ShoppingCart();

  // Act: Attempt to add an item to the cart
  cart.addItem('Product1', 10.99);

  // Assert: Check if the cart is not empty and item count increases
  expect(cart.isEmpty()).toBe(false);
  expect(cart.getItemCount()).toBe(1);
});

// Test case 2: Verify adding multiple items to the shopping cart
test('Adding multiple items to the shopping cart increases the item count accordingly', () => {
  const cart = new ShoppingCart();

  cart.addItem('Product1', 10.99);
  cart.addItem('Product2', 15.99);

  expect(cart.isEmpty()).toBe(false);
  expect(cart.getItemCount()).toBe(2);
});

// Test case 3: Verify removing an item from the shopping cart
test('Removing an item from the shopping cart decreases the item count', () => {
  const cart = new ShoppingCart();

  cart.addItem('Product1', 10.99);
  cart.addItem('Product2', 15.99);

  // Act: Remove an item from the cart
  cart.removeItem('Product1');

  // Assert: Check if the item count decreases
  expect(cart.getItemCount()).toBe(1);
});

// Test case 4: Verify checking the total price of items in the shopping cart
test('Checking the total price of items in the shopping cart', () => {
  const cart = new ShoppingCart();

  cart.addItem('Product1', 10.99);
  cart.addItem('Product2', 15.99);

  // Assert: Check if the total price is calculated correctly
  expect(cart.getTotalPrice()).toBe("26.98");
});
