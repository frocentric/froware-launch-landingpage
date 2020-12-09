import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (min-width: 1024px) {
    height: 60%;
  }
  @media (min-width: 1440px) {
    height: 80%;
  }
`;

const Image = styled.img`
  grid-column: 2/12;
  width: 100%;
  height: auto;
  margin-top: 40px;

  @media (min-width: 1024px) {
    grid-area: 1 / 1 / 2 / 9;
    margin-top: 0;
    align-self: end;
  }
`;

const TextWrapper = styled.div`
  grid-column: 2/12;
  text-align: center;

  @media (min-width: 1024px) {
    grid-area: 1 / 8 / 2 / 12;
    text-align: justify;
    align-self: start;
  }

  @media (min-width: 1440px) {
    grid-area: 1 / 8 / 2 / 12;
    text-align: justify;
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  text-align: centre;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const CentredSection = ({ title, body, image }) => (
  <Container>
    <Image src={image} alt={title} />
    <TextWrapper>
      <Title>{title}</Title>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </TextWrapper>
  </Container>
);

CentredSection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default CentredSection;
