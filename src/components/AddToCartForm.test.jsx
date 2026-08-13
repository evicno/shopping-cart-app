import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCartForm from './AddToCartForm';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('AddToCartForm component', () => {
  it('button disabled when quantity selected is 0', () => {
    renderWithRouter(<AddToCartForm />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('button enabled when quantity selected is above 0', async () => {
    const user = userEvent.setup();

    renderWithRouter(<AddToCartForm />);
    const input = screen.getByRole('spinbutton');
    await user.type(input, '1');

    expect(await screen.findByRole('button')).not.toBeDisabled();
  });

  it('disables button after submitting', async () => {
    const mockAddItem = vi.fn();
    vi.mocked(useOutletContext).mockReturnValue({
      addItemsToCart: mockAddItem,
    });
    const user = userEvent.setup();

    renderWithRouter(<AddToCartForm productId={1} />);
    const input = screen.getByRole('spinbutton');
    await user.type(input, '1');
    const button = screen.getByRole('button');
    await user.click(button);

    expect(button).toBeDisabled();
  });
});
