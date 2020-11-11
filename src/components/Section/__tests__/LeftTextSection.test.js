import React from 'react';
import { screen, render } from '@testing-library/react';
import LeftTextSection from '../LeftTextSection';
import { sections } from '../../../fixtures/sections';

describe('<LeftTextSection />', () => {
  it('should render the default state', () => {
    render(<LeftTextSection {...sections[1]} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title 2');
    expect(screen.getAllByTestId('section-text')).toHaveLength(2);
    expect(screen.getAllByTestId('section-text')[0]).toHaveTextContent(
      'test body 1'
    );
    expect(screen.getAllByTestId('section-text')[1]).toHaveTextContent(
      'test body 2'
    );
    expect(screen.getByAltText('Test Title 2')).toBeInTheDocument();
  });
});
