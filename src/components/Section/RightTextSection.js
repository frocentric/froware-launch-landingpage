import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  grid-column: 6/12;
`;

const Image = styled.img`
  grid-column: 2/6;
`;

const RightTextSection = ({ title, body, image }) => (
  <>
    <Image src={image} alt={title} />
    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`}>{text}</p>
      ))}
    </TextWrapper>
  </>
);

RightTextSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default RightTextSection;
