import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Cart from './Cart';

describe('Cart component', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  });
});
