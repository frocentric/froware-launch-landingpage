import React from 'react';
import { render } from '@testing-library/react';
import Section from '../';
import { sections } from '../../../fixtures/sections';

describe('<Section />', () => {
  it('should render a section', () => {
    const section = render(<Section section={sections[1]} />);

    expect(section).toMatchSnapshot();
  });
});
