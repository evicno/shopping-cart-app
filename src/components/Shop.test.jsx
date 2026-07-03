import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Shop from './Shop';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Shop component', () => {
  it('renders correct heading', () => {
    renderWithRouter(<Shop />);
    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument();
  });
});
