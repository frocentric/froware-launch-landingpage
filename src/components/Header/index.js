import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../../assets/froware-logo.svg';

const StyledHeader = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 76px;
`;

const StyledLogo = styled.img`
  grid-column: 2/5;
`;

const Header = ({ buttonText }) => (
  <StyledHeader>
    <StyledLogo src={Logo} alt='Froware Logo' />
    <Button text={buttonText} />
  </StyledHeader>
);

Header.propTypes = {
  buttonText: PropTypes.string,
};

export default Header;
