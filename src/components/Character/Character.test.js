import { render } from '@testing-library/react';
import Character from './Character';

test('renders correctly when there are selections', () => {
  const container = render(<Character />);
  expect(container).toMatchSnapshot();
});
