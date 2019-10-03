import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Notification from '../components/Notification';

test('should test Notification component', () => {
  const label = 'Snpt copied to clipboard 🎉';
  let notification = null;
  const { getByText } = render(
    <Notification onRef={ref => (notification = ref)} />
  );

  expect(getByText(label)).toBeInTheDocument();
});
