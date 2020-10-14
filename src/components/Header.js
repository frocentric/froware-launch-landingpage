import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../assets/froware-logo.svg';

const StyledHeader = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const Header = ({ text }) => (
  <StyledHeader>
    <img src={Logo} alt='Froware Logo' />
    <Button text={text.headerButton} />
  </StyledHeader>
);

export default Header;
