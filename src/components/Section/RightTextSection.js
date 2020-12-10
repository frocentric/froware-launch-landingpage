import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  grid-column: 2/12;

  @media (min-width: 1024px) {
    grid-column: 7/12;
  }
`;

const Image = styled.img`
  grid-column: 2/12;
  width: 50%;
  padding: 40px 0 30px 0;
  justify-self: center;

  @media (min-width: 768px) {
    grid-column: 2/12;
    width: 50%;
  }

  @media (min-width: 1024px) {
    grid-column: 2/6;
    width: 80%;
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  align-items: center;
`;

const RightTextSection = ({ title, body, image }) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <TextWrapper>
        <h1>{title}</h1>
        {body.map((text, index) => (
          <p key={`${index}-${title}`} data-testid='section-text'>
            {text}
          </p>
        ))}
      </TextWrapper>
    </Container>
  );
};

RightTextSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default RightTextSection;
