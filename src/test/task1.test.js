const ShoppingCart = require('../main/shoppingCart');

describe('ShoppingCart', () => {
  describe('addItem', () => {
    test('should add an item to the cart', () => {
      const cart = new ShoppingCart();
      // cart.addItem('Product1', 10.99); //uncomment this line for solve
      expect(cart.isEmpty()).toBe(false);
      expect(cart.getItemCount()).toBe(1);
    });

    test('should throw an error for invalid input', () => {
      const cart = new ShoppingCart();
      expect(() => cart.addItem()).toThrow('Invalid input');
      expect(() => cart.addItem('Product1', 'invalidPrice')).toThrow('Invalid input');
      expect(() => cart.addItem('Product1', -5)).toThrow('Invalid input');
    });
  });
});
