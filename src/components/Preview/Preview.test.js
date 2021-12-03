import { render } from '@testing-library/react';
import Preview from './Preview';

test('renders correctly when there are selections', () => {
  const container = render(
    <Preview head="bird-head" middle="blue-middle" bottom="blue-pants" phrase="" />
  );
  expect(container).toMatchSnapshot();
});
