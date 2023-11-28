const ShoppingCart = require('../main/task1');

describe('ShoppingCart', () => {
  describe('addItem', () => {
    test('should add an item to the cart and increase item count', () => {
      const cart = new ShoppingCart();

      // Red Phase: The cart is expected to be empty initially
      expect(cart.isEmpty()).toBe(true);
      expect(cart.getItemCount()).toBe(0);

      // Add an item to the cart
      cart.addItem('Product1', 10.99);

      // Verify that the cart is not empty and item count increased
      expect(cart.isEmpty()).toBe(false);
      expect(cart.getItemCount()).toBe(1);
    });
  });
});
