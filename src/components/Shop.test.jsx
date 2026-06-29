import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Shop from './Shop';

describe('Shop component', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument();
  });
});
