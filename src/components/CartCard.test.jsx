import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import CartCard from './CartCard';
import { renderWithRouter } from '../utils/renderWithRouter';

const mockProduct = vi.fn();

describe('CartCard component', () => {
  beforeEach(() => {
    vi.mocked(mockProduct).mockReturnValue({
      id: 1,
      title: 'T-shirt',
      price: 19.99,
      image: 'shirt.jpg',
    });
  });
  it('renders cart card with correct data', () => {
    renderWithRouter(
      <CartCard quantity={2} productId={1} getProduct={mockProduct} />,
    );
    expect(
      screen.getByRole('heading', { name: /t-shirt/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/39,98 €/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /shirt/i })).toBeInTheDocument();
  });

  it('renders QuantitySelector', () => {
    renderWithRouter(
      <CartCard quantity={2} productId={1} getProduct={mockProduct} />,
    );
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
  });
});
