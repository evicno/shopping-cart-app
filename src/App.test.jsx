import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders Navbar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Shop page after clicking the button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const button = screen.getByRole('button', { name: 'Shop' });

    await user.click(button);

    expect(screen.getByRole('heading', { name: /shop/i })).toBeInTheDocument();
  });

  //   it('renders the right page after cycling through Navbar links', async () => {
  //     const user = userEvent.setup();

  //     render(
  //       <MemoryRouter>
  //         <App />
  //       </MemoryRouter>,
  //     );

  //     // tests Shop link
  //     await user.click(screen.getByRole('link', { name: /shop/i }));

  //     expect(screen.getByRole('heading').textContent).toMatch(/shop/i);

  //     // tests Cart link
  //     await user.click(screen.getByRole('link', { name: /cart/i }));

  //     expect(screen.getByRole('heading').textContent).toMatch(/cart/i);

  //     // tests Home link
  //     await user.click(screen.getByRole('link', { name: /home/i }));

  //     expect(screen.getByRole('heading').textContent).toMatch(/home/i);
  //   });
});
