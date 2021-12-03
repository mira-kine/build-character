import { render } from '@testing-library/react';
import Preview from './Preview';

test('renders the Preview display', () => {
  const container = render(<Preview head="no-head" middle="blue-middle" bottom="blue-pants" />);
  expect(container).toMatchSnapshot();
});
