import React from 'react';
import { render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Quiz from "../pages/Quiz";

test('Quiz render', () => {
  const { asFragment } = render(<Quiz />, { wrapper: BrowserRouter });
  expect(asFragment()).toMatchSnapshot();
});
