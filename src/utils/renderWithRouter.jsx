import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

export function renderWithRouter(module) {
  return render(<MemoryRouter>{module}</MemoryRouter>);
}
