import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './utils/renderWithRouter';

describe('App component', () => {
  it('renders Navbar', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
