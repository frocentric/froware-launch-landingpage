import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  grid-column: 2/12;
  width: 506px;
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
