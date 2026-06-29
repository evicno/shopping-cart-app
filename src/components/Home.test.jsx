import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, createMemoryRouter, RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import routes from '../routes';

describe('Home component', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
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
