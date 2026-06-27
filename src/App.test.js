import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /cravings don't wait/i });
  expect(heading).toBeInTheDocument();
});

test('renders restaurants section', () => {
  render(<App />);
  const section = screen.getByRole('heading', { name: /restaurants near me/i });
  expect(section).toBeInTheDocument();
});

test('renders app promo section', () => {
  render(<App />);
  expect(screen.getByAltText(/hungry\? we've got you/i)).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  expect(screen.getByText(/2024 eatskart/i)).toBeInTheDocument();
});
