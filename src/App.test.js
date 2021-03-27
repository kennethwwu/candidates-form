import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  await act(async () => render(<App />));
  const listElement = screen.getByText(/ken/i);
  expect(listElement).toBeInTheDocument();
});
