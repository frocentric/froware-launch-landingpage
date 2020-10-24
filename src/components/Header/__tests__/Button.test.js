import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('should render the default text', () => {
    const button = render(<Button text='button text' />);

    expect(button).toMatchSnapshot();
  });
});
