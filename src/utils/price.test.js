import { describe, it, expect } from 'vitest';
import { formatPrice } from './price';

describe('formatPrice function', () => {
  it('formats an integer amount in euro', () => {
    expect(formatPrice(10)).toMatch(/^10,00\s?€$/);
  });

  it('formats an decimal amount in euro', () => {
    expect(formatPrice(10.54)).toMatch(/^10,54\s?€$/);
  });
});
