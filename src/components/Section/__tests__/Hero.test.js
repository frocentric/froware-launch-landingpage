import React from 'react';
import { screen, render } from '@testing-library/react';
import Hero from '../Hero';
import { sections } from '../../../fixtures/sections';

describe('<Hero />', () => {
  it('should render the default state', () => {
    render(<Hero {...sections[0]} />);

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
