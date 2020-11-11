import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from '../';
import { footer } from '../../../fixtures/footer';

describe('<Footer />', () => {
  it('should render the default state', () => {
    render(<Footer content={footer} />);

    expect(screen.getByTestId('Froware Logo')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });
});
