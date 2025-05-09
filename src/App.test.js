import { render, screen } from '@testing-library/react';
import App from './App';

// Mock de react-router-dom para evitar errores en tests
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>
}));

test('renders header with title text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Propuesta de Transformación Digital/i);
  expect(headerElement).toBeInTheDocument();
});
