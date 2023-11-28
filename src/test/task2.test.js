const ShoppingCart = require('../main/shoppingCart');

describe('ShoppingCart', () => {
  describe('addItem', () => {
    test('should add an item to the cart', () => {
      const cart = new ShoppingCart();
      cart.addItem('Product1', 10.99);
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

  describe('removeItem', () => {
    test('should remove an item from the cart', () => {
      const cart = new ShoppingCart();
      cart.addItem('Product1', 10.99);
      cart.removeItem('Product1');
      expect(cart.getItemCount()).toBe(0);
    });

    test('should not throw an error if product is not found', () => {
      const cart = new ShoppingCart();
      expect(() => cart.removeItem('NonExistingProduct')).not.toThrow();
    });

    test('should throw an error for invalid input', () => {
      const cart = new ShoppingCart();
      expect(() => cart.removeItem()).toThrow('Invalid input');
    });
  });

  describe('isEmpty', () => {
    test('should return true if the cart is empty', () => {
      const cart = new ShoppingCart();
      expect(cart.isEmpty()).toBe(true);
    });

    test('should return false if the cart is not empty', () => {
      const cart = new ShoppingCart();
      cart.addItem('Product1', 10.99);
      expect(cart.isEmpty()).toBe(false);
    });
  });

  describe('getItemCount', () => {
    test('should return the number of items in the cart', () => {
      const cart = new ShoppingCart();
      cart.addItem('Product1', 10.99);
      expect(cart.getItemCount()).toBe(1);
    });
  });

  describe('getTotalPrice', () => {
    test('should return the total price of items in the cart', () => {
      const cart = new ShoppingCart();
      cart.addItem('Product1', 10.99);
      cart.addItem('Product2', 15.99);
      expect(cart.getTotalPrice()).toBe('26.98');
    });

    test('should return "0.00" if the cart is empty', () => {
      const cart = new ShoppingCart();
      expect(cart.getTotalPrice()).toBe('0.00');
    });
  });
});
