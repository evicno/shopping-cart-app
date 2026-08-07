import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import routes from '../routes';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Home component', () => {
  it('renders correct heading', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('heading', { name: /store/i })).toBeInTheDocument();
  });

  it('renders Shop page after clicking the button', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    const button = screen.getByRole('button', { name: 'Shop' });

    await user.click(button);

    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument();
  });
});
