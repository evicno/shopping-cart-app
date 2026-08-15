import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Cart from './Cart';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('Cart component', () => {
  it('renders correct heading', () => {
    renderWithRouter(<Cart />);
    expect(
      screen.getByRole('heading', { level: 1, name: /cart/i }),
    ).toBeInTheDocument();
  });

  it('renders "Your cart is empty" when the cart is empty', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      itemsCount: 0,
    });
    renderWithRouter(<Cart />);
    expect(
      screen.getByRole('heading', { level: 2, name: /your cart is empty/i }),
    ).toBeInTheDocument();
  });

  it('renders right number of different products in the cart', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      itemsInCart: new Map([
        [1, 2],
        [2, 2],
      ]),
      products: [
        { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
        { id: 2, title: 'Pants', price: 39.99, image: 'pants.jpg' },
      ],
    });
    renderWithRouter(<Cart />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('renders correct total price', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      itemsInCart: new Map([
        [1, 2],
        [2, 2],
      ]),
      products: [
        { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
        { id: 2, title: 'Pants', price: 39.99, image: 'pants.jpg' },
      ],
    });
    renderWithRouter(<Cart />);
    expect(screen.getByText(/119,96 €/i)).toBeInTheDocument();
  });
});
