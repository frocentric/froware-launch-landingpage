import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 176px;
  border: 2px solid #000;
  text-transform: uppercase;
  background: white;
  border-radius: 100px;
  height: 50px;
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

export default Button;
