import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCartForm from './AddToCartForm';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('AddToCartForm component', () => {
  it('button disabled when quantity selected is 0', () => {
    renderWithRouter(<AddToCartForm />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('button disabled when quantity selected is above 0', async () => {
    const user = userEvent.setup();

    renderWithRouter(<AddToCartForm />);
    const input = screen.getByRole('spinbutton');
    await user.type(input, '1');

    expect(await screen.findByRole('button')).not.toBeDisabled();
  });
});
