import { vi, describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Items from './Items';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('Items component', () => {
  it('renders right number of products after fetching', async () => {
    vi.mocked(useOutletContext).mockReturnValue({
      products: [
        { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
        { id: 2, title: 'Pants', price: 39.99, image: 'pants.jpg' },
      ],
    });

    renderWithRouter(<Items />);

    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('handles fetching error', async () => {
    vi.mocked(useOutletContext).mockRejectedValue(new Error('API down'));

    renderWithRouter(<Items />);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
