import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../Logo';

const StyledHeader = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 76px;
`;

const StyledLogo = styled.span`
  grid-column: 2/5;
  svg {
    max-width: 170px;
  }

  @media (min-width: 1024px) {
    svg {
      width: 100%;
    }
  }
`;

const Header = ({ buttonText, onClick, lastSection }) => (
  <StyledHeader>
    <StyledLogo>
      <Logo fill='#000' />
    </StyledLogo>
    <Button text={buttonText} onClick={onClick} lastSection={lastSection} />
  </StyledHeader>
);

Header.propTypes = {
  buttonText: PropTypes.string,
};

export default Header;
