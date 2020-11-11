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
`;

const Header = ({ buttonText }) => (
  <StyledHeader>
    <StyledLogo>
      <Logo fill='#000' />
    </StyledLogo>
    <Button text={buttonText} />
  </StyledHeader>
);

Header.propTypes = {
  buttonText: PropTypes.string,
};

export default Header;
