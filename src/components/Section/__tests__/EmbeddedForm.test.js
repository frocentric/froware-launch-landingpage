import React from 'react';
import { screen, render } from '@testing-library/react';
import EmbeddedForm from '../EmbeddedForm';

const testProps = {
  title: 'Test Title',
  body: ['test body'],
  children: 'children',
};

describe('<EmbeddedForm />', () => {
  it('should render the default state', () => {
    render(<EmbeddedForm {...testProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Test Title');
    expect(screen.getByTestId('section-text')).toHaveTextContent('test body');
  });
});
