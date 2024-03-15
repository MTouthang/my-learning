import { render } from '@testing-library/react';
import Greetings from '../components/Greetings';

test('renders correctly', () => {
  const { container } = render(<Greetings />);

  expect(container).toMatchSnapshot();
});
