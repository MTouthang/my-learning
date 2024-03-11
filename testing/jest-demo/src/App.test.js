import { render, screen } from '@testing-library/react';

import App from './App';

it('renders hardcoded text', () => {
  render(<App />);

  // Assert that the hardcoded text is displayed
  const displayedText = screen.getByText('PW skills');
  expect(displayedText).toBeInTheDocument();
});
