import React from 'react';
import styled from 'styled-components';
import Chevron from '../Chevron';

const StyledButton = styled.div`
  grid-column: 1/-1;
  cursor: pointer;
  padding: 25px 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const Button = ({ onClick, sectionId }) => {
  return (
    <StyledButton onClick={() => onClick(sectionId + 1)}>
      <Chevron />
    </StyledButton>
  );
};

export default Button;
