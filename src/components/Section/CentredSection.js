import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  grid-column: 2/12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    /* display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
    align-items: center;
    height: 745px; */
  }
`;

const CentredSection = ({ title, body }) => (
  <Container>
    <Title>{title}</Title>
    {body.map((text, index) => (
      <p key={`${index}-${title}`} data-testid='section-text'>
        {text}
      </p>
    ))}
  </Container>
);

CentredSection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default CentredSection;
