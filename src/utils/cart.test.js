import { describe, it, expect } from 'vitest';
import { getUpdatedCart } from './cart';

describe('getUpdatedCart function', () => {
  it('adds a new item to an empty cart', () => {
    const result = getUpdatedCart(new Map(), 1, 3);
    expect(result.get(1)).toBe(3);
  });

  it('increases the quantity of an item already in cart', () => {
    const cart = new Map();
    cart.set(1, 2);
    const result = getUpdatedCart(cart, 1, 1);
    expect(result.get(1)).toBe(3);
  });
});
