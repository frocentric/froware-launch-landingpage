import React from 'react';
import styled from 'styled-components';
import Chevron from '../Chevron';

const StyledButton = styled.div`
  grid-column: 1/-1;
  padding-bottom: 25px;
`;

const Button = ({ onClick, sectionId }) => {
  return (
    <StyledButton onClick={() => onClick(sectionId + 1)}>
      <Chevron />
    </StyledButton>
  );
};

export default Button;
