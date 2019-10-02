import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../components/Button';

test('should test Button component', () => {
  const label = 'react';
  const { getByText } = render(<Button label={label} />);

  expect(getByText(label)).toBeInTheDocument();
});
