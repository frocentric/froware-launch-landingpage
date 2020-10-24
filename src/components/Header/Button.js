import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: white;
  border: 2px solid #000;
  border-radius: 100px;
  grid-column: 10/12;
  height: 50px;
  justify-self: end;
  text-transform: uppercase;
  width: 176px;
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

export default Button;
