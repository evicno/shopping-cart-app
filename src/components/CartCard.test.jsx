import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import CartCard from './CartCard';
import { renderWithRouter } from '../utils/renderWithRouter';
import { useOutletContext } from 'react-router';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('CartCard component', () => {
  it('renders cart card with correct data', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      itemsCount: 0,
    });
  });
});
