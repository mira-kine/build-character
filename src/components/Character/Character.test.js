import { render } from '@testing-library/react';
import Character from './Character';

test('renders the Character display', () => {
  const container = render(<Character />);
  expect(container).toMatchSnapshot();
});
