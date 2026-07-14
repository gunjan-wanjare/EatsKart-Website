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
  expect(screen.getByText(/2026 eatskart/i)).toBeInTheDocument();
});

test('renders privacy policy page from url', () => {
  window.history.pushState({}, '', '/privacy-policy');
  render(<App />);
  expect(screen.getByRole('heading', { name: /privacy policy/i })).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});

test('renders terms page from url', () => {
  window.history.pushState({}, '', '/terms-and-conditions');
  render(<App />);
  expect(screen.getByRole('heading', { name: /terms and conditions/i })).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});

test('renders refund policy page from url', () => {
  window.history.pushState({}, '', '/refund-policy');
  render(<App />);
  expect(screen.getByRole('heading', { name: /refund policy/i })).toBeInTheDocument();
  window.history.pushState({}, '', '/');
});
