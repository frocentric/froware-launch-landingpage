import React from 'react';
import { screen, render } from '@testing-library/react';
import CentredSection from '../CentredSection';
import { sections } from '../../../fixtures/sections';

describe('<CentredSection />', () => {
  it('should render the default state', () => {
    render(<CentredSection {...sections[0]} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title 1');
    expect(screen.getAllByTestId('section-text')).toHaveLength(2);
    expect(screen.getAllByTestId('section-text')[0]).toHaveTextContent(
      'test body 1'
    );
    expect(screen.getAllByTestId('section-text')[1]).toHaveTextContent(
      'test body 2'
    );
  });
});
