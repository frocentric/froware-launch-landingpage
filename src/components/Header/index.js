import React from 'react';
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

const Header = ({ text }) => (
  <StyledHeader>
    <StyledLogo src={Logo} alt='Froware Logo' />
    <Button text={text.headerButton} />
  </StyledHeader>
);

export default Header;
