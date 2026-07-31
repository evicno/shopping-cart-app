import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import CartCard from './CartCard';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('CartCard component', () => {
  it('renders cart card with correct data', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      products: [
        { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
        { id: 2, title: 'Pants', price: 39.99, image: 'pants.jpg' },
      ],
    });
    renderWithRouter(<CartCard quantity={2} productId={1} />);
    expect(
      screen.getByRole('heading', { name: /t-shirt/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/39,98 €/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /shirt/i })).toBeInTheDocument();
  });
});
