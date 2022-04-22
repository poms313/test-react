import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //given
  render(<App />);

  //when
  const linkElement = screen.getByText(/learn react/i);

  //then
  expect(linkElement).toBeInTheDocument();
});
