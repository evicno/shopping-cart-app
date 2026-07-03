import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Cart from './Cart';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Cart component', () => {
  it('renders correct heading', () => {
    renderWithRouter(<Cart />);
    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  });
});
