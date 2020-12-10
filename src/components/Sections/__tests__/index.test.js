import React from 'react';
import { screen, render } from '@testing-library/react';
import Sections from '../';
import { sections } from '../../../fixtures/sections';

describe('<Sections />', () => {
  it('should render the default state', () => {
    render(<Sections sections={sections} refs={() => { }} onClick={() => { }} />);

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(screen.getAllByTestId('section-text')).toHaveLength(6);
  });
});
