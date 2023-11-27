const { ShoppingCart, Product } = require('../main/cart');

test('adding an item to the cart increases item count', () => {
  const cart = new ShoppingCart();

  // Assert that the cart is initially empty
  expect(cart.getTotalItems()).toBe(0);

  // Add an item to the cart
  const item = new Product('Product 1', 20.0);
  cart.addItem(item);

  // Assert that the item count increases after adding
  expect(cart.getTotalItems()).toBe(1);
});