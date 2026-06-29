import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import routes from '../routes';

describe('Navbar component', () => {
  it('navigates to Shop, Cart and Home from App', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    // tests Shop link
    await user.click(screen.getByRole('link', { name: /shop/i }));

    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument();

    // tests Cart link
    await user.click(screen.getByRole('link', { name: /cart/i }));

    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();

    // tests Home link
    await user.click(screen.getByRole('link', { name: /home/i }));

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });
});
