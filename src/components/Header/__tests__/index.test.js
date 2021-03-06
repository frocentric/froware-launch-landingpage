import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from '../';

describe('<Header />', () => {
  it('should render the default state', () => {
    render(<Header buttonText='text' />);
    expect(screen.getByTestId('Frocentric Logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('text');
  });
});
