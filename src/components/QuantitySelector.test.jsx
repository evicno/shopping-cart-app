import QuantitySelector from './QuantitySelector';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('QuantitySelector component', () => {
  it('button "-" disabled when quantity is 1', () => {
    renderWithRouter(<QuantitySelector productId={2} quantity={1} />);
    expect(screen.getByRole('button', { name: /decrease/i })).toBeDisabled();
  });

  it('button "-" not disabled when quantity is 2', () => {
    renderWithRouter(<QuantitySelector productId={2} quantity={2} />);
    expect(
      screen.getByRole('button', { name: /decrease/i }),
    ).not.toBeDisabled();
  });

  it('calls decreaseQuantity with correct argument when "-" button is clicked', async () => {
    const mockDecrease = vi.fn();
    vi.mocked(useOutletContext).mockReturnValue({
      decreaseQuantity: mockDecrease,
    });
    const user = userEvent.setup();

    renderWithRouter(<QuantitySelector productId={1} quantity={2} />);
    await user.click(await screen.findByRole('button', { name: /decrease/i }));

    expect(mockDecrease).toHaveBeenCalledWith(1);
  });

  it('calls increaseQuantity with correct argument when "+" button is clicked', async () => {
    const mockIncrease = vi.fn();
    vi.mocked(useOutletContext).mockReturnValue({
      increaseQuantity: mockIncrease,
    });
    const user = userEvent.setup();

    renderWithRouter(<QuantitySelector productId={1} quantity={2} />);
    await user.click(await screen.findByRole('button', { name: /increase/i }));

    expect(mockIncrease).toHaveBeenCalledWith(1);
  });

  it('calls removeItem with correct argument when "remove" button is clicked', async () => {
    const mockRemove = vi.fn();
    vi.mocked(useOutletContext).mockReturnValue({
      removeItem: mockRemove,
    });
    const user = userEvent.setup();

    renderWithRouter(<QuantitySelector productId={1} quantity={2} />);
    await user.click(await screen.findByRole('button', { name: /remove/i }));

    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});
