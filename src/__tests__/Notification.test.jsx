import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Notification from '../components/Notification.jsx';

describe('Notification', () => {
  test('renders the default message', () => {
    const label = 'Snpt copied to clipboard 🎉';
    const { getByText } = render(
      <Notification onRef={() => {}} />
    );

    expect(getByText(label)).toBeInTheDocument();
  });
});
