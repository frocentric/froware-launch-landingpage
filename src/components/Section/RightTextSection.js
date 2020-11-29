import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  grid-column: 2/12;

  @media (min-width: 1024px) {
    grid-column: 6/12;
  }
`;

const Image = styled.img`
  grid-column: 2/12;
  max-width: 100%;
  padding-top: 30px;

  @media (min-width: 1024px) {
    grid-column: 2/6;
    padding: 80px 0;
  }
`;

const RightTextSection = ({ title, body, image }) => {
  return (
    <>
      <Image src={image} alt={title} />
      <TextWrapper>
        <h1>{title}</h1>
        {body.map((text, index) => (
          <p key={`${index}-${title}`} data-testid='section-text'>
            {text}
          </p>
        ))}
      </TextWrapper>
    </>
  );
};

RightTextSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default RightTextSection;
