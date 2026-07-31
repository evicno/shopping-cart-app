import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { fetchProducts } from './api/fetchProducts';
import { renderWithRouter } from './utils/renderWithRouter';
import App from './App';
import routes from './routes';

vi.mock(import('./api/fetchProducts'), () => ({
  fetchProducts: vi.fn(),
}));

describe('App component', () => {
  it('renders Navbar', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([
      { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
    ]);
    renderWithRouter(<App />);
    expect(await screen.findByRole('navigation')).toBeInTheDocument();
  });

  it('renders the right amoount of items in Navbar when adding an item', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([
      { id: 1, title: 'T-shirt', price: 19.99, image: 'shirt.jpg' },
    ]);

    const user = userEvent.setup();

    const router = createMemoryRouter(routes, { initialEntries: ['/shop'] });
    render(<RouterProvider router={router} />);

    const input = await screen.findByLabelText(/quantity/i);
    await user.type(input, '2');
    await user.click(
      await screen.findByRole('button', { name: /add to cart/i }),
    );

    expect(
      await screen.findByRole('link', { name: /cart.*2/i }),
    ).toBeInTheDocument();
  });
});
