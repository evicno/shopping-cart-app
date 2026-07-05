import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ItemCard from './ItemCard.jsx';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('ItemCard component', () => {
  it('renders item card with correct data', () => {
    renderWithRouter(
      <ItemCard
        product={{
          id: 1,
          title: 'T-shirt',
          price: 19.99,
          image: 'shirt.jpg',
        }}
      />,
    );
    expect(
      screen.getByRole('heading', { name: /t-shirt/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/19,99 €/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /t-shirt/i })).toBeInTheDocument();
  });
});
