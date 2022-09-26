import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';

test('Home: button', () => {
  render(<Home />, { wrapper: BrowserRouter });
  const button = screen.getByText(/Start/i);
  expect(button).toBeInTheDocument();
});
