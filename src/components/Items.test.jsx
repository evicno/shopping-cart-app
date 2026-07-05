import { vi, describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Items from './Items';
import { fetchProducts } from '../api/fetchProducts';
import { renderWithRouter } from '../utils/renderWithRouter';

vi.mock(import('../api/fetchProducts'), () => ({
  fetchProducts: vi.fn(),
}));

describe('Items component', () => {
  it('renders right number of products after fetching', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([
      { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
      { id: 2, title: 'Pants', price: 39.99, image: 'pants.jpg' },
    ]);

    renderWithRouter(<Items />);

    expect(fetchProducts).toHaveBeenCalledTimes(1);
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('handles fetching error', async () => {
    vi.mocked(fetchProducts).mockRejectedValue(new Error('API down'));

    renderWithRouter(<Items />);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
