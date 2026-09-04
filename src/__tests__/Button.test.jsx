import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Button from '../components/Button.jsx';

describe('Button', () => {
  test('renders the label', () => {
    const label = 'react';
    const { getByText } = render(<Button label={label} />);

    expect(getByText(label)).toBeInTheDocument();
  });
});
