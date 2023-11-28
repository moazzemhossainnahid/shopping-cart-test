const ShoppingCart = require('../main/task2');

describe('ShoppingCart', () => {
  describe('addItem', () => {
    test('should add multiple items to the cart and increase item count', () => {
      const cart = new ShoppingCart();

      // Red Phase: The cart is expected to be empty initially
      expect(cart.isEmpty()).toBe(true);
      expect(cart.getItemCount()).toBe(0);

      // Add multiple items to the cart
      cart.addItem('Product1', 10.99);
      cart.addItem('Product2', 20.49);
      cart.addItem('Product3', 5.75);

      // Verify that the cart is not empty and item count increased
      expect(cart.isEmpty()).toBe(false);
      expect(cart.getItemCount()).toBe(3);
    });

    test('should throw an error for invalid input', () => {
      const cart = new ShoppingCart();
      expect(() => cart.addItem()).toThrow('Invalid input');
      expect(() => cart.addItem('Product1', 'invalidPrice')).toThrow('Invalid input');
      expect(() => cart.addItem('Product1', -5)).toThrow('Invalid input');
    });
  });
});
